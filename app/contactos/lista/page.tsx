import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "OZOU — Contactos",
};

const contacts = [
  ["Sofia Martins", "sofia@lunastudio.ao", "WhatsApp", "Hoje, 10:42", "Lead qualificado", false],
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

function Icon({ d, className }: { d: string; className: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path d={d} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
    </svg>
  );
}

const nav = [
  ["/inbox", "Inbox unificado", "M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4", true],
  ["/automacao-campanhas", "Automação & campanhas", "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z", false],
  ["/insights", "Insights & métricas", "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z", false],
  ["/inicio", "Início", "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6", false],
  ["/empresas", "Empresas", "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4", false],
] as const;

export default function ContactosListaPage() {
  return (
    <div className="min-h-screen flex bg-[#FAFAFA] text-[#111315]">
      <aside className="w-[260px] flex-shrink-0 bg-white border-r border-[#EEEEEE] flex flex-col justify-between p-6 h-screen sticky top-0 overflow-y-auto">
        <div className="space-y-6">
          <div className="flex items-center gap-2 px-1">
            <Link href="/" className="text-2xl font-bold tracking-tight text-[#111315]">
              OZOU
            </Link>
            <span className="w-2 h-2 rounded-full bg-[#BBE240] inline-block" />
          </div>
          <div className="bg-[#F8F9FA] rounded-2xl p-3.5 flex items-center justify-between cursor-pointer hover:bg-gray-100 transition-colors">
            <div>
              <h2 className="text-sm font-semibold text-[#111315] leading-snug">Studio Workspace</h2>
              <p className="text-xs text-[#8E95A0]">Plano Pro</p>
            </div>
            <svg className="w-4 h-4 text-[#8E95A0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
          <div className="pt-2">
            <p className="text-[11px] font-semibold text-[#8E95A0] tracking-wider uppercase px-2">Espaço de trabalho</p>
          </div>
          <nav className="space-y-1">
            {nav.slice(0, 3).map(([href, label, d, badge]) => (
              <Link key={href} className="flex items-center justify-between px-3 py-2.5 rounded-full text-[#4E5562] hover:bg-gray-50 transition-colors" href={href}>
                <div className="flex items-center gap-3">
                  <Icon className="w-5 h-5 text-[#8E95A0]" d={d} />
                  <span className="text-sm font-medium leading-tight">{label}</span>
                </div>
                {badge ? <span className="text-[11px] font-semibold bg-[#F1F3F5] text-[#4E5562] px-2 py-0.5 rounded-full">12</span> : null}
              </Link>
            ))}
            <Link className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-[#111315] text-white shadow-sm" href="/contactos/lista">
              <Icon className="w-5 h-5 text-white" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              <span className="text-sm font-medium">Contactos</span>
            </Link>
            {nav.slice(3).map(([href, label, d]) => (
              <Link key={href} className="flex items-center gap-3 px-3 py-2.5 rounded-full text-[#4E5562] hover:bg-gray-50 transition-colors" href={href}>
                <Icon className="w-5 h-5 text-[#8E95A0]" d={d} />
                <span className="text-sm font-medium">{label}</span>
              </Link>
            ))}
          </nav>
        </div>
        <div className="space-y-4 pt-4">
          <div className="bg-[#F4F5F4] rounded-2xl p-4 relative">
            <div className="mb-2">
              <Icon className="w-4 h-4 text-[#111315]" d="M12 3v3m0 12v3M3 12h3m12 0h3M5.636 5.636l2.122 2.122m8.486 8.486l2.122 2.122M5.636 18.364l2.122-2.122m8.486-8.486l2.122-2.122" />
            </div>
            <p className="text-sm font-semibold text-[#111315] leading-snug">
              Menos tarefas.
              <br />
              Mais conversas.
            </p>
            <a className="inline-flex items-center text-xs text-[#8E95A0] hover:text-[#111315] mt-3 group transition-colors" href="#">
              A IA trata do resto.
              <span className="ml-1 text-[11px] group-hover:translate-x-0.5 transition-transform">↗</span>
            </a>
          </div>
          <div className="space-y-1">
            <Link className="flex items-center gap-3 px-2 py-1.5 text-xs font-medium text-[#6F767E] hover:text-[#111315]" href="/ajuda">
              <Icon className="w-4 h-4 text-[#8E95A0]" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              Ajuda e suporte
            </Link>
            <Link className="flex items-center gap-3 px-2 py-1.5 text-xs font-medium text-[#6F767E] hover:text-[#111315]" href="/definicoes/equipa">
              <Icon className="w-4 h-4 text-[#8E95A0]" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              Definições
            </Link>
          </div>
          <div className="pt-2 border-t border-[#F0F0F0] flex items-center justify-between cursor-pointer">
            <div>
              <p className="text-xs font-semibold text-[#111315]">Mariana Costa</p>
              <p className="text-[11px] text-[#8E95A0]">Administradora</p>
            </div>
            <svg className="w-3.5 h-3.5 text-[#8E95A0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </aside>

      <main className="flex-1 min-w-0 bg-[#FAFAFA] flex flex-col">
        <header className="bg-white border-b border-[#EEEEEE] px-8 py-6">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5 text-xs text-[#8E95A0]">
              <span>Workspace</span>
              <span>/</span>
              <span className="text-[#111315]">Contactos</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EEF5E5] rounded-full text-xs font-medium text-[#2E4A1D]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#528A2C]" />
              4 canais conectados
            </div>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-[#111315]">Contactos</h1>
          <p className="text-xs text-[#6F767E] mt-0.5">Relações próximas começam aqui.</p>
        </header>
        <div className="p-8 space-y-6 max-w-[1240px]">
          <section className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold tracking-tight text-[#111315]">As pessoas por trás das conversas.</h2>
              <p className="text-xs text-[#6F767E] mt-1">1.248 contactos &nbsp;·&nbsp; 84 adicionados este mês</p>
            </div>
            <div className="flex items-center gap-2.5">
              <Link href="/contactos/importar" className="px-4 py-2 text-xs font-medium bg-white text-[#111315] border border-[#E5E7EB] rounded-full hover:bg-gray-50 transition-colors shadow-xs">
                Importar contactos
              </Link>
              <Link href="/contactos/novo" className="px-4 py-2 text-xs font-medium bg-[#111315] text-white rounded-full hover:bg-black transition-colors flex items-center gap-1.5 shadow-xs">
                <span>+</span> Novo contacto
              </Link>
            </div>
          </section>
          <section className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2 overflow-x-auto">
              <button className="px-4 py-1.5 text-xs font-medium bg-[#111315] text-white rounded-full" type="button">
                Todos <span className="ml-1 opacity-90 font-normal">1.248</span>
              </button>
              {[
                ["Leads", "342"],
                ["Clientes", "856"],
                ["Sem resposta", "50"],
              ].map(([label, count]) => (
                <button key={label} className="px-4 py-1.5 text-xs font-medium bg-white text-[#4E5562] border border-[#E5E7EB] rounded-full hover:border-gray-400 transition-colors" type="button">
                  {label} <span className="ml-1 text-[#8E95A0]">{count}</span>
                </button>
              ))}
            </div>
            <div className="text-[11px] text-[#8E95A0] whitespace-nowrap">Última sincronização às 10:45</div>
          </section>
          <div className="bg-white border border-[#EFEFEF] rounded-2xl shadow-sm overflow-hidden">
            <div className="p-4 border-b border-[#F0F0F0] flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-3">
                <div className="relative w-80">
                  <input className="w-full text-xs pl-3.5 pr-4 py-2 bg-[#F9FAFB] border-0 rounded-xl placeholder-[#8E95A0] focus:ring-1 focus:ring-black" id="contacts-lista-search" placeholder="Pesquisar por nome, e-mail ou telefone..." type="text" />
                </div>
                {["Canal preferido", "Status"].map((label) => (
                  <button key={label} className="flex items-center gap-2 px-3.5 py-2 text-xs font-medium text-[#4E5562] border border-[#E5E7EB] rounded-full hover:bg-gray-50 transition-colors" type="button">
                    <span>{label}</span>
                    <svg className="w-3.5 h-3.5 text-[#8E95A0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </button>
                ))}
              </div>
              <div className="text-xs text-[#8E95A0] pr-2">10 de 1.248 contactos</div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse" id="contacts-lista-table">
                <thead>
                  <tr className="border-b border-[#F0F0F0] text-[11px] font-medium text-[#8E95A0]">
                    <th className="w-10 px-4 py-3 text-center">
                      <input className="w-3.5 h-3.5 rounded border-[#D1D5DB] text-black focus:ring-0" type="checkbox" />
                    </th>
                    <th className="px-4 py-3 font-medium">
                      <span className="inline-flex items-center gap-1 cursor-pointer">
                        Nome
                        <svg className="w-3 h-3 text-[#8E95A0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path d="M19 14l-7 7m0 0l-7-7m7 7V3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        </svg>
                      </span>
                    </th>
                    <th className="px-4 py-3 font-medium">Canal preferido</th>
                    <th className="px-4 py-3 font-medium">Última interação</th>
                    <th className="px-4 py-3 font-medium">Status</th>
                    <th className="px-4 py-3 font-medium text-left">Ação rápida</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F6F6F6] text-xs">
                  {contacts.map(([name, email, channel, when, status, client], index) => (
                    <tr key={email} className="hover:bg-[#FCFCFC] transition-colors">
                      <td className="w-10 px-4 py-3.5 text-center">
                        <input className="w-3.5 h-3.5 rounded border-[#D1D5DB] text-black focus:ring-0" id={`contacts-lista-row-${index + 1}`} type="checkbox" />
                      </td>
                      <td className="px-4 py-3.5">
                        {name === "Sofia Martins" ? (
                          <Link href="/contactos/sofia-martins" className="font-medium text-[#111315]">
                            {name}
                          </Link>
                        ) : (
                          <div className="font-medium text-[#111315]">{name}</div>
                        )}
                        <div className="text-[11px] text-[#8E95A0]">{email}</div>
                      </td>
                      <td className="px-4 py-3.5">
                        <span className="inline-block px-2.5 py-1 text-[11px] font-medium text-[#4E5562] bg-[#F4F5F6] rounded-md">{channel}</span>
                      </td>
                      <td className="px-4 py-3.5 text-[#6F767E]">{when}</td>
                      <td className="px-4 py-3.5">
                        <span className={`inline-block px-2.5 py-1 text-[11px] font-medium rounded-md ${client ? "text-[#3A6823] bg-[#EAF3DE]" : "text-[#4E5562] bg-[#F4F5F6]"}`}>{status}</span>
                      </td>
                      <td className="px-4 py-3.5">
                        <Link href={name === "Sofia Martins" ? "/inbox/sugestao" : "/inbox"} className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-[#111315] border border-[#E5E7EB] rounded-full hover:bg-gray-50 transition-colors">
                          Iniciar conversa <span>↗</span>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-6 py-4 border-t border-[#F0F0F0] flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-[#8E95A0]">A mostrar 1–10 de 1.248 contactos</p>
              <div className="flex items-center gap-2">
                <button className="px-3.5 py-1.5 text-xs font-medium text-[#111315] border border-[#E5E7EB] rounded-full hover:bg-gray-50 transition-colors flex items-center gap-1.5" type="button">
                  <span>←</span> Anterior
                </button>
                <button className="w-7 h-7 text-xs font-medium bg-[#111315] text-white rounded-full flex items-center justify-center" type="button">
                  1
                </button>
                <button className="px-3.5 py-1.5 text-xs font-medium text-[#111315] border border-[#E5E7EB] rounded-full hover:bg-gray-50 transition-colors flex items-center gap-1.5" type="button">
                  Seguinte <span>→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
