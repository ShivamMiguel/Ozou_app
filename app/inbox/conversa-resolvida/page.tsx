import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "OZOU — Inbox unificado",
};

const headingFont = {
  fontFamily: 'var(--font-jakarta), "Plus Jakarta Sans", sans-serif',
} as CSSProperties;

const chats = [
  { name: "Sofia Martins", time: "10:42", channel: "WhatsApp", chip: "bg-[#E7F3D8] text-[#294B0F]", preview: "Olá! Gostava de saber mais sobre...", count: "", active: true },
  { name: "Miguel Santos", time: "10:35", channel: "Instagram", chip: "bg-[#F4F4F6] text-[#4B5563]", preview: "Obrigado pela ajuda! 🙌", count: "1", active: false },
  { name: "Inês Ferreira", time: "10:18", channel: "E-mail", chip: "bg-[#F4F4F6] text-[#4B5563]", preview: "Re: Proposta de acompanhamento", count: "", active: false },
  { name: "João Almeida", time: "09:54", channel: "SMS", chip: "bg-[#F4F4F6] text-[#4B5563]", preview: "Podemos falar amanhã?", count: "3", active: false },
  { name: "Beatriz Costa", time: "09:32", channel: "WhatsApp", chip: "bg-[#F4F4F6] text-[#4B5563]", preview: "Perfeito, fico a aguardar.", count: "", active: false },
  { name: "Pedro Ribeiro", time: "Ontem", channel: "Instagram", chip: "bg-[#F4F4F6] text-[#4B5563]", preview: "Qual é o prazo de entrega?", count: "", active: false },
  { name: "Carolina Sousa", time: "Ontem", channel: "E-mail", chip: "bg-[#F4F4F6] text-[#4B5563]", preview: "Já recebi. Muito obrigada!", count: "", active: false },
  { name: "Tiago Lopes", time: "Ontem", channel: "WhatsApp", chip: "bg-[#F4F4F6] text-[#4B5563]", preview: "Tenho interesse no plano Pro.", count: "", active: false },
];

function Icon({ d, className = "w-4 h-4" }: { d: string; className?: string }) {
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

export default function ConversaResolvidaPage() {
  return (
    <div className="bg-[#F8F9FA] text-[#1E232A] antialiased app-shell h-dvh flex flex-row overflow-hidden select-none text-[13px] ozou-resolvida">
      <style>{`.ozou-resolvida ::-webkit-scrollbar{width:5px;height:5px}.ozou-resolvida ::-webkit-scrollbar-track{background:transparent}.ozou-resolvida ::-webkit-scrollbar-thumb{background:#E2E8F0;border-radius:9999px}.ozou-resolvida ::-webkit-scrollbar-thumb:hover{background:#CBD5E1}`}</style>
      <aside className="w-[230px] flex-shrink-0 bg-white border-r border-[#ECEEF0] flex flex-col justify-between h-full p-4 overflow-y-auto">
        <div className="space-y-6">
          <div className="flex items-center gap-1.5 px-2 pt-1">
            <Link href="/" className="font-extrabold text-[22px] tracking-tight text-black" style={headingFont}>OZOU</Link>
            <span className="w-2 h-2 rounded-full bg-[#B7EE58] inline-block -mt-2" />
          </div>
          <div className="bg-[#F5F6F7] rounded-xl p-3 flex items-center justify-between cursor-pointer hover:bg-neutral-100 transition-colors">
            <div>
              <div className="font-semibold text-xs text-[#1E232A]">Studio Workspace</div>
              <div className="text-[11px] text-[#6B7280]">Plano Pro</div>
            </div>
            <Icon className="w-4 h-4 text-[#6B7280]" d="M19 9l-7 7-7-7" />
          </div>
          <div className="space-y-4">
            <div className="text-[10px] font-semibold text-[#8C95A3] tracking-wider uppercase px-2">Espaço de trabalho</div>
            <nav className="space-y-1">
              <Link className="flex items-center justify-between px-3 py-2.5 bg-[#171A1F] text-white rounded-xl font-medium shadow-sm" href="/inbox/conversa-resolvida">
                <div className="flex items-center gap-3">
                  <Icon d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                  <span>Inbox unificado</span>
                </div>
                <span className="bg-[#B7EE58] text-[#14171A] text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[20px] text-center">10</span>
              </Link>
              {nav.map(([href, label, d]) => (
                <Link key={href} className="flex items-center gap-3 px-3 py-2.5 text-[#5F6978] hover:text-[#171A1F] hover:bg-neutral-50 rounded-xl font-medium transition-colors" href={href}>
                  <Icon className="w-4 h-4 flex-shrink-0" d={d} />
                  <span className="leading-tight">{label}</span>
                </Link>
              ))}
            </nav>
          </div>
          <div className="bg-[#F4F5F4] rounded-2xl p-4 relative">
            <div className="w-6 h-6 text-neutral-800 mb-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l1.5 5.5L19 9l-5.5 1.5L12 16l-1.5-5.5L5 9l5.5-1.5L12 2z" /></svg>
            </div>
            <div className="font-bold text-[13px] leading-snug text-neutral-900 mb-2">Menos tarefas.<br />Mais conversas.</div>
            <a className="text-[11px] text-[#555E68] flex items-center gap-1 font-medium hover:underline" href="#">A IA trata do resto. <span>↗</span></a>
          </div>
        </div>
        <div className="space-y-4 pt-4 border-t border-[#ECEEF0]">
          <div className="space-y-1">
            <Link className="flex items-center gap-3 px-3 py-2 text-[#5F6978] hover:text-black font-medium transition-colors" href="/ajuda">
              <Icon className="w-4 h-4 flex-shrink-0" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              <span className="text-xs">Ajuda e suporte</span>
            </Link>
            <Link className="flex items-center gap-3 px-3 py-2 text-[#5F6978] hover:text-black font-medium transition-colors" href="/definicoes/equipa">
              <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
              <span className="text-xs">Definições</span>
            </Link>
          </div>
          <div className="flex items-center justify-between pt-2 border-t border-[#ECEEF0] cursor-pointer">
            <div>
              <div className="text-xs font-semibold text-neutral-900">Mariana Costa</div>
              <div className="text-[11px] text-[#717A88]">Administradora</div>
            </div>
            <Icon className="w-3.5 h-3.5 text-[#717A88]" d="M19 9l-7 7-7-7" />
          </div>
        </div>
      </aside>

      <main className="flex-1 flex flex-col h-full bg-[#FFFFFF] overflow-hidden">
        <header className="h-[88px] px-8 pt-5 pb-3 border-b border-[#ECEEF0] flex flex-col justify-between flex-shrink-0">
          <div className="flex items-center justify-between">
            <nav className="flex items-center gap-1.5 text-xs text-[#6B7280]">
              <span>Workspace</span><span className="text-[#9CA3AF]">/</span><span className="text-[#374151]">Inbox unificado</span>
            </nav>
            <div className="flex items-center gap-2 bg-[#F1F5E9] text-[#243314] px-3 py-1 rounded-full text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-[#6EB820]" /><span>4 canais conectados</span>
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-[#14171A] tracking-tight" style={headingFont}>Inbox unificado</h1>
            <p className="text-xs text-[#64748B] -mt-0.5">Todas as conversas, no mesmo lugar.</p>
          </div>
        </header>
        <section className="px-8 py-3.5 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-2">
            <button className="bg-[#171A1F] text-white px-4 py-1.5 rounded-full font-medium text-xs flex items-center gap-1.5 shadow-sm" type="button"><span>Todas as conversas</span><span className="text-neutral-300 ml-1">24</span></button>
            <button className="bg-white border border-[#E5E7EB] text-[#4B5563] hover:bg-neutral-50 px-4 py-1.5 rounded-full font-medium text-xs flex items-center gap-1.5 transition-colors" type="button"><span>Não lidas</span><span className="text-neutral-500 ml-1">10</span></button>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs text-[#6B7280]">A sua equipa está em dia.</span>
            <button className="bg-[#171A1F] text-white px-3.5 py-1.5 rounded-full font-medium text-xs flex items-center gap-1.5 hover:bg-black transition-colors shadow-sm" type="button">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
              <span>Nova conversa</span>
            </button>
          </div>
        </section>
        <div className="flex-1 flex overflow-hidden px-8 pb-6 gap-5 bg-[#FFFFFF]">
          <section className="w-[290px] flex-shrink-0 bg-white border border-[#ECEEF0] rounded-2xl flex flex-col overflow-hidden">
            <div className="p-3 border-b border-[#F0F2F4] space-y-3">
              <input className="w-full bg-[#F5F6F8] border-none text-xs rounded-xl py-2 px-3 text-[#374151] placeholder-[#9CA3AF] focus:ring-1 focus:ring-black" id="inbox-resolvida-search" placeholder="Pesquisar por nome ou mensagem" type="text" />
              <div className="flex items-center justify-between text-xs text-[#4B5563] px-1 font-medium">
                <button className="flex items-center gap-1" type="button"><span>Todos os canais</span><Icon className="w-3 h-3 text-[#9CA3AF]" d="M19 9l-7 7-7-7" /></button>
                <button className="flex items-center gap-1 text-[#6B7280]" type="button"><span>Mais recentes</span><Icon className="w-3 h-3 text-[#9CA3AF]" d="M19 9l-7 7-7-7" /></button>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto divide-y divide-[#F5F6F7]">
              {chats.map((chat) => (
                <div key={chat.name} className={`p-3 cursor-pointer transition-colors ${chat.active ? "bg-[#F4F5F6] border-l-2 border-black" : "hover:bg-[#F9FAFB]"}`}>
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="font-semibold text-xs text-[#111827]">{chat.name}</span>
                    <span className="text-[10px] text-[#9CA3AF]">{chat.time}</span>
                  </div>
                  <div className={`flex items-center gap-2 ${chat.count ? "justify-between" : ""}`}>
                    <div className="flex items-center gap-2 min-w-0">
                      <span className={`text-[10px] font-medium px-2 py-0.5 rounded-md flex-shrink-0 ${chat.chip}`}>{chat.channel}</span>
                      <p className={`text-[11px] truncate leading-tight ${chat.active ? "text-[#4B5563]" : "text-[#6B7280]"}`}>{chat.preview}</p>
                    </div>
                    {chat.count ? <span className="w-4 h-4 rounded-full bg-[#E5E7EB] text-[#374151] text-[10px] flex items-center justify-center font-bold flex-shrink-0">{chat.count}</span> : null}
                  </div>
                </div>
              ))}
            </div>
            <div className="p-2 border-t border-[#F0F2F4] text-center text-[11px] text-[#9CA3AF]">8 de 24 conversas</div>
          </section>

          <section className="flex-1 bg-white border border-[#ECEEF0] rounded-2xl flex flex-col overflow-hidden shadow-sm">
            <div className="px-6 py-4 border-b border-[#ECEEF0] flex items-center justify-between flex-shrink-0">
              <div>
                <h2 className="text-sm font-bold text-[#111827] leading-tight">Sofia Martins</h2>
                <div className="text-[11px] text-[#6B7280] flex items-center gap-1.5 mt-0.5"><span>WhatsApp</span><span>·</span><span>Online agora</span></div>
              </div>
              <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#D1D5DB] text-xs font-medium text-[#111827]" type="button">
                <svg className="w-3.5 h-3.5 text-neutral-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" /></svg>
                <span>Resolvida</span>
              </button>
            </div>
            <div className="flex-1 p-6 overflow-y-auto space-y-4">
              <div className="flex justify-center mb-4"><span className="text-[10px] uppercase font-semibold text-[#9CA3AF] tracking-wider">HOJE, 9 DE NOVEMBRO</span></div>
              <div className="flex flex-col items-start max-w-[75%]">
                <div className="bg-[#F3F4F6] text-[#1F2937] p-3.5 rounded-2xl rounded-tl-sm text-[12.5px] leading-relaxed shadow-sm">
                  <p>Olá! Gostava de saber mais sobre o plano Pro. É possível integrar o WhatsApp e o Instagram no mesmo espaço?</p>
                  <div className="text-right text-[10px] text-[#9CA3AF] mt-1 -mb-1">10:40</div>
                </div>
              </div>
              <div className="flex flex-col items-end w-full">
                <div className="bg-[#EBF4D9] text-[#1E232A] p-3.5 rounded-2xl rounded-tr-sm max-w-[75%] text-[12.5px] leading-relaxed shadow-sm">
                  <p>Olá, Sofia! Sim, com o plano Pro pode gerir todos os seus canais numa única caixa de entrada. Sem perder nenhuma conversa.</p>
                  <div className="flex items-center justify-end gap-1 text-[10px] text-[#64748B] mt-1 -mb-1">
                    <span>10:41</span>
                    <svg className="w-3 h-3 text-[#527928]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7M11 13l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start max-w-[75%]">
                <div className="bg-[#F3F4F6] text-[#1F2937] p-3.5 rounded-2xl rounded-tl-sm text-[12.5px] leading-relaxed shadow-sm">
                  <p>Ótimo! E como posso experimentar? Somos uma equipa de 5 pessoas.</p>
                  <div className="text-right text-[10px] text-[#9CA3AF] mt-1 -mb-1">10:42</div>
                </div>
              </div>
              <div className="flex flex-col items-end w-full">
                <div className="bg-[#EBF4D9] text-[#1E232A] p-3.5 rounded-2xl rounded-tr-sm max-w-[75%] text-[12.5px] leading-relaxed shadow-sm">
                  <p>Claro, Sofia! Podem experimentar o plano Pro durante 14 dias, com até 5 pessoas. Sem cartão.</p>
                  <div className="flex items-center justify-end gap-1 text-[10px] text-[#64748B] mt-1 -mb-1">
                    <span>10:45</span>
                    <svg className="w-3 h-3 text-[#527928]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7M11 13l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-5 border-t border-[#F0F2F4] bg-white flex flex-col gap-3">
              <div className="flex items-center gap-1.5 text-xs text-[#3E681C] font-medium">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
                <span>Resolvida por Mariana Costa · 10:46</span>
              </div>
              <div className="border border-[#E5E7EB] rounded-2xl p-4 bg-white flex flex-col gap-3">
                <p className="text-xs text-[#4B5563]">Conversa resolvida. O histórico fica guardado.</p>
                <Link href="/inbox/enviada" className="w-full bg-[#171A1F] hover:bg-black text-white py-2.5 rounded-xl font-medium text-xs transition-colors shadow-sm text-center">
                  Reabrir conversa
                </Link>
              </div>
            </div>
          </section>

          <section className="w-[280px] flex-shrink-0 bg-white border border-[#ECEEF0] rounded-2xl p-5 flex flex-col justify-between overflow-y-auto">
            <div className="space-y-6">
              <div className="text-xs font-semibold text-[#111827]">Detalhes do contacto</div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-[#111827]" style={headingFont}>Sofia Martins</h3>
                <p className="text-xs text-[#6B7280]">Luna Studio</p>
                <div className="pt-2"><span className="inline-block bg-[#EBF4D9] text-[#294B0F] text-[11px] font-medium px-2.5 py-0.5 rounded-md">Lead qualificado</span></div>
              </div>
              <div className="border-t border-[#F0F2F4] pt-4 space-y-4">
                <div><span className="text-[10px] font-semibold text-[#8C95A3] uppercase tracking-wider block mb-1">CANAL DE ORIGEM</span><span className="text-xs font-medium text-[#111827]">WhatsApp</span></div>
                <div><span className="text-[10px] font-semibold text-[#8C95A3] uppercase tracking-wider block mb-1">TELEFONE</span><span className="text-xs font-medium text-[#111827]">+244 912 345 678</span></div>
                <div><span className="text-[10px] font-semibold text-[#8C95A3] uppercase tracking-wider block mb-1">E-MAIL</span><span className="text-xs font-medium text-[#111827]">sofia@lunastudio.ao</span></div>
                <div>
                  <span className="text-[10px] font-semibold text-[#8C95A3] uppercase tracking-wider block mb-1">RESPONSÁVEL</span>
                  <div className="flex items-center gap-1.5"><span className="text-xs font-medium text-[#111827]">Mariana Costa</span><Icon className="w-3 h-3 text-[#6B7280]" d="M19 9l-7 7-7-7" /></div>
                </div>
                <div>
                  <span className="text-[10px] font-semibold text-[#8C95A3] uppercase tracking-wider block mb-1.5">ETIQUETAS</span>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="bg-[#F4F4F6] text-[#374151] text-[11px] font-medium px-2.5 py-0.5 rounded-md">Plano Pro</span>
                    <span className="bg-[#F4F4F6] text-[#374151] text-[11px] font-medium px-2.5 py-0.5 rounded-md">Equipa de 5</span>
                  </div>
                </div>
              </div>
              <div className="border-t border-[#F0F2F4] pt-4">
                <span className="text-[10px] font-semibold text-[#8C95A3] uppercase tracking-wider block mb-1">NOTA DA EQUIPA</span>
                <p className="text-xs text-[#525E6F] leading-relaxed">Interessada em centralizar os canais da equipa. Enviar convite para experimentar o plano Pro.</p>
              </div>
            </div>
            <div className="pt-6">
              <Link href="/contactos/sofia-martins" className="w-full border border-[#E5E7EB] hover:bg-neutral-50 text-[#1F2937] py-2 rounded-xl text-xs font-medium flex items-center justify-center gap-1.5 transition-colors">
                <span>Ver contacto completo</span><span className="text-[11px]">↗</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
