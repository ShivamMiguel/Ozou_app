import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

export type InstagramConnection = {
  workspaceId: string;
  igUserId: string;
  username: string;
  accessToken: string;
  expiresAt: number;
};

export type InstagramInbound = {
  id: string;
  workspaceId: string;
  senderId: string;
  senderName: string;
  body: string;
  at: string;
};

type Store = {
  connections: InstagramConnection[];
  messages: InstagramInbound[];
};

const filePath = path.join(process.cwd(), ".data", "instagram.json");
let queue: Promise<unknown> = Promise.resolve();

async function readStore(): Promise<Store> {
  try {
    return JSON.parse(await readFile(filePath, "utf8")) as Store;
  } catch {
    return { connections: [], messages: [] };
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

export function saveConnection(connection: InstagramConnection) {
  return updateStore((store) => {
    store.connections = store.connections.filter((item) => item.workspaceId !== connection.workspaceId && item.igUserId !== connection.igUserId);
    store.connections.push(connection);
  });
}

export function connectionForWorkspace(workspaceId: string) {
  return updateStore((store) => store.connections.find((item) => item.workspaceId === workspaceId) ?? null);
}

export function connectionForInstagramUser(igUserId: string) {
  return updateStore((store) => store.connections.find((item) => item.igUserId === igUserId) ?? null);
}

export function rememberInbound(message: InstagramInbound) {
  return updateStore((store) => {
    if (store.messages.some((item) => item.id === message.id)) return false;
    store.messages.push(message);
    return true;
  });
}

export function inboxForWorkspace(workspaceId: string) {
  return updateStore((store) => store.messages.filter((item) => item.workspaceId === workspaceId));
}

export async function pullInstagramInbox(workspaceId: string) {
  const connection = await connectionForWorkspace(workspaceId);
  if (!connection) return [];
  try {
    const url = new URL("https://graph.instagram.com/v21.0/me/conversations");
    url.searchParams.set("platform", "instagram");
    url.searchParams.set("fields", "participants,messages.limit(15){id,message,from,created_time}");
    url.searchParams.set("access_token", connection.accessToken);
    const response = await fetch(url);
    if (!response.ok) return inboxForWorkspace(workspaceId);
    const payload = (await response.json()) as {
      data?: Array<{
        participants?: { data?: Array<{ id?: string; username?: string }> };
        messages?: { data?: Array<{ id?: string; message?: string; from?: { id?: string; username?: string }; created_time?: string }> };
      }>;
    };
    for (const conversation of payload.data ?? []) {
      for (const message of conversation.messages?.data ?? []) {
        const senderId = message.from?.id;
        if (!message.id || !message.message || !senderId || senderId === connection.igUserId) continue;
        const senderName = message.from?.username || conversation.participants?.data?.find((item) => item.id === senderId)?.username || "Cliente Instagram";
        await rememberInbound({
          id: message.id,
          workspaceId,
          senderId,
          senderName,
          body: message.message,
          at: message.created_time || new Date().toISOString(),
        });
      }
    }
  } catch {
    return inboxForWorkspace(workspaceId);
  }
  return inboxForWorkspace(workspaceId);
}

export async function sendInstagramMessage(workspaceId: string, recipientId: string, text: string) {
  const connection = await connectionForWorkspace(workspaceId);
  if (!connection) return false;
  const url = new URL("https://graph.instagram.com/v21.0/me/messages");
  url.searchParams.set("access_token", connection.accessToken);
  const response = await fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ recipient: { id: recipientId }, message: { text } }),
  });
  return response.ok;
}
