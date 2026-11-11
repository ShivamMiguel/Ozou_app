import type { Metadata } from "next";
import Link from "next/link";
import { OtpInputs } from "@/components/otp-inputs";
import { BoundForm } from "@/components/live/actions";

export const metadata: Metadata = {
  title: "OZOU — Verificar e-mail",
};

export default function VerificarEmailPage() {
  return (
    <div className="min-h-full bg-[#fbfdf9] text-gray-900 m-0 p-3 lg:p-4 box-border">
      <div className="min-h-full w-full flex flex-col lg:flex-row gap-6 lg:gap-8 justify-between">
        <aside
          aria-label="Apresentação do Produto"
          className="w-full lg:w-[46%] xl:w-[44%] bg-[#f1f6ed] rounded-[28px] p-8 md:p-12 lg:p-14 flex flex-col justify-between shrink-0 shadow-sm"
        >
          <div>
            <div className="flex items-center gap-1.5 mb-14 lg:mb-20">
              <span className="text-[26px] font-extrabold tracking-tight text-[#171a1d]">OZOU</span>
              <span className="w-[7px] h-[7px] rounded-full bg-[#9ee229] mb-3" />
            </div>
            <div className="space-y-2 mb-6">
              <h1 className="text-4xl md:text-5xl lg:text-[54px] font-extrabold text-[#171a1d] leading-[1.12] tracking-tight">
                O seu negócio.
                <br />
                Mais próximo.
              </h1>
            </div>
            <p className="text-[#647167] text-[16.5px] leading-relaxed max-w-sm mb-12">
              Conversas, campanhas e clareza.
              <br />
              Um espaço simples para a sua equipa.
            </p>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-emerald-950/[0.03] max-w-[420px]">
              <p className="text-[10px] font-semibold text-[#838c83] uppercase tracking-wider mb-3">
                UMA CONVERSA. TODAS AS POSSIBILIDADES.
              </p>
              <div className="mb-4">
                <h4 className="text-[14.5px] font-bold text-[#1a1f1b]">Sofia Martins</h4>
                <p className="text-[11px] text-[#8e988f]">WhatsApp · Agora</p>
              </div>
              <div className="bg-[#f4f4f4] rounded-2xl rounded-tl-sm px-4 py-2.5 mb-2.5 max-w-[85%]">
                <p className="text-[12.5px] text-[#2c332e] leading-snug">Olá! Podemos conhecer melhor a OZOU?</p>
              </div>
              <div className="flex justify-end">
                <div className="bg-[#e4eccf] text-[#2c3823] rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-[85%] flex items-center gap-1.5">
                  <span className="text-[12px] leading-snug">Claro, Sofia. Vamos simplificar o seu dia.</span>
                  <span className="text-[11px] text-[#4f603c] font-medium select-none ml-0.5">✓✓</span>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-14 lg:pt-16">
            <h3 className="text-[17px] font-bold text-[#171a1d] mb-1">Menos tarefas. Mais relações.</h3>
            <p className="text-[13.5px] text-[#6f7a70]">O essencial, com espaço para crescer.</p>
          </div>
        </aside>

        <main className="w-full lg:w-[54%] xl:w-[56%] flex flex-col justify-between px-4 sm:px-10 lg:px-16 xl:px-20 py-6 lg:py-10">
          <header className="w-full">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[13.5px] font-medium text-[#505753] hover:text-black transition-colors"
            >
              <span className="text-sm font-normal">←</span> Voltar à OZOU
            </Link>
          </header>

          <div className="w-full max-w-[440px] my-auto py-10 lg:py-8 self-start">
            <h2 className="text-3xl lg:text-[38px] font-extrabold text-[#15181a] tracking-tight mb-3">
              Confirme o seu e-mail.
            </h2>
            <p className="text-[14.5px] text-[#606963] mb-8 leading-normal">
              Enviámos um código para <span className="text-[#4c544e]">mariana@studio.ao</span>.
            </p>

            <BoundForm intent="confirm-email">
              <label className="block text-[11px] font-semibold tracking-wider text-[#636b64] uppercase mb-3">
                CÓDIGO DE VERIFICAÇÃO
              </label>
              <OtpInputs />
              <p className="text-[12.5px] text-[#6d766e] mb-8">O código expira em 10 minutos.</p>
              <button
                className="w-full h-[50px] bg-[#1a1c1e] hover:bg-black text-white text-[13.5px] font-semibold rounded-full flex items-center justify-center gap-2 transition-colors mb-3.5 shadow-sm"
                type="submit"
              >
                Confirmar e continuar <span className="text-sm font-normal">→</span>
              </button>
              <button
                className="w-full h-[50px] bg-white hover:bg-gray-50 text-[#1a1c1e] border border-[#e2e5e1] text-[13.5px] font-semibold rounded-full flex items-center justify-center transition-colors mb-8 shadow-xs"
                type="button"
              >
                Reenviar código
              </button>
              <div className="pt-1">
                <p className="text-[12.5px] text-[#6d766e] mb-3">E-mail errado? Pode voltar e corrigir o registo.</p>
                <Link
                  href="/criar-conta"
                  className="w-full h-[50px] bg-white hover:bg-gray-50 text-[#1a1c1e] border border-[#e2e5e1] text-[13.5px] font-semibold rounded-full flex items-center justify-center transition-colors shadow-xs"
                >
                  Corrigir e-mail
                </Link>
              </div>
            </BoundForm>
          </div>

          <footer className="w-full flex items-center justify-between text-[12.5px] text-[#677068] pt-6">
            <div>© 2026 OZOU</div>
            <span>Português</span>
          </footer>
        </main>
      </div>
    </div>
  );
}
