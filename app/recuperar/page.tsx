import type { Metadata } from "next";
import Link from "next/link";
import { BoundForm } from "@/components/live/actions";

export const metadata: Metadata = {
  title: "OZOU — Recuperar acesso",
};

export default function RecuperarPage() {
  return (
    <div className="min-h-full bg-white text-[#141718] flex flex-col justify-between p-3 sm:p-4 lg:p-4 selection:bg-[#cde48f] selection:text-black">
      <main className="w-full flex-1 flex flex-col lg:flex-row gap-4 lg:gap-6 min-h-[940px]">
        <aside className="w-full lg:w-[42%] xl:w-[40%] bg-[#f3f7ee] rounded-3xl p-8 sm:p-12 lg:p-14 flex flex-col justify-between relative overflow-hidden">
          <div>
            <header className="flex items-center gap-2 mb-16 sm:mb-20">
              <span className="text-2xl font-bold tracking-tight text-[#141718]">OZOU</span>
              <span aria-hidden="true" className="w-2 h-2 rounded-full bg-[#c2df6d] inline-block mb-1" />
            </header>
            <div className="space-y-6 max-w-md">
              <h1 className="text-4xl sm:text-[46px] font-bold text-[#141718] leading-[1.12] tracking-tight">
                O seu negócio.
                <br />
                Mais próximo.
              </h1>
              <p className="text-base sm:text-lg text-[#666d73] leading-relaxed font-normal">
                Conversas, campanhas e clareza.
                <br />
                Um espaço simples para a sua equipa.
              </p>
            </div>
          </div>

          <section aria-label="Demonstração da interface OZOU" className="my-12">
            <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-[0_4px_24px_rgba(0,0,0,0.02)] max-w-sm">
              <p className="text-[10px] font-semibold tracking-wider text-[#9aa0a6] uppercase mb-4">
                UMA CONVERSA. TODAS AS POSSIBILIDADES.
              </p>
              <div className="mb-5">
                <h2 className="text-base font-semibold text-[#141718] leading-tight">Sofia Martins</h2>
                <p className="text-xs text-[#9aa0a6] mt-0.5">WhatsApp · Agora</p>
              </div>
              <div className="space-y-3">
                <div className="bg-[#f3f4f6] text-[#202124] text-xs sm:text-[13px] py-3 px-4 rounded-2xl max-w-[85%] rounded-tl-sm leading-relaxed">
                  Olá! Podemos conhecer melhor a OZOU?
                </div>
                <div className="flex justify-end">
                  <div className="bg-[#e4eccf] text-[#1b2210] text-xs sm:text-[13px] py-2.5 px-4 rounded-2xl max-w-[88%] rounded-br-sm flex items-center justify-between gap-2 shadow-sm">
                    <span>Claro, Sofia. Vamos simplificar o seu dia.</span>
                    <span className="text-[11px] text-[#486326] flex items-center shrink-0 select-none font-medium ml-1">
                      ✓✓
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <footer className="pt-4">
            <h3 className="text-base font-semibold text-[#141718]">Menos tarefas. Mais relações.</h3>
            <p className="text-sm text-[#737a80] mt-1">O essencial, com espaço para crescer.</p>
          </footer>
        </aside>

        <section className="w-full lg:w-[58%] xl:w-[60%] flex flex-col justify-between p-6 sm:p-10 lg:p-14">
          <div>
            <Link
              href="/"
              className="inline-flex items-center text-sm font-medium text-[#5f6368] hover:text-[#141718] transition-colors gap-2"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 19l-7-7m0 0l7-7m-7 7h18" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Voltar à OZOU
            </Link>
          </div>

          <div className="w-full max-w-md mx-auto my-auto py-12">
            <div className="mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#141718]">Vamos recuperar o acesso.</h2>
              <p className="text-sm sm:text-base text-[#666d73] mt-3 font-normal">
                Enviamos um link para criar uma nova palavra-passe.
              </p>
            </div>
            <BoundForm intent="recover" className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#444746] mb-2" htmlFor="email">
                  E-mail da conta
                </label>
                <input
                  autoComplete="email"
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-white text-sm text-[#141718] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all shadow-sm"
                  id="email"
                  name="email"
                  required
                  type="email"
                  defaultValue="mariana@studio.ao"
                />
              </div>
              <div className="pt-2">
                <button
                  className="w-full bg-[#17191b] hover:bg-black text-white font-medium py-3.5 px-6 rounded-full text-sm transition-all duration-200 shadow hover:shadow-md active:scale-[0.99] text-center"
                  type="submit"
                >
                  Enviar link de recuperação
                </button>
              </div>
              <div>
                <Link
                  href="/entrar"
                  className="w-full inline-block bg-white hover:bg-gray-50 text-[#141718] font-medium py-3.5 px-6 rounded-full text-sm border border-gray-200 transition-all duration-200 active:scale-[0.99] text-center"
                >
                  Voltar para entrar
                </Link>
              </div>
            </BoundForm>
            <p className="text-xs text-[#80868b] mt-8 text-left font-normal">
              Por segurança, o link expira em 30 minutos.
            </p>
          </div>

          <footer className="flex items-center justify-between text-xs text-[#70757a] pt-8 border-t border-transparent">
            <div>© 2026 OZOU</div>
            <span>Português</span>
          </footer>
        </section>
      </main>
    </div>
  );
}
