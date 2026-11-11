import type { Metadata } from "next";
import Link from "next/link";
import { BoundForm } from "@/components/live/actions";

export const metadata: Metadata = {
  title: "OZOU — Criar conta",
};

export default function CriarContaPage() {
  return (
    <div className="bg-[#fcfdfc] text-[#191b1d] min-h-screen p-3 md:p-4 flex flex-col justify-between selection:bg-[#b8e635] selection:text-black">
      <div className="flex-1 flex flex-col lg:flex-row w-full rounded-[28px] overflow-hidden gap-6 lg:gap-0">
        <section className="lg:w-[45%] xl:w-[41%] bg-[#f2f5ec] rounded-[24px] p-8 sm:p-12 lg:p-14 flex flex-col justify-between flex-shrink-0">
          <div>
            <div className="flex items-center gap-1.5 mb-14 lg:mb-20">
              <span className="text-[25px] font-extrabold tracking-tight text-[#191b1d]">OZOU</span>
              <span className="w-[7px] h-[7px] rounded-full bg-[#bfeb38] mb-2.5 inline-block" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight leading-[1.08] text-[#191b1d] mb-7">
              O seu negócio.
              <br />
              Mais próximo.
            </h1>
            <p className="text-[17px] text-[#63686d] font-normal leading-relaxed">
              Conversas, campanhas e clareza.
              <br />
              Um espaço simples para a sua equipa.
            </p>
          </div>

          <div className="my-10 lg:my-12">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#eef2e6] max-w-[420px]">
              <p className="text-[10px] font-semibold tracking-wider text-[#9aa0a6] uppercase mb-4">
                Uma conversa. Todas as possibilidades.
              </p>
              <div className="mb-4">
                <h2 className="text-sm font-bold text-[#191b1d]">Sofia Martins</h2>
                <p className="text-xs text-[#9aa0a6]">WhatsApp · Agora</p>
              </div>
              <div className="bg-[#f3f4f3] text-[#2d3135] text-[13px] py-2.5 px-4 rounded-xl rounded-tl-sm w-fit max-w-[85%] mb-3">
                Olá! Podemos conhecer melhor a OZOU?
              </div>
              <div className="flex justify-end">
                <div className="bg-[#e4ecd7] text-[#2d3135] text-[13px] py-2.5 px-4 rounded-xl rounded-tr-sm w-fit flex items-center gap-1.5">
                  <span>Claro, Sofia. Vamos simplificar o seu dia.</span>
                  <span className="text-[11px] text-[#4b5563] font-medium tracking-tighter">✓✓</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-2">
            <h3 className="text-base font-bold text-[#191b1d] mb-1">Menos tarefas. Mais relações.</h3>
            <p className="text-[13.5px] text-[#71767d]">O essencial, com espaço para crescer.</p>
          </div>
        </section>

        <main className="lg:w-[55%] xl:w-[59%] flex flex-col justify-between px-6 sm:px-12 lg:px-20 xl:px-28 py-6 lg:py-10">
          <div>
            <Link
              href="/"
              className="inline-flex items-center text-xs font-medium text-[#646a73] hover:text-black transition-colors"
            >
              <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
              Voltar à OZOU
            </Link>
          </div>

          <div className="max-w-[430px] w-full mx-auto my-auto py-8">
            <div className="mb-8">
              <h2 className="text-3xl sm:text-[34px] font-bold tracking-tight text-[#191b1d] mb-2">
                Mais perto começa aqui.
              </h2>
              <p className="text-[13.5px] text-[#6f757d]">Crie a sua conta. Experimente durante 14 dias.</p>
            </div>

            <BoundForm intent="sign-up" className="space-y-4">
              <div className="space-y-1.5">
                <label className="block text-xs font-medium text-[#2d3135]" htmlFor="fullName">
                  Nome completo
                </label>
                <input
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#191b1d] placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-shadow"
                  id="fullName"
                  name="fullName"
                  type="text"
                  defaultValue="Mariana Costa"
                />
              </div>
              <div className="space-y-1.5">
                <label className="block text-xs font-medium text-[#2d3135]" htmlFor="workEmail">
                  E-mail profissional
                </label>
                <input
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#191b1d] placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-shadow"
                  id="workEmail"
                  name="workEmail"
                  type="email"
                  defaultValue="mariana@studio.ao"
                />
              </div>
              <div className="space-y-1.5">
                <label className="block text-xs font-medium text-[#2d3135]" htmlFor="password">
                  Palavra-passe
                </label>
                <input
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#191b1d] placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-black focus:border-black tracking-widest transition-shadow"
                  id="password"
                  name="password"
                  type="password"
                  defaultValue="password1234"
                />
                <p className="text-[11px] text-[#8e939a] pt-0.5">
                  Pelo menos 12 caracteres, incluindo letras e números.
                </p>
              </div>
              <p className="text-[11px] text-[#71767d] pt-1">
                Ao criar conta, aceita os Termos e a Política de Privacidade.
              </p>
              <div className="space-y-2.5 pt-3">
                <button
                  className="w-full py-3.5 px-6 rounded-full bg-[#1b1c1e] hover:bg-black text-white text-[13px] font-medium transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                  type="submit"
                >
                  <span>Criar conta gratuita</span>
                  <span className="text-sm">→</span>
                </button>
                <Link
                  href="/entrar"
                  className="w-full py-3 px-6 rounded-full bg-white border border-gray-200 hover:border-gray-300 text-[#191b1d] text-[13px] font-medium text-center block transition-colors shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
                >
                  Já tenho conta. Entrar
                </Link>
                <button
                  className="w-full py-3 px-6 rounded-full bg-white border border-gray-200 hover:border-gray-300 text-[#191b1d] text-[13px] font-medium text-center block transition-colors shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
                  type="button"
                >
                  Ler termos e privacidade
                </button>
              </div>
            </BoundForm>
          </div>

          <footer className="flex items-center justify-between text-xs text-[#71767d] pt-6">
            <div>© 2026 OZOU</div>
            <span>Português</span>
          </footer>
        </main>
      </div>
    </div>
  );
}
