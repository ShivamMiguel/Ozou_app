import type { Metadata } from "next";
import Link from "next/link";
import { ImportContactsButton } from "@/components/live/actions";

export const metadata: Metadata = {
  title: "OZOU — Importar contactos",
};

function Icon({ d, className }: { d: string; className: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path d={d} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const nav = [
  ["/insights", "Insights & métricas", "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"],
  ["/inicio", "Início", "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"],
  ["/empresas", "Empresas", "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"],
] as const;

const mapping = [
  ["nome", "Nome completo"],
  ["email", "E-mail"],
  ["telemovel", "Telefone"],
];

export default function ImportarPage() {
  return (
    <div className="bg-[#E3E4E0] text-[#191919] font-sans antialiased min-h-screen overflow-x-hidden relative selection:bg-neutral-800 selection:text-white ozou-importar">
      <style>{`.ozou-importar ::-webkit-scrollbar{width:6px;height:6px}.ozou-importar ::-webkit-scrollbar-thumb{background:rgba(0,0,0,0.15);border-radius:9999px}`}</style>
      <div className="flex min-h-screen w-full select-none">
        <aside className="w-[248px] bg-[#E3E4E0] flex-shrink-0 flex flex-col justify-between p-6 border-r border-[#D8D9D5]">
          <div>
            <div className="flex items-center gap-1.5 mb-8">
              <Link href="/" className="font-extrabold text-2xl tracking-tight text-[#171717]">OZOU</Link>
              <span className="w-2 h-2 rounded-full bg-[#B2D88C] mb-1" />
            </div>
            <div className="bg-[#D9DAD5] bg-opacity-70 rounded-xl p-3 mb-6 flex items-center justify-between cursor-pointer">
              <div>
                <div className="text-[13px] font-semibold text-[#181818] leading-tight">Studio Workspace</div>
                <div className="text-[11px] text-[#787974] mt-0.5">Plano Pro</div>
              </div>
              <Icon className="w-4 h-4 text-[#555] stroke-[2]" d="M19 9l-7 7-7-7" />
            </div>
            <div className="text-[10px] font-semibold tracking-wider text-[#8A8B86] uppercase mb-3 px-1">Espaço de trabalho</div>
            <nav className="space-y-1 text-[13px] font-medium text-[#4A4B47]">
              <Link className="flex items-center justify-between px-3 py-2 rounded-xl hover:bg-[#DCDDD8] transition-colors" href="/inbox">
                <div className="flex items-center gap-3">
                  <Icon className="w-4 h-4 stroke-[1.8]" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                  <span>Inbox unificado</span>
                </div>
                <span className="text-[11px] bg-[#D6D7D2] text-[#444] px-1.5 py-0.5 rounded font-normal">12</span>
              </Link>
              <Link className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-[#DCDDD8] transition-colors" href="/campanhas">
                <Icon className="w-4 h-4 stroke-[1.8]" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                <span>Automação & campanhas</span>
              </Link>
              <Link className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-[#DCDDD8] transition-colors" href="/insights">
                <Icon className="w-4 h-4 stroke-[1.8]" d={nav[0][2]} />
                <span>Insights & métricas</span>
              </Link>
              <Link className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-[#1B1B1B] text-white shadow-sm font-medium" href="/contactos/importar">
                <Icon className="w-4 h-4 stroke-[1.8]" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                <span>Contactos</span>
              </Link>
              {nav.slice(1).map(([href, label, d]) => (
                <Link key={href} className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-[#DCDDD8] transition-colors" href={href}>
                  <Icon className="w-4 h-4 stroke-[1.8]" d={d} />
                  <span>{label}</span>
                </Link>
              ))}
            </nav>
            <div className="mt-8 bg-[#D3D4CE] rounded-2xl p-4 text-[13px] relative">
              <div className="w-6 h-6 mb-2 text-[#222]">
                <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L14.39 8.26L21 9.27L16.5 14.14L17.77 21L12 17.77L6.23 21L7.5 14.14L3 9.27L9.61 8.26L12 2Z" /></svg>
              </div>
              <div className="font-semibold text-[#181818] leading-tight">Menos tarefas.<br />Mais conversas.</div>
              <a className="inline-flex items-center gap-1 text-[11px] text-[#63645F] mt-2 font-medium" href="#">A IA trata do resto. <span>↗</span></a>
            </div>
          </div>
          <div className="pt-4 border-t border-[#D5D6D1] space-y-2 text-[13px] text-[#555]">
            <Link className="flex items-center gap-3 px-2 py-1.5 hover:text-black" href="/ajuda">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" strokeWidth="1.8" /><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3m.08 4h.01" strokeWidth="1.8" /></svg>
              <span>Ajuda e suporte</span>
            </Link>
            <Link className="flex items-center gap-3 px-2 py-1.5 hover:text-black" href="/definicoes/equipa">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
                <circle cx="12" cy="12" r="3" strokeWidth="1.8" />
              </svg>
              <span>Definições</span>
            </Link>
            <div className="pt-3 flex items-center justify-between border-t border-[#D5D6D1]">
              <div>
                <div className="font-semibold text-[13px] text-[#191919]">Mariana Costa</div>
                <div className="text-[11px] text-[#7A7B76]">Administradora</div>
              </div>
              <Icon className="w-3.5 h-3.5 text-[#555] stroke-[2]" d="M19 9l-7 7-7-7" />
            </div>
          </div>
        </aside>
        <main className="flex-1 flex flex-col p-8 overflow-y-auto">
          <header className="mb-2">
          <div className="flex items-center justify-between mb-2">
            <div className="text-xs text-[#7A7B76] font-medium flex items-center gap-1.5"><span>Workspace</span><span>/</span><span>Contactos</span></div>
            <div className="inline-flex items-center gap-2 bg-[#D9D9D4] px-3 py-1 rounded-full text-xs font-medium text-[#464743]">
              <span className="w-2 h-2 rounded-full bg-[#629753]" /><span>4 canais conectados</span>
            </div>
          </div>
          <div className="mb-6">
            <h1 className="text-3xl font-bold tracking-tight text-[#161616]">Contactos</h1>
            <p className="text-xs text-[#7A7B76] mt-0.5">Relações próximas começam aqui.</p>
          </div>
          </header>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-xl font-bold text-[#181818]">As pessoas por detrás dos números.</h2>
              <div className="text-xs text-[#777873] mt-0.5">1.248 contactos · 84 adicionados este mês</div>
            </div>
            <div className="flex items-center gap-2.5">
              <button className="bg-[#DBDCD7] hover:bg-[#D2D3CE] text-[#1B1B1B] text-xs font-semibold px-4 py-2 rounded-full transition-colors" type="button">Importar contactos</button>
              <Link href="/contactos/novo" className="bg-[#191919] hover:bg-black text-white text-xs font-medium px-4 py-2 rounded-full flex items-center gap-1.5 transition-colors"><span>+</span> Novo contacto</Link>
            </div>
          </div>
          <div className="flex items-center justify-between mb-4">
            <button className="bg-[#191919] text-white text-xs font-medium px-4 py-1.5 rounded-full" type="button">Todos <span className="ml-1 opacity-80 text-[11px]">1.248</span></button>
            <div className="text-xs text-[#7E7F7A]">Última sincronização às 10:45</div>
          </div>
          <div className="bg-[#ECECE9] rounded-2xl p-4 flex-1 flex flex-col border border-[#DCDDD8] opacity-60">
            <div className="flex items-center justify-between mb-4">
              <div className="w-72 bg-[#E2E3DF] rounded-xl px-3 py-1.5 text-xs text-[#8A8B86] flex items-center gap-2">Pesquisar por nome, email ou empresa...</div>
              <div className="text-xs text-[#7E7F7A]">10 de 1.248 contactos</div>
            </div>
            <div className="w-full text-xs">
              <div className="grid grid-cols-12 text-[#7C7D78] font-medium pb-2 border-b border-[#D8D9D4] px-2">
                <div className="col-span-1 flex items-center"><input className="rounded border-gray-300 text-neutral-800 focus:ring-0" type="checkbox" aria-label="Selecionar todos" /></div>
                <div className="col-span-4">Nome ↓</div>
                <div className="col-span-3">Status</div>
                <div className="col-span-4 text-right">Ação rápida</div>
              </div>
              <div className="space-y-3 pt-3">
                <div className="grid grid-cols-12 items-center px-2 py-1 text-[#333]">
                  <div className="col-span-1"><input className="rounded border-gray-300" type="checkbox" aria-label="Selecionar Sofia Martins" /></div>
                  <div className="col-span-4 font-semibold">Sofia Martins<span className="block text-[10px] text-gray-500 font-normal">sofia@lunastudio.ao</span></div>
                  <div className="col-span-3"><span className="bg-[#DFE0DA] text-[10px] px-2 py-0.5 rounded-full">Lead qualificado</span></div>
                  <div className="col-span-4 text-right"><span className="border border-[#CCD] rounded-full px-3 py-1 text-[11px]">Iniciar conversa ↗</span></div>
                </div>
                <div className="grid grid-cols-12 items-center px-2 py-1 text-[#333]">
                  <div className="col-span-1"><input className="rounded border-gray-300" type="checkbox" aria-label="Selecionar Miguel Santos" /></div>
                  <div className="col-span-4 font-semibold">Miguel Santos<span className="block text-[10px] text-gray-500 font-normal">miguel@atelier.ao</span></div>
                  <div className="col-span-3"><span className="bg-[#DFE0DA] text-[10px] px-2 py-0.5 rounded-full">Novo lead</span></div>
                  <div className="col-span-4 text-right"><span className="border border-[#CCD] rounded-full px-3 py-1 text-[11px]">Iniciar conversa ↗</span></div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div className="fixed inset-0 bg-[#A6A8A2]/60 backdrop-blur-[1px] flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-[28px] w-full max-w-[628px] shadow-2xl p-7 relative flex flex-col" role="dialog" aria-labelledby="importar-title">
          <Link aria-label="Fechar" className="absolute top-6 right-6 w-9 h-9 rounded-full border border-[#ECECE9] flex items-center justify-center text-[#70726E] hover:text-black hover:bg-[#F5F5F3] transition-colors" href="/contactos/lista">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 14 14"><path d="M1 1l12 12M13 1L1 13" /></svg>
          </Link>
          <div className="pr-12 mb-5">
            <h2 className="text-[26px] font-extrabold text-[#171717] tracking-tight leading-snug" id="importar-title">Importar contactos</h2>
            <p className="text-[13px] text-[#71736D] mt-1 font-normal">CSV, sem complicações. Valide os dados antes de importar.</p>
          </div>
          <div className="bg-[#F3F6F0] rounded-2xl p-4 flex items-center justify-between mb-6">
            <div className="flex items-start gap-2.5">
              <div className="mt-0.5 text-[#2A2B27]">
                <svg className="w-4 h-4 stroke-[2.2]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4.5 12.75l6 6 9-13.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
              <div>
                <div className="text-[14px] font-bold text-[#1B1C1A]">contactos-novembro.csv</div>
                <div className="text-[12px] text-[#696C65] mt-0.5">50 linhas · 18 KB · CSV UTF-8</div>
              </div>
            </div>
            <button className="bg-white hover:bg-neutral-50 border border-[#E1E3DE] rounded-full text-xs font-semibold px-4 py-2 text-[#191919] shadow-sm transition-all" type="button">Trocar ficheiro</button>
          </div>
          <div className="mb-5">
            <div className="text-[11px] font-bold tracking-wider text-[#63665F] uppercase mb-2.5">Mapeamento das colunas</div>
            <div className="space-y-2">
              {mapping.map(([source, target]) => (
                <div key={source} className="border border-[#E7E8E4] rounded-2xl px-4 py-2.5 flex items-center justify-between hover:border-gray-300 transition-colors">
                  <span className="text-[13px] font-medium text-[#1A1A1A]">{source}</span>
                  <div className="flex items-center gap-6">
                    <Icon className="w-4 h-4 text-[#8C8E87] stroke-[2]" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    <div className="relative min-w-[130px] flex items-center justify-between text-[13px] font-semibold text-[#181818] cursor-pointer">
                      <span>{target}</span>
                      <Icon className="w-3.5 h-3.5 text-[#555] ml-1.5 stroke-[2]" d="M19 9l-7 7-7-7" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-[12.5px] font-semibold text-[#1E1F1C] mb-3 px-1">47 válidos · 2 duplicados ignorados · 1 linha com erro</div>
          <div className="bg-[#FDF4F1] border border-[#FBE3DE] rounded-2xl p-4 mb-7">
            <div className="text-[12.5px] font-bold text-[#AA3F2D] leading-tight">Linha 23: número de telefone inválido.</div>
            <div className="text-[11.5px] text-[#BA5B49] mt-1 leading-normal">A linha será ignorada. Reveja-a e importe-a depois de corrigir.</div>
          </div>
          <div className="flex items-center justify-between pt-1">
            <Link href="/contactos/lista" className="px-6 py-2.5 rounded-full border border-[#E3E4DF] text-xs font-semibold text-[#191919] hover:bg-[#F7F7F5] transition-colors">Cancelar</Link>
            <ImportContactsButton className="px-6 py-2.5 rounded-full bg-[#1C1D1A] hover:bg-black text-white text-xs font-semibold shadow-sm transition-colors">Importar 47 contactos</ImportContactsButton>
          </div>
        </div>
      </div>
    </div>
  );
}
