import type { Metadata } from "next";
import { TeamPanel } from "@/components/live/workspace-panels";
import Link from "next/link";

export const metadata: Metadata = {
  title: "OZOU — Definições — Equipa",
};

export default function DefinicoesEquipaPage() {
  return (
    <div className="flex min-h-screen font-sans bg-white selection:bg-[#EBF4E5] selection:text-[#14171A] antialiased">
      <aside className="w-64 border-r border-[#ECEEED] flex flex-col justify-between shrink-0 h-screen sticky top-0 bg-white">
        <div className="px-5 pt-7 pb-4 overflow-y-auto">
          <div className="flex items-center gap-2 mb-6 px-1">
            <Link href="/" className="text-2xl font-bold tracking-tight text-[#14171A]">
              OZOU
            </Link>
            <span className="w-2.5 h-2.5 rounded-full bg-[#B2D852] inline-block mb-1" />
          </div>
          <button className="w-full text-left bg-[#F8F9FA] hover:bg-[#F2F4F3] border border-transparent transition-colors rounded-xl px-4 py-3 flex items-center justify-between mb-8 group" type="button">
            <div>
              <div className="text-sm font-semibold text-[#14171A]">Studio Workspace</div>
              <div className="text-xs text-[#7A858F] font-normal">Plano Pro</div>
            </div>
            <svg className="w-4 h-4 text-[#7A858F] group-hover:text-[#14171A] transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div className="text-[11px] font-semibold tracking-wider text-[#98A2B3] uppercase mb-4 px-1">Espaço de trabalho</div>
          <nav className="space-y-1">
            <Link className="flex items-center justify-between px-3 py-2.5 rounded-xl text-[14px] font-medium text-[#4B5563] hover:text-[#14171A] hover:bg-[#F9FAF9] group transition-colors" href="/inbox">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#6B7280] group-hover:text-[#14171A]" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
                  <rect height="16" rx="2" strokeLinecap="round" width="18" x="3" y="4" />
                  <path d="M3 14h4l2 3h6l2-3h4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Inbox unificado</span>
              </div>
              <span className="text-xs bg-[#EFEFEF] text-[#4B5563] px-2 py-0.5 rounded-md font-medium">12</span>
            </Link>
            <Link className="flex items-center px-3 py-2.5 rounded-xl text-[14px] font-medium text-[#4B5563] hover:text-[#14171A] hover:bg-[#F9FAF9] group transition-colors" href="/automacao-campanhas">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#6B7280] group-hover:text-[#14171A]" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
                  <path d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="leading-tight">Automação & campanhas</span>
              </div>
            </Link>
            <Link className="flex items-center px-3 py-2.5 rounded-xl text-[14px] font-medium text-[#4B5563] hover:text-[#14171A] hover:bg-[#F9FAF9] group transition-colors" href="/insights">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#6B7280] group-hover:text-[#14171A]" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
                  <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Insights & métricas</span>
              </div>
            </Link>
            <Link className="flex items-center px-3 py-2.5 rounded-xl text-[14px] font-medium text-[#4B5563] hover:text-[#14171A] hover:bg-[#F9FAF9] group transition-colors" href="/contactos">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#6B7280] group-hover:text-[#14171A]" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
                  <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Contactos</span>
              </div>
            </Link>
            <Link className="flex items-center px-3 py-2.5 rounded-xl text-[14px] font-medium text-[#4B5563] hover:text-[#14171A] hover:bg-[#F9FAF9] group transition-colors" href="/inicio">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#6B7280] group-hover:text-[#14171A]" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
                  <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Início</span>
              </div>
            </Link>
            <Link className="flex items-center px-3 py-2.5 rounded-xl text-[14px] font-medium text-[#4B5563] hover:text-[#14171A] hover:bg-[#F9FAF9] group transition-colors" href="/empresas">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#6B7280] group-hover:text-[#14171A]" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
                  <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Empresas</span>
              </div>
            </Link>
          </nav>
        </div>
        <div className="px-5 pb-5 pt-2">
          <div className="bg-[#EFF5EC] rounded-2xl p-4 mb-4">
            <div className="w-6 h-6 mb-2 text-[#14171A]">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4L12 2z" />
              </svg>
            </div>
            <p className="text-sm font-semibold text-[#14171A] leading-snug">
              Menos tarefas.
              <br />
              Mais conversas.
            </p>
            <a className="inline-flex items-center gap-1 text-[12px] font-medium text-[#505D54] hover:text-[#14171A] mt-3 group transition-colors" href="#">
              <span>A IA trata do resto.</span>
              <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M7 17L17 7M17 7H9M17 7V15" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
          <div className="space-y-1 mb-4">
            <a className="flex items-center gap-3 px-2 py-2 rounded-lg text-[13px] font-medium text-[#4B5563] hover:text-[#14171A] transition-colors" href="#">
              <svg className="w-4 h-4 text-[#6B7280]" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" strokeLinecap="round" />
                <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3m.08 4h.01" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>Ajuda e suporte</span>
            </a>
            <Link className="flex items-center gap-3 px-2 py-2 rounded-lg text-[13px] font-medium text-[#14171A] transition-colors" href="/definicoes/equipa">
              <svg className="w-4 h-4 text-[#14171A]" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
                <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              <span>Definições</span>
            </Link>
          </div>
          <div className="pt-3 border-t border-[#ECEEED] flex items-center justify-between">
            <div className="truncate">
              <div className="text-[13px] font-semibold text-[#14171A] truncate">Mariana Costa</div>
              <div className="text-[11px] text-[#7A858F] truncate">Administradora</div>
            </div>
            <svg className="w-4 h-4 text-[#7A858F] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </aside>

      <main className="flex-1 overflow-y-auto">
        <header className="px-10 pt-7 pb-6 border-b border-[#F0F2F1]">
          <div className="max-w-6xl mx-auto flex items-start justify-between">
            <div>
              <nav className="text-xs text-[#7A858F] mb-3 flex items-center gap-1.5 font-normal">
                <span>Workspace</span>
                <span className="text-[#A0AAB3]">/</span>
                <span className="text-[#4B5563]">Definições — Equipa</span>
              </nav>
              <h1 className="text-[30px] font-bold tracking-tight text-[#14171A] leading-tight">Definições — Equipa</h1>
              <p className="text-[13px] text-[#7A858F] mt-1 font-normal">O essencial para gerir o seu negócio.</p>
            </div>
            <div className="inline-flex items-center gap-2 bg-[#EBF4E5] px-3.5 py-1.5 rounded-full text-xs font-medium text-[#2F4F24]">
              <span className="w-2 h-2 rounded-full bg-[#4E7D30]" />
              <span>4 canais conectados</span>
            </div>
          </div>
        </header>
        <div className="px-10 py-8 max-w-6xl mx-auto">
          <nav className="flex items-center gap-3 mb-10">
            <Link href="/definicoes/canais" className="px-6 py-2.5 rounded-full border border-[#DDE3DF] bg-white text-xs font-semibold text-[#14171A]">Canais</Link>
            <span className="px-7 py-2.5 rounded-full bg-[#181B1E] text-xs font-semibold text-white shadow-sm">Equipa</span>
            <Link href="/definicoes/conta" className="px-6 py-2.5 rounded-full border border-[#DDE3DF] bg-white text-xs font-semibold text-[#14171A]">Conta e plano</Link>
          </nav>
          <TeamPanel />
          <section className="bg-[#EFF4EB] rounded-2xl p-7">
            <h3 className="text-[18px] font-bold text-[#14171A] mb-5 tracking-tight">Permissões sem complicações.</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-[14px] font-bold text-[#14171A] mb-1.5">Administrador</h4>
                <p className="text-xs text-[#5C665F] leading-relaxed">Empresa, faturação e todos os acessos.</p>
              </div>
              <div>
                <h4 className="text-[14px] font-bold text-[#14171A] mb-1.5">Gestor</h4>
                <p className="text-xs text-[#5C665F] leading-relaxed">Equipa, campanhas, contactos e relatórios.</p>
              </div>
              <div>
                <h4 className="text-[14px] font-bold text-[#14171A] mb-1.5">Agente</h4>
                <p className="text-xs text-[#5C665F] leading-relaxed">Conversas e contactos atribuídos.</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
