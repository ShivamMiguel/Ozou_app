import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "OZOU — Automação & campanhas (Variações de mensagem com IA)",
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
  ["/contactos", "Contactos", "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"],
  ["/inicio", "Início", "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"],
  ["/empresas", "Empresas", "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"],
] as const;

export default function VariacoesPage() {
  return (
    <div className="relative min-h-screen select-none overflow-x-hidden text-[13px] text-[#161817] ozou-variacoes" style={{ backgroundColor: "#DDE2DE" }}>
      <style>{`.ozou-variacoes ::-webkit-scrollbar{width:6px;height:6px}.ozou-variacoes ::-webkit-scrollbar-thumb{background:rgba(0,0,0,0.15);border-radius:9999px}`}</style>
      <div className="flex min-h-screen w-full bg-[#DDE2DE]">
        <aside className="w-64 flex-shrink-0 flex flex-col justify-between border-r border-[#D3D8D2]/80 bg-[#E3E7E3] p-5 h-screen sticky top-0">
          <div className="flex flex-col space-y-6">
            <div className="flex items-center space-x-2 pt-1 pb-1">
              <Link href="/" className="text-2xl font-black tracking-tight text-[#161817]">OZOU</Link>
              <span className="h-2 w-2 rounded-full bg-[#8EBF47] mt-1.5 inline-block" />
            </div>
            <div className="flex items-center justify-between rounded-xl bg-[#D6DCD5] p-3 px-3.5 cursor-pointer">
              <div className="flex flex-col text-left">
                <span className="text-xs font-semibold text-[#181B19]">Studio Workspace</span>
                <span className="text-[11px] text-[#69726E]">Plano Pro</span>
              </div>
              <Icon className="h-3.5 w-3.5 text-[#5F6764] stroke-[2]" d="M19 9l-7 7-7-7" />
            </div>
            <div className="space-y-1">
              <div className="px-2 pb-2 text-[10px] font-bold uppercase tracking-wider text-[#79837E]">Espaço de trabalho</div>
              <Link className="flex items-center justify-between rounded-lg px-3 py-2 text-[#464D49] hover:bg-[#D8DED7]" href="/inbox">
                <div className="flex items-center space-x-3">
                  <Icon className="h-4 w-4 stroke-[1.8]" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                  <span className="font-medium text-[13px]">Inbox unificado</span>
                </div>
                <span className="rounded bg-[#D5DDD4] px-1.5 py-0.5 text-[11px] font-semibold text-[#535C58]">12</span>
              </Link>
              <Link className="flex items-center space-x-3 rounded-xl bg-[#1C201F] px-3.5 py-2.5 text-white shadow-sm" href="/automacao-campanhas/variacoes">
                <Icon className="h-4 w-4 stroke-[1.8]" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                <span className="font-medium text-[13px] leading-tight">Automação &<br />campanhas</span>
              </Link>
              {nav.map(([href, label, d]) => (
                <Link key={href} className="flex items-center space-x-3 rounded-lg px-3 py-2 text-[#464D49] hover:bg-[#D8DED7]" href={href}>
                  <Icon className="h-4 w-4 stroke-[1.8]" d={d} />
                  <span className="font-medium text-[13px]">{label}</span>
                </Link>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <div className="rounded-2xl bg-[#D6DCD5]/80 p-3.5 border border-[#C9D0C8]">
              <div className="text-[#2F3432] mb-1">
                <Icon className="w-4 h-4 stroke-[2]" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </div>
              <div className="font-semibold text-[13px] text-[#1D211F] leading-snug">Menos tarefas.<br />Mais conversas.</div>
              <div className="mt-2 flex items-center justify-between text-[11px] text-[#5A635F]"><span>A IA trata do resto.</span><span>↗</span></div>
            </div>
            <div className="space-y-1 text-[#464D49]">
              <Link className="flex items-center space-x-2.5 px-2 py-1 text-xs hover:text-[#181B19]" href="/ajuda">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" strokeWidth="1.8" /><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3m0 3.5h.01" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" /></svg>
                <span>Ajuda e suporte</span>
              </Link>
              <Link className="flex items-center space-x-2.5 px-2 py-1 text-xs hover:text-[#181B19]" href="/definicoes/equipa">
                <Icon className="h-4 w-4 stroke-[1.8]" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                <span>Definições</span>
              </Link>
            </div>
            <div className="border-t border-[#D2D8D1] pt-3 flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-[#181B19]">Mariana Costa</span>
                <span className="text-[11px] text-[#69726E]">Administradora</span>
              </div>
              <Icon className="h-3.5 w-3.5 text-[#5F6764] stroke-[2]" d="M19 9l-7 7-7-7" />
            </div>
          </div>
        </aside>
        <main className="flex-1 px-10 py-7 overflow-y-auto">
          <header className="-mx-10 -mt-7 px-10 pt-7 pb-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[12px] text-[#656E6A] flex items-center space-x-1 mb-1"><span>Workspace</span><span>/</span><span>Automação & campanhas</span></div>
              <h1 className="text-2xl font-bold tracking-tight text-[#161817]">Automação & campanhas</h1>
              <p className="text-xs text-[#626A66] mt-0.5">A mensagem certa. No momento certo.</p>
            </div>
            <div className="flex items-center space-x-2 bg-[#D1D8D0] px-3.5 py-1.5 rounded-full text-xs font-medium text-[#3A413D]">
              <span className="h-2 w-2 rounded-full bg-[#759E3F]" /><span>4 canais conectados</span>
            </div>
          </div>
          </header>
          <div className="mt-6 border-b border-[#CCD2CB]" />
          <div className="flex items-center justify-between mt-5 mb-5">
            <div>
              <h2 className="text-xl font-bold text-[#141715]">Nova campanha</h2>
              <p className="text-xs text-[#636C68]">Reativação de leads · Rascunho</p>
            </div>
            <Link href="/campanhas" className="px-4 py-1.5 rounded-full border border-[#B6BCB4] text-xs font-semibold text-[#292F2C]">Ver campanhas</Link>
          </div>
          <div className="grid grid-cols-12 gap-6 pb-20">
            <div className="col-span-7 bg-[#E6ECE4]/90 border border-[#D5DCD3] rounded-3xl p-6 shadow-sm space-y-6">
              <div>
                <div className="flex items-center space-x-3 mb-2.5">
                  <span className="w-6 h-6 rounded-full bg-[#181C1A] text-white text-xs flex items-center justify-center font-bold">1</span>
                  <div><span className="font-bold text-sm text-[#1B1E1D]">Escolha os canais</span><p className="text-xs text-[#666F6A]">Combine os canais onde os seus clientes estão.</p></div>
                </div>
                <div className="ml-9 inline-flex items-center space-x-2 bg-[#D7DDD5] border border-[#BAC3B9] px-3 py-1.5 rounded-lg text-xs font-medium text-[#1E2220]"><span className="text-black font-bold">✓</span><span>WhatsApp</span></div>
              </div>
              <div>
                <div className="flex items-center space-x-3 mb-2.5">
                  <span className="w-6 h-6 rounded-full bg-[#181C1A] text-white text-xs flex items-center justify-center font-bold">2</span>
                  <div><span className="font-bold text-sm text-[#1B1E1D]">Defina o público</span><p className="text-xs text-[#666F6A]">Um filtro simples para segmentar.</p></div>
                </div>
                <div className="ml-9 space-y-2">
                  <div className="bg-[#DCE3DA] border border-[#CCD4C9] rounded-lg px-3.5 py-2 text-xs text-[#262A28] max-w-sm">Leads sem resposta &gt; 7 dias</div>
                  <p className="text-xs font-medium text-[#2F3431]">50 contactos encontrados.</p>
                </div>
              </div>
              <div>
                <div className="flex items-center space-x-3 mb-2.5">
                  <span className="w-6 h-6 rounded-full bg-[#181C1A] text-white text-xs flex items-center justify-center font-bold">3</span>
                  <div><span className="font-bold text-sm text-[#1B1E1D]">Dê voz à campanha</span><p className="text-xs text-[#666F6A]">Escreva uma mensagem autêntica.</p></div>
                </div>
                <div className="ml-9 space-y-3">
                  <div className="bg-[#ECEFEA] border border-[#CED5CC] rounded-2xl p-4 text-xs text-[#2A2E2C] space-y-2">
                    <p className="leading-relaxed">Olá, {"{{primeiro_nome}}"}! Tudo bem?<br />Ainda podemos ajudar a simplificar o dia a dia da sua equipa?<br />Experimente a OZOU com a sua equipa. Estamos por aqui.</p>
                    <div className="text-[11px] text-[#7A837E] pt-2">133 / 1.024 caracteres</div>
                  </div>
                  <button className="inline-flex items-center space-x-2 border border-[#BFC6BD] bg-[#E1E7DF] px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#272C29]" type="button"><span>✧</span><span>Gerar variação com IA</span></button>
                </div>
              </div>
            </div>
            <div className="col-span-5 space-y-5">
              <div className="bg-[#E6ECE4]/90 border border-[#D5DCD3] rounded-3xl p-5 shadow-sm">
                <h3 className="font-bold text-sm text-[#1A1D1C]">A sua mensagem, em contexto.</h3>
                <p className="text-[11px] text-[#69726E] mb-3">Pré-visualização · WhatsApp</p>
                <div className="bg-[#D9E0D7] border border-[#CBD3C8] rounded-2xl p-4">
                  <div className="text-xs font-bold text-[#1E2220]">Sofia Martins</div>
                  <div className="text-[10px] text-[#6E7772] mb-3">WhatsApp</div>
                  <div className="bg-[#C9D7BE] text-[#171B19] rounded-2xl rounded-tl-sm p-3 text-xs leading-relaxed max-w-[90%] shadow-sm">
                    Olá, Sofia! 👋<br />Ainda podemos ajudar a simplificar o seu dia a dia?<br />Experimente a OZOU com a sua equipa. Estamos por aqui.
                    <div className="text-[9px] text-[#5C675B] text-right mt-1 flex justify-end items-center space-x-1"><span>18:30</span><span>✓✓</span></div>
                  </div>
                </div>
              </div>
              <div className="bg-[#E6ECE4]/90 border border-[#D5DCD3] rounded-3xl p-5 shadow-sm space-y-2">
                <h3 className="font-bold text-sm text-[#1A1D1C]">Um bom momento para chegar.</h3>
                <div className="text-xs font-semibold text-[#252A27]">Hoje, entre as 18:00 e as 19:00</div>
                <p className="text-xs text-[#5D6662] leading-relaxed">Os seus contactos respondem mais neste intervalo. A IA sugere enviar às 18:30, com base nas interações dos últimos 30 dias.</p>
                <div className="pt-2 text-[11px] text-[#717A75]">50 contactos · 2 canais · Fuso: Luanda</div>
              </div>
            </div>
          </div>
          <div className="fixed bottom-4 left-72 right-8 bg-[#D3DAD0]/90 backdrop-blur border border-[#C2C9BF] rounded-2xl p-3 flex items-center justify-between">
            <div>
              <div className="font-bold text-xs text-[#1B1E1C]">Tudo pronto para voltar à conversa.</div>
              <div className="text-[11px] text-[#666F6A]">Pode rever ou cancelar antes do envio.</div>
            </div>
            <div className="flex items-center space-x-3">
              <Link href="/automacao-campanhas/enviada" className="px-4 py-2 rounded-full border border-[#B1B8AE] bg-[#D7DED4] text-xs font-semibold text-[#1C201E]">Enviar agora</Link>
              <Link href="/automacao-campanhas/agendada" className="px-4 py-2 rounded-full bg-[#181B1A] text-white text-xs font-medium flex items-center space-x-2"><span>✧</span><span>Agendar no melhor horário · 18:30</span></Link>
            </div>
          </div>
        </main>
      </div>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/25 backdrop-blur-[2px] p-4">
        <div className="relative w-full max-w-[620px] rounded-[34px] bg-[#FFFFFF] p-8 shadow-2xl" role="dialog" aria-labelledby="variacoes-title">
          <Link aria-label="Fechar" className="absolute top-6 right-6 flex h-9 w-9 items-center justify-center rounded-full border border-[#E7E9E7] bg-white text-[#525754] hover:bg-[#F4F6F4] transition-colors" href="/automacao-campanhas/rascunho">
            <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" viewBox="0 0 24 24">
              <line x1="18" x2="6" y1="6" y2="18" /><line x1="6" x2="18" y1="6" y2="18" />
            </svg>
          </Link>
          <div className="mb-6 pr-10">
            <h2 className="text-2xl font-bold tracking-tight text-[#111413]" id="variacoes-title">A mesma intenção. Outra voz.</h2>
            <p className="text-[13px] text-[#636C67] mt-1 font-normal">Escolha uma proposta e reveja antes de enviar.</p>
          </div>
          <div className="space-y-4">
            <article className="rounded-[24px] bg-[#F4F6F3] p-5 border border-[#ECEFEA]">
              <h3 className="font-bold text-[14px] text-[#161917] mb-2.5">Mais próxima</h3>
              <p className="text-[13.5px] leading-relaxed text-[#2C322F] mb-4">Olá, {"{{primeiro_nome}}"}! Ainda por aí?<br />Temos 14 dias para lhe mostrar como simplificar<br />as conversas da sua equipa. Vamos experimentar?</p>
              <button className="w-full flex items-center justify-center space-x-1.5 rounded-full bg-[#181B19] py-3 text-[13px] font-medium text-white hover:bg-black transition-all shadow-sm" type="button"><span>Usar esta variação</span><span className="text-sm">→</span></button>
            </article>
            <article className="rounded-[24px] bg-[#F4F6F3] p-5 border border-[#ECEFEA]">
              <h3 className="font-bold text-[14px] text-[#161917] mb-2.5">Mais direta</h3>
              <p className="text-[13.5px] leading-relaxed text-[#2C322F] mb-4">Olá, {"{{primeiro_nome}}"}. O teste de 14 dias da OZOU<br />está disponível para a sua equipa. Quer descobrir<br />como reunir todos os canais num único espaço?</p>
              <Link href="/automacao-campanhas/variacao-direta" className="w-full flex items-center justify-center space-x-1.5 rounded-full border border-[#D5DCD4] bg-white py-3 text-[13px] font-medium text-[#191D1A] hover:bg-[#F8FAF7] transition-all"><span>Usar esta variação</span><span className="text-sm">→</span></Link>
            </article>
          </div>
          <p className="mt-6 mb-4 text-[11.5px] text-[#69726D] font-normal">A IA pode cometer erros. Confirme nomes, factos e contexto.</p>
          <footer className="pt-1">
            <Link href="/automacao-campanhas/rascunho" className="w-full rounded-full border border-[#D4DDD3] py-2.5 text-[13px] font-medium text-[#1E2320] hover:bg-[#F6F8F5] transition-colors block text-center">Voltar à mensagem original</Link>
          </footer>
        </div>
      </div>
    </div>
  );
}
