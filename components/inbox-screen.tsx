"use client";

import { useEffect, useLayoutEffect, useRef, useState, type FormEvent } from "react";
import type { CSSProperties } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { ChannelKind } from "@/lib/api/types";
import { channelBadge, clock, formatWhen } from "@/lib/api/format";
import { InstallPush, showLocalMessage } from "@/components/live/install-push";
import { messageCounts } from "@/components/live/wallet";
import { useOzou } from "@/components/live/use-ozou";

const jakartaScope = {
  "--font-sans": 'var(--font-jakarta), "Plus Jakarta Sans", sans-serif',
  fontFamily: 'var(--font-jakarta), "Plus Jakarta Sans", sans-serif',
} as CSSProperties;

const channelOptions: Array<ChannelKind | "todos"> = ["todos", "WhatsApp", "Instagram", "SMS", "E-mail"];
const PAGE = 6;

export function InboxScreen({ compose = false }: { compose?: boolean }) {
  const { api, db } = useOzou();
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [unreadOnly, setUnreadOnly] = useState(false);
  const [channel, setChannel] = useState<ChannelKind | "todos">("todos");
  const [selectedId, setSelectedId] = useState("cv-sofia");
  const [instagramAccount, setInstagramAccount] = useState<string | null>(null);
  const [sendError, setSendError] = useState("");
  const [phoneView, setPhoneView] = useState<"list" | "thread">("list");
  const [writing, setWriting] = useState(false);
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const canal = params.get("canal");
    if (canal === "WhatsApp" || canal === "Instagram" || canal === "SMS" || canal === "E-mail") setChannel(canal);
    const stored = window.sessionStorage.getItem("ozou.openConversation");
    if (stored) {
      setSelectedId(stored);
      setPhoneView("thread");
      window.sessionStorage.removeItem("ozou.openConversation");
    }
    const workspace = db.activeWorkspaceId;
    let stop = false;
    async function sync() {
      const session = (await fetch(`/api/instagram/session?workspace=${encodeURIComponent(workspace)}`).then((response) => response.json())) as { connected?: boolean; username?: string | null };
      if (stop) return;
      if (!session.connected || !session.username) {
        setInstagramAccount(null);
        return;
      }
      setInstagramAccount(session.username);
      const handle = `@${session.username}`;
      const current = api.peek().channels.find((item) => item.kind === "Instagram");
      if (current?.handle !== handle || current.status !== "connected") await api.connectChannel("Instagram", handle);
      const inbox = (await fetch(`/api/instagram/inbox?workspace=${encodeURIComponent(workspace)}`).then((response) => response.json())) as { messages?: Array<{ id: string; senderId: string; senderName: string; body: string }> };
      const known = new Set(api.peek().messages.map((item) => item.id));
      for (const message of inbox.messages ?? []) {
        const fresh = !known.has(message.id);
        await api.receiveInbound({ channel: "Instagram", name: message.senderName, handle: message.senderId, body: message.body, externalId: message.id });
        if (fresh) void showLocalMessage({ id: message.id, senderName: message.senderName, body: message.body });
      }
    }
    sync().catch(() => undefined);
    const timer = window.setInterval(() => { sync().catch(() => undefined); }, 12000);
    return () => {
      stop = true;
      window.clearInterval(timer);
    };
  }, [api, db.activeWorkspaceId]);
  const [draft, setDraft] = useState("");
  const [channelsOpen, setChannelsOpen] = useState(false);
  const filterKey = `${search}|${unreadOnly}|${channel}`;
  const [listWindow, setListWindow] = useState({ key: filterKey, limit: PAGE });
  if (listWindow.key !== filterKey) setListWindow({ key: filterKey, limit: PAGE });
  const [messageLimit, setMessageLimit] = useState(PAGE);
  const [loadingList, setLoadingList] = useState(false);
  const [loadingMessages, setLoadingMessages] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const listSentinel = useRef<HTMLDivElement>(null);
  const threadRef = useRef<HTMLDivElement>(null);
  const olderSentinel = useRef<HTMLDivElement>(null);
  const stickToBottom = useRef(true);
  const pendingScroll = useRef<{ height: number; top: number } | null>(null);
  const listLock = useRef(false);
  const messageLock = useRef(false);
  const conversations = api.listConversations({ search, unreadOnly, channel });
  const openCount = db.conversations.filter((item) => item.status === "open").length;
  const unreadCount = db.conversations.filter((item) => item.status === "open" && item.unread > 0).length;
  const connected = db.channels.filter((item) => item.status === "connected").length;
  const selected = db.conversations.find((item) => item.id === selectedId) ?? conversations[0];
  const contact = db.contacts.find((item) => item.id === selected?.contactId);
  const messages = selected ? api.messagesOf(selected.id) : [];
  const visibleConversations = conversations.slice(0, listWindow.limit);
  const hasMoreConversations = listWindow.limit < conversations.length;
  const visibleMessages = messages.slice(Math.max(0, messages.length - messageLimit));
  const hasOlderMessages = messageLimit < messages.length;

  useEffect(() => {
    const root = listRef.current;
    const target = listSentinel.current;
    if (!root || !target || !hasMoreConversations) return;
    const observer = new IntersectionObserver((entries) => {
      if (!entries.some((entry) => entry.isIntersecting) || listLock.current) return;
      listLock.current = true;
      setLoadingList(true);
      window.setTimeout(() => {
        setListWindow((current) => ({ ...current, limit: current.limit + PAGE }));
        setLoadingList(false);
        listLock.current = false;
      }, 280);
    }, { root, rootMargin: "120px" });
    observer.observe(target);
    return () => observer.disconnect();
  }, [hasMoreConversations, listWindow.limit, conversations.length]);

  useEffect(() => {
    const root = threadRef.current;
    const target = olderSentinel.current;
    if (!root || !target || !hasOlderMessages) return;
    const observer = new IntersectionObserver((entries) => {
      if (!entries.some((entry) => entry.isIntersecting) || messageLock.current) return;
      messageLock.current = true;
      pendingScroll.current = { height: root.scrollHeight, top: root.scrollTop };
      stickToBottom.current = false;
      setLoadingMessages(true);
      window.setTimeout(() => {
        setMessageLimit((current) => current + PAGE);
        setLoadingMessages(false);
        messageLock.current = false;
      }, 280);
    }, { root, rootMargin: "80px" });
    observer.observe(target);
    return () => observer.disconnect();
  }, [hasOlderMessages, messageLimit, selected?.id]);

  useLayoutEffect(() => {
    const root = threadRef.current;
    if (!root) return;
    const pending = pendingScroll.current;
    if (pending && root.scrollHeight !== pending.height) {
      root.scrollTop = root.scrollHeight - pending.height + pending.top;
      pendingScroll.current = null;
      return;
    }
    if (!pending && stickToBottom.current) root.scrollTop = root.scrollHeight;
  }, [selected?.id, visibleMessages.at(-1)?.id, phoneView]);

  function openConversation(id: string) {
    stickToBottom.current = true;
    pendingScroll.current = null;
    setMessageLimit(PAGE);
    setSelectedId(id);
    setPhoneView("thread");
  }

  async function send() {
    if (!selected || !draft.trim()) return;
    const text = draft.trim();
    if (selected.channel === "Instagram") {
      const recipientId = contact?.id.startsWith("ig-") ? contact.id.slice(3) : "";
      if (!recipientId) {
        setSendError("Esta conversa ainda não chegou do Instagram deste negócio.");
        return;
      }
      const response = await fetch("/api/instagram/send", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ workspaceId: db.activeWorkspaceId, recipientId, text }),
      });
      if (!response.ok) {
        setSendError("O Instagram não aceitou a resposta. Só dá para responder a quem escreveu primeiro para esta conta.");
        return;
      }
    }
    setSendError("");
    stickToBottom.current = true;
    await api.sendMessage(selected.id, text);
    setDraft("");
  }

  async function suggest() {
    if (!selected) return;
    setDraft(await api.suggestReply(selected.id));
  }

  return (
    <div className="app-shell relative h-dvh w-full overflow-hidden flex bg-[#FAFAFA] text-[#141416] antialiased ozou-inbox" data-phone-view={phoneView} style={jakartaScope}>
      <style>{`
        .ozou-inbox ::-webkit-scrollbar { width: 5px; height: 5px; }
        .ozou-inbox ::-webkit-scrollbar-track { background: transparent; }
        .ozou-inbox ::-webkit-scrollbar-thumb { background: #E2E8F0; border-radius: 9999px; }
        .ozou-inbox > main { overflow: hidden !important; }
        .ozou-inbox-body { flex: 1 1 auto !important; min-height: 0 !important; overflow: hidden !important; }
        .ozou-inbox-scroll { flex: 1 1 auto; min-height: 0 !important; overflow-x: hidden !important; overflow-y: auto !important; overscroll-behavior: contain; }
        @media (max-width: 767px) {
          .ozou-inbox > aside,
          .ozou-inbox-desk-header,
          .ozou-inbox-desk-only,
          .ozou-inbox-details,
          .ozou-desk-composer { display: none !important; }
          .ozou-phone-list { display: block !important; }
          .ozou-phone-thread,
          .ozou-phone-composer,
          .ozou-avatar { display: flex !important; }
          .ozou-inbox-body { padding: 0 !important; gap: 0 !important; background: #fff !important; }
          .ozou-inbox-list,
          .ozou-inbox-thread {
            width: 100% !important;
            max-width: 100% !important;
            border: 0 !important;
            border-radius: 0 !important;
            flex: 1 1 auto !important;
          }
          .ozou-inbox[data-phone-view="list"] .ozou-inbox-thread { display: none !important; }
          .ozou-inbox[data-phone-view="thread"] .ozou-inbox-list { display: none !important; }
          .ozou-inbox-list input,
          .ozou-phone-composer textarea { font-size: 16px; }
          .ozou-inbox-list input { min-height: 44px; }
          .ozou-phone-list .overflow-x-auto { scrollbar-width: none; }
          .ozou-phone-list .overflow-x-auto::-webkit-scrollbar { display: none; }
        }
      `}</style>
      <aside className="w-[230px] flex-shrink-0 h-full bg-white border-r border-[#EFEFEF] flex flex-col justify-between p-4 overflow-hidden z-20" inert={compose}>
        <div className="flex flex-col space-y-6">
          <div className="px-2 pt-1 flex items-center space-x-1.5">
            <Link href="/" className="text-[23px] font-extrabold tracking-tight text-[#111]">
              OZOU
            </Link>
            <span className="w-[7px] h-[7px] rounded-full bg-[#C8EB3E] inline-block mb-2" />
          </div>
          <div className="bg-[#F8F9FA] hover:bg-[#F2F4F7] transition-colors rounded-xl p-3 flex items-center justify-between cursor-pointer border border-[#F0F2F4]">
            <div>
              <div className="text-[13px] font-bold text-[#141416] leading-tight">Studio Workspace</div>
              <div className="text-[11px] text-[#717680] font-normal mt-0.5">Plano Pro</div>
            </div>
            <svg className="w-4 h-4 text-[#717680]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
          <nav className="space-y-1">
            <div className="text-[10px] font-bold tracking-wider text-[#98A2B3] uppercase px-2 mb-2">Espaço de trabalho</div>
            <Link className="flex items-center justify-between px-3 py-2.5 rounded-xl bg-[#141416] text-white text-[13px] font-medium shadow-sm" href="/inbox">
              <div className="flex items-center space-x-2.5">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
                </svg>
                <span className="font-semibold text-xs tracking-tight">Inbox unificado</span>
              </div>
              <span className="text-[11px] font-semibold bg-[#222429] text-[#C4E73D] px-2 py-0.5 rounded-full">12</span>
            </Link>
            <Link className="flex items-center space-x-2.5 px-3 py-2 rounded-xl text-[#535862] hover:bg-[#F8F9FA] hover:text-[#141416] text-xs font-medium transition-colors" href="/automacao-campanhas">
              <svg className="w-4 h-4 text-[#717680]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
              </svg>
              <span className="leading-tight">
                Automação &
                <br />
                campanhas
              </span>
            </Link>
            <Link className="flex items-center space-x-2.5 px-3 py-2 rounded-xl text-[#535862] hover:bg-[#F8F9FA] hover:text-[#141416] text-xs font-medium transition-colors" href="/insights">
              <svg className="w-4 h-4 text-[#717680]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
              </svg>
              <span>Insights & métricas</span>
            </Link>
            <Link className="flex items-center space-x-2.5 px-3 py-2 rounded-xl text-[#535862] hover:bg-[#F8F9FA] hover:text-[#141416] text-xs font-medium transition-colors" href="/contactos">
              <svg className="w-4 h-4 text-[#717680]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
              </svg>
              <span>Contactos</span>
            </Link>
            <Link className="flex items-center space-x-2.5 px-3 py-2 rounded-xl text-[#535862] hover:bg-[#F8F9FA] hover:text-[#141416] text-xs font-medium transition-colors" href="/inicio">
              <svg className="w-4 h-4 text-[#717680]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
              </svg>
              <span>Início</span>
            </Link>
            <Link className="flex items-center space-x-2.5 px-3 py-2 rounded-xl text-[#535862] hover:bg-[#F8F9FA] hover:text-[#141416] text-xs font-medium transition-colors" href="/empresas">
              <svg className="w-4 h-4 text-[#717680]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
              </svg>
              <span>Empresas</span>
            </Link>
          </nav>
        </div>
        <div className="space-y-4 pt-4">
          <div className="bg-[#F3F4EE] rounded-2xl p-3.5 relative overflow-hidden">
            <div className="mb-2 text-[#24272C]">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
            <div className="text-[13px] font-bold text-[#141416] leading-snug">
              Menos tarefas.
              <br />
              Mais conversas.
            </div>
            <a className="inline-flex items-center text-[10px] font-medium text-[#717680] mt-3 hover:text-black" href="#">
              A IA trata do resto.
              <span className="ml-1 text-[9px]">↗</span>
            </a>
          </div>
          <div className="space-y-1">
            <a className="flex items-center space-x-2.5 px-2 py-1.5 text-xs text-[#535862] hover:text-[#141416] transition-colors" href="#">
              <svg className="w-4 h-4 text-[#717680]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
              </svg>
              <span>Ajuda e suporte</span>
            </a>
            <Link className="flex items-center space-x-2.5 px-2 py-1.5 text-xs text-[#535862] hover:text-[#141416] transition-colors" href="/definicoes/equipa">
              <svg className="w-4 h-4 text-[#717680]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
              </svg>
              <span>Definições</span>
            </Link>
          </div>
          <div className="pt-3 border-t border-[#F2F4F7] flex items-center justify-between cursor-pointer px-1">
            <div>
              <div className="text-[12px] font-bold text-[#141416]">Mariana Costa</div>
              <div className="text-[10px] text-[#717680]">Administradora</div>
            </div>
            <svg className="w-3.5 h-3.5 text-[#717680]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </aside>

      <main className="flex-1 flex flex-col min-w-0 h-full overflow-hidden bg-white" inert={compose}>
        <header className="ozou-inbox-desk-header px-6 pt-5 pb-4 border-b border-[#F0F2F4] flex-shrink-0">
          <div className="flex items-center justify-between mb-1">
            <nav className="flex items-center space-x-1.5 text-xs text-[#717680] font-normal">
              <span>Workspace</span>
              <span className="text-[#D0D5DD]">/</span>
              <span className="text-[#475467]">Inbox unificado</span>
            </nav>
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#EFF8E2] text-[#426815] text-[11px] font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4E8B14]" />
              <span>{connected} canais conectados</span>
            </div>
          </div>
          <div className="mb-4">
            <h1 className="text-2xl font-bold tracking-tight text-[#141416]">Inbox unificado</h1>
            <p className="text-xs text-[#717680] mt-0.5">Todas as conversas, no mesmo lugar.</p>
          </div>
          <div className="flex items-center justify-between pt-1">
            <div className="flex items-center space-x-2">
              <button className={`${unreadOnly ? "bg-white border border-[#E4E7EC] text-[#344054]" : "bg-[#141416] text-white"} px-4 py-1.5 rounded-full text-xs font-semibold flex items-center space-x-2`} type="button" onClick={() => setUnreadOnly(false)}>
                <span>Todas as conversas</span>
                <span className="font-normal opacity-90 text-[11px]">{openCount}</span>
              </button>
              <button className={`${unreadOnly ? "bg-[#141416] text-white" : "bg-white border border-[#E4E7EC] text-[#344054]"} px-4 py-1.5 rounded-full text-xs font-medium flex items-center space-x-2`} type="button" onClick={() => setUnreadOnly(true)}>
                <span>Não lidas</span>
                <span className="font-semibold text-[11px]">{unreadCount}</span>
              </button>
            </div>
            <div className="text-xs text-[#717680] hidden md:block">A sua equipa está em dia.</div>
            <Link href="/inbox/nova" className="bg-[#141416] hover:bg-[#2A2B2F] transition-colors text-white px-4 py-2 rounded-full text-xs font-semibold flex items-center space-x-1.5 shadow-sm">
              <span className="text-sm leading-none font-light">+</span>
              <span>Nova conversa</span>
            </Link>
          </div>
        </header>
        {instagramAccount && channel === "Instagram" ? <p className="mx-4 mt-3 rounded-2xl bg-[#F4F8F1] px-4 py-2.5 text-[12px] text-[#344054]">O Instagram @{instagramAccount} está ligado a este negócio. Quem escrever para esta conta aparece aqui.</p> : null}
        <div className="ozou-inbox-body flex flex-1 overflow-hidden p-4 gap-4 bg-[#F8FAFC]">
          <section className="ozou-inbox-list w-[285px] min-h-0 self-stretch flex-shrink-0 bg-white border border-[#EAECF0] rounded-2xl flex flex-col overflow-hidden">
            <div className="ozou-phone-list hidden px-4 pt-4 pb-2 shrink-0">
              <div className="flex items-center justify-between gap-3">
                <h1 className="text-[22px] font-bold tracking-tight text-[#141416]">Conversas</h1>
                <button className="h-9 px-3 rounded-full bg-[#141416] text-white text-xs font-semibold" type="button" onClick={() => setWriting(true)}>Nova</button>
              </div>
              <p className="mt-1 text-[11px] text-[#717680] truncate">
                {messageCounts(db.wallet.balanceKz).map((item) => `${item.name} ${item.sends.toLocaleString("pt-PT")}`).join(" · ")}
              </p>
              <div className="mt-3 flex gap-1.5 overflow-x-auto">
                <button className={`shrink-0 px-3 py-1.5 rounded-full text-[11px] font-semibold ${unreadOnly ? "bg-white border border-[#E4E7EC] text-[#344054]" : "bg-[#141416] text-white"}`} type="button" onClick={() => setUnreadOnly(false)}>Todas {openCount}</button>
                <button className={`shrink-0 px-3 py-1.5 rounded-full text-[11px] font-semibold ${unreadOnly ? "bg-[#141416] text-white" : "bg-white border border-[#E4E7EC] text-[#344054]"}`} type="button" onClick={() => setUnreadOnly(true)}>Não lidas {unreadCount}</button>
                {channelOptions.map((option) => (
                  <button key={option} className={`shrink-0 px-3 py-1.5 rounded-full text-[11px] font-medium ${channel === option ? "bg-[#EFF8E2] text-[#426815]" : "bg-[#F8F9FA] text-[#475467]"}`} type="button" onClick={() => setChannel(option)}>
                    {option === "todos" ? "Canais" : option}
                  </button>
                ))}
              </div>
            </div>
            <InstallPush workspaceId={db.activeWorkspaceId} />
            <div className="p-3 border-b border-[#F2F4F7] space-y-2.5 shrink-0">
              <input className="w-full pl-3 pr-3 py-2 bg-[#F8F9FA] rounded-xl text-xs placeholder-[#98A2B3] border-none focus:ring-1 focus:ring-black focus:bg-white text-[#141416] transition-all" placeholder="Pesquisar por nome ou mensagem" type="text" value={search} onChange={(event) => setSearch(event.target.value)} />
              <div className="ozou-inbox-desk-only relative flex items-center justify-between text-[11px] text-[#475467] font-medium px-1">
                <button className="flex items-center space-x-1 cursor-pointer hover:text-black" type="button" onClick={() => setChannelsOpen((open) => !open)}>
                  <span>{channel === "todos" ? "Todos os canais" : channel}</span>
                  <svg className="w-3 h-3 text-[#98A2B3]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
                </button>
                {channelsOpen ? (
                  <div className="absolute left-0 top-6 z-20 w-40 rounded-2xl border border-[#E4E7EC] bg-white p-1 shadow-lg">
                    {channelOptions.map((option) => (
                      <button key={option} className="block w-full rounded-xl px-3 py-2 text-left hover:bg-[#F8F9FA]" type="button" onClick={() => { setChannel(option); setChannelsOpen(false); }}>
                        {option === "todos" ? "Todos os canais" : option}
                      </button>
                    ))}
                  </div>
                ) : null}
                <div className="flex items-center space-x-1 text-[#717680]">
                  <span>Mais recentes</span>
                  <svg className="w-3 h-3 text-[#98A2B3]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
                </div>
              </div>
            </div>
            <div ref={listRef} className="ozou-inbox-scroll divide-y divide-[#F2F4F7]">
              {visibleConversations.map((item) => {
                const person = db.contacts.find((contactRow) => contactRow.id === item.contactId);
                const preview = api.messagesOf(item.id).at(-1)?.body ?? "";
                const active = item.id === selected?.id;
                return (
                  <button key={item.id} className={`flex w-full items-center p-3 text-left cursor-pointer transition-colors ${active ? "bg-[#F8F9FA]" : "hover:bg-[#FAFAFA]"}`} type="button" onClick={() => openConversation(item.id)}>
                    <span className="ozou-avatar hidden mr-3 h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F3F4EE] text-sm font-bold text-[#141416]">{person?.name.slice(0, 1)}</span>
                    <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className={`text-xs ${active || item.unread ? "font-bold" : "font-semibold"} text-[#141416]`}>{person?.name}</span>
                      <span className="text-[10px] text-[#98A2B3]">{formatWhen(item.updatedAt)}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`shrink-0 whitespace-nowrap px-2 py-0.5 rounded-md text-[10px] font-medium ${channelBadge(item.channel)}`}>{item.channel}</span>
                      <span className="text-[11px] truncate font-normal text-[#717680]">{preview}</span>
                      {item.unread ? <span className="ml-auto w-4 h-4 text-[9px] font-bold rounded-full flex items-center justify-center flex-shrink-0 bg-[#141416] text-white">{item.unread}</span> : null}
                    </div>
                    </div>
                  </button>
                );
              })}
              {hasMoreConversations ? <div ref={listSentinel} className="py-3 text-center text-[11px] text-[#98A2B3]">{loadingList ? "A carregar conversas..." : "Role para ver mais"}</div> : null}
            </div>
            <div className="p-2.5 text-center text-[11px] text-[#98A2B3] border-t border-[#F2F4F7] shrink-0">{visibleConversations.length} de {conversations.length} conversas</div>
          </section>

          <section className="ozou-inbox-thread flex-1 min-h-0 self-stretch bg-white border border-[#EAECF0] rounded-2xl flex flex-col overflow-hidden">
            <div className="ozou-phone-thread hidden items-center gap-3 border-b border-[#F2F4F7] px-2 py-2.5 shrink-0">
              <button className="h-10 w-10 rounded-full text-lg text-[#141416]" type="button" aria-label="Voltar às conversas" onClick={() => setPhoneView("list")}>←</button>
              <div className="min-w-0 flex-1">
                <div className="truncate text-sm font-bold text-[#141416]">{contact?.name ?? "Conversa"}</div>
                <div className="text-[11px] text-[#717680]">{selected?.channel ?? "Canal"} · {selected?.status === "resolved" ? "Resolvida" : "Em aberto"}</div>
              </div>
              <button className="h-9 px-3 rounded-full border border-[#E4E7EC] text-[11px] font-semibold text-[#344054]" type="button" onClick={async () => { if (selected) { await api.resolveConversation(selected.id); setPhoneView("list"); } }}>Resolver</button>
            </div>
            <div className="ozou-inbox-desk-only px-5 py-3.5 border-b border-[#F2F4F7] flex items-center justify-between flex-shrink-0">
              <div>
                <div className="text-sm font-bold text-[#141416]">{contact?.name ?? "Seleccione uma conversa"}</div>
                <div className="text-[11px] text-[#717680] flex items-center space-x-1.5 mt-0.5">
                  <span>{selected?.channel ?? "Canal"}</span>
                  <span>·</span>
                  <span className="text-[#12B76A] font-medium">{selected?.status === "resolved" ? "Resolvida" : "Em aberto"}</span>
                </div>
              </div>
              <button className="border border-[#D0D5DD] hover:bg-[#F9FAFB] text-[#344054] px-3.5 py-1.5 rounded-full text-xs font-medium flex items-center space-x-1.5 transition-colors" type="button" onClick={async () => { if (selected) { await api.resolveConversation(selected.id); router.push("/inbox/resolvida"); } }}>
                <svg className="w-3.5 h-3.5 text-[#344054]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" /></svg>
                <span>Resolver</span>
              </button>
            </div>
            <div ref={threadRef} className="ozou-inbox-scroll p-5 space-y-4">
              {hasOlderMessages ? <div ref={olderSentinel} className="py-2 text-center text-[11px] text-[#98A2B3]">{loadingMessages ? "A carregar mensagens anteriores..." : "Mensagens anteriores"}</div> : <div className="py-2 text-center text-[11px] text-[#98A2B3]">Início da conversa</div>}
              {visibleMessages.map((message) => (
                <div key={message.id} className={`flex flex-col max-w-[70%] ${message.author === "team" ? "items-end ml-auto" : "items-start"}`}>
                  <div className={`${message.author === "team" ? "bg-[#EFF7E4] rounded-tr-sm" : "bg-[#F2F4F7] rounded-tl-sm"} text-[#141416] p-3.5 rounded-2xl text-xs leading-relaxed whitespace-pre-wrap`}>
                    {message.body}
                    <div className={`text-[10px] text-[#98A2B3] mt-1 ${message.author === "team" ? "text-right" : "text-right"}`}>{clock(message.at)}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="ozou-desk-composer p-4 pt-1 flex-shrink-0">
              {selected?.channel === "Instagram" ? <p className="mb-2 text-[11px] text-[#717680]">A resposta sai pelo Instagram deste negócio, para quem escreveu primeiro.</p> : null}
              {sendError ? <p className="mb-2 text-[11px] text-[#9a3412]">{sendError}</p> : null}
              <button className="mb-2.5 inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#EFF8E2] text-[#344054] text-[11px] font-medium cursor-pointer hover:bg-[#E4F3D2] transition-colors" type="button" onClick={suggest}>
                <span className="text-[#4E8B14] text-xs">✦</span>
                <span>A IA pode ajudar na próxima resposta</span>
              </button>
              <div className="border border-[#E4E7EC] rounded-2xl p-3 focus-within:border-[#98A2B3] transition-colors bg-white">
                <div className="flex items-center space-x-1 text-[11px] text-[#475467] font-semibold mb-2">
                  <span>Responder via:</span>
                  <span className="flex items-center space-x-1 cursor-pointer">
                    <span>{selected?.channel ?? "WhatsApp"}</span>
                    <svg className="w-3 h-3 text-[#717680]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
                  </span>
                </div>
                <textarea aria-label="Mensagem" className="w-full text-xs text-[#141416] placeholder-[#98A2B3] border-none p-0 focus:ring-0 resize-none outline-none" placeholder="Escreva a sua mensagem..." rows={2} value={draft} onChange={(event) => setDraft(event.target.value)} />
                <div className="flex items-center justify-between pt-2 border-t border-[#F2F4F7] mt-2">
                  <button className="flex items-center space-x-1.5 text-xs text-[#717680] hover:text-[#141416] transition-colors px-1 py-1 font-medium" type="button" onClick={() => setDraft((current) => `${current}${current ? "\n" : ""}[Anexo: proposta-ozou.pdf]`)}>
                    <span className="text-base leading-none font-light text-[#98A2B3]">+</span>
                    <span>Anexar ficheiro</span>
                  </button>
                  <div className="flex items-center space-x-2">
                    <button className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full border border-[#D0D5DD] hover:bg-[#F9FAFB] text-xs font-semibold text-[#344054] transition-colors" type="button" onClick={suggest}>
                      <span className="text-xs">✦</span>
                      <span>Gerar resposta com IA</span>
                    </button>
                    <button className="px-4 py-1.5 rounded-full bg-[#141416] text-white text-xs font-semibold hover:bg-black transition-all flex items-center space-x-1" type="button" onClick={send}>
                      <span>Enviar</span>
                      <span className="text-[10px]">↗</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <form
              className="ozou-phone-composer hidden shrink-0 items-end gap-2 border-t border-[#F2F4F7] bg-white px-3 pt-2 pb-[max(0.75rem,env(safe-area-inset-bottom))]"
              onSubmit={(event) => {
                event.preventDefault();
                void send();
              }}
            >
              <button className="mb-0.5 h-11 w-11 shrink-0 rounded-full bg-[#EFF8E2] text-base text-[#4E8B14]" type="button" aria-label="Gerar resposta" onClick={() => void suggest()}>✦</button>
              <textarea
                aria-label="Mensagem"
                className="max-h-28 min-h-11 flex-1 resize-none rounded-2xl bg-[#F8F9FA] px-3 py-3 text-sm text-[#141416] outline-none placeholder:text-[#98A2B3]"
                placeholder={selected?.channel === "Instagram" ? "Resposta a quem escreveu primeiro" : "Mensagem"}
                rows={1}
                value={draft}
                onChange={(event) => setDraft(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" && !event.shiftKey) {
                    event.preventDefault();
                    void send();
                  }
                }}
              />
              <button className="mb-0.5 h-11 shrink-0 rounded-full bg-[#141416] px-4 text-sm font-semibold text-white" type="submit">Enviar</button>
            </form>
            {sendError ? <p className="ozou-phone-composer hidden px-4 pb-2 text-[11px] text-[#9a3412]">{sendError}</p> : null}
          </section>

          <section className="ozou-inbox-details w-[270px] flex-shrink-0 bg-white border border-[#EAECF0] rounded-2xl flex flex-col justify-between p-4 overflow-y-auto">
            <div className="space-y-4">
              <div className="text-xs font-bold text-[#141416]">Detalhes do contacto</div>
              <div className="pt-1">
                <h2 className="text-lg font-bold text-[#141416] tracking-tight">{contact?.name}</h2>
                <p className="text-xs text-[#717680] mt-0.5">{contact?.company} · {contact?.city}</p>
                <div className="mt-2.5">
                  <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-semibold bg-[#EFF8E2] text-[#426815]">{contact?.status}</span>
                </div>
              </div>
              <div className="border-t border-[#F2F4F7] pt-3 space-y-3.5">
                <div>
                  <div className="text-[9px] font-bold text-[#98A2B3] tracking-wider uppercase mb-1">Canal de origem</div>
                  <div className="text-xs font-medium text-[#141416]">{contact?.channel}</div>
                </div>
                <div>
                  <div className="text-[9px] font-bold text-[#98A2B3] tracking-wider uppercase mb-1">Telefone</div>
                  <div className="text-xs font-medium text-[#141416]">{contact?.phone}</div>
                </div>
                <div>
                  <div className="text-[9px] font-bold text-[#98A2B3] tracking-wider uppercase mb-1">E-mail</div>
                  <div className="text-xs font-medium text-[#141416]">{contact?.email}</div>
                </div>
                <div>
                  <div className="text-[9px] font-bold text-[#98A2B3] tracking-wider uppercase mb-1">Responsável</div>
                  <div className="flex items-center space-x-1 cursor-pointer">
                    <span className="text-xs font-medium text-[#141416]">{contact?.assignee}</span>
                    <svg className="w-3 h-3 text-[#717680]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
                  </div>
                </div>
                <div>
                  <div className="text-[9px] font-bold text-[#98A2B3] tracking-wider uppercase mb-1.5">Etiquetas</div>
                  <div className="flex flex-wrap gap-1.5">
                    {(contact?.tags ?? []).map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-[#F2F4F7] text-[#344054]">{tag}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-[9px] font-bold text-[#98A2B3] tracking-wider uppercase mb-1">Nota da equipa</div>
                  <p className="text-[11px] leading-relaxed text-[#717680]">{contact?.note}</p>
                </div>
              </div>
            </div>
            <div className="pt-4 border-t border-[#F2F4F7]">
              <Link href={contact?.id === "sofia" ? "/contactos/sofia-martins" : "/contactos"} className="w-full py-2 px-3 border border-[#D0D5DD] hover:bg-[#F9FAFB] rounded-full text-xs font-semibold text-[#344054] flex items-center justify-center space-x-1 transition-colors">
                <span>Ver contacto completo</span>
                <span className="text-[10px]">↗</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
      {compose || writing ? (
        <NovaConversaModal
          onClose={writing ? () => setWriting(false) : undefined}
          onOpened={writing ? (id) => { setWriting(false); openConversation(id); } : undefined}
        />
      ) : null}
    </div>
  );
}

function NovaConversaModal({ onClose, onOpened }: { onClose?: () => void; onOpened?: (id: string) => void }) {
  const { api, db } = useOzou();
  const router = useRouter();
  const people = db.contacts.filter((contact) => !contact.archived);
  const [contactId, setContactId] = useState(people[0]?.id ?? "");
  const [channel, setChannel] = useState<ChannelKind>("WhatsApp");
  const [body, setBody] = useState("Claro! Podem experimentar o plano Pro durante 14 dias. O valor fica em kwanzas e não pedimos cartão.");

  async function openConversation(event: FormEvent) {
    event.preventDefault();
    if (channel === "Instagram") {
      router.push("/inbox?canal=Instagram");
      return;
    }
    const id = await api.startConversation({ contactId, channel, body });
    window.sessionStorage.setItem("ozou.openConversation", id);
    if (onOpened) {
      onOpened(id);
      return;
    }
    router.push("/inbox");
  }

  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-[#141416]/40 p-4 backdrop-blur-[2px]">
      <div
        aria-labelledby="nova-conversa-title"
        aria-modal="true"
        className="bg-white w-full max-w-[640px] overflow-hidden rounded-[28px] shadow-2xl p-6 relative border border-black/5"
        role="dialog"
      >
        {onClose ? (
          <button aria-label="Fechar" className="absolute top-6 right-6 w-8 h-8 rounded-full border border-[#E4E7EC] flex items-center justify-center text-[#717680]" type="button" onClick={onClose}>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
              <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        ) : (
          <Link aria-label="Fechar" href="/inbox" className="absolute top-6 right-6 w-8 h-8 rounded-full border border-[#E4E7EC] flex items-center justify-center text-[#717680] hover:text-[#141416] hover:border-[#98A2B3] transition">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
              <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        )}
        <div className="mb-4 pr-10">
          <h2 className="text-[26px] font-bold tracking-tight text-[#141416]" id="nova-conversa-title">Nova conversa</h2>
          <p className="text-xs text-[#717680] mt-1">Comece pelo contacto. Escolha depois o melhor canal.</p>
        </div>
        <form className="space-y-3" onSubmit={openConversation}>
          <div>
            <label className="block text-[11px] text-[#475467] font-medium mb-1.5" htmlFor="nova-contact-input">Contacto</label>
            <select id="nova-contact-input" className="w-full h-[46px] px-4 rounded-xl border border-[#E4E7EC] bg-white text-xs" value={contactId} onChange={(event) => setContactId(event.target.value)}>
              {people.map((person) => (
                <option key={person.id} value={person.id}>{person.name} · {person.email}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-[11px] text-[#475467] font-medium mb-1.5" htmlFor="nova-channel-input">Responder via</label>
            <select id="nova-channel-input" className="w-full h-[46px] px-4 rounded-xl border border-[#E4E7EC] bg-white text-xs" value={channel} onChange={(event) => setChannel(event.target.value as ChannelKind)}>
              {channelOptions.filter((option) => option !== "todos").map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
          {channel === "Instagram" ? (
            <p className="rounded-2xl bg-[#F4F8F1] px-4 py-3 text-xs leading-relaxed text-[#344054]">No Instagram a conversa começa quando a pessoa escreve. As mensagens que já chegaram estão no inbox.</p>
          ) : (
            <div>
              <label className="block text-[10px] font-semibold text-[#717680] uppercase tracking-wider mb-1.5" htmlFor="nova-message-input">Mensagem inicial</label>
              <textarea className="w-full rounded-2xl border border-[#E4E7EC] p-3 text-xs leading-relaxed text-[#141416] focus:ring-1 focus:ring-[#141416] focus:border-[#141416] resize-none" id="nova-message-input" rows={2} value={body} onChange={(event) => setBody(event.target.value)} />
            </div>
          )}
          {channel === "Instagram" ? null : (
            <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#E4E7EC] hover:bg-[#F8F9FA] text-xs font-medium text-[#141416] transition" type="button" onClick={async () => setBody(await api.varyMessage(body))}>
              <span>✦</span>
              <span>Melhorar com IA</span>
            </button>
          )}
          <p className="text-[11px] text-[#717680]">Contacto com consentimento ativo.</p>
          <div className="flex items-center justify-between pt-2">
            {onClose ? (
              <button className="px-8 py-2.5 rounded-full border border-[#E4E7EC] hover:bg-[#F8F9FA] text-xs font-medium text-[#141416] transition" type="button" onClick={onClose}>Cancelar</button>
            ) : (
              <Link href="/inbox" className="px-8 py-2.5 rounded-full border border-[#E4E7EC] hover:bg-[#F8F9FA] text-xs font-medium text-[#141416] transition">Cancelar</Link>
            )}
            {channel === "Instagram" ? (
              <Link href="/inbox?canal=Instagram" className="px-8 py-2.5 rounded-full bg-[#141416] hover:bg-black text-white text-xs font-medium" onClick={() => onClose?.()}>Ver mensagens</Link>
            ) : (
              <button className="px-8 py-2.5 rounded-full bg-[#141416] hover:bg-black text-white text-xs font-medium flex items-center gap-2 transition" type="submit">
                <span>Abrir conversa</span>
                <span>→</span>
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
