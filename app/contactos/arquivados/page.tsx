import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "OZOU — Contactos arquivados",
};

function Chevron({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

export default function ContactosArquivadosPage() {
  return (
    <div className="min-h-screen bg-white text-[#16191c] flex overflow-x-hidden font-sans antialiased">
      <aside className="w-[248px] shrink-0 min-h-screen border-r border-[#ededed] bg-[#fbfbfb] flex flex-col justify-between py-6 px-4">
        <div className="flex flex-col">
          <div className="px-2 pt-1 pb-6 flex items-center gap-1.5">
            <Link href="/" className="text-[26px] font-black tracking-tight text-[#16191c]">
              OZOU
            </Link>
            <span className="w-[6.5px] h-[6.5px] rounded-full bg-[#8bc34a] -mt-2" />
          </div>
          <div className="bg-[#f3f4f6]/70 rounded-xl p-3 mb-6 flex items-center justify-between cursor-pointer hover:bg-[#eaecee] transition-colors">
            <div>
              <h2 className="text-[13px] font-semibold text-[#181a1f] leading-snug">Studio Workspace</h2>
              <p className="text-[11px] text-[#717784] font-medium leading-none mt-0.5">Plano Pro</p>
            </div>
            <Chevron className="w-4 h-4 text-[#717784]" />
          </div>
          <div className="px-2 mb-2.5">
            <span className="text-[10px] font-bold text-[#8d94a0] uppercase tracking-wider">Espaço de trabalho</span>
          </div>
          <nav className="space-y-0.5 text-[13px] font-medium">
            <Link className="flex items-center justify-between px-3 py-2.5 rounded-xl text-[#4a505b] hover:bg-[#f1f3f5] transition-colors" href="/inbox">
              <div className="flex items-center gap-3">
                <svg className="w-[18px] h-[18px] text-[#6b7280]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-4a2 2 0 00-2 2 2 2 0 01-2 2 2 2 0 01-2-2 2 2 0 00-2-2H4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
                </svg>
                <span>Inbox unificado</span>
              </div>
              <span className="px-2 py-0.5 text-[11px] font-semibold bg-[#e8eae9] text-[#555b66] rounded-md">12</span>
            </Link>
            <Link className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-[#4a505b] hover:bg-[#f1f3f5] transition-colors" href="/automacao-campanhas">
              <svg className="w-[18px] h-[18px] text-[#6b7280]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
              </svg>
              <span className="leading-tight">Automação & campanhas</span>
            </Link>
            <Link className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-[#4a505b] hover:bg-[#f1f3f5] transition-colors" href="/insights">
              <svg className="w-[18px] h-[18px] text-[#6b7280]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
              </svg>
              <span>Insights & métricas</span>
            </Link>
            <Link className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-[#16191c] text-white font-medium shadow-sm" href="/contactos/arquivados">
              <svg className="w-[18px] h-[18px] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
              </svg>
              <span>Contactos</span>
            </Link>
            <Link className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-[#4a505b] hover:bg-[#f1f3f5] transition-colors" href="/inicio">
              <svg className="w-[18px] h-[18px] text-[#6b7280]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
              </svg>
              <span>Início</span>
            </Link>
            <Link className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-[#4a505b] hover:bg-[#f1f3f5] transition-colors" href="/empresas">
              <svg className="w-[18px] h-[18px] text-[#6b7280]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
              </svg>
              <span>Empresas</span>
            </Link>
          </nav>
        </div>
        <div className="flex flex-col gap-4">
          <div className="bg-[#eef2ee] rounded-2xl p-4 relative">
            <div className="text-[#3b413c] mb-2.5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
            <p className="text-[13px] font-semibold leading-snug text-[#1f2621]">
              Menos tarefas.
              <br />
              Mais conversas.
            </p>
            <a className="inline-flex items-center gap-1 text-[11px] text-[#646e65] mt-3 hover:text-black font-medium" href="#">
              A IA trata do resto. <span>↗</span>
            </a>
          </div>
          <div className="space-y-0.5 text-[13px] font-medium text-[#4a505b]">
            <a className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-[#f1f3f5] transition-colors" href="#">
              <svg className="w-[18px] h-[18px] text-[#6b7280]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
              </svg>
              <span>Ajuda e suporte</span>
            </a>
            <Link className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-[#f1f3f5] transition-colors" href="/definicoes/equipa">
              <svg className="w-[18px] h-[18px] text-[#6b7280]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
              </svg>
              <span>Definições</span>
            </Link>
          </div>
          <div className="border-t border-[#ececec] pt-3.5 px-2 flex items-center justify-between cursor-pointer">
            <div>
              <h3 className="text-[13px] font-semibold text-[#181a1f] leading-snug">Mariana Costa</h3>
              <p className="text-[11px] text-[#717784] font-medium leading-none mt-0.5">Administradora</p>
            </div>
            <Chevron className="w-3.5 h-3.5 text-[#717784]" />
          </div>
        </div>
      </aside>

      <main className="flex-1 flex flex-col min-w-0 bg-white">
        <header className="pt-7 pb-6 px-10 border-b border-[#f1f1f1] flex items-start justify-between">
          <div>
            <nav aria-label="Breadcrumb" className="flex items-center space-x-1.5 text-[12px] text-[#8e949f] font-normal mb-2">
              <Link className="hover:text-black" href="/inicio">
                Workspace
              </Link>
              <span className="text-[#cfd2d6]">/</span>
              <Link className="hover:text-black" href="/contactos">
                Contactos
              </Link>
              <span className="text-[#cfd2d6]">/</span>
              <span className="text-[#8e949f]">Arquivados</span>
            </nav>
            <h1 className="text-[26px] font-bold text-[#14171a] tracking-tight leading-none mb-1.5">Contactos arquivados</h1>
            <p className="text-[13px] text-[#787f8b] font-normal">O essencial para gerir o seu negócio.</p>
          </div>
          <div className="flex items-center gap-2 bg-[#edf3ed] text-[#2c3e2e] px-3.5 py-1.5 rounded-full text-[12px] font-medium mt-0.5">
            <span className="w-[6px] h-[6px] rounded-full bg-[#52a447]" />
            <span>4 canais conectados</span>
          </div>
        </header>
        <section className="px-10 pt-10 pb-16 flex-1 flex flex-col">
          <div className="mb-8">
            <h2 className="text-[24px] font-bold text-[#14171a] tracking-tight mb-1.5">O histórico fica. O ruído, não.</h2>
            <p className="text-[13px] text-[#717784] font-normal">1 contacto arquivado · 1.247 contactos ativos</p>
          </div>
          <article className="w-full max-w-[950px] border border-[#e8eaed] rounded-[20px] p-7 mb-7 flex items-center justify-between shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
            <div className="flex flex-col gap-1">
              <h3 className="text-[18px] font-bold text-[#16191d] tracking-tight">Sofia Martins</h3>
              <p className="text-[13px] text-[#6d7481] font-normal">sofia@lunastudio.ao · WhatsApp · Arquivado hoje</p>
            </div>
            <Link
              href="/contactos/sofia-martins"
              className="inline-flex items-center gap-1.5 bg-[#16191c] hover:bg-[#2b2f34] text-white text-[13px] font-medium px-5 py-2.5 rounded-full transition-colors"
            >
              <span>Restaurar contacto</span>
              <span className="text-[12px] -mt-0.5">↗</span>
            </Link>
          </article>
          <div>
            <Link
              href="/contactos"
              className="inline-flex items-center gap-2 bg-white border border-[#e5e7eb] hover:bg-[#f9fafb] text-[#1c2024] text-[13px] font-medium px-4 py-2 rounded-full transition-colors shadow-sm"
            >
              <span className="text-[14px] leading-none">←</span>
              <span>Contactos ativos</span>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
