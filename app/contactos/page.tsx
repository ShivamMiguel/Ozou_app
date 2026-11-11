import type { Metadata } from "next";
import Link from "next/link";
import { ContactsBoard } from "@/components/live/contacts-board";

export const metadata: Metadata = {
  title: "OZOU — Contactos",
};

function Icon({ d }: { d: string }) {
  return (
    <svg className="w-4 h-4 text-[#52525B] group-hover:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path d={d} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
    </svg>
  );
}

export default function ContactosPage() {
  return (
    <div className="bg-white min-h-screen flex antialiased font-sans text-sm text-[#141414]">
      <aside className="w-[240px] flex-shrink-0 border-r border-[#ECECEB] flex flex-col justify-between h-screen sticky top-0 bg-white z-20">
        <div>
          <div className="px-6 pt-7 pb-6 flex items-center">
            <Link className="flex items-center gap-1.5" href="/">
              <span className="text-2xl font-black tracking-tight text-[#111111]">OZOU</span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#B6E336] inline-block mb-1" />
            </Link>
          </div>
          <div className="px-4 mb-6">
            <button className="w-full bg-[#F4F4F3] hover:bg-[#EBEBEA] transition-colors rounded-xl px-4 py-3 flex items-center justify-between text-left" type="button">
              <div>
                <div className="font-semibold text-xs text-[#18181B] leading-tight">Studio Workspace</div>
                <div className="text-[11px] text-[#8E8E93] mt-0.5">Plano Pro</div>
              </div>
              <svg className="w-4 h-4 text-[#71717A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </button>
          </div>
          <div className="px-3">
            <div className="px-3 text-[10px] font-semibold text-[#8E8E93] tracking-wider uppercase mb-2">Espaço de trabalho</div>
            <nav aria-label="Main Navigation" className="space-y-1">
              <Link className="flex items-center justify-between px-3 py-2.5 rounded-xl text-[#3F3F46] hover:bg-[#F4F4F3] transition-colors group" href="/inbox">
                <div className="flex items-center gap-3">
                  <Icon d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                  <span className="text-xs font-medium">Inbox unificado</span>
                </div>
                <span className="text-[11px] font-medium text-[#71717A] bg-[#F4F4F3] group-hover:bg-white px-2 py-0.5 rounded-md">12</span>
              </Link>
              <Link className="flex items-center px-3 py-2.5 rounded-xl text-[#3F3F46] hover:bg-[#F4F4F3] transition-colors group" href="/automacao-campanhas">
                <div className="flex items-center gap-3">
                  <Icon d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                  <span className="text-xs font-medium">Automação & campanhas</span>
                </div>
              </Link>
              <Link className="flex items-center px-3 py-2.5 rounded-xl text-[#3F3F46] hover:bg-[#F4F4F3] transition-colors group" href="/insights">
                <div className="flex items-center gap-3">
                  <Icon d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  <span className="text-xs font-medium">Insights & métricas</span>
                </div>
              </Link>
              <Link className="flex items-center px-3.5 py-3 rounded-2xl bg-[#141414] text-white shadow-sm" href="/contactos">
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                  <span className="text-xs font-medium">Contactos</span>
                </div>
              </Link>
              <Link className="flex items-center px-3 py-2.5 rounded-xl text-[#3F3F46] hover:bg-[#F4F4F3] transition-colors group" href="/inicio">
                <div className="flex items-center gap-3">
                  <Icon d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  <span className="text-xs font-medium">Início</span>
                </div>
              </Link>
              <Link className="flex items-center px-3 py-2.5 rounded-xl text-[#3F3F46] hover:bg-[#F4F4F3] transition-colors group" href="/empresas">
                <div className="flex items-center gap-3">
                  <Icon d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  <span className="text-xs font-medium">Empresas</span>
                </div>
              </Link>
            </nav>
          </div>
        </div>
        <div className="px-3 pb-4">
          <div className="bg-[#F4F7F2] rounded-2xl p-4 mb-4 border border-[#E8EFE3]">
            <div className="w-5 h-5 mb-2.5 text-[#2E4A28]">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path clipRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" fillRule="evenodd" />
              </svg>
            </div>
            <h4 className="font-bold text-xs text-[#1E2E1A] leading-snug">
              Menos tarefas.
              <br />
              Mais conversas.
            </h4>
            <a className="mt-3 inline-flex items-center gap-1 text-[11px] font-medium text-[#465E3F] hover:text-black transition-colors" href="#">
              <span>A IA trata do resto.</span>
              <span className="text-xs font-semibold">↗</span>
            </a>
          </div>
          <div className="space-y-1 mb-4">
            <Link className="flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-medium text-[#52525B] hover:bg-[#F4F4F3] transition-colors" href="/ajuda">
              <svg className="w-4 h-4 text-[#71717A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
              </svg>
              Ajuda e suporte
            </Link>
            <Link className="flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-medium text-[#52525B] hover:bg-[#F4F4F3] transition-colors" href="/definicoes/equipa">
              <svg className="w-4 h-4 text-[#71717A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
              </svg>
              Definições
            </Link>
          </div>
          <div className="border-t border-[#ECECEB] pt-3 px-2 flex items-center justify-between">
            <div>
              <div className="font-medium text-xs text-[#18181B]">Mariana Costa</div>
              <div className="text-[11px] text-[#8E8E93]">Administradora</div>
            </div>
            <button className="text-[#8E8E93] hover:text-[#18181B]" type="button" aria-label="Conta">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </button>
          </div>
        </div>
      </aside>

      <main className="flex-1 flex flex-col min-w-0 bg-white">
        <header className="pt-7 px-8 pb-5 flex items-start justify-between">
          <div>
            <nav className="flex items-center gap-2 text-xs text-[#71717A] mb-1 font-normal">
              <span>Workspace</span>
              <span className="text-[#A1A1AA]">/</span>
              <span className="text-[#3F3F46]">Contactos</span>
            </nav>
            <h1 className="text-2xl font-bold tracking-tight text-[#111111]">Contactos</h1>
            <p className="text-xs text-[#71717A] mt-0.5">Relações próximas começam aqui.</p>
          </div>
          <div className="inline-flex items-center gap-2 bg-[#E9EFE6] px-3.5 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#5A8744]" />
            <span className="text-xs font-normal text-[#273B1E]">4 canais conectados</span>
          </div>
        </header>

        <div className="px-8">
          <ContactsBoard />
        </div>
      </main>
    </div>
  );
}
