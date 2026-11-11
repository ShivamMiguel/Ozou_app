import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "OZOU — Importação concluída",
};

function Icon({ d, className }: { d: string; className: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <path d={d} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const nav = [
  ["/inbox", "Inbox unificado", "M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4", "12"],
  ["/campanhas", "Automação & campanhas", "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z", ""],
  ["/insights", "Insights & métricas", "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z", ""],
  ["/inicio", "Início", "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6", ""],
  ["/empresas", "Empresas", "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4", ""],
] as const;

const rows = [
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

export default function ImportadosPage() {
  return (
    <div className="min-h-screen flex text-[13px] text-gray-800 ozou-importados" style={{ backgroundColor: "#f7f8f9" }}>
      <style>{`.ozou-importados ::-webkit-scrollbar{width:6px;height:6px}.ozou-importados ::-webkit-scrollbar-thumb{background:#e2e4e8;border-radius:9999px}.ozou-importados ::-webkit-scrollbar-track{background:transparent}`}</style>
      <aside className="w-[230px] flex-shrink-0 bg-[#fbfbfb] border-r border-[#ebecee] flex flex-col justify-between py-6 px-4 min-h-screen">
        <div className="flex flex-col gap-6">
          <div className="px-2 flex items-center gap-1.5">
            <Link href="/" className="text-xl font-black tracking-tight text-[#111315]">OZOU</Link>
            <span className="w-2 h-2 rounded-full bg-[#bcd941] inline-block mb-1" />
          </div>
          <div className="bg-white border border-[#ebecee] rounded-xl p-3 flex items-center justify-between cursor-pointer hover:border-gray-300 transition-colors shadow-sm">
            <div>
              <div className="font-semibold text-xs text-[#111315]">Studio Workspace</div>
              <div className="text-[11px] text-[#6f767e] mt-0.5">Plano Pro</div>
            </div>
            <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
          </div>
          <div>
            <div className="px-2 text-[10px] font-semibold text-[#808893] uppercase tracking-wider mb-2">Espaço de trabalho</div>
            <nav className="space-y-1">
              {nav.slice(0, 3).map(([href, label, d, badge]) => (
                <Link key={href} className="flex items-center justify-between px-3 py-2 rounded-xl text-[#565d67] hover:bg-gray-100 transition-colors font-medium" href={href}>
                  <div className="flex items-center gap-3">
                    <Icon className="w-4 h-4 text-[#6f767e]" d={d} />
                    <span>{label}</span>
                  </div>
                  {badge ? <span className="text-[11px] font-semibold bg-[#eef0f2] text-[#555b64] px-1.5 py-0.5 rounded-full">{badge}</span> : null}
                </Link>
              ))}
              <Link className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-[#111315] text-white font-medium shadow-sm" href="/contactos/importados">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round" /></svg>
                <span>Contactos</span>
              </Link>
              {nav.slice(3).map(([href, label, d]) => (
                <Link key={href} className="flex items-center gap-3 px-3 py-2 rounded-xl text-[#565d67] hover:bg-gray-100 transition-colors font-medium" href={href}>
                  <Icon className="w-4 h-4 text-[#6f767e]" d={d} />
                  <span>{label}</span>
                </Link>
              ))}
            </nav>
          </div>
          <div className="bg-[#f2f4ec] rounded-2xl p-4 flex flex-col justify-between mt-1">
            <div>
              <Icon className="w-4 h-4 text-[#434b35] mb-2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              <div className="font-bold text-[13px] text-[#1a1f13] leading-snug">Menos tarefas.<br />Mais conversas.</div>
            </div>
            <a className="text-[11px] text-[#5b644e] font-medium flex items-center gap-1 mt-4 hover:underline" href="#">A IA trata do resto. ↗</a>
          </div>
        </div>
        <div className="pt-4 border-t border-[#ebecee] flex flex-col gap-2">
          <Link className="flex items-center gap-2.5 px-2 py-1.5 text-[#565d67] hover:text-[#111315] font-medium transition-colors" href="/ajuda">
            <Icon className="w-4 h-4 text-[#6f767e]" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            <span className="text-xs">Ajuda e suporte</span>
          </Link>
          <Link className="flex items-center gap-2.5 px-2 py-1.5 text-[#565d67] hover:text-[#111315] font-medium transition-colors" href="/definicoes/equipa">
            <svg className="w-4 h-4 text-[#6f767e]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-xs">Definições</span>
          </Link>
          <div className="pt-3 mt-1 border-t border-[#f0f1f3] flex items-center justify-between cursor-pointer px-1">
            <div>
              <div className="text-xs font-semibold text-[#111315]">Mariana Costa</div>
              <div className="text-[11px] text-[#6f767e]">Administradora</div>
            </div>
            <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
          </div>
        </div>
      </aside>
      <main className="flex-1 flex flex-col min-w-0 bg-[#fbfbfb]">
        <header className="pt-6 px-10 pb-5 border-b border-[#ebecee] flex items-start justify-between">
          <div>
            <nav className="text-[11px] font-medium text-[#8d95a0] flex items-center gap-1.5 mb-1.5">
              <span>Workspace</span><span className="text-gray-400">/</span><span className="text-[#555d67]">Contactos</span>
            </nav>
            <h1 className="text-2xl font-bold tracking-tight text-[#111315]">Contactos</h1>
            <p className="text-xs text-[#6f767e] mt-1 font-normal">Relações próximas começam aqui.</p>
          </div>
          <div className="bg-[#edf0e7] text-[#4d5b3d] text-[11px] font-medium px-3 py-1 rounded-full flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6d8a39]" /><span>4 canais conectados</span>
          </div>
        </header>
        <div className="p-10 space-y-6">
          <div className="bg-[#eff5e9] border border-[#e1ebda] rounded-2xl p-4 flex items-start justify-between shadow-xs">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 text-[#3e5623]">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
              <div>
                <h3 className="font-semibold text-xs text-[#1e2813]">47 contactos importados.</h3>
                <p className="text-[11px] text-[#556346] mt-0.5">2 duplicados ignorados · Corrija o telefone da linha 23 e volte a importar.</p>
              </div>
            </div>
          </div>
          <div className="flex items-end justify-between pt-1">
            <div>
              <h2 className="text-xl font-bold text-[#111315] tracking-tight">As pessoas por trás das conversas.</h2>
              <p className="text-xs text-[#6f767e] mt-1">1.295 contactos · 131 adicionados este mês</p>
            </div>
            <div className="flex items-center gap-2.5">
              <Link href="/contactos/importar" className="px-4 py-2 bg-white border border-[#dce0e5] text-[#111315] font-medium text-xs rounded-full hover:bg-gray-50 transition-colors shadow-xs">Importar contactos</Link>
              <Link href="/contactos/novo" className="px-4 py-2 bg-[#111315] text-white font-medium text-xs rounded-full hover:bg-black transition-colors flex items-center gap-1 shadow-sm"><span>+</span> Novo contacto</Link>
            </div>
          </div>
          <div className="flex items-center justify-between pt-1">
            <div className="flex items-center gap-2">
              <button className="px-4 py-1.5 bg-[#111315] text-white font-medium text-xs rounded-full shadow-xs" type="button">Todos <span className="font-normal opacity-90 ml-1">1.295</span></button>
              <button className="px-4 py-1.5 bg-white border border-[#dce0e5] text-[#33383f] font-medium text-xs rounded-full hover:bg-gray-50 transition-colors" type="button">Leads <span className="text-[#6f767e] ml-1">389</span></button>
              <button className="px-4 py-1.5 bg-white border border-[#dce0e5] text-[#33383f] font-medium text-xs rounded-full hover:bg-gray-50 transition-colors" type="button">Clientes <span className="text-[#6f767e] ml-1">856</span></button>
              <button className="px-4 py-1.5 bg-white border border-[#dce0e5] text-[#33383f] font-medium text-xs rounded-full hover:bg-gray-50 transition-colors" type="button">Sem resposta <span className="text-[#6f767e] ml-1">50</span></button>
            </div>
            <div className="text-[11px] text-[#868d97]">Última sincronização às 10:45</div>
          </div>
          <div className="bg-white border border-[#ebecee] rounded-2xl overflow-hidden shadow-xs">
            <div className="p-4 border-b border-[#f0f1f3] flex items-center justify-between gap-4">
              <div className="flex items-center gap-3 flex-1 max-w-2xl">
                <div className="flex-1 relative">
                  <input id="contacts-importados-search" className="w-full bg-[#f4f5f6] border-0 placeholder-[#8f96a1] text-xs rounded-xl py-2 px-4 focus:ring-1 focus:ring-gray-400 focus:bg-white transition-all text-[#111315]" placeholder="Pesquisar por nome, e-mail ou telefone..." type="text" />
                </div>
                <button className="px-3.5 py-2 border border-[#dce0e5] rounded-xl text-xs font-medium text-[#33383f] hover:bg-gray-50 transition-colors flex items-center gap-1.5 bg-white" type="button">
                  <span>Canal preferido</span>
                  <svg className="w-3 h-3 text-[#6f767e]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
                </button>
                <button className="px-3.5 py-2 border border-[#dce0e5] rounded-xl text-xs font-medium text-[#33383f] hover:bg-gray-50 transition-colors flex items-center gap-1.5 bg-white" type="button">
                  <span>Status</span>
                  <svg className="w-3 h-3 text-[#6f767e]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
                </button>
              </div>
              <div className="text-xs text-[#868d97] font-normal">10 de 1.295 contactos</div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse" id="contacts-importados-table">
                <thead>
                  <tr className="text-[11px] font-semibold text-[#8b929c] border-b border-[#f0f1f3]">
                    <th className="py-3 px-4 w-10"><input className="w-3.5 h-3.5 rounded border-gray-300 text-black focus:ring-0 focus:ring-offset-0 cursor-pointer" type="checkbox" aria-label="Selecionar todos" /></th>
                    <th className="py-3 px-4 font-medium">
                      <span className="inline-flex items-center gap-1 cursor-pointer">
                        <span>Nome</span>
                        <svg className="w-3 h-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
                      </span>
                    </th>
                    <th className="py-3 px-4 font-medium">Canal preferido</th>
                    <th className="py-3 px-4 font-medium">Última interacção</th>
                    <th className="py-3 px-4 font-medium">Status</th>
                    <th className="py-3 px-4 font-medium">Acção rápida</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#f5f6f7] text-xs">
                  {rows.map(([name, email, channel, when, status, client], index) => (
                    <tr key={email} className="hover:bg-gray-50/70 transition-colors">
                      <td className="py-3.5 px-4"><input className="w-3.5 h-3.5 rounded border-gray-300 text-black focus:ring-0 cursor-pointer" type="checkbox" aria-label={`Selecionar ${name}`} /></td>
                      <td className="py-3.5 px-4">
                        {index === 0 ? (
                          <Link href="/contactos/sofia-martins" className="font-medium text-[#111315]">{name}</Link>
                        ) : (
                          <div className="font-medium text-[#111315]">{name}</div>
                        )}
                        <div className="text-[11px] text-[#868d97]">{email}</div>
                      </td>
                      <td className="py-3.5 px-4"><span className="inline-block bg-[#f4f5f6] text-[#40454d] text-[11px] font-medium px-2.5 py-1 rounded-md">{channel}</span></td>
                      <td className="py-3.5 px-4 text-[#4a5059]">{when}</td>
                      <td className="py-3.5 px-4">
                        <span className={`inline-block text-[11px] font-medium px-2.5 py-1 rounded-md ${client ? "bg-[#e5eed6] text-[#405423]" : "bg-[#f5f6f7] text-[#424851]"}`}>{status}</span>
                      </td>
                      <td className="py-3.5 px-4">
                        <Link href={index === 0 ? "/inbox/sugestao" : "/inbox"} className="px-3.5 py-1.5 border border-[#dce0e5] rounded-full text-xs font-medium text-[#111315] hover:bg-gray-100 transition-colors inline-flex items-center gap-1">
                          <span>Iniciar conversa</span><span className="text-[10px]">↗</span>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="py-4 px-6 border-t border-[#f0f1f3] flex items-center justify-between">
              <div className="text-xs text-[#868d97]">A mostrar 1–10 de 1.295 contactos</div>
              <div className="flex items-center gap-2">
                <button className="px-4 py-1.5 border border-[#dce0e5] rounded-full text-xs font-medium text-[#111315] hover:bg-gray-50 transition-colors flex items-center gap-1.5" type="button"><span>←</span><span>Anterior</span></button>
                <button className="w-7 h-7 rounded-full bg-[#111315] text-white text-xs font-medium flex items-center justify-center" type="button">1</button>
                <button className="px-4 py-1.5 border border-[#dce0e5] rounded-full text-xs font-medium text-[#111315] hover:bg-gray-50 transition-colors flex items-center gap-1.5" type="button"><span>Seguinte</span><span>→</span></button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
