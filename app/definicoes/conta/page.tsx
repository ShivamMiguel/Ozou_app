import type { Metadata } from "next";
import { SaveProfileButton, SignOutButton } from "@/components/live/actions";
import { WalletPanel } from "@/components/live/wallet";
import Link from "next/link";

export const metadata: Metadata = {
  title: "OZOU — Definições — Conta e carteira",
};

function Icon({ d, className }: { d: string; className: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path d={d} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const nav = [
  ["/automacao-campanhas", "Automação & campanhas", "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"],
  ["/insights", "Insights & métricas", "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"],
  ["/contactos", "Contactos", "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"],
  ["/inicio", "Início", "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"],
  ["/empresas", "Empresas", "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"],
] as const;

export default function ContaPlanoPage() {
  return (
    <div className="bg-[#fafafa] text-[#111827] min-h-screen flex antialiased">
      <aside className="w-[230px] flex-shrink-0 bg-white border-r border-[#f0f0f2] flex flex-col justify-between h-screen sticky top-0 px-4 py-5 z-20 select-none">
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5 px-2 mb-6">
            <Link href="/" className="text-[21px] font-black tracking-tight text-black">
              OZOU
            </Link>
            <span className="w-[5px] h-[5px] rounded-full bg-[#a3e635] mt-1" />
          </div>
          <button className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-[#f7f8f9] text-left hover:bg-[#f0f1f3] transition mb-7" type="button">
            <div>
              <div className="text-[13px] font-semibold text-gray-900 leading-tight">Studio Workspace</div>
              <div className="text-[11px] text-gray-400 font-normal leading-tight mt-0.5">Plano Pro</div>
            </div>
            <svg className="w-3.5 h-3.5 text-gray-500 stroke-[2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div className="px-2 mb-3">
            <span className="text-[10px] tracking-wider uppercase font-semibold text-gray-400">Espaço de trabalho</span>
          </div>
          <nav className="space-y-1">
            <Link className="flex items-center justify-between px-2.5 py-2 rounded-lg text-gray-600 hover:bg-gray-50 hover:text-gray-900" href="/inbox">
              <div className="flex items-center gap-3">
                <Icon className="w-4 h-4 text-gray-500 stroke-[1.75]" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                <span className="text-[13px] font-medium leading-none">Inbox unificado</span>
              </div>
              <span className="bg-[#f2f4f7] text-gray-600 text-[11px] font-semibold px-1.5 py-0.5 rounded leading-none">12</span>
            </Link>
            {nav.map(([href, label, d]) => (
              <Link key={href} className="flex items-center gap-3 px-2.5 py-2 rounded-lg text-gray-600 hover:bg-gray-50 hover:text-gray-900" href={href}>
                <Icon className="w-4 h-4 text-gray-500 stroke-[1.75]" d={d} />
                <span className="text-[13px] font-medium leading-none">{label}</span>
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-col gap-3">
          <div className="bg-[#f3f4ed] rounded-xl p-3.5 relative">
            <div className="w-5 h-5 flex items-center justify-center text-gray-800 mb-2">
              <Icon className="w-4 h-4 stroke-[2]" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </div>
            <p className="text-[13px] font-semibold leading-tight text-gray-900 mb-2.5">
              Menos tarefas.
              <br />
              Mais conversas.
            </p>
            <a className="inline-flex items-center text-[11px] text-gray-500 hover:text-gray-800 transition font-normal gap-1" href="#">
              A IA trata do resto.
              <span className="text-[10px]">↗</span>
            </a>
          </div>
          <div className="space-y-0.5 pt-1">
            <Link className="flex items-center gap-3 px-2.5 py-1.5 rounded-lg text-gray-600 hover:bg-gray-50 hover:text-gray-900" href="/ajuda">
              <Icon className="w-4 h-4 text-gray-500 stroke-[1.75]" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              <span className="text-[12.5px] font-medium leading-none">Ajuda e suporte</span>
            </Link>
            <Link className="flex items-center gap-3 px-2.5 py-1.5 rounded-lg text-gray-600 hover:bg-gray-50 hover:text-gray-900" href="/definicoes/conta">
              <svg className="w-4 h-4 text-gray-500 stroke-[1.75]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-[12.5px] font-medium leading-none">Definições</span>
            </Link>
          </div>
          <div className="h-px bg-gray-100 my-0.5" />
          <button className="w-full flex items-center justify-between px-2 py-1 hover:bg-gray-50 rounded-lg text-left transition" type="button">
            <div>
              <div className="text-[13px] font-semibold text-gray-900 leading-tight">Mariana Costa</div>
              <div className="text-[11px] text-gray-400 font-normal leading-tight mt-0.5">Administradora</div>
            </div>
            <svg className="w-3.5 h-3.5 text-gray-400 stroke-[2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </aside>

      <main className="flex-1 overflow-y-auto">
        <header className="pt-6 pb-5 px-10 border-b border-[#f1f2f4] bg-white">
          <div className="flex items-center justify-between mb-2">
            <div className="text-[12px] text-gray-400 font-medium">
              Workspace <span className="text-gray-300 mx-1">/</span> Definições — Conta e carteira
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f1f3ed] text-[#3c5e37] text-[12px] font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#527d49]" />
              <span>4 canais conectados</span>
            </div>
          </div>
          <div>
            <h1 className="text-[25px] font-bold text-gray-900 tracking-tight leading-snug">Definições — Conta e carteira</h1>
            <p className="text-[13px] text-gray-400 font-normal mt-0.5">O essencial para gerir o seu negócio.</p>
          </div>
        </header>
        <div className="px-10 py-7 max-w-[1240px]">
          <div className="flex items-center gap-2 mb-8">
            <Link href="/definicoes/canais" className="px-6 py-2 rounded-full border border-gray-200 bg-white text-[13px] font-medium text-gray-700 hover:border-gray-300 transition">
              Canais
            </Link>
            <Link href="/definicoes/equipa" className="px-6 py-2 rounded-full border border-gray-200 bg-white text-[13px] font-medium text-gray-700 hover:border-gray-300 transition">
              Equipa
            </Link>
            <span className="px-6 py-2 rounded-full bg-[#181a1e] text-[13px] font-medium text-white shadow-sm">Conta e plano</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch mb-6">
            <section className="lg:col-span-2 bg-white rounded-2xl border border-[#eceef0] p-8 flex flex-col justify-between">
              <div>
                <h2 className="text-[20px] font-bold text-gray-900 tracking-tight mb-6">A sua conta</h2>
                <div className="space-y-4 max-w-full">
                  <div>
                    <label className="block text-[11px] font-medium text-gray-500 mb-1.5" htmlFor="conta-name">
                      Nome
                    </label>
                    <input className="w-full h-11 px-3.5 rounded-lg border border-[#e2e4e8] text-[13px] text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gray-900 focus:ring-0 transition" id="conta-name" type="text" defaultValue="Mariana Costa" />
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium text-gray-500 mb-1.5" htmlFor="conta-email">
                      E-mail
                    </label>
                    <input className="w-full h-11 px-3.5 rounded-lg border border-[#e2e4e8] text-[13px] text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gray-900 focus:ring-0 transition" id="conta-email" type="email" defaultValue="mariana@studio.ao" />
                  </div>
                </div>
                <div className="mt-8">
                  <h3 className="text-[14px] font-bold text-gray-900 tracking-tight mb-1.5">Segurança</h3>
                  <p className="text-[12px] text-gray-400 font-normal mb-3.5">Última atualização da palavra-passe: hoje.</p>
                  <Link href="/nova-palavra-passe" className="inline-block px-5 py-2 rounded-full border border-gray-200 bg-white text-[12.5px] font-medium text-gray-800 hover:bg-gray-50 hover:border-gray-300 transition">
                    Alterar palavra-passe
                  </Link>
                </div>
              </div>
              <div className="flex justify-end pt-8 mt-4">
                <SaveProfileButton className="px-7 py-2.5 rounded-full bg-[#181a1e] text-[13px] font-medium text-white hover:bg-black transition shadow-sm">
                  Guardar perfil
                </SaveProfileButton>
              </div>
            </section>
            <WalletPanel />
          </div>
          <section className="bg-white rounded-2xl border border-[#eceef0] p-8">
            <h2 className="text-[19px] font-bold text-gray-900 tracking-tight mb-1.5">Sessão e privacidade</h2>
            <p className="text-[12.5px] text-gray-400 font-normal mb-6">Consulte os termos, as políticas de dados e termine a sessão neste dispositivo.</p>
            <div className="flex items-center justify-between">
              <Link href="/termos" className="px-6 py-2 rounded-full border border-gray-200 bg-white text-[12.5px] font-medium text-gray-800 hover:bg-gray-50 hover:border-gray-300 transition">
                Termos e privacidade
              </Link>
              <SignOutButton className="px-6 py-2 rounded-full border border-gray-200 bg-white text-[12.5px] font-medium text-gray-800 hover:bg-gray-50 hover:border-gray-300 transition">
                Terminar sessão
              </SignOutButton>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
