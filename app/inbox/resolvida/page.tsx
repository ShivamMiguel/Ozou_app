import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "OZOU — Inbox · Resolvida sem resposta",
};

const conversations = [
  { name: "Sofia Martins", time: "10:42", channel: "WhatsApp", badge: "bg-[#e4f5df] text-[#345921]", preview: "Olá! Gostava de saber mais sobre...", count: "2", dark: true, active: true },
  { name: "Miguel Santos", time: "10:35", channel: "Instagram", badge: "bg-[#f3edf8] text-[#6d398b]", preview: "Obrigado pela ajuda! 🙌", count: "1", dark: false, active: false },
  { name: "Inês Ferreira", time: "10:18", channel: "E-mail", badge: "bg-gray-100 text-gray-600", preview: "Re: Proposta de acompanhamento", count: "", dark: false, active: false },
  { name: "João Almeida", time: "09:54", channel: "SMS", badge: "bg-gray-100 text-gray-600", preview: "Podemos falar amanhã?", count: "3", dark: false, active: false },
  { name: "Beatriz Costa", time: "09:32", channel: "WhatsApp", badge: "bg-[#e4f5df] text-[#345921]", preview: "Perfeito, fico a aguardar.", count: "", dark: false, active: false },
  { name: "Pedro Ribeiro", time: "Ontem", channel: "Instagram", badge: "bg-[#f3edf8] text-[#6d398b]", preview: "Qual é o prazo de entrega?", count: "", dark: false, active: false },
  { name: "Carolina Sousa", time: "Ontem", channel: "E-mail", badge: "bg-gray-100 text-gray-600", preview: "Já recebi. Muito obrigada!", count: "", dark: false, active: false },
  { name: "Tiago Lopes", time: "Ontem", channel: "WhatsApp", badge: "bg-[#e4f5df] text-[#345921]", preview: "Tenho interesse no plano Pro.", count: "", dark: false, active: false },
];

export default function InboxResolvidaPage() {
  return (
    <div className="app-shell h-dvh overflow-hidden flex selection:bg-black selection:text-white font-sans text-[13px] bg-[#f7f8f8] text-[#141718] antialiased ozou-resolved">
      <style>{`
        .ozou-resolved ::-webkit-scrollbar { width: 4px; height: 4px; }
        .ozou-resolved ::-webkit-scrollbar-track { background: transparent; }
        .ozou-resolved ::-webkit-scrollbar-thumb { background: #e2e4e7; border-radius: 4px; }
      `}</style>
      <aside className="w-[230px] flex-shrink-0 bg-white border-r border-[#eaecee] h-full flex flex-col justify-between py-6 px-4">
        <div className="space-y-6">
          <div className="flex items-center space-x-1.5 px-2">
            <Link href="/" className="text-2xl font-black tracking-tight text-black">
              OZOU
            </Link>
            <span className="w-2 h-2 rounded-full bg-[#b8e928] mb-2" />
          </div>
          <div className="bg-[#f7f8f8] rounded-xl p-3 border border-[#f0f1f3] cursor-pointer hover:border-gray-300 transition-colors">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[13px] font-semibold text-gray-900 leading-tight">Studio Workspace</div>
                <div className="text-[11px] text-gray-400 mt-0.5">Plano Pro</div>
              </div>
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
          <div>
            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2 px-2.5">Espaço de trabalho</div>
            <nav className="space-y-1">
              <Link className="flex items-center justify-between px-3 py-2.5 rounded-xl bg-[#141718] text-white font-medium transition-colors" href="/inbox/resolvida">
                <div className="flex items-center space-x-3">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                  <span>Inbox unificado</span>
                </div>
                <span className="text-[11px] font-semibold bg-[#2a2d2f] text-gray-200 px-1.5 py-0.5 rounded-full min-w-[20px] text-center">12</span>
              </Link>
              <Link className="flex items-center space-x-3 px-3 py-2 rounded-xl text-gray-600 hover:text-black hover:bg-gray-50 transition-colors" href="/automacao-campanhas">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
                <span className="text-[13px] font-normal text-gray-700">Automação & campanhas</span>
              </Link>
              <Link className="flex items-center space-x-3 px-3 py-2 rounded-xl text-gray-600 hover:text-black hover:bg-gray-50 transition-colors" href="/insights">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
                <span className="text-[13px] font-normal text-gray-700">Insights & métricas</span>
              </Link>
              <Link className="flex items-center space-x-3 px-3 py-2 rounded-xl text-gray-600 hover:text-black hover:bg-gray-50 transition-colors" href="/contactos">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
                <span className="text-[13px] font-normal text-gray-700">Contactos</span>
              </Link>
              <Link className="flex items-center space-x-3 px-3 py-2 rounded-xl text-gray-600 hover:text-black hover:bg-gray-50 transition-colors" href="/inicio">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
                <span className="text-[13px] font-normal text-gray-700">Início</span>
              </Link>
              <Link className="flex items-center space-x-3 px-3 py-2 rounded-xl text-gray-600 hover:text-black hover:bg-gray-50 transition-colors" href="/empresas">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
                <span className="text-[13px] font-normal text-gray-700">Empresas</span>
              </Link>
            </nav>
          </div>
          <div className="bg-[#f0f3eb] rounded-2xl p-4 relative overflow-hidden text-gray-800">
            <svg className="w-4 h-4 text-gray-800 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
            <p className="font-semibold text-gray-900 text-[13px] leading-tight mb-2">
              Menos tarefas.
              <br />
              Mais conversas.
            </p>
            <a className="text-[11px] font-medium text-gray-500 hover:text-gray-800 flex items-center space-x-1" href="#">
              <span>A IA trata do resto.</span>
              <span className="text-[10px]">↗</span>
            </a>
          </div>
        </div>
        <div className="space-y-4 pt-4 border-t border-transparent">
          <div className="space-y-1">
            <a className="flex items-center space-x-3 px-2 py-1.5 text-gray-600 hover:text-black transition-colors text-[13px]" href="#">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
              <span>Ajuda e suporte</span>
            </a>
            <Link className="flex items-center space-x-3 px-2 py-1.5 text-gray-600 hover:text-black transition-colors text-[13px]" href="/definicoes/equipa">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
              <span>Definições</span>
            </Link>
          </div>
          <div className="pt-3 border-t border-gray-100 flex items-center justify-between cursor-pointer px-1">
            <div>
              <div className="text-[13px] font-semibold text-gray-900 leading-tight">Mariana Costa</div>
              <div className="text-[11px] text-gray-400">Administradora</div>
            </div>
            <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </aside>

      <main className="flex-1 flex flex-col min-w-0 bg-[#f7f8f8]">
        <header className="pt-6 pb-4 px-8 flex justify-between items-start">
          <div>
            <nav aria-label="Breadcrumb" className="flex items-center space-x-1.5 text-[12px] text-gray-400 mb-1">
              <span>Workspace</span>
              <span>/</span>
              <span className="text-gray-600">Inbox unificado</span>
            </nav>
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 leading-snug">Inbox unificado</h1>
            <p className="text-[12px] text-gray-400">Todas as conversas, no mesmo lugar.</p>
          </div>
          <div className="flex items-center space-x-2 bg-[#edf4e7] text-[#4d7031] text-[12px] font-medium px-3 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#588138]" />
            <span>4 canais conectados</span>
          </div>
        </header>
        <div className="px-8 pb-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <button className="bg-[#141718] text-white px-4 py-1.5 rounded-full text-[12px] font-medium flex items-center space-x-1.5" type="button">
              <span>Todas as conversas</span>
              <span className="text-gray-400 text-[11px]">24</span>
            </button>
            <button className="bg-white hover:bg-gray-50 text-gray-700 px-4 py-1.5 rounded-full text-[12px] font-medium border border-transparent shadow-[0_1px_2px_rgba(0,0,0,0.03)] flex items-center space-x-1.5" type="button">
              <span>Não lidas</span>
              <span className="text-gray-400 text-[11px]">12</span>
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-[12px] text-gray-400">A sua equipa está em dia.</span>
            <button className="bg-[#141718] text-white px-4 py-1.5 rounded-full text-[12px] font-medium flex items-center space-x-1.5 shadow-sm hover:bg-gray-800 transition" type="button">
              <span className="text-sm leading-none">+</span>
              <span>Nova conversa</span>
            </button>
          </div>
        </div>
        <div className="flex-1 px-8 pb-8 flex space-x-4 min-h-0 overflow-hidden">
          <section className="w-[280px] flex-shrink-0 bg-white rounded-2xl border border-[#eaecee] flex flex-col p-3 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
            <div className="relative mb-2">
              <input className="w-full bg-[#f7f8f8] border-none rounded-xl text-[12px] placeholder-gray-400 px-3.5 py-2 focus:ring-1 focus:ring-gray-300" placeholder="Pesquisar por nome ou mensagem" type="text" />
            </div>
            <div className="flex items-center justify-between px-1 py-1.5 text-[11px] text-gray-500 mb-1">
              <button className="flex items-center space-x-1 text-gray-700 font-medium" type="button">
                <span>Todos os canais</span>
                <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
              </button>
              <button className="flex items-center space-x-1 text-gray-500 hover:text-gray-800" type="button">
                <span>Mais recentes</span>
                <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
              </button>
            </div>
            <div className="flex-1 overflow-y-auto space-y-1 pr-0.5">
              {conversations.map((item) => (
                <div key={item.name} className={`p-2.5 rounded-xl cursor-pointer ${item.active ? "bg-[#f7f8f8] border border-[#eceeed]" : "hover:bg-gray-50 transition"}`}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-gray-900 text-[12px]">{item.name}</span>
                    <span className="text-[10px] text-gray-400">{item.time}</span>
                  </div>
                  <div className={`flex items-center ${item.count ? "justify-between" : ""} space-x-1.5`}>
                    <span className={`px-1.5 py-0.5 rounded text-[10px] font-medium tracking-tight ${item.badge}`}>{item.channel}</span>
                    <span className={`text-[11px] text-gray-500 truncate ${item.count ? "flex-1 ml-1" : "ml-1"}`}>{item.preview}</span>
                    {item.count ? (
                      <span className={`${item.dark ? "bg-black text-white" : "bg-[#f0f1f3] text-gray-700"} text-[10px] font-medium rounded-full w-4 h-4 flex items-center justify-center flex-shrink-0`}>
                        {item.count}
                      </span>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center pt-3 border-t border-gray-100 text-[11px] text-gray-400 font-normal">8 de 24 conversas</div>
          </section>

          <section className="flex-1 bg-white rounded-2xl border border-[#eaecee] flex flex-col p-5 shadow-[0_1px_3px_rgba(0,0,0,0.02)] min-w-0">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <div>
                <h2 className="text-base font-semibold text-gray-900 leading-snug">Sofia Martins</h2>
                <div className="flex items-center space-x-1.5 text-[11px] text-gray-400">
                  <span>WhatsApp</span>
                  <span>·</span>
                  <span>Online agora</span>
                </div>
              </div>
              <button className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full border border-gray-200 text-gray-700 text-[12px] font-medium bg-white hover:bg-gray-50 transition" type="button">
                <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
                </svg>
                <span>Resolvida</span>
              </button>
            </div>
            <div className="flex-1 overflow-y-auto py-5 space-y-4">
              <div className="text-center my-3">
                <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">Hoje, 9 de Novembro</span>
              </div>
              <div className="flex justify-start">
                <div className="bg-[#f7f8f8] max-w-[70%] rounded-2xl rounded-tl-sm p-4 text-gray-800 text-[13px] leading-relaxed">
                  <p>Olá! Gostava de saber mais sobre o plano Pro. É possível integrar o WhatsApp e o Instagram no mesmo espaço?</p>
                  <div className="text-[10px] text-gray-400 text-right mt-1.5">10:40</div>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="bg-[#eef6e8] max-w-[70%] rounded-2xl rounded-tr-sm p-4 text-gray-800 text-[13px] leading-relaxed">
                  <p>Olá, Sofia! Sim, com o plano Pro pode gerir todos os seus canais numa única caixa de entrada. Sem perder nenhuma conversa.</p>
                  <div className="flex items-center justify-end space-x-1 text-[10px] text-gray-400 mt-1.5">
                    <span>10:41</span>
                    <svg className="w-3.5 h-3.5 text-[#588138]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M5 13l4 4L19 7M11 13l4 4L22 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex justify-start">
                <div className="bg-[#f7f8f8] max-w-[70%] rounded-2xl rounded-tl-sm p-4 text-gray-800 text-[13px] leading-relaxed">
                  <p>Ótimo! E como posso experimentar? Somos uma equipa de 5 pessoas.</p>
                  <div className="text-[10px] text-gray-400 text-right mt-1.5">10:42</div>
                </div>
              </div>
              <div className="pt-2">
                <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-[#edf4e7] rounded-md text-[11px] text-[#42612a] font-medium">
                  <svg className="w-3.5 h-3.5 text-[#42612a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
                  </svg>
                  <span>Resolvida por Mariana Costa · 10:46</span>
                </div>
              </div>
            </div>
            <div className="mt-2 p-5 rounded-2xl border border-[#eaecee] bg-white text-center">
              <p className="text-[12px] text-gray-500 mb-3.5">Conversa resolvida. O histórico está preservado.</p>
              <Link href="/inbox" className="block w-full bg-[#141718] hover:bg-black text-white text-[13px] font-medium py-2.5 rounded-xl transition duration-150 shadow-sm">
                Reabrir conversa
              </Link>
            </div>
          </section>

          <section className="w-[280px] flex-shrink-0 bg-white rounded-2xl border border-[#eaecee] p-5 flex flex-col justify-between shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
            <div className="space-y-5">
              <h3 className="text-[13px] font-semibold text-gray-800">Detalhes do contacto</h3>
              <div className="pt-1">
                <h2 className="text-xl font-bold text-gray-900 leading-tight">Sofia Martins</h2>
                <p className="text-[12px] text-gray-400 mt-0.5">Luna Studio</p>
                <div className="mt-2.5">
                  <span className="inline-block px-2.5 py-1 bg-[#edf4e7] text-[#42612a] text-[11px] font-medium rounded-full">Lead qualificado</span>
                </div>
              </div>
              <div className="border-t border-gray-100 pt-3 space-y-4">
                <div>
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Canal de origem</div>
                  <div className="text-[12px] text-gray-800 font-medium">WhatsApp</div>
                </div>
                <div>
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Telefone</div>
                  <div className="text-[12px] text-gray-800 font-medium">+244 912 345 678</div>
                </div>
                <div>
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">E-mail</div>
                  <div className="text-[12px] text-gray-800 font-medium">sofia@lunastudio.ao</div>
                </div>
                <div>
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Responsável</div>
                  <div className="flex items-center space-x-1 text-[12px] text-gray-800 font-medium cursor-pointer">
                    <span>Mariana Costa</span>
                    <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
                <div>
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">Etiquetas</div>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="px-2 py-0.5 bg-[#f4f5f6] text-gray-700 text-[11px] rounded font-medium">Plano Pro</span>
                    <span className="px-2 py-0.5 bg-[#f4f5f6] text-gray-700 text-[11px] rounded font-medium">Equipa de 5</span>
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-100 pt-3">
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">Nota da equipa</div>
                <p className="text-[11px] text-gray-500 leading-relaxed">Interessada em centralizar os canais da equipa. Enviar convite para experimentar o plano Pro.</p>
              </div>
            </div>
            <div className="pt-4 border-t border-gray-100">
              <Link href="/contactos/sofia-martins" className="w-full py-2 px-3 border border-gray-200 rounded-xl text-[12px] font-medium text-gray-700 hover:bg-gray-50 flex items-center justify-center space-x-1.5 transition">
                <span>Ver contacto completo</span>
                <span className="text-[10px]">↗</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
