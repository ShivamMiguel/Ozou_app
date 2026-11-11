import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import { CampaignStudio } from "@/components/live/campaign-studio";

export const metadata: Metadata = {
  title: "OZOU — Automação & campanhas",
};

const jakartaScope = {
  "--font-sans": 'var(--font-jakarta), "Plus Jakarta Sans", sans-serif',
  fontFamily: 'var(--font-jakarta), "Plus Jakarta Sans", sans-serif',
} as CSSProperties;

function Sparkle({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2L14.2 9.8L22 12L14.2 14.2L12 22L9.8 14.2L2 12L9.8 9.8L12 2Z" />
    </svg>
  );
}

function Chevron({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

function Check() {
  return (
    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
    </svg>
  );
}

const message = `Olá, {{primeiro_nome}}! Ainda por aí?
Temos 14 dias para lhe mostrar como simplificar
as conversas da sua equipa. Vamos experimentar?`;

export default function AutomacaoCampanhasPage() {
  return (
    <div className="h-dvh max-h-dvh w-full min-w-0 bg-[#FDFDFD] text-[#18181B] flex flex-row font-sans antialiased overflow-hidden" style={jakartaScope}>
      <aside className="w-[240px] flex-shrink-0 border-r border-[#EEEEEE] bg-[#FCFCFC] flex flex-col justify-between h-full min-h-0 overflow-y-auto p-5">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Link href="/" className="text-2xl font-bold tracking-tight text-[#111827]">
              OZOU
            </Link>
            <span className="w-2 h-2 rounded-full bg-[#B8E24C] inline-block mb-1" />
          </div>
          <div className="bg-[#F4F4F5]/70 rounded-xl p-3 flex items-center justify-between cursor-pointer mb-7 hover:bg-[#F0F0F2] transition-colors">
            <div>
              <div className="text-[13px] font-semibold text-[#18181B] leading-tight">Studio Workspace</div>
              <div className="text-[11px] text-[#71717A] mt-0.5 font-normal">Plano Pro</div>
            </div>
            <Chevron className="w-3.5 h-3.5 text-[#71717A]" />
          </div>
          <div className="text-[10px] font-semibold text-[#A1A1AA] uppercase tracking-wider mb-2 px-1">Espaço de trabalho</div>
          <nav className="space-y-1">
            <Link className="flex items-center justify-between px-3 py-2 rounded-xl text-[13px] font-medium text-[#52525B] hover:text-[#18181B] hover:bg-black/5 transition-all" href="/inbox">
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-[#71717A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
                </svg>
                <span>Inbox unificado</span>
              </div>
              <span className="text-[11px] font-semibold bg-[#F4F4F5] text-[#52525B] px-1.5 py-0.5 rounded-full">12</span>
            </Link>
            <Link className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13px] font-medium bg-[#18181B] text-white shadow-sm" href="/automacao-campanhas">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
              </svg>
              <span className="leading-tight">Automação & campanhas</span>
            </Link>
            <Link className="flex items-center gap-3 px-3 py-2 rounded-xl text-[13px] font-medium text-[#52525B] hover:text-[#18181B] hover:bg-black/5 transition-all" href="/insights">
              <svg className="w-4 h-4 text-[#71717A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
              </svg>
              <span>Insights & métricas</span>
            </Link>
            <Link className="flex items-center gap-3 px-3 py-2 rounded-xl text-[13px] font-medium text-[#52525B] hover:text-[#18181B] hover:bg-black/5 transition-all" href="/contactos">
              <svg className="w-4 h-4 text-[#71717A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
              </svg>
              <span>Contactos</span>
            </Link>
            <Link className="flex items-center gap-3 px-3 py-2 rounded-xl text-[13px] font-medium text-[#52525B] hover:text-[#18181B] hover:bg-black/5 transition-all" href="/inicio">
              <svg className="w-4 h-4 text-[#71717A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
              </svg>
              <span>Início</span>
            </Link>
            <Link className="flex items-center gap-3 px-3 py-2 rounded-xl text-[13px] font-medium text-[#52525B] hover:text-[#18181B] hover:bg-black/5 transition-all" href="/empresas">
              <svg className="w-4 h-4 text-[#71717A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
              </svg>
              <span>Empresas</span>
            </Link>
          </nav>
        </div>
        <div className="space-y-4">
          <div className="bg-[#F4F6F2] rounded-2xl p-4 relative overflow-hidden border border-[#E8ECE4]">
            <div className="w-5 h-5 mb-2 text-[#18181B]">
              <Sparkle className="w-4 h-4" />
            </div>
            <p className="text-[13px] font-semibold leading-snug text-[#18181B]">
              Menos tarefas.
              <br />
              Mais conversas.
            </p>
            <div className="flex items-center gap-1 mt-2 text-[11px] text-[#71717A] hover:text-[#18181B] transition-colors cursor-pointer">
              <span>A IA trata do resto.</span>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
          <div className="space-y-1">
            <Link className="flex items-center gap-3 px-3 py-2 text-[13px] text-[#71717A] hover:text-[#18181B] transition-colors" href="/ajuda">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
              <span>Ajuda e suporte</span>
            </Link>
            <Link className="flex items-center gap-3 px-3 py-2 text-[13px] text-[#71717A] hover:text-[#18181B] transition-colors" href="/definicoes/equipa">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
              <span>Definições</span>
            </Link>
          </div>
          <div className="pt-3 border-t border-[#F0F0F0] flex items-center justify-between">
            <div>
              <div className="text-[13px] font-semibold text-[#18181B] leading-tight">Mariana Costa</div>
              <div className="text-[11px] text-[#A1A1AA]">Administradora</div>
            </div>
            <Chevron className="w-3.5 h-3.5 text-[#A1A1AA]" />
          </div>
        </div>
      </aside>

      <main className="ozou-scroll flex-1 flex flex-col min-w-0 min-h-0 overflow-x-hidden overflow-y-auto bg-[#FFFFFF]">
        <header className="sticky top-0 z-20 bg-white px-6 pt-6 pb-5 lg:px-8 border-b border-[#F4F4F5] flex flex-wrap items-start justify-between gap-3">
          <div>
            <div className="text-[11px] text-[#8E8E93] mb-1 font-medium tracking-tight">
              Workspace <span className="mx-1 text-[#C7C7CC]">/</span> Automação & campanhas
            </div>
            <h1 className="text-[26px] font-bold tracking-tight text-[#111827]">Automação & campanhas</h1>
            <p className="text-[13px] text-[#71717A] mt-0.5">A mensagem certa. No momento certo.</p>
          </div>
          <div>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[12px] font-medium bg-[#F3F7EE] text-[#426830] border border-[#E3EDD9]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5E8E3E]" />
              4 canais conectados
            </span>
          </div>
        </header>

        <CampaignStudio />
      </main>
    </div>
  );
}
