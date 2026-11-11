import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "OZOU — Campanhas",
};

const rows = [
  {
    name: "Reativação de leads",
    meta: "Pronta para enviar às 18:30",
    audience: "50 leads sem resposta há 7 dias",
    channels: "WhatsApp + E-mail",
    status: "Agendada · Hoje, 18:30",
    badge: "bg-[#EBF0E3] text-[#4C5544]",
    action: "Rever",
    href: "/automacao-campanhas/gerir-agendamento",
    pad: "px-5",
  },
  {
    name: "Boas-vindas de novembro",
    meta: "Campanha concluída",
    audience: "120 novos contactos",
    channels: "WhatsApp",
    status: "Enviada · 5 nov.",
    badge: "bg-[#ECEEEA] text-[#6B7280]",
    action: "Ver insights",
    href: "/insights",
    pad: "px-4",
  },
  {
    name: "Novidades de outubro",
    meta: "Campanha concluída",
    audience: "400 clientes",
    channels: "E-mail",
    status: "Enviada · 28 out.",
    badge: "bg-[#ECEEEA] text-[#6B7280]",
    action: "Ver insights",
    href: "/insights",
    pad: "px-4",
  },
];

function Icon({ d, className }: { d: string; className: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path d={d} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const nav = [
  ["/insights", "Insights & métricas", "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"],
  ["/contactos", "Contactos", "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"],
  ["/inicio", "Início", "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"],
  ["/empresas", "Empresas", "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"],
] as const;

export default function CampanhasAgendadaPage() {
  return (
    <div className="bg-[#F3F4F1] text-[#151718] antialiased selection:bg-neutral-200 ozou-agendada">
      <style>{`.ozou-agendada .custom-scroll::-webkit-scrollbar{width:5px}.ozou-agendada .custom-scroll::-webkit-scrollbar-thumb{background:#e2e4dc;border-radius:4px}`}</style>
      <div className="flex min-h-screen">
        <aside className="w-64 bg-[#F9F9F8] border-r border-[#ECEEE9] flex flex-col justify-between shrink-0 select-none py-6 px-4">
          <div className="flex flex-col space-y-6">
            <div className="px-2 flex items-center space-x-2">
              <Link href="/" className="text-2xl font-bold tracking-tight text-[#151718]">
                OZOU
              </Link>
              <span className="w-2.5 h-2.5 rounded-full bg-[#B4D64D] inline-block mt-0.5" />
            </div>
            <div className="bg-[#F5F6F3]/70 border border-neutral-200/60 rounded-xl px-3.5 py-2.5 flex items-center justify-between cursor-pointer hover:bg-neutral-100 transition-colors">
              <div>
                <div className="text-sm font-medium text-[#151718] leading-tight">Studio Workspace</div>
                <div className="text-[11px] text-[#6B7280] leading-normal">Plano Pro</div>
              </div>
              <svg className="w-3.5 h-3.5 text-[#6B7280]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
            <nav className="space-y-1">
              <div className="px-2 pt-2 pb-1.5 text-[10px] font-semibold tracking-wider text-[#9CA3AF] uppercase">Espaço de trabalho</div>
              <Link className="flex items-center justify-between px-3 py-2 text-sm text-[#6B7280] hover:text-[#151718] hover:bg-neutral-100/70 rounded-xl transition-colors" href="/inbox">
                <div className="flex items-center space-x-3">
                  <Icon className="w-4 h-4 text-[#6B7280] stroke-[1.8]" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                  <span>Inbox unificado</span>
                </div>
                <span className="text-xs bg-neutral-200/70 text-[#6B7280] font-medium px-2 py-0.5 rounded-full">12</span>
              </Link>
              <Link className="flex items-center space-x-3 px-3 py-2.5 text-sm font-medium text-white bg-[#17191C] rounded-xl shadow-sm" href="/campanhas/agendada">
                <Icon className="w-4 h-4 text-white stroke-[1.8]" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                <span>Automação & campanhas</span>
              </Link>
              {nav.map(([href, label, d]) => (
                <Link key={href} className="flex items-center space-x-3 px-3 py-2 text-sm text-[#6B7280] hover:text-[#151718] hover:bg-neutral-100/70 rounded-xl transition-colors" href={href}>
                  <Icon className="w-4 h-4 text-[#6B7280] stroke-[1.8]" d={d} />
                  <span>{label}</span>
                </Link>
              ))}
            </nav>
          </div>
          <div className="space-y-4 pt-6">
            <div className="bg-[#EBF1DC]/45 border border-[#EBF1DC] rounded-2xl p-4 hover:bg-[#EBF1DC]/60 transition-colors">
              <div className="w-6 h-6 mb-2 text-[#151718]">
                <Icon className="w-5 h-5 stroke-[1.8]" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </div>
              <p className="font-medium text-[#151718] text-sm leading-snug">
                Menos tarefas.
                <br />
                Mais conversas.
              </p>
              <a className="inline-flex items-center text-xs text-[#6B7280] hover:text-[#151718] mt-3" href="#">
                <span>A IA trata do resto.</span>
                <span className="ml-1 text-[11px]">↗</span>
              </a>
            </div>
            <div className="space-y-1">
              <Link className="flex items-center space-x-3 px-3 py-2 text-sm text-[#6B7280] hover:text-[#151718] rounded-xl transition-colors" href="/ajuda">
                <svg className="w-4 h-4 text-[#6B7280] stroke-[1.8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" strokeWidth="1.8" />
                  <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3m.08 4h.01" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Ajuda e suporte</span>
              </Link>
              <Link className="flex items-center space-x-3 px-3 py-2 text-sm text-[#6B7280] hover:text-[#151718] rounded-xl transition-colors" href="/definicoes/equipa">
                <Icon className="w-4 h-4 text-[#6B7280] stroke-[1.8]" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                <span>Definições</span>
              </Link>
            </div>
            <div className="border-t border-[#ECEEE9] pt-3">
              <div className="flex items-center justify-between px-2 py-1 cursor-pointer hover:bg-neutral-100 rounded-lg transition-colors">
                <div>
                  <div className="text-sm font-semibold text-[#151718] leading-tight">Mariana Costa</div>
                  <div className="text-xs text-[#6B7280]">Administradora</div>
                </div>
                <svg className="w-3.5 h-3.5 text-[#6B7280]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>
        </aside>

        <main className="flex-1 flex flex-col min-w-0 overflow-y-auto custom-scroll">
          <header className="bg-[#F5F6F3]/30 border-b border-[#ECEEE9]/80 px-8 py-5">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-[#9CA3AF] flex items-center space-x-1.5 mb-1 font-normal">
                  <span>Workspace</span>
                  <span>/</span>
                  <span className="text-[#6B7280]">Campanhas</span>
                </div>
                <h1 className="text-2xl font-bold tracking-tight text-[#151718]">Campanhas</h1>
                <p className="text-xs text-[#6B7280] mt-0.5 font-normal">O essencial para gerir o seu negócio.</p>
              </div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#E6ECE3] text-[#344036] space-x-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#52774C]" />
                <span>4 canais conectados</span>
              </span>
            </div>
          </header>
          <div className="px-8 py-7 space-y-7 max-w-7xl">
            <section className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-[26px] font-bold tracking-tight text-[#151718]">Conversas que continuam.</h2>
                <p className="text-xs sm:text-sm text-[#6B7280] mt-0.5">Planeie, acompanhe e aprenda com cada campanha.</p>
              </div>
              <Link href="/automacao-campanhas/rascunho" className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#17191C] text-white text-xs font-medium hover:bg-neutral-800 transition-all shadow-sm">
                <span className="mr-1.5 text-sm leading-none">+</span> Nova campanha
              </Link>
            </section>
            <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                ["0", "rascunho"],
                ["1", "agendadas"],
                ["2", "enviadas"],
              ].map(([value, label]) => (
                <div key={label} className="bg-white rounded-2xl p-5 border border-[#ECEEE9]/60 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
                  <div className="text-3xl font-semibold tracking-tight text-[#151718]">{value}</div>
                  <div className="text-xs text-[#6B7280] mt-3 font-normal">{label}</div>
                </div>
              ))}
            </section>
            <section className="bg-white rounded-2xl border border-[#ECEEE9]/70 overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
              <div className="grid grid-cols-12 px-6 py-3 bg-[#F0F2ED] text-[11px] font-medium text-[#6B7280] tracking-wide">
                <div className="col-span-4">Campanha</div>
                <div className="col-span-3">Público / canais</div>
                <div className="col-span-3">Estado</div>
                <div className="col-span-2 text-right">Ação</div>
              </div>
              <div className="divide-y divide-[#ECEEE9]">
                {rows.map((row) => (
                  <div key={row.name} className="grid grid-cols-12 px-6 py-4 items-center hover:bg-neutral-50/50 transition-colors">
                    <div className="col-span-4 pr-3">
                      <div className="text-sm font-semibold text-[#151718]">{row.name}</div>
                      <div className="text-xs text-[#6B7280] mt-0.5">{row.meta}</div>
                    </div>
                    <div className="col-span-3 pr-3">
                      <div className="text-xs font-medium text-[#151718]">{row.audience}</div>
                      <div className="text-xs text-[#6B7280] mt-0.5">{row.channels}</div>
                    </div>
                    <div className="col-span-3">
                      <span className={`inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium ${row.badge}`}>{row.status}</span>
                    </div>
                    <div className="col-span-2 text-right">
                      <Link href={row.href} className={`inline-flex items-center justify-center ${row.pad} py-1.5 rounded-full border border-neutral-300 text-xs font-medium text-[#151718] hover:bg-neutral-100 transition-colors`}>
                        <span>{row.action}</span>
                        <span className="ml-1 text-[10px]">↗</span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            <section className="bg-[#EFF2EB] rounded-2xl p-6 border border-[#E3E8DE] flex flex-col md:flex-row md:items-center justify-between gap-5">
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-[#151718]">
                  <svg className="w-5 h-5 stroke-[2] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <h3 className="text-base font-semibold tracking-tight text-[#151718]">Há boas conversas à espera de uma segunda oportunidade.</h3>
                </div>
                <p className="text-xs text-[#6B7280] leading-relaxed">50 leads estão sem resposta há 7 dias. Use uma campanha simples para voltar a falar.</p>
              </div>
              <Link href="/automacao-campanhas/rascunho" className="shrink-0 inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#17191C] text-white text-xs font-medium hover:bg-neutral-800 transition-all shadow-sm">
                <span>Criar campanha com IA</span>
                <span className="ml-1.5 text-xs">↗</span>
              </Link>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
