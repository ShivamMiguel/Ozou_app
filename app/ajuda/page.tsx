import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "OZOU — Ajuda e primeiros passos",
};

const jakartaScope = {
  "--font-sans": 'var(--font-jakarta), "Plus Jakarta Sans", sans-serif',
  fontFamily: 'var(--font-jakarta), "Plus Jakarta Sans", sans-serif',
} as CSSProperties;

const guides = [
  {
    title: "Configurar a empresa",
    body: "Crie o espaço, escolha o fuso horário e convide a equipa.",
    href: "/criar-empresa",
  },
  {
    title: "Ligar os canais",
    body: "Autorize os fornecedores e acompanhe o estado das ligações.",
    href: "/definicoes/canais",
  },
  {
    title: "Trazer os contactos",
    body: "Importe CSV com validação e controlo de duplicados.",
    href: "/contactos",
  },
  {
    title: "Começar uma campanha",
    body: "Defina o público, reveja a mensagem e escolha o momento.",
    href: "/automacao-campanhas/rascunho",
  },
];

export default function AjudaPage() {
  return (
    <div className="bg-[#fafbfb] text-[#18181b] min-h-screen flex antialiased selection:bg-lime-200" style={jakartaScope}>
      <aside className="w-[230px] flex-shrink-0 bg-white border-r border-[#f1f3f5] flex flex-col justify-between min-h-screen select-none">
        <div className="flex flex-col">
          <div className="px-6 pt-7 pb-6 flex items-center gap-1.5">
            <Link href="/" className="text-2xl font-black tracking-tight text-black">
              OZOU
            </Link>
            <span className="w-1.5 h-1.5 rounded-full bg-[#a3e635] inline-block mb-1" />
          </div>
          <div className="px-3.5 mb-7">
            <button className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-[#f4f5f6] hover:bg-[#eceef0] transition-colors text-left" type="button">
              <div>
                <div className="text-[13px] font-semibold text-neutral-900 leading-tight">Studio Workspace</div>
                <div className="text-[11px] text-neutral-500 font-normal">Plano Pro</div>
              </div>
              <svg className="w-3.5 h-3.5 text-neutral-600 stroke-[2.2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
          <div className="px-4 mb-2.5">
            <span className="text-[10px] tracking-wider font-semibold text-neutral-400 uppercase">Espaço de trabalho</span>
          </div>
          <nav aria-label="Menu Principal" className="px-2.5 space-y-0.5">
            <Link className="flex items-center justify-between px-3 py-2 rounded-lg text-neutral-600 hover:text-black hover:bg-neutral-50 transition-colors" href="/inbox">
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-neutral-500 stroke-[1.8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-[13px] font-normal">Inbox unificado</span>
              </div>
              <span className="text-[10.5px] font-medium bg-[#f0f1f2] text-neutral-700 px-1.5 py-0.5 rounded text-center min-w-[20px]">12</span>
            </Link>
            <Link className="flex items-center px-3 py-2 rounded-lg text-neutral-600 hover:text-black hover:bg-neutral-50 transition-colors" href="/automacao-campanhas">
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-neutral-500 stroke-[1.8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-[13px] font-normal leading-tight">
                  Automação &
                  <br />
                  campanhas
                </span>
              </div>
            </Link>
            <Link className="flex items-center px-3 py-2.5 rounded-lg text-neutral-600 hover:text-black hover:bg-neutral-50 transition-colors" href="/insights">
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-neutral-500 stroke-[1.8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-[13px] font-normal">Insights & métricas</span>
              </div>
            </Link>
            <Link className="flex items-center px-3 py-2 rounded-lg text-neutral-600 hover:text-black hover:bg-neutral-50 transition-colors" href="/contactos">
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-neutral-500 stroke-[1.8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-[13px] font-normal">Contactos</span>
              </div>
            </Link>
            <Link className="flex items-center px-3 py-2 rounded-lg text-neutral-600 hover:text-black hover:bg-neutral-50 transition-colors" href="/inicio">
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-neutral-500 stroke-[1.8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-[13px] font-normal">Início</span>
              </div>
            </Link>
            <Link className="flex items-center px-3 py-2 rounded-lg text-neutral-600 hover:text-black hover:bg-neutral-50 transition-colors" href="/empresas">
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-neutral-500 stroke-[1.8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-[13px] font-normal">Empresas</span>
              </div>
            </Link>
          </nav>
        </div>
        <div className="flex flex-col pb-3">
          <div className="px-3.5 mb-5">
            <div className="bg-[#f2f4ec] rounded-2xl p-4 flex flex-col justify-between">
              <div className="mb-2">
                <svg className="w-4 h-4 text-neutral-800 stroke-[2] mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <h4 className="text-[13.5px] font-semibold text-neutral-900 leading-snug tracking-tight">
                  Menos tarefas.
                  <br />
                  Mais conversas.
                </h4>
              </div>
              <a className="text-[11.5px] text-neutral-500 hover:text-neutral-900 inline-flex items-center gap-1 transition-colors mt-2" href="#">
                A IA trata do resto.
                <svg className="w-3 h-3 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
          <div className="px-2.5 space-y-0.5 mb-4">
            <Link className="flex items-center px-3 py-2 rounded-lg text-neutral-600 hover:text-black hover:bg-neutral-50 transition-colors" href="/ajuda">
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-neutral-500 stroke-[1.8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-[13px] font-normal">Ajuda e suporte</span>
              </div>
            </Link>
            <Link className="flex items-center px-3 py-2 rounded-lg text-neutral-600 hover:text-black hover:bg-neutral-50 transition-colors" href="/definicoes/equipa">
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-neutral-500 stroke-[1.8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="12" cy="12" r="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-[13px] font-normal">Definições</span>
              </div>
            </Link>
          </div>
          <div className="pt-3 border-t border-neutral-100 px-4">
            <button className="w-full flex items-center justify-between text-left group" type="button">
              <div>
                <div className="text-[13px] font-semibold text-neutral-900 leading-tight">Mariana Costa</div>
                <div className="text-[11px] text-neutral-500 font-normal">Administradora</div>
              </div>
              <svg className="w-3.5 h-3.5 text-neutral-400 group-hover:text-neutral-700 stroke-[2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </aside>

      <main className="flex-1 flex flex-col min-w-0">
        <header className="pt-7 pb-5 px-10 border-b border-[#eceeed] bg-white flex items-center justify-between">
          <div>
            <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[11.5px] text-neutral-400 mb-2.5">
              <span>Workspace</span>
              <span className="text-neutral-300">/</span>
              <span className="text-neutral-600">Ajuda e primeiros passos</span>
            </nav>
            <h1 className="text-[25px] font-bold text-neutral-900 tracking-tight leading-none mb-1.5">Ajuda e primeiros passos</h1>
            <p className="text-[13px] text-neutral-400 font-normal">O essencial para gerir o seu negócio.</p>
          </div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f4f7f0] border border-[#e4ebd8]">
            <span className="w-2 h-2 rounded-full bg-[#4ba233]" />
            <span className="text-[12px] font-medium text-neutral-700">4 canais conectados</span>
          </div>
        </header>
        <div className="p-10 max-w-[1240px] w-full">
          <section aria-labelledby="help-clarity-title" className="mb-9">
            <h2 className="text-[28px] font-bold text-neutral-900 tracking-tight mb-2" id="help-clarity-title">
              Um pouco de ajuda. Muito mais clareza.
            </h2>
            <p className="text-[14px] text-neutral-500 font-normal">Guias essenciais para os primeiros dias com a OZOU.</p>
          </section>
          <section className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
            {guides.map((guide) => (
              <div key={guide.title} className="bg-white rounded-2xl p-7 border border-[#e8eaed] flex flex-col justify-between h-[210px] shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
                <div>
                  <h3 className="text-[20px] font-bold text-neutral-900 mb-2.5 tracking-tight">{guide.title}</h3>
                  <p className="text-[13px] text-neutral-500 leading-relaxed font-normal">{guide.body}</p>
                </div>
                <Link href={guide.href} className="w-full py-2.5 px-4 rounded-xl border border-[#eceeed] hover:border-neutral-300 text-neutral-800 text-[13px] font-medium flex items-center justify-center gap-1.5 transition-colors bg-white">
                  <span>Abrir percurso</span>
                  <span className="text-sm font-normal">→</span>
                </Link>
              </div>
            ))}
          </section>
          <section className="bg-[#f4f7f0] rounded-2xl p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <h3 className="text-[21px] font-bold text-neutral-900 tracking-tight mb-2">Não consegue entrar na sua conta?</h3>
              <p className="text-[13.5px] text-neutral-500 font-normal">O percurso de recuperação permite criar uma nova palavra-passe.</p>
            </div>
            <Link href="/recuperar" className="inline-flex items-center justify-center px-6 py-2.5 bg-white text-neutral-800 text-[13px] font-medium rounded-full shadow-sm hover:shadow transition-all gap-1.5 flex-shrink-0">
              <span>Recuperar acesso</span>
              <svg className="w-3.5 h-3.5 stroke-[2.2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </section>
        </div>
      </main>
    </div>
  );
}
