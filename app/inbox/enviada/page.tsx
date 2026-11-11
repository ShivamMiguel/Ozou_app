import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "OZOU — Inbox unificado",
};

const jakartaScope = {
  "--font-sans": 'var(--font-jakarta), "Plus Jakarta Sans", sans-serif',
  fontFamily: 'var(--font-jakarta), "Plus Jakarta Sans", sans-serif',
} as CSSProperties;

const chats = [
  { name: "Sofia Martins", time: "10:42", channel: "WhatsApp", chip: "bg-[#e8f0dc] text-[#557827]", preview: "Olá! Gostava de saber mais sobre...", count: "", active: true },
  { name: "Miguel Santos", time: "10:35", channel: "Instagram", chip: "bg-[#f3f4f6] text-neutral-700", preview: "Obrigado pela ajuda! 🙌", count: "1", active: false },
  { name: "Inês Ferreira", time: "10:18", channel: "E-mail", chip: "bg-[#f3f4f6] text-neutral-700", preview: "Re: Proposta de acompanhamento", count: "", active: false },
  { name: "João Almeida", time: "09:54", channel: "SMS", chip: "bg-[#f3f4f6] text-neutral-700", preview: "Podemos falar amanhã?", count: "3", active: false },
  { name: "Beatriz Costa", time: "09:32", channel: "WhatsApp", chip: "bg-[#f3f4f6] text-neutral-700", preview: "Perfeito, fico a aguardar.", count: "", active: false },
  { name: "Pedro Ribeiro", time: "Ontem", channel: "Instagram", chip: "bg-[#f3f4f6] text-neutral-700", preview: "Qual é o prazo de entrega?", count: "", active: false },
  { name: "Carolina Sousa", time: "Ontem", channel: "E-mail", chip: "bg-[#f3f4f6] text-neutral-700", preview: "Já recebi. Muito obrigada!", count: "", active: false },
  { name: "Tiago Lopes", time: "Ontem", channel: "WhatsApp", chip: "bg-[#f3f4f6] text-neutral-700", preview: "Tenho interesse no plano Pro.", count: "", active: false },
];

function Icon({ d, className }: { d: string; className: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path d={d} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

const nav = [
  ["/campanhas", "Automação & campanhas", "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"],
  ["/insights", "Insights & métricas", "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"],
  ["/contactos/lista", "Contactos", "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"],
  ["/inicio", "Início", "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"],
  ["/empresas", "Empresas", "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"],
] as const;

export default function InboxEnviadaPage() {
  return (
    <div className="bg-[#fafafa] text-[#1c1e21] antialiased app-shell h-dvh overflow-hidden flex ozou-enviada" style={jakartaScope}>
      <style>{`.ozou-enviada ::-webkit-scrollbar{width:5px;height:5px}.ozou-enviada ::-webkit-scrollbar-track{background:transparent}.ozou-enviada ::-webkit-scrollbar-thumb{background:#e2e8f0;border-radius:9999px}.ozou-enviada ::-webkit-scrollbar-thumb:hover{background:#cbd5e1}`}</style>
      <aside className="w-64 bg-white border-r border-[#ededed] flex flex-col justify-between shrink-0 h-full select-none">
        <div className="flex flex-col h-full overflow-y-auto">
          <div className="p-6 pb-4 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <Link href="/" className="text-2xl font-bold tracking-tight text-neutral-900">OZOU</Link>
              <span className="w-2 h-2 rounded-full bg-[#b2dc68] mb-2.5" />
            </div>
          </div>
          <div className="px-5 mb-6">
            <button className="w-full bg-[#f8f9fa] border border-[#f0f1f2] rounded-xl p-3 flex items-center justify-between text-left hover:bg-neutral-100 transition-colors" type="button">
              <div>
                <div className="text-[13px] font-semibold text-neutral-900 leading-tight">Studio Workspace</div>
                <div className="text-[11px] text-neutral-500 font-medium mt-0.5">Plano Pro</div>
              </div>
              <svg className="w-4 h-4 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
            </button>
          </div>
          <div className="px-4">
            <div className="px-3 text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-2">Espaço de trabalho</div>
            <nav className="space-y-1">
              <Link className="flex items-center justify-between px-3 py-2 rounded-xl bg-[#161819] text-white font-medium text-[13px]" href="/inbox/enviada">
                <div className="flex items-center gap-3">
                  <Icon className="w-4 h-4 text-neutral-200" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                  <span>Inbox unificado</span>
                </div>
                <span className="bg-[#b9e078] text-[#161819] text-[11px] font-bold px-2 py-0.5 rounded-full">10</span>
              </Link>
              {nav.map(([href, label, d]) => (
                <Link key={href} className="flex items-center gap-3 px-3 py-2 rounded-xl text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 font-medium text-[13px] transition-colors" href={href}>
                  <Icon className="w-4 h-4 text-neutral-400" d={d} />
                  <span>{label}</span>
                </Link>
              ))}
            </nav>
          </div>
          <div className="px-4 my-6">
            <div className="bg-[#f5f6f4] rounded-2xl p-4 border border-[#ebedea] flex flex-col justify-between">
              <div className="w-6 h-6 rounded-lg bg-neutral-200/50 flex items-center justify-center mb-3">
                <Icon className="w-3.5 h-3.5 text-neutral-800" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </div>
              <h4 className="font-bold text-[13px] text-neutral-900 leading-snug">Menos tarefas.<br />Mais conversas.</h4>
              <a className="text-[11px] font-medium text-neutral-500 hover:text-neutral-800 mt-2 inline-flex items-center gap-1" href="#">A IA trata do resto. ↗</a>
            </div>
          </div>
          <div className="px-4 mt-auto space-y-1 pb-4">
            <Link className="flex items-center gap-3 px-3 py-2 rounded-xl text-neutral-500 hover:text-neutral-900 font-medium text-[13px]" href="/ajuda">
              <Icon className="w-4 h-4 text-neutral-400" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              <span>Ajuda e suporte</span>
            </Link>
            <Link className="flex items-center gap-3 px-3 py-2 rounded-xl text-neutral-500 hover:text-neutral-900 font-medium text-[13px]" href="/definicoes/equipa">
              <svg className="w-4 h-4 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
              <span>Definições</span>
            </Link>
          </div>
          <div className="px-5 py-4 border-t border-[#ededed] flex items-center justify-between">
            <div>
              <div className="text-[13px] font-semibold text-neutral-900">Mariana Costa</div>
              <div className="text-[11px] text-neutral-500">Administradora</div>
            </div>
            <svg className="w-3.5 h-3.5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
          </div>
        </div>
      </aside>

      <main className="flex-1 flex flex-col h-full min-w-0 bg-[#fafafa]">
        <header className="h-28 px-8 pt-6 pb-4 border-b border-[#ededed] flex flex-col justify-between shrink-0 bg-white">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-medium text-neutral-400"><span>Workspace</span><span>/</span><span>Inbox unificado</span></div>
              <h1 className="text-2xl font-bold tracking-tight text-neutral-900 mt-1">Inbox unificado</h1>
              <p className="text-xs text-neutral-500 font-normal mt-0.5">Todas as conversas, no mesmo lugar.</p>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#f0f4ea] rounded-full text-xs font-medium text-neutral-700">
              <span className="w-2 h-2 rounded-full bg-[#82bd3b]" /><span>4 canais conectados</span>
            </div>
          </div>
        </header>
        <div className="px-8 py-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <button className="px-4 py-2 bg-[#1b1c1e] text-white rounded-full text-xs font-semibold shadow-sm tracking-wide" type="button">Todas as conversas <span className="ml-1 text-neutral-400 font-medium">24</span></button>
            <button className="px-4 py-2 bg-white border border-[#e4e5e7] hover:border-neutral-400 text-neutral-700 rounded-full text-xs font-medium transition-colors" type="button">Não lidas <span className="ml-1 font-bold text-neutral-900">10</span></button>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs text-neutral-400">A sua equipa está em dia.</span>
            <button className="px-4 py-2 bg-[#1b1c1e] text-white rounded-full text-xs font-semibold flex items-center gap-1.5 hover:bg-neutral-800 transition-colors shadow-sm" type="button"><span>+</span><span>Nova conversa</span></button>
          </div>
        </div>
        <div className="flex-1 px-8 pb-6 flex gap-4 min-h-0 overflow-hidden">
          <section className="w-[300px] xl:w-[320px] bg-white rounded-2xl border border-[#ededed] flex flex-col shrink-0 overflow-hidden shadow-sm">
            <div className="p-3 border-b border-[#f3f4f6]">
              <input className="w-full bg-[#f8f9fa] border-0 text-[12px] placeholder-neutral-400 rounded-xl px-3 py-2 text-neutral-700 focus:ring-1 focus:ring-neutral-400" id="inbox-enviada-search" placeholder="Pesquisar por nome ou mensagem" type="text" />
            </div>
            <div className="px-3.5 py-2.5 flex items-center justify-between text-[11px] font-medium text-neutral-500 border-b border-[#f3f4f6]">
              <button className="flex items-center gap-1" type="button"><span>Todos os canais</span><svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg></button>
              <button className="flex items-center gap-1" type="button"><span>Mais recentes</span><svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg></button>
            </div>
            <div className="flex-1 overflow-y-auto divide-y divide-[#f7f7f8]">
              {chats.map((chat) => (
                <div key={chat.name} className={`p-3.5 cursor-pointer ${chat.active ? "bg-[#f6f7f5]" : "hover:bg-neutral-50 transition-colors"}`}>
                  <div className="flex justify-between items-start mb-1.5">
                    <span className={`${chat.active ? "font-bold" : "font-semibold"} text-[13px] text-neutral-900`}>{chat.name}</span>
                    <span className="text-[11px] text-neutral-400">{chat.time}</span>
                  </div>
                  <div className={`flex items-center gap-2 ${chat.count ? "justify-between" : ""}`}>
                    <div className="flex items-center gap-2 overflow-hidden">
                      <span className={`text-[10px] font-medium px-2 py-0.5 rounded shrink-0 ${chat.chip}`}>{chat.channel}</span>
                      <p className="text-[12px] text-neutral-500 truncate">{chat.preview}</p>
                    </div>
                    {chat.count ? <span className="w-4 h-4 rounded-full bg-neutral-200 text-neutral-700 text-[10px] flex items-center justify-center font-bold shrink-0">{chat.count}</span> : null}
                  </div>
                </div>
              ))}
            </div>
            <div className="p-3 text-center border-t border-[#f3f4f6] text-[11px] text-neutral-400">8 de 24 conversas</div>
          </section>

          <section className="flex-1 bg-white rounded-2xl border border-[#ededed] flex flex-col min-w-0 overflow-hidden shadow-sm">
            <div className="px-6 py-4 border-b border-[#ededed] flex items-center justify-between">
              <div>
                <h2 className="font-bold text-[16px] text-neutral-900">Sofia Martins</h2>
                <div className="flex items-center gap-2 text-[11px] text-neutral-400 mt-0.5"><span className="font-medium text-neutral-500">WhatsApp</span><span>•</span><span className="text-neutral-500">Online agora</span></div>
              </div>
              <Link href="/inbox/conversa-resolvida" className="px-3.5 py-1.5 border border-neutral-300 rounded-full text-xs font-semibold text-neutral-800 hover:bg-neutral-50 flex items-center gap-1.5 transition-colors">
                <svg className="w-3.5 h-3.5 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
                <span>Resolver</span>
              </Link>
            </div>
            <div className="flex-1 p-6 overflow-y-auto space-y-6">
              <div className="text-center my-2"><span className="text-[10px] font-bold tracking-wider uppercase text-neutral-400">HOJE, 9 DE NOVEMBRO</span></div>
              <div className="flex flex-col items-start max-w-[80%]">
                <div className="bg-[#f2f3f4] text-neutral-900 text-[13px] px-4 py-3 rounded-2xl rounded-tl-sm leading-relaxed">
                  Olá! Gostava de saber mais sobre o plano Pro. É possível integrar o WhatsApp e o Instagram no mesmo espaço?
                  <div className="text-[10px] text-neutral-400 text-right mt-1 font-medium">10:40</div>
                </div>
              </div>
              <div className="flex flex-col items-end w-full">
                <div className="bg-[#ebf4db] text-neutral-900 text-[13px] px-4 py-3 rounded-2xl rounded-tr-sm max-w-[80%] leading-relaxed">
                  Olá, Sofia! Sim, com o plano Pro pode gerir todos os seus canais numa única caixa de entrada. Sem perder nenhuma conversa.
                  <div className="flex items-center justify-end gap-1 text-[10px] text-neutral-500 mt-1 font-medium">
                    <span>10:41</span>
                    <svg className="w-3.5 h-3.5 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7M9 13l4 4L23 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start max-w-[80%]">
                <div className="bg-[#f2f3f4] text-neutral-900 text-[13px] px-4 py-3 rounded-2xl rounded-tl-sm leading-relaxed">
                  Ótimo! E como posso experimentar?<br />Somos uma equipa de 5 pessoas.
                  <div className="text-[10px] text-neutral-400 text-right mt-1 font-medium">10:42</div>
                </div>
              </div>
              <div className="flex flex-col items-end w-full">
                <div className="bg-[#ebf4db] text-neutral-900 text-[13px] px-4 py-3 rounded-2xl rounded-tr-sm max-w-[80%] leading-relaxed">
                  Claro, Sofia! Podem experimentar o plano Pro durante 14 dias, com até 5 pessoas. Sem cartão.
                  <div className="flex items-center justify-end gap-1 text-[10px] text-neutral-500 mt-1 font-medium">
                    <span>10:45</span>
                    <svg className="w-3.5 h-3.5 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7M9 13l4 4L23 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 pt-1">
              <div className="flex items-center gap-1.5 text-[11px] font-medium text-[#467222] mb-2 px-1">
                <svg className="w-3.5 h-3.5 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
                <span>Mensagem entregue via WhatsApp</span>
              </div>
              <div className="border border-[#e2e4e7] rounded-2xl p-3 bg-white focus-within:border-neutral-400 transition-colors">
                <div className="flex items-center gap-1 text-xs text-neutral-600 font-medium mb-1">
                  <span>Responder via: <strong className="font-semibold text-neutral-900">WhatsApp</strong></span>
                  <svg className="w-3.5 h-3.5 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
                </div>
                <textarea className="w-full resize-none border-0 p-0 text-[13px] placeholder-neutral-400 text-neutral-800 focus:ring-0 leading-normal" id="inbox-enviada-reply" placeholder="Continue a conversa..." rows={2} />
                <div className="flex justify-end items-center mt-1">
                  <button className="px-5 py-2 bg-[#17191a] text-white text-xs font-semibold rounded-full hover:bg-neutral-800 transition-colors" type="button">Responder</button>
                </div>
              </div>
            </div>
          </section>

          <aside className="w-[280px] xl:w-[310px] bg-white rounded-2xl border border-[#ededed] p-5 shrink-0 overflow-y-auto shadow-sm flex flex-col justify-between">
            <div>
              <div className="text-[13px] font-semibold text-neutral-900 mb-6">Detalhes do contacto</div>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-neutral-900 tracking-tight">Sofia Martins</h3>
                <p className="text-xs text-neutral-400 mt-0.5">Luna Studio</p>
                <div className="mt-3"><span className="inline-block text-[11px] font-medium px-2.5 py-1 rounded-full bg-[#f1f5e8] text-[#557827]">Lead qualificado</span></div>
              </div>
              <div className="space-y-4 text-xs">
                <div><div className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">Canal de origem</div><div className="text-neutral-900 font-medium mt-1 text-[13px]">WhatsApp</div></div>
                <div><div className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">Telefone</div><div className="text-neutral-900 font-medium mt-1 text-[13px]">+244 912 345 678</div></div>
                <div><div className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">E-mail</div><div className="text-neutral-900 font-medium mt-1 text-[13px]">sofia@lunastudio.ao</div></div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">Responsável</div>
                  <button className="flex items-center gap-1 text-neutral-900 font-medium mt-1 text-[13px]" type="button"><span>Mariana Costa</span><svg className="w-3 h-3 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg></button>
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-2">Etiquetas</div>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="px-2.5 py-1 bg-[#f4f5f5] text-neutral-700 text-[11px] font-medium rounded-md">Plano Pro</span>
                    <span className="px-2.5 py-1 bg-[#f4f5f5] text-neutral-700 text-[11px] font-medium rounded-md">Equipa de 5</span>
                  </div>
                </div>
                <div className="pt-2">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1">Nota da equipa</div>
                  <p className="text-neutral-500 leading-relaxed text-[12px]">Interessada em centralizar os canais da equipa. Enviar convite para experimentar o plano Pro.</p>
                </div>
              </div>
            </div>
            <div className="pt-6 mt-6 border-t border-neutral-100">
              <Link href="/contactos/sofia-martins" className="w-full py-2.5 px-4 border border-[#e4e5e7] hover:bg-neutral-50 text-neutral-900 rounded-full text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors">
                <span>Ver contacto completo</span><span className="text-xs">↗</span>
              </Link>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
