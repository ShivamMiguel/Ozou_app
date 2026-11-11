import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "OZOU — Ligação interrompida",
};

const systemFont = {
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
} as CSSProperties;

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
  ["/contactos", "Contactos", "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"],
  ["/inicio", "Início", "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"],
  ["/empresas", "Empresas", "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"],
] as const;

const threads = [
  ["Sofia Martins", "WhatsApp", "Olá! Gost...", true],
  ["Miguel Santos", "Instagram", "Obrigado...", false],
  ["Inês Ferreira", "E-mail", "Re: Proposta...", false],
  ["João Almeida", "SMS", "Podemos...", false],
  ["Beatriz Costa", "WhatsApp", "Perfeito,...", false],
  ["Pedro Ribeiro", "Instagram", "Qual é o...", false],
  ["Carolina Sousa", "E-mail", "Já recebi", false],
  ["Tiago Lopes", "WhatsApp", "Tenho interesse no plano...", false],
] as const;

export default function LigacaoInterrompidaPage() {
  return (
    <div className="app-shell h-dvh relative flex select-none overflow-hidden text-sm text-[#1A1D1A] ozou-interrupcao" style={{ ...systemFont, backgroundColor: "#D3D7D0" }}>
      <style>{`.ozou-interrupcao .custom-scroll::-webkit-scrollbar{width:4px}.ozou-interrupcao .custom-scroll::-webkit-scrollbar-thumb{background:#c2c8bd;border-radius:4px}`}</style>
      <div className="flex-1 flex w-full min-h-screen">
        <aside className="w-64 border-r border-[#C7CCC2] flex flex-col justify-between p-6 bg-[#D7DBD4] shrink-0">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Link href="/" className="text-2xl font-black tracking-tight text-[#111311]">OZOU</Link>
              <span className="w-2 h-2 rounded-full bg-[#8EAA62]" />
            </div>
            <div className="bg-[#CCD1C8] p-3 rounded-2xl flex items-center justify-between cursor-pointer">
              <div>
                <div className="text-[13px] font-semibold text-gray-900 leading-tight">Studio Workspace</div>
                <div className="text-[11px] text-gray-600">Plano Pro</div>
              </div>
              <Icon className="w-4 h-4 text-gray-700" d="M19 9l-7 7-7-7" />
            </div>
            <div className="space-y-1">
              <div className="text-[10px] tracking-wider uppercase font-semibold text-gray-500 mb-2 px-3">Espaço de trabalho</div>
              <Link className="flex items-center justify-between bg-[#191C1B] text-white px-3.5 py-2.5 rounded-xl font-medium text-xs shadow-sm" href="/canais/interrompida">
                <div className="flex items-center gap-2.5">
                  <Icon className="w-4 h-4 text-white" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                  <span>Inbox unificado</span>
                </div>
                <span className="bg-[#2D312F] text-gray-200 text-[10px] px-2 py-0.5 rounded-md font-semibold">12</span>
              </Link>
              {nav.map(([href, label, d]) => (
                <Link key={href} className="flex items-center gap-2.5 text-gray-600 hover:text-gray-900 px-3.5 py-2 rounded-xl text-xs" href={href}>
                  <Icon className="w-4 h-4" d={d} />
                  <span>{label}</span>
                </Link>
              ))}
            </div>
            <div className="bg-[#C8CEC4] p-4 rounded-2xl space-y-2 mt-4">
              <div className="w-6 h-6 flex items-center justify-center text-gray-800">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" /></svg>
              </div>
              <div className="font-bold text-gray-900 text-xs leading-snug">Menos tarefas.<br />Mais conversas.</div>
              <div className="text-[11px] text-gray-600 flex items-center gap-1">A IA trata do resto. <span>↗</span></div>
            </div>
          </div>
          <div className="space-y-4 pt-4 border-t border-[#C7CCC2]">
            <div className="space-y-1">
              <Link className="flex items-center gap-2 text-gray-600 text-xs px-2 py-1" href="/ajuda">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4m0-4h.01" /></svg>
                Ajuda e suporte
              </Link>
              <Link className="flex items-center gap-2 text-gray-600 text-xs px-2 py-1" href="/definicoes/equipa">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><circle cx="12" cy="12" r="3" /></svg>
                Definições
              </Link>
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-[#C7CCC2] px-2">
              <div>
                <div className="text-xs font-semibold text-gray-900 leading-tight">Mariana Costa</div>
                <div className="text-[10px] text-gray-600">Administradora</div>
              </div>
              <Icon className="w-3.5 h-3.5 text-gray-600" d="M19 9l-7 7-7-7" />
            </div>
          </div>
        </aside>
        <main className="flex-1 flex flex-col min-w-0">
          <header className="h-20 px-8 flex items-center justify-between border-b border-[#C7CCC2]">
            <div>
              <div className="text-[11px] text-gray-600 mb-0.5">Workspace / <span className="text-gray-800">Inbox unificado</span></div>
              <h1 className="text-2xl font-bold text-gray-900 tracking-tight leading-tight">Inbox unificado</h1>
              <p className="text-xs text-gray-600">Todas as conversas, no mesmo lugar.</p>
            </div>
            <div className="bg-[#CCD1C8] px-3.5 py-1.5 rounded-full flex items-center gap-2 text-xs font-medium text-gray-800">
              <span className="w-2 h-2 rounded-full bg-[#8EAA62]" />4 canais conectados
            </div>
          </header>
          <div className="px-8 py-4 flex items-center justify-between">
            <button className="bg-[#1C201D] text-white px-4 py-2 rounded-full text-xs font-medium flex items-center gap-2" type="button">Todas as conversas <span className="text-gray-400">24</span></button>
            <div className="flex items-center gap-4">
              <span className="text-xs text-gray-600">A sua equipa está em dia.</span>
              <Link href="/inbox/nova" className="bg-[#1C201D] text-white px-4 py-2 rounded-full text-xs font-medium flex items-center gap-1.5 shadow-sm"><span>+</span> Nova conversa</Link>
            </div>
          </div>
          <div className="flex-1 px-8 pb-6 flex gap-4 min-h-0">
            <div className="w-[300px] bg-[#E3E7DE] rounded-3xl p-3 flex flex-col border border-[#D0D5CB] shrink-0">
              <input id="interrupcao-search" className="w-full bg-[#D7DBD2] text-xs placeholder-gray-500 rounded-xl border-none px-3.5 py-2 mb-3 focus:ring-0" placeholder="Pesquisar por nome ou..." type="text" />
              <div className="flex items-center justify-between text-xs text-gray-700 px-2 py-1 mb-2 font-medium">
                <span>Todos os canais</span>
                <Icon className="w-3.5 h-3.5 text-gray-600" d="M19 9l-7 7-7-7" />
              </div>
              <div className="flex-1 space-y-1.5 overflow-hidden custom-scroll">
                {threads.map(([name, channel, preview, active]) => (
                  <div key={name} className={active ? "bg-[#CCD1C8] p-3 rounded-2xl" : "p-2.5 rounded-2xl"}>
                    <div className={active ? "flex justify-between items-start mb-1" : "text-xs font-medium text-gray-900 mb-1"}>
                      <span className={active ? "text-xs font-bold text-gray-900" : undefined}>{name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="bg-[#D7DBD2] text-[10px] text-gray-700 px-2 py-0.5 rounded-full font-medium">{channel}</span>
                      <span className="text-[11px] text-gray-600 truncate">{preview}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center text-[11px] text-gray-500 pt-3">8 de 24 conversas</div>
            </div>
            <div className="flex-1 bg-[#E3E7DE] rounded-3xl p-6 flex flex-col justify-between border border-[#D0D5CB]">
              <div className="flex items-center justify-between pb-4 border-b border-[#D0D5CB]">
                <div>
                  <h2 className="text-sm font-bold text-gray-900">Sofia Martins</h2>
                  <p className="text-[11px] text-gray-500">Última mensagem há 2 horas</p>
                </div>
                <Link href="/inbox/resolvida" className="bg-[#D7DBD2] text-xs font-medium px-4 py-1.5 rounded-full text-gray-800">Resolver</Link>
              </div>
              <div className="flex-1 flex flex-col justify-end space-y-4 py-4">
                <div className="self-end bg-[#D5DCB8] text-gray-900 p-3.5 rounded-2xl rounded-tr-none max-w-sm text-xs shadow-sm">
                  <p>Sim, podemos agendar a demonstração para amanhã às 14h.</p>
                  <div className="text-[10px] text-right text-gray-500 mt-1">11:42 ✓✓</div>
                </div>
              </div>
              <div className="bg-[#D7DBD2] p-3 rounded-2xl flex flex-col gap-2">
                <div className="text-xs text-gray-400">Escreva uma resposta...</div>
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-2">
                    <button className="text-xs bg-[#CCD1C8] px-3 py-1.5 rounded-full text-gray-700 flex items-center gap-1 font-medium" type="button">+ Anexar ficheiro</button>
                    <Link href="/inbox/sugestao" className="text-xs bg-[#CCD1C8] px-3 py-1.5 rounded-full text-gray-700 flex items-center gap-1 font-medium">✦ Gerar resposta com IA</Link>
                  </div>
                  <button className="bg-[#1C201D] text-white px-5 py-1.5 rounded-full text-xs font-medium flex items-center gap-1" type="button">Enviar ↗</button>
                </div>
              </div>
            </div>
            <div className="w-[280px] bg-[#E3E7DE] rounded-3xl p-5 border border-[#D0D5CB] shrink-0 flex flex-col justify-between">
              <div className="space-y-5">
                <div className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Detalhes do contacto</div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 tracking-tight leading-tight">Sofia Martins</h2>
                  <div className="text-xs text-gray-600 mt-0.5">Luna Studio</div>
                  <div className="mt-2 inline-block bg-[#CCD1C8] text-gray-800 text-[11px] font-semibold px-2.5 py-1 rounded-full">Lead qualificado</div>
                </div>
                <div className="space-y-4 pt-3 text-xs">
                  <div><div className="text-[10px] uppercase font-bold tracking-wider text-gray-500 mb-0.5">Canal de Origem</div><div className="text-gray-900 font-medium">WhatsApp</div></div>
                  <div><div className="text-[10px] uppercase font-bold tracking-wider text-gray-500 mb-0.5">Telefone</div><div className="text-gray-900 font-medium">+244 912 345 678</div></div>
                  <div><div className="text-[10px] uppercase font-bold tracking-wider text-gray-500 mb-0.5">E-mail</div><div className="text-gray-900 font-medium">sofia@lunastudio.ao</div></div>
                  <div>
                    <div className="text-[10px] uppercase font-bold tracking-wider text-gray-500 mb-0.5">Responsável</div>
                    <div className="flex items-center justify-between text-gray-900 font-medium"><span>Mariana Costa</span><Icon className="w-3.5 h-3.5 text-gray-600" d="M19 9l-7 7-7-7" /></div>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold tracking-wider text-gray-500 mb-1.5">Etiquetas</div>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="bg-[#CCD1C8] text-gray-800 text-[11px] font-medium px-2.5 py-0.5 rounded-full">Plano Pro</span>
                      <span className="bg-[#CCD1C8] text-gray-800 text-[11px] font-medium px-2.5 py-0.5 rounded-full">Equipa de 5</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold tracking-wider text-gray-500 mb-1">Nota da equipa</div>
                    <p className="text-[11px] leading-relaxed text-gray-600">Interessada em centralizar os canais da equipa. Enviar convite para experimentar o plano Pro.</p>
                  </div>
                </div>
              </div>
              <Link href="/contactos/sofia-martins" className="w-full mt-4 py-2 px-3 border border-gray-400 rounded-full text-xs font-semibold text-gray-800 hover:bg-[#CCD1C8] transition text-center">Ver contacto completo ↗</Link>
            </div>
          </div>
        </main>
      </div>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/20 backdrop-blur-[2px]">
        <div className="bg-white w-full max-w-[624px] rounded-[32px] p-8 md:p-9 shadow-2xl relative flex flex-col" role="dialog" aria-labelledby="interrupcao-title">
          <Link aria-label="Fechar" href="/definicoes/canais" className="absolute top-6 right-6 w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:text-gray-800 hover:bg-gray-50 transition">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><line x1="18" x2="6" y1="6" y2="18" /><line x1="6" x2="18" y1="6" y2="18" /></svg>
          </Link>
          <div className="bg-[#FDF2F0] rounded-2xl px-6 py-4 mb-8 flex items-center gap-3 w-fit pr-10">
            <span className="text-[#88352C] font-extrabold text-base leading-none">!</span>
            <span className="text-[#88352C] font-bold text-base tracking-tight leading-tight">Ligação ao WhatsApp interrompida</span>
          </div>
          <h2 className="text-[34px] sm:text-[38px] font-bold text-[#141715] leading-[1.12] tracking-tight mb-4" id="interrupcao-title">Vamos pôr as conversas<br />a circular outra vez.</h2>
          <p className="text-[#646A66] text-sm leading-relaxed max-w-[500px] mb-8 font-normal">A autorização expirou ou foi removida na conta do fornecedor. O histórico está preservado. Novas mensagens podem atrasar até voltar a autorizar.</p>
          <div className="bg-[#F9FAF7] rounded-2xl p-6 mb-8 border border-[#ECEFE9]">
            <h3 className="text-sm font-bold text-gray-900 mb-3.5">Antes de tentar novamente</h3>
            <ul className="space-y-2 text-xs text-[#525854]">
              <li className="flex items-center gap-2"><span className="text-xs">✓</span><span>Confirme que tem acesso de administrador.</span></li>
              <li className="flex items-center gap-2"><span className="text-xs">✓</span><span>Verifique a ligação à Internet.</span></li>
              <li className="flex items-center gap-2"><span className="text-xs">✓</span><span>Autorize novamente o número da empresa.</span></li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <Link href="/canais/whatsapp" className="w-full bg-[#181B19] hover:bg-black text-white py-3.5 px-6 rounded-full font-semibold text-xs tracking-wide flex items-center justify-center gap-1.5 shadow-sm transition"><span>Voltar a autorizar</span><span className="text-sm font-normal">↗</span></Link>
            <Link href="/definicoes/canais" className="w-full bg-white hover:bg-gray-50 border border-gray-200 text-[#181B19] py-3.5 px-6 rounded-full font-semibold text-xs tracking-wide transition text-center">Voltar às ligações</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
