import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "OZOU — Contactos — Após arquivo",
};

const rows = [
  ["Miguel Santos", "miguel@atelier.ao", "Instagram", "Hoje, 10:35", "Novo lead", false],
  ["Inês Ferreira", "ines@forma.ao", "E-mail", "Hoje, 10:18", "Cliente", true],
  ["João Almeida", "joao@almeida.ao", "SMS", "Hoje, 09:54", "Novo lead", false],
  ["Beatriz Costa", "beatriz@norte.ao", "WhatsApp", "Hoje, 09:32", "Cliente", true],
  ["Pedro Ribeiro", "pedro@origem.ao", "Instagram", "Ontem, 17:20", "Lead qualificado", false],
  ["Carolina Sousa", "carolina@casa.ao", "E-mail", "Ontem, 16:48", "Cliente", true],
  ["Tiago Lopes", "tiago@studiolopes.ao", "WhatsApp", "Ontem, 15:10", "Lead qualificado", false],
  ["Marta Oliveira", "marta@verde.ao", "E-mail", "2 nov., 14:30", "Sem resposta", false],
  ["Rui Pereira", "rui@pontostudio.ao", "SMS", "2 nov., 11:15", "Sem resposta", false],
] as const;

function NavIcon({ d }: { d: string }) {
  return (
    <svg className="w-[18px] h-[18px] text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path d={d} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
    </svg>
  );
}

export default function ContactosAposArquivoPage() {
  return (
    <div className="min-h-screen flex bg-[#F9F9FA] text-[#1c1c1c] text-sm antialiased">
      <aside className="w-[260px] bg-white border-r border-[#EEEEEE] flex flex-col justify-between shrink-0 h-screen sticky top-0 px-4 py-5">
        <div className="flex flex-col space-y-6">
          <div className="px-2 pt-1 pb-1 flex items-center">
            <Link href="/" className="flex items-center space-x-1.5">
              <span className="text-[22px] font-black tracking-tight text-[#111111]">OZOU</span>
              <span className="w-[6px] h-[6px] rounded-full bg-[#B2D63B] inline-block mb-2" />
            </Link>
          </div>
          <div className="bg-[#F5F5F5] rounded-xl p-3 flex items-center justify-between cursor-pointer hover:bg-neutral-100 transition-colors">
            <div>
              <div className="text-[13px] font-semibold text-neutral-900 leading-snug">Studio Workspace</div>
              <div className="text-[11px] text-neutral-500">Plano Pro</div>
            </div>
            <svg className="w-4 h-4 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
          <div>
            <div className="text-[10px] font-semibold tracking-wider text-[#8E8E93] uppercase px-2 mb-2">Espaço de trabalho</div>
            <nav className="space-y-1">
              <Link className="flex items-center justify-between px-3 py-2 rounded-lg text-neutral-600 hover:bg-neutral-50 font-medium text-[13px] transition-colors" href="/inbox">
                <div className="flex items-center space-x-3">
                  <NavIcon d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-4a2 2 0 00-1.789 1.106l-.422.845A2 2 0 0113.894 16h-3.788a2 2 0 01-1.895-1.049l-.422-.845A2 2 0 006 13H2" />
                  <span>Inbox unificado</span>
                </div>
                <span className="bg-[#F0F0F0] text-neutral-600 text-[11px] font-semibold px-2 py-0.5 rounded-full">12</span>
              </Link>
              <Link className="flex items-center px-3 py-2 rounded-lg text-neutral-600 hover:bg-neutral-50 font-medium text-[13px] transition-colors space-x-3" href="/automacao-campanhas">
                <NavIcon d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                <span>Automação & campanhas</span>
              </Link>
              <Link className="flex items-center px-3 py-2 rounded-lg text-neutral-600 hover:bg-neutral-50 font-medium text-[13px] transition-colors space-x-3" href="/insights">
                <NavIcon d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                <span>Insights & métricas</span>
              </Link>
              <Link className="flex items-center px-3 py-2.5 rounded-xl bg-[#171717] text-white font-medium text-[13px] space-x-3 shadow-sm" href="/contactos">
                <svg className="w-[18px] h-[18px] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
                <span>Contactos</span>
              </Link>
              <Link className="flex items-center px-3 py-2 rounded-lg text-neutral-600 hover:bg-neutral-50 font-medium text-[13px] transition-colors space-x-3" href="/inicio">
                <NavIcon d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                <span>Início</span>
              </Link>
              <Link className="flex items-center px-3 py-2 rounded-lg text-neutral-600 hover:bg-neutral-50 font-medium text-[13px] transition-colors space-x-3" href="/empresas">
                <NavIcon d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                <span>Empresas</span>
              </Link>
            </nav>
          </div>
          <div className="bg-[#F0F2EB] rounded-2xl p-4">
            <div className="mb-3 text-neutral-900">
              <svg className="w-5 h-5 text-neutral-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
            <div className="font-bold text-neutral-900 text-sm leading-tight">Menos tarefas.</div>
            <div className="font-bold text-neutral-900 text-sm mb-3">Mais conversas.</div>
            <a className="text-xs text-neutral-600 font-medium hover:text-neutral-900 inline-flex items-center space-x-1" href="#">
              <span>A IA trata do resto.</span>
              <span>↗</span>
            </a>
          </div>
        </div>
        <div className="pt-3 border-t border-[#F0F0F0] space-y-1">
          <Link className="flex items-center px-3 py-2 rounded-lg text-neutral-600 hover:bg-neutral-50 font-medium text-[13px] space-x-3" href="/ajuda">
            <svg className="w-4 h-4 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
            </svg>
            <span>Ajuda e suporte</span>
          </Link>
          <Link className="flex items-center px-3 py-2 rounded-lg text-neutral-600 hover:bg-neutral-50 font-medium text-[13px] space-x-3" href="/definicoes/equipa">
            <svg className="w-4 h-4 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
              <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
            </svg>
            <span>Definições</span>
          </Link>
          <div className="pt-3 mt-2 border-t border-[#F0F0F0] flex items-center justify-between px-2 cursor-pointer hover:bg-neutral-50 rounded-lg p-1.5 transition-colors">
            <div>
              <div className="text-[13px] font-semibold text-neutral-900 leading-tight">Mariana Costa</div>
              <div className="text-[11px] text-neutral-500">Administradora</div>
            </div>
            <svg className="w-4 h-4 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </aside>

      <main className="flex-1 flex flex-col min-w-0 bg-[#FAFAFA] overflow-y-auto">
        <header className="pt-7 pb-4 px-10 border-b border-[#F0F0F0] bg-white">
          <div className="flex items-center justify-between mb-1.5">
            <nav className="flex items-center space-x-1.5 text-xs text-neutral-400 font-medium">
              <span className="hover:text-neutral-600 cursor-pointer">Workspace</span>
              <span>/</span>
              <span className="text-neutral-500">Contactos</span>
            </nav>
            <div className="flex items-center space-x-2 bg-[#F3F4EE] px-3.5 py-1.5 rounded-full text-xs font-medium text-neutral-700">
              <span className="w-2 h-2 rounded-full bg-[#82C341]" />
              <span>4 canais conectados</span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mt-1">
            <div>
              <h1 className="text-[26px] font-bold tracking-tight text-neutral-900 leading-tight">Contactos</h1>
              <p className="text-xs text-neutral-500 mt-0.5">Relações próximas começam aqui.</p>
            </div>
            <div className="bg-[#F1F6EC] border border-[#E5EFE0] px-4 py-2.5 rounded-xl flex items-center space-x-2 text-xs text-[#28491A] font-medium shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
              <svg className="w-3.5 h-3.5 text-[#3D7324]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
              </svg>
              <span>Sofia Martins foi arquivada. O histórico está preservado.</span>
            </div>
          </div>
        </header>

        <div className="px-10 py-7 max-w-[1360px] w-full mx-auto space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold tracking-tight text-neutral-900">As pessoas por trás das conversas.</h2>
              <div className="text-xs text-neutral-500 mt-0.5">
                <span>1.247 contactos ativos</span>
                <span className="mx-1.5">·</span>
                <Link href="/contactos/arquivados" className="hover:text-neutral-800">
                  1 contacto arquivado
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <button className="px-4 py-2 rounded-full border border-neutral-300 text-xs font-semibold text-neutral-700 bg-white hover:bg-neutral-50 shadow-sm transition" type="button">
                Importar contactos
              </button>
              <Link href="/contactos/sofia-martins" className="px-4 py-2 rounded-full bg-[#171717] hover:bg-black text-xs font-semibold text-white flex items-center space-x-1.5 shadow-sm transition">
                <span>+</span>
                <span>Novo contacto</span>
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-between pt-1">
            <div className="flex items-center space-x-2 overflow-x-auto pb-1">
              <button className="px-4 py-1.5 rounded-full bg-[#171717] text-white text-xs font-semibold whitespace-nowrap" type="button">
                Todos <span className="ml-1 font-normal opacity-90">1.247</span>
              </button>
              <button className="px-4 py-1.5 rounded-full bg-white border border-neutral-200 text-neutral-700 hover:bg-neutral-50 text-xs font-medium whitespace-nowrap" type="button">
                Leads <span className="ml-1 text-neutral-500 font-normal">341</span>
              </button>
              <button className="px-4 py-1.5 rounded-full bg-white border border-neutral-200 text-neutral-700 hover:bg-neutral-50 text-xs font-medium whitespace-nowrap" type="button">
                Clientes <span className="ml-1 text-neutral-500 font-normal">856</span>
              </button>
              <button className="px-4 py-1.5 rounded-full bg-white border border-neutral-200 text-neutral-700 hover:bg-neutral-50 text-xs font-medium whitespace-nowrap" type="button">
                Sem resposta <span className="ml-1 text-neutral-500 font-normal">50</span>
              </button>
            </div>
            <span className="text-xs text-neutral-400 hidden sm:inline-block">Última sincronização às 10:45</span>
          </div>

          <div className="bg-white border border-[#E9E9E9] rounded-2xl shadow-sm overflow-hidden">
            <div className="p-4 flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-neutral-100">
              <div className="flex flex-wrap items-center gap-2.5 flex-1 max-w-2xl">
                <div className="relative flex-1 min-w-[260px]">
                  <input id="archive-search" aria-label="Pesquisar contactos" className="w-full pl-3.5 pr-4 py-2 bg-[#F6F7F8] border-none rounded-xl text-xs text-neutral-700 placeholder-neutral-400 focus:ring-1 focus:ring-neutral-400" placeholder="Pesquisar por nome, e-mail ou telefone..." type="text" />
                </div>
                <button className="px-3.5 py-2 bg-white border border-neutral-200 rounded-full text-xs font-medium text-neutral-700 hover:bg-neutral-50 flex items-center space-x-1.5" type="button">
                  <span>Canal preferido</span>
                  <svg className="w-3.5 h-3.5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </button>
                <button className="px-3.5 py-2 bg-white border border-neutral-200 rounded-full text-xs font-medium text-neutral-700 hover:bg-neutral-50 flex items-center space-x-1.5" type="button">
                  <span>Status</span>
                  <svg className="w-3.5 h-3.5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </button>
              </div>
              <div className="text-xs text-neutral-400 font-normal">9 de 1.247 contactos</div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse" id="contacts-after-archive-table">
                <thead>
                  <tr className="text-[11px] font-semibold text-neutral-500 border-b border-neutral-100 bg-white">
                    <th className="py-3 px-4 w-10 text-center">
                      <input className="w-4 h-4 text-neutral-800 rounded border-neutral-300 focus:ring-0" type="checkbox" aria-label="Selecionar todos" />
                    </th>
                    <th className="py-3 px-4 font-medium">
                      <span className="inline-flex items-center space-x-1 cursor-pointer">
                        <span>Nome</span>
                        <svg className="w-3 h-3 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path d="M19 14l-7 7m0 0l-7-7m7 7V3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        </svg>
                      </span>
                    </th>
                    <th className="py-3 px-4 font-medium">Canal preferido</th>
                    <th className="py-3 px-4 font-medium">Última interação</th>
                    <th className="py-3 px-4 font-medium">Status</th>
                    <th className="py-3 px-4 font-medium text-right pr-6">Ação rápida</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100 text-xs">
                  {rows.map(([name, email, channel, when, status, client]) => (
                    <tr key={email} className="hover:bg-neutral-50/70 transition-colors">
                      <td className="py-3.5 px-4 text-center">
                        <input className="w-4 h-4 text-neutral-800 rounded border-neutral-300 focus:ring-0" type="checkbox" aria-label={`Selecionar ${name}`} />
                      </td>
                      <td className="py-3.5 px-4">
                        <div className="font-semibold text-neutral-900">{name}</div>
                        <div className="text-neutral-400 text-[11px]">{email}</div>
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="inline-block bg-[#F2F2F2] text-neutral-700 px-3 py-1 rounded-md text-[11px] font-medium">{channel}</span>
                      </td>
                      <td className="py-3.5 px-4 text-neutral-600">{when}</td>
                      <td className="py-3.5 px-4">
                        <span className={`inline-block px-3 py-1 rounded-md text-[11px] ${client ? "bg-[#E7F2D8] text-[#33551B] font-medium" : "bg-[#F4F4F4] text-neutral-700"}`}>{status}</span>
                      </td>
                      <td className="py-3.5 px-4 text-right pr-6">
                        <Link href="/inbox" className="inline-flex items-center space-x-1 px-3.5 py-1.5 border border-neutral-200 rounded-full text-xs font-medium text-neutral-800 hover:bg-neutral-50 transition">
                          <span>Iniciar conversa</span>
                          <span className="text-neutral-400">↗</span>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-neutral-100 text-xs">
              <div className="text-neutral-400">A mostrar 1–9 de 1.247 contactos</div>
              <div className="flex items-center space-x-2">
                <button className="px-3.5 py-1.5 border border-neutral-200 rounded-full font-medium text-neutral-700 hover:bg-neutral-50 inline-flex items-center space-x-1" type="button">
                  <span>←</span>
                  <span>Anterior</span>
                </button>
                <button className="w-7 h-7 rounded-full bg-[#171717] text-white font-semibold flex items-center justify-center" type="button">
                  1
                </button>
                <button className="px-3.5 py-1.5 border border-neutral-200 rounded-full font-medium text-neutral-700 hover:bg-neutral-50 inline-flex items-center space-x-1" type="button">
                  <span>Seguinte</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
