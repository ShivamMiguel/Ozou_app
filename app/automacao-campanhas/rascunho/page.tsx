import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "OZOU — Automação & campanhas",
};

function Chevron({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

export default function CampanhaRascunhoPage() {
  return (
    <div className="bg-[#f9f9f8] text-[#1c1d1c] font-sans antialiased selection:bg-[#161917] selection:text-white flex app-shell h-dvh overflow-hidden ozou-draft">
      <style>{`
        .ozou-draft ::-webkit-scrollbar { width: 6px; height: 6px; }
        .ozou-draft ::-webkit-scrollbar-track { background: transparent; }
        .ozou-draft ::-webkit-scrollbar-thumb { background: #e2e2df; border-radius: 9999px; }
      `}</style>
      <aside className="w-[260px] bg-white border-r border-[#e8e8e6] flex flex-col justify-between shrink-0 select-none overflow-y-auto">
        <div className="p-5 flex flex-col gap-6">
          <div className="flex items-center gap-1.5 px-2">
            <Link href="/" className="text-2xl font-black tracking-tight text-[#161917]">
              OZOU
            </Link>
            <span className="w-2 h-2 rounded-full bg-[#bef264] inline-block mb-1" />
          </div>
          <button className="flex items-center justify-between w-full p-2.5 rounded-xl bg-[#f6f6f5] hover:bg-[#efefed] transition border border-transparent" type="button">
            <div className="text-left leading-tight">
              <div className="font-semibold text-xs text-[#1c1d1c]">Studio Workspace</div>
              <div className="text-[11px] text-[#737373] mt-0.5">Plano Pro</div>
            </div>
            <Chevron className="w-4 h-4 text-[#737373]" />
          </button>
          <nav className="flex flex-col gap-1 mt-1">
            <div className="text-[10px] uppercase font-semibold tracking-wider text-[#737373] px-2.5 mb-1.5">Espaço de trabalho</div>
            <Link className="flex items-center justify-between px-3 py-2 rounded-xl text-sm font-medium text-[#4b4e4b] hover:bg-[#f6f6f5] transition" href="/inbox">
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-[#737373]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
                </svg>
                <span>Inbox unificado</span>
              </div>
              <span className="text-[11px] font-semibold bg-[#efefed] text-[#484a48] px-2 py-0.5 rounded-full">12</span>
            </Link>
            <Link className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium bg-[#161917] text-white shadow-sm" href="/automacao-campanhas/rascunho">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
              </svg>
              <span className="text-xs font-semibold leading-none">Automação & campanhas</span>
            </Link>
            <Link className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium text-[#4b4e4b] hover:bg-[#f6f6f5] transition" href="/insights">
              <svg className="w-4 h-4 text-[#737373]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
              </svg>
              <span>Insights & métricas</span>
            </Link>
            <Link className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium text-[#4b4e4b] hover:bg-[#f6f6f5] transition" href="/contactos">
              <svg className="w-4 h-4 text-[#737373]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
              </svg>
              <span>Contactos</span>
            </Link>
            <Link className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium text-[#4b4e4b] hover:bg-[#f6f6f5] transition" href="/inicio">
              <svg className="w-4 h-4 text-[#737373]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
              </svg>
              <span>Início</span>
            </Link>
            <Link className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium text-[#4b4e4b] hover:bg-[#f6f6f5] transition" href="/empresas">
              <svg className="w-4 h-4 text-[#737373]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
              </svg>
              <span>Empresas</span>
            </Link>
          </nav>
        </div>
        <div className="p-4 flex flex-col gap-4">
          <div className="bg-[#f3f4f1] p-4 rounded-2xl flex flex-col gap-3 relative overflow-hidden">
            <div className="w-5 h-5 flex items-center justify-center">
              <svg className="w-4 h-4 text-[#161917]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l2.4 6.8L21 11.2l-5.6 4.4L17 22l-5-4-5 4 1.6-6.4L3 11.2l6.6-2.4z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[#1c1d1c] leading-snug">
                Menos tarefas.
                <br />
                Mais conversas.
              </h4>
              <a className="inline-flex items-center gap-1 text-[11px] font-medium text-[#737373] hover:text-black mt-2" href="#">
                A IA trata do resto.
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-1 text-sm text-[#4b4e4b] px-1">
            <Link className="flex items-center gap-3 py-1.5 hover:text-black transition" href="/ajuda">
              <svg className="w-4 h-4 text-[#737373]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
              </svg>
              <span className="text-xs">Ajuda e suporte</span>
            </Link>
            <Link className="flex items-center gap-3 py-1.5 hover:text-black transition" href="/definicoes/equipa">
              <svg className="w-4 h-4 text-[#737373]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
              </svg>
              <span className="text-xs">Definições</span>
            </Link>
          </div>
          <div className="border-t border-[#e8e8e6] pt-3.5 flex items-center justify-between px-1 cursor-pointer">
            <div className="leading-tight">
              <p className="font-medium text-xs text-[#1c1d1c]">Mariana Costa</p>
              <p className="text-[11px] text-[#737373]">Administradora</p>
            </div>
            <Chevron className="w-3.5 h-3.5 text-[#737373]" />
          </div>
        </div>
      </aside>

      <div className="flex-1 flex flex-col app-shell h-dvh overflow-hidden">
        <header className="h-20 bg-white border-b border-[#e8e8e6] px-8 flex items-center justify-between shrink-0">
          <div>
            <nav className="flex items-center text-xs text-[#737373] space-x-1.5 mb-1">
              <span>Workspace</span>
              <span>/</span>
              <span className="text-[#3b3d3b]">Automação & campanhas</span>
            </nav>
            <div className="flex items-baseline gap-3">
              <h1 className="text-xl font-bold text-[#161917] tracking-tight">Automação & campanhas</h1>
              <p className="text-xs text-[#737373]">A mensagem certa. No momento certo.</p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-[#f0f3eb] px-3 py-1.5 rounded-full border border-[#e4ecdd]">
            <span className="w-2 h-2 rounded-full bg-[#65a30d]" />
            <span className="text-xs font-medium text-[#365314]">4 canais conectados</span>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto px-8 py-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-[#161917]">Nova campanha</h2>
              <p className="text-xs text-[#737373] mt-0.5">Reativação de leads · Rascunho guardado</p>
            </div>
            <Link href="/automacao-campanhas" className="px-4 py-2 bg-white border border-[#e8e8e6] rounded-full text-xs font-semibold text-[#1c1d1c] hover:bg-[#f6f6f5] transition">
              Ver campanhas
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start pb-24">
            <section className="lg:col-span-8 bg-white border border-[#e8e8e6] rounded-3xl p-6 sm:p-7 shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#161917] text-white flex items-center justify-center text-xs font-semibold shrink-0 mt-0.5">1</span>
                  <div>
                    <h3 className="font-semibold text-sm text-[#161917]">Escolha onde conversar</h3>
                    <p className="text-xs text-[#737373] mt-0.5">Combine os canais que fazem sentido para o seu público.</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pl-9">
                  <label htmlFor="draft-whatsapp" className="flex items-center gap-2.5 p-3 rounded-xl border border-[#d6e3c9] bg-[#f0f4ea] cursor-pointer hover:bg-[#ebf2e4] transition">
                    <input id="draft-whatsapp" defaultChecked className="w-4 h-4 rounded accent-[#161917] border-gray-400" type="checkbox" />
                    <span className="text-xs font-medium text-[#1c1d1c]">WhatsApp</span>
                  </label>
                  <label htmlFor="draft-instagram" className="flex items-center gap-2.5 p-3 rounded-xl border border-[#e8e8e6] hover:bg-[#fcfcfb] cursor-pointer transition">
                    <input id="draft-instagram" className="w-4 h-4 rounded accent-[#161917] border-gray-300" type="checkbox" />
                    <span className="text-xs font-medium text-[#1c1d1c]">Instagram</span>
                  </label>
                  <label htmlFor="draft-sms" className="flex items-center gap-2.5 p-3 rounded-xl border border-[#e8e8e6] hover:bg-[#fcfcfb] cursor-pointer transition">
                    <input id="draft-sms" className="w-4 h-4 rounded accent-[#161917] border-gray-300" type="checkbox" />
                    <span className="text-xs font-medium text-[#1c1d1c]">SMS</span>
                  </label>
                  <label htmlFor="draft-email" className="flex items-center gap-2.5 p-3 rounded-xl border border-[#d6e3c9] bg-[#f0f4ea] cursor-pointer hover:bg-[#ebf2e4] transition">
                    <input id="draft-email" defaultChecked className="w-4 h-4 rounded accent-[#161917] border-gray-400" type="checkbox" />
                    <span className="text-xs font-medium text-[#1c1d1c]">E-mail</span>
                  </label>
                </div>
              </div>
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#161917] text-white flex items-center justify-center text-xs font-semibold shrink-0 mt-0.5">2</span>
                  <div>
                    <h3 className="font-semibold text-sm text-[#161917]">Defina o público</h3>
                    <p className="text-xs text-[#737373] mt-0.5">Um filtro simples para chegar às pessoas certas.</p>
                  </div>
                </div>
                <div className="pl-9 space-y-3">
                  <div className="relative">
                    <select id="draft-audience" defaultValue="Leads sem resposta há 7 dias" className="w-full appearance-none bg-white border border-[#e8e8e6] rounded-xl px-4 py-2.5 text-xs text-[#1c1d1c] focus:outline-none focus:border-gray-400 cursor-pointer pr-10">
                      <option>Leads sem resposta há 7 dias</option>
                      <option>Novos contactos (últimas 24h)</option>
                      <option>Clientes inativos há mais de 30 dias</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-[#737373]">
                      <Chevron />
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-[11px] pt-0.5">
                    <span className="font-medium text-[#1c1d1c]">50 contactos encontrados</span>
                    <span className="text-[#737373]">Apenas contactos com consentimento de comunicação.</span>
                  </div>
                </div>
              </div>
              <div className="border-t border-[#f0f0ed] pt-2" />
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#161917] text-white flex items-center justify-center text-xs font-semibold shrink-0 mt-0.5">3</span>
                  <div>
                    <h3 className="font-semibold text-sm text-[#161917]">Dê voz à sua mensagem</h3>
                    <p className="text-xs text-[#737373] mt-0.5">Escreva uma mensagem. A IA ajuda a torná-la mais pessoal.</p>
                  </div>
                </div>
                <div className="pl-9 space-y-4">
                  <div className="border border-[#e8e8e6] rounded-2xl p-4 bg-white focus-within:border-gray-400 transition">
                    <textarea
                      id="draft-message"
                      aria-label="Mensagem da campanha"
                      className="w-full border-0 p-0 text-xs sm:text-sm text-[#1c1d1c] focus:ring-0 resize-none font-normal leading-relaxed"
                      placeholder="Escreva a sua mensagem..."
                      rows={4}
                      defaultValue={"Olá, {{primeiro_nome}}! 👋\nAinda podemos ajudar a simplificar o seu dia a dia?\nExperimente a OZOU com a sua equipa. Estamos por aqui."}
                    />
                    <div className="text-right text-[11px] text-[#737373] mt-3">133 / 1.024 caracteres</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <Link href="/automacao-campanhas/variacoes" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#e8e8e6] bg-white text-xs font-medium text-[#1c1d1c] hover:bg-[#f6f6f5] transition">
                      <svg className="w-3.5 h-3.5 text-[#161917]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l2 5 5 2-5 2-2 5-2-5-5-2 5-2 2-5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                      Gerar variação com IA
                    </Link>
                    <button className="text-xs font-medium text-[#737373] hover:text-[#1c1d1c] transition flex items-center gap-1" type="button">
                      Personalizar <span>+</span>
                    </button>
                  </div>
                </div>
              </div>
            </section>
            <aside className="lg:col-span-4 space-y-5">
              <div className="bg-white border border-[#e8e8e6] rounded-3xl p-5 shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-4">
                <div>
                  <h3 className="font-semibold text-sm text-[#161917]">A sua mensagem, em contexto.</h3>
                  <p className="text-xs text-[#737373] mt-0.5">Pré-visualização · WhatsApp</p>
                </div>
                <div className="bg-[#f5f6f4] rounded-2xl p-4 border border-[#e8ece3] space-y-3">
                  <div className="border-b border-[#e2e6dd] pb-2.5">
                    <h4 className="font-semibold text-xs text-[#1c1d1c]">Sofia Martins</h4>
                    <span className="text-[10px] text-[#737373]">WhatsApp</span>
                  </div>
                  <div className="bg-[#e4edd4] p-3 rounded-2xl rounded-tl-sm text-xs leading-relaxed text-[#1a2e12] space-y-2">
                    <p>Olá, Sofia! 👋</p>
                    <p>Ainda podemos ajudar a simplificar o seu dia a dia?</p>
                    <p>Experimente a OZOU com a sua equipa. Estamos por aqui.</p>
                    <div className="flex items-center justify-end gap-1 text-[10px] text-[#6b7c5b] mt-1">
                      <span>18:30</span>
                      <svg className="w-3 h-3 text-[#528a42]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M5 13l4 4L19 7M11 13l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#f2f4ee] border border-[#e1e6d9] rounded-3xl p-5 space-y-3">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-[#1c1d1c]">
                  <svg className="w-3.5 h-3.5 text-[#161917]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l2 5 5 2-5 2-2 5-2-5-5-2 5-2 2-5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
                  </svg>
                  <span>Um bom momento para chegar.</span>
                </div>
                <div className="text-xs font-semibold text-[#161917]">Hoje, entre as 18:00 e as 19:00</div>
                <p className="text-xs text-[#737373] leading-relaxed">
                  Os seus contactos respondem mais neste intervalo. A IA sugere enviar às 18:30, com base nas interações dos últimos 30 dias.
                </p>
                <div className="pt-2 text-[11px] text-[#787d74] border-t border-[#e2e7da]">50 contactos · 2 canais · Fuso: Luanda</div>
              </div>
            </aside>
          </div>
        </main>
        <footer className="bg-white border-t border-[#e8e8e6] px-8 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 shrink-0 shadow-lg">
          <div className="leading-tight">
            <h4 className="text-xs font-semibold text-[#161917]">Tudo pronto para voltar à conversa.</h4>
            <p className="text-[11px] text-[#737373] mt-0.5">Pode rever ou cancelar antes do envio.</p>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/automacao-campanhas/rever" className="px-5 py-2.5 rounded-full border border-[#e8e8e6] text-xs font-semibold text-[#161917] hover:bg-[#f6f6f5] transition">
              Enviar agora
            </Link>
            <Link href="/automacao-campanhas/rever" className="px-5 py-2.5 rounded-full bg-[#161917] hover:bg-[#252a27] text-white text-xs font-semibold inline-flex items-center gap-2 shadow-sm transition">
              <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l2 5 5 2-5 2-2 5-2-5-5-2 5-2 2-5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
              Agendar no melhor horário · 18:30
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
