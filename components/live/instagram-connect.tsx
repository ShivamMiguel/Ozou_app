"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useOzou } from "./use-ozou";

const permissions = [
  "Receber as mensagens diretas na caixa de entrada",
  "Responder a quem escreveu primeiro",
  "Guardar o contacto junto da conversa",
];

const errors: Record<string, string> = {
  config: "Ainda falta configurar a app do Instagram no servidor.",
  negado: "O acesso não foi autorizado. Entra outra vez com a tua conta.",
  troca: "Não foi possível confirmar a conta. Tenta entrar outra vez.",
  conta: "A conta tem de ser profissional, de empresa ou de criador.",
  negocio: "Escolhe primeiro o negócio que vai usar este Instagram.",
};

type Session = {
  configured: boolean;
  connected: boolean;
  username: string | null;
  redirectUri: string;
};

export function InstagramConnectDialog() {
  const { db } = useOzou();
  const workspace = db.activeWorkspaceId;
  const business = db.workspaces.find((item) => item.id === workspace)?.name ?? "este negócio";
  const [session, setSession] = useState<Session | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get("erro");
    setError(code ? errors[code] ?? errors.troca : null);
    fetch(`/api/instagram/session?workspace=${encodeURIComponent(workspace)}`)
      .then((response) => response.json())
      .then((body: Session) => setSession(body))
      .catch(() => setSession(null));
  }, [workspace]);

  const ready = session?.configured;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/25 backdrop-blur-[2px] p-4">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-[620px] p-8 relative flex flex-col border border-neutral-100" role="dialog" aria-labelledby="ig-modal-title">
        <Link href="/inbox" aria-label="Fechar" className="absolute top-6 right-6 w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-500 hover:text-black hover:border-neutral-400 transition">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
          </svg>
        </Link>
        <div className="mb-6">
          <h2 id="ig-modal-title" className="text-2xl font-black text-neutral-900 tracking-tight leading-snug">Conectar Instagram</h2>
          <p className="text-xs font-medium text-neutral-500 mt-1">
            {session?.connected && session.username ? `@${session.username} · ${business}` : business}
          </p>
        </div>
        <div className="bg-[#f2f6ee] rounded-2xl p-5 mb-6">
          <h3 className="text-base font-bold text-neutral-900 mb-2 tracking-tight">Liga o Instagram deste negócio.</h3>
          <p className="text-xs text-neutral-600 font-medium leading-relaxed">Cada empresa entra com a sua própria conta profissional. Quem escrever para essa conta aparece neste inbox, e a equipa responde por aqui.</p>
        </div>
        <div className="mb-7">
          <p className="text-[10px] uppercase font-bold tracking-wider text-neutral-400 mb-3">O que fica ativo</p>
          <ul className="space-y-2 text-xs font-medium text-neutral-700">
            {permissions.map((item) => (
              <li key={item} className="flex items-center space-x-2.5">
                <span className="text-neutral-900 text-sm font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        {error ? <p className="mb-4 text-xs font-medium text-[#9a3412]">{error}</p> : null}
        {session && !session.configured ? (
          <p className="mb-4 text-xs leading-relaxed text-[#71717A]">
            Regista este endereço de retorno na app da Meta e define INSTAGRAM_APP_ID e INSTAGRAM_APP_SECRET: {session.redirectUri}
          </p>
        ) : null}
        <div className="flex flex-col space-y-3">
          {ready ? (
            <a href={`/api/instagram/start?workspace=${encodeURIComponent(workspace)}`} className="w-full bg-[#1c1c1e] hover:bg-black text-white text-xs font-semibold py-3 px-6 rounded-full shadow-md transition-all text-center">
              {session?.connected ? "Trocar a conta deste negócio" : "Entrar com o Instagram deste negócio"}
            </a>
          ) : (
            <button className="w-full bg-[#1c1c1e] text-white text-xs font-semibold py-3 px-6 rounded-full opacity-60" type="button" disabled>
              Entrar com o Instagram deste negócio
            </button>
          )}
          {session?.connected ? (
            <Link href="/inbox?canal=Instagram" className="w-full bg-white hover:bg-neutral-50 text-neutral-700 border border-neutral-300 text-xs font-semibold py-3 px-6 rounded-full transition-all text-center">
              Ir para as mensagens
            </Link>
          ) : (
            <Link href="/inbox" className="w-full bg-white hover:bg-neutral-50 text-neutral-700 border border-neutral-300 text-xs font-semibold py-3 px-6 rounded-full transition-all text-center">
              Agora não
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
