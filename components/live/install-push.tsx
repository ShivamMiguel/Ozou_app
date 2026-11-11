"use client";

import { useEffect, useState } from "react";

type InstallPrompt = Event & { prompt: () => Promise<void>; userChoice: Promise<{ outcome: string }> };

function standalone() {
  return window.matchMedia("(display-mode: standalone)").matches || (navigator as Navigator & { standalone?: boolean }).standalone === true;
}

function iosDevice() {
  return /iphone|ipad|ipod/i.test(navigator.userAgent);
}

function keyBytes(value: string) {
  const padded = value + "=".repeat((4 - (value.length % 4)) % 4);
  const binary = atob(padded.replace(/-/g, "+").replace(/_/g, "/"));
  return Uint8Array.from(binary, (char) => char.charCodeAt(0));
}

export async function showLocalMessage(message: { id: string; senderName: string; body: string }) {
  if (!document.hidden || !("serviceWorker" in navigator) || !("Notification" in window) || Notification.permission !== "granted") return;
  const registration = await navigator.serviceWorker.ready;
  await registration.showNotification(message.senderName, {
    body: message.body,
    icon: "/icons/icon-192.png",
    tag: message.id,
    data: { url: "/inbox" },
  });
}

export function InstallPush({ workspaceId }: { workspaceId: string }) {
  const [installed, setInstalled] = useState(false);
  const [ios, setIos] = useState(false);
  const [prompt, setPrompt] = useState<InstallPrompt | null>(null);
  const [permission, setPermission] = useState<NotificationPermission | "unsupported">("default");
  const [subscribed, setSubscribed] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    setInstalled(standalone());
    setIos(iosDevice());
    setDismissed(window.sessionStorage.getItem("ozou.install.dismiss") === "1");
    setPermission("Notification" in window ? Notification.permission : "unsupported");
    if ("serviceWorker" in navigator) navigator.serviceWorker.register("/sw.js").catch(() => undefined);
    const onPrompt = (event: Event) => {
      event.preventDefault();
      setPrompt(event as InstallPrompt);
    };
    window.addEventListener("beforeinstallprompt", onPrompt);
    return () => window.removeEventListener("beforeinstallprompt", onPrompt);
  }, []);

  useEffect(() => {
    if (permission !== "granted" || subscribed) return;
    let stop = false;
    subscribe(workspaceId, false)
      .then((ok) => {
        if (!stop && ok) setSubscribed(true);
      })
      .catch(() => undefined);
    return () => {
      stop = true;
    };
  }, [permission, subscribed, workspaceId]);

  async function install() {
    if (!prompt) return;
    await prompt.prompt();
    setPrompt(null);
    setInstalled(standalone());
  }

  async function enable() {
    if (!("Notification" in window)) return;
    setBusy(true);
    const next = await Notification.requestPermission();
    setPermission(next);
    if (next === "granted") setSubscribed(await subscribe(workspaceId, true));
    setBusy(false);
  }

  const needInstall = !installed && (ios || Boolean(prompt));
  const needPush = permission !== "granted" || !subscribed;
  if (dismissed || (!needInstall && !needPush) || (permission === "unsupported" && !needInstall)) return null;

  const copy = ios && !installed
    ? "No iPhone, toque em Partilhar e escolha Adicionar ao Ecrã Principal. Abra esse ícone e ative os avisos."
    : permission === "denied"
      ? "Os avisos estão bloqueados. Pode voltar a permiti-los nas definições do telemóvel."
      : prompt && !installed
        ? "Instale a OZOU neste telemóvel e receba um aviso sempre que chegar uma mensagem."
        : "Ative os avisos para receber cada mensagem nova, mesmo com a OZOU fechada.";

  return (
    <div className="mx-3 mt-3 shrink-0 rounded-2xl border border-[#E4E7EC] bg-[#F7F8F4] p-3">
      <div className="flex items-start justify-between gap-3">
        <p className="text-xs font-bold text-[#141416]">OZOU neste telemóvel</p>
        <button
          className="text-[11px] text-[#717680]"
          type="button"
          aria-label="Fechar"
          onClick={() => {
            window.sessionStorage.setItem("ozou.install.dismiss", "1");
            setDismissed(true);
          }}
        >
          Fechar
        </button>
      </div>
      <p className="mt-1 text-[11px] leading-relaxed text-[#475467]">{copy}</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {prompt && !installed ? (
          <button className="rounded-full bg-[#141416] px-3 py-1.5 text-[11px] font-semibold text-white" type="button" onClick={() => void install()}>
            Instalar
          </button>
        ) : null}
        {permission !== "denied" && permission !== "unsupported" && !subscribed ? (
          <button className="rounded-full border border-[#D0D5DD] bg-white px-3 py-1.5 text-[11px] font-semibold text-[#141416] disabled:opacity-60" type="button" disabled={busy || (ios && !installed)} onClick={() => void enable()}>
            {busy ? "A ativar" : "Ativar avisos"}
          </button>
        ) : null}
      </div>
    </div>
  );
}

async function subscribe(workspaceId: string, confirm: boolean) {
  if (!("serviceWorker" in navigator) || !("PushManager" in window)) return false;
  const response = await fetch("/api/push/key");
  const body = (await response.json()) as { publicKey?: string };
  if (!body.publicKey) return false;
  const registration = await navigator.serviceWorker.ready;
  const existing = await registration.pushManager.getSubscription();
  const subscription = existing ?? await registration.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: keyBytes(body.publicKey),
  });
  const saved = await fetch("/api/push/subscribe", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ workspaceId, confirm, subscription: subscription.toJSON() }),
  });
  return saved.ok;
}
