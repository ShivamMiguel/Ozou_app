import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "OZOU — Termos e privacidade",
};

const terms = [
  ["01 · A sua conta", "Mantenha as credenciais seguras. O administrador gere os acessos da empresa e as permissões da equipa."],
  ["02 · Comunicações responsáveis", "Envie mensagens apenas a contactos com base legal adequada. Respeite os pedidos de oposição e de cancelamento."],
  ["03 · Dados e controlo", "A interface prevê exportação e eliminação de dados. Pedidos e políticas de retenção devem ser definidos antes do lançamento."],
  ["04 · Assistência de IA", "As sugestões de IA precisam de revisão humana. Não partilhe dados sensíveis desnecessários nas mensagens."],
  ["05 · Planos e cancelamento", "Preços, limites e condições de faturação são apresentados antes da contratação. O teste não pede cartão."],
];

export default function TermosPage() {
  return (
    <div className="min-h-screen text-[#111827] flex flex-col justify-between selection:bg-gray-200" style={{ backgroundColor: "#f9faf7" }}>
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20 py-8 lg:py-12 flex-grow flex flex-col justify-between">
        <header className="flex items-center justify-between w-full mb-14 lg:mb-16">
          <Link aria-label="OZOU Página Inicial" className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900 focus:outline-none" href="/">
            OZOU
          </Link>
          <Link className="inline-flex items-center justify-center bg-white border border-gray-200 hover:border-gray-300 text-gray-700 text-sm font-medium rounded-full px-12 py-2.5 transition-all duration-150 shadow-sm hover:shadow" href="/definicoes/conta">
            Voltar
          </Link>
        </header>
        <main className="w-full flex-grow flex flex-col justify-start">
          <section className="mb-10 lg:mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-gray-950 tracking-tight mb-3">Transparência, desde o início.</h1>
            <p className="text-sm sm:text-base text-gray-500 font-normal">Termos e privacidade · Estrutura ilustrativa para revisão jurídica</p>
          </section>
          <section className="space-y-4 sm:space-y-5 w-full mb-16">
            {terms.map(([title, body]) => (
              <article key={title} className="bg-white border border-gray-200/80 rounded-2xl p-6 sm:px-8 sm:py-6 shadow-[0_1px_2px_rgba(0,0,0,0.02)] transition-shadow hover:shadow-sm">
                <h2 className="text-base font-bold text-gray-950 mb-1.5">{title}</h2>
                <p className="text-sm text-gray-500 leading-relaxed font-normal">{body}</p>
              </article>
            ))}
          </section>
        </main>
        <footer className="w-full pt-4 pb-2">
          <p className="text-xs sm:text-[13px] text-gray-400 font-normal">Conteúdo de demonstração. Não substitui termos contratuais ou uma política de privacidade validada.</p>
        </footer>
      </div>
    </div>
  );
}
