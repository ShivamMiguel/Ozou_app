import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "OZOU — Empresas",
};

export default function EmpresasPage() {
  return (
    <div className="min-h-screen flex bg-white text-[#121316]">
      <aside className="w-[248px] flex-shrink-0 border-r border-[#EBECE9] flex flex-col justify-between h-screen sticky top-0 bg-white select-none">
        <div className="px-5 pt-7 pb-4 overflow-y-auto flex-1 flex flex-col">
          <div className="flex items-center gap-1.5 mb-6 px-1">
            <Link href="/" className="text-[23px] font-black tracking-[-0.03em] text-[#111215]">
              OZOU
            </Link>
            <span className="w-2 h-2 rounded-full bg-[#A3D638] -mt-1 inline-block" />
          </div>

          <div className="bg-[#F8F9F7] hover:bg-[#F2F4F0] cursor-pointer rounded-xl p-3 flex items-center justify-between mb-8 transition-colors">
            <div className="flex flex-col">
              <span className="text-[13px] font-semibold text-[#18191B] leading-snug">Studio Workspace</span>
              <span className="text-[11px] text-[#7E8481] leading-tight mt-0.5">Plano Pro</span>
            </div>
            <svg className="w-3.5 h-3.5 text-[#626865]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>

          <div className="text-[10px] font-semibold text-[#8C9390] uppercase tracking-wider mb-2.5 px-2">Espaço de trabalho</div>

          <nav className="space-y-0.5">
            <Link
              className="flex items-center justify-between px-3 py-2 rounded-xl text-[#5A605C] hover:bg-[#F8F9F7] text-[13px] font-medium transition-colors"
              href="/inbox"
            >
              <div className="flex items-center gap-2.5">
                <svg className="w-[18px] h-[18px] text-[#717774]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-4.5a1.5 1.5 0 00-1.5 1.5v.5a1.5 1.5 0 01-1.5 1.5h-3a1.5 1.5 0 01-1.5-1.5v-.5A1.5 1.5 0 007.5 13H3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                  />
                </svg>
                <span>Inbox unificado</span>
              </div>
              <span className="text-[11px] font-semibold text-[#5A605C] bg-[#F2F3F0] px-1.5 py-0.5 rounded-full min-w-[20px] text-center">
                12
              </span>
            </Link>
            <Link
              className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-[#5A605C] hover:bg-[#F8F9F7] text-[13px] font-medium transition-colors"
              href="/automacao-campanhas"
            >
              <svg className="w-[18px] h-[18px] text-[#717774]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                />
              </svg>
              <span className="truncate">Automação & campanhas</span>
            </Link>
            <Link
              className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-[#5A605C] hover:bg-[#F8F9F7] text-[13px] font-medium transition-colors"
              href="/insights"
            >
              <svg className="w-[18px] h-[18px] text-[#717774]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                />
              </svg>
              <span>Insights & métricas</span>
            </Link>
            <Link
              className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-[#5A605C] hover:bg-[#F8F9F7] text-[13px] font-medium transition-colors"
              href="/contactos"
            >
              <svg className="w-[18px] h-[18px] text-[#717774]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                />
              </svg>
              <span>Contactos</span>
            </Link>
            <Link
              className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-[#5A605C] hover:bg-[#F8F9F7] text-[13px] font-medium transition-colors"
              href="/inicio"
            >
              <svg className="w-[18px] h-[18px] text-[#717774]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                />
              </svg>
              <span>Início</span>
            </Link>
            <Link
              className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-[#121316] text-white text-[13px] font-medium shadow-sm"
              href="/empresas"
            >
              <svg className="w-[18px] h-[18px] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                />
              </svg>
              <span>Empresas</span>
            </Link>
          </nav>
        </div>

        <div className="px-5 pb-5 pt-2 flex flex-col gap-3">
          <div className="bg-[#EEF3EA] rounded-2xl p-4 cursor-pointer hover:bg-[#E7EDE2] transition-colors relative">
            <svg className="w-4 h-4 text-[#26282B] mb-2.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L13.8 8.2L20 10L13.8 11.8L12 18L10.2 11.8L4 10L10.2 8.2L12 2Z" />
            </svg>
            <div className="text-[13px] font-semibold text-[#18191B] leading-snug">
              Menos tarefas.
              <br />
              Mais conversas.
            </div>
            <div className="text-[11px] text-[#696F6B] mt-2.5 flex items-center justify-between">
              <span>A IA trata do resto.</span>
              <span className="text-xs">↗</span>
            </div>
          </div>

          <div className="space-y-0.5 pt-1">
            <Link
              className="flex items-center gap-2.5 px-3 py-1.5 text-[#636865] hover:text-[#18191B] text-[13px] font-medium transition-colors"
              href="/ajuda"
            >
              <svg className="w-[17px] h-[17px] text-[#717774]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                />
              </svg>
              <span>Ajuda e suporte</span>
            </Link>
            <Link
              className="flex items-center gap-2.5 px-3 py-1.5 text-[#636865] hover:text-[#18191B] text-[13px] font-medium transition-colors"
              href="/definicoes/equipa"
            >
              <svg className="w-[17px] h-[17px] text-[#717774]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                />
              </svg>
              <span>Definições</span>
            </Link>
          </div>

          <div className="border-t border-[#ECEEEB] pt-3.5 mt-1 flex items-center justify-between px-1 cursor-pointer hover:opacity-80 transition-opacity">
            <div className="flex flex-col">
              <span className="text-[13px] font-semibold text-[#18191B] leading-none">Mariana Costa</span>
              <span className="text-[11px] text-[#7E8481] leading-tight mt-1">Administradora</span>
            </div>
            <svg className="w-3.5 h-3.5 text-[#7E8481]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </aside>

      <main className="flex-1 flex flex-col min-w-0 bg-white">
        <header className="border-b border-[#ECEEEB] px-10 pt-7 pb-6 flex items-start justify-between">
          <div>
            <nav className="flex items-center text-[12px] font-medium text-[#7A807D] gap-1.5 mb-2.5">
              <span>Workspace</span>
              <span className="text-[#B2B6B4]">/</span>
              <span className="text-[#4F5552]">Empresas</span>
            </nav>
            <h1 className="text-[26px] font-bold text-[#111215] tracking-tight leading-tight">Empresas</h1>
            <p className="text-[13px] text-[#6E7471] mt-1">O essencial para gerir o seu negócio.</p>
          </div>
          <div className="bg-[#F0F4EA] py-1.5 px-3.5 rounded-full flex items-center gap-2 select-none border border-[#E7ECE0]">
            <span className="w-2 h-2 rounded-full bg-[#82B93C]" />
            <span className="text-[12px] font-medium text-[#464D47]">4 canais conectados</span>
          </div>
        </header>

        <div className="px-10 py-9 flex-1">
          <div className="flex items-start justify-between mb-8">
            <div>
              <h2 className="text-[24px] font-bold text-[#111215] tracking-tight leading-snug">Cada empresa, no seu espaço.</h2>
              <p className="text-[13px] text-[#6B726F] mt-1.5">Alterne entre operações sem misturar canais, contactos ou equipas.</p>
            </div>
            <Link
              href="/criar-empresa"
              className="bg-[#191B1D] hover:bg-[#2A2C2E] text-white text-[13px] font-medium px-5 py-2.5 rounded-full flex items-center gap-1.5 transition-colors shadow-sm"
            >
              <span>+</span>
              <span>Criar empresa</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-7">
            <div className="bg-[#F2F5EE] border border-[#E3E8DE] rounded-2xl p-7 flex flex-col justify-between min-h-[310px]">
              <div>
                <span className="text-[10px] font-bold tracking-wider text-[#6F776C] uppercase block mb-6">Empresa atual</span>
                <h3 className="text-[22px] font-bold text-[#111316] mb-4">Studio Workspace</h3>
                <div className="space-y-1 text-[13px] text-[#555C57]">
                  <p>4 canais · 3 membros</p>
                  <p>1.248 contactos</p>
                </div>
              </div>
              <Link
                href="/empresas/studio-workspace"
                className="w-full bg-[#181A1C] hover:bg-[#2A2C2F] text-white text-[13px] font-medium py-3 rounded-full flex items-center justify-center gap-2 transition-colors mt-8"
              >
                <span>Gerir empresa</span>
                <span className="text-sm">→</span>
              </Link>
            </div>

            <div className="bg-white border border-[#E6E8E5] rounded-2xl p-7 flex flex-col justify-between min-h-[310px]">
              <div>
                <span className="text-[10px] font-bold tracking-wider text-[#79807C] uppercase block mb-6">Outro espaço</span>
                <h3 className="text-[22px] font-bold text-[#111316] mb-4">A próxima empresa</h3>
                <div className="space-y-1 text-[13px] text-[#636A66]">
                  <p>Um novo negócio, independente</p>
                  <p>Contactos e equipa separados</p>
                </div>
              </div>
              <Link
                href="/criar-empresa"
                className="w-full bg-white hover:bg-[#F9FAF8] border border-[#E2E4E0] text-[#16181B] text-[13px] font-medium py-3 rounded-full flex items-center justify-center gap-2 transition-colors mt-8"
              >
                <span>Criar novo espaço</span>
                <span className="text-sm">→</span>
              </Link>
            </div>

            <div className="bg-white border border-[#E6E8E5] rounded-2xl p-7 flex flex-col justify-between min-h-[310px]">
              <div>
                <div className="mb-4">
                  <svg className="w-5 h-5 text-[#16181B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </div>
                <h3 className="text-[22px] font-bold text-[#111316] leading-snug mb-3">
                  Mais um negócio?
                  <br />
                  O mesmo cuidado.
                </h3>
                <p className="text-[13px] text-[#636A66] leading-relaxed">Crie um espaço independente para a próxima empresa.</p>
              </div>
              <Link
                href="/criar-empresa"
                className="w-full bg-white hover:bg-[#F9FAF8] border border-[#E2E4E0] text-[#16181B] text-[13px] font-medium py-3 rounded-full flex items-center justify-center gap-1.5 transition-colors mt-8"
              >
                <span>Criar nova empresa</span>
                <span className="text-xs">↗</span>
              </Link>
            </div>
          </div>

          <div className="border border-[#E6E8E5] rounded-2xl p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="max-w-[580px]">
              <h4 className="text-[17px] font-bold text-[#121316] mb-2 leading-snug">Os acessos pertencem a cada empresa.</h4>
              <p className="text-[13px] text-[#69706C] leading-relaxed">
                É administradora na Studio Workspace. Os convites e as permissões são geridos por espaço, sem acesso automático às
                outras empresas.
              </p>
            </div>
            <div className="flex-shrink-0">
              <button
                className="bg-white hover:bg-[#F9FAF8] border border-[#DCE0DC] text-[#151719] text-[13px] font-medium px-6 py-2.5 rounded-full transition-colors"
                type="button"
              >
                Gerir equipa
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
