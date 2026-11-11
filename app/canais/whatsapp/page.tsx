import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "OZOU — Conectar WhatsApp",
};

const jakartaScope = {
  "--font-sans": 'var(--font-jakarta), "Plus Jakarta Sans", sans-serif',
  fontFamily: 'var(--font-jakarta), "Plus Jakarta Sans", sans-serif',
} as CSSProperties;

const chats = [
  { name: "Sofia Martins", channel: "WhatsApp", preview: "Olá! Gost... sobre...", active: true },
  { name: "Miguel Santos", channel: "Instagram", preview: "Obrigado", active: false },
  { name: "Inês Ferreira", channel: "E-mail", preview: "Re: Proposta de acompanhamento", active: false },
  { name: "João Almeida", channel: "SMS", preview: "Podemos confirmar amanhã?", active: false },
  { name: "Beatriz Costa", channel: "WhatsApp", preview: "Perfeito, aguardo envio.", active: false },
  { name: "Pedro Ribeiro", channel: "Instagram", preview: "Qual é o valor final?", active: false },
  { name: "Carolina Sousa", channel: "E-mail", preview: "Já recebi a informação.", active: false },
  { name: "Tiago Lopes", channel: "WhatsApp", preview: "Tenho interesse no plano Pro.", active: false },
];

const permissions = [
  "Receber e responder a mensagens",
  "Sincronizar contactos e estados de entrega",
  "Enviar campanhas autorizadas pela sua equipa",
];

export default function ConectarWhatsAppPage() {
  return (
    <div className="flex w-full app-shell h-dvh overflow-hidden text-neutral-900 bg-[#dbe0de] select-none" style={jakartaScope}>
      <aside className="w-64 flex-shrink-0 flex flex-col justify-between p-6 border-r border-[#cbcfce] bg-[#dbe0de]">
        <div className="space-y-6">
          <div className="flex items-center space-x-2">
            <Link href="/" className="text-2xl font-extrabold tracking-tight text-neutral-900">
              OZOU
            </Link>
            <span className="w-2.5 h-2.5 rounded-full bg-[#a2df48] inline-block mb-1" />
          </div>
          <div className="bg-[#ced3d1] hover:bg-[#c6ccc9] transition-colors rounded-xl p-3 flex items-center justify-between cursor-pointer">
            <div>
              <div className="font-bold text-sm text-neutral-900 leading-tight">Studio Workspace</div>
              <div className="text-xs text-neutral-500 font-medium">Plano Pro</div>
            </div>
            <svg className="w-4 h-4 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
          <nav className="space-y-1 pt-1">
            <div className="text-[11px] font-bold text-neutral-500 tracking-wider uppercase mb-3">Espaço de Trabalho</div>
            <Link className="flex items-center justify-between px-3 py-2.5 rounded-xl bg-[#1a1d1c] text-white font-medium text-sm shadow-sm" href="/inbox">
              <div className="flex items-center space-x-3">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
                <span>Inbox unificado</span>
              </div>
              <span className="text-xs bg-[#2c302f] text-neutral-200 px-1.5 py-0.5 rounded-md font-semibold text-[11px]">12</span>
            </Link>
            {[
              ["/automacao-campanhas", "Automação & campanhas", "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"],
              ["/insights", "Insights & métricas", "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"],
              ["/contactos", "Contactos", "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"],
              ["/inicio", "Início", "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"],
              ["/empresas", "Empresas", "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"],
            ].map(([href, label, d]) => (
              <Link key={href} className="flex items-center space-x-3 px-3 py-2.5 rounded-xl text-neutral-600 hover:text-neutral-900 hover:bg-[#d2d7d5] transition-colors text-sm font-medium" href={href}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d={d} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
                <span className="leading-snug">{label}</span>
              </Link>
            ))}
          </nav>
        </div>
        <div className="space-y-4">
          <div className="bg-[#ced3d1] p-4 rounded-2xl">
            <svg className="w-5 h-5 text-neutral-800 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
            <div className="font-bold text-sm text-neutral-900 leading-snug">
              Menos tarefas.
              <br />
              Mais conversas.
            </div>
            <div className="flex items-center justify-between mt-3 text-xs text-neutral-600 cursor-pointer font-medium hover:text-neutral-900">
              <span>A IA trata do resto.</span>
              <span>↗</span>
            </div>
          </div>
          <div className="space-y-1 text-neutral-600 font-medium text-xs">
            <Link className="flex items-center space-x-2.5 px-3 py-2 rounded-lg hover:text-neutral-900 transition-colors" href="/ajuda">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
              <span>Ajuda e suporte</span>
            </Link>
            <Link className="flex items-center space-x-2.5 px-3 py-2 rounded-lg hover:text-neutral-900 transition-colors" href="/definicoes/equipa">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
              <span>Definições</span>
            </Link>
          </div>
          <div className="pt-2 border-t border-[#cbcfce] flex items-center justify-between cursor-pointer">
            <div>
              <div className="text-xs font-bold text-neutral-900">Mariana Costa</div>
              <div className="text-[11px] text-neutral-500">Administradora</div>
            </div>
            <svg className="w-4 h-4 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </aside>

      <div className="flex-1 flex flex-col min-w-0 bg-[#dbe0de]">
        <header className="h-20 px-8 flex items-center justify-between border-b border-[#cbcfce]">
          <div>
            <div className="text-xs text-neutral-500 font-medium">Workspace &nbsp;/&nbsp; Inbox unificado</div>
            <h1 className="text-2xl font-bold text-neutral-900 tracking-tight">Inbox unificado</h1>
            <p className="text-xs text-neutral-500 mt-0.5">Todas as conversas, no mesmo lugar.</p>
          </div>
          <div className="bg-[#ced3d1] text-xs font-medium px-3 py-1.5 rounded-full flex items-center space-x-2 text-neutral-700">
            <span className="w-2 h-2 rounded-full bg-[#527d43]" />
            <span>4 canais conectados</span>
          </div>
        </header>
        <div className="px-8 py-3.5 flex items-center justify-between">
          <button className="bg-[#181b1a] text-white px-3.5 py-1.5 rounded-full text-xs font-medium" type="button">
            Todas as conversas <span className="ml-1 opacity-70">24</span>
          </button>
          <div className="flex items-center space-x-4">
            <span className="text-xs text-neutral-600">A sua equipa está em dia.</span>
            <button className="bg-[#181b1a] text-white px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-sm" type="button">
              + Nova conversa
            </button>
          </div>
        </div>
        <main className="flex-1 px-8 pb-6 flex space-x-4 overflow-hidden">
          <section className="w-80 flex flex-col bg-[#e6e9e8] rounded-2xl p-3 border border-[#cfd4d2]">
            <input className="w-full bg-[#dbe0de] text-xs border-0 rounded-xl px-3 py-2 text-neutral-700 placeholder-neutral-500 focus:ring-1 focus:ring-neutral-400 mb-2" placeholder="Pesquisar por nome ou..." type="text" aria-label="Pesquisar conversas" />
            <div className="text-[11px] font-medium text-neutral-500 px-1 py-1 mb-1">Todos os canais ⌄</div>
            <div className="space-y-1 overflow-y-auto flex-1 pr-1">
              {chats.map((chat) => (
                <div key={chat.name} className={`p-3 rounded-xl cursor-pointer ${chat.active ? "bg-[#d5dbd9]" : "hover:bg-[#dce1df]"}`}>
                  <div className={`font-bold text-xs text-neutral-900 ${chat.active ? "mb-0" : "mb-1"}`}>{chat.name}</div>
                  <div className={`flex items-center space-x-1.5 ${chat.active ? "mb-1.5 mt-1" : "mb-1"}`}>
                    <span className="text-[10px] bg-[#c3cbc7] text-neutral-700 px-1.5 py-0.5 rounded font-medium">{chat.channel}</span>
                  </div>
                  <p className="text-xs text-neutral-500 truncate">{chat.preview}</p>
                </div>
              ))}
            </div>
            <div className="text-[11px] text-center text-neutral-500 pt-2 border-t border-[#d8dddb]">8 de 24 conversas</div>
          </section>
          <section className="flex-1 bg-[#e6e9e8] rounded-2xl flex flex-col p-4 border border-[#cfd4d2] relative">
            <div className="flex justify-end mb-4">
              <Link href="/inbox/resolvida" className="text-xs bg-[#dbe0de] text-neutral-700 font-medium px-3 py-1.5 rounded-full border border-[#cbcfce]">
                Resolver
              </Link>
            </div>
            <div className="flex-1 flex flex-col justify-end space-y-4 pb-4">
              <div className="self-end bg-[#cbe3c0] text-neutral-800 text-xs px-3.5 py-2.5 rounded-2xl max-w-sm">
                <p>Olá Sofia! Já atualizámos o seu contrato com os novos canais.</p>
                <div className="text-[10px] text-neutral-500 text-right mt-1">11:41 ✓✓</div>
              </div>
            </div>
            <div className="bg-[#dbe0de] p-3 rounded-2xl border border-[#cbcfce]">
              <div className="flex items-center space-x-2 text-xs text-neutral-500 mb-2">
                <span>📎 Anexar ficheiro</span>
              </div>
              <div className="flex items-center justify-between pt-1">
                <button className="bg-[#ced3d1] text-xs font-semibold px-3 py-1.5 rounded-xl text-neutral-800" type="button">
                  ✧ Gerar resposta com IA
                </button>
                <button className="bg-[#181b1a] text-white text-xs px-4 py-1.5 rounded-xl font-medium" type="button">
                  Enviar ↗
                </button>
              </div>
            </div>
          </section>
          <section className="w-80 bg-[#e6e9e8] rounded-2xl p-5 border border-[#cfd4d2] flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="text-xs text-neutral-500 font-semibold mb-4">Detalhes do contacto</div>
              <h2 className="text-xl font-bold text-neutral-900 leading-tight">Sofia Martins</h2>
              <div className="text-xs text-neutral-500 mb-2">Luna Studio</div>
              <div className="inline-block bg-[#ced7c7] text-neutral-800 text-[11px] font-medium px-2 py-0.5 rounded mb-6">Lead qualificado</div>
              <div className="space-y-4 text-xs">
                <div>
                  <div className="text-[10px] uppercase font-bold tracking-wider text-neutral-400 mb-0.5">Canal de Origem</div>
                  <div className="text-neutral-800 font-medium">WhatsApp</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold tracking-wider text-neutral-400 mb-0.5">Telefone</div>
                  <div className="text-neutral-800 font-medium">+244 912 345 678</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold tracking-wider text-neutral-400 mb-0.5">E-mail</div>
                  <div className="text-neutral-800 font-medium">sofia@lunastudio.ao</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold tracking-wider text-neutral-400 mb-0.5">Responsável</div>
                  <div className="text-neutral-800 font-medium flex items-center justify-between">
                    <span>Mariana Costa</span>
                    <span className="text-neutral-500 text-[10px]">⌄</span>
                  </div>
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold tracking-wider text-neutral-400 mb-1.5">Etiquetas</div>
                  <div className="flex space-x-2">
                    <span className="bg-[#d5dbd9] px-2 py-0.5 rounded text-[11px] text-neutral-700 font-medium">Plano Pro</span>
                    <span className="bg-[#d5dbd9] px-2 py-0.5 rounded text-[11px] text-neutral-700 font-medium">Equipa de 5</span>
                  </div>
                </div>
                <div className="pt-2">
                  <div className="text-[10px] uppercase font-bold tracking-wider text-neutral-400 mb-1">Nota da equipa</div>
                  <p className="text-neutral-600 text-xs leading-relaxed">Interessada em centralizar os canais da equipa. Enviar convite para experimentar o plano Pro.</p>
                </div>
              </div>
            </div>
            <div className="pt-4 mt-6 border-t border-[#d8dddb]">
              <Link href="/contactos/sofia-martins" className="w-full bg-[#dadfdc] hover:bg-[#d0d6d3] text-xs font-semibold py-2.5 rounded-xl text-neutral-800 border border-[#cbcfce] flex items-center justify-center space-x-1">
                <span>Ver contacto completo</span>
                <span className="text-xs">↗</span>
              </Link>
            </div>
          </section>
        </main>
      </div>

      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-[1px] p-4">
        <div className="relative w-full max-w-[640px] bg-white rounded-[32px] shadow-2xl p-9 flex flex-col" role="dialog" aria-labelledby="whatsapp-modal-title">
          <Link href="/inbox" aria-label="Fechar" className="absolute top-6 right-6 w-9 h-9 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 transition-colors">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 14 14">
              <path d="M1 1l12 12M13 1L1 13" />
            </svg>
          </Link>
          <header className="mb-6">
            <h2 id="whatsapp-modal-title" className="text-[28px] font-bold text-neutral-900 tracking-tight leading-snug">
              Conectar WhatsApp
            </h2>
            <p className="text-sm font-medium text-neutral-500 mt-1">Studio Workspace &nbsp;·&nbsp; WhatsApp Business</p>
          </header>
          <div className="bg-[#eff5eb] rounded-2xl p-6 mb-7 border border-[#e2edd9]">
            <h3 className="text-lg font-bold text-neutral-900 mb-3 tracking-tight">Tudo começa com uma autorização.</h3>
            <ol className="space-y-1.5 text-[13.5px] text-neutral-600 leading-relaxed font-normal">
              <li>1. Entre com a conta que gere o WhatsApp Business.</li>
              <li>2. Selecione o número associado à empresa.</li>
              <li>3. Autorize o acesso às mensagens e aos contactos.</li>
            </ol>
          </div>
          <div className="mb-7">
            <h4 className="text-[11px] font-bold text-neutral-400 tracking-wider uppercase mb-3.5">O que a Ozou vai poder fazer</h4>
            <ul className="space-y-2.5 text-sm font-medium">
              {permissions.map((item) => (
                <li key={item} className="flex items-center space-x-2.5">
                  <svg className="w-4 h-4 text-neutral-800 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" />
                  </svg>
                  <span className="text-neutral-800">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#f7f8f8] rounded-2xl p-5 mb-7 border border-neutral-100">
            <h4 className="text-sm font-bold text-neutral-900 mb-1">Demonstração de autorização</h4>
            <p className="text-xs text-neutral-500 font-normal">O percurso seguinte representa a confirmação do fornecedor.</p>
          </div>
          <footer className="flex flex-col space-y-3">
            <Link href="/canais/conectado" className="w-full bg-[#181b1a] hover:bg-neutral-800 text-white font-semibold py-3.5 px-6 rounded-full text-sm flex items-center justify-center space-x-1.5 transition-colors shadow-sm">
              <span>Autorizar e continuar</span>
              <span className="text-base font-normal">↗</span>
            </Link>
            <Link href="/inbox" className="w-full bg-white hover:bg-neutral-50 border border-neutral-200 text-neutral-800 font-semibold py-3.5 px-6 rounded-full text-sm transition-colors text-center">
              Ligar mais tarde
            </Link>
          </footer>
        </div>
      </div>
    </div>
  );
}
