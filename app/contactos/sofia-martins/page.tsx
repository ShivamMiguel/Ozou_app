import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "OZOU — Contacto — Sofia Martins",
};

function Chevron({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

export default function SofiaMartinsPage() {
  return (
    <div className="min-h-screen flex bg-[#FAFAFA] font-sans text-[#121316] antialiased">
      <aside className="w-[248px] shrink-0 border-r border-[#EEEEEE] bg-white flex flex-col justify-between min-h-screen px-4 py-5 select-none">
        <div className="flex flex-col space-y-6">
          <div className="flex items-center gap-1.5 px-3">
            <Link href="/" className="text-[23px] font-black tracking-tight leading-none text-[#111]">
              OZOU
            </Link>
            <span className="w-[6px] h-[6px] rounded-full bg-[#BCE343] mt-1" />
          </div>
          <div className="bg-[#F6F7F9] rounded-xl px-3.5 py-2.5 flex items-center justify-between cursor-pointer hover:bg-gray-100 transition-colors">
            <div>
              <p className="text-[13px] font-semibold text-[#111] leading-tight">Studio Workspace</p>
              <p className="text-[11px] text-[#8E95A2] font-normal leading-tight mt-0.5">Plano Pro</p>
            </div>
            <Chevron className="w-3.5 h-3.5 text-[#6B7280]" />
          </div>
          <div>
            <p className="text-[10px] font-bold text-[#9CA3AF] tracking-wider uppercase px-3 mb-2">Espaço de trabalho</p>
            <nav className="space-y-1">
              <Link className="flex items-center justify-between px-3 py-2 rounded-xl text-[13px] font-medium text-[#4B5563] hover:bg-[#F3F4F6] transition-colors" href="/inbox">
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-[#6B7280]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
                  </svg>
                  <span>Inbox unificado</span>
                </div>
                <span className="text-[11px] bg-[#EEEEEE] text-[#555] font-semibold px-1.5 py-0.5 rounded-full">12</span>
              </Link>
              <Link className="flex items-center gap-3 px-3 py-2 rounded-xl text-[13px] font-medium text-[#4B5563] hover:bg-[#F3F4F6] transition-colors" href="/automacao-campanhas">
                <svg className="w-4 h-4 text-[#6B7280]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
                </svg>
                <span className="leading-snug">Automação & campanhas</span>
              </Link>
              <Link className="flex items-center gap-3 px-3 py-2 rounded-xl text-[13px] font-medium text-[#4B5563] hover:bg-[#F3F4F6] transition-colors" href="/insights">
                <svg className="w-4 h-4 text-[#6B7280]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
                </svg>
                <span>Insights & métricas</span>
              </Link>
              <Link className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13px] font-medium bg-[#141517] text-white" href="/contactos">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
                </svg>
                <span>Contactos</span>
              </Link>
              <Link className="flex items-center gap-3 px-3 py-2 rounded-xl text-[13px] font-medium text-[#4B5563] hover:bg-[#F3F4F6] transition-colors" href="/inicio">
                <svg className="w-4 h-4 text-[#6B7280]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
                </svg>
                <span>Início</span>
              </Link>
              <Link className="flex items-center gap-3 px-3 py-2 rounded-xl text-[13px] font-medium text-[#4B5563] hover:bg-[#F3F4F6] transition-colors" href="/empresas">
                <svg className="w-4 h-4 text-[#6B7280]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
                </svg>
                <span>Empresas</span>
              </Link>
            </nav>
          </div>
        </div>
        <div className="space-y-4 pt-4">
          <div className="bg-[#F0F2ED] rounded-2xl p-4 text-[#111]">
            <svg className="w-5 h-5 mb-3 text-[#111]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
            </svg>
            <p className="text-[13px] font-semibold leading-snug">
              Menos tarefas.
              <br />
              Mais conversas.
            </p>
            <a className="inline-flex items-center gap-1 text-[11px] text-[#6B7280] font-medium mt-3 hover:text-black transition-colors" href="#">
              <span>A IA trata do resto.</span>
              <span className="text-xs">↗</span>
            </a>
          </div>
          <div className="space-y-1">
            <Link className="flex items-center gap-3 px-3 py-2 rounded-xl text-[13px] font-medium text-[#4B5563] hover:bg-[#F3F4F6] transition-colors" href="/ajuda">
              <svg className="w-4 h-4 text-[#6B7280]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
              </svg>
              <span>Ajuda e suporte</span>
            </Link>
            <Link className="flex items-center gap-3 px-3 py-2 rounded-xl text-[13px] font-medium text-[#4B5563] hover:bg-[#F3F4F6] transition-colors" href="/definicoes/equipa">
              <svg className="w-4 h-4 text-[#6B7280]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
              </svg>
              <span>Definições</span>
            </Link>
          </div>
          <div className="border-t border-[#EEEEEE] pt-3.5 flex items-center justify-between px-2 cursor-pointer">
            <div>
              <p className="text-[13px] font-semibold text-[#111]">Mariana Costa</p>
              <p className="text-[11px] text-[#8E95A2]">Administradora</p>
            </div>
            <Chevron className="w-3.5 h-3.5 text-[#6B7280]" />
          </div>
        </div>
      </aside>

      <main className="flex-1 flex flex-col min-w-0">
        <header className="border-b border-[#EEEEEE] bg-white px-10 py-5 flex items-center justify-between">
          <div>
            <nav className="text-[12px] text-[#71717A] font-normal mb-1">
              <span>Workspace</span>
              <span className="mx-1 text-[#A1A1AA]">/</span>
              <span>Contacto — Sofia Martins</span>
            </nav>
            <h1 className="text-[22px] font-bold text-[#111] tracking-tight leading-none mb-1.5">Contacto — Sofia Martins</h1>
            <p className="text-[13px] text-[#71717A]">O essencial para gerir o seu negócio.</p>
          </div>
          <div className="flex items-center gap-2 bg-[#F1F6EA] text-[#425925] px-3.5 py-1.5 rounded-full text-[12px] font-medium border border-[#E3EDD6]">
            <span className="w-2 h-2 rounded-full bg-[#527C2A]" />
            <span>4 canais conectados</span>
          </div>
        </header>
        <div className="flex-1 overflow-y-auto px-10 py-8 space-y-7 max-w-[1240px]">
          <section className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-[32px] font-bold text-[#111] tracking-tight leading-none">Sofia Martins</h2>
              <p className="text-[13.5px] text-[#71717A] mt-2 font-normal">Luna Studio · Lead qualificado · Origem: WhatsApp</p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <Link href="/contactos" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#D5D7DA] bg-white text-[13px] font-medium text-[#111] hover:bg-[#F9FAFB] transition-colors shadow-sm">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M10 19l-7-7m0 0l7-7m-7 7h18" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
                <span>Contactos</span>
              </Link>
              <Link href="/inbox" className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-[#18191B] text-white text-[13px] font-medium hover:bg-black transition-colors shadow-sm">
                <span>Iniciar conversa</span>
                <span className="text-xs">↗</span>
              </Link>
            </div>
          </section>
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-8 bg-white border border-[#EDEDED] rounded-2xl p-7 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
              <h3 className="text-[18px] font-bold text-[#111] tracking-tight mb-6">Dados e preferências</h3>
              <form className="space-y-5">
                <div>
                  <label className="block text-[12.5px] font-medium text-[#6B7280] mb-1.5" htmlFor="sofia-name">
                    Nome
                  </label>
                  <input id="sofia-name" className="w-full text-[13.5px] text-[#111] px-4 py-2.5 rounded-xl border border-[#E5E7EB] bg-white hover:border-[#D1D5DB] transition-colors focus:ring-1 focus:ring-black" type="text" defaultValue="Sofia Martins" />
                </div>
                <div>
                  <label className="block text-[12.5px] font-medium text-[#6B7280] mb-1.5" htmlFor="sofia-email">
                    E-mail
                  </label>
                  <input id="sofia-email" className="w-full text-[13.5px] text-[#111] px-4 py-2.5 rounded-xl border border-[#E5E7EB] bg-white hover:border-[#D1D5DB] transition-colors" type="email" defaultValue="sofia@lunastudio.ao" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[12.5px] font-medium text-[#6B7280] mb-1.5" htmlFor="sofia-phone">
                      Telefone
                    </label>
                    <input id="sofia-phone" className="w-full text-[13.5px] text-[#111] px-4 py-2.5 rounded-xl border border-[#E5E7EB] bg-white hover:border-[#D1D5DB] transition-colors" type="text" defaultValue="+244 912 345 678" />
                  </div>
                  <div>
                    <label className="block text-[12.5px] font-medium text-[#6B7280] mb-1.5" htmlFor="sofia-company">
                      Empresa
                    </label>
                    <input id="sofia-company" className="w-full text-[13.5px] text-[#111] px-4 py-2.5 rounded-xl border border-[#E5E7EB] bg-white hover:border-[#D1D5DB] transition-colors" type="text" defaultValue="Luna Studio" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[12.5px] font-medium text-[#6B7280] mb-1.5" htmlFor="sofia-channel">
                      Canal preferido
                    </label>
                    <div className="relative">
                      <select id="sofia-channel" defaultValue="WhatsApp" className="w-full appearance-none text-[13.5px] text-[#111] px-4 py-2.5 rounded-xl border border-[#E5E7EB] bg-white hover:border-[#D1D5DB] pr-10 cursor-pointer">
                        <option>WhatsApp</option>
                        <option>Email</option>
                        <option>Telefone</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-[#6B7280]">
                        <Chevron className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[12.5px] font-medium text-[#6B7280] mb-1.5" htmlFor="sofia-status">
                      Status
                    </label>
                    <div className="relative">
                      <select id="sofia-status" defaultValue="Lead qualificado" className="w-full appearance-none text-[13.5px] text-[#111] px-4 py-2.5 rounded-xl border border-[#E5E7EB] bg-white hover:border-[#D1D5DB] pr-10 cursor-pointer">
                        <option>Lead qualificado</option>
                        <option>Contacto inicial</option>
                        <option>Cliente ativo</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-[#6B7280]">
                        <Chevron className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <span className="text-[12.5px] text-[#71717A]">Consentimento ativo · registado em 9 nov. 2026</span>
                  <Link href="/alteracoes-guardadas" className="px-6 py-2.5 rounded-full bg-[#18191B] text-white text-[13px] font-medium hover:bg-black transition-colors self-end sm:self-auto">
                    Guardar alterações
                  </Link>
                </div>
              </form>
            </div>
            <div className="lg:col-span-4 bg-white border border-[#EDEDED] rounded-2xl p-7 flex flex-col justify-between h-full shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
              <div>
                <h3 className="text-[18px] font-bold text-[#111] tracking-tight mb-8">Uma relação em contexto.</h3>
                <div className="space-y-8">
                  <div>
                    <p className="text-[11px] text-[#8E95A2] font-medium">Hoje, 10:42</p>
                    <h4 className="text-[13.5px] font-bold text-[#111] mt-1 mb-0.5">Nova mensagem recebida</h4>
                    <p className="text-[13px] text-[#6B7280] font-normal leading-relaxed">“Como posso experimentar?”</p>
                  </div>
                  <div>
                    <p className="text-[11px] text-[#8E95A2] font-medium">Hoje, 10:41</p>
                    <h4 className="text-[13.5px] font-bold text-[#111] mt-1 mb-0.5">Mariana respondeu</h4>
                    <p className="text-[13px] text-[#6B7280] font-normal leading-relaxed">Apresentação do plano Pro.</p>
                  </div>
                  <div>
                    <p className="text-[11px] text-[#8E95A2] font-medium">Hoje, 10:40</p>
                    <h4 className="text-[13.5px] font-bold text-[#111] mt-1 mb-0.5">Contacto criado</h4>
                    <p className="text-[13px] text-[#6B7280] font-normal leading-relaxed">Origem: WhatsApp.</p>
                  </div>
                </div>
              </div>
              <div className="pt-8">
                <Link href="/contactos/apos-arquivo" className="block w-full py-2.5 rounded-full border border-[#D5D7DA] bg-white text-[13px] font-medium text-[#111] hover:bg-[#F9FAFB] transition-colors text-center">
                  Arquivar contacto
                </Link>
              </div>
            </div>
          </section>
          <section className="bg-[#F2F6ED] rounded-2xl p-6 border border-[#E3EDD8]">
            <p className="text-[10.5px] font-bold uppercase tracking-wider text-[#6B7A5C] mb-2">NOTA DA EQUIPA</p>
            <p className="text-[13.5px] text-[#243315] font-normal leading-relaxed">
              Interessada no plano Pro para uma equipa de 5 pessoas. Enviar convite para experimentar.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
