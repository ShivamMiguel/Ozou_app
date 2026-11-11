import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "OZOU — Alterações guardadas",
};

export default function AlteracoesGuardadasPage() {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4 antialiased selection:bg-neutral-800 selection:text-white font-sans">
      <main className="w-full flex items-center justify-center">
        <section
          aria-labelledby="saved-modal-title"
          aria-modal="true"
          className="w-full max-w-[480px] bg-white pt-8 pb-7 px-7 shadow-sm transition-all"
          role="dialog"
          style={{ borderRadius: 28, border: "1px solid rgba(0, 0, 0, 0.08)" }}
        >
          <div className="flex items-center gap-3.5 mb-5">
            <svg aria-hidden="true" className="w-6 h-6 text-neutral-950 flex-shrink-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <h1 className="text-[25px] font-bold text-neutral-900 tracking-tight leading-none" id="saved-modal-title">
              Alterações guardadas
            </h1>
          </div>
          <div className="mb-8">
            <p className="text-[15.5px] leading-[1.45] text-neutral-500 font-normal">
              Pode continuar. Os dados deste percurso
              <br className="hidden sm:inline" /> ficaram atualizados na demonstração.
            </p>
          </div>
          <Link
            href="/empresas/studio-workspace"
            aria-label="Continuar"
            className="block w-full bg-[#161616] hover:bg-black active:scale-[0.99] text-white text-[15px] font-medium py-3.5 px-6 rounded-full transition-all duration-150 ease-in-out text-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-900"
          >
            Continuar
          </Link>
        </section>
      </main>
    </div>
  );
}
