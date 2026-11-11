import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "OZOU — Conectar SMS",
};

const chats = [
  { name: "Sofia Martins", channel: "WhatsApp", preview: "Olá! Gostaria de mais detalhes sobre...", wa: true, active: true },
  { name: "Miguel Santos", channel: "Instagram", preview: "Obrigado pelo feedback rápido...", wa: false, active: false },
  { name: "Inês Ferreira", channel: "E-mail", preview: "Re: Proposta comercial de acompanhamento", wa: false, active: false },
  { name: "João Almeida", channel: "SMS", preview: "Podemos confirmar o agendamento?", wa: false, active: false },
  { name: "Beatriz Costa", channel: "WhatsApp", preview: "Perfeito, aguardo envio da fatura.", wa: true, active: false },
  { name: "Pedro Ribeiro", channel: "Instagram", preview: "Qual é o prazo de entrega habitual?", wa: false, active: false },
  { name: "Carolina Sousa", channel: "E-mail", preview: "Já recebi a documentação inicial.", wa: false, active: false },
  { name: "Tiago Lopes", channel: "WhatsApp", preview: "Tenho interesse no plano Pro.", wa: true, active: false },
];

const nav = [
  ["/automacao-campanhas", "Automação & campanhas", "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"],
  ["/insights", "Insights & métricas", "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"],
  ["/contactos", "Contactos", "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"],
  ["/inicio", "Início", "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"],
  ["/empresas", "Empresas", "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"],
] as const;

const permissions = [
  "Receber e responder a mensagens",
  "Sincronizar contactos e estados de entrega",
  "Enviar campanhas autorizadas pela sua equipa",
];

export default function ConectarSmsPage() {
  return (
    <div className="relative app-shell h-dvh w-full overflow-hidden flex text-sm bg-[#E2E1DC] text-[#1c1c1e] antialiased ozou-sms">
      <style>{`.ozou-sms::-webkit-scrollbar,.ozou-sms *::-webkit-scrollbar{width:4px;height:4px}.ozou-sms::-webkit-scrollbar-thumb,.ozou-sms *::-webkit-scrollbar-thumb{background:rgba(0,0,0,0.15);border-radius:4px}`}</style>
      <div className="flex w-full h-full">
        <aside className="w-64 flex flex-col justify-between p-5 border-r border-[#D3D2CD] bg-[#E2E1DC] shrink-0">
          <div className="space-y-6">
            <div className="flex items-center gap-2 px-1 pt-1">
              <Link href="/" className="text-2xl font-bold tracking-tight text-[#1c1c1e]">
                OZOU
              </Link>
              <span className="w-2 h-2 rounded-full bg-[#A3B838] inline-block" />
            </div>
            <div className="bg-[#D3D2CC] p-3 rounded-xl flex items-center justify-between cursor-pointer">
              <div>
                <div className="text-[13px] font-semibold text-[#1c1c1e]">Studio Workspace</div>
                <div className="text-xs text-neutral-500">Plano Pro</div>
              </div>
              <svg className="w-4 h-4 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
            <div className="space-y-1">
              <div className="text-[11px] font-medium tracking-wider text-neutral-400 uppercase mb-2 px-1">Espaço de trabalho</div>
              <Link className="flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-[#1C1C1E] text-white font-medium text-xs" href="/inbox">
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                  <span>Inbox unificado</span>
                </div>
                <span className="bg-[#2E2E32] text-[10px] font-semibold px-2 py-0.5 rounded-full text-white">12</span>
              </Link>
              {nav.map(([href, label, d]) => (
                <Link key={href} className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-neutral-600 hover:bg-[#D7D6D0] text-xs font-medium transition-colors" href={href}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d={d} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                  <span className="leading-tight">{label}</span>
                </Link>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-[#D3D2CC] p-4 rounded-2xl relative">
              <div className="text-xs mb-1">✦</div>
              <div className="text-xs font-bold text-[#1C1C1E] leading-snug">
                Menos tarefas.
                <br />
                Mais conversas.
              </div>
              <div className="text-[11px] text-neutral-500 mt-2 flex items-center justify-between">
                <span>A IA trata do resto.</span>
                <span>↗</span>
              </div>
            </div>
            <div className="space-y-2 pt-1 border-t border-[#D3D2CD]/60 text-xs text-neutral-600">
              <Link className="flex items-center gap-2 cursor-pointer py-1" href="/ajuda">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
                <span>Ajuda e suporte</span>
              </Link>
              <Link className="flex items-center gap-2 cursor-pointer py-1" href="/definicoes/equipa">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
                <span>Definições</span>
              </Link>
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-[#D3D2CD]/60 cursor-pointer">
              <div>
                <div className="text-xs font-semibold text-[#1C1C1E]">Mariana Costa</div>
                <div className="text-[11px] text-neutral-500">Administradora</div>
              </div>
              <svg className="w-3.5 h-3.5 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </aside>

        <main className="flex-1 flex flex-col min-w-0 bg-[#E2E1DC]">
          <header className="h-20 px-8 flex items-center justify-between border-b border-[#D3D2CD]">
            <div>
              <div className="text-xs text-neutral-500 mb-0.5">
                Workspace <span className="mx-1">/</span> Inbox unificado
              </div>
              <h1 className="text-2xl font-bold text-[#1C1C1E]">Inbox unificado</h1>
              <p className="text-xs text-neutral-500">Todas as conversas, no mesmo lugar.</p>
            </div>
            <div className="flex items-center gap-2 bg-[#D1D3C7] text-neutral-800 text-xs px-3.5 py-1.5 rounded-full font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#344011]" />
              <span>4 canais conectados</span>
            </div>
          </header>
          <div className="px-8 py-3 flex items-center justify-between border-b border-[#D3D2CD]">
            <button className="bg-[#1C1C1E] text-white px-3.5 py-1.5 rounded-full text-xs font-medium" type="button">
              Todas as conversas <span className="ml-1 text-neutral-400">24</span>
            </button>
            <div className="flex items-center gap-4">
              <span className="text-xs text-neutral-500">A sua equipa está em dia.</span>
              <button className="bg-[#1C1C1E] hover:bg-black text-white px-4 py-2 rounded-full text-xs font-medium flex items-center gap-1.5" type="button">
                <span className="text-sm leading-none">+</span>
                <span>Nova conversa</span>
              </button>
            </div>
          </div>
          <div className="flex-1 flex min-h-0 p-4 gap-4 overflow-hidden">
            <div className="w-80 flex flex-col bg-[#EDEDEB] rounded-2xl border border-[#DCDAD4] p-3 shrink-0">
              <div className="relative mb-3">
                <input id="sms-search" className="w-full bg-[#E3E2DD] border-none rounded-xl text-xs pl-8 pr-3 py-2 text-neutral-700 placeholder-neutral-400 focus:ring-0" placeholder="Pesquisar por nome ou..." type="text" aria-label="Pesquisar conversas" />
                <svg className="w-3.5 h-3.5 text-neutral-400 absolute left-2.5 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </div>
              <div className="text-xs text-neutral-500 mb-2 px-1">Todos os canais ∨</div>
              <div className="flex-1 overflow-y-auto space-y-1">
                {chats.map((chat) => (
                  <div key={chat.name} className={chat.active ? "bg-[#DFDFD9] p-3 rounded-xl cursor-pointer" : "p-3 rounded-xl hover:bg-[#E5E4DE] cursor-pointer"}>
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-semibold text-xs text-[#1C1C1E]">{chat.name}</span>
                      <span className={chat.wa ? "bg-[#CED5BC] text-[#283810] text-[10px] px-1.5 py-0.5 rounded font-medium" : "bg-[#D8D7D1] text-neutral-600 text-[10px] px-1.5 py-0.5 rounded"}>{chat.channel}</span>
                    </div>
                    <p className="text-[11px] text-neutral-500 truncate">{chat.preview}</p>
                  </div>
                ))}
              </div>
              <div className="text-[11px] text-neutral-400 text-center pt-2">8 de 24 conversas</div>
            </div>
            <div className="flex-1 flex flex-col bg-[#EDEDEB] rounded-2xl border border-[#DCDAD4] p-4 relative">
              <div className="flex justify-between items-center pb-3 border-b border-[#DFDFD9]">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-sm text-[#1C1C1E]">Sofia Martins</span>
                  <span className="text-xs text-neutral-500">· Luna Studio</span>
                </div>
                <Link href="/inbox/resolvida" className="text-xs text-neutral-600 px-3 py-1 bg-[#E0DFD9] rounded-lg">
                  Resolver
                </Link>
              </div>
              <div className="flex-1 overflow-y-auto py-4 space-y-4">
                <div className="max-w-md bg-[#DFDFD9] p-3 rounded-2xl text-xs text-neutral-800">Olá Mariana! Estamos a ponderar subscrever o plano Pro para a equipa toda.</div>
                <div className="max-w-md ml-auto bg-[#D8E4BD] p-3 rounded-2xl text-xs text-neutral-900">
                  Olá Sofia! Com certeza, posso partilhar os detalhes e condições do plano.
                  <span className="block text-[9px] text-neutral-600 text-right mt-1">11:41 ✓✓</span>
                </div>
              </div>
              <div className="border border-[#D4D2CA] bg-[#E4E3DD] rounded-xl p-2.5">
                <input id="sms-reply" className="w-full bg-transparent border-none text-xs text-neutral-700 placeholder-neutral-400 focus:ring-0 mb-2" placeholder="Escreva uma resposta..." type="text" aria-label="Resposta" />
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-neutral-500 flex items-center gap-1 cursor-pointer">📎 Anexar ficheiro</span>
                    <button className="text-xs bg-[#D8D7D1] px-2.5 py-1 rounded-lg text-neutral-700 flex items-center gap-1 font-medium" type="button">
                      ✦ Gerar resposta com IA
                    </button>
                  </div>
                  <button className="bg-[#1C1C1E] text-white text-xs px-3.5 py-1.5 rounded-lg flex items-center gap-1" type="button">
                    <span>Enviar</span>
                    <span>↗</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="w-72 bg-[#EDEDEB] rounded-2xl border border-[#DCDAD4] p-4 shrink-0 flex flex-col justify-between">
              <div className="space-y-5">
                <div className="text-xs font-semibold text-neutral-500">Detalhes do contacto</div>
                <div>
                  <h2 className="text-lg font-bold text-[#1C1C1E]">Sofia Martins</h2>
                  <div className="text-xs text-neutral-500 mb-2">Luna Studio</div>
                  <span className="bg-[#D2DCBB] text-[#24330F] text-[11px] px-2.5 py-1 rounded-md font-medium">Lead qualificado</span>
                </div>
                <div className="space-y-3 pt-3 border-t border-[#DFDFD9] text-xs">
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-neutral-400 font-semibold mb-0.5">Canal de Origem</div>
                    <div className="text-neutral-800 font-medium">WhatsApp</div>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-neutral-400 font-semibold mb-0.5">Telefone</div>
                    <div className="text-neutral-800 font-medium">+244 912 345 678</div>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-neutral-400 font-semibold mb-0.5">E-mail</div>
                    <div className="text-neutral-800 font-medium">sofia@lunastudio.ao</div>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-neutral-400 font-semibold mb-0.5">Responsável</div>
                    <div className="text-neutral-800 font-medium flex items-center justify-between">
                      <span>Mariana Costa</span>
                      <span className="text-neutral-400 text-xs">∨</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-neutral-400 font-semibold mb-1">Etiquetas</div>
                    <div className="flex gap-1.5">
                      <span className="bg-[#DFDFD9] px-2 py-0.5 rounded text-[11px] text-neutral-700">Plano Pro</span>
                      <span className="bg-[#DFDFD9] px-2 py-0.5 rounded text-[11px] text-neutral-700">Equipa de 5</span>
                    </div>
                  </div>
                </div>
                <div className="pt-3 border-t border-[#DFDFD9]">
                  <div className="text-[10px] uppercase tracking-wider text-neutral-400 font-semibold mb-1">Nota da equipa</div>
                  <p className="text-xs text-neutral-600 leading-relaxed">Interessada em centralizar os canais da equipa. Enviar convite para experimentar o plano Pro.</p>
                </div>
              </div>
              <Link href="/contactos/sofia-martins" className="w-full border border-neutral-300 rounded-xl py-2 text-xs text-neutral-800 hover:bg-[#E2E1DC] transition-colors flex items-center justify-center gap-1 font-medium">
                <span>Ver contacto completo</span>
                <span>↗</span>
              </Link>
            </div>
          </div>
        </main>
      </div>

      <div className="absolute inset-0 bg-[#343534]/40 backdrop-blur-[2px] flex items-center justify-center z-50 p-4">
        <div className="w-full max-w-[620px] bg-white rounded-3xl shadow-2xl p-7 relative" role="dialog" aria-labelledby="sms-modal-title">
          <Link href="/inbox" aria-label="Fechar" className="absolute top-6 right-6 w-8 h-8 rounded-full border border-neutral-200 text-neutral-500 hover:text-black hover:border-neutral-400 flex items-center justify-center transition-colors text-sm">
            ✕
          </Link>
          <div className="mb-5 pr-10">
            <h2 id="sms-modal-title" className="text-2xl font-bold tracking-tight text-[#141416]">
              Conectar SMS
            </h2>
            <p className="text-xs text-neutral-500 mt-1">Studio Workspace · Número de envio SMS</p>
          </div>
          <div className="bg-[#F3F6EC] border border-[#E4EBD6] rounded-2xl p-5 mb-5">
            <h3 className="font-bold text-sm text-[#19191B] mb-3">Tudo começa com uma autorização.</h3>
            <ol className="space-y-1.5 text-xs text-neutral-600 list-decimal list-inside leading-relaxed font-normal">
              <li>Indique o número associado à empresa.</li>
              <li>Confirme a titularidade junto do fornecedor.</li>
              <li>Autorize a sincronização de mensagens.</li>
            </ol>
          </div>
          <div className="mb-5 space-y-2.5">
            <div className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider">O que a Ozou vai poder fazer</div>
            <ul className="space-y-2 text-xs text-neutral-800">
              {permissions.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-neutral-700 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#F8F8F7] border border-[#EEEEEC] rounded-2xl p-4 mb-6">
            <div className="text-xs font-bold text-neutral-900 mb-0.5">Demonstração de autorização</div>
            <div className="text-[11px] text-neutral-500">O percurso seguinte representa a confirmação do fornecedor.</div>
          </div>
          <div className="space-y-2.5">
            <Link href="/canais/conectado" className="w-full bg-[#1C1C1E] hover:bg-black text-white font-medium text-xs py-3.5 px-4 rounded-full transition-colors flex items-center justify-center gap-1.5 shadow-sm">
              <span>Autorizar e continuar</span>
              <span className="text-xs">↗</span>
            </Link>
            <Link href="/inbox" className="w-full bg-white hover:bg-neutral-50 text-neutral-800 font-medium text-xs py-3 px-4 rounded-full border border-neutral-300 transition-colors text-center block">
              Ligar mais tarde
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
