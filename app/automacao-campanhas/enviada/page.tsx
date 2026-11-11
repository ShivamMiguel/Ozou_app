import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "OZOU — Campanha enviada",
};

export default function CampanhaEnviadaPage() {
  return (
    <div className="bg-[#dcdfdc] text-[#1c1e21] font-sans antialiased app-shell h-dvh overflow-hidden select-none">
      <div className="flex h-screen w-full relative filter brightness-[0.92] blur-[0.6px] pointer-events-none">
        <aside className="w-[240px] flex-shrink-0 bg-[#d9dcd8] border-r border-[#cfd2cd] flex flex-col justify-between p-4 h-full">
          <div className="space-y-6">
            <div className="flex items-center gap-2 px-2 pt-1">
              <span className="text-2xl font-black tracking-tight text-[#1c1e21]">OZOU</span>
              <span className="w-2 h-2 rounded-full bg-[#8bae82] inline-block mb-1" />
            </div>
            <div className="bg-[#ced2cb] rounded-xl p-3 flex items-center justify-between cursor-pointer">
              <div>
                <div className="text-xs font-bold text-[#1c1e21]">Studio Workspace</div>
                <div className="text-[11px] text-gray-500">Plano Pro</div>
              </div>
              <svg className="w-3.5 h-3.5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
            <nav className="space-y-1">
              <div className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider px-2.5 mb-2">Espaço de trabalho</div>
              <a className="flex items-center justify-between px-3 py-2 text-xs font-medium text-gray-600 rounded-lg" href="#">
                <div className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
                  </svg>
                  <span>Inbox unificado</span>
                </div>
                <span className="bg-[#cfd4ce] text-gray-700 text-[10px] font-bold px-1.5 py-0.5 rounded-full">12</span>
              </a>
              <a className="flex items-center gap-2.5 px-3 py-2 text-xs font-medium bg-[#1e2022] text-white rounded-xl shadow-sm" href="#">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
                <span>Automação & campanhas</span>
              </a>
              <a className="flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-gray-600 rounded-lg" href="#">
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
                </svg>
                <span>Insights & métricas</span>
              </a>
              <a className="flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-gray-600 rounded-lg" href="#">
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
                </svg>
                <span>Contactos</span>
              </a>
              <a className="flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-gray-600 rounded-lg" href="#">
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
                </svg>
                <span>Início</span>
              </a>
              <a className="flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-gray-600 rounded-lg" href="#">
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
                </svg>
                <span>Empresas</span>
              </a>
            </nav>
          </div>
          <div className="space-y-4">
            <div className="bg-[#ced2cb] rounded-2xl p-4">
              <div className="flex items-center gap-1.5 text-xs text-gray-800 font-bold mb-1">
                <svg className="w-3.5 h-3.5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
                <span>Menos tarefas.</span>
              </div>
              <div className="text-xs font-bold text-gray-800 mb-2">Mais conversas.</div>
              <div className="flex items-center justify-between text-[11px] text-gray-600 font-medium">
                <span>A IA trata do resto.</span>
                <svg className="w-3 h-3 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </div>
            </div>
            <div className="space-y-1">
              <a className="flex items-center gap-2 px-2 py-1 text-xs text-gray-600" href="#">
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
                <span>Ajuda e suporte</span>
              </a>
              <a className="flex items-center gap-2 px-2 py-1 text-xs text-gray-600" href="#">
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
                <span>Definições</span>
              </a>
            </div>
            <div className="pt-2 border-t border-[#cbd0c9] flex items-center justify-between px-2">
              <div>
                <div className="text-xs font-bold text-gray-800">Mariana Costa</div>
                <div className="text-[10px] text-gray-500">Administradora</div>
              </div>
              <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </aside>

        <main className="flex-1 flex flex-col h-full bg-[#dcdfdc] overflow-y-auto">
          <header className="px-8 pt-6 pb-4 flex justify-between items-start border-b border-[#cfd2cd]/40">
            <div>
              <div className="text-[11px] text-gray-500 flex items-center gap-1.5">
                <span>Workspace</span>
                <span>/</span>
                <span>Automação & campanhas</span>
              </div>
              <h1 className="text-2xl font-bold text-[#1c1e21] mt-1">Automação & campanhas</h1>
              <p className="text-xs text-gray-500 mt-0.5">A mensagem certa. No momento certo.</p>
            </div>
            <div className="flex items-center gap-2 bg-[#cfd3ce] px-3 py-1.5 rounded-full text-xs text-gray-700">
              <span className="w-2 h-2 rounded-full bg-emerald-600" />
              <span className="font-medium">4 canais conectados</span>
            </div>
          </header>
          <div className="px-8 py-4 flex justify-between items-center">
            <div>
              <h2 className="text-xl font-bold text-gray-900 tracking-tight">Nova campanha</h2>
              <p className="text-xs text-gray-500 mt-0.5">Reativação de leads · Rascunho</p>
            </div>
            <button className="bg-[#ced2cb] text-xs font-semibold text-gray-800 px-4 py-2 rounded-full border border-gray-300" type="button">
              Ver campanhas
            </button>
          </div>
          <div className="px-8 pb-24 grid grid-cols-12 gap-6">
            <div className="col-span-6 space-y-4">
              <div className="bg-[#e4e7e3] border border-[#cfd2cd] rounded-2xl p-4">
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#1c1e21] text-white flex items-center justify-center text-xs font-bold">1</span>
                  <div>
                    <h3 className="text-xs font-bold text-gray-900">Escolha os canais</h3>
                    <p className="text-[10px] text-gray-500">Combine os canais ideais.</p>
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-2 bg-[#d7dad5] p-2 rounded-lg w-max text-xs font-medium">
                  <span className="w-3.5 h-3.5 bg-black text-white rounded flex items-center justify-center text-[9px]">✓</span>
                  <span>WhatsApp</span>
                </div>
              </div>
              <div className="bg-[#e4e7e3] border border-[#cfd2cd] rounded-2xl p-4">
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#1c1e21] text-white flex items-center justify-center text-xs font-bold">2</span>
                  <div>
                    <h3 className="text-xs font-bold text-gray-900">Defina o público</h3>
                    <p className="text-[10px] text-gray-500">Um filtro simples e inteligente.</p>
                  </div>
                </div>
                <div className="mt-3 bg-[#d7dad5] px-3 py-2 rounded-lg text-xs font-medium w-max">Leads sem resposta há mais de 15 dias</div>
                <div className="text-[10px] text-gray-500 mt-2 font-medium">50 contactos encontrados</div>
              </div>
              <div className="bg-[#e4e7e3] border border-[#cfd2cd] rounded-2xl p-4">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-6 h-6 rounded-full bg-[#1c1e21] text-white flex items-center justify-center text-xs font-bold">3</span>
                  <div>
                    <h3 className="text-xs font-bold text-gray-900">Dê voz à mensagem</h3>
                    <p className="text-[10px] text-gray-500">Escreva uma mensagem autêntica.</p>
                  </div>
                </div>
                <div className="bg-[#dadeda] p-3 rounded-xl border border-gray-300 text-xs leading-relaxed text-gray-800">
                  Olá, {"{{primeiro_nome}}"}! 👋
                  <br />
                  Ainda podemos ajudar a simplificar o seu dia a dia?
                  <br />
                  Experimente a OZOU com a sua equipa. Estamos por aqui.
                  <div className="text-[10px] text-gray-400 mt-2">133 / 1.024 caracteres</div>
                </div>
                <div className="mt-3 inline-flex items-center gap-1.5 text-xs text-gray-700 bg-[#d7dad5] px-3 py-1.5 rounded-full font-medium">
                  <span>✧ Gerar variação com IA</span>
                </div>
              </div>
            </div>
            <div className="col-span-6 space-y-4">
              <div className="bg-[#e4e7e3] border border-[#cfd2cd] rounded-2xl p-5">
                <h3 className="text-xs font-bold text-gray-900 mb-1">A sua mensagem, em contexto.</h3>
                <p className="text-[10px] text-gray-500 mb-4">Pré-visualização · WhatsApp</p>
                <div className="bg-[#dcdfdc] rounded-2xl p-4 border border-[#ced2cb]">
                  <div className="text-[11px] font-bold text-gray-800 mb-0.5">Sofia Martins</div>
                  <div className="text-[9px] text-gray-400 mb-3">WhatsApp</div>
                  <div className="bg-[#d8e2d4] p-3 rounded-2xl max-w-[85%] text-xs text-gray-800 space-y-1 relative ml-auto shadow-sm">
                    <p>Olá, Sofia! 👋</p>
                    <p>Ainda podemos ajudar a simplificar o seu dia a dia?</p>
                    <p>Experimente a OZOU com a sua equipa. Estamos por aqui.</p>
                    <div className="text-[9px] text-gray-500 text-right mt-1 flex items-center justify-end gap-1">
                      <span>18:30</span>
                      <span>✓✓</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#e4e7e3] border border-[#cfd2cd] rounded-2xl p-5">
                <h3 className="text-xs font-bold text-gray-900">Um bom momento para chegar.</h3>
                <p className="text-sm font-semibold text-gray-800 mt-2">Hoje, entre as 18:00 e as 19:00</p>
                <p className="text-[11px] text-gray-600 mt-1 leading-relaxed">
                  Os seus contactos respondem mais neste intervalo. A IA sugere enviar às 18:30, com base nas interações dos últimos 30 dias.
                </p>
                <div className="text-[10px] text-gray-400 mt-4">50 contactos · 2 canais · Fuso: Luanda</div>
              </div>
            </div>
          </div>
          <div className="fixed bottom-0 right-0 left-[240px] bg-[#d9dcd8] border-t border-[#cfd2cd] px-8 py-3.5 flex items-center justify-between">
            <div>
              <div className="text-xs font-bold text-gray-900">Tudo pronto para voltar à conversa.</div>
              <div className="text-[10px] text-gray-500">Pode rever ou cancelar antes do envio.</div>
            </div>
            <div className="flex items-center gap-3">
              <button className="px-4 py-2 rounded-full border border-gray-400 text-xs font-medium text-gray-700 bg-[#ced2cb]" type="button">
                Enviar agora
              </button>
              <button className="px-5 py-2 rounded-full text-xs font-medium text-white bg-[#1c1e21] flex items-center gap-1.5 shadow-sm" type="button">
                <span>✧</span> Agendar no melhor horário · 18:30
              </button>
            </div>
          </div>
        </main>
      </div>

      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/25 backdrop-blur-[2px] p-4">
        <div className="bg-white w-full max-w-[640px] rounded-[36px] shadow-2xl relative p-9 md:p-10 flex flex-col">
          <Link
            aria-label="Fechar"
            href="/automacao-campanhas"
            className="absolute top-6 right-6 w-9 h-9 rounded-full border border-gray-200/80 bg-white hover:bg-gray-50 text-gray-500 hover:text-gray-900 flex items-center justify-center transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            <span className="text-base font-normal leading-none -mt-0.5">×</span>
          </Link>
          <div className="w-full mb-8">
            <div className="inline-flex items-center gap-2 bg-[#f0f4ef] text-[#223322] px-4 py-3 rounded-2xl">
              <svg className="w-4 h-4 text-[#202920]" fill="currentColor" viewBox="0 0 20 20">
                <path clipRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fillRule="evenodd" />
              </svg>
              <span className="text-[15px] font-semibold tracking-tight text-[#1c221a]">Envio concluído</span>
            </div>
          </div>
          <h2 className="text-[34px] sm:text-[38px] leading-[1.12] font-semibold text-[#181a18] tracking-tight mb-5">
            Uma nova oportunidade para 50 conversas.
          </h2>
          <p className="text-[14px] leading-relaxed text-[#5c615c] mb-7">
            A campanha Reativação de leads foi enviada.
            <br />
            50 contactos · WhatsApp e E-mail
            <br />
            Os resultados vão sendo atualizados nos insights.
          </p>
          <div className="bg-[#f5f6f4] rounded-2xl p-6 mb-7 border border-[#ecefe9]">
            <h3 className="text-[15px] font-semibold text-[#1a1c1a] tracking-tight mb-2">As respostas chegam ao Inbox unificado.</h3>
            <p className="text-[13px] leading-relaxed text-[#686d67]">
              Acompanhe entregas, respostas e conversão.
              <br />
              A sua equipa continua a conversa no mesmo espaço.
            </p>
          </div>
          <div className="space-y-3">
            <Link
              href="/automacao-campanhas"
              className="w-full py-4 px-6 bg-[#1a1c1e] hover:bg-[#282a2d] active:bg-[#111213] text-white rounded-full font-medium text-[14px] flex items-center justify-center gap-2 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
            >
              <span>Ver a campanha</span>
              <span className="text-sm font-light">→</span>
            </Link>
            <Link
              href="/insights"
              className="w-full py-3.5 px-6 bg-white hover:bg-gray-50 active:bg-gray-100 text-[#252826] border border-[#d6dad5] rounded-full font-medium text-[14px] flex items-center justify-center gap-1.5 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
            >
              <span>Acompanhar insights</span>
              <span className="text-xs font-normal">↗</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
