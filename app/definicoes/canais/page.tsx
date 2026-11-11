import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "OZOU — Definições — Canais",
};

const jakartaScope = {
  "--font-sans": 'var(--font-jakarta), "Plus Jakarta Sans", sans-serif',
  fontFamily: 'var(--font-jakarta), "Plus Jakarta Sans", sans-serif',
} as CSSProperties;

const channels = [
  { name: "WhatsApp", detail: "+244 912 000 000", href: "/canais/whatsapp" },
  { name: "Instagram", detail: "A conta deste negócio", href: "/canais/instagram" },
  { name: "SMS", detail: "+244 930 000 000", href: "/canais/sms" },
  { name: "E-mail", detail: "ola@studio.ao", href: "/canais/email" },
];

const nav = [
  ["/automacao-campanhas", "Automação & campanhas", "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"],
  ["/insights", "Insights & métricas", "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"],
  ["/contactos", "Contactos", "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"],
  ["/inicio", "Início", "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"],
  ["/empresas", "Empresas", "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"],
] as const;

function Icon({ d, className }: { d: string; className: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path d={d} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function DefinicoesCanaisPage() {
  return (
    <div className="bg-[#FAFAFA] text-[#111215] min-h-screen flex antialiased" style={jakartaScope}>
      <aside className="w-[240px] flex-shrink-0 bg-white border-r border-[#EFEFEF] min-h-screen flex flex-col justify-between py-6 px-4 select-none">
        <div className="space-y-6">
          <div className="px-2 flex items-center space-x-1.5">
            <Link href="/" className="text-[22px] font-extrabold tracking-tight text-[#111215]">
              OZOU
            </Link>
            <span className="w-[6px] h-[6px] rounded-full bg-[#B7E639] -translate-y-px" />
          </div>
          <div className="bg-[#F8F9FA] rounded-xl p-3 flex items-center justify-between border border-transparent hover:border-gray-200 transition-colors cursor-pointer">
            <div>
              <div className="text-[13px] font-semibold text-[#111215]">Studio Workspace</div>
              <div className="text-[11px] text-[#7E8492] font-normal">Plano Pro</div>
            </div>
            <svg className="w-3.5 h-3.5 text-[#7E8492]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
          <div>
            <div className="px-2 pb-2 text-[10px] font-bold tracking-wider text-[#A0A5B1] uppercase">Espaço de trabalho</div>
            <nav aria-label="Main Navigation" className="space-y-0.5">
              <Link className="flex items-center justify-between px-2.5 py-2 text-[13px] text-[#555A68] hover:text-[#111215] hover:bg-gray-50 rounded-lg transition-colors" href="/inbox">
                <div className="flex items-center space-x-3">
                  <Icon className="w-[18px] h-[18px] text-[#717786] stroke-[1.75]" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                  <span>Inbox unificado</span>
                </div>
                <span className="bg-[#F0F2F5] text-[#555A68] text-[11px] font-semibold px-2 py-0.5 rounded-full">12</span>
              </Link>
              {nav.map(([href, label, d]) => (
                <Link key={href} className="flex items-center px-2.5 py-2 text-[13px] text-[#555A68] hover:text-[#111215] hover:bg-gray-50 rounded-lg space-x-3 transition-colors" href={href}>
                  <Icon className="w-[18px] h-[18px] text-[#717786] stroke-[1.75]" d={d} />
                  <span className="leading-tight">{label}</span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
        <div className="space-y-4">
          <div className="bg-[#EFF4EE] rounded-2xl p-4 relative">
            <div className="mb-2">
              <Icon className="w-4 h-4 text-[#111215] stroke-[2]" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </div>
            <p className="text-[13px] font-semibold text-[#111215] leading-snug">
              Menos tarefas.
              <br />
              Mais conversas.
            </p>
            <div className="mt-3 flex items-center justify-between text-[11px] text-[#717786]">
              <span>A IA trata do resto.</span>
              <svg className="w-3 h-3 text-[#717786]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M7 17l9.2-9.2M17 17V8H8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
          <div className="space-y-0.5 border-b border-[#F0F0F0] pb-3">
            <Link className="flex items-center px-2 py-1.5 text-[13px] text-[#555A68] hover:text-[#111215] space-x-3 transition-colors" href="/ajuda">
              <Icon className="w-[18px] h-[18px] text-[#717786] stroke-[1.75]" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              <span>Ajuda e suporte</span>
            </Link>
            <Link className="flex items-center px-2 py-1.5 text-[13px] text-[#555A68] hover:text-[#111215] space-x-3 transition-colors" href="/definicoes/canais">
              <Icon className="w-[18px] h-[18px] text-[#717786] stroke-[1.75]" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              <span>Definições</span>
            </Link>
          </div>
          <div className="flex items-center justify-between px-2 pt-1 cursor-pointer">
            <div>
              <div className="text-[13px] font-semibold text-[#111215]">Mariana Costa</div>
              <div className="text-[11px] text-[#7E8492]">Administradora</div>
            </div>
            <svg className="w-3.5 h-3.5 text-[#7E8492]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </aside>

      <main className="flex-1 flex flex-col min-w-0 bg-[#FAFAFA] overflow-y-auto">
        <header className="bg-white border-b border-[#EFEFEF] px-10 py-6">
          <div className="flex items-start justify-between">
            <div>
              <div className="text-[13px] text-[#7E8492] mb-1.5 font-normal">
                Workspace <span className="mx-1 text-[#C4C7D0]">/</span> Definições — Canais
              </div>
              <h1 className="text-[26px] font-bold text-[#111215] tracking-tight">Definições — Canais</h1>
              <p className="text-[13px] text-[#7E8492] mt-0.5">O essencial para gerir o seu negócio.</p>
            </div>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EDF5E7] text-[#2B541C] text-[12px] font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#52A028]" />
              4 canais conectados
            </span>
          </div>
        </header>
        <div className="p-10 max-w-[1240px] w-full">
          <nav aria-label="Tabs" className="flex space-x-2.5 mb-9">
            <span className="px-7 py-2 bg-[#1A1C1F] text-white text-[13px] font-medium rounded-full shadow-sm">Canais</span>
            <Link href="/definicoes/equipa" className="px-7 py-2 bg-white text-[#4A4F5C] hover:text-[#111215] text-[13px] font-medium rounded-full border border-[#E5E7EB] transition-colors">
              Equipa
            </Link>
            <Link href="/definicoes/conta" className="px-7 py-2 bg-white text-[#4A4F5C] hover:text-[#111215] text-[13px] font-medium rounded-full border border-[#E5E7EB] transition-colors">
              Conta e plano
            </Link>
          </nav>
          <div className="mb-6">
            <h2 className="text-[24px] font-bold text-[#111215] tracking-tight">Todas as ligações, sob controlo.</h2>
            <p className="text-[13px] text-[#7E8492] mt-1">Ambiente de demonstração · As ligações abaixo são ilustrativas.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
            {channels.map((channel) => (
              <article key={channel.name} className="bg-white rounded-2xl border border-[#ECECEC] p-6 shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-[20px] font-bold text-[#111215]">{channel.name}</h3>
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#EDF5E7] text-[#2B541C] text-[12px] font-medium">
                      <svg className="w-3.5 h-3.5 mr-1 text-[#3B7A24] stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      Conectado
                    </span>
                  </div>
                  <div className="text-[14px] text-[#111215] font-medium mb-1">{channel.detail}</div>
                  <div className="text-[12px] text-[#8E95A3]">Última sincronização hoje às 10:45</div>
                </div>
                <div className="flex items-center space-x-3 mt-7">
                  <Link href={channel.href} className="flex-1 py-2 px-4 rounded-full border border-[#E0E2E7] text-[13px] font-semibold text-[#111215] hover:bg-[#F9FAFB] transition-colors text-center">
                    Gerir ligação
                  </Link>
                  <Link href={channel.href} className="flex-1 py-2 px-4 rounded-full border border-[#E0E2E7] text-[13px] font-semibold text-[#111215] hover:bg-[#F9FAFB] transition-colors text-center">
                    Rever permissões
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <section className="bg-[#EFF4EA] rounded-2xl p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h4 className="text-[17px] font-bold text-[#111215] mb-1">Uma ligação precisa de atenção?</h4>
              <p className="text-[13px] text-[#555A68]">Pode rever permissões e voltar a autorizar sem perder o histórico das conversas.</p>
            </div>
            <Link href="/canais/interrompida" className="flex-shrink-0 bg-white hover:bg-gray-50 text-[#111215] text-[13px] font-semibold px-6 py-2.5 rounded-full border border-[#E0E5DD] shadow-sm transition-colors whitespace-nowrap">
              Ver recuperação da ligação
            </Link>
          </section>
        </div>
      </main>
    </div>
  );
}
