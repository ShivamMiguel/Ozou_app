import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { generateVAPIDKeys, sendNotification, setVapidDetails } from "web-push";

type Keys = { publicKey: string; privateKey: string };

export type StoredSubscription = {
  workspaceId: string;
  endpoint: string;
  keys: { p256dh: string; auth: string };
};

type Store = { vapid?: Keys; subscriptions: StoredSubscription[] };

const filePath = path.join(process.cwd(), ".data", "push.json");
let queue: Promise<unknown> = Promise.resolve();

async function readStore(): Promise<Store> {
  try {
    const parsed = JSON.parse(await readFile(filePath, "utf8")) as Store;
    return { subscriptions: parsed.subscriptions ?? [], vapid: parsed.vapid };
  } catch {
    return { subscriptions: [] };
  }
}

function updateStore<T>(change: (store: Store) => T) {
  const run = queue.then(async () => {
    const store = await readStore();
    const result = change(store);
    await mkdir(path.dirname(filePath), { recursive: true });
    await writeFile(filePath, JSON.stringify(store));
    return result;
  });
  queue = run.then(() => undefined, () => undefined);
  return run;
}

function allowedEndpoint(endpoint: string) {
  try {
    const host = new URL(endpoint).hostname;
    return ["googleapis.com", "mozilla.com", "push.apple.com", "windows.com"].some((suffix) => host === suffix || host.endsWith(`.${suffix}`));
  } catch {
    return false;
  }
}

export async function vapidPublicKey() {
  const keys = await ensureKeys();
  return keys.publicKey;
}

function ensureKeys() {
  if (process.env.VAPID_PUBLIC_KEY && process.env.VAPID_PRIVATE_KEY) {
    return Promise.resolve({ publicKey: process.env.VAPID_PUBLIC_KEY, privateKey: process.env.VAPID_PRIVATE_KEY });
  }
  return updateStore((store) => {
    const next = store.vapid ?? generateVAPIDKeys();
    store.vapid = next;
    return next;
  });
}

export function saveSubscription(subscription: StoredSubscription) {
  if (!allowedEndpoint(subscription.endpoint) || !subscription.keys.p256dh || !subscription.keys.auth) return Promise.resolve(false);
  return updateStore((store) => {
    store.subscriptions = store.subscriptions.filter((item) => item.endpoint !== subscription.endpoint);
    store.subscriptions.push(subscription);
    return true;
  });
}

export async function notifyWorkspace(workspaceId: string, payload: { title: string; body: string; url: string; tag: string }) {
  const keys = await ensureKeys();
  setVapidDetails(process.env.VAPID_SUBJECT || "mailto:ola@ozou.ao", keys.publicKey, keys.privateKey);
  const store = await readStore();
  const mine = store.subscriptions.filter((item) => item.workspaceId === workspaceId);
  await Promise.all(
    mine.map(async (subscription) => {
      try {
        await sendNotification({ endpoint: subscription.endpoint, keys: subscription.keys }, JSON.stringify(payload));
      } catch (error) {
        const status = (error as { statusCode?: number }).statusCode;
        if (status === 404 || status === 410) {
          await updateStore((current) => {
            current.subscriptions = current.subscriptions.filter((item) => item.endpoint !== subscription.endpoint);
          });
        }
      }
    }),
  );
}
