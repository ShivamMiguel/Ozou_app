import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "OZOU — Canal conectado",
};

const chats = [
  { name: "Sofia Martins", channel: "WhatsApp", preview: "Olá! Gostaria de saber mais sobre...", active: true },
  { name: "Miguel Santos", channel: "Instagram", preview: "Obrigado pela informação!", active: false },
  { name: "Inês Ferreira", channel: "E-mail", preview: "Re: Proposta comercial de...", active: false },
  { name: "João Almeida", channel: "SMS", preview: "Podemos agendar call?", active: false },
  { name: "Beatriz Costa", channel: "WhatsApp", preview: "Perfeito, aguardo envio.", active: false },
  { name: "Pedro Ribeiro", channel: "Instagram", preview: "Qual é o preçário atual?", active: false },
  { name: "Carolina Sousa", channel: "E-mail", preview: "Já recebi a documentação.", active: false },
  { name: "Tiago Lopes", channel: "WhatsApp", preview: "Tenho interesse no plano Pro.", active: false },
];

const nav = [
  ["/automacao-campanhas", "Automação & campanhas", "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"],
  ["/insights", "Insights & métricas", "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"],
  ["/contactos", "Contactos", "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"],
  ["/inicio", "Início", "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"],
  ["/empresas", "Empresas", "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"],
] as const;

export default function CanalConectadoPage() {
  return (
    <div className="relative app-shell h-dvh w-full overflow-hidden flex select-none bg-[#D6D8D4] text-[#1A1C1E] antialiased ozou-canal">
      <style>{`.ozou-canal .custom-scrollbar::-webkit-scrollbar{width:4px}.ozou-canal .custom-scrollbar::-webkit-scrollbar-thumb{background:#c5c7c2;border-radius:4px}`}</style>
      <aside className="w-64 h-full flex flex-col justify-between p-6 border-r border-[#CDD0CB] bg-[#D7D9D5] shrink-0 z-0">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <Link href="/" className="text-2xl font-black tracking-wider text-[#181A1B]">
              OZOU
            </Link>
            <span className="w-2.5 h-2.5 rounded-full bg-[#96B84A] mt-1" />
          </div>
          <div className="bg-[#CBCEC8]/50 hover:bg-[#CBCEC8] p-3 rounded-2xl flex items-center justify-between cursor-pointer transition">
            <div>
              <p className="text-sm font-semibold text-neutral-900 leading-tight">Studio Workspace</p>
              <p className="text-xs text-neutral-500 font-medium mt-0.5">Plano Pro</p>
            </div>
            <svg className="w-4 h-4 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
          <nav className="flex flex-col gap-1.5">
            <span className="text-[10px] font-bold text-neutral-500 tracking-wider uppercase mb-1">Espaço de trabalho</span>
            <Link className="bg-[#1A1C1E] text-white px-3 py-2.5 rounded-xl flex items-center justify-between shadow-sm" href="/inbox">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-neutral-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
                </svg>
                <span className="text-xs font-semibold">Inbox unificado</span>
              </div>
              <span className="bg-[#2D3033] text-[11px] font-semibold px-2 py-0.5 rounded-full text-neutral-200">12</span>
            </Link>
            {nav.map(([href, label, d]) => (
              <Link key={href} className="text-neutral-600 hover:text-neutral-900 px-3 py-2.5 rounded-xl flex items-center gap-3 transition" href={href}>
                <svg className="w-5 h-5 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d={d} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
                </svg>
                <span className="text-xs font-medium leading-tight">{label}</span>
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-col gap-4">
          <div className="bg-[#CBCEC8] p-4 rounded-2xl flex flex-col gap-2">
            <svg className="w-4 h-4 text-neutral-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
            <p className="text-xs font-bold text-neutral-900 leading-snug">
              Menos tarefas.
              <br />
              Mais conversas.
            </p>
            <a className="text-[11px] text-neutral-600 font-medium flex items-center gap-1 hover:text-neutral-900 mt-1" href="#">
              A IA trata do resto. <span>↗</span>
            </a>
          </div>
          <div className="flex flex-col gap-2 text-neutral-600">
            <Link className="flex items-center gap-2.5 text-xs font-medium hover:text-neutral-900 py-1" href="/ajuda">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
              Ajuda e suporte
            </Link>
            <Link className="flex items-center gap-2.5 text-xs font-medium hover:text-neutral-900 py-1" href="/definicoes/equipa">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
              Definições
            </Link>
          </div>
          <div className="pt-3 border-t border-[#CDD0CB] flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-neutral-900 leading-tight">Mariana Costa</p>
              <p className="text-[10px] text-neutral-500 font-medium">Administradora</p>
            </div>
            <svg className="w-3.5 h-3.5 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </aside>

      <main className="flex-1 flex flex-col h-full bg-[#D6D8D4] overflow-hidden">
        <header className="px-8 pt-6 pb-4 flex items-center justify-between">
          <div>
            <nav className="text-xs text-neutral-500 font-medium flex items-center gap-1.5 mb-1.5">
              <span>Workspace</span>
              <span>/</span>
              <span className="text-neutral-700">Inbox unificado</span>
            </nav>
            <h1 className="text-2xl font-bold text-neutral-900 tracking-tight">Inbox unificado</h1>
            <p className="text-xs text-neutral-500 mt-0.5">Todas as conversas, no mesmo lugar.</p>
          </div>
          <div className="flex items-center gap-2 bg-[#C8CBC5] px-3.5 py-1.5 rounded-full text-xs font-semibold text-neutral-700">
            <span className="w-2 h-2 rounded-full bg-[#96B84A]" />
            4 canais conectados
          </div>
        </header>
        <div className="px-8 py-2 flex items-center justify-between border-t border-[#CDD0CB]/70">
          <button className="bg-[#1A1C1E] text-white px-3.5 py-1.5 rounded-full text-xs font-semibold flex items-center gap-2" type="button">
            <span>Todas as conversas</span>
            <span className="text-neutral-400">24</span>
          </button>
          <div className="flex items-center gap-4">
            <span className="text-xs text-neutral-500 font-medium">A sua equipa está em dia.</span>
            <button className="bg-[#1A1C1E] text-white px-4 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5" type="button">
              <span>+</span> Nova conversa
            </button>
          </div>
        </div>
        <div className="flex-1 px-8 pb-6 pt-3 flex gap-4 overflow-hidden">
          <section className="w-80 bg-[#E2E4DF] rounded-2xl flex flex-col p-4 shrink-0 shadow-sm border border-[#D0D3CD]">
            <div className="relative mb-3">
              <input className="w-full bg-[#D5D8D2] border-0 rounded-xl px-3 py-2 text-xs placeholder-neutral-500 focus:ring-1 focus:ring-neutral-400" placeholder="Pesquisar por nome ou..." type="text" aria-label="Pesquisar conversas" />
            </div>
            <div className="flex items-center justify-between text-xs font-semibold text-neutral-700 pb-2 mb-1 border-b border-[#D5D8D2]">
              <span className="flex items-center gap-1 cursor-pointer">
                Todos os canais
                <svg className="w-3 h-3 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </span>
            </div>
            <div className="flex-1 overflow-y-auto space-y-2 pr-1 custom-scrollbar">
              {chats.map((chat) => (
                <div key={chat.name} className={`p-3 rounded-xl cursor-pointer ${chat.active ? "bg-[#D3D6D0]" : "hover:bg-[#D9DCD6]"}`}>
                  <div className="flex items-center justify-between mb-1">
                    <span className={`text-xs font-bold ${chat.active ? "text-neutral-900" : "text-neutral-800"}`}>{chat.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="bg-[#C5CAC1] text-[10px] font-semibold px-1.5 py-0.5 rounded text-neutral-700">{chat.channel}</span>
                    <p className="text-xs text-neutral-500 truncate">{chat.preview}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="pt-2 text-center text-[11px] font-medium text-neutral-500">8 de 24 conversas</div>
          </section>
          <section className="flex-1 bg-[#E2E4DF] rounded-2xl flex flex-col p-4 shadow-sm border border-[#D0D3CD] relative">
            <div className="flex items-center justify-between border-b border-[#D5D8D2] pb-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#D0D4CD] flex items-center justify-center font-bold text-xs">SM</span>
                <div>
                  <p className="text-xs font-bold text-neutral-900 leading-none">Sofia Martins</p>
                  <p className="text-[10px] text-neutral-500 mt-0.5">WhatsApp</p>
                </div>
              </div>
              <Link href="/inbox/resolvida" className="bg-[#D3D6D0] hover:bg-[#C9CCC5] text-xs font-medium px-3 py-1.5 rounded-lg text-neutral-700">
                Resolver
              </Link>
            </div>
            <div className="flex-1 flex flex-col justify-end p-4 space-y-4">
              <div className="self-end max-w-sm bg-[#D5DDD0] rounded-2xl rounded-tr-none p-3.5 text-xs text-neutral-800 shadow-sm">
                <p>Olá Sofia! Sim, com certeza. A nossa equipa pode agendar uma demonstração rápida hoje mesmo.</p>
                <span className="text-[10px] text-neutral-500 float-right mt-1">11:41 ✓✓</span>
              </div>
            </div>
            <div className="bg-[#D5D8D2] rounded-xl p-3 flex flex-col gap-2">
              <input className="w-full bg-transparent border-0 text-xs p-0 focus:ring-0 placeholder-neutral-500" placeholder="Escreva uma mensagem..." type="text" aria-label="Mensagem" />
              <div className="flex items-center justify-between pt-1">
                <div className="flex items-center gap-2">
                  <button className="text-xs text-neutral-600 font-medium flex items-center gap-1 hover:text-neutral-900" type="button">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                    Anexar ficheiro
                  </button>
                  <button className="bg-[#C5CABF]/60 text-neutral-700 text-xs px-2.5 py-1 rounded-lg flex items-center gap-1 font-medium" type="button">
                    ✧ Gerar resposta com IA
                  </button>
                </div>
                <button className="bg-[#1A1C1E] text-white text-xs font-semibold px-4 py-1.5 rounded-lg flex items-center gap-1" type="button">
                  Enviar <span>↗</span>
                </button>
              </div>
            </div>
          </section>
          <section className="w-72 bg-[#E2E4DF] rounded-2xl flex flex-col p-5 shrink-0 shadow-sm border border-[#D0D3CD]">
            <p className="text-xs font-semibold text-neutral-600 mb-6">Detalhes do contacto</p>
            <h2 className="text-xl font-bold text-neutral-900 leading-tight">Sofia Martins</h2>
            <p className="text-xs text-neutral-500 font-medium mb-3">Luna Studio</p>
            <div>
              <span className="bg-[#C8CFBF] text-[10px] font-semibold text-neutral-800 px-2 py-0.5 rounded">Lead qualificado</span>
            </div>
            <div className="space-y-4 mt-6">
              {[
                ["Canal de Origem", "WhatsApp"],
                ["Telefone", "+244 912 345 678"],
                ["E-mail", "sofia@lunastudio.ao"],
              ].map(([label, value]) => (
                <div key={label}>
                  <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">{label}</p>
                  <p className="text-xs font-semibold text-neutral-800 mt-0.5">{value}</p>
                </div>
              ))}
              <div>
                <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Responsável</p>
                <p className="text-xs font-semibold text-neutral-800 mt-0.5 flex items-center gap-1 cursor-pointer">
                  Mariana Costa
                  <svg className="w-3 h-3 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </p>
              </div>
              <div>
                <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-1.5">Etiquetas</p>
                <div className="flex flex-wrap gap-1.5">
                  <span className="bg-[#D3D7CE] text-neutral-800 text-[10px] font-semibold px-2 py-0.5 rounded">Plano Pro</span>
                  <span className="bg-[#D3D7CE] text-neutral-800 text-[10px] font-semibold px-2 py-0.5 rounded">Equipa de 5</span>
                </div>
              </div>
              <div>
                <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-1">Nota da equipa</p>
                <p className="text-xs text-neutral-600 leading-relaxed">Interessada em centralizar os canais da equipa. Enviar convite para experimentar o plano Pro.</p>
              </div>
            </div>
            <div className="mt-auto pt-4">
              <Link href="/contactos/sofia-martins" className="w-full border border-neutral-300 hover:border-neutral-400 rounded-xl py-2 text-xs font-semibold text-neutral-800 flex items-center justify-center gap-1 transition">
                Ver contacto completo <span>↗</span>
              </Link>
            </div>
          </section>
        </div>
      </main>

      <div className="absolute inset-0 bg-neutral-900/15 backdrop-blur-[2px] z-50 flex items-center justify-center p-4">
        <div className="relative w-full max-w-[570px] bg-white rounded-[36px] shadow-2xl p-10 pt-9 flex flex-col border border-white/60" role="dialog" aria-labelledby="canal-modal-title">
          <Link href="/inbox" aria-label="Fechar" className="absolute top-7 right-7 w-9 h-9 rounded-full border border-neutral-200/90 flex items-center justify-center text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900 transition-colors">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24">
              <line x1="18" x2="6" y1="6" y2="18" />
              <line x1="6" x2="18" y1="6" y2="18" />
            </svg>
          </Link>
          <div className="mb-10">
            <div className="inline-flex items-center gap-2.5 bg-[#EEF4E8] text-[#284824] px-4 py-2 rounded-2xl">
              <svg className="w-4 h-4 text-[#355D28]" fill="none" stroke="currentColor" strokeWidth="2.8" viewBox="0 0 24 24">
                <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-sm font-semibold tracking-tight text-neutral-900">Canal conectado</span>
            </div>
          </div>
          <h2 id="canal-modal-title" className="text-3xl sm:text-[34px] font-extrabold text-[#111315] leading-[1.18] tracking-tight mb-5 max-w-[420px]">
            Mais um canal.
            <br />
            Menos uma janela aberta.
          </h2>
          <p className="text-[13.5px] leading-relaxed text-neutral-500 font-normal max-w-[410px] mb-28">
            A autorização foi concluída neste percurso demonstrativo. As novas mensagens ficam no Inbox e a equipa pode responder no mesmo espaço.
          </p>
          <div className="flex flex-col gap-3 w-full">
            <Link href="/definicoes/canais" className="w-full bg-[#1A1C1E] hover:bg-black text-white text-xs font-semibold py-3.5 rounded-full flex items-center justify-center gap-2 shadow-sm transition-all">
              <span>Continuar configuração</span>
              <span className="text-sm font-normal">→</span>
            </Link>
            <Link href="/inbox" className="w-full bg-white hover:bg-neutral-50 text-neutral-800 text-xs font-semibold py-3.5 rounded-full border border-neutral-200 transition-colors text-center">
              Ver ligações de demonstração
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
