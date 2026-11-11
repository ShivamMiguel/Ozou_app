import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "OZOU — Campanhas",
};

const rows = [
  {
    name: "Reativação de leads",
    meta: "Guardada hoje, às 10:30",
    audience: "50 leads sem resposta há 7 dias",
    channels: "WhatsApp + E-mail",
    status: "Rascunho",
    badge: "bg-[#f1f4ea] text-[#3e5127]",
    action: "Continuar",
    href: "/automacao-campanhas/rascunho",
  },
  {
    name: "Boas-vindas de novembro",
    meta: "Campanha concluída",
    audience: "120 novos contactos",
    channels: "WhatsApp",
    status: "Enviada · 5 nov.",
    badge: "bg-[#f3f4f6] text-gray-600",
    action: "Ver insights",
    href: "/insights",
  },
  {
    name: "Novidades de outubro",
    meta: "Campanha concluída",
    audience: "400 clientes",
    channels: "E-mail",
    status: "Enviada · 28 out.",
    badge: "bg-[#f3f4f6] text-gray-600",
    action: "Ver insights",
    href: "/insights",
  },
];

function NavIcon({ d, className }: { d: string; className: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path d={d} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const inbox = "M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4";
const spark = "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z";

export default function CampanhasPage() {
  return (
    <div className="bg-[#fcfcfc] text-[#111827] min-h-screen flex text-[13px] antialiased">
      <aside className="w-[230px] flex-shrink-0 bg-white border-r border-[#ededed] min-h-screen flex flex-col justify-between py-6 px-4">
        <div className="space-y-6">
          <div className="flex items-center gap-1.5 px-2">
            <Link href="/" className="text-2xl font-black tracking-tight text-black">
              OZOU
            </Link>
            <span className="w-1.5 h-1.5 rounded-full bg-[#b4d334] mb-2" />
          </div>
          <div className="bg-[#f8f9fa] rounded-xl p-3 flex items-center justify-between cursor-pointer hover:bg-gray-100 transition-colors">
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-gray-900 leading-tight">Studio Workspace</span>
              <span className="text-[11px] text-gray-400 font-normal">Plano Pro</span>
            </div>
            <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="px-2 pt-1">
            <span className="text-[10px] font-semibold tracking-wider text-gray-400 uppercase">Espaço de trabalho</span>
          </div>
          <nav className="space-y-1">
            <Link className="flex items-center justify-between px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors" href="/inbox">
              <div className="flex items-center gap-3">
                <NavIcon className="w-4 h-4 text-gray-500 stroke-[1.8]" d={inbox} />
                <span className="text-xs font-medium text-gray-700">Inbox unificado</span>
              </div>
              <span className="text-[10px] bg-gray-100 text-gray-600 font-semibold px-1.5 py-0.5 rounded-full">12</span>
            </Link>
            <Link className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-[#1c1c1e] text-white shadow-sm" href="/campanhas">
              <NavIcon className="w-4 h-4 text-white stroke-[1.8]" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
              <span className="text-xs font-medium leading-tight">
                Automação &
                <br />
                campanhas
              </span>
            </Link>
            {[
              ["/insights", "Insights & métricas", "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"],
              ["/contactos", "Contactos", "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"],
              ["/inicio", "Início", "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"],
              ["/empresas", "Empresas", "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"],
            ].map(([href, label, d]) => (
              <Link key={href} className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors" href={href}>
                <NavIcon className="w-4 h-4 text-gray-500 stroke-[1.8]" d={d} />
                <span className="text-xs font-medium text-gray-600">{label}</span>
              </Link>
            ))}
          </nav>
        </div>
        <div className="space-y-4 pt-4">
          <div className="bg-[#f3f7ef] rounded-2xl p-4 border border-[#e6eee0]">
            <NavIcon className="w-4 h-4 text-gray-800 stroke-[2] mb-2" d={spark} />
            <p className="text-[13px] font-bold text-gray-900 leading-snug">
              Menos tarefas.
              <br />
              Mais conversas.
            </p>
            <div className="mt-3 flex items-center gap-1 text-[11px] text-gray-500 font-medium">
              <span>A IA trata do resto.</span>
              <span className="text-xs font-normal">↗</span>
            </div>
          </div>
          <div className="space-y-1">
            <Link className="flex items-center gap-3 px-3 py-1.5 text-gray-600 hover:text-gray-900 transition-colors" href="/ajuda">
              <NavIcon className="w-4 h-4 text-gray-500 stroke-[1.8]" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              <span className="text-xs font-normal text-gray-600">Ajuda e suporte</span>
            </Link>
            <Link className="flex items-center gap-3 px-3 py-1.5 text-gray-600 hover:text-gray-900 transition-colors" href="/definicoes/equipa">
              <NavIcon className="w-4 h-4 text-gray-500 stroke-[1.8]" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              <span className="text-xs font-normal text-gray-600">Definições</span>
            </Link>
          </div>
          <div className="pt-3 border-t border-gray-100 flex items-center justify-between px-1 cursor-pointer">
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-gray-900">Mariana Costa</span>
              <span className="text-[11px] text-gray-400">Administradora</span>
            </div>
            <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </aside>

      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        <header className="border-b border-[#ededed] px-8 py-5 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-1">
              <span>Workspace</span>
              <span className="text-gray-300">/</span>
              <span className="text-gray-600">Campanhas</span>
            </div>
            <h1 className="text-xl font-bold text-gray-900 tracking-tight">Campanhas</h1>
            <p className="text-xs text-gray-500 mt-0.5">O essencial para gerir o seu negócio.</p>
          </div>
          <div className="flex items-center gap-2 bg-[#f0f4ec] text-[#2c3d1f] px-3.5 py-1.5 rounded-full text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-[#7ca742]" />
            <span>4 canais conectados</span>
          </div>
        </header>
        <div className="p-8 space-y-7 max-w-[1200px]">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">Conversas que continuam.</h2>
              <p className="text-xs text-gray-500 mt-1">Planeie, acompanhe e aprenda com cada campanha.</p>
            </div>
            <Link href="/automacao-campanhas/rascunho" className="bg-[#1c1c1e] hover:bg-black text-white text-xs font-semibold px-4 py-2.5 rounded-full flex items-center gap-1.5 transition-all shadow-sm">
              <span className="text-sm font-normal">+</span>
              <span>Nova campanha</span>
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-5">
            {[
              ["1", "rascunho"],
              ["0", "agendadas"],
              ["2", "enviadas"],
            ].map(([value, label]) => (
              <div key={label} className="bg-white border border-[#eaeaea] rounded-2xl p-6 shadow-sm flex flex-col justify-between h-[130px]">
                <span className="text-4xl font-semibold text-gray-900 tracking-tight">{value}</span>
                <span className="text-xs text-gray-500 font-medium">{label}</span>
              </div>
            ))}
          </div>
          <div className="bg-white border border-[#eaeaea] rounded-2xl overflow-hidden shadow-sm">
            <table className="w-full text-left border-collapse" id="campaigns-draft-table">
              <thead>
                <tr className="bg-[#f9fafb] text-[11px] font-medium text-gray-500 border-b border-[#eaeaea]">
                  <th className="py-3 px-6 font-medium">Campanha</th>
                  <th className="py-3 px-6 font-medium">Público / canais</th>
                  <th className="py-3 px-6 font-medium">Estado</th>
                  <th className="py-3 px-6 font-medium text-left">Ação</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f2f2f2]">
                {rows.map((row) => (
                  <tr key={row.name} className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-4 px-6 align-middle">
                      <div className="font-semibold text-gray-900 text-xs">{row.name}</div>
                      <div className="text-[11px] text-gray-400 mt-1">{row.meta}</div>
                    </td>
                    <td className="py-4 px-6 align-middle">
                      <div className="text-xs text-gray-800">{row.audience}</div>
                      <div className="text-[11px] text-gray-400 mt-1">{row.channels}</div>
                    </td>
                    <td className="py-4 px-6 align-middle">
                      <span className={`inline-block text-[11px] font-medium px-3 py-1 rounded-md ${row.badge}`}>{row.status}</span>
                    </td>
                    <td className="py-4 px-6 align-middle">
                      <Link href={row.href} className="border border-gray-200 hover:border-gray-300 text-gray-800 text-xs font-semibold px-4 py-2 rounded-full inline-flex items-center gap-1 transition-all">
                        <span>{row.action}</span>
                        <span className="text-xs">↗</span>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-[#f2f6ee] border border-[#e1ebd9] rounded-2xl p-7 flex items-center justify-between">
            <div className="space-y-1.5 max-w-xl">
              <div className="flex items-center gap-2">
                <NavIcon className="w-4 h-4 text-gray-800 stroke-[2]" d={spark} />
                <h3 className="text-base font-bold text-gray-900 tracking-tight">Há boas conversas à espera de uma segunda oportunidade.</h3>
              </div>
              <p className="text-xs text-gray-500 pl-6">50 leads estão sem resposta há 7 dias. Use uma campanha simples para voltar a falar.</p>
            </div>
            <Link href="/automacao-campanhas/rascunho" className="bg-[#1c1c1e] hover:bg-black text-white text-xs font-semibold px-5 py-2.5 rounded-full flex items-center gap-1 transition-all shadow-sm flex-shrink-0">
              <span>Criar campanha com IA</span>
              <span className="text-xs">↗</span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
