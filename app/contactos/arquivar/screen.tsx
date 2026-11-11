"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const contacts = [
  ["Sofia Martins", "sofia@lunastudio.p", "Lead qualificado", "gray"],
  ["Miguel Santos", "miguel@atelier.ao", "Novo lead", "gray"],
  ["Inês Ferreira", "ines@forma.ao", "Cliente", "green"],
  ["João Almeida", "joao@almeida.ao", "Novo lead", "gray"],
  ["Beatriz Costa", "beatriz@norte.ao", "Cliente", "green"],
  ["Pedro Ribeiro", "pedro@origem.ao", "Lead qualificado", "gray"],
  ["Carolina Sousa", "carolina@casa.ao", "Cliente", "green"],
  ["Tiago Lopes", "tiago@studiolopes", "Lead qualificado", "gray"],
  ["Marta Oliveira", "marta@verde.ao", "Sem resposta", "gray"],
  ["Rui Pereira", "rui@pontostudio.ao", "Sem resposta", "gray"],
] as const;

export default function ArchiveContactScreen() {
  const router = useRouter();
  const [open, setOpen] = useState(true);
  const [archived, setArchived] = useState(false);
  const rows = contacts.filter((contact) => !(archived && contact[0] === "Sofia Martins"));

  return (
    <div className="bg-[#dfe2e6] text-[#1c1f23] font-sans antialiased overflow-hidden select-none app-shell h-dvh relative flex">
      <style>{`
        .archive-scroll::-webkit-scrollbar { width: 6px; height: 6px; }
        .archive-scroll::-webkit-scrollbar-thumb { background: #c2c7cc; border-radius: 9999px; }
        .archive-scroll::-webkit-scrollbar-track { background: transparent; }
      `}</style>
      <aside className="w-[230px] h-screen bg-[#e5e8eb] border-r border-[#d4d8dc] flex flex-col justify-between p-4 flex-shrink-0 z-10">
        <div className="flex flex-col space-y-6">
          <div className="flex items-center gap-1.5 px-2 pt-1">
            <Link href="/" className="text-2xl font-bold tracking-tight text-[#111417]">
              OZOU
            </Link>
            <span className="w-2 h-2 rounded-full bg-[#8bc34a] -mb-2" />
          </div>
          <div className="bg-[#d9dcdf] rounded-xl p-3 flex items-center justify-between cursor-pointer hover:bg-[#d0d4d8] transition-colors">
            <div>
              <div className="text-xs font-semibold text-[#1c1f23] leading-tight">Studio Workspace</div>
              <div className="text-[11px] text-[#6b7280]">Plano Pro</div>
            </div>
            <svg className="w-3.5 h-3.5 text-[#4b5563]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
          <div>
            <div className="text-[10px] font-bold text-[#808994] uppercase tracking-wider px-2 mb-2">Espaço de trabalho</div>
            <nav className="space-y-0.5">
              <Link className="flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium text-[#4b5563] hover:bg-[#d9dcdf] transition-colors" href="/inbox">
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-[#606973]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                  <span>Inbox unificado</span>
                </div>
                <span className="bg-[#d0d5da] text-[#374151] text-[10px] font-semibold px-1.5 py-0.5 rounded-full">12</span>
              </Link>
              <Link className="flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-medium text-[#4b5563] hover:bg-[#d9dcdf] transition-colors" href="/automacao-campanhas">
                <svg className="w-4 h-4 text-[#606973]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
                <span>Automação & campanhas</span>
              </Link>
              <Link className="flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-medium text-[#4b5563] hover:bg-[#d9dcdf] transition-colors" href="/insights">
                <svg className="w-4 h-4 text-[#606973]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
                <span>Insights & métricas</span>
              </Link>
              <Link className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold bg-[#1e2226] text-white shadow-sm" href="/contactos/arquivar">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
                <span>Contactos</span>
              </Link>
              <Link className="flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-medium text-[#4b5563] hover:bg-[#d9dcdf] transition-colors" href="/inicio">
                <svg className="w-4 h-4 text-[#606973]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
                <span>Início</span>
              </Link>
              <Link className="flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-medium text-[#4b5563] hover:bg-[#d9dcdf] transition-colors" href="/empresas">
                <svg className="w-4 h-4 text-[#606973]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
                <span>Empresas</span>
              </Link>
            </nav>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <div className="bg-[#d2d6db] rounded-2xl p-4 relative">
            <svg className="w-4 h-4 text-[#1e2226] mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
            <p className="text-xs font-bold text-[#1a1d20] leading-snug">
              Menos tarefas.
              <br />
              Mais conversas.
            </p>
            <a className="inline-flex items-center gap-1 text-[11px] text-[#555d66] font-medium mt-3 hover:text-black" href="#">
              A IA trata do resto.
              <span className="text-[10px]">↗</span>
            </a>
          </div>
          <div className="space-y-1">
            <a className="flex items-center gap-3 px-2 py-1.5 rounded-lg text-xs font-medium text-[#505761] hover:bg-[#d9dcdf] transition-colors" href="#">
              <svg className="w-4 h-4 text-[#68707a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
              <span>Ajuda e suporte</span>
            </a>
            <Link className="flex items-center gap-3 px-2 py-1.5 rounded-lg text-xs font-medium text-[#505761] hover:bg-[#d9dcdf] transition-colors" href="/definicoes/equipa">
              <svg className="w-4 h-4 text-[#68707a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
              <span>Definições</span>
            </Link>
          </div>
          <div className="pt-3 border-t border-[#d4d8dc] flex items-center justify-between cursor-pointer">
            <div>
              <div className="text-xs font-semibold text-[#1a1d20]">Mariana Costa</div>
              <div className="text-[11px] text-[#6b7280]">Administradora</div>
            </div>
            <svg className="w-3.5 h-3.5 text-[#505761]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </aside>

      <main className="archive-scroll flex-1 flex flex-col h-screen overflow-y-auto px-10 py-6">
        <header className="flex items-center justify-between mb-4">
          <div>
            <nav className="flex items-center space-x-1 text-xs text-[#717b86] mb-1 font-normal">
              <span>Workspace</span>
              <span className="text-[#9ca3af]">/</span>
              <span>Contactos</span>
            </nav>
            <h1 className="text-2xl font-bold tracking-tight text-[#111417]">Contactos</h1>
            <p className="text-xs text-[#6e7782] mt-0.5">Relações próximas começam aqui.</p>
          </div>
          <div className="flex items-center gap-2 bg-[#d7dbdf] px-3 py-1.5 rounded-full text-xs font-medium text-[#374151]">
            <span className="w-2 h-2 rounded-full bg-[#52a447]" />
            <span>4 canais conectados</span>
          </div>
        </header>
        <section className="flex items-center justify-between mt-4 mb-4">
          <div>
            <h2 className="text-xl font-bold text-[#111417]">As pessoas p</h2>
            <p className="text-xs text-[#6e7782] mt-0.5">1.248 contactos · 84 adici</p>
          </div>
          <div className="flex items-center gap-2.5">
            <button className="bg-[#dcdfe3] border border-[#cbcfd4] text-[#1f2429] text-xs font-semibold px-4 py-2 rounded-full hover:bg-[#d1d5da] transition-colors" type="button">
              Importar contactos
            </button>
            <button className="bg-[#1c1f23] text-white text-xs font-semibold px-4 py-2 rounded-full flex items-center gap-1.5 hover:bg-black transition-colors" type="button">
              <span>+</span>
              <span>Novo contacto</span>
            </button>
          </div>
        </section>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <button className="bg-[#1e2226] text-white text-xs font-semibold px-4 py-2 rounded-full" type="button">
              Todos 1.248
            </button>
            <button className="bg-transparent text-[#5d6671] text-xs font-medium px-3 py-2 hover:text-black" type="button">
              Leads
            </button>
          </div>
          <div className="text-xs text-[#757e89]">Última sincronização às 10:45</div>
        </div>
        <div className="bg-[#e4e7ea] border border-[#d2d6db] rounded-2xl flex-1 flex flex-col overflow-hidden mb-4 shadow-sm">
          <div className="p-3 border-b border-[#d8dce0] flex items-center justify-between">
            <div className="w-72">
              <input
                className="w-full bg-[#dadde1] border border-transparent rounded-lg px-3 py-1.5 text-xs text-[#1c1f23] placeholder-[#7d8793] focus:outline-none focus:border-[#9ca3af]"
                placeholder="Pesquisar por nome,"
                type="text"
                aria-label="Pesquisar contactos"
              />
            </div>
            <div className="text-xs text-[#757e89] font-medium pr-2">10 de 1.248 contactos</div>
          </div>
          <div className="overflow-x-auto flex-1">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="text-[#69727d] border-b border-[#d8dce0]">
                  <th className="py-2.5 px-4 font-normal w-8">
                    <input className="rounded border-gray-400 text-black focus:ring-0 w-3.5 h-3.5 bg-transparent" type="checkbox" aria-label="Selecionar todos" />
                  </th>
                  <th className="py-2.5 px-2 font-medium">
                    <span className="inline-flex items-center gap-1">
                      Nome <span className="text-[10px]">↓</span>
                    </span>
                  </th>
                  <th className="py-2.5 px-4 font-medium">Status</th>
                  <th className="py-2.5 px-4 font-medium text-right pr-6">Ação rápida</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#dadde2] text-[#2c3238]">
                {rows.map(([name, email, status, tone]) => (
                  <tr key={email} className="hover:bg-[#dadfe3] transition-colors">
                    <td className="py-3 px-4">
                      <input className="rounded border-gray-400 text-black focus:ring-0 w-3.5 h-3.5 bg-transparent" type="checkbox" aria-label={`Selecionar ${name}`} />
                    </td>
                    <td className="py-3 px-2">
                      <div className="font-medium text-[#111417]">{name}</div>
                      <div className="text-[11px] text-[#6e7782]">{email}</div>
                    </td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-2.5 py-1 rounded-md text-[11px] font-medium ${
                          tone === "green" ? "bg-[#cdd8cc] text-[#2d4d30]" : "bg-[#d2d7dc] text-[#333a42]"
                        }`}
                      >
                        {status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-right pr-6">
                      <button className="border border-[#c6cbd1] rounded-lg px-3 py-1 text-[11px] font-medium text-[#2d343b] hover:bg-white inline-flex items-center gap-1" type="button">
                        Iniciar conversa <span>↗</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-5 py-3 border-t border-[#d8dce0] flex items-center justify-between text-xs text-[#6a727d]">
            <div>A mostrar 1–10 de 1.248 contactos</div>
            <div className="flex items-center gap-2">
              <button className="px-3.5 py-1.5 rounded-full border border-[#cbd0d5] text-[#2b3036] hover:bg-[#d4d9de] font-medium flex items-center gap-1" type="button">
                <span>←</span> Anterior
              </button>
              <span className="w-7 h-7 rounded-full bg-[#1b1e22] text-white flex items-center justify-center font-medium text-xs">1</span>
              <button className="px-3.5 py-1.5 rounded-full border border-[#cbd0d5] text-[#2b3036] hover:bg-[#d4d9de] font-medium flex items-center gap-1" type="button">
                Seguinte <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </main>

      {open ? (
        <div className="fixed inset-0 bg-[#000000]/15 z-40 flex items-center justify-center p-4 backdrop-blur-[0.5px]">
          <div className="bg-white rounded-[28px] w-full max-w-[640px] p-10 relative shadow-2xl flex flex-col z-50" role="dialog" aria-modal="true" aria-labelledby="archive-title">
            <button
              className="absolute top-6 right-6 w-9 h-9 rounded-full border border-[#e3e6ea] bg-[#fafafa] flex items-center justify-center text-[#59626e] hover:text-black hover:bg-[#f1f3f5] transition-colors"
              type="button"
              aria-label="Fechar"
              onClick={() => setOpen(false)}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </button>
            <h2 className="text-[28px] font-bold text-[#14171a] tracking-tight mb-3" id="archive-title">
              Arquivar Sofia Martins?
            </h2>
            <div className="text-[#555e6b] text-[14px] leading-relaxed mb-8">
              <p>O contacto deixa de aparecer na lista ativa.</p>
              <p>O histórico de conversas permanece guardado.</p>
            </div>
            <div className="bg-[#f7f8f9] rounded-2xl p-6 mb-7 border border-[#ebeff2]">
              <h3 className="text-[15px] font-bold text-[#14171a] mb-4">O que muda</h3>
              <ul className="space-y-2.5 text-[13.5px] text-[#48505c]">
                {["O contacto fica fora das novas campanhas.", "Os dados e mensagens não são eliminados.", "Pode restaurar o contacto na vista de arquivados."].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#525a65] mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-[12px] text-[#78828f] mb-8 font-normal">Arquivar não equivale a um pedido de eliminação de dados.</p>
            <div className="flex flex-col gap-3">
              <button
                className="w-full py-3.5 px-4 rounded-full border border-[#d5dae0] text-[#1c2024] font-medium text-sm hover:bg-[#f6f8f9] transition-colors"
                type="button"
                onClick={() => setOpen(false)}
              >
                Manter contacto
              </button>
              <button
                className="w-full py-3.5 px-4 rounded-full bg-[#1b1e22] text-white font-medium text-sm hover:bg-black transition-colors shadow-sm"
                type="button"
                onClick={() => {
                  setArchived(true);
                  setOpen(false);
                  router.push("/contactos/arquivados");
                }}
              >
                Sim, arquivar contacto
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
