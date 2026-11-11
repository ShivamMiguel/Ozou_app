import type { Metadata } from "next";
import Link from "next/link";
import { BoundForm } from "@/components/live/actions";

export const metadata: Metadata = {
  title: "OZOU — Nova palavra-passe",
};

export default function NovaPalavraPassePage() {
  return (
    <div className="min-h-full bg-[#fbfcf9] text-[#16181b] p-3 md:p-4 flex flex-col justify-between selection:bg-lime-200">
      <main className="w-full flex-grow flex flex-col lg:flex-row gap-6 min-h-[calc(100vh-2rem)]">
        <aside className="w-full lg:w-[46%] xl:w-[44%] bg-[#eff4eb] rounded-[36px] p-8 md:p-12 lg:p-14 flex flex-col justify-between shrink-0">
          <div>
            <div className="flex items-center gap-2 mb-16 md:mb-20">
              <span className="text-3xl font-extrabold tracking-tight text-[#16171a] font-sans">OZOU</span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#bef33e] -mt-3.5 inline-block" />
            </div>
            <div className="space-y-2 mb-8">
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-bold text-[#16171a] leading-[1.08] tracking-tight">
                O seu negócio.
                <br />
                Mais próximo.
              </h1>
            </div>
            <div className="text-[#69726d] text-base sm:text-lg leading-relaxed font-normal space-y-0.5">
              <p>Conversas, campanhas e clareza.</p>
              <p>Um espaço simples para a sua equipa.</p>
            </div>
          </div>

          <section aria-label="Demonstração da interface" className="my-12 md:my-16">
            <div className="bg-white rounded-[24px] p-6 sm:p-7 shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-[#e8eee3]/60 max-w-[480px]">
              <p className="text-[10px] sm:text-[11px] font-semibold tracking-wider text-[#9aa0a6] uppercase mb-4">
                UMA CONVERSA. TODAS AS POSSIBILIDADES.
              </p>
              <div className="mb-5">
                <h2 className="text-base font-bold text-[#181a1f] leading-snug">Sofia Martins</h2>
                <p className="text-xs text-[#9aa0a6] font-normal">WhatsApp · Agora</p>
              </div>
              <div className="space-y-3 pt-1">
                <div className="bg-[#f3f4f1] text-[#22252a] text-[13px] sm:text-sm py-2.5 px-4 rounded-[16px] rounded-tl-sm w-fit max-w-[85%] leading-relaxed font-normal">
                  Olá! Podemos conhecer melhor a OZOU?
                </div>
                <div className="flex justify-end pt-1">
                  <div className="bg-[#e4eccf] text-[#242b1d] text-[13px] sm:text-sm py-2 px-3.5 rounded-[16px] rounded-br-sm inline-flex items-center gap-1.5 leading-relaxed font-medium">
                    <span>Claro, Sofia. Vamos simplificar o seu dia.</span>
                    <span className="text-[#55673d] text-[11px] font-bold tracking-tighter shrink-0 select-none">✓✓</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <footer className="pt-4">
            <h3 className="text-lg font-bold text-[#181a1f] mb-1">Menos tarefas. Mais relações.</h3>
            <p className="text-sm text-[#737c75] font-normal">O essencial, com espaço para crescer.</p>
          </footer>
        </aside>

        <div className="w-full lg:w-[54%] xl:w-[56%] flex flex-col justify-between px-6 sm:px-10 lg:px-16 xl:px-24 py-8 lg:py-10">
          <header className="w-full mb-10 lg:mb-14">
            <Link
              href="/"
              className="inline-flex items-center text-sm font-medium text-[#50575e] hover:text-black transition-colors group"
            >
              <span className="mr-2 transform group-hover:-translate-x-0.5 transition-transform">←</span>
              <span>Voltar à OZOU</span>
            </Link>
          </header>

          <div className="w-full max-w-[430px] my-auto py-4">
            <div className="mb-8">
              <h2 className="text-3xl sm:text-[34px] font-bold text-[#16181b] tracking-tight mb-2.5">
                Uma nova palavra-passe.
              </h2>
              <p className="text-[#646e78] text-[15px] leading-relaxed">
                Escolha uma palavra-passe segura para a sua conta.
              </p>
            </div>

            <BoundForm intent="reset-password" className="space-y-5">
              <div className="space-y-2">
                <label className="block text-[13px] font-medium text-[#374151]" htmlFor="new-password">
                  Nova palavra-passe
                </label>
                <div className="relative">
                  <input
                    className="w-full rounded-2xl border border-[#e1e4e8] bg-white px-4 py-3 text-base text-[#1b1e22] tracking-[0.2em] font-medium shadow-none focus:border-[#16181b] focus:ring-1 focus:ring-[#16181b] focus:outline-none transition-all placeholder:text-[#a0a6ad]"
                    id="new-password"
                    name="new-password"
                    placeholder="••••••••••••"
                    required
                    type="password"
                    defaultValue="............"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-[13px] font-medium text-[#374151]" htmlFor="confirm-password">
                  Confirmar palavra-passe
                </label>
                <div className="relative">
                  <input
                    className="w-full rounded-2xl border border-[#e1e4e8] bg-white px-4 py-3 text-base text-[#1b1e22] tracking-[0.2em] font-medium shadow-none focus:border-[#16181b] focus:ring-1 focus:ring-[#16181b] focus:outline-none transition-all placeholder:text-[#a0a6ad]"
                    id="confirm-password"
                    name="confirm-password"
                    placeholder="••••••••••••"
                    required
                    type="password"
                    defaultValue="............"
                  />
                </div>
              </div>
              <div className="flex items-center gap-5 pt-1 text-[13px] text-[#4b5563]">
                <div className="inline-flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 text-[#3b873e]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path d="M4.5 12.75l6 6 9-13.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>12 caracteres ou mais</span>
                </div>
                <div className="inline-flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 text-[#3b873e]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path d="M4.5 12.75l6 6 9-13.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>Letras e números</span>
                </div>
              </div>
              <div className="pt-4">
                <button
                  className="w-full bg-[#171a1d] hover:bg-[#000000] text-white font-medium text-[15px] py-3.5 px-6 rounded-full transition-all duration-150 shadow-sm active:scale-[0.99] text-center"
                  type="submit"
                >
                  Guardar e voltar a entrar
                </button>
              </div>
              <p className="text-[12px] text-[#78828d] pt-1 leading-normal font-normal">
                As outras sessões serão terminadas por segurança.
              </p>
            </BoundForm>
          </div>

          <footer className="w-full flex items-center justify-between text-xs text-[#717b86] pt-12">
            <div>
              <span>© 2026 OZOU</span>
            </div>
            <span>Português</span>
          </footer>
        </div>
      </main>
    </div>
  );
}
