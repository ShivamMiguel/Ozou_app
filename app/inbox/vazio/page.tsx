import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "OZOU — Inbox — Sem conversas",
};

function Icon({ d, className }: { d: string; className: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path d={d} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
    </svg>
  );
}

const nav = [
  ["/campanhas", "Automação & campanhas", "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"],
  ["/insights", "Insights & métricas", "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"],
  ["/contactos", "Contactos", "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"],
  ["/inicio", "Início", "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"],
  ["/empresas", "Empresas", "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"],
] as const;

const features = [
  ["01", "Mensagens dos 4 canais"],
  ["02", "Histórico por contacto"],
  ["03", "Respostas com apoio de IA"],
  ["04", "A equipa no mesmo espaço"],
];

export default function InboxVazioPage() {
  return (
    <div className="app-shell bg-white text-[#1c1e21] antialiased h-dvh overflow-hidden flex selection:bg-[#bbf246] selection:text-black">
      <aside className="w-64 min-w-[16rem] border-r border-[#e5e7eb] flex flex-col justify-between h-full bg-white select-none px-4 py-6">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2 px-2">
            <Link href="/" className="text-2xl font-bold tracking-tight text-[#121316]">OZOU</Link>
            <span className="w-2.5 h-2.5 rounded-full bg-[#c2f643] inline-block mb-1" />
          </div>
          <div className="bg-[#f9fafb] border border-gray-100 rounded-xl p-3 flex items-center justify-between cursor-pointer hover:bg-gray-100 transition-colors">
            <div>
              <div className="text-[13px] font-semibold text-[#121316]">Studio Workspace</div>
              <div className="text-xs text-[#717680] mt-0.5">Plano Pro</div>
            </div>
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
          </div>
          <nav className="flex flex-col gap-1.5">
            <span className="text-[10px] font-semibold tracking-wider text-gray-400 uppercase px-2 mb-1">Espaço de trabalho</span>
            <Link className="flex items-center justify-between bg-[#121316] text-white px-3 py-2.5 rounded-xl text-sm font-medium shadow-sm transition-all" href="/inbox/vazio">
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 stroke-current" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
                <span>Inbox unificado</span>
              </div>
              <span className="text-xs text-[#a0f04e] font-medium">0</span>
            </Link>
            {nav.map(([href, label, d]) => (
              <Link key={href} className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium text-gray-600 hover:text-black hover:bg-gray-50 transition-colors" href={href}>
                <Icon className="w-4 h-4 text-gray-400" d={d} />
                <span className="truncate">{label}</span>
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-col gap-4 mt-auto">
          <div className="bg-[#f0f4ea] p-4 rounded-2xl flex flex-col gap-1.5">
            <Icon className="w-4 h-4 text-[#121316] mb-1 stroke-[2]" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            <p className="text-sm font-semibold text-[#121316] leading-tight">Menos tarefas.<br />Mais conversas.</p>
            <a className="text-xs text-[#717680] hover:text-[#121316] flex items-center gap-1 mt-1 transition-colors" href="#">A IA trata do resto. <span>↗</span></a>
          </div>
          <div className="flex flex-col gap-1 text-sm text-gray-600">
            <Link className="flex items-center gap-3 px-2 py-1.5 hover:text-black rounded-lg transition-colors" href="/ajuda">
              <Icon className="w-4 h-4 text-gray-400" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              <span className="text-[13px]">Ajuda e suporte</span>
            </Link>
            <Link className="flex items-center gap-3 px-2 py-1.5 hover:text-black rounded-lg transition-colors" href="/definicoes/equipa">
              <Icon className="w-4 h-4 text-gray-400" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              <span className="text-[13px]">Definições</span>
            </Link>
          </div>
          <div className="pt-3 border-t border-gray-100 flex items-center justify-between cursor-pointer px-1">
            <div>
              <div className="text-[13px] font-semibold text-[#121316] leading-snug">Mariana Costa</div>
              <div className="text-xs text-[#717680]">Administradora</div>
            </div>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
          </div>
        </div>
      </aside>
      <main className="flex-1 overflow-y-auto flex flex-col min-w-0">
        <header className="pt-6 pb-5 px-10 border-b border-gray-100 flex items-start justify-between">
          <div>
            <nav className="text-xs text-gray-500 mb-2 font-normal flex items-center gap-1.5">
              <span>Workspace</span><span className="text-gray-300">/</span><span className="text-gray-700">Inbox — Sem conversas</span>
            </nav>
            <h1 className="text-2xl font-bold text-[#121316] tracking-tight">Inbox — Sem conversas</h1>
            <p className="text-xs text-gray-500 mt-1">O essencial para gerir o seu negócio.</p>
          </div>
          <div className="flex items-center gap-2 bg-[#f0f4eb] text-gray-700 text-xs px-3.5 py-1.5 rounded-full font-normal shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#829944]" /><span>Nenhum canal ligado</span>
          </div>
        </header>
        <div className="px-10 py-8 flex flex-col gap-6 max-w-6xl w-full">
          <div>
            <h2 className="text-2xl font-bold text-[#121316] tracking-tight">Um Inbox pronto para começar.</h2>
            <p className="text-sm text-gray-500 mt-1">Ainda não há conversas nesta empresa.</p>
          </div>
          <section className="border border-gray-100 rounded-3xl p-12 bg-white flex flex-col lg:flex-row gap-12 items-stretch shadow-sm">
            <div className="flex-1 flex flex-col justify-between py-2 pr-6">
              <div className="space-y-6">
                <h3 className="text-4xl lg:text-[44px] font-bold text-[#121316] leading-[1.15] tracking-tight">A próxima relação<br />começa com um olá.</h3>
                <p className="text-sm lg:text-[15px] text-gray-500 leading-relaxed max-w-md">Ligue um canal para receber mensagens ou crie a primeira conversa com um contacto que já conhece.</p>
              </div>
              <div className="flex items-center gap-3 pt-12 flex-wrap">
                <Link className="bg-[#121316] hover:bg-black text-white px-6 py-3 rounded-full text-xs font-semibold inline-flex items-center justify-center gap-1.5 shadow-sm transition-all hover:scale-[1.01] active:scale-[0.99]" href="/canais/whatsapp">
                  <span>Ligar um canal</span><span className="text-xs">↗</span>
                </Link>
                <Link className="bg-white border border-gray-200 text-[#121316] hover:bg-gray-50 px-6 py-3 rounded-full text-xs font-semibold inline-flex items-center justify-center transition-all" href="/inbox/nova">Nova conversa</Link>
              </div>
            </div>
            <div className="flex-1 bg-[#f1f5ec] rounded-2xl p-8 flex flex-col justify-between">
              <h4 className="text-xl font-bold text-[#121316] tracking-tight mb-8">Tudo em contexto.</h4>
              <ul className="space-y-6">
                {features.map(([n, label]) => (
                  <li key={n} className="flex items-baseline gap-4">
                    <span className="text-xs font-mono text-gray-400 font-medium">{n}</span>
                    <span className="text-sm font-semibold text-[#121316]">{label}</span>
                  </li>
                ))}
              </ul>
              <div className="h-2" />
            </div>
          </section>
          <section className="bg-[#f1f5ec] rounded-2xl px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
            <div>
              <h4 className="text-base font-bold text-[#121316] tracking-tight">Sem pressa. Pode explorar primeiro.</h4>
              <p className="text-xs text-gray-600 mt-1">Veja a OZOU em ação com dados de demonstração.</p>
            </div>
            <Link className="bg-white hover:bg-gray-50 text-[#121316] text-xs font-semibold px-6 py-3 rounded-full border border-gray-200 shadow-sm inline-flex items-center gap-1.5 transition-all self-stretch sm:self-auto justify-center" href="/inbox">
              <span>Abrir Inbox de demonstração</span><span className="text-xs">↗</span>
            </Link>
          </section>
        </div>
      </main>
    </div>
  );
}
