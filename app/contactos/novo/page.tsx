import type { Metadata } from "next";
import Link from "next/link";
import { CreateContactButton } from "@/components/live/actions";

export const metadata: Metadata = {
  title: "OZOU — Novo contacto",
};

function Icon({ d, className }: { d: string; className: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path d={d} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const nav = [
  ["/inbox", "Inbox unificado", "M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4", "12"],
  ["/campanhas", "Automação & campanhas", "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z", ""],
  ["/insights", "Insights & métricas", "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z", ""],
  ["/inicio", "Início", "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6", ""],
  ["/empresas", "Empresas", "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4", ""],
] as const;

const rows = [
  ["Sofia Martins", "sofia@lunastudio.ao", "+244 912 345 678", "Luna Studio", "Lead qualificado", "bg-[#d6d6d6] text-neutral-700", "Hoje, 09:12"],
  ["Miguel Santos", "miguel@atelier.ao", "+244 923 456 789", "Atelier Studio", "Novo lead", "bg-[#dcdcdc] text-neutral-700", "Ontem, 16:40"],
  ["Inês Ferreira", "ines@forma.ao", "+244 934 567 890", "Forma Design", "Cliente", "bg-[#dce7cb] text-[#425e24] font-semibold", "3 nov, 11:20"],
  ["João Almeida", "joao@almeida.ao", "+244 965 678 901", "Almeida & Filhos", "Novo lead", "bg-[#dcdcdc] text-neutral-700", "2 nov, 18:05"],
  ["Beatriz Costa", "beatriz@norte.ao", "+244 917 890 123", "Norte Arquitetura", "Cliente", "bg-[#dce7cb] text-[#425e24] font-semibold", "2 nov, 14:30"],
  ["Pedro Ribeiro", "pedro@origem.ao", "+244 928 901 234", "Origem Branding", "Lead qualificado", "bg-[#d6d6d6] text-neutral-700", "1 nov, 17:15"],
  ["Carolina Sousa", "carolina@casa.ao", "+244 939 012 345", "Casa & Cor", "Cliente", "bg-[#dce7cb] text-[#425e24] font-semibold", "1 nov, 12:45"],
  ["Tiago Lopes", "tiago@studiolopes.ao", "+244 961 123 456", "Studio Lopes", "Lead qualificado", "bg-[#d6d6d6] text-neutral-700", "31 out, 15:20"],
  ["Marta Oliveira", "marta@verde.ao", "+244 913 234 567", "Verde Jardim", "Sem resposta", "bg-[#dcdcdc] text-neutral-700", "30 out, 10:10"],
  ["Rui Pereira", "rui@pontostudio.ao", "+244 924 345 678", "Ponto Studio", "Sem resposta", "bg-[#dcdcdc] text-neutral-700", "29 out, 14:00"],
] as const;

export default function NovoContactoPage() {
  return (
    <div className="min-h-screen relative flex overflow-x-hidden text-neutral-800 text-[13px] ozou-novo" style={{ backgroundColor: "#dfdfdf", color: "#1e2022" }}>
      <style>{`.ozou-novo ::-webkit-scrollbar{width:6px;height:6px}.ozou-novo ::-webkit-scrollbar-thumb{background:#c5c5c5;border-radius:3px}`}</style>
      <aside className="w-[230px] shrink-0 min-h-screen bg-[#dfdfdf] border-r border-[#d0d0d0] flex flex-col justify-between p-5 select-none">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2 px-1 pt-1">
            <Link href="/" className="text-2xl font-black tracking-tight text-[#161719]">OZOU</Link>
            <span className="w-2 h-2 rounded-full bg-[#829944] -mt-2" />
          </div>
          <div className="bg-[#d3d3d3]/70 rounded-xl p-3 flex items-center justify-between cursor-pointer">
            <div>
              <div className="font-semibold text-xs text-[#161719] tracking-tight">Studio Workspace</div>
              <div className="text-[11px] text-neutral-500">Plano Pro</div>
            </div>
            <Icon className="w-3.5 h-3.5 text-neutral-600 stroke-[2.5]" d="M19 9l-7 7-7-7" />
          </div>
          <nav className="flex flex-col gap-1">
            <div className="text-[10px] font-semibold text-neutral-500 tracking-wider uppercase px-2 mb-1.5">Espaço de trabalho</div>
            {nav.slice(0, 3).map(([href, label, d, badge]) => (
              <Link key={href} className="flex items-center justify-between px-3 py-2 rounded-xl text-neutral-600 hover:bg-[#d6d6d6] transition-colors" href={href}>
                <div className="flex items-center gap-3">
                  <Icon className="w-4 h-4 text-neutral-600 stroke-[1.8]" d={d} />
                  <span className="font-medium text-[13px] leading-tight">{label}</span>
                </div>
                {badge ? <span className="bg-[#d0d0d0] text-neutral-700 text-[10px] font-semibold px-1.5 py-0.5 rounded-full">{badge}</span> : null}
              </Link>
            ))}
            <Link className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-[#161719] text-white shadow-sm" href="/contactos/novo">
              <Icon className="w-4 h-4 text-white stroke-[2]" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              <span className="font-medium text-[13px]">Contactos</span>
            </Link>
            {nav.slice(3).map(([href, label, d]) => (
              <Link key={href} className="flex items-center gap-3 px-3 py-2 rounded-xl text-neutral-600 hover:bg-[#d6d6d6] transition-colors" href={href}>
                <Icon className="w-4 h-4 text-neutral-600 stroke-[1.8]" d={d} />
                <span className="font-medium text-[13px]">{label}</span>
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-col gap-4 mt-6">
          <div className="bg-[#d2d2d2]/70 rounded-2xl p-4">
            <Icon className="w-4 h-4 text-neutral-700 mb-2 stroke-[2]" d="M13 10V3L4 14h7v7l9-11h-7z" />
            <div className="font-bold text-neutral-800 text-[13px] leading-tight">Menos tarefas.<br />Mais conversas.</div>
            <div className="mt-4 flex items-center gap-1 text-[11px] text-neutral-500 font-medium"><span>A IA trata do resto.</span><span className="text-xs">↗</span></div>
          </div>
          <div className="flex flex-col gap-0.5">
            <Link className="flex items-center gap-3 px-2 py-1.5 rounded-lg text-neutral-600 hover:text-neutral-900 text-xs font-medium" href="/ajuda">
              <Icon className="w-4 h-4 stroke-[1.8]" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              <span>Ajuda e suporte</span>
            </Link>
            <Link className="flex items-center gap-3 px-2 py-1.5 rounded-lg text-neutral-600 hover:text-neutral-900 text-xs font-medium" href="/definicoes/equipa">
              <svg className="w-4 h-4 stroke-[1.8]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" strokeLinecap="round" strokeLinejoin="round" /><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" /></svg>
              <span>Definições</span>
            </Link>
          </div>
          <div className="h-px bg-[#cecece]" />
          <div className="flex items-center justify-between cursor-pointer px-1">
            <div>
              <div className="font-bold text-[13px] text-[#161719]">Mariana Costa</div>
              <div className="text-[11px] text-neutral-500">Administradora</div>
            </div>
            <Icon className="w-3.5 h-3.5 text-neutral-600 stroke-[2.5]" d="M19 9l-7 7-7-7" />
          </div>
        </div>
      </aside>
      <main className="flex-1 flex flex-col min-w-0 bg-[#dfdfdf] px-8 pt-6 pb-8">
        <header className="flex items-start justify-between mb-4">
          <div>
            <div className="text-[11px] text-neutral-500 font-medium mb-1"><span>Workspace</span> <span className="mx-1 text-neutral-400">/</span> <span className="text-neutral-700">Contactos</span></div>
            <h1 className="text-2xl font-bold tracking-tight text-[#161719]">Contactos</h1>
            <p className="text-xs text-neutral-500 mt-0.5">Relações próximas começam aqui.</p>
          </div>
          <div className="bg-[#d2d5cd] text-neutral-700 text-xs px-3.5 py-1.5 rounded-full flex items-center gap-2 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#526f28]" /><span>4 canais conectados</span>
          </div>
        </header>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-bold text-[#161719] tracking-tight">As pessoas por detrás do negócio</h2>
            <p className="text-xs text-neutral-500 mt-0.5">1.248 contactos · 84 adicionados este mês</p>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/contactos/importar" className="bg-[#d7d7d7] hover:bg-[#cecece] text-neutral-800 text-xs font-medium px-4 py-2 rounded-full border border-neutral-300">Importar contactos</Link>
            <button className="bg-[#161719] text-white text-xs font-medium px-4 py-2 rounded-full flex items-center gap-1.5" type="button"><span>+</span><span>Novo contacto</span></button>
          </div>
        </div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1.5">
            <button className="bg-[#161719] text-white text-xs px-3.5 py-1.5 rounded-full font-medium" type="button">Todos 1.248</button>
            <button className="bg-[#d5d5d5] text-neutral-700 text-xs px-3.5 py-1.5 rounded-full font-medium" type="button">Clientes 512</button>
            <button className="bg-[#d5d5d5] text-neutral-700 text-xs px-3.5 py-1.5 rounded-full font-medium" type="button">Leads 614</button>
            <button className="bg-[#d5d5d5] text-neutral-700 text-xs px-3.5 py-1.5 rounded-full font-medium" type="button">Parceiros 122</button>
          </div>
          <div className="text-[11px] text-neutral-500">Última sincronização às 10:45</div>
        </div>
        <div className="bg-[#d9d9d9]/60 border border-[#cecece] rounded-2xl p-4 flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="relative w-80">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-400">
                  <Icon className="w-3.5 h-3.5 stroke-[2]" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </span>
                <input id="contacts-novo-search" className="bg-[#e4e4e4] border-0 rounded-xl pl-9 pr-3 py-2 text-xs w-full text-neutral-700 placeholder-neutral-400 focus:ring-1 focus:ring-neutral-400" placeholder="Pesquisar por nome, telefone, email..." type="text" />
              </div>
              <div className="text-xs text-neutral-500">10 de 1.248 contactos</div>
            </div>
            <table className="w-full text-left text-xs border-collapse" id="contacts-novo-table">
              <thead>
                <tr className="border-b border-[#cfcfcf] text-neutral-500 font-medium text-[11px]">
                  <th className="py-2 pl-2 w-8"><input aria-label="Selecionar todos" className="rounded border-neutral-400 bg-transparent" type="checkbox" /></th>
                  <th className="py-2 font-normal">Nome ↓</th>
                  <th className="py-2 font-normal">Telefone</th>
                  <th className="py-2 font-normal">Empresa</th>
                  <th className="py-2 font-normal">Status</th>
                  <th className="py-2 font-normal">Última interação</th>
                  <th className="py-2 font-normal text-right pr-2">Ação rápida</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#d3d3d3] text-neutral-700">
                {rows.map(([name, email, phone, company, status, tone, when], index) => (
                  <tr key={email}>
                    <td className="py-2.5 pl-2"><input aria-label={`Selecionar ${name}`} className="rounded border-neutral-400 bg-transparent" type="checkbox" /></td>
                    <td className="py-2.5">
                      {index === 0 ? <Link href="/contactos/sofia-martins" className="font-semibold text-neutral-900">{name}</Link> : <div className="font-semibold text-neutral-900">{name}</div>}
                      <div className="text-[11px] text-neutral-500">{email}</div>
                    </td>
                    <td className="py-2.5">{phone}</td>
                    <td className="py-2.5">{company}</td>
                    <td className="py-2.5"><span className={`${tone} px-2 py-0.5 rounded-full text-[10px] font-medium`}>{status}</span></td>
                    <td className="py-2.5">{when}</td>
                    <td className="py-2.5 text-right pr-2">
                      <Link href={index === 0 ? "/inbox/nova" : "/inbox"} className="bg-[#e2e2e2] hover:bg-[#d8d8d8] text-neutral-700 px-2.5 py-1 rounded-full text-[11px] font-medium inline-flex items-center gap-1">Iniciar conversa ↗</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex items-center justify-between pt-4 border-t border-[#cecece] text-xs text-neutral-500">
            <div>A mostrar 1–10 de 1.248 contactos</div>
            <div className="flex items-center gap-1.5">
              <button className="px-3 py-1 bg-[#d0d0d0] rounded-full text-neutral-700 flex items-center gap-1 text-[11px]" type="button">← Anterior</button>
              <span className="w-6 h-6 rounded-full bg-[#161719] text-white flex items-center justify-center text-[11px]">1</span>
              <button className="px-3 py-1 bg-[#d0d0d0] rounded-full text-neutral-700 flex items-center gap-1 text-[11px]" type="button">Seguinte →</button>
            </div>
          </div>
        </div>
      </main>
      <div className="fixed inset-0 bg-[#000000]/25 backdrop-blur-[2px] flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-3xl w-full max-w-[640px] shadow-2xl overflow-hidden p-8 relative flex flex-col justify-between" role="dialog" aria-labelledby="novo-contacto-title">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-[#161719]" id="novo-contacto-title">Novo contacto</h2>
              <p className="text-xs text-neutral-500 mt-1">Guarde o essencial. A relação cresce a partir daqui.</p>
            </div>
            <Link aria-label="Fechar" href="/contactos/lista" className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 hover:text-neutral-700 hover:bg-neutral-50 transition">
              <svg className="w-3.5 h-3.5 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
          </div>
          <form className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-neutral-600 mb-1.5" htmlFor="novo-nome">Nome completo *</label>
              <input className="w-full rounded-2xl border border-neutral-300 px-4 py-2.5 text-xs text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-neutral-400 focus:border-neutral-400 shadow-none font-normal" defaultValue="Leonor Matos" id="novo-nome" type="text" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-neutral-600 mb-1.5" htmlFor="novo-email">E-mail</label>
                <input className="w-full rounded-2xl border border-neutral-300 px-4 py-2.5 text-xs text-neutral-800 focus:outline-none focus:ring-1 focus:ring-neutral-400 focus:border-neutral-400 shadow-none font-normal" defaultValue="leonor@ateliermatos.ao" id="novo-email" type="email" />
              </div>
              <div>
                <label className="block text-xs font-medium text-neutral-600 mb-1.5" htmlFor="novo-telemovel">Telemóvel *</label>
                <input className="w-full rounded-2xl border border-neutral-300 px-4 py-2.5 text-xs text-neutral-800 focus:outline-none focus:ring-1 focus:ring-neutral-400 focus:border-neutral-400 shadow-none font-normal" defaultValue="+244 916 234 567" id="novo-telemovel" type="text" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-neutral-600 mb-1.5" htmlFor="novo-empresa">Empresa</label>
              <input className="w-full rounded-2xl border border-neutral-300 px-4 py-2.5 text-xs text-neutral-800 focus:outline-none focus:ring-1 focus:ring-neutral-400 focus:border-neutral-400 shadow-none font-normal" defaultValue="Atelier Matos" id="novo-empresa" type="text" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-neutral-600 mb-1.5" htmlFor="novo-canal">Canal preferido</label>
                <div className="relative">
                  <select className="w-full appearance-none rounded-2xl border border-neutral-300 bg-white px-4 py-2.5 text-xs text-neutral-800 focus:outline-none focus:ring-1 focus:ring-neutral-400 focus:border-neutral-400 pr-8" defaultValue="WhatsApp" id="novo-canal">
                    <option>WhatsApp</option>
                    <option>Email</option>
                    <option>SMS</option>
                    <option>Chamada</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-neutral-500"><Icon className="w-3.5 h-3.5 stroke-[2.5]" d="M19 9l-7 7-7-7" /></div>
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-neutral-600 mb-1.5" htmlFor="novo-status">Status</label>
                <div className="relative">
                  <select className="w-full appearance-none rounded-2xl border border-neutral-300 bg-white px-4 py-2.5 text-xs text-neutral-800 focus:outline-none focus:ring-1 focus:ring-neutral-400 focus:border-neutral-400 pr-8" defaultValue="Novo lead" id="novo-status">
                    <option>Novo lead</option>
                    <option>Lead qualificado</option>
                    <option>Cliente</option>
                    <option>Sem resposta</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-neutral-500"><Icon className="w-3.5 h-3.5 stroke-[2.5]" d="M19 9l-7 7-7-7" /></div>
                </div>
              </div>
            </div>
            <div className="mt-4 bg-[#f3f7ee] border border-[#e5edd9] rounded-2xl p-4 flex items-start gap-3">
              <svg className="w-4 h-4 text-[#4c6628] stroke-[2.5] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
              <div className="flex-1">
                <h4 className="text-xs font-bold text-[#1f2617] mb-1">Autorização de contacto confirmada</h4>
                <p className="text-[11px] leading-relaxed text-neutral-500">Confirme a base legal antes de enviar comunicações.<br />O consentimento pode ser revogado a qualquer momento.</p>
              </div>
            </div>
            <div className="pt-6 flex items-center justify-between mt-6">
              <Link href="/contactos/lista" className="px-8 py-2.5 rounded-full border border-neutral-300 text-xs font-medium text-neutral-800 hover:bg-neutral-50 transition">Cancelar</Link>
              <CreateContactButton className="px-8 py-2.5 rounded-full bg-[#161719] text-white text-xs font-medium hover:bg-neutral-800 transition flex items-center gap-2 shadow-sm"><span>Criar contacto</span><span className="text-sm">→</span></CreateContactButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
