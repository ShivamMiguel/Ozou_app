import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import { WalletSimulator } from "@/components/landing/wallet-simulator";

export const metadata: Metadata = {
  title: "OZOU — Comunica com os teus clientes. Paga apenas pelo que utilizas.",
};

const jakartaScope = {
  "--font-sans": 'var(--font-jakarta), "Plus Jakarta Sans", sans-serif',
  fontFamily: 'var(--font-jakarta), "Plus Jakarta Sans", sans-serif',
} as CSSProperties;

export default function HomePage() {
  return (
    <div
      className="bg-[#fcfdfa] text-[#111315] font-sans antialiased selection:bg-[#bef264] selection:text-black"
      style={jakartaScope}
    >
      <header className="w-full pt-6 pb-4 px-6 md:px-12 max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-1.5 text-2xl font-bold tracking-tight">
          <span>OZOU</span>
          <span className="inline-block w-2 h-2 rounded-full bg-[#84cc16] align-baseline" />
        </Link>
        <nav className="hidden md:flex items-center gap-1 bg-white/80 border border-[#e7e8e1] px-3 py-1.5 rounded-full shadow-sm">
          <a className="px-4 py-1.5 text-xs font-medium text-gray-700 hover:text-black transition-colors rounded-full hover:bg-gray-100" href="#produto">
            Produto
          </a>
          <a className="px-4 py-1.5 text-xs font-medium text-gray-700 hover:text-black transition-colors rounded-full hover:bg-gray-100" href="#como-funciona">
            Como funciona
          </a>
          <a className="px-4 py-1.5 text-xs font-medium text-gray-700 hover:text-black transition-colors rounded-full hover:bg-gray-100" href="#simulador">
            Simulador
          </a>
          <a className="px-4 py-1.5 text-xs font-medium text-gray-700 hover:text-black transition-colors rounded-full hover:bg-gray-100" href="#perguntas">
            Perguntas
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/entrar" className="px-4 py-2 text-xs font-medium text-gray-700 hover:text-black transition-colors">
            Entrar
          </Link>
          <Link
            href="/criar-conta"
            className="px-4 py-2 text-xs font-semibold bg-[#111315] text-white rounded-full hover:bg-black transition-all flex items-center gap-1 shadow-sm"
          >
            <span>Começar grátis</span>
            <span className="text-xs">↗</span>
          </Link>
        </div>
      </header>

      <main>
        <section className="pt-16 pb-12 px-6 max-w-5xl mx-auto text-center">
          <span className="inline-block text-[11px] font-semibold tracking-wider text-gray-500 uppercase mb-6">
            Sem mensalidades. Sem contratos. Paga só o que envias.
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-[3.75rem] font-extrabold tracking-tight leading-[1.12] mb-6 max-w-3xl mx-auto">
            Comunica com os teus clientes.
            <br />
            <span className="text-gray-400 font-bold">Paga apenas pelo que utilizas.</span>
          </h1>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
            Centraliza a comunicação da tua empresa numa única plataforma. Envia campanhas, acompanha clientes, automatiza follow-ups e mantém o relacionamento através de Email, WhatsApp e SMS.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4">
            <Link
              className="w-full sm:w-auto px-6 py-3 text-xs sm:text-sm font-semibold bg-[#111315] text-white rounded-full hover:bg-black transition-all flex items-center justify-center gap-1 shadow-sm"
              href="/criar-conta"
            >
              <span>Criar conta grátis</span>
              <span>↗</span>
            </Link>
            <a
              className="w-full sm:w-auto px-6 py-3 text-xs sm:text-sm font-semibold bg-white border border-[#e7e8e1] text-gray-800 rounded-full hover:bg-gray-50 transition-all"
              href="#simulador"
            >
              Simular carregamento
            </a>
          </div>
          <p className="text-[11px] text-gray-400 font-normal">Sem mensalidades obrigatórias. Sem contratos complicados. Paga apenas pelo que utilizas.</p>
        </section>

        <section className="px-4 sm:px-6 max-w-6xl mx-auto pb-14">
          <div className="bg-white border border-[#e7e8e1]/80 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden p-2 sm:p-4 bg-gradient-to-b from-gray-50/50 to-white">
            <div className="flex items-center justify-between px-3 py-2 border-b border-gray-100 text-xs text-gray-400 mb-2">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-300" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-300" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-300" />
                <span className="ml-2 font-semibold text-gray-600">OZOU</span>
                <span className="text-gray-300">/</span>
                <span className="text-gray-500">Workspace / Inbox unificado</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                  ● 4 canais conectados
                </span>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-0 border border-gray-100 rounded-xl overflow-hidden bg-white text-xs text-left min-h-[440px]">
              <div className="col-span-12 md:col-span-3 border-r border-gray-100 p-3 bg-gray-50/40 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="p-2 bg-white rounded-lg border border-gray-100 shadow-sm flex items-center justify-between">
                    <div>
                      <div className="font-bold text-gray-800 text-[11px]">Studio Workspace</div>
                      <div className="text-[10px] text-gray-400">Carteira pré-paga</div>
                    </div>
                    <span className="text-gray-400 text-xs">▼</span>
                  </div>
                  <div className="space-y-1">
                    <div className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider px-2 pt-1 pb-0.5">
                      Espaço de Trabalho
                    </div>
                    <a className="flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-gray-100 text-black font-semibold" href="#produto">
                      <span className="flex items-center gap-2">💬 Inbox unificado</span>
                      <span className="bg-gray-200 text-[10px] px-1.5 py-0.5 rounded-full">14</span>
                    </a>
                    <a className="flex items-center justify-between px-2.5 py-1.5 rounded-lg text-gray-600 hover:bg-gray-100/60" href="#produto">
                      <span className="flex items-center gap-2">⚡ Automação & campanhas</span>
                    </a>
                    <a className="flex items-center justify-between px-2.5 py-1.5 rounded-lg text-gray-600 hover:bg-gray-100/60" href="#produto">
                      <span className="flex items-center gap-2">📊 Insights & métricas</span>
                    </a>
                    <a className="flex items-center justify-between px-2.5 py-1.5 rounded-lg text-gray-600 hover:bg-gray-100/60" href="#produto">
                      <span className="flex items-center gap-2">👥 Contactos</span>
                    </a>
                  </div>
                </div>
                <div className="mt-6 p-2.5 bg-gradient-to-br from-[#bef264]/20 to-[#a3e635]/10 rounded-xl border border-[#bef264]/40">
                  <span className="text-[10px] font-bold text-gray-800 block">Menos tarefas. Mais conversas.</span>
                  <p className="text-[9px] text-gray-600 mt-0.5 leading-snug">A IA trata do resto no fluxo.</p>
                </div>
              </div>

              <div className="col-span-12 md:col-span-4 border-r border-gray-100 p-3 bg-white">
                <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                  <div>
                    <span className="font-bold text-gray-900 text-xs">Inbox unificado</span>
                    <p className="text-[10px] text-gray-400">Todas as conversas no mesmo lugar</p>
                  </div>
                  <button className="px-2 py-1 bg-black text-white rounded text-[10px] font-medium" type="button">
                    + Nova conversa
                  </button>
                </div>
                <div className="flex gap-2 my-2 text-[10px]">
                  <span className="px-2 py-0.5 bg-gray-100 rounded-full font-semibold text-gray-900">Todas as conversas (24)</span>
                  <span className="px-2 py-0.5 text-gray-400">Não lidas (12)</span>
                </div>
                <div className="p-2.5 rounded-lg bg-gray-50 border border-gray-200 mt-2 cursor-pointer">
                  <div className="flex justify-between items-start mb-0.5">
                    <span className="font-bold text-gray-900 text-[11px]">Sofia Martins</span>
                    <span className="text-[9px] text-gray-400">10:42</span>
                  </div>
                  <div className="flex items-center gap-1 mb-1">
                    <span className="text-[9px] px-1 py-0.2 bg-emerald-100 text-emerald-800 rounded">WhatsApp</span>
                    <span className="text-[9px] text-gray-500 font-medium">Gostava de saber mais sobre...</span>
                  </div>
                  <p className="text-[10px] text-gray-600 line-clamp-1">Olá! Gostava de saber mais sobre o plano Pro...</p>
                </div>
                <div className="p-2.5 rounded-lg hover:bg-gray-50/80 border border-transparent mt-1 cursor-pointer">
                  <div className="flex justify-between items-start mb-0.5">
                    <span className="font-semibold text-gray-800 text-[11px]">Miguel Santos</span>
                    <span className="text-[9px] text-gray-400">10:30</span>
                  </div>
                  <div className="flex items-center gap-1 mb-1">
                    <span className="text-[9px] px-1 py-0.2 bg-pink-100 text-pink-700 rounded">Instagram</span>
                    <span className="text-[9px] text-gray-500">Obrigado pelo apoio!</span>
                  </div>
                </div>
                <div className="p-2.5 rounded-lg hover:bg-gray-50/80 border border-transparent mt-1 cursor-pointer">
                  <div className="flex justify-between items-start mb-0.5">
                    <span className="font-semibold text-gray-800 text-[11px]">Inês Ferreira</span>
                    <span className="text-[9px] text-gray-400">Ontem</span>
                  </div>
                  <div className="flex items-center gap-1 mb-1">
                    <span className="text-[9px] px-1 py-0.2 bg-blue-100 text-blue-700 rounded">E-mail</span>
                    <span className="text-[9px] text-gray-500">Re: Proposta de acompanhamento</span>
                  </div>
                </div>
              </div>

              <div className="col-span-12 md:col-span-5 p-4 bg-gray-50/30 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between border-b border-gray-100 pb-2.5">
                    <div>
                      <h4 className="font-bold text-gray-900 text-xs">Sofia Martins</h4>
                      <span className="text-[9px] text-emerald-600 flex items-center gap-1">● WhatsApp · Online agora</span>
                    </div>
                    <div className="flex gap-1.5">
                      <span className="text-[10px] px-2 py-0.5 bg-white border border-gray-200 rounded text-gray-600">✓ Resolver</span>
                    </div>
                  </div>
                  <div className="py-4 space-y-3">
                    <div className="max-w-[85%] bg-white p-2.5 rounded-2xl rounded-tl-sm border border-gray-200/80 shadow-xs">
                      <p className="text-[11px] text-gray-800 leading-snug">
                        Olá! Gostava de saber mais sobre o plano Pro. É possível integrar o WhatsApp e o Instagram no mesmo espaço?
                      </p>
                      <span className="text-[8px] text-gray-400 block text-right mt-1">10:40</span>
                    </div>
                    <div className="max-w-[85%] ml-auto bg-[#18181b] text-white p-2.5 rounded-2xl rounded-tr-sm shadow-xs">
                      <p className="text-[11px] text-gray-100 leading-snug">
                        Olá, Sofia! Sim, com o plano Pro pode gerir todos os seus canais numa única caixa de entrada. Sem perder nenhuma conversa.
                      </p>
                      <span className="text-[8px] text-gray-400 block text-right mt-1">10:41 ✓✓</span>
                    </div>
                  </div>
                </div>
                <div className="pt-2 border-t border-gray-200/80 bg-white rounded-xl p-2 shadow-xs">
                  <div className="flex items-center justify-between mb-1.5 text-[9px] text-gray-500">
                    <span>
                      Responder via <strong>WhatsApp</strong>
                    </span>
                    <button className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-medium" type="button">
                      ✨ Gerar resposta com IA
                    </button>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      className="w-full text-xs border-0 focus:ring-0 p-1 text-gray-700 placeholder-gray-400"
                      placeholder="Escreva a sua mensagem..."
                      type="text"
                    />
                    <button className="bg-black text-white px-3 py-1 rounded-md text-[10px] font-semibold" type="button">
                      Enviar ↗
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 px-6 text-center max-w-4xl mx-auto">
          <p className="text-xs text-gray-500 mb-4 font-normal">As conversas mudam de canal. A sua equipa não precisa.</p>
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            {["WhatsApp", "Instagram", "SMS", "E-mail"].map((channel) => (
              <span
                key={channel}
                className="px-6 py-2 rounded-full bg-white border border-[#e7e8e1] text-xs font-semibold text-gray-800 shadow-2xs hover:border-gray-400 transition-colors"
              >
                {channel}
              </span>
            ))}
          </div>
        </section>

        <section className="py-16 px-6 max-w-6xl mx-auto" id="produto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-gray-200/60">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 leading-tight">
                Tudo o que importa.
                <br />
                Nada a mais.
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-gray-500 max-w-xs mt-3 md:mt-0 leading-relaxed text-right md:text-left">
              O essencial para uma equipa próxima, ágil e focada nas pessoas.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <article className="bg-white border border-[#e7e8e1] p-6 rounded-2xl shadow-xs transition hover:shadow-md">
              <span className="text-xs font-semibold text-gray-400 block mb-4">01</span>
              <h3 className="text-base font-bold text-gray-900 mb-2">Um Inbox. Todos os canais.</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Responda ao WhatsApp, Instagram, SMS e E-mail sem saltar entre aplicações.
              </p>
            </article>
            <article className="bg-white border border-[#e7e8e1] p-6 rounded-2xl shadow-xs transition hover:shadow-md">
              <span className="text-xs font-semibold text-gray-400 block mb-4">02</span>
              <h3 className="text-base font-bold text-gray-900 mb-2">Campanhas com intenção.</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Encontre o público certo, escreva com apoio de IA e escolha quando enviar.
              </p>
            </article>
            <article className="bg-white border border-[#e7e8e1] p-6 rounded-2xl shadow-xs transition hover:shadow-md">
              <span className="text-xs font-semibold text-gray-400 block mb-4">03</span>
              <h3 className="text-base font-bold text-gray-900 mb-2">Clareza para decidir.</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Perceba o que funciona e transforme recomendações em próximas ações.
              </p>
            </article>
          </div>
        </section>

        <section className="bg-[#111315] text-white py-16 px-6 my-12" id="como-funciona">
          <div className="max-w-6xl mx-auto">
            <p className="text-[11px] font-semibold tracking-wider text-[#bef264] uppercase mb-3">Como funciona</p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
              O modelo é simples e flexível.
            </h2>
            <p className="text-sm text-gray-400 max-w-2xl leading-relaxed mb-12">
              A tua empresa tem acesso gratuito à plataforma e utiliza uma carteira digital pré-paga para realizar todas as comunicações.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                ["1", "Cria a tua conta gratuitamente", "Regista a tua empresa e começa a utilizar as funcionalidades do CRM sem pagar qualquer mensalidade de adesão."],
                ["2", "Carrega a tua carteira digital", "Adiciona saldo à tua carteira sempre que precisares. Escolhe o valor que melhor se adapta às necessidades da tua empresa."],
                ["3", "Comunica através dos teus canais favoritos", "Utiliza o saldo para enviar emails, mensagens WhatsApp e SMS diretamente a partir da plataforma."],
                ["4", "Paga automaticamente por cada envio", "Cada comunicação realizada é descontada da tua carteira de acordo com o canal utilizado. Tens controlo total sobre os teus gastos."],
              ].map(([step, title, copy]) => (
                <div key={step} className="flex items-start gap-4">
                  <span className="text-[#bef264] font-extrabold text-lg pt-0.5">{step}</span>
                  <div>
                    <h3 className="font-bold text-sm sm:text-base text-white mb-1">{title}</h3>
                    <p className="text-xs text-gray-400 leading-relaxed">{copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 px-6 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 leading-snug">
                Uma ajuda inteligente.
                <br />
                A sua voz, sempre.
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                Gere respostas, explore variações e descubra oportunidades.
                <br />
                A OZOU sugere. A sua equipa revê e decide.
              </p>
            </div>
            <div className="lg:col-span-7">
              <div className="bg-[#f0f4ea] border border-[#dce6d2] rounded-3xl p-8 shadow-xs">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs">✦</span>
                  <span className="text-[10px] font-bold tracking-wider uppercase text-gray-600">
                    UM PRÓXIMO PASSO, NÃO MAIS UM GRÁFICO
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3 tracking-tight">
                  O WhatsApp converte 3× mais.
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-6 leading-relaxed">
                  Nesta semana de exemplo: 24% no WhatsApp e 8% no E-mail.
                  <br />
                  Que tal voltar a falar com 50 leads sem resposta?
                </p>
                <a
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-semibold bg-[#111315] text-white rounded-full hover:bg-black transition-colors shadow-sm"
                  href="#simulador"
                >
                  <span>Transformar insight em campanha</span>
                  <span>↗</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 px-6 max-w-6xl mx-auto">
          <div className="bg-white border border-[#e7e8e1] rounded-3xl p-8 sm:p-10 shadow-xs grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight leading-snug">
                Um espaço seu.
                <br />
                Uma equipa alinhada.
              </h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-black font-bold text-sm">✓</span>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-gray-900">Empresas separadas</h4>
                  <p className="text-[11px] text-gray-500 leading-normal">Mantenha cada operação no seu espaço.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-black font-bold text-sm">✓</span>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-gray-900">Acessos por função</h4>
                  <p className="text-[11px] text-gray-500 leading-normal">Defina quem gere e quem responde.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-black font-bold text-sm">✓</span>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-gray-900">Consentimento primeiro</h4>
                  <p className="text-[11px] text-gray-500 leading-normal">Respeite as escolhas de cada contacto.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 max-w-6xl mx-auto" id="simulador">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">
              Simula o teu carregamento antes de começar
            </h2>
            <p className="text-sm text-gray-500">Não sabes quanto saldo precisas? Não há problema.</p>
          </div>
          <WalletSimulator />
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-600">
            {[
              "Arrasta o seletor para aumentar ou diminuir o valor do carregamento.",
              "Visualiza automaticamente o valor em kwanzas.",
              "Descobre quantos emails, mensagens WhatsApp ou SMS podes enviar.",
              "Escolhe um canal específico ou compara os três canais.",
            ].map((item) => (
              <li key={item} className="flex gap-2 bg-white border border-[#e7e8e1] rounded-2xl px-4 py-3">
                <span className="text-black font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-xs text-gray-500 text-center mt-6 max-w-2xl mx-auto leading-relaxed">
            À medida que aumentas o valor do carregamento, aumenta também a quantidade de comunicações disponíveis. O simulador permite planear os gastos antes de qualquer carregamento.
          </p>
        </section>

        <section className="py-14 px-6 max-w-6xl mx-auto">
          <div className="bg-white border border-[#e7e8e1] rounded-3xl p-8 sm:p-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                Uma carteira.
                <br />
                Três canais.
                <br />
                Controlo total.
              </h2>
            </div>
            <ul className="space-y-3 text-sm text-gray-700">
              {[
                "Consultar o saldo disponível em tempo real.",
                "Acompanhar todos os carregamentos.",
                "Consultar o histórico de mensagens enviadas.",
                "Visualizar os gastos por canal.",
                "Receber alertas quando o saldo estiver baixo.",
                "Recarregar a carteira sempre que necessário.",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="font-bold">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-16 px-6 max-w-6xl mx-auto" id="perguntas">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-5">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-snug">
                Menos dúvidas.
                <br />
                Mais clareza.
              </h2>
            </div>
            <div className="md:col-span-7 space-y-3">
              {[
                ["Há mensalidade?", "Não. A plataforma é gratuita. Carrega a carteira e o saldo cobre os envios, sem preço por unidade à vista."],
                ["Posso usar os canais que já tenho?", "Sim. O onboarding guia a ligação dos seus canais e explica as permissões necessárias."],
                ["A IA envia mensagens sozinha?", "Não neste fluxo. A IA propõe textos e horários; a sua equipa revê e confirma o envio."],
                ["Posso gerir mais do que uma empresa?", "Sim. Cada empresa tem os seus próprios contactos, canais e membros."],
                ["Posso trazer os meus contactos?", "Sim. A importação CSV inclui mapeamento, validação e controlo de duplicados."],
              ].map(([question, answer]) => (
                <div key={question} className="bg-white border border-[#e7e8e1]/80 rounded-xl p-4 shadow-2xs">
                  <h4 className="font-bold text-xs sm:text-sm text-gray-900 mb-1">{question}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 px-6 max-w-6xl mx-auto">
          <div className="bg-[#f0f3eb] border border-[#e1e6db] rounded-3xl p-10 sm:p-14 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-2">
              Mais comunicação, menos complicações.
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mb-6 max-w-xl mx-auto leading-relaxed">
              Aproxima a tua empresa dos clientes sem custos fixos mensais. Cria a tua conta gratuitamente, escolhe quanto queres carregar e começa a comunicar.
            </p>
            <Link
              href="/criar-conta"
              className="inline-flex items-center gap-1.5 px-6 py-3 text-xs sm:text-sm font-semibold bg-[#111315] text-white rounded-full hover:bg-black transition-all shadow-sm"
            >
              <span>Criar conta grátis</span>
              <span>↗</span>
            </Link>
          </div>
        </section>
      </main>

      <footer className="pt-12 pb-10 px-6 max-w-6xl mx-auto border-t border-[#e7e8e1]/70 text-xs text-gray-500 mt-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
          <div>
            <Link href="/" className="flex items-center gap-1 text-xl font-bold text-gray-900 mb-1">
              <span>OZOU</span>
              <span className="inline-block w-2 h-2 rounded-full bg-[#84cc16]" />
            </Link>
            <p className="text-[11px] text-gray-400">O CRM que deixa espaço para as pessoas.</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/entrar"
              className="px-5 py-2 rounded-full bg-white border border-[#e7e8e1] text-gray-700 hover:text-black font-medium transition text-xs"
            >
              Entrar na plataforma
            </Link>
            <Link href="/termos" className="px-5 py-2 rounded-full bg-white border border-[#e7e8e1] text-gray-700 font-medium text-xs">
              Termos e privacidade
            </Link>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center text-[11px] text-gray-400 gap-2 pt-6 border-t border-gray-100">
          <p>© 2026 OZOU · Conceito de produto</p>
          <div className="flex items-center gap-2">
            <span>Português</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
