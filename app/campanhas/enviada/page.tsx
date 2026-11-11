import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "OZOU — Campanhas",
};

const rows = [
  {
    name: "Reativação de leads",
    meta: "50 contactos · Envio concluído",
    audience: "50 leads sem resposta há 7 dias",
    channels: "WhatsApp + E-mail",
    status: "Enviada · Hoje, 10:46",
    badge: "bg-[#EBF3E1] text-[#3B4E28]",
    action: "Resultados",
    href: "/insights",
    border: true,
  },
  {
    name: "Boas-vindas de novembro",
    meta: "Campanha concluída",
    audience: "120 novos contactos",
    channels: "WhatsApp",
    status: "Enviada · 5 nov.",
    badge: "bg-[#EEF2EC] text-[#4A5343]",
    action: "Ver insights",
    href: "/insights",
    border: true,
  },
  {
    name: "Novidades de outubro",
    meta: "Campanha concluída",
    audience: "400 clientes",
    channels: "E-mail",
    status: "Enviada · 28 out.",
    badge: "bg-[#EEF2EC] text-[#4A5343]",
    action: "Ver insights",
    href: "/insights",
    border: false,
  },
];

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

export default function CampanhasEnviadaPage() {
  return (
    <div className="bg-[#F7F8F4] text-[#1A1D20] min-h-screen flex antialiased">
      <aside className="w-64 min-w-[16rem] bg-white border-r border-[#ECEFEA] flex flex-col justify-between py-6 px-4 shrink-0">
        <div className="flex flex-col gap-6">
          <div className="px-2 flex items-center gap-1.5">
            <Link href="/" className="text-2xl font-black tracking-tight text-[#16191D]">
              OZOU
            </Link>
            <span className="w-2 h-2 rounded-full bg-[#B4E04B] inline-block mt-0.5" />
          </div>
          <div className="bg-[#F8F9F7] rounded-xl p-3 flex items-center justify-between cursor-pointer border border-[#F0F2EE]">
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-[#181B1E] leading-snug">Studio Workspace</span>
              <span className="text-xs text-[#878D96]">Plano Pro</span>
            </div>
            <svg className="w-4 h-4 text-[#8C939E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
          <nav className="flex flex-col gap-1">
            <span className="text-[10px] font-bold text-[#99A1AB] uppercase tracking-wider px-2.5 mb-2">ESPAÇO DE TRABALHO</span>
            <Link className="flex items-center justify-between px-3 py-2.5 rounded-xl text-[#5E6572] hover:bg-[#F6F7F5] transition-colors group" href="/inbox">
              <div className="flex items-center gap-3">
                <Icon className="w-5 h-5 text-[#88909E] group-hover:text-[#181B1E]" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                <span className="text-sm font-medium">Inbox unificado</span>
              </div>
              <span className="bg-[#EEF1EB] text-[#555C66] text-xs font-semibold px-2 py-0.5 rounded-full">12</span>
            </Link>
            <Link className="flex items-center justify-between px-3 py-2.5 rounded-xl bg-[#16191D] text-white shadow-sm font-medium" href="/campanhas/enviada">
              <div className="flex items-center gap-3">
                <Icon className="w-5 h-5 text-white" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                <span className="text-sm">Automação & campanhas</span>
              </div>
            </Link>
            {nav.map(([href, label, d]) => (
              <Link key={href} className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-[#5E6572] hover:bg-[#F6F7F5] transition-colors group" href={href}>
                <Icon className="w-5 h-5 text-[#88909E] group-hover:text-[#181B1E]" d={d} />
                <span className="text-sm font-medium">{label}</span>
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-col gap-5">
          <div className="bg-[#F3F6F0] rounded-2xl p-4 flex flex-col gap-2">
            <svg className="w-5 h-5 text-[#30343A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
            <p className="font-semibold text-sm text-[#181B1E] leading-snug">
              Menos tarefas.
              <br />
              Mais conversas.
            </p>
            <a className="text-xs text-[#7A828E] hover:text-[#181B1E] inline-flex items-center gap-1 font-medium mt-1" href="#">
              A IA trata do resto. <span>↗</span>
            </a>
          </div>
          <div className="flex flex-col gap-1">
            <Link className="flex items-center gap-3 px-3 py-2 text-[#646C79] hover:text-[#181B1E] transition-colors" href="/ajuda">
              <Icon className="w-5 h-5 text-[#8D94A1]" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              <span className="text-sm font-medium">Ajuda e suporte</span>
            </Link>
            <Link className="flex items-center gap-3 px-3 py-2 text-[#646C79] hover:text-[#181B1E] transition-colors" href="/definicoes/equipa">
              <svg className="w-5 h-5 text-[#8D94A1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
              </svg>
              <span className="text-sm font-medium">Definições</span>
            </Link>
          </div>
          <div className="pt-3 border-t border-[#EEF0EC] flex items-center justify-between cursor-pointer">
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-[#181B1E] leading-snug">Mariana Costa</span>
              <span className="text-xs text-[#878D96]">Administradora</span>
            </div>
            <svg className="w-4 h-4 text-[#8C939E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </aside>

      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        <header className="bg-white border-b border-[#ECEFEA] px-10 py-6">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5 text-xs text-[#8A909B] font-normal mb-1">
                <span>Workspace</span>
                <span className="text-[#CCD0D5]">/</span>
                <span className="text-[#5B626E]">Campanhas</span>
              </div>
              <h1 className="text-2xl font-bold text-[#14171A] tracking-tight">Campanhas</h1>
              <p className="text-xs text-[#7B828E] mt-0.5">O essencial para gerir o seu negócio.</p>
            </div>
            <div className="flex items-center gap-2 bg-[#F1F6EA] text-[#414E36] px-3.5 py-1.5 rounded-full text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-[#7DAE37]" />
              <span>4 canais conectados</span>
            </div>
          </div>
        </header>
        <div className="p-10 flex flex-col gap-8 max-w-[1300px] w-full">
          <section className="flex items-center justify-between">
            <div>
              <h2 className="text-[26px] font-bold text-[#14171A] tracking-tight leading-snug">Conversas que continuam.</h2>
              <p className="text-sm text-[#737A86] mt-0.5">Planeie, acompanhe e aprenda com cada campanha.</p>
            </div>
            <Link href="/automacao-campanhas/rascunho" className="bg-[#16191D] hover:bg-[#23272E] text-white px-5 py-2.5 rounded-full text-sm font-medium flex items-center gap-1.5 transition-colors shadow-sm">
              <span className="text-base font-light leading-none">+</span>
              <span>Nova campanha</span>
            </Link>
          </section>
          <section className="grid grid-cols-3 gap-6">
            {[
              ["0", "rascunho"],
              ["0", "agendadas"],
              ["3", "enviadas"],
            ].map(([value, label]) => (
              <div key={label} className="bg-white rounded-2xl p-6 border border-[#ECEFEA] flex flex-col justify-between h-36">
                <span className="text-4xl font-semibold text-[#181B1E] tracking-tight">{value}</span>
                <span className="text-sm text-[#7B828E] font-medium">{label}</span>
              </div>
            ))}
          </section>
          <section className="bg-white rounded-2xl border border-[#ECEFEA] overflow-hidden">
            <div className="grid grid-cols-12 bg-[#F8FAF6] px-8 py-3.5 border-b border-[#ECEFEA] text-xs font-semibold text-[#737B87]">
              <div className="col-span-4">Campanha</div>
              <div className="col-span-4">Público / canais</div>
              <div className="col-span-2">Estado</div>
              <div className="col-span-2 text-right pr-6">Ação</div>
            </div>
            {rows.map((row) => (
              <div key={row.name} className={`grid grid-cols-12 px-8 py-5 items-center hover:bg-[#FAFCF8] transition-colors ${row.border ? "border-b border-[#F2F4F0]" : ""}`}>
                <div className="col-span-4 flex flex-col">
                  <span className="text-sm font-semibold text-[#181B1E]">{row.name}</span>
                  <span className="text-xs text-[#8A909B] mt-0.5">{row.meta}</span>
                </div>
                <div className="col-span-4 flex flex-col">
                  <span className="text-sm text-[#292D32] font-medium">{row.audience}</span>
                  <span className="text-xs text-[#8A909B] mt-0.5">{row.channels}</span>
                </div>
                <div className="col-span-2">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${row.badge}`}>{row.status}</span>
                </div>
                <div className="col-span-2 flex justify-end">
                  <Link href={row.href} className="px-5 py-2 rounded-full border border-[#DDE2D8] text-xs font-medium text-[#22262B] hover:bg-[#F8FAF6] transition-colors inline-flex items-center gap-1.5">
                    <span>{row.action}</span>
                    <span className="text-sm leading-none">↗</span>
                  </Link>
                </div>
              </div>
            ))}
          </section>
          <section className="bg-[#EFF5E9] rounded-2xl p-7 border border-[#E1EAD8] flex items-center justify-between">
            <div className="flex flex-col gap-2 max-w-2xl">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#2B3037]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
                <h3 className="text-lg font-bold text-[#14171A]">Há boas conversas à espera de uma segunda oportunidade.</h3>
              </div>
              <p className="text-sm text-[#5F6759]">50 leads estão sem resposta há 7 dias. Use uma campanha simples para voltar a falar.</p>
            </div>
            <Link href="/automacao-campanhas/rascunho" className="bg-[#16191D] hover:bg-[#23272E] text-white px-6 py-3 rounded-full text-sm font-medium flex items-center gap-2 shrink-0 transition-colors shadow-sm">
              <span>Criar campanha com IA</span>
              <span className="text-base leading-none">↗</span>
            </Link>
          </section>
        </div>
      </main>
    </div>
  );
}
