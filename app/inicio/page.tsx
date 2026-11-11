import type { Metadata } from "next";
import Link from "next/link";
import { OnboardingSteps } from "@/components/live/workspace-panels";

export const metadata: Metadata = {
  title: "OZOU — Início e primeiros passos",
};

export default function InicioPage() {
  return (
    <div className="bg-[#F8F9FA] text-[#111827] flex min-h-screen overflow-x-hidden antialiased selection:bg-[#B6DF59] selection:text-black font-sans">
      <aside className="w-[280px] min-w-[280px] bg-white border-r border-[#EEEEEE] flex flex-col justify-between py-7 px-5 min-h-screen sticky top-0 h-screen overflow-y-auto">
        <div className="flex flex-col space-y-7">
          <div className="px-2 pt-1 flex items-center space-x-2">
            <Link href="/" className="text-[26px] font-black tracking-tight text-black uppercase">
              OZOU
            </Link>
            <span className="w-[7px] h-[7px] rounded-full bg-[#BBE43E] -mt-2" />
          </div>
          <div className="px-1">
            <button className="w-full bg-[#F5F5F7] hover:bg-[#EFEFF2] transition-colors rounded-xl px-4 py-3 flex items-center justify-between text-left" type="button">
              <div>
                <div className="text-[13.5px] font-semibold text-gray-900 tracking-tight leading-snug">Studio Workspace</div>
                <div className="text-[11.5px] text-[#71717A] mt-0.5">Plano Pro</div>
              </div>
              <svg className="w-4 h-4 text-gray-400 stroke-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
          <nav className="space-y-1">
            <div className="text-[10px] font-semibold tracking-wider text-[#A1A1AA] uppercase px-3 pb-2">Espaço de trabalho</div>
            <Link className="flex items-center justify-between px-3 py-2.5 rounded-xl text-gray-600 hover:text-black hover:bg-gray-50 transition-all font-medium text-[13.5px] group" href="/inbox">
              <div className="flex items-center space-x-3">
                <svg className="w-[18px] h-[18px] text-gray-400 group-hover:text-black transition-colors" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
                  <rect height="14" rx="2" width="18" x="3" y="4" />
                  <path d="M3 13h4l2 3h6l2-3h4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Inbox unificado</span>
              </div>
              <span className="text-xs bg-[#F4F4F5] text-gray-600 px-2 py-0.5 rounded-full font-medium text-[11px]">0</span>
            </Link>
            <Link className="flex items-center px-3 py-2.5 rounded-xl text-gray-600 hover:text-black hover:bg-gray-50 transition-all font-medium text-[13.5px] group" href="/automacao-campanhas">
              <div className="flex items-center space-x-3">
                <svg className="w-[18px] h-[18px] text-gray-400 group-hover:text-black transition-colors" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
                  <path d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Automação & campanhas</span>
              </div>
            </Link>
            <Link className="flex items-center px-3 py-2.5 rounded-xl text-gray-600 hover:text-black hover:bg-gray-50 transition-all font-medium text-[13.5px] group" href="/insights">
              <div className="flex items-center space-x-3">
                <svg className="w-[18px] h-[18px] text-gray-400 group-hover:text-black transition-colors" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
                  <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Insights & métricas</span>
              </div>
            </Link>
            <Link className="flex items-center px-3 py-2.5 rounded-xl text-gray-600 hover:text-black hover:bg-gray-50 transition-all font-medium text-[13.5px] group" href="/contactos">
              <div className="flex items-center space-x-3">
                <svg className="w-[18px] h-[18px] text-gray-400 group-hover:text-black transition-colors" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
                  <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Contactos</span>
              </div>
            </Link>
            <Link className="flex items-center px-3.5 py-2.5 rounded-xl bg-[#141517] text-white font-medium text-[13.5px] shadow-sm" href="/inicio">
              <div className="flex items-center space-x-3">
                <svg className="w-[18px] h-[18px] text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Início</span>
              </div>
            </Link>
            <Link className="flex items-center px-3 py-2.5 rounded-xl text-gray-600 hover:text-black hover:bg-gray-50 transition-all font-medium text-[13.5px] group" href="/empresas">
              <div className="flex items-center space-x-3">
                <svg className="w-[18px] h-[18px] text-gray-400 group-hover:text-black transition-colors" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
                  <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Empresas</span>
              </div>
            </Link>
          </nav>
        </div>
        <div className="space-y-4 pt-4">
          <div className="bg-[#F0F2EB] rounded-2xl p-4 relative overflow-hidden">
            <div className="text-black mb-2">
              <svg className="w-4 h-4 stroke-[2.2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p className="font-bold text-[14px] leading-tight text-gray-950 mb-3">
              Menos tarefas.
              <br />
              Mais conversas.
            </p>
            <a className="inline-flex items-center text-[11.5px] font-medium text-gray-600 hover:text-black" href="#">
              A IA trata do resto.
              <span className="ml-1 text-[11px]">↗</span>
            </a>
          </div>
          <div className="space-y-1 text-[13px] pt-1">
            <a className="flex items-center space-x-3 px-3 py-2 text-gray-600 hover:text-black font-medium transition-colors" href="#">
              <svg className="w-[18px] h-[18px] text-gray-400 stroke-[1.8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3m.08 4h.01" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>Ajuda e suporte</span>
            </a>
            <Link className="flex items-center space-x-3 px-3 py-2 text-gray-600 hover:text-black font-medium transition-colors" href="/definicoes/equipa">
              <svg className="w-[18px] h-[18px] text-gray-400 stroke-[1.8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              <span>Definições</span>
            </Link>
          </div>
          <div className="border-t border-[#F0F0F0] pt-3">
            <button className="w-full flex items-center justify-between px-2 py-1 hover:bg-gray-50 rounded-lg transition-colors text-left" type="button">
              <div>
                <div className="text-[13px] font-semibold text-gray-900 leading-tight">Mariana Costa</div>
                <div className="text-[11.5px] text-[#71717A] mt-0.5">Administradora</div>
              </div>
              <svg className="w-3.5 h-3.5 text-gray-400 stroke-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </aside>

      <main className="flex-1 flex flex-col min-w-0 bg-[#FBFBFC]">
        <header className="bg-white border-b border-[#EEEEEE] px-10 py-5">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <div>
              <div className="flex items-center space-x-1.5 text-[12.5px] text-[#71717A] mb-1 font-normal">
                <span>Workspace</span>
                <span className="text-gray-300">/</span>
                <span className="text-[#71717A]">Início e primeiros passos</span>
              </div>
              <h1 className="text-2xl font-bold text-[#111827] tracking-tight">Início e primeiros passos</h1>
              <p className="text-[13px] text-[#71717A] mt-1 font-normal">O essencial para gerir o seu negócio.</p>
            </div>
            <div className="flex items-center space-x-2 bg-[#F1F4EB] text-[#222421] px-3.5 py-1.5 rounded-full text-[12px] font-medium">
              <span className="w-2 h-2 rounded-full bg-[#7CA22A]" />
              <span>Configuração inicial</span>
            </div>
          </div>
        </header>
        <div className="flex-1 overflow-y-auto px-10 py-9">
          <div className="max-w-6xl mx-auto space-y-7 pb-16">
            <section>
              <h2 className="text-[28px] font-bold text-[#111827] tracking-tight">Bem-vinda à OZOU, Mariana.</h2>
              <p className="text-[14px] text-[#71717A] mt-1.5">A Studio Workspace já tem o seu lugar. Vamos pô-la a conversar.</p>
            </section>
            <section className="bg-[#F0F3EC] rounded-2xl p-9 border border-[#E7EBDD] relative">
              <div className="max-w-xl">
                <h3 className="text-2xl font-bold text-[#111827] tracking-tight leading-snug">O início de relações mais próximas.</h3>
                <p className="text-[14px] text-[#52525B] mt-4 leading-relaxed font-normal">
                  A empresa está criada. Ligue os seus canais e convide a equipa para começar a receber mensagens reais.
                </p>
              </div>
              <div className="flex items-end justify-between mt-10 pt-2">
                <span className="text-[12px] text-[#71717A]">Configure ao seu ritmo. Pode voltar a estes passos.</span>
                <Link
                  href="/definicoes/equipa"
                  className="inline-flex items-center space-x-2 bg-[#17181A] hover:bg-black text-white text-[13px] font-medium px-5 py-2.5 rounded-full shadow-sm transition-all duration-150"
                >
                  <span>Gerir os meus canais</span>
                  <span className="text-[12px]">↗</span>
                </Link>
              </div>
            </section>
            <OnboardingSteps />
            <section className="bg-white border border-[#EDEDED] rounded-2xl p-7 flex items-center justify-between shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
              <div>
                <h4 className="text-[16px] font-bold text-[#111827]">Quer conhecer a plataforma primeiro?</h4>
                <p className="text-[13px] text-[#71717A] mt-1 font-normal">Explore conversas, campanhas e insights com dados de demonstração.</p>
              </div>
              <Link href="/inbox" className="inline-flex items-center space-x-2 bg-[#17181A] hover:bg-black text-white text-[12.5px] font-medium px-6 py-2.5 rounded-full transition-all whitespace-nowrap">
                <span>Explorar demonstração</span>
                <span className="text-[12px]">↗</span>
              </Link>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
