import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import { BoundForm, GoogleSignIn } from "@/components/live/actions";

export const metadata: Metadata = {
  title: "OZOU — Entrar",
};

const jakartaScope = {
  "--font-sans": 'var(--font-jakarta), "Plus Jakarta Sans", sans-serif',
  fontFamily: 'var(--font-jakarta), "Plus Jakarta Sans", sans-serif',
  letterSpacing: "-0.01em",
} as CSSProperties;

export default function EntrarPage() {
  return (
    <div
      className="min-h-screen bg-[#fbfcf9] text-[#18191b] antialiased selection:bg-[#d9ecaa]"
      style={jakartaScope}
    >
      <main className="min-h-screen flex flex-col lg:flex-row p-4 lg:p-6 gap-6 justify-between max-w-[1700px] mx-auto">
        <section className="w-full lg:w-[46%] xl:w-[43%] bg-[#f3f6ee] rounded-[32px] p-8 md:p-12 xl:p-14 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-16 xl:mb-20">
              <span className="text-2xl font-bold tracking-tight text-[#18191b]">OZOU</span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#a9e436] inline-block mb-1" />
            </div>
            <h1 className="text-4xl md:text-5xl xl:text-[54px] font-bold tracking-tight text-[#18191b] leading-[1.12] mb-6">
              O seu negócio.
              <br />
              Mais próximo.
            </h1>
            <p className="text-base md:text-lg text-[#6a7169] font-normal leading-relaxed max-w-sm mb-12">
              Conversas, campanhas e clareza.
              <br />
              Um espaço simples para a sua equipa.
            </p>
          </div>

          <div className="my-auto py-4">
            <div className="bg-white rounded-2xl p-6 md:p-7 shadow-[0_4px_24px_rgba(0,0,0,0.02)] max-w-md w-full border border-black/[0.03]">
              <p className="text-[10px] tracking-wider font-semibold text-[#838c82] uppercase mb-4">
                UMA CONVERSA. TODAS AS POSSIBILIDADES.
              </p>
              <div className="mb-5">
                <h3 className="text-base font-bold text-[#18191b] leading-tight">Sofia Martins</h3>
                <span className="text-xs text-[#7e877c] font-normal">WhatsApp · Agora</span>
              </div>
              <div className="mb-4">
                <div className="inline-block bg-[#f3f4f1] text-[#2c322a] text-sm py-3 px-4 rounded-2xl max-w-[85%] font-medium">
                  Olá! Podemos conhecer melhor a OZOU?
                </div>
              </div>
              <div className="flex justify-end">
                <div className="bg-[#e4edd4] text-[#24331e] text-xs md:text-[13px] py-2.5 px-4 rounded-2xl max-w-[90%] font-medium flex items-center gap-1.5 shadow-sm">
                  <span>Claro, Sofia. Vamos simplificar o seu dia.</span>
                  <svg
                    className="w-3.5 h-3.5 inline-block text-[#3f5d2b] flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.5 12.75l6 6 9-13.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8">
            <h4 className="text-lg font-bold text-[#18191b] mb-1">Menos tarefas. Mais relações.</h4>
            <p className="text-sm text-[#747b72] font-normal">O essencial, com espaço para crescer.</p>
          </div>
        </section>

        <section className="w-full lg:w-[54%] xl:w-[57%] flex flex-col justify-between py-4 px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="w-full mb-10 lg:mb-0">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#565c54] hover:text-black transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Voltar à OZOU
            </Link>
          </div>

          <div className="max-w-[420px] w-full mx-auto my-auto py-10">
            <header className="mb-8">
              <h2 className="text-3xl sm:text-[34px] font-bold text-[#18191b] tracking-tight mb-2">
                Bem-vinda de volta.
              </h2>
              <p className="text-sm sm:text-base text-[#6f756d]">Entre para continuar as suas conversas.</p>
            </header>

            <div className="mb-6">
              <GoogleSignIn className="w-full py-3.5 px-6 rounded-full border border-[#e1e4dc] bg-white hover:bg-neutral-50 font-medium text-sm text-[#18191b] transition-all flex items-center justify-center gap-2 shadow-sm">
                Continuar com Google
              </GoogleSignIn>
            </div>

            <div className="relative flex items-center justify-center mb-6">
              <span className="text-xs text-[#8c9489] bg-[#fbfcf9] px-3 font-normal">ou com o seu e-mail</span>
            </div>

            <BoundForm intent="sign-in" className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#18191b] mb-1.5" htmlFor="email">
                  E-mail profissional
                </label>
                <input
                  className="w-full px-4 py-3 bg-white rounded-xl border border-[#dfe3da] text-sm text-[#18191b] focus:ring-2 focus:ring-black focus:border-black outline-none transition"
                  id="email"
                  name="email"
                  type="email"
                  defaultValue="mariana@studio.ao"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#18191b] mb-1.5" htmlFor="password">
                  Palavra-passe
                </label>
                <input
                  className="w-full px-4 py-3 bg-white rounded-xl border border-[#dfe3da] text-sm text-[#18191b] tracking-widest focus:ring-2 focus:ring-black focus:border-black outline-none transition"
                  id="password"
                  name="password"
                  type="password"
                  defaultValue="secretpassword"
                />
              </div>
              <div className="flex items-center justify-between pt-1 pb-4">
                <span className="text-xs text-[#70776e]">Manter sessão iniciada</span>
                <Link
                  href="/recuperar"
                  className="text-xs font-medium text-[#18191b] bg-white border border-[#e2e5dc] rounded-full px-4 py-2 hover:bg-neutral-50 transition shadow-sm"
                >
                  Esqueceu a palavra-passe?
                </Link>
              </div>
              <button
                className="w-full py-3.5 px-6 rounded-full bg-[#18191b] hover:bg-[#2c2d30] text-white font-medium text-sm transition-all flex items-center justify-center gap-2 group shadow-sm"
                type="submit"
              >
                <span>Entrar na OZOU</span>
                <span className="group-hover:translate-x-0.5 transition-transform">→</span>
              </button>
              <Link
                href="/criar-conta"
                className="w-full py-3.5 px-6 rounded-full bg-white border border-[#e1e4dc] hover:bg-neutral-50 text-sm font-medium text-[#18191b] transition-all shadow-sm flex items-center justify-center"
              >
                Ainda não tem conta? Criar conta
              </Link>
            </BoundForm>

            <div className="mt-8 text-left">
              <Link
                href="/recuperar"
                className="text-xs text-[#6e756c] hover:text-black transition-colors font-medium"
              >
                Não consigo entrar
              </Link>
            </div>
          </div>

          <footer className="w-full flex items-center justify-between text-xs text-[#8c9489] pt-8 border-t border-[#edf0e7] lg:border-none">
            <div>© 2026 OZOU</div>
            <span>Português</span>
          </footer>
        </section>
      </main>
    </div>
  );
}
