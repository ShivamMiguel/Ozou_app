import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "OZOU — Campanha agendada",
};

export default function CampanhaAgendadaPage() {
  return (
    <div className="font-sans antialiased text-[#171a17] overflow-hidden app-shell h-dvh w-full relative select-none bg-[#dfded9]">
      <div className="absolute inset-0 flex w-full h-full filter blur-[5px] scale-[1.01] pointer-events-none">
        <aside className="w-[260px] bg-[#dcddd8] border-r border-[#cbccc5] flex flex-col justify-between p-6 shrink-0">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold tracking-tight text-[#171a17]">OZOU</span>
              <span className="w-2 h-2 rounded-full bg-[#85b938] inline-block mb-1" />
            </div>
            <div className="bg-[#d2d4cd] rounded-xl p-3 flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold text-[#171a17]">Studio Workspace</div>
                <div className="text-xs text-[#6e726b]">Plano Pro</div>
              </div>
              <svg className="w-4 h-4 text-[#52564f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
            <div className="flex flex-col gap-1 mt-2">
              <span className="text-[11px] font-semibold text-[#7c8078] tracking-wider uppercase mb-1">Espaço de trabalho</span>
              <div className="flex items-center justify-between px-3 py-2 text-sm text-[#4b4f48] rounded-xl">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 stroke-[1.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>Inbox unificado</span>
                </div>
                <span className="text-xs bg-[#cfd1c9] px-2 py-0.5 rounded-full font-medium">12</span>
              </div>
              <div className="flex items-center justify-between px-3 py-2 text-sm text-white bg-[#1a1e1b] rounded-xl font-medium shadow-sm">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 stroke-[1.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>Automação & campanhas</span>
                </div>
              </div>
              <div className="flex items-center gap-3 px-3 py-2 text-sm text-[#4b4f48] rounded-xl">
                <svg className="w-5 h-5 stroke-[1.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Insights & métricas</span>
              </div>
              <div className="flex items-center gap-3 px-3 py-2 text-sm text-[#4b4f48] rounded-xl">
                <svg className="w-5 h-5 stroke-[1.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Contactos</span>
              </div>
              <div className="flex items-center gap-3 px-3 py-2 text-sm text-[#4b4f48] rounded-xl">
                <svg className="w-5 h-5 stroke-[1.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Início</span>
              </div>
              <div className="flex items-center gap-3 px-3 py-2 text-sm text-[#4b4f48] rounded-xl">
                <svg className="w-5 h-5 stroke-[1.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Empresas</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="bg-[#ced2cb] p-4 rounded-2xl relative">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
              <p className="text-sm font-bold text-[#1a1e1b] leading-snug">
                Menos tarefas.
                <br />
                Mais conversas.
              </p>
              <div className="mt-3 flex items-center justify-between text-[11px] text-[#555a52]">
                <span>A IA trata do resto.</span>
                <span className="text-xs">↗</span>
              </div>
            </div>
            <div className="flex flex-col gap-2 pt-2 text-sm text-[#4b4f48]">
              <div className="flex items-center gap-3 px-2 py-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
                Ajuda e suporte
              </div>
              <div className="flex items-center gap-3 px-2 py-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
                Definições
              </div>
            </div>
            <div className="border-t border-[#cbccc5] pt-3 flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold text-[#1a1e1b]">Mariana Costa</div>
                <div className="text-xs text-[#70746d]">Administradora</div>
              </div>
              <svg className="w-4 h-4 text-[#70746d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </aside>
        <main className="flex-1 flex flex-col h-full bg-[#e3e6e1] overflow-hidden">
          <header className="h-20 px-8 flex items-center justify-between border-b border-[#d4d7d1]">
            <div>
              <div className="text-xs text-[#72766f]">Workspace / Automação & campanhas</div>
              <h1 className="text-2xl font-bold tracking-tight text-[#171a17]">Automação & campanhas</h1>
              <p className="text-xs text-[#72766f]">A mensagem certa. No momento certo.</p>
            </div>
            <div className="flex items-center gap-2 bg-[#d2d6d0] px-3 py-1.5 rounded-full text-xs font-medium text-[#494d46]">
              <span className="w-2 h-2 rounded-full bg-[#528a2c]" />
              4 canais conectados
            </div>
          </header>
          <div className="flex-1 p-8 grid grid-cols-12 gap-6 overflow-hidden">
            <div className="col-span-8 space-y-4">
              <div>
                <h2 className="text-xl font-bold text-[#171a17]">Nova campanha</h2>
                <p className="text-xs text-[#72766f]">Reativação de leads · Rascunho</p>
              </div>
              {[
                ["1", "Escolha de canal"],
                ["2", "Defina o público"],
                ["3", "Dê voz à campanha"],
              ].map(([step, label]) => (
                <div key={step} className="bg-white/80 p-5 rounded-2xl border border-white">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-black text-white text-xs flex items-center justify-center font-bold">{step}</span>
                    <span className="font-bold text-sm">{label}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-span-4 space-y-4">
              <div className="bg-white/70 p-5 rounded-2xl border border-white h-64">
                <h3 className="font-bold text-sm">Sua mensagem, em contexto.</h3>
              </div>
              <div className="bg-[#dbe0d9] p-5 rounded-2xl h-44">
                <h3 className="font-bold text-sm">Um bom momento para chegar.</h3>
              </div>
            </div>
          </div>
        </main>
      </div>

      <div className="absolute inset-0 z-50 flex items-center justify-center p-4 bg-[rgba(60,68,62,0.28)]">
        <div
          aria-labelledby="modal-headline"
          aria-modal="true"
          className="bg-white rounded-[32px] w-full max-w-[536px] shadow-[0_20px_50px_rgba(0,0,0,0.18)] p-10 relative flex flex-col"
          role="dialog"
        >
          <Link
            aria-label="Fechar"
            href="/automacao-campanhas"
            className="absolute top-6 right-6 w-9 h-9 rounded-full border border-[#eceee9] bg-[#fbfcfb] flex items-center justify-center text-[#555a53] hover:text-black hover:border-gray-300 transition-colors focus:outline-none"
          >
            <span className="text-xl leading-none font-light mb-0.5">×</span>
          </Link>
          <div className="flex items-center gap-2 bg-[#eef5ee] w-fit px-4 py-2.5 rounded-full mb-8">
            <svg className="w-4 h-4 text-[#20241f] stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M4.5 12.75l6 6 9-13.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-[15px] font-semibold text-[#181c19] tracking-tight">Agendamento confirmado</span>
          </div>
          <h2 className="text-[34px] font-bold text-[#141815] leading-[1.18] tracking-[-0.02em] mb-4" id="modal-headline">
            A mensagem certa.
            <br />À hora combinada.
          </h2>
          <div className="text-[15px] leading-relaxed text-[#686d65] mb-8 font-normal">
            <p>A campanha Reativação de leads está agendada.</p>
            <p>50 contactos · WhatsApp e E-mail</p>
            <p>Hoje, 9 de novembro, às 18:30 · Luanda</p>
          </div>
          <div className="bg-[#f7f9f6] border border-[#f0f3ee] rounded-2xl p-6 mb-8 text-left">
            <h3 className="text-[16px] font-bold text-[#191d1a] tracking-tight mb-2">Pode rever ou cancelar até às 18:30.</h3>
            <p className="text-[13px] text-[#6d726b] leading-relaxed">
              Os contactos são validados novamente antes do envio.
              <br />O agendamento usa o fuso horário da empresa.
            </p>
          </div>
          <div className="flex flex-col gap-3 w-full">
            <Link
              href="/automacao-campanhas"
              className="w-full h-[52px] bg-[#1a1d1b] hover:bg-[#282d29] text-white rounded-full font-medium text-[15px] flex items-center justify-center gap-2 transition-colors shadow-sm focus:ring-2 focus:ring-offset-2 focus:ring-black"
            >
              <span>Ver a campanha</span>
              <span className="text-base font-light tracking-tight">→</span>
            </Link>
            <Link
              href="/automacao-campanhas"
              className="w-full h-[52px] bg-transparent hover:bg-[#f6f7f5] text-[#1c201d] border border-[#d2d6cf] rounded-full font-medium text-[15px] flex items-center justify-center transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
            >
              Alterar ou cancelar agendamento
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
