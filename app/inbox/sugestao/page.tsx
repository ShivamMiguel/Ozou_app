import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { SuggestionComposer } from "./composer";

export const metadata: Metadata = {
  title: "OZOU — Inbox — Resposta sugerida",
};

const jakartaScope = {
  "--font-sans": 'var(--font-jakarta), "Plus Jakarta Sans", sans-serif',
  fontFamily: 'var(--font-jakarta), "Plus Jakarta Sans", sans-serif',
} as CSSProperties;

const chats = [
  { name: "Sofia Martins", time: "10:42", channel: "WhatsApp", chip: "bg-[#E4F5D5] text-[#2B5711] font-semibold", preview: "Olá! Gostava de saber mais sobre...", count: "2", countClass: "bg-[#181A1D] text-white", active: true },
  { name: "Miguel Santos", time: "10:35", channel: "Instagram", chip: "bg-[#F1F3F5] text-[#495057] font-medium", preview: "Obrigado pela ajuda! 🙌", count: "1", countClass: "bg-[#E9ECEF] text-[#495057]", active: false },
  { name: "Inês Ferreira", time: "10:18", channel: "E-mail", chip: "bg-[#F1F3F5] text-[#495057] font-medium", preview: "Re: Proposta de acompanhamento", count: "", countClass: "", active: false },
  { name: "João Almeida", time: "09:54", channel: "SMS", chip: "bg-[#F1F3F5] text-[#495057] font-medium", preview: "Podemos falar amanhã?", count: "3", countClass: "bg-[#E9ECEF] text-[#495057]", active: false },
  { name: "Beatriz Costa", time: "09:32", channel: "WhatsApp", chip: "bg-[#F1F3F5] text-[#495057] font-medium", preview: "Perfeito, fico a aguardar.", count: "", countClass: "", active: false },
  { name: "Pedro Ribeiro", time: "Ontem", channel: "Instagram", chip: "bg-[#F1F3F5] text-[#495057] font-medium", preview: "Qual é o prazo de entrega?", count: "", countClass: "", active: false },
  { name: "Carolina Sousa", time: "Ontem", channel: "E-mail", chip: "bg-[#F1F3F5] text-[#495057] font-medium", preview: "Já recebi. Muito obrigada!", count: "", countClass: "", active: false },
  { name: "Tiago Lopes", time: "Ontem", channel: "WhatsApp", chip: "bg-[#F1F3F5] text-[#495057] font-medium", preview: "Tenho interesse no plano Pro.", count: "", countClass: "", active: false },
];

function Icon({ d, className = "w-4 h-4 text-[#868E96]" }: { d: string; className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path d={d} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
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

export default function InboxSugestaoPage() {
  return (
    <div className="bg-white text-[#111315] antialiased app-shell h-dvh flex overflow-hidden text-sm selection:bg-[#111315] selection:text-white ozou-sugestao" style={jakartaScope}>
      <style>{`.ozou-sugestao .custom-scrollbar::-webkit-scrollbar{width:4px}.ozou-sugestao .custom-scrollbar::-webkit-scrollbar-thumb{background-color:#e2e8f0;border-radius:9999px}`}</style>
      <aside className="w-[230px] border-r border-[#EFEFEF] flex flex-col justify-between h-full bg-white flex-shrink-0 z-10">
        <div className="p-5 pb-2">
          <div className="flex items-center gap-1.5 mb-6">
            <Link href="/" className="text-[22px] font-extrabold tracking-tight text-[#111315]">OZOU</Link>
            <span className="w-1.5 h-1.5 rounded-full bg-[#B2E64A] -mt-2" />
          </div>
          <div className="bg-[#F8F9FA] rounded-xl p-3 mb-6 flex items-center justify-between cursor-pointer border border-[#F1F3F5]">
            <div>
              <div className="font-semibold text-xs text-[#111315]">Studio Workspace</div>
              <div className="text-[11px] text-[#868E96] mt-0.5">Plano Pro</div>
            </div>
            <svg className="w-3.5 h-3.5 text-[#868E96]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
          </div>
          <div className="text-[10px] uppercase font-bold tracking-wider text-[#A0AEC0] mb-2 px-1">ESPAÇO DE TRABALHO</div>
          <nav className="space-y-0.5">
            <Link className="flex items-center justify-between px-3 py-2.5 rounded-xl bg-[#111315] text-white font-medium text-xs shadow-sm" href="/inbox/sugestao">
              <div className="flex items-center gap-2.5">
                <Icon className="w-4 h-4 text-white" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                <span>Inbox unificado</span>
              </div>
              <span className="bg-[#B9FF66] text-[#111315] text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[18px] text-center">12</span>
            </Link>
            {nav.map(([href, label, d]) => (
              <Link key={href} className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-[#6C757D] hover:bg-[#F8F9FA] transition text-xs font-normal" href={href}>
                <Icon d={d} />
                <span className="leading-tight">{label}</span>
              </Link>
            ))}
          </nav>
        </div>
        <div className="p-5 pt-0 space-y-4">
          <div className="bg-[#F4F6F4] rounded-2xl p-4 border border-[#E9ECEF]/60 relative">
            <div className="text-[#111315] mb-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" /></svg>
            </div>
            <p className="font-bold text-xs text-[#111315] leading-snug">Menos tarefas.<br />Mais conversas.</p>
            <a className="text-[11px] text-[#868E96] mt-3 inline-flex items-center gap-1 hover:text-[#111315]" href="#">A IA trata do resto. <span>↗</span></a>
          </div>
          <div className="space-y-1">
            <Link className="flex items-center gap-2.5 px-2 py-1.5 text-xs text-[#6C757D] hover:text-[#111315]" href="/ajuda">
              <Icon d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              <span>Ajuda e suporte</span>
            </Link>
            <Link className="flex items-center gap-2.5 px-2 py-1.5 text-xs text-[#6C757D] hover:text-[#111315]" href="/definicoes/equipa">
              <Icon d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              <span>Definições</span>
            </Link>
          </div>
          <div className="pt-3 border-t border-[#F1F3F5] flex items-center justify-between cursor-pointer">
            <div>
              <div className="text-xs font-semibold text-[#111315]">Mariana Costa</div>
              <div className="text-[11px] text-[#868E96]">Administradora</div>
            </div>
            <svg className="w-3.5 h-3.5 text-[#868E96]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
          </div>
        </div>
      </aside>

      <div className="flex-1 flex flex-col h-full overflow-hidden bg-white">
        <header className="h-[120px] px-8 pt-5 pb-4 border-b border-[#F1F3F5] flex flex-col justify-between flex-shrink-0">
          <div className="flex items-center justify-between text-xs text-[#868E96]">
            <div className="flex items-center gap-1.5 font-normal">
              <span>Workspace</span><span>/</span><span className="text-[#6C757D]">Inbox unificado</span>
            </div>
            <div className="flex items-center gap-1.5 bg-[#F1F5E9] text-[#476024] px-3 py-1 rounded-full text-xs font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#75B72C]" /><span>4 canais conectados</span>
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-[#111315]">Inbox unificado</h1>
            <p className="text-xs text-[#868E96] mt-0.5">Todas as conversas, no mesmo lugar.</p>
          </div>
        </header>
        <div className="px-8 py-3.5 flex items-center justify-between border-b border-transparent flex-shrink-0">
          <div className="flex items-center gap-2">
            <button className="bg-[#181A1D] text-white px-4 py-1.5 rounded-full text-xs font-semibold shadow-sm" type="button">Todas as conversas <span className="ml-1 font-normal opacity-80">24</span></button>
            <button className="bg-white border border-[#E9ECEF] hover:bg-[#F8F9FA] text-[#495057] px-4 py-1.5 rounded-full text-xs font-medium transition" type="button">Não lidas <span className="ml-1 font-normal text-[#868E96]">12</span></button>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs text-[#868E96]">A sua equipa está em dia.</span>
            <button className="bg-[#181A1D] hover:bg-black text-white px-4 py-1.5 rounded-full text-xs font-medium flex items-center gap-1.5 shadow-sm transition" type="button"><span className="text-sm leading-none">+</span> Nova conversa</button>
          </div>
        </div>
        <div className="flex-1 flex overflow-hidden px-8 pb-6 pt-1 gap-5 bg-white">
          <section className="w-[300px] flex flex-col h-full flex-shrink-0 bg-white border border-[#EFEFEF] rounded-2xl p-4 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
            <div className="relative mb-3">
              <input className="w-full bg-[#F8F9FA] border-0 rounded-xl px-3 py-2 text-xs text-[#111315] placeholder-[#ADB5BD] focus:ring-1 focus:ring-[#111315]" id="inbox-sugestao-search" placeholder="Pesquisar por nome ou mensagem" type="text" />
            </div>
            <div className="flex items-center justify-between text-xs text-[#6C757D] pb-3 px-1 border-b border-[#F8F9FA]">
              <button className="flex items-center gap-1 font-medium" type="button">Todos os canais <span className="text-[10px]">▼</span></button>
              <button className="flex items-center gap-1 text-[11px]" type="button">Mais recentes <span className="text-[11px]">↓</span></button>
            </div>
            <div className="flex-1 overflow-y-auto custom-scrollbar -mx-2 px-2 mt-2 space-y-1">
              {chats.map((chat) => (
                <div key={chat.name} className={`p-3 rounded-xl cursor-pointer transition ${chat.active ? "bg-[#F8F9FA]" : "hover:bg-[#F8F9FA]/60"}`}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-xs text-[#111315]">{chat.name}</span>
                    <span className="text-[10px] text-[#ADB5BD]">{chat.time}</span>
                  </div>
                  <div className={`flex items-center gap-1.5 overflow-hidden ${chat.count ? "justify-between" : ""}`}>
                    <div className="flex items-center gap-1.5 overflow-hidden">
                      <span className={`text-[9px] px-1.5 py-0.5 rounded tracking-wide ${chat.chip}`}>{chat.channel}</span>
                      <p className="text-[11px] text-[#6C757D] truncate">{chat.preview}</p>
                    </div>
                    {chat.count ? <span className={`text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center flex-shrink-0 ml-1 ${chat.countClass}`}>{chat.count}</span> : null}
                  </div>
                </div>
              ))}
            </div>
            <div className="pt-3 border-t border-[#F8F9FA] text-center">
              <span className="text-[11px] text-[#ADB5BD]">8 de 24 conversas</span>
            </div>
          </section>

          <section className="flex-1 flex flex-col h-full bg-white border border-[#EFEFEF] rounded-2xl overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
            <div className="px-6 py-4 border-b border-[#F1F3F5] flex items-center justify-between flex-shrink-0">
              <div>
                <h2 className="font-bold text-sm text-[#111315]">Sofia Martins</h2>
                <div className="flex items-center gap-1.5 text-[11px] text-[#868E96] mt-0.5"><span>WhatsApp</span><span>·</span><span className="text-[#495057]">Online agora</span></div>
              </div>
              <Link href="/inbox/conversa-resolvida" className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#E9ECEF] hover:bg-[#F8F9FA] text-xs font-medium text-[#495057] transition">
                <svg className="w-3.5 h-3.5 text-[#495057]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
                <span>Resolver</span>
              </Link>
            </div>
            <div className="flex-1 overflow-y-auto p-6 space-y-5 custom-scrollbar">
              <div className="text-center my-2"><span className="text-[10px] font-bold tracking-wider text-[#A0AEC0] uppercase">HOJE, 9 DE NOVEMBRO</span></div>
              <div className="flex flex-col items-start max-w-[72%]">
                <div className="bg-[#F4F5F6] text-[#111315] p-3.5 rounded-2xl rounded-tl-sm text-xs leading-relaxed">
                  Olá! Gostava de saber mais sobre o plano Pro. É possível integrar o WhatsApp e o Instagram no mesmo espaço?
                  <div className="text-right text-[10px] text-[#868E96] mt-1">10:40</div>
                </div>
              </div>
              <div className="flex flex-col items-end w-full">
                <div className="bg-[#EFF8E7] text-[#111315] p-3.5 rounded-2xl rounded-tr-sm text-xs leading-relaxed max-w-[72%]">
                  Olá, Sofia! Sim, com o plano Pro pode gerir todos os seus canais numa única caixa de entrada. Sem perder nenhuma conversa.
                  <div className="flex items-center justify-end gap-1 text-[10px] text-[#868E96] mt-1">
                    <span>10:41</span>
                    <svg className="w-3 h-3 text-[#495057]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7m-4 6l2 2L22 9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start max-w-[65%]">
                <div className="bg-[#F4F5F6] text-[#111315] p-3.5 rounded-2xl rounded-tl-sm text-xs leading-relaxed">
                  Ótimo! E como posso experimentar?<br />Somos uma equipa de 5 pessoas.
                  <div className="text-right text-[10px] text-[#868E96] mt-1">10:42</div>
                </div>
              </div>
            </div>
            <SuggestionComposer />
          </section>

          <section className="w-[270px] flex flex-col h-full flex-shrink-0 bg-white border border-[#EFEFEF] rounded-2xl p-5 overflow-y-auto custom-scrollbar shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
            <h3 className="text-xs font-semibold text-[#111315] mb-5">Detalhes do contacto</h3>
            <div className="mb-4">
              <h2 className="text-lg font-bold text-[#111315] leading-tight">Sofia Martins</h2>
              <p className="text-xs text-[#868E96] mt-0.5">Luna Studio</p>
              <div className="mt-2.5"><span className="inline-block bg-[#EEF6E6] text-[#476629] text-[11px] font-medium px-2 py-0.5 rounded-md">Lead qualificado</span></div>
            </div>
            <div className="h-px bg-[#F1F3F5] my-4" />
            <div className="space-y-4 text-xs">
              <div><div className="text-[10px] uppercase font-bold tracking-wider text-[#A0AEC0]">CANAL DE ORIGEM</div><div className="font-normal text-xs text-[#111315] mt-1">WhatsApp</div></div>
              <div><div className="text-[10px] uppercase font-bold tracking-wider text-[#A0AEC0]">TELEFONE</div><div className="font-normal text-xs text-[#111315] mt-1">+244 912 345 678</div></div>
              <div><div className="text-[10px] uppercase font-bold tracking-wider text-[#A0AEC0]">E-MAIL</div><div className="font-normal text-xs text-[#111315] mt-1">sofia@lunastudio.ao</div></div>
              <div>
                <div className="text-[10px] uppercase font-bold tracking-wider text-[#A0AEC0]">RESPONSÁVEL</div>
                <div className="flex items-center gap-1 font-medium text-xs text-[#111315] mt-1 cursor-pointer"><span>Mariana Costa</span><svg className="w-3 h-3 text-[#868E96]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg></div>
              </div>
              <div>
                <div className="text-[10px] uppercase font-bold tracking-wider text-[#A0AEC0] mb-1.5">ETIQUETAS</div>
                <div className="flex flex-wrap gap-1.5">
                  <span className="bg-[#F8F9FA] text-[#495057] px-2.5 py-1 rounded text-[11px] font-medium border border-[#F1F3F5]">Plano Pro</span>
                  <span className="bg-[#F8F9FA] text-[#495057] px-2.5 py-1 rounded text-[11px] font-medium border border-[#F1F3F5]">Equipa de 5</span>
                </div>
              </div>
            </div>
            <div className="h-px bg-[#F1F3F5] my-4" />
            <div className="mb-6">
              <div className="text-[10px] uppercase font-bold tracking-wider text-[#A0AEC0] mb-1.5">NOTA DA EQUIPA</div>
              <p className="text-[11px] text-[#6C757D] leading-relaxed">Interessada em centralizar os canais da equipa. Enviar convite para experimentar o plano Pro.</p>
            </div>
            <div className="mt-auto pt-2">
              <Link href="/contactos/sofia-martins" className="w-full py-2 px-3 rounded-full border border-[#E9ECEF] hover:bg-[#F8F9FA] text-xs font-medium text-[#111315] flex items-center justify-center gap-1 transition">
                <span>Ver contacto completo</span><span className="text-xs">↗</span>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
