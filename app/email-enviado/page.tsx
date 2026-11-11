import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "OZOU — E-mail de recuperação enviado",
};

export default function EmailEnviadoPage() {
  return (
    <div className="h-full min-h-screen bg-[#fbfdf9] text-gray-900 flex flex-col justify-between selection:bg-[#a6e838]/30">
      <main className="min-h-screen w-full flex flex-col justify-between p-4 md:p-6 lg:p-7 box-border">
        <div className="flex-1 w-full flex flex-col lg:flex-row gap-8 lg:gap-16 xl:gap-20">
          <section
            aria-label="Informações sobre a OZOU"
            className="w-full lg:w-[46%] xl:w-[44%] bg-[#f2f5ec] rounded-[2rem] p-8 sm:p-10 md:p-14 lg:p-16 flex flex-col justify-between shrink-0"
          >
            <div className="space-y-12">
              <div className="flex items-center gap-1.5">
                <span className="text-3xl font-extrabold tracking-tight text-gray-950 font-sans">OZOU</span>
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#a6e838] mb-1" />
              </div>
              <div className="space-y-6 pt-6">
                <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-gray-950 leading-[1.12]">
                  O seu negócio.
                  <br />
                  Mais próximo.
                </h1>
                <p className="text-base sm:text-lg text-gray-600 font-normal leading-relaxed max-w-sm">
                  Conversas, campanhas e clareza.
                  <br />
                  Um espaço simples para a sua equipa.
                </p>
              </div>
            </div>

            <div className="my-10">
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 max-w-md">
                <div className="mb-5">
                  <span className="block text-[11px] font-semibold tracking-wider text-gray-500 uppercase">
                    Uma conversa. Todas as possibilidades.
                  </span>
                  <h2 className="text-base font-semibold text-gray-900 mt-2">Sofia Martins</h2>
                  <p className="text-xs text-gray-500 mt-0.5">WhatsApp · Agora</p>
                </div>
                <div className="space-y-3.5 text-[13px] leading-relaxed">
                  <div className="flex justify-start">
                    <div className="bg-[#f0f2ee] text-gray-800 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[85%]">
                      Olá! Podemos conhecer melhor a OZOU?
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-[#e4edd4] text-gray-900 rounded-2xl rounded-tr-sm px-4 py-3 max-w-[85%] flex items-end gap-1.5">
                      <span>Claro, Sofia. Vamos simplificar o seu dia.</span>
                      <span className="text-gray-500 text-[11px] tracking-tighter select-none font-medium">✓✓</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <h3 className="text-base font-semibold text-gray-950">Menos tarefas. Mais relações.</h3>
              <p className="text-sm text-gray-500 mt-1">O essencial, com espaço para crescer.</p>
            </div>
          </section>

          <section
            aria-label="Processo de Recuperação"
            className="w-full lg:w-[54%] xl:w-[56%] flex flex-col justify-between pt-2 pb-6 lg:py-6 px-2 sm:px-6 md:px-10"
          >
            <nav aria-label="Navegação de retorno" className="w-full">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm font-normal text-gray-600 hover:text-gray-950 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
                Voltar à OZOU
              </Link>
            </nav>

            <div className="my-auto py-12 lg:py-0 w-full max-w-[440px]">
              <div className="mb-7">
                <h2 className="text-3xl sm:text-[2.15rem] font-bold tracking-tight text-gray-950">
                  Veja a sua caixa de entrada.
                </h2>
                <p className="text-sm sm:text-[15px] text-gray-600 mt-3 leading-normal">
                  Se existir uma conta associada, receberá um link de recuperação.
                </p>
              </div>

              <div className="bg-[#f0f4eb] rounded-2xl p-6 sm:p-7 mb-7">
                <h3 className="text-base font-bold text-gray-950">Pedido recebido.</h3>
                <p className="text-[13px] leading-relaxed text-gray-600 mt-3">
                  Procure uma mensagem da OZOU, incluindo no spam.
                  <br />
                  Por segurança, não confirmamos se o e-mail existe.
                </p>
              </div>

              <div className="space-y-3">
                <Link
                  href="/nova-palavra-passe"
                  className="w-full h-12 bg-[#171717] hover:bg-black text-white text-sm font-medium rounded-full flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-sm"
                >
                  <span>Continuar recuperação</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </Link>
                <button
                  className="w-full h-12 bg-white hover:bg-gray-50 text-gray-900 text-sm font-medium rounded-full border border-gray-200 flex items-center justify-center transition-colors cursor-pointer"
                  type="button"
                >
                  Reenviar link
                </button>
                <Link
                  href="/entrar"
                  className="w-full h-12 bg-white hover:bg-gray-50 text-gray-900 text-sm font-medium rounded-full border border-gray-200 flex items-center justify-center transition-colors cursor-pointer"
                >
                  Voltar para entrar
                </Link>
              </div>

              <p className="text-[11px] sm:text-xs text-gray-500 mt-5 leading-normal">
                Percurso demonstrativo: a ligação representa o e-mail recebido.
              </p>
            </div>

            <footer className="w-full flex items-center justify-between text-xs text-gray-500 pt-6">
              <div>
                <span>© 2026 OZOU</span>
              </div>
              <span>Português</span>
            </footer>
          </section>
        </div>
      </main>
    </div>
  );
}
