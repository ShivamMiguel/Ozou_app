import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "OZOU — Empresa — Studio Workspace",
};

function FieldChevron() {
  return (
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function StudioWorkspacePage() {
  return (
    <div className="min-h-screen bg-white text-[#18191b] flex flex-col md:flex-row antialiased">
      <aside className="w-full md:w-[240px] shrink-0 border-r border-[#ebecee] flex flex-col justify-between py-6 px-4 bg-white">
        <div className="flex flex-col space-y-6">
          <div className="px-2 flex items-center space-x-2">
            <Link href="/" className="text-2xl font-black tracking-tight text-[#18191b]">
              OZOU
            </Link>
            <span className="w-2 h-2 rounded-full bg-[#a3e635] inline-block mb-1" />
          </div>

          <div className="bg-[#f6f7f9] rounded-xl p-3 flex items-center justify-between cursor-pointer hover:bg-gray-100 transition-colors">
            <div>
              <div className="text-[13px] font-semibold text-[#18191b] leading-tight">Studio Workspace</div>
              <div className="text-[11px] text-gray-400 font-medium">Plano Pro</div>
            </div>
            <svg className="w-3.5 h-3.5 text-gray-500 stroke-[2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <div>
            <div className="px-2 text-[10px] font-bold tracking-wider text-gray-400 uppercase mb-2">Espaço de trabalho</div>
            <nav className="space-y-1">
              <Link
                className="flex items-center justify-between px-2.5 py-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-50 text-[13px] font-medium transition-colors"
                href="/inbox"
              >
                <div className="flex items-center space-x-3">
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
                    <path
                      d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-4.5a1.5 1.5 0 00-1.5 1.5v.5a1.5 1.5 0 01-1.5 1.5h-3a1.5 1.5 0 01-1.5-1.5v-.5A1.5 1.5 0 007.5 13H3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Inbox unificado</span>
                </div>
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-[#f1f2f4] text-gray-600">12</span>
              </Link>
              <Link
                className="flex items-center px-2.5 py-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-50 text-[13px] font-medium transition-colors"
                href="/automacao-campanhas"
              >
                <div className="flex items-center space-x-3">
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
                    <path
                      d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="leading-tight">Automação & campanhas</span>
                </div>
              </Link>
              <Link
                className="flex items-center px-2.5 py-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-50 text-[13px] font-medium transition-colors"
                href="/insights"
              >
                <div className="flex items-center space-x-3">
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
                    <path
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Insights & métricas</span>
                </div>
              </Link>
              <Link
                className="flex items-center px-2.5 py-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-50 text-[13px] font-medium transition-colors"
                href="/contactos"
              >
                <div className="flex items-center space-x-3">
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
                    <path
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Contactos</span>
                </div>
              </Link>
              <Link
                className="flex items-center px-2.5 py-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-50 text-[13px] font-medium transition-colors"
                href="/inicio"
              >
                <div className="flex items-center space-x-3">
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
                    <path
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Início</span>
                </div>
              </Link>
              <Link
                className="flex items-center px-3 py-2.5 rounded-xl bg-[#18191b] text-white text-[13px] font-medium shadow-sm transition-all"
                href="/empresas"
              >
                <div className="flex items-center space-x-3">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
                    <path
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Empresas</span>
                </div>
              </Link>
            </nav>
          </div>

          <div className="bg-[#f0f3eb] rounded-2xl p-4 text-[#18191b] mt-4 relative">
            <div className="mb-2">
              <svg className="w-4 h-4 text-[#18191b]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <path
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h4 className="font-bold text-[13px] leading-snug">
              Menos tarefas.
              <br />
              Mais conversas.
            </h4>
            <a className="text-[11px] text-gray-500 font-medium inline-flex items-center space-x-1 mt-3 hover:text-black transition-colors" href="#">
              <span>A IA trata do resto.</span>
              <svg className="w-2.5 h-2.5 ml-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>

        <div className="space-y-4 pt-6">
          <nav className="space-y-1">
            <Link className="flex items-center px-2 py-1.5 rounded-lg text-gray-600 hover:text-gray-900 text-[13px] font-medium transition-colors" href="/ajuda">
              <svg className="w-4 h-4 mr-3 text-gray-500" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
                <path
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Ajuda e suporte</span>
            </Link>
            <Link className="flex items-center px-2 py-1.5 rounded-lg text-gray-600 hover:text-gray-900 text-[13px] font-medium transition-colors" href="/definicoes/equipa">
              <svg className="w-4 h-4 mr-3 text-gray-500" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
                <path
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Definições</span>
            </Link>
          </nav>
          <div className="pt-3 border-t border-gray-100 flex items-center justify-between cursor-pointer">
            <div>
              <div className="text-[13px] font-semibold text-[#18191b] leading-tight">Mariana Costa</div>
              <div className="text-[11px] text-gray-400 font-medium">Administradora</div>
            </div>
            <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </aside>

      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        <header className="pt-7 pb-6 px-8 md:px-12 border-b border-[#f0f0f2]">
          <div className="flex items-center justify-between mb-2">
            <nav aria-label="Breadcrumb" className="text-[12px] text-gray-400 flex items-center space-x-1.5">
              <Link className="hover:text-gray-600 transition-colors" href="/empresas">
                Workspace
              </Link>
              <span>/</span>
              <span className="text-gray-500 font-normal">Empresa — Studio Workspace</span>
            </nav>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#ecf2e7] text-[12px] text-[#3e5622] font-medium space-x-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#528919]" />
              <span>4 canais conectados</span>
            </div>
          </div>
          <h1 className="text-[28px] font-bold text-[#18191b] tracking-tight leading-snug">Empresa — Studio Workspace</h1>
          <p className="text-[13px] text-gray-400 mt-0.5">O essencial para gerir o seu negócio.</p>
        </header>

        <div className="p-8 md:p-12 space-y-7">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-[#18191b] tracking-tight">Studio Workspace</h2>
              <div className="text-[13px] text-gray-500 mt-1">
                <span>Empresa ativa</span>
                <span className="mx-1.5">·</span>
                <span>Administradora: Mariana Costa</span>
              </div>
            </div>
            <div>
              <Link
                className="inline-flex items-center justify-center px-4 py-2 text-[13px] font-medium text-gray-700 bg-white border border-gray-300 rounded-full hover:bg-gray-50 transition-colors"
                href="/empresas"
              >
                <svg className="w-3.5 h-3.5 mr-2 text-gray-600 stroke-[2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M10 19l-7-7m0 0l7-7m-7 7h18" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Todas as empresas
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
            <section className="lg:col-span-2 bg-white rounded-2xl border border-[#ebecee] p-8 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
              <h3 className="text-[18px] font-bold text-[#18191b] mb-6">Informações da empresa</h3>
              <form className="space-y-5">
                <div>
                  <label className="block text-[12px] font-medium text-gray-500 mb-1.5" htmlFor="studio-company-name">
                    Nome comercial
                  </label>
                  <input
                    className="w-full px-3.5 py-2.5 text-[14px] text-gray-900 border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-colors"
                    id="studio-company-name"
                    name="company-name"
                    type="text"
                    defaultValue="Studio Workspace"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[12px] font-medium text-gray-500 mb-1.5" htmlFor="nif">
                      NIF
                    </label>
                    <input
                      className="w-full px-3.5 py-2.5 text-[14px] text-gray-900 border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-colors"
                      id="nif"
                      name="nif"
                      type="text"
                      defaultValue="509 123 456"
                    />
                  </div>
                  <div>
                    <label className="block text-[12px] font-medium text-gray-500 mb-1.5" htmlFor="sector">
                      Setor
                    </label>
                    <div className="relative">
                      <select
                        className="w-full px-3.5 py-2.5 text-[14px] text-gray-900 border border-gray-200 rounded-lg appearance-none bg-white focus:outline-none focus:ring-1 focus:ring-black focus:border-black cursor-pointer pr-10 transition-colors"
                        id="sector"
                        name="sector"
                        defaultValue="Serviços profissionais"
                      >
                        <option>Serviços profissionais</option>
                        <option>Tecnologia e Software</option>
                        <option>Comércio e Retalho</option>
                        <option>Outro</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
                        <FieldChevron />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[12px] font-medium text-gray-500 mb-1.5" htmlFor="studio-country">
                      País
                    </label>
                    <div className="relative">
                      <select
                        className="w-full px-3.5 py-2.5 text-[14px] text-gray-900 border border-gray-200 rounded-lg appearance-none bg-white focus:outline-none focus:ring-1 focus:ring-black focus:border-black cursor-pointer pr-10 transition-colors"
                        id="studio-country"
                        name="country"
                        defaultValue="Angola"
                      >
                        <option>Angola</option>
                        <option>Namíbia</option>
                        <option>Brasil</option>
                        <option>África do Sul</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
                        <FieldChevron />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[12px] font-medium text-gray-500 mb-1.5" htmlFor="studio-timezone">
                      Fuso horário
                    </label>
                    <div className="relative">
                      <select
                        className="w-full px-3.5 py-2.5 text-[14px] text-gray-900 border border-gray-200 rounded-lg appearance-none bg-white focus:outline-none focus:ring-1 focus:ring-black focus:border-black cursor-pointer pr-10 transition-colors"
                        id="studio-timezone"
                        name="timezone"
                        defaultValue="África / Luanda"
                      >
                        <option>África / Luanda</option>
                        <option>África / Benguela</option>
                        <option>África / Huambo</option>
                        <option>África / Lubango</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
                        <FieldChevron />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-[12px] font-medium text-gray-500 mb-1.5" htmlFor="email">
                    E-mail de contacto
                  </label>
                  <input
                    className="w-full px-3.5 py-2.5 text-[14px] text-gray-900 border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-colors"
                    id="email"
                    name="email"
                    type="email"
                    defaultValue="geral@studio.ao"
                  />
                </div>
                <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <span className="text-[12px] text-gray-400">Dados da empresa separados dos dados de faturação.</span>
                  <Link
                    href="/alteracoes-guardadas"
                    className="px-5 py-2.5 text-[13px] font-medium text-white bg-[#18191b] rounded-full hover:bg-black transition-colors shadow-sm self-end sm:self-auto"
                  >
                    Guardar alterações
                  </Link>
                </div>
              </form>
            </section>

            <div className="space-y-6 flex flex-col">
              <section className="bg-[#f2f5ec] rounded-2xl p-7 text-[#18191b]">
                <h3 className="text-[20px] font-bold text-[#18191b] tracking-tight mb-7 leading-snug">Um espaço, uma visão.</h3>
                <div className="space-y-5">
                  <div className="flex items-baseline">
                    <span className="w-20 text-[26px] font-bold text-[#18191b] leading-none">4</span>
                    <span className="text-[13px] text-gray-600 font-normal">canais conectados</span>
                  </div>
                  <div className="flex items-baseline">
                    <span className="w-20 text-[26px] font-bold text-[#18191b] leading-none">3</span>
                    <span className="text-[13px] text-gray-600 font-normal">membros na equipa</span>
                  </div>
                  <div className="flex items-baseline">
                    <span className="w-20 text-[26px] font-bold text-[#18191b] leading-none">1.248</span>
                    <span className="text-[13px] text-gray-600 font-normal">contactos</span>
                  </div>
                </div>
              </section>

              <section className="bg-white rounded-2xl border border-[#ebecee] p-6 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
                <h3 className="text-[17px] font-bold text-[#18191b] mb-5">Gerir este espaço</h3>
                <div className="space-y-3">
                  <a
                    className="w-full py-2.5 px-4 rounded-full border border-gray-200 text-[13px] font-medium text-gray-800 flex items-center justify-center space-x-1.5 hover:bg-gray-50 transition-colors"
                    href="#"
                  >
                    <span>Canais e ligações</span>
                    <svg className="w-3.5 h-3.5 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                  <a
                    className="w-full py-2.5 px-4 rounded-full border border-gray-200 text-[13px] font-medium text-gray-800 flex items-center justify-center space-x-1.5 hover:bg-gray-50 transition-colors"
                    href="#"
                  >
                    <span>Equipa e permissões</span>
                    <svg className="w-3.5 h-3.5 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                  <a
                    className="w-full py-2.5 px-4 rounded-full border border-gray-200 text-[13px] font-medium text-gray-800 flex items-center justify-center space-x-1.5 hover:bg-gray-50 transition-colors"
                    href="#"
                  >
                    <span>Conta e faturação</span>
                    <svg className="w-3.5 h-3.5 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              </section>
            </div>
          </div>

          <footer className="pt-6 text-[12px] text-gray-400">Criada em 9 de novembro de 2026 · Identificador: studio-workspace</footer>
        </div>
      </main>
    </div>
  );
}
