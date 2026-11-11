import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "OZOU — Gerir agendamento",
};

function Icon({ d, className }: { d: string; className: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path d={d} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
    </svg>
  );
}

const nav = [
  ["/insights", "Insights & métricas", "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"],
  ["/contactos", "Contactos", "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"],
  ["/inicio", "Início", "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"],
  ["/empresas", "Empresas", "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"],
] as const;

export default function GerirAgendamentoPage() {
  return (
    <div className="bg-[#E4E7E9] text-[#191D23] app-shell h-dvh relative overflow-hidden select-none">
      <div className="flex h-screen w-full">
        <aside className="w-[260px] bg-[#E4E7E9] border-r border-[#D9DDE2] flex flex-col justify-between p-5 shrink-0">
          <div>
            <div className="flex items-center gap-2 mb-8 px-2">
              <Link href="/" className="text-2xl font-bold tracking-tight text-[#161A1D]">OZOU</Link>
              <span className="w-2.5 h-2.5 rounded-full bg-[#B3D656] inline-block" />
            </div>
            <div className="bg-[#D9DDE1] rounded-2xl p-3 mb-6 flex items-center justify-between cursor-pointer">
              <div>
                <p className="text-sm font-semibold text-gray-900 leading-tight">Studio Workspace</p>
                <p className="text-xs text-gray-500 mt-0.5">Plano Pro</p>
              </div>
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
            </div>
            <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider px-2 mb-3">Espaço de trabalho</p>
            <nav className="space-y-1">
              <Link className="flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-600 rounded-xl hover:bg-gray-200" href="/inbox">
                <span className="flex items-center gap-3">
                  <Icon className="w-4 h-4 text-gray-500" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                  Inbox unificado
                </span>
                <span className="bg-[#D3D7DC] text-gray-700 text-xs px-2 py-0.5 rounded-full font-semibold">12</span>
              </Link>
              <Link className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-white bg-[#191D23] rounded-xl shadow-sm" href="/automacao-campanhas/gerir-agendamento">
                <Icon className="w-4 h-4 text-white" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                Automação & campanhas
              </Link>
              {nav.map(([href, label, d]) => (
                <Link key={href} className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 rounded-xl hover:bg-gray-200" href={href}>
                  <Icon className="w-4 h-4 text-gray-500" d={d} />
                  {label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="space-y-4">
            <div className="bg-[#D9DDE1] rounded-2xl p-4">
              <Icon className="w-5 h-5 text-gray-700 mb-2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              <p className="font-semibold text-gray-900 text-sm leading-snug">Menos tarefas.<br />Mais conversas.</p>
              <a className="text-xs text-gray-600 flex items-center gap-1 mt-3 font-medium" href="#">A IA trata do resto. <span>↗</span></a>
            </div>
            <div className="space-y-2 border-t border-gray-300 pt-3">
              <Link className="flex items-center gap-3 px-2 py-1 text-sm text-gray-600 hover:text-gray-900" href="/ajuda">
                <Icon className="w-4 h-4 text-gray-500" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                Ajuda e suporte
              </Link>
              <Link className="flex items-center gap-3 px-2 py-1 text-sm text-gray-600 hover:text-gray-900" href="/definicoes/equipa">
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
                  <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
                </svg>
                Definições
              </Link>
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-gray-300">
              <div>
                <p className="text-sm font-semibold text-gray-900 leading-tight">Mariana Costa</p>
                <p className="text-xs text-gray-500">Administradora</p>
              </div>
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
            </div>
          </div>
        </aside>
        <main className="flex-1 flex flex-col overflow-hidden">
          <header className="h-20 px-8 flex items-center justify-between border-b border-gray-300">
            <div>
              <p className="text-xs text-gray-500 font-medium">Workspace / <span className="text-gray-700">Automação & campanhas</span></p>
              <h1 className="text-2xl font-bold text-gray-900 tracking-tight mt-0.5">Automação & campanhas</h1>
              <p className="text-xs text-gray-500">A mensagem certa. No momento certo.</p>
            </div>
            <div className="flex items-center gap-2 bg-[#D9DDE1] px-3.5 py-1.5 rounded-full text-xs font-medium text-gray-700">
              <span className="w-2 h-2 rounded-full bg-[#7BB238]" />4 canais conectados
            </div>
          </header>
          <div className="px-8 py-5 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-gray-900 tracking-tight">Nova campanha</h2>
              <p className="text-xs text-gray-500">Reativação de leads · Rascunho salvo</p>
            </div>
            <Link href="/campanhas" className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-full">Ver campanhas</Link>
          </div>
          <div className="flex-1 px-8 pb-6 flex gap-6 overflow-hidden">
            <div className="flex-1 space-y-6">
              <div className="border border-gray-300 rounded-3xl p-6 bg-[#EDEFF1]">
                <div className="flex items-center gap-3"><span className="w-6 h-6 rounded-full bg-black text-white text-xs flex items-center justify-center font-bold">1</span><div><h3 className="font-bold text-sm">Escolha os canais</h3><p className="text-xs text-gray-500">Combine os canais de envio</p></div></div>
              </div>
              <div className="border border-gray-300 rounded-3xl p-6 bg-[#EDEFF1]">
                <div className="flex items-center gap-3"><span className="w-6 h-6 rounded-full bg-black text-white text-xs flex items-center justify-center font-bold">2</span><div><h3 className="font-bold text-sm">Defina o público</h3><p className="text-xs text-gray-500">Um filtro simples</p></div></div>
              </div>
            </div>
            <div className="w-[480px] border border-gray-300 rounded-3xl p-6 bg-[#EDEFF1]">
              <h3 className="font-bold text-base mb-1">A sua mensagem, em contexto.</h3>
              <p className="text-xs text-gray-500 mb-6">Pré-visualização · WhatsApp</p>
              <div className="bg-white/60 p-4 rounded-2xl">
                <p className="text-xs font-bold">Sofia Martins</p>
                <p className="text-[10px] text-gray-400 mb-4">WhatsApp</p>
                <div className="bg-[#D8E6CC] p-4 rounded-2xl text-xs max-w-[280px]">
                  Olá, Sofia! 👋<br />Ainda podemos ajudar a simplificar o seu dia a dia?<br />Experimente a OZOU com a sua equipa. Estamos por aqui.
                  <div className="text-[10px] text-gray-500 text-right mt-1">18:30 ✓✓</div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div className="fixed inset-0 bg-[#353A40]/35 backdrop-blur-[0.5px] z-40" />
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div aria-labelledby="modal-headline" aria-modal="true" className="bg-white rounded-[32px] shadow-2xl w-full max-w-[546px] p-8 relative flex flex-col" role="dialog">
          <Link aria-label="Fechar" className="absolute top-6 right-6 w-9 h-9 bg-[#1E2226] text-white rounded-full flex items-center justify-center hover:bg-black transition-colors" href="/campanhas/agendada">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" /></svg>
          </Link>
          <div className="pr-12 mb-7">
            <h2 className="text-[28px] leading-tight font-bold text-[#14171A] tracking-tight" id="modal-headline">Rever o próximo passo.</h2>
            <p className="text-sm font-normal text-[#5A636C] mt-2 tracking-normal">Reativação de leads · Agendada para hoje às 18:30</p>
          </div>
          <div className="bg-[#F0F5EB] rounded-2xl p-6 mb-4 text-left border border-[#E4ECE0]/80">
            <h3 className="text-base font-bold text-[#191D21] tracking-tight mb-4">50 contactos · WhatsApp e E-mail</h3>
            <p className="text-[13.5px] leading-relaxed text-[#4A545E]">O envio ainda não começou.<br />Pode rever a mensagem ou cancelar o agendamento.<br />Ao cancelar, a campanha volta a rascunho.</p>
          </div>
          <p className="text-xs text-[#5D6670] mb-8 font-normal">Sem envio parcial ou perda da mensagem.</p>
          <div className="flex flex-col gap-2.5 mt-auto">
            <Link href="/automacao-campanhas/agendada" className="w-full bg-[#181C20] hover:bg-black text-white text-[13.5px] font-medium py-3.5 px-6 rounded-full flex items-center justify-center gap-2 transition-all shadow-sm"><span>Rever mensagem e horário</span><span className="text-sm font-normal">→</span></Link>
            <Link href="/automacao-campanhas/rascunho" className="w-full bg-[#181C20] hover:bg-black text-white text-[13.5px] font-medium py-3.5 px-6 rounded-full transition-all shadow-sm text-center">Cancelar agendamento</Link>
            <Link href="/campanhas/agendada" className="w-full bg-[#181C20] hover:bg-black text-white text-[13.5px] font-medium py-3.5 px-6 rounded-full transition-all shadow-sm text-center">Manter agendamento</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
