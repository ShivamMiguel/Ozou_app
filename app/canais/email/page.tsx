import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "OZOU — Conectar E-mail",
};

const jakartaScope = {
  "--font-sans": 'var(--font-jakarta), "Plus Jakarta Sans", sans-serif',
  fontFamily: 'var(--font-jakarta), "Plus Jakarta Sans", sans-serif',
} as CSSProperties;

const nav = [
  ["/automacao-campanhas", "Automação & campanhas", "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"],
  ["/insights", "Insights & métricas", "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"],
  ["/contactos", "Contactos", "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"],
  ["/inicio", "Início", "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"],
  ["/empresas", "Empresas", "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"],
] as const;

const permissions = [
  "Receber e responder a mensagens",
  "Sincronizar contactos e estados de entrega",
  "Enviar campanhas autorizadas pela sua equipa",
];

const steps = [
  "Entre na conta de e-mail da sua equipa.",
  "Escolha a caixa de correio a sincronizar.",
  "Autorize o acesso às mensagens.",
];

export default function ConectarEmailPage() {
  return (
    <div className="bg-[#dcdfdc] text-[#1c1c1c] overflow-hidden antialiased select-none app-shell h-dvh w-full flex ozou-mail" style={jakartaScope}>
      <style>{`.ozou-mail::-webkit-scrollbar,.ozou-mail *::-webkit-scrollbar{width:4px;height:4px}.ozou-mail::-webkit-scrollbar-track,.ozou-mail *::-webkit-scrollbar-track{background:transparent}.ozou-mail::-webkit-scrollbar-thumb,.ozou-mail *::-webkit-scrollbar-thumb{background:rgba(0,0,0,0.1);border-radius:4px}`}</style>
      <div className="flex-1 flex overflow-hidden filter blur-[2px] opacity-90 pointer-events-none">
        <aside className="w-64 bg-[#e9ebe8] border-r border-[#d4d7d3] flex flex-col justify-between p-5 shrink-0">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-black tracking-tight text-[#111111]">OZOU</span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#a3c976] inline-block mb-1" />
            </div>
            <div className="bg-[#dedfdc] rounded-xl p-3 flex items-center justify-between cursor-pointer">
              <div>
                <div className="font-bold text-sm text-[#111111]">Studio Workspace</div>
                <div className="text-xs text-[#71736e]">Plano Pro</div>
              </div>
              <svg className="w-4 h-4 text-[#71736e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
            <nav className="space-y-1">
              <div className="text-[11px] font-semibold text-[#8b8d88] tracking-wider uppercase px-2 mb-2">Espaço de trabalho</div>
              <a className="flex items-center justify-between px-3 py-2.5 rounded-xl bg-[#1c1d1a] text-white font-medium text-sm" href="#">
                <div className="flex items-center space-x-3">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                  <span>Inbox unificado</span>
                </div>
                <span className="text-xs bg-[#2e2f2b] px-2 py-0.5 rounded-full font-semibold">12</span>
              </a>
              {nav.map(([href, label, d]) => (
                <a key={href} className="flex items-center space-x-3 px-3 py-2 rounded-xl text-[#52544e] hover:bg-[#e1e4df] font-medium text-sm" href={href}>
                  <svg className="w-4 h-4 text-[#7a7d77]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d={d} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                  <span>{label}</span>
                </a>
              ))}
            </nav>
          </div>
          <div className="space-y-4">
            <div className="bg-[#dcded9] rounded-2xl p-4 text-xs">
              <div className="flex items-center space-x-1.5 mb-2 text-[#1c1c1c]">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </div>
              <div className="font-bold text-sm leading-snug mb-2 text-[#1c1c1c]">
                Menos tarefas.
                <br />
                Mais conversas.
              </div>
              <a className="text-[#696b66] hover:text-black flex items-center space-x-1" href="#">
                <span>A IA trata do resto.</span>
                <span>↗</span>
              </a>
            </div>
            <div className="space-y-1 text-sm text-[#52544e]">
              <a className="flex items-center space-x-3 px-3 py-1.5 rounded-lg hover:bg-[#e1e4df]" href="#">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
                <span>Ajuda e suporte</span>
              </a>
              <a className="flex items-center space-x-3 px-3 py-1.5 rounded-lg hover:bg-[#e1e4df]" href="#">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
                <span>Definições</span>
              </a>
            </div>
            <div className="border-t border-[#d4d7d3] pt-3 flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold text-[#1c1c1c]">Mariana Costa</div>
                <div className="text-xs text-[#71736e]">Administradora</div>
              </div>
              <svg className="w-4 h-4 text-[#71736e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </aside>
        <main className="flex-1 flex flex-col min-w-0 bg-[#eef0ed]">
          <header className="p-8 pb-4 flex items-start justify-between border-b border-[#e2e5e1]">
            <div>
              <div className="text-xs text-[#73766f] mb-1">Workspace / Inbox unificado</div>
              <h1 className="text-3xl font-extrabold text-[#111111] tracking-tight">Inbox unificado</h1>
              <p className="text-xs text-[#73766f] mt-1">Todas as conversas, no mesmo lugar.</p>
            </div>
            <div className="flex items-center space-x-2 bg-[#d7dad4] px-3.5 py-1.5 rounded-full text-xs font-medium text-[#464843]">
              <span className="w-2 h-2 rounded-full bg-[#52a447]" />
              <span>4 canais conectados</span>
            </div>
          </header>
          <div className="flex-1 flex p-6 gap-5 overflow-hidden">
            <div className="w-72 flex flex-col space-y-3">
              <div className="flex items-center space-x-2">
                <button className="bg-[#1f201d] text-white text-xs px-3.5 py-1.5 rounded-full font-medium" type="button">
                  Todas as conversas <span className="ml-1 opacity-70">24</span>
                </button>
              </div>
              <div className="bg-white/60 rounded-xl p-2.5 flex items-center space-x-2 border border-[#d8dcd5]">
                <input id="mail-search" className="bg-transparent text-xs border-none p-0 focus:ring-0 w-full placeholder-[#949791]" placeholder="Pesquisar por nome ou..." type="text" aria-label="Pesquisar conversas" />
              </div>
              <div className="text-xs font-semibold text-[#666863] flex items-center justify-between px-1">
                <span>Todos os canais</span>
                <span>▾</span>
              </div>
              <div className="space-y-1.5">
                <div className="p-3 bg-[#dadfda] rounded-xl border border-[#c6ccc4]">
                  <div className="font-bold text-xs">Sofia Martins</div>
                  <div className="flex items-center space-x-1.5 mt-1">
                    <span className="text-[10px] bg-[#c3cfbe] px-1.5 py-0.5 rounded font-medium">WhatsApp</span>
                    <span className="text-[11px] text-[#555] truncate">Olá! Gost... sobre...</span>
                  </div>
                </div>
                <div className="p-3 bg-white/40 rounded-xl">
                  <div className="font-bold text-xs">Miguel Santos</div>
                  <div className="flex items-center space-x-1.5 mt-1">
                    <span className="text-[10px] bg-[#d7dad4] px-1.5 py-0.5 rounded">Instagram</span>
                    <span className="text-[11px] text-[#777] truncate">Obrigado...</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 bg-[#f7f8f6] rounded-2xl border border-[#dde1db] p-5 flex flex-col justify-between">
              <div className="flex justify-between items-center text-xs text-[#70736c]">
                <span>A sua equipa está em dia.</span>
                <button className="bg-[#1b1c19] text-white px-4 py-2 rounded-full font-medium text-xs" type="button">
                  + Nova conversa
                </button>
              </div>
              <div className="flex justify-end">
                <div className="bg-[#d9e5cf] p-4 rounded-2xl text-xs max-w-sm">
                  <p>Olá Sofia! Com certeza, enviamos já os detalhes do plano.</p>
                  <div className="text-right text-[10px] text-[#788270] mt-1">11:42 ✓✓</div>
                </div>
              </div>
              <div className="border border-[#dedfdc] bg-white rounded-xl p-3 flex justify-between items-center">
                <span className="text-xs text-[#999]">Gerar resposta com IA</span>
                <button className="bg-[#1b1c19] text-white text-xs px-3 py-1.5 rounded-lg" type="button">
                  Enviar ↗
                </button>
              </div>
            </div>
            <div className="w-64 bg-[#eceee9] rounded-2xl border border-[#dde1db] p-5 text-xs space-y-4">
              <div className="font-bold text-sm text-[#3b3c39]">Detalhes do contacto</div>
              <div>
                <div className="text-xl font-bold">Sofia Martins</div>
                <div className="text-[#72746e]">Luna Studio</div>
              </div>
              <span className="inline-block bg-[#cfd7c9] px-2 py-0.5 rounded text-[11px] font-medium">Lead qualificado</span>
              <div className="space-y-3 pt-2 text-[11px]">
                <div>
                  <div className="text-[#888] uppercase tracking-wider text-[9px] font-bold">Canal de Origem</div>
                  <div className="font-semibold text-sm">WhatsApp</div>
                </div>
                <div>
                  <div className="text-[#888] uppercase tracking-wider text-[9px] font-bold">Telefone</div>
                  <div className="font-semibold">+244 912 345 678</div>
                </div>
                <div>
                  <div className="text-[#888] uppercase tracking-wider text-[9px] font-bold">E-mail</div>
                  <div className="font-semibold">sofia@lunastudio.ao</div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <div className="fixed inset-0 bg-[#353835]/40 backdrop-blur-[3px] flex items-center justify-center p-4 z-50">
        <div className="bg-[#fbfcfb] w-full max-w-[550px] rounded-[32px] shadow-2xl p-9 flex flex-col space-y-6 relative border border-[#e5e7e3]" role="dialog" aria-labelledby="email-modal-title">
          <Link href="/inbox" aria-label="Fechar" className="absolute top-7 right-7 w-9 h-9 rounded-full bg-[#f1f3f0] hover:bg-[#e4e7e2] transition-colors flex items-center justify-center text-[#555853]">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
            </svg>
          </Link>
          <div className="space-y-1 pr-10">
            <h2 id="email-modal-title" className="text-[28px] font-extrabold text-[#111210] tracking-tight leading-tight">
              Conectar E-mail
            </h2>
            <p className="text-[13px] text-[#797c76] font-normal">Studio Workspace · Caixa de correio da equipa</p>
          </div>
          <div className="bg-[#eef4e8] rounded-[22px] p-6 space-y-3 border border-[#e1ebd9]">
            <h3 className="font-bold text-[16px] text-[#1c1d1a] tracking-tight">Tudo começa com uma autorização.</h3>
            <ol className="space-y-1 text-[13px] text-[#484c44] leading-relaxed">
              {steps.map((step, index) => (
                <li key={step} className="flex items-baseline">
                  <span className="mr-2">{index + 1}.</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="space-y-3 pt-1">
            <div className="text-[10.5px] font-bold text-[#868a83] uppercase tracking-wider">O que a ozou vai poder fazer</div>
            <ul className="space-y-2 text-[13.5px] font-medium text-[#1e201c]">
              {permissions.map((item) => (
                <li key={item} className="flex items-center space-x-2.5">
                  <svg className="w-4 h-4 text-[#1e201c] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#f4f5f3] rounded-[20px] p-5 space-y-1 border border-[#ebece8]">
            <div className="font-bold text-[14px] text-[#1a1b18]">Demonstração de autorização</div>
            <div className="text-[12px] text-[#7c8078]">O percurso seguinte representa a confirmação do fornecedor.</div>
          </div>
          <div className="space-y-3 pt-2">
            <Link href="/canais/conectado" className="w-full bg-[#1b1d1a] hover:bg-[#2b2e2a] text-white text-[14px] font-medium py-3.5 px-6 rounded-full transition duration-150 flex items-center justify-center space-x-1.5 shadow-sm">
              <span>Autorizar e continuar</span>
              <svg className="w-3.5 h-3.5 ml-1 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M17 7l-10 10M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
              </svg>
            </Link>
            <Link href="/inbox" className="w-full bg-white hover:bg-[#f6f7f5] text-[#1c1d1a] text-[14px] font-medium py-3 px-6 rounded-full border border-[#dcdeda] transition duration-150 text-center block">
              Ligar mais tarde
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
