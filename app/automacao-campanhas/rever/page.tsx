import type { Metadata } from "next";
import Link from "next/link";
import { CampaignConfirm } from "@/components/live/actions";

export const metadata: Metadata = {
  title: "OZOU — Rever campanha",
};

function Icon({ d, className }: { d: string; className: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path d={d} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
    </svg>
  );
}

export default function ReverCampanhaPage() {
  return (
    <div className="bg-[#dcdfd9] text-[#1a1c1b] app-shell h-dvh relative overflow-hidden select-none ozou-rever">
      <style>{`.ozou-rever .custom-scrollbar::-webkit-scrollbar{width:5px}.ozou-rever .custom-scrollbar::-webkit-scrollbar-thumb{background:#c2c7c0;border-radius:10px}`}</style>
      <div className="flex h-screen w-full relative pointer-events-none filter select-none">
        <aside className="w-[260px] flex-shrink-0 bg-[#e3e5e0] border-r border-[#d4d8d1] flex flex-col justify-between p-5 h-full">
          <div className="space-y-6">
            <div className="flex items-center gap-2 px-1">
              <span className="text-2xl font-bold tracking-tight text-[#111413]">OZOU</span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#a3db34] inline-block mb-1" />
            </div>
            <div className="bg-[#d7dbd4] rounded-2xl p-3.5 flex items-center justify-between">
              <div>
                <div className="font-semibold text-sm text-[#181a19]">Studio Workspace</div>
                <div className="text-xs text-gray-500">Plano Pro</div>
              </div>
              <Icon className="w-4 h-4 text-gray-600 stroke-[2]" d="M19 9l-7 7-7-7" />
            </div>
            <div className="text-[11px] font-semibold tracking-wider text-gray-500 uppercase px-1">Espaço de trabalho</div>
            <nav className="space-y-1.5 text-sm font-medium">
              <div className="flex items-center justify-between px-3 py-2.5 rounded-xl text-gray-700">
                <div className="flex items-center gap-3">
                  <Icon className="w-5 h-5 text-gray-600" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                  <span>Inbox unificado</span>
                </div>
                <span className="text-xs bg-[#cfd4cb] px-2 py-0.5 rounded-full text-gray-700 font-semibold">12</span>
              </div>
              <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-[#1b1e1d] text-white">
                <Icon className="w-5 h-5 text-white" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                <span className="leading-tight">Automação & campanhas</span>
              </div>
              {[
                ["Insights & métricas", "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"],
                ["Contactos", "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"],
                ["Início", "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"],
                ["Empresas", "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"],
              ].map(([label, d]) => (
                <div key={label} className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-700">
                  <Icon className="w-5 h-5 text-gray-600" d={d} />
                  <span>{label}</span>
                </div>
              ))}
            </nav>
          </div>
          <div className="space-y-4">
            <div className="bg-[#d2d6ce] p-4 rounded-2xl relative">
              <Icon className="w-4 h-4 mb-2 text-gray-700 stroke-[2]" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              <div className="font-bold text-sm leading-tight text-[#1c1f1e]">Menos tarefas.<br />Mais conversas.</div>
              <div className="flex items-center justify-between mt-3 text-xs text-gray-600">
                <span>A IA trata do resto.</span>
                <Icon className="w-3.5 h-3.5 stroke-[2]" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </div>
            </div>
            <div className="space-y-1 text-xs font-medium text-gray-600">
              <div className="flex items-center gap-2.5 py-1 px-1">
                <Icon className="w-4 h-4 text-gray-500 stroke-[2]" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                <span>Ajuda e suporte</span>
              </div>
              <div className="flex items-center gap-2.5 py-1 px-1">
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /><circle cx="12" cy="12" r="3" /></svg>
                <span>Definições</span>
              </div>
            </div>
            <div className="border-t border-[#d4d8d1] pt-3 flex items-center justify-between">
              <div>
                <div className="text-xs font-semibold text-[#181a19]">Mariana Costa</div>
                <div className="text-[11px] text-gray-500">Administradora</div>
              </div>
              <Icon className="w-3.5 h-3.5 text-gray-500 stroke-[2]" d="M19 9l-7 7-7-7" />
            </div>
          </div>
        </aside>
        <main className="flex-1 flex flex-col h-full bg-[#dcdfd9] overflow-hidden">
          <header className="h-20 px-8 flex items-center justify-between border-b border-[#cfd4cd]">
            <div>
              <div className="text-xs text-gray-500 flex items-center gap-2"><span>Workspace</span><span>/</span><span>Automação & campanhas</span></div>
              <h1 className="text-xl font-bold text-[#111413] tracking-tight mt-0.5">Automação & campanhas</h1>
              <p className="text-[11px] text-gray-500">A mensagem certa. No momento certo.</p>
            </div>
            <div className="flex items-center gap-2 bg-[#d1d6ce] px-3.5 py-1.5 rounded-full text-xs font-medium text-gray-700">
              <span className="w-2 h-2 rounded-full bg-[#82bd26]" /><span>4 canais conectados</span>
            </div>
          </header>
          <div className="p-8 flex-1 overflow-auto flex flex-col gap-6 opacity-60 custom-scrollbar">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Nova campanha</h2>
                <p className="text-xs text-gray-500">Reativação de leads · Rascunho automático</p>
              </div>
              <span className="bg-[#d2d6d0] text-gray-700 px-4 py-1.5 rounded-full text-xs font-medium border border-gray-400">Ver campanhas</span>
            </div>
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-7 bg-[#cfd4cb] rounded-3xl p-6 h-96" />
              <div className="col-span-5 bg-[#cfd4cb] rounded-3xl p-6 h-96" />
            </div>
          </div>
        </main>
      </div>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-[2px] p-4 sm:p-6">
        <div className="bg-white w-full max-w-[620px] rounded-[32px] shadow-2xl p-8 sm:p-9 relative flex flex-col" role="dialog" aria-labelledby="rever-title">
          <Link aria-label="Fechar" href="/automacao-campanhas/rascunho" className="absolute top-7 right-7 w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-700 hover:border-gray-400 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
          </Link>
          <div className="mb-6">
            <h2 className="text-[30px] font-bold text-[#141716] tracking-tight leading-snug" id="rever-title">Rever antes de enviar.</h2>
            <p className="text-[13px] font-normal text-gray-500 mt-1">Reativação de leads <span className="mx-1">·</span> Studio Workspace</p>
          </div>
          <div className="bg-[#f3f7ee] rounded-2xl p-6 space-y-5">
            <div>
              <div className="text-[10px] font-bold tracking-wider text-gray-500 uppercase">Público</div>
              <div className="text-[15px] font-semibold text-[#161a18] mt-0.5">50 leads sem resposta há 7 dias</div>
            </div>
            <div>
              <div className="text-[10px] font-bold tracking-wider text-gray-500 uppercase">Canais</div>
              <div className="text-[15px] font-semibold text-[#161a18] mt-0.5">WhatsApp e E-mail</div>
            </div>
            <div>
              <div className="text-[10px] font-bold tracking-wider text-gray-500 uppercase">Consentimento</div>
              <div className="text-[15px] font-semibold text-[#161a18] mt-0.5">50 contactos elegíveis <span className="font-normal text-gray-500">·</span> Sem duplicação por canal</div>
            </div>
          </div>
          <div className="mt-4 px-1">
            <p className="text-[13px] text-gray-500 leading-relaxed">Cada contacto recebe uma única mensagem no canal disponível com maior prioridade: WhatsApp, seguido de E-mail.</p>
          </div>
          <div className="mt-5 border border-gray-200/90 rounded-2xl p-4 sm:p-5 flex items-start gap-3">
            <svg className="w-4 h-4 text-gray-900 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 2L13.8 8.2L20 10L13.8 11.8L12 18L10.2 11.8L4 10L10.2 8.2L12 2Z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
            <div>
              <div className="text-sm font-semibold text-[#141716]">Melhor horário: hoje às 18:30</div>
              <div className="text-[12px] text-gray-500 mt-0.5">África / Luanda · Pode cancelar antes do envio.</div>
            </div>
          </div>
          <div className="mt-5 mb-7 px-1">
            <p className="text-[12px] text-gray-500 font-medium">A IA sugere. A decisão final é sua.</p>
          </div>
          <div className="flex items-center gap-3.5">
            <CampaignConfirm kind="send" className="flex-1 py-3 px-6 rounded-full border border-gray-300 text-sm font-semibold text-[#161a18] hover:bg-gray-50 active:bg-gray-100 transition-all text-center">Enviar agora</CampaignConfirm>
            <CampaignConfirm kind="schedule" className="flex-1 py-3 px-6 rounded-full bg-[#181b19] hover:bg-black text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-sm transition-all"><span>Confirmar agendamento</span><span className="text-base leading-none">→</span></CampaignConfirm>
          </div>
        </div>
      </div>
    </div>
  );
}
