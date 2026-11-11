import type { Metadata } from "next";
import Link from "next/link";
import { InstagramConnectDialog } from "@/components/live/instagram-connect";

export const metadata: Metadata = {
  title: "OZOU — Conectar Instagram",
};

const chats = [
  { name: "Sofia Martins", channel: "WhatsApp", preview: "Olá! Gost...", wa: true, active: true },
  { name: "Miguel Santos", channel: "Instagram", preview: "Obrigado...", wa: false, active: false },
  { name: "Inês Ferreira", channel: "E-mail", preview: "Re: Propos...", wa: false, active: false },
  { name: "João Almeida", channel: "SMS", preview: "Podemos...", wa: false, active: false },
  { name: "Beatriz Costa", channel: "WhatsApp", preview: "Perfeito...", wa: true, active: false },
  { name: "Pedro Ribeiro", channel: "Instagram", preview: "Qual é o...", wa: false, active: false },
  { name: "Carolina Sousa", channel: "E-mail", preview: "Já receb...", wa: false, active: false },
  { name: "Tiago Lopes", channel: "WhatsApp", preview: "Tenho interesse...", wa: true, active: false },
];

const nav = [
  ["/automacao-campanhas", "Automação & campanhas", "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"],
  ["/insights", "Insights & métricas", "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"],
  ["/contactos", "Contactos", "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"],
  ["/inicio", "Início", "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"],
  ["/empresas", "Empresas", "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"],
] as const;

export default function ConectarInstagramPage() {
  return (
    <div className="bg-[#dcdcdc] text-[#1e1e1e] font-sans antialiased overflow-hidden app-shell h-dvh flex selection:bg-neutral-800 selection:text-white ozou-ig">
      <style>{`.ozou-ig::-webkit-scrollbar,.ozou-ig *::-webkit-scrollbar{width:5px;height:5px}.ozou-ig::-webkit-scrollbar-thumb,.ozou-ig *::-webkit-scrollbar-thumb{background:rgba(0,0,0,0.15);border-radius:9999px}.ozou-ig::-webkit-scrollbar-track,.ozou-ig *::-webkit-scrollbar-track{background:transparent}`}</style>
      <aside className="w-64 flex-shrink-0 flex flex-col justify-between p-6 border-r border-[#cfcfcf] bg-[#d9d9d9] select-none h-screen">
        <div>
          <div className="flex items-center space-x-2 mb-8">
            <Link href="/" className="text-2xl font-black tracking-tight text-neutral-900">
              OZOU
            </Link>
            <span className="w-2 h-2 rounded-full bg-[#9ebb7c]" />
          </div>
          <div className="bg-[#cecece] hover:bg-[#c6c6c6] transition-colors rounded-xl p-3.5 mb-8 flex items-center justify-between cursor-pointer">
            <div>
              <h2 className="text-sm font-bold text-neutral-900 leading-none">Studio Workspace</h2>
              <span className="text-xs text-neutral-600 font-medium">Plano Pro</span>
            </div>
            <svg className="w-4 h-4 text-neutral-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
          <nav className="space-y-1">
            <p className="text-[10px] tracking-wider uppercase font-semibold text-neutral-500 mb-3 px-3">Espaço de trabalho</p>
            <Link className="flex items-center justify-between bg-[#1c1c1e] text-white px-3.5 py-2.5 rounded-xl font-medium text-sm shadow-sm" href="/inbox">
              <div className="flex items-center space-x-3">
                <svg className="w-4 h-4 text-neutral-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
                <span>Inbox unificado</span>
              </div>
              <span className="text-xs bg-neutral-800 text-neutral-300 font-semibold px-2 py-0.5 rounded-full">12</span>
            </Link>
            {nav.map(([href, label, d]) => (
              <Link key={href} className="flex items-center space-x-3 text-neutral-700 hover:text-black hover:bg-[#d0d0d0] px-3.5 py-2.5 rounded-xl font-medium text-sm transition-colors" href={href}>
                <svg className="w-4 h-4 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d={d} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
                <span className="leading-tight">{label}</span>
              </Link>
            ))}
          </nav>
        </div>
        <div className="space-y-4">
          <div className="bg-[#cfcfcf] rounded-2xl p-4 text-neutral-800">
            <svg className="w-5 h-5 mb-2 text-neutral-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
            </svg>
            <p className="font-bold text-sm leading-snug">
              Menos tarefas.
              <br />
              Mais conversas.
            </p>
            <a className="inline-flex items-center text-xs text-neutral-600 hover:text-neutral-900 mt-2 font-medium" href="#">
              A IA trata do resto. <span className="ml-1">↗</span>
            </a>
          </div>
          <div className="space-y-2 text-sm text-neutral-700 font-medium px-1">
            <Link className="flex items-center space-x-2 hover:text-black" href="/ajuda">
              <svg className="w-4 h-4 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
              <span>Ajuda e suporte</span>
            </Link>
            <Link className="flex items-center space-x-2 hover:text-black" href="/definicoes/equipa">
              <svg className="w-4 h-4 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
              <span>Definições</span>
            </Link>
          </div>
          <hr className="border-[#cfcfcf]" />
          <div className="flex items-center justify-between cursor-pointer pt-1">
            <div>
              <p className="text-sm font-bold text-neutral-900 leading-tight">Mariana Costa</p>
              <p className="text-xs text-neutral-600">Administradora</p>
            </div>
            <svg className="w-4 h-4 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </aside>

      <div className="flex-1 flex flex-col app-shell h-dvh overflow-hidden bg-[#dedede]">
        <header className="h-24 px-8 flex items-center justify-between border-b border-[#cfcfcf]">
          <div>
            <div className="flex items-center space-x-1.5 text-xs text-neutral-500 mb-1">
              <span>Workspace</span>
              <span>/</span>
              <span className="text-neutral-700 font-medium">Inbox unificado</span>
            </div>
            <h1 className="text-2xl font-black text-neutral-900 tracking-tight">Inbox unificado</h1>
            <p className="text-xs text-neutral-600 mt-0.5">Todas as conversas, no mesmo lugar.</p>
          </div>
          <div className="flex items-center space-x-2 bg-[#d1dad0] text-neutral-800 text-xs px-3.5 py-1.5 rounded-full font-medium">
            <span className="w-2 h-2 rounded-full bg-[#528a47]" />
            <span>4 canais conectados</span>
          </div>
        </header>
        <div className="px-8 py-3.5 flex items-center justify-between">
          <button className="bg-[#1c1c1e] text-white text-xs font-semibold px-4 py-2 rounded-full flex items-center space-x-2 shadow-sm" type="button">
            <span>Todas as conversas</span>
            <span className="bg-neutral-700 text-neutral-200 text-[11px] px-1.5 rounded-full">24</span>
          </button>
          <div className="flex items-center space-x-4">
            <span className="text-xs text-neutral-600 font-medium">A sua equipa está em dia.</span>
            <button className="bg-[#1c1c1e] hover:bg-neutral-800 text-white text-xs font-medium px-4 py-2 rounded-full flex items-center space-x-1 shadow-sm transition" type="button">
              <span className="text-sm leading-none">+</span>
              <span>Nova conversa</span>
            </button>
          </div>
        </div>
        <div className="flex-1 flex px-8 pb-6 gap-5 overflow-hidden">
          <section className="w-72 bg-[#ececec] rounded-2xl flex flex-col border border-[#d2d2d2] shadow-sm overflow-hidden">
            <div className="p-3 border-b border-[#e0e0e0]">
              <input id="ig-search" className="w-full bg-[#e1e1e1] border-none text-xs rounded-xl px-3 py-2 text-neutral-700 placeholder-neutral-500 focus:ring-1 focus:ring-neutral-400" placeholder="Pesquisar por nome ou..." type="text" aria-label="Pesquisar conversas" />
              <div className="mt-2.5 flex items-center justify-between px-1">
                <span className="text-xs font-semibold text-neutral-700 flex items-center space-x-1 cursor-pointer">
                  <span>Todos os canais</span>
                  <svg className="w-3.5 h-3.5 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </span>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto divide-y divide-[#e3e3e3] p-2 space-y-1">
              {chats.map((chat) => (
                <div key={chat.name} className={chat.active ? "p-3 bg-[#e2e2e2] rounded-xl cursor-pointer" : "p-3 hover:bg-[#e4e4e4] rounded-xl cursor-pointer"}>
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-xs font-bold text-neutral-900">{chat.name}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={chat.wa ? "text-[10px] font-semibold bg-[#d5e0d3] text-[#3d5e35] px-1.5 py-0.5 rounded" : "text-[10px] font-semibold bg-[#dfdfdf] text-neutral-700 px-1.5 py-0.5 rounded"}>{chat.channel}</span>
                    <span className="text-[11px] text-neutral-500 truncate">{chat.preview}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-2.5 text-center text-[11px] text-neutral-500 border-t border-[#dfdfdf]">8 de 24 conversas</div>
          </section>
          <section className="flex-1 bg-[#ececec] rounded-2xl flex flex-col justify-between border border-[#d2d2d2] shadow-sm p-4">
            <div className="flex items-center justify-between border-b border-[#dfdfdf] pb-3">
              <div className="flex items-center space-x-3">
                <span className="w-8 h-8 rounded-full bg-[#d0d0d0] flex items-center justify-center font-bold text-xs text-neutral-700">SM</span>
                <div>
                  <h3 className="text-sm font-bold text-neutral-900 leading-none">Sofia Martins</h3>
                  <span className="text-[11px] text-neutral-500">Online via WhatsApp</span>
                </div>
              </div>
              <Link href="/inbox/resolvida" className="text-xs bg-[#e0e0e0] hover:bg-[#d6d6d6] px-3 py-1.5 rounded-lg text-neutral-700 font-medium">
                Resolver
              </Link>
            </div>
            <div className="space-y-3 my-auto py-10 px-4">
              <div className="max-w-md bg-[#e0eae0] text-neutral-800 text-xs p-3.5 rounded-2xl rounded-tr-sm ml-auto">
                <span>Olá! Gostaria de esclarecer algumas dúvidas sobre o vosso serviço.</span>
                <div className="text-[10px] text-right text-neutral-500 mt-1">11:42 ✓✓</div>
              </div>
            </div>
            <div className="bg-[#dfdfdf] rounded-2xl p-3">
              <div className="flex items-center space-x-2 mb-2 text-neutral-600 text-xs">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
                <span className="text-[11px] font-medium">Anexar ficheiro</span>
              </div>
              <div className="flex items-center justify-between">
                <button className="bg-[#e7e7e7] hover:bg-white text-neutral-800 text-xs px-3.5 py-1.5 rounded-xl font-medium flex items-center space-x-1.5 border border-[#cecece]" type="button">
                  <span>✧</span>
                  <span>Gerar resposta com IA</span>
                </button>
                <button className="bg-[#1c1c1e] text-white text-xs px-4 py-2 rounded-xl font-semibold flex items-center space-x-1.5" type="button">
                  <span>Enviar</span>
                  <span>↗</span>
                </button>
              </div>
            </div>
          </section>
          <section className="w-80 bg-[#ececec] rounded-2xl p-6 border border-[#d2d2d2] shadow-sm flex flex-col justify-between">
            <div>
              <h2 className="text-xs font-semibold text-neutral-500 tracking-wider uppercase mb-5">Detalhes do contacto</h2>
              <h3 className="text-2xl font-black text-neutral-900 tracking-tight leading-none mb-1">Sofia Martins</h3>
              <p className="text-xs text-neutral-500 mb-3">Luna Studio</p>
              <span className="inline-block bg-[#d8e1d5] text-[#324f2b] text-[11px] font-semibold px-2.5 py-1 rounded-md mb-6">Lead qualificado</span>
              <div className="space-y-4 text-xs">
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-wider text-neutral-500 mb-0.5">Canal de Origem</p>
                  <p className="font-medium text-neutral-800">WhatsApp</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-wider text-neutral-500 mb-0.5">Telefone</p>
                  <p className="font-medium text-neutral-800">+244 912 345 678</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-wider text-neutral-500 mb-0.5">E-mail</p>
                  <p className="font-medium text-neutral-800">sofia@lunastudio.ao</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-wider text-neutral-500 mb-0.5">Responsável</p>
                  <div className="flex items-center space-x-1 font-medium text-neutral-800 cursor-pointer">
                    <span>Mariana Costa</span>
                    <svg className="w-3.5 h-3.5 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-wider text-neutral-500 mb-1">Etiquetas</p>
                  <div className="flex space-x-1.5">
                    <span className="bg-[#dcdcdc] text-neutral-700 text-[10px] font-semibold px-2 py-0.5 rounded">Plano Pro</span>
                    <span className="bg-[#dcdcdc] text-neutral-700 text-[10px] font-semibold px-2 py-0.5 rounded">Equipa de 5</span>
                  </div>
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-wider text-neutral-500 mb-1">Nota da equipa</p>
                  <p className="text-neutral-600 text-[11px] leading-relaxed">Interessada em centralizar os canais da equipa. Enviar convite para experimentar o plano Pro.</p>
                </div>
              </div>
            </div>
            <Link href="/contactos/sofia-martins" className="w-full mt-6 py-2.5 px-4 rounded-xl border border-neutral-400 hover:bg-[#e4e4e4] text-xs font-semibold text-neutral-800 flex items-center justify-center space-x-1 transition">
              <span>Ver contacto completo</span>
              <span>↗</span>
            </Link>
          </section>
        </div>
      </div>

      <InstagramConnectDialog />
    </div>
  );
}
