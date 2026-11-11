import type { Metadata } from "next";
import Link from "next/link";
import { InsightFigures } from "@/components/live/workspace-panels";

export const metadata: Metadata = {
  title: "OZOU — Insights & métricas",
};

function Bars({ heights }: { heights: string[] }) {
  return (
    <div aria-hidden="true" className="flex items-end gap-[3.5px] h-10 pt-2">
      {heights.map((height, index) => (
        <span
          key={height + index}
          className={`w-[5px] rounded-full ${index === heights.length - 1 ? "bg-[#a3e635]" : "bg-[#dee2e6]"} ${height}`}
        />
      ))}
    </div>
  );
}

export default function InsightsPage() {
  return (
    <div className="min-h-screen flex bg-[#fbfcfb] text-[#121417] font-sans antialiased">
      <aside className="w-[248px] border-r border-[#ececec] flex flex-col justify-between h-screen sticky top-0 bg-white select-none px-4 py-6 shrink-0">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-1.5 px-2">
            <Link href="/" className="text-[22px] font-black tracking-tight text-black">
              OZOU
            </Link>
            <span className="w-[7px] h-[7px] rounded-full bg-[#a3e635] inline-block mb-1" />
          </div>
          <div className="bg-[#f5f6f7] hover:bg-[#eeeff1] transition-colors rounded-xl p-3 flex items-center justify-between cursor-pointer">
            <div className="flex flex-col">
              <span className="text-xs font-bold text-[#111315]">Studio Workspace</span>
              <span className="text-[11px] text-[#787f87] font-medium">Plano Pro</span>
            </div>
            <svg className="w-3.5 h-3.5 text-[#5e656d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
            </svg>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[10px] tracking-wider font-semibold text-[#8e959e] uppercase px-2 mb-1.5">Espaço de trabalho</span>
            <Link className="flex items-center justify-between px-3 py-2 rounded-xl text-[#3d4249] hover:bg-[#f6f7f8] text-[13px] font-medium transition-colors" href="/inbox">
              <div className="flex items-center gap-3">
                <svg className="w-[18px] h-[18px] text-[#555b63]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
                </svg>
                <span>Inbox unificado</span>
              </div>
              <span className="bg-[#f0f1f3] text-[#4d535b] text-[11px] font-semibold px-2 py-0.5 rounded-full">12</span>
            </Link>
            <Link className="flex items-center gap-3 px-3 py-2 rounded-xl text-[#3d4249] hover:bg-[#f6f7f8] text-[13px] font-medium transition-colors" href="/automacao-campanhas">
              <svg className="w-[18px] h-[18px] text-[#555b63]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
              </svg>
              <span className="leading-tight">Automação & campanhas</span>
            </Link>
            <Link className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-[#14171a] text-white text-[13px] font-medium shadow-sm transition-colors" href="/insights">
              <svg className="w-[18px] h-[18px] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
              <span>Insights & métricas</span>
            </Link>
            <Link className="flex items-center gap-3 px-3 py-2 rounded-xl text-[#3d4249] hover:bg-[#f6f7f8] text-[13px] font-medium transition-colors" href="/contactos">
              <svg className="w-[18px] h-[18px] text-[#555b63]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
              </svg>
              <span>Contactos</span>
            </Link>
            <Link className="flex items-center gap-3 px-3 py-2 rounded-xl text-[#3d4249] hover:bg-[#f6f7f8] text-[13px] font-medium transition-colors" href="/inicio">
              <svg className="w-[18px] h-[18px] text-[#555b63]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
              </svg>
              <span>Início</span>
            </Link>
            <Link className="flex items-center gap-3 px-3 py-2 rounded-xl text-[#3d4249] hover:bg-[#f6f7f8] text-[13px] font-medium transition-colors" href="/empresas">
              <svg className="w-[18px] h-[18px] text-[#555b63]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
              </svg>
              <span>Empresas</span>
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="bg-[#f4f5f3] rounded-2xl p-4 flex flex-col gap-2 relative">
            <svg className="w-4 h-4 text-[#111]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
            <div className="font-bold text-[13px] leading-snug text-[#181a1d]">
              Menos tarefas.
              <br />
              Mais conversas.
            </div>
            <a className="text-[11px] font-medium text-[#686f78] hover:text-black flex items-center gap-1 transition-colors mt-0.5" href="#">
              <span>A IA trata do resto.</span>
              <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
              </svg>
            </a>
          </div>
          <div className="flex flex-col gap-0.5 pt-1">
            <a className="flex items-center gap-3 px-2 py-1.5 text-[12.5px] text-[#555a62] hover:text-black transition-colors font-medium" href="#">
              <svg className="w-4 h-4 text-[#737982]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
              <span>Ajuda e suporte</span>
            </a>
            <Link className="flex items-center gap-3 px-2 py-1.5 text-[12.5px] text-[#555a62] hover:text-black transition-colors font-medium" href="/definicoes/equipa">
              <svg className="w-4 h-4 text-[#737982]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
              <span>Definições</span>
            </Link>
          </div>
          <hr className="border-[#ebebeb] my-1" />
          <div className="flex items-center justify-between px-2 pt-0 cursor-pointer group">
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-[#181a1d] group-hover:text-black">Mariana Costa</span>
              <span className="text-[11px] text-[#7d848e]">Administradora</span>
            </div>
            <svg className="w-3.5 h-3.5 text-[#737982]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </aside>

      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        <header className="pt-6 pb-5 px-9 flex items-center justify-between border-b border-[#f0f0f0] bg-white">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1.5 text-xs text-[#717781] font-medium">
              <span>Workspace</span>
              <span className="text-[#b4b9c1]">/</span>
              <span className="text-[#494e55]">Insights & métricas</span>
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-[#111315] mt-0.5">Insights & métricas</h1>
            <p className="text-xs text-[#737a83]">Os seus resultados, sem complicações.</p>
          </div>
          <div className="flex items-center gap-2 bg-[#f0f4ea] px-3.5 py-1.5 rounded-full border border-[#e4eed9]">
            <span className="w-2 h-2 rounded-full bg-[#528723]" />
            <span className="text-xs font-semibold text-[#273a19]">4 canais conectados</span>
          </div>
        </header>
        <div className="p-9 flex flex-col gap-7 max-w-[1300px] w-full">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-[20px] font-bold tracking-tight text-[#111315]">O essencial, num relance.</h2>
              <p className="text-xs text-[#787f89] mt-0.5">Atualizado hoje às 10:45 · Dados de demonstração</p>
            </div>
            <button className="bg-white border border-[#e4e6e8] rounded-full px-4 py-1.5 text-xs font-medium text-[#2d3137] flex items-center gap-2.5 hover:border-gray-400 shadow-sm transition-all" type="button">
              <span>Este mês · Novembro 2026</span>
              <svg className="w-3.5 h-3.5 text-[#5d636c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </button>
          </div>
          <InsightFigures />
          <section className="bg-[#f4f7ee] rounded-2xl p-6 flex flex-col lg:flex-row items-start justify-between gap-6">
            <div>
              <p className="text-sm text-[#1e2227] leading-relaxed">
                Esta semana, a conversão no WhatsApp é de 24%, face a 8% no E-mail.
                <br />
                Recomendamos migrar 50 leads estagnados para o WhatsApp.
              </p>
            </div>
            <div className="flex flex-col items-end gap-3.5 shrink-0">
              <div className="bg-white/95 rounded-2xl px-6 py-4 flex items-center gap-4 w-full sm:w-[320px] shadow-sm border border-white/60">
                <span className="text-[34px] font-extrabold text-[#111417] leading-none">24%</span>
                <div className="flex flex-col leading-tight">
                  <span className="text-xs font-semibold text-[#1e2227]">conversão no WhatsApp</span>
                  <span className="text-[11px] text-[#7a818c]">vs. 8% no E-mail</span>
                </div>
              </div>
              <Link href="/automacao-campanhas" className="bg-[#121417] hover:bg-black text-white text-xs font-semibold px-6 py-3 rounded-full flex items-center justify-center gap-2 w-full sm:w-[320px] shadow-sm transition-all">
                <span>Criar campanha para 50 leads</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
                </svg>
              </Link>
            </div>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-7 bg-white rounded-2xl p-6 border border-[#eceeed] flex flex-col justify-between">
              <div>
                <h3 className="text-base font-bold text-[#111316]">Cada canal, o seu impacto.</h3>
                <p className="text-xs text-[#717781] mt-0.5">Taxa de conversão · Últimos 7 dias</p>
                <div className="mt-6 flex flex-col gap-4 relative">
                  <div className="flex justify-between pl-20 pr-10 text-[10px] text-[#9ca3af] font-medium border-b border-[#f2f3f5] pb-1">
                    <span>0%</span>
                    <span>10%</span>
                    <span>20%</span>
                    <span>30%</span>
                  </div>
                  {[
                    ["WhatsApp", "72%", "24%", "bg-[#d9f58c]"],
                    ["Instagram", "48%", "16%", "bg-[#e6ebe3]"],
                    ["SMS", "36%", "12%", "bg-[#e6ebe3]"],
                    ["E-mail", "24%", "8%", "bg-[#e6ebe3]"],
                  ].map(([label, width, value, color]) => (
                    <div key={label} className="flex items-center gap-4">
                      <span className="w-16 text-xs font-medium text-[#202327]">{label}</span>
                      <div className="flex-1 flex items-center gap-3">
                        <div className={`h-6 rounded-md ${color}`} style={{ width }} />
                        <span className="text-xs font-semibold text-[#1e2227]">{value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-[11px] text-[#868d97] mt-8 pt-2">Conversão = contactos que concluíram uma compra / contactos alcançados.</div>
            </div>
            <div className="lg:col-span-5 bg-white rounded-2xl p-6 border border-[#eceeed] flex flex-col justify-between">
              <div>
                <h3 className="text-base font-bold text-[#111316]">Mais proximidade. Menos esforço.</h3>
                <p className="text-xs text-[#717781] mt-0.5">O que aconteceu nos últimos 7 dias</p>
                <div className="mt-6 flex flex-col divide-y divide-[#f2f4f6]">
                  <div className="py-4 first:pt-0 flex items-center justify-between">
                    <div className="flex items-baseline gap-3">
                      <span className="text-[26px] font-extrabold text-[#111417]">1.248</span>
                      <span className="text-xs text-[#4b515a] font-normal">conversas recebidas</span>
                    </div>
                    <span className="text-xs font-semibold text-[#1b2028] bg-[#f8faf8] px-2 py-0.5 rounded">+12%</span>
                  </div>
                  <div className="py-4 flex items-center justify-between">
                    <div className="flex items-baseline gap-3">
                      <span className="text-[26px] font-extrabold text-[#111417]">186</span>
                      <span className="text-xs text-[#4b515a] font-normal">respostas com apoio de IA</span>
                    </div>
                    <span className="text-xs font-semibold text-[#1b2028] bg-[#f8faf8] px-2 py-0.5 rounded">+28%</span>
                  </div>
                  <div className="py-4 last:pb-1 flex items-center justify-between">
                    <div className="flex items-baseline gap-3">
                      <span className="text-[26px] font-extrabold text-[#111417]">6 h</span>
                      <span className="text-xs text-[#4b515a] font-normal">poupadas pela sua equipa</span>
                    </div>
                    <span className="text-xs font-semibold text-[#1b2028] bg-[#f8faf8] px-2 py-0.5 rounded">esta semana</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
