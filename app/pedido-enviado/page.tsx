import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "OZOU — Pedido enviado",
};

export default function PedidoEnviadoPage() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4 antialiased selection:bg-neutral-200">
      <main aria-describedby="pedido-description" aria-labelledby="pedido-title" className="w-full max-w-[480px] bg-white rounded-[28px] border border-gray-200/90 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.06)] p-7 sm:p-8 flex flex-col justify-between" role="dialog">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <svg aria-hidden="true" className="w-6 h-6 text-neutral-900 shrink-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.2" viewBox="0 0 24 24">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <h1 className="text-[25px] sm:text-[26px] font-bold tracking-tight text-neutral-900 leading-none" id="pedido-title">Pedido enviado</h1>
          </div>
          <div className="text-[14.5px] sm:text-[15px] leading-[1.45] text-neutral-500 font-normal space-y-0.5 pt-0.5" id="pedido-description">
            <p>Veja a sua caixa de entrada e siga as instruções.</p>
            <p>Confirme também a pasta de spam.</p>
          </div>
        </div>
        <div className="pt-9">
          <Link href="/nova-palavra-passe" className="w-full py-3.5 px-6 rounded-full bg-[#18191b] hover:bg-black text-white text-[15px] font-medium transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-900 active:scale-[0.99] block text-center">
            Continuar
          </Link>
        </div>
      </main>
    </div>
  );
}
