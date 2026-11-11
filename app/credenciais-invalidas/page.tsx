import type { Metadata } from "next";
import Link from "next/link";
import { BoundForm, GoogleSignIn } from "@/components/live/actions";

export const metadata: Metadata = {
  title: "OZOU — Credenciais inválidas",
};

export default function CredenciaisInvalidasPage() {
  return (
    <div className="bg-white text-zinc-900 min-h-screen flex flex-col p-4 md:p-6 lg:p-8">
      <main className="flex-1 w-full max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        <section className="lg:col-span-5 bg-[#f3f6ee] rounded-[32px] p-8 md:p-12 lg:p-16 flex flex-col justify-between">
          <div>
            <div className="flex items-center space-x-1.5 mb-14 md:mb-20">
              <span className="text-2xl md:text-3xl font-black tracking-tight text-zinc-900">OZOU</span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#bef264] inline-block translate-y-[-4px]" />
            </div>
            <h1 className="text-4xl md:text-[52px] font-extrabold text-zinc-900 tracking-tight leading-[1.08] mb-8">
              O seu negócio.
              <br />
              Mais próximo.
            </h1>
            <p className="text-zinc-600 text-base md:text-lg leading-relaxed max-w-sm">
              Conversas, campanhas e clareza.
              <br />
              Um espaço simples para a sua equipa.
            </p>
          </div>

          <div className="my-12 md:my-14">
            <div className="bg-white rounded-[24px] p-6 shadow-sm border border-zinc-100/60 max-w-md">
              <p className="text-[11px] font-semibold text-zinc-400 tracking-wider uppercase mb-5">
                Uma conversa. Todas as possibilidades.
              </p>
              <div className="mb-4">
                <h4 className="font-bold text-zinc-900 text-[15px]">Sofia Martins</h4>
                <p className="text-xs text-zinc-400 mt-0.5">WhatsApp · Agora</p>
              </div>
              <div className="bg-[#f4f4f2] text-zinc-800 text-sm px-4 py-3 rounded-2xl rounded-tl-sm w-fit max-w-[85%] mb-3 leading-snug">
                Olá! Podemos conhecer melhor a OZOU?
              </div>
              <div className="flex justify-end">
                <div className="bg-[#e2ebd5] text-zinc-800 text-xs md:text-sm px-4 py-2.5 rounded-2xl rounded-tr-sm flex items-center space-x-1">
                  <span>Claro, Sofia. Vamos simplificar o seu dia.</span>
                  <span className="text-zinc-500 font-sans tracking-tighter text-[11px] ml-1">✓✓</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-zinc-900 text-lg mb-1">Menos tarefas. Mais relações.</h3>
            <p className="text-zinc-500 text-sm">O essencial, com espaço para crescer.</p>
          </div>
        </section>

        <section className="lg:col-span-7 flex flex-col justify-between px-4 sm:px-8 md:px-12 lg:px-16 pt-2 pb-4">
          <header className="w-full flex justify-start mb-8 md:mb-12">
            <Link
              href="/"
              className="inline-flex items-center text-xs md:text-sm text-zinc-500 hover:text-zinc-800 font-medium transition-colors"
            >
              <span className="mr-2">←</span> Voltar à OZOU
            </Link>
          </header>

          <div className="w-full max-w-[440px] mx-auto my-auto py-4">
            <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 tracking-tight mb-2.5">
              Vamos tentar outra vez.
            </h2>
            <p className="text-zinc-500 text-sm md:text-base mb-8">Entre para continuar as suas conversas.</p>

            <div className="mb-6">
              <GoogleSignIn className="w-full py-3 px-4 border border-zinc-200 hover:border-zinc-300 rounded-full text-xs md:text-sm font-medium text-zinc-700 hover:bg-zinc-50 transition shadow-sm text-center">
                Continuar com Google
              </GoogleSignIn>
            </div>

            <div className="relative flex items-center justify-center mb-6">
              <span className="text-xs text-zinc-400 bg-white px-3 font-normal">ou com o seu e-mail</span>
            </div>

            <BoundForm intent="sign-in" className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-zinc-800 mb-1.5" htmlFor="email">
                  E-mail profissional
                </label>
                <input
                  className="w-full px-4 py-3 rounded-2xl border text-sm text-zinc-800 border-[#d87265] focus:ring-1 focus:ring-[#d87265] focus:outline-none"
                  id="email"
                  name="email"
                  type="email"
                  defaultValue="mariana@studio.ao"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-zinc-800 mb-1.5" htmlFor="password">
                  Palavra-passe
                </label>
                <input
                  className="w-full px-4 py-3 rounded-2xl border text-base tracking-widest text-zinc-800 border-[#d87265] focus:ring-1 focus:ring-[#d87265] focus:outline-none"
                  id="password"
                  name="password"
                  type="password"
                  defaultValue="secretpassword"
                />
              </div>
              <div className="flex items-center justify-between pt-1 pb-2">
                <span className="text-xs text-zinc-500 font-normal">Manter sessão iniciada</span>
                <Link
                  href="/recuperar"
                  className="px-3.5 py-1.5 rounded-full border border-zinc-200 text-xs font-medium text-zinc-800 hover:bg-zinc-50 transition"
                >
                  Esqueceu a palavra-passe?
                </Link>
              </div>
              <div className="bg-[#fdf2f0] rounded-xl p-3.5 border border-red-100" role="alert">
                <p className="text-xs text-[#ba4a3c] leading-relaxed">
                  E-mail ou palavra-passe incorretos.
                  <br />
                  Confirme os dados ou recupere o acesso.
                </p>
              </div>
              <div className="space-y-3 pt-2">
                <button
                  className="w-full py-3.5 px-6 rounded-full bg-[#1a1c1e] hover:bg-zinc-800 text-white font-medium text-sm flex items-center justify-center space-x-1.5 transition"
                  type="submit"
                >
                  <span>Entrar na OZOU</span>
                  <span>→</span>
                </button>
                <Link
                  href="/criar-conta"
                  className="block w-full py-3.5 px-6 rounded-full border border-zinc-200 hover:border-zinc-300 text-zinc-800 font-medium text-sm transition text-center"
                >
                  Ainda não tem conta? Criar conta
                </Link>
              </div>
            </BoundForm>
          </div>

          <footer className="w-full flex items-center justify-between text-xs text-zinc-400 pt-8">
            <div>© 2026 OZOU</div>
            <span>Português</span>
          </footer>
        </section>
      </main>
    </div>
  );
}
