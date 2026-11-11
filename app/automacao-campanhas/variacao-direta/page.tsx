import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "OZOU — Campanha — Variação direta",
};

function Chevron({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

export default function VariacaoDiretaPage() {
  return (
    <div className="bg-[#fafbf9] text-[#1c1f1d] min-h-screen flex text-[13.5px] font-sans antialiased">
      <aside className="w-[230px] border-r border-[#e8ebe7] bg-white flex flex-col justify-between shrink-0 select-none min-h-screen">
        <div className="p-5 pb-3">
          <div className="flex items-center gap-2 mb-6">
            <Link href="/" className="text-[23px] font-black tracking-tight text-[#161a18]">
              OZOU
            </Link>
            <span className="w-[7px] h-[7px] rounded-full bg-[#99df3d] mt-1" />
          </div>
          <div className="bg-[#f4f6f3] rounded-xl p-3 flex items-center justify-between cursor-pointer hover:bg-[#ebefe9] transition mb-7">
            <div>
              <div className="text-[13px] font-semibold text-[#1e2320]">Studio Workspace</div>
              <div className="text-[11px] text-[#717b74]">Plano Pro</div>
            </div>
            <Chevron className="w-3.5 h-3.5 text-[#59655d]" />
          </div>
          <div className="text-[10px] font-semibold tracking-wider text-[#9aa49d] uppercase px-1 mb-2">Espaço de Trabalho</div>
          <nav className="space-y-1">
            <Link className="flex items-center justify-between px-3 py-2 text-[#464f49] hover:bg-[#f5f7f4] rounded-xl transition" href="/inbox">
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 stroke-[1.8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="font-normal text-[13px]">Inbox unificado</span>
              </div>
              <span className="text-[10px] font-semibold bg-[#f0f3ee] text-[#556057] px-1.5 py-0.5 rounded-full min-w-[20px] text-center">12</span>
            </Link>
            <Link className="flex items-center gap-3 px-3 py-2.5 bg-[#171a18] text-white rounded-xl font-medium shadow-sm transition" href="/automacao-campanhas/variacao-direta">
              <svg className="w-4 h-4 stroke-[1.8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-[13px] leading-tight">Automação & campanhas</span>
            </Link>
            <Link className="flex items-center gap-3 px-3 py-2 text-[#464f49] hover:bg-[#f5f7f4] rounded-xl transition" href="/insights">
              <svg className="w-4 h-4 stroke-[1.8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-[13px]">Insights & métricas</span>
            </Link>
            <Link className="flex items-center gap-3 px-3 py-2 text-[#464f49] hover:bg-[#f5f7f4] rounded-xl transition" href="/contactos">
              <svg className="w-4 h-4 stroke-[1.8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-[13px]">Contactos</span>
            </Link>
            <Link className="flex items-center gap-3 px-3 py-2 text-[#464f49] hover:bg-[#f5f7f4] rounded-xl transition" href="/inicio">
              <svg className="w-4 h-4 stroke-[1.8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-[13px]">Início</span>
            </Link>
            <Link className="flex items-center gap-3 px-3 py-2 text-[#464f49] hover:bg-[#f5f7f4] rounded-xl transition" href="/empresas">
              <svg className="w-4 h-4 stroke-[1.8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-[13px]">Empresas</span>
            </Link>
          </nav>
        </div>
        <div className="p-5 pt-0 space-y-4">
          <div className="bg-[#f0f4ee] rounded-2xl p-4 relative">
            <div className="text-[#3c563e] mb-2.5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 3v3m0 12v3M3 12h3m12 0h3M5.636 5.636l2.122 2.122m8.484 8.484l2.122 2.122M5.636 18.364l2.122-2.122m8.484-8.484l2.122-2.122" />
              </svg>
            </div>
            <div className="font-bold text-[14px] leading-snug text-[#181d1a] mb-2">
              Menos tarefas.
              <br />
              Mais conversas.
            </div>
            <div className="flex items-center gap-1 text-[11px] text-[#6d7971]">
              <span>A IA trata do resto.</span>
              <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
          <div className="space-y-1 pt-1">
            <Link className="flex items-center gap-3 px-3 py-1.5 text-[#5c6861] hover:text-[#181d1a] transition text-[13px]" href="/ajuda">
              <svg className="w-4 h-4 stroke-[1.8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" strokeWidth="2" />
                <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3m.08 4h.01" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
              <span>Ajuda e suporte</span>
            </Link>
            <Link className="flex items-center gap-3 px-3 py-1.5 text-[#5c6861] hover:text-[#181d1a] transition text-[13px]" href="/definicoes/equipa">
              <svg className="w-4 h-4 stroke-[1.8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                <circle cx="12" cy="12" r="3" strokeWidth="2" />
              </svg>
              <span>Definições</span>
            </Link>
          </div>
          <div className="pt-2 border-t border-[#ebede9] flex items-center justify-between cursor-pointer">
            <div>
              <div className="text-[13px] font-semibold text-[#181d1a]">Mariana Costa</div>
              <div className="text-[11px] text-[#717b74]">Administradora</div>
            </div>
            <Chevron className="w-3.5 h-3.5 text-[#59655d]" />
          </div>
        </div>
      </aside>

      <div className="flex-1 flex flex-col min-w-0 bg-white">
        <header className="px-10 pt-7 pb-5 border-b border-[#f0f2ef]">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-1.5 text-[12px] text-[#818c84] mb-1 font-normal">
                <span>Workspace</span>
                <span>/</span>
                <span>Automação & campanhas</span>
              </div>
              <h1 className="text-[25px] font-bold text-[#141816] tracking-tight">Automação & campanhas</h1>
              <p className="text-[13px] text-[#758178] mt-0.5">A mensagem certa. No momento certo.</p>
            </div>
            <div className="bg-[#edf3ea] px-3.5 py-1.5 rounded-full flex items-center gap-2 text-[12px] text-[#2c3d2e] font-medium">
              <span className="w-2 h-2 rounded-full bg-[#52a136]" />
              <span>4 canais conectados</span>
            </div>
          </div>
        </header>
        <main className="flex-1 p-10 bg-[#fafbfa] overflow-y-auto">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h2 className="text-[20px] font-bold text-[#151916]">Nova campanha</h2>
              <div className="text-[12.5px] text-[#7a857e] mt-0.5">Reativação de leads · Rascunho guardado</div>
            </div>
            <Link href="/automacao-campanhas/rascunho" className="px-4 py-2 bg-white border border-[#e1e4df] rounded-full text-[12.5px] font-medium text-[#2d342f] hover:bg-[#f6f7f5] transition">
              Ver campanhas
            </Link>
          </div>
          <div className="grid grid-cols-12 gap-8 items-start">
            <div className="col-span-7 bg-white rounded-3xl p-7 border border-[#e6eae4] shadow-[0_2px_8px_rgba(0,0,0,0.02)] space-y-8">
              <div>
                <div className="flex items-start gap-3 mb-4">
                  <span className="w-6 h-6 rounded-full bg-[#181d1a] text-white flex items-center justify-center text-[12px] font-semibold shrink-0 mt-0.5">1</span>
                  <div>
                    <h3 className="font-bold text-[15px] text-[#171b18]">Escolha onde conversar</h3>
                    <p className="text-[12px] text-[#78837c]">Combine os canais que fazem sentido para o seu público.</p>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-3 pl-9">
                  <label htmlFor="direct-whatsapp" className="flex items-center gap-2.5 p-3.5 bg-[#edf4e8] border border-[#d6e3ce] rounded-xl cursor-pointer select-none">
                    <input id="direct-whatsapp" defaultChecked className="w-4 h-4 rounded accent-[#181d1a] border-gray-400" type="checkbox" />
                    <span className="text-[12.5px] font-medium text-[#1e231f]">WhatsApp</span>
                  </label>
                  <label htmlFor="direct-instagram" className="flex items-center gap-2.5 p-3.5 bg-white border border-[#e2e6df] rounded-xl cursor-pointer select-none hover:bg-gray-50">
                    <input id="direct-instagram" className="w-4 h-4 rounded accent-[#181d1a] border-gray-300" type="checkbox" />
                    <span className="text-[12.5px] font-medium text-[#4b544e]">Instagram</span>
                  </label>
                  <label htmlFor="direct-sms" className="flex items-center gap-2.5 p-3.5 bg-white border border-[#e2e6df] rounded-xl cursor-pointer select-none hover:bg-gray-50">
                    <input id="direct-sms" className="w-4 h-4 rounded accent-[#181d1a] border-gray-300" type="checkbox" />
                    <span className="text-[12.5px] font-medium text-[#4b544e]">SMS</span>
                  </label>
                  <label htmlFor="direct-email" className="flex items-center gap-2.5 p-3.5 bg-[#edf4e8] border border-[#d6e3ce] rounded-xl cursor-pointer select-none">
                    <input id="direct-email" defaultChecked className="w-4 h-4 rounded accent-[#181d1a] border-gray-400" type="checkbox" />
                    <span className="text-[12.5px] font-medium text-[#1e231f]">E-mail</span>
                  </label>
                </div>
              </div>
              <div>
                <div className="flex items-start gap-3 mb-3.5">
                  <span className="w-6 h-6 rounded-full bg-[#181d1a] text-white flex items-center justify-center text-[12px] font-semibold shrink-0 mt-0.5">2</span>
                  <div>
                    <h3 className="font-bold text-[15px] text-[#171b18]">Defina o público</h3>
                    <p className="text-[12px] text-[#78837c]">Um filtro simples para chegar às pessoas certas.</p>
                  </div>
                </div>
                <div className="pl-9 space-y-3">
                  <div className="relative">
                    <select id="direct-audience" defaultValue="Leads sem resposta há 7 dias" className="w-full bg-white border border-[#e1e5df] rounded-xl py-3 px-4 text-[13.5px] text-[#242b27] appearance-none focus:outline-none focus:border-[#9dc98f] cursor-pointer">
                      <option>Leads sem resposta há 7 dias</option>
                      <option>Novos contactos (últimas 24h)</option>
                      <option>Contactos inativos há 30 dias</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                      <Chevron />
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-[11.5px] text-[#6d7971] pt-1 pb-1">
                    <span className="font-semibold text-[#242b26]">50 contactos encontrados</span>
                    <span className="text-[#8e9891]">Apenas contactos com consentimento de comunicação.</span>
                  </div>
                </div>
              </div>
              <div className="pt-2 border-t border-[#f0f2ee]">
                <div className="flex items-start gap-3 mb-4">
                  <span className="w-6 h-6 rounded-full bg-[#181d1a] text-white flex items-center justify-center text-[12px] font-semibold shrink-0 mt-0.5">3</span>
                  <div>
                    <h3 className="font-bold text-[15px] text-[#171b18]">Dê voz à sua mensagem</h3>
                    <p className="text-[12px] text-[#78837c]">Escreva uma mensagem. A IA ajuda a torná-la mais pessoal.</p>
                  </div>
                </div>
                <div className="pl-9 space-y-3">
                  <div className="border border-[#e1e5df] rounded-2xl p-4 bg-white focus-within:border-[#9ecb90] transition">
                    <textarea
                      id="direct-message"
                      aria-label="Mensagem da campanha"
                      className="w-full border-0 p-0 text-[13.5px] leading-relaxed text-[#232925] placeholder-gray-400 focus:ring-0 resize-none font-normal"
                      placeholder="Escreva a sua mensagem..."
                      rows={4}
                      defaultValue="Olá, {{primeiro_nome}}. O teste de 14 dias da OZOU está disponível para a sua equipa. Quer descobrir como reunir todos os canais num único espaço?"
                    />
                    <div className="text-right text-[11px] text-[#939e96] pt-2">146 / 1.024 caracteres</div>
                  </div>
                  <div className="flex items-center justify-between pt-1">
                    <Link href="/automacao-campanhas/rascunho" className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-[#dde2db] rounded-full text-[12px] font-medium text-[#2d342f] hover:bg-[#f6f8f5] transition">
                      <svg className="w-3 h-3 text-[#181d1a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M12 3v3m0 12v3M3 12h3m12 0h3M5.636 5.636l2.122 2.122m8.484 8.484l2.122 2.122M5.636 18.364l2.122-2.122m8.484-8.484l2.122-2.122" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                      <span>Gerar variação com IA</span>
                    </Link>
                    <button className="text-[12.5px] font-medium text-[#465049] hover:text-[#181d1a] transition" type="button">
                      Personalizar +
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-5 space-y-6">
              <div className="bg-white rounded-3xl p-6 border border-[#e6eae4] shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                <h3 className="font-bold text-[16px] text-[#171b18]">A sua mensagem, em contexto.</h3>
                <div className="text-[12px] text-[#7d8881] mb-5">Pré-visualização · WhatsApp</div>
                <div className="bg-[#f5f6f4] rounded-2xl p-4">
                  <div className="mb-4">
                    <div className="text-[13.5px] font-bold text-[#191d1a]">Sofia Martins</div>
                    <div className="text-[11px] text-[#7c8780]">WhatsApp</div>
                  </div>
                  <div className="bg-[#def0d3] text-[#161a17] p-3.5 rounded-2xl rounded-tl-sm text-[12.5px] leading-relaxed relative pr-14 max-w-[95%]">
                    <p>Olá, Sofia. O teste de 14 dias da OZOU está disponível para a sua equipa. Quer descobrir como reunir todos os canais num único espaço?</p>
                    <div className="absolute bottom-2 right-2.5 flex items-center gap-1 text-[10px] text-[#60795c]">
                      <span>18:30</span>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9 13l4 4L23 7" opacity="0.7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#f4f7f2] rounded-3xl p-6 border border-[#e4ebe0]">
                <div className="flex items-center gap-2 text-[#181d1a] font-bold text-[15px] mb-3">
                  <svg className="w-4 h-4 text-[#2e3e2f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M12 3v3m0 12v3M3 12h3m12 0h3M5.636 5.636l2.122 2.122m8.484 8.484l2.122 2.122M5.636 18.364l2.122-2.122m8.484-8.484l2.122-2.122" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                  <span>Um bom momento para chegar.</span>
                </div>
                <div className="text-[14px] font-semibold text-[#1a1f1b] mb-2">Hoje, entre as 18:00 e as 19:00</div>
                <p className="text-[12.5px] text-[#627066] leading-relaxed mb-6">
                  Os seus contactos respondem mais neste intervalo. A IA sugere enviar às 18:30, com base nas interações dos últimos 30 dias.
                </p>
                <div className="text-[11px] text-[#86948a] font-medium pt-1">50 contactos · 2 canais · Fuso: Luanda</div>
              </div>
            </div>
          </div>
          <div className="mt-8 bg-white border border-[#e5e9e3] rounded-2xl px-6 py-4 flex items-center justify-between shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
            <div>
              <div className="font-bold text-[13.5px] text-[#191d1a]">Tudo pronto para voltar à conversa.</div>
              <div className="text-[11.5px] text-[#7c8780]">Pode rever ou cancelar antes do envio.</div>
            </div>
            <div className="flex items-center gap-3">
              <Link href="/automacao-campanhas/rever" className="px-5 py-2.5 bg-white border border-[#dde1db] rounded-full text-[13px] font-medium text-[#2d3530] hover:bg-[#f5f7f4] transition">
                Enviar agora
              </Link>
              <Link href="/automacao-campanhas/rever" className="flex items-center gap-2 px-5 py-2.5 bg-[#171a18] text-white rounded-full text-[13px] font-medium hover:bg-black transition shadow-sm">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M12 3v3m0 12v3M3 12h3m12 0h3M5.636 5.636l2.122 2.122m8.484 8.484l2.122 2.122M5.636 18.364l2.122-2.122m8.484-8.484l2.122-2.122" />
                </svg>
                <span>Agendar no melhor horário · 18:30</span>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
