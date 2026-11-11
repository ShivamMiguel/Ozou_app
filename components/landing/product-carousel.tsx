"use client";

import { useEffect, useState } from "react";

type Slide = "canais" | "campanhas" | "ia" | "insights" | "contactos";

const slides: Slide[] = ["canais", "campanhas", "ia", "insights", "contactos"];

const captions: Record<Slide, string> = {
  canais: "Quatro canais, uma caixa.",
  campanhas: "O público, o canal e o momento.",
  ia: "A sugestão fica para a equipa rever.",
  insights: "O que teve mais respostas.",
  contactos: "A pessoa fica junto da conversa.",
};

const crumbs: Record<Slide, string> = {
  canais: "Inbox unificado",
  campanhas: "Campanhas",
  ia: "Ajuda da IA",
  insights: "Insights",
  contactos: "Contactos",
};

const badges: Record<Slide, string> = {
  canais: "4 canais na mesma caixa",
  campanhas: "Público pronto a rever",
  ia: "Nada é enviado sozinho",
  insights: "Respostas desta semana",
  contactos: "Ficha do contacto",
};

const nav = [
  { id: "canais" as const, label: "Inbox unificado", count: "14", d: "M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" },
  { id: "campanhas" as const, label: "Automação & campanhas", count: "", d: "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" },
  { id: "insights" as const, label: "Insights & métricas", count: "", d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
  { id: "contactos" as const, label: "Contactos", count: "", d: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" },
];

const threads = [
  {
    id: "sofia",
    name: "Sofia Martins",
    channel: "WhatsApp",
    chip: "bg-emerald-100 text-emerald-800",
    time: "10:42",
    preview: "Dá para juntar os canais?",
    incoming: "Olá! Dá para responder ao WhatsApp e ao Instagram no mesmo sítio?",
    reply: "Olá, Sofia. Sim. As mensagens ficam nesta caixa e a equipa responde daqui.",
  },
  {
    id: "miguel",
    name: "Miguel Santos",
    channel: "Instagram",
    chip: "bg-pink-100 text-pink-700",
    time: "10:30",
    preview: "Obrigado pelo apoio!",
    incoming: "Obrigado pelo apoio! Quando respondem por aqui?",
    reply: "Respondemos nesta conversa. Como escreveu primeiro no Instagram, a resposta segue por mensagem direta.",
  },
  {
    id: "ines",
    name: "Inês Ferreira",
    channel: "E-mail",
    chip: "bg-blue-100 text-blue-700",
    time: "Ontem",
    preview: "Re: Proposta de acompanhamento",
    incoming: "Podemos avançar com a proposta ainda esta semana?",
    reply: "Sim, Inês. A proposta fica nesta conversa e a equipa confirma ainda esta semana.",
  },
  {
    id: "joao",
    name: "João Almeida",
    channel: "SMS",
    chip: "bg-amber-100 text-amber-800",
    time: "Ontem",
    preview: "Podemos falar amanhã?",
    incoming: "Podemos falar amanhã de manhã?",
    reply: "Podemos, João. Amanhã de manhã esta conversa continua por SMS.",
  },
];

const audiences = [
  { id: "leads", label: "Leads sem resposta", count: "128", text: "Olá, {{primeiro_nome}}. Ficou alguma dúvida? Estamos por aqui quando quiser retomar." },
  { id: "clientes", label: "Clientes", count: "86", text: "Olá, {{primeiro_nome}}. Há uma novidade da equipa que achamos que lhe interessa." },
  { id: "novos", label: "Novos contactos", count: "42", text: "Olá, {{primeiro_nome}}. Obrigado pelo contacto. Em que podemos ajudar?" },
];

const sendChannels = ["WhatsApp", "E-mail", "SMS"] as const;

const tones = [
  { id: "proxima", label: "Mais próxima", text: "Olá, Sofia! Sim, o WhatsApp e o Instagram ficam na mesma caixa. A equipa responde sem mudar de aplicação." },
  { id: "direta", label: "Direta", text: "Sim. WhatsApp e Instagram entram no mesmo inbox. A resposta sai daqui." },
  { id: "curta", label: "Curta", text: "Sim, Sofia. Os dois canais ficam juntos nesta conversa." },
];

const bars = [
  { id: "wa", label: "WhatsApp", value: 24, note: "Mais respostas nesta semana. Serve para voltar a falar com quem ficou em silêncio." },
  { id: "sms", label: "SMS", value: 11, note: "Chega depressa a quem não abre o e-mail." },
  { id: "email", label: "E-mail", value: 8, note: "Útil quando a mensagem precisa de mais espaço." },
];

function Glyph({ d, className = "w-3.5 h-3.5 shrink-0" }: { d: string; className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d={d} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
    </svg>
  );
}

export function ProductCarousel() {
  const [slide, setSlide] = useState<Slide>("canais");
  const [held, setHeld] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [threadId, setThreadId] = useState(threads[0].id);
  const [draft, setDraft] = useState("");
  const [audienceId, setAudienceId] = useState(audiences[0].id);
  const [sendChannel, setSendChannel] = useState<(typeof sendChannels)[number]>("WhatsApp");
  const [when, setWhen] = useState<"agora" | "amanha">("amanha");
  const [campaignText, setCampaignText] = useState(audiences[0].text);
  const [toneId, setToneId] = useState<string | null>(null);
  const [suggestion, setSuggestion] = useState("");
  const [barId, setBarId] = useState(bars[0].id);
  const [tags, setTags] = useState<string[]>(["Lead", "WhatsApp", "Luanda"]);

  useEffect(() => {
    if (held || hovering) return;
    const timer = window.setInterval(() => {
      setSlide((current) => slides[(slides.indexOf(current) + 1) % slides.length]);
    }, 7000);
    return () => window.clearInterval(timer);
  }, [held, hovering]);

  function hold() {
    setHeld(true);
  }

  function go(next: Slide) {
    hold();
    setSlide(next);
  }

  function step(direction: -1 | 1) {
    const index = slides.indexOf(slide);
    go(slides[(index + direction + slides.length) % slides.length]);
  }

  const thread = threads.find((item) => item.id === threadId) ?? threads[0];
  const bar = bars.find((item) => item.id === barId) ?? bars[0];

  return (
    <section className="px-4 sm:px-6 max-w-6xl mx-auto pb-14" aria-roledescription="carrossel" aria-label="Demonstração da OZOU">
      <style>{`@keyframes ozou-fade{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}`}</style>
      <div
        className="bg-white border border-[#e7e8e1]/80 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden p-2 sm:p-4 bg-gradient-to-b from-gray-50/50 to-white"
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        <div className="flex items-center justify-between gap-3 px-3 py-2 border-b border-gray-100 text-xs text-gray-400 mb-2">
          <div className="flex items-center gap-1.5 min-w-0">
            <span className="w-2.5 h-2.5 rounded-full bg-red-300 shrink-0" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-300 shrink-0" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-300 shrink-0" />
            <span className="ml-2 font-semibold text-gray-600 shrink-0">OZOU</span>
            <span className="text-gray-300">/</span>
            <span className="text-gray-500 truncate">Workspace / {crumbs[slide]}</span>
          </div>
          <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0">
            {badges[slide]}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 border border-gray-100 rounded-xl overflow-hidden bg-white text-xs text-left min-h-[460px]">
          <div className="md:col-span-3 border-b md:border-b-0 md:border-r border-gray-100 p-3 bg-gray-50/40 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="p-2 bg-white rounded-lg border border-gray-100 shadow-sm flex items-center justify-between">
                <div>
                  <div className="font-bold text-gray-800 text-[11px]">Studio Workspace</div>
                  <div className="text-[10px] text-gray-400">Carteira pré-paga</div>
                </div>
                <span className="text-gray-400 text-xs">▼</span>
              </div>
              <div className="flex md:block gap-1 overflow-x-auto">
                <div className="hidden md:block text-[10px] font-semibold text-gray-400 uppercase tracking-wider px-2 pt-1 pb-0.5">Espaço de Trabalho</div>
                {nav.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    aria-pressed={slide === item.id}
                    onClick={() => go(item.id)}
                    className={`flex items-center justify-between gap-2 px-2.5 py-1.5 rounded-lg text-left whitespace-nowrap md:whitespace-normal md:w-full ${slide === item.id ? "bg-gray-100 text-black font-semibold" : "text-gray-600 hover:bg-gray-100/60"}`}
                  >
                    <span className="flex items-center gap-2">
                      <Glyph d={item.d} />
                      {item.label}
                    </span>
                    {item.count ? <span className="bg-gray-200 text-[10px] px-1.5 py-0.5 rounded-full">{item.count}</span> : null}
                  </button>
                ))}
              </div>
            </div>
            <button
              type="button"
              onClick={() => go("ia")}
              className={`mt-4 md:mt-6 p-2.5 rounded-xl border text-left ${slide === "ia" ? "bg-[#bef264]/30 border-[#84cc16]" : "bg-gradient-to-br from-[#bef264]/20 to-[#a3e635]/10 border-[#bef264]/40"}`}
            >
              <span className="text-[10px] font-bold text-gray-800 block">Menos tarefas. Mais conversas.</span>
              <span className="text-[9px] text-gray-600 mt-0.5 leading-snug block">Ver a ajuda da IA</span>
            </button>
          </div>

          <div key={slide} className="md:col-span-9 p-3 sm:p-4 bg-white" style={{ animation: "ozou-fade .35s ease" }}>
            {slide === "canais" ? (
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-3 h-full">
                <div className="lg:col-span-2">
                  <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                    <div>
                      <span className="font-bold text-gray-900 text-xs">Inbox unificado</span>
                      <p className="text-[10px] text-gray-400">Toque numa conversa</p>
                    </div>
                  </div>
                  <div className="mt-2 space-y-1">
                    {threads.map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => {
                          hold();
                          setThreadId(item.id);
                          setDraft("");
                        }}
                        className={`w-full text-left p-2.5 rounded-lg border ${item.id === thread.id ? "bg-gray-50 border-gray-200" : "border-transparent hover:bg-gray-50/80"}`}
                      >
                        <span className="flex justify-between gap-2">
                          <span className="font-semibold text-gray-900 text-[11px]">{item.name}</span>
                          <span className="text-[9px] text-gray-400">{item.time}</span>
                        </span>
                        <span className="mt-1 flex items-center gap-1">
                          <span className={`text-[9px] px-1 py-0.5 rounded ${item.chip}`}>{item.channel}</span>
                          <span className="text-[10px] text-gray-500 truncate">{item.preview}</span>
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
                <div className="lg:col-span-3 flex flex-col justify-between rounded-xl bg-gray-50/70 border border-gray-100 p-3 min-h-[280px]">
                  <div>
                    <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                      <div>
                        <p className="font-bold text-gray-900 text-xs">{thread.name}</p>
                        <p className="text-[10px] text-gray-500">{thread.channel}</p>
                      </div>
                    </div>
                    <div className="py-3 space-y-2">
                      <div className="max-w-[90%] bg-white p-2.5 rounded-2xl rounded-tl-sm border border-gray-200">
                        <p className="text-[11px] text-gray-800 leading-snug">{thread.incoming}</p>
                      </div>
                      <div className="max-w-[90%] ml-auto bg-[#18181b] text-white p-2.5 rounded-2xl rounded-tr-sm">
                        <p className="text-[11px] leading-snug">{thread.reply}</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl border border-gray-200 p-2">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[10px] text-gray-500">Responder via {thread.channel}</span>
                      <button
                        type="button"
                        className="text-[10px] text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded font-medium"
                        onClick={() => {
                          hold();
                          setDraft(thread.reply);
                        }}
                      >
                        Gerar resposta
                      </button>
                    </div>
                    <div className="flex items-center gap-2">
                      <input
                        className="w-full text-xs border-0 p-1 text-gray-700 placeholder-gray-400 outline-none"
                        placeholder="Escreva a sua mensagem..."
                        value={draft}
                        onChange={(event) => {
                          hold();
                          setDraft(event.target.value);
                        }}
                      />
                      <span className="bg-black text-white px-3 py-1 rounded-md text-[10px] font-semibold shrink-0">Enviar</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}

            {slide === "campanhas" ? (
              <div className="max-w-3xl">
                <p className="font-bold text-gray-900">Campanha ilustrativa</p>
                <p className="text-[11px] text-gray-500 mt-1 mb-4">Escolha quem recebe, por onde segue e quando parte. O envio real fica para a equipa confirmar.</p>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 mb-2">Público</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {audiences.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      aria-pressed={audienceId === item.id}
                      onClick={() => {
                        hold();
                        setAudienceId(item.id);
                        setCampaignText(item.text);
                      }}
                      className={`px-3 py-1.5 rounded-full border text-[11px] ${audienceId === item.id ? "bg-black text-white border-black" : "bg-white text-gray-700 border-gray-200"}`}
                    >
                      {item.label} · {item.count}
                    </button>
                  ))}
                </div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 mb-2">Canal</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {sendChannels.map((item) => (
                    <button
                      key={item}
                      type="button"
                      aria-pressed={sendChannel === item}
                      onClick={() => {
                        hold();
                        setSendChannel(item);
                      }}
                      className={`px-3 py-1.5 rounded-full border text-[11px] ${sendChannel === item ? "bg-[#bef264] text-black border-[#bef264]" : "bg-white text-gray-700 border-gray-200"}`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
                <label className="block text-[10px] font-semibold uppercase tracking-wider text-gray-400 mb-2" htmlFor="campaign-preview">
                  Mensagem por {sendChannel}
                </label>
                <textarea
                  id="campaign-preview"
                  className="w-full min-h-[88px] rounded-xl border border-gray-200 p-3 text-[12px] text-gray-800 outline-none focus:border-gray-400"
                  value={campaignText}
                  onChange={(event) => {
                    hold();
                    setCampaignText(event.target.value);
                  }}
                />
                <div className="mt-3 flex flex-wrap gap-2">
                  {(["agora", "amanha"] as const).map((item) => (
                    <button
                      key={item}
                      type="button"
                      aria-pressed={when === item}
                      onClick={() => {
                        hold();
                        setWhen(item);
                      }}
                      className={`px-3 py-1.5 rounded-full text-[11px] border ${when === item ? "bg-gray-900 text-white border-gray-900" : "border-gray-200 text-gray-600"}`}
                    >
                      {item === "agora" ? "Enviar agora" : "Amanhã, 10:00"}
                    </button>
                  ))}
                  <button type="button" className="px-3 py-1.5 rounded-full text-[11px] border border-gray-200 text-gray-700" onClick={() => go("ia")}>
                    Pedir texto à IA
                  </button>
                </div>
              </div>
            ) : null}

            {slide === "ia" ? (
              <div className="max-w-3xl">
                <p className="font-bold text-gray-900">A IA sugere. A equipa decide.</p>
                <p className="text-[11px] text-gray-500 mt-1 mb-4">Escolha o tom. O texto aparece na resposta e só segue se alguém o enviar.</p>
                <div className="max-w-md bg-gray-50 border border-gray-100 rounded-2xl p-3 mb-4">
                  <p className="text-[10px] text-gray-400 mb-1">Sofia Martins · WhatsApp</p>
                  <p className="text-[12px] text-gray-800">Dá para responder ao WhatsApp e ao Instagram no mesmo sítio?</p>
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {tones.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      aria-pressed={toneId === item.id}
                      onClick={() => {
                        hold();
                        setToneId(item.id);
                        setSuggestion(item.text);
                      }}
                      className={`px-3 py-1.5 rounded-full border text-[11px] ${toneId === item.id ? "bg-black text-white border-black" : "border-gray-200 text-gray-700"}`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
                <textarea
                  className="w-full min-h-[96px] rounded-xl border border-gray-200 p-3 text-[12px] text-gray-800 outline-none focus:border-gray-400"
                  placeholder="A sugestão aparece aqui."
                  value={suggestion}
                  onChange={(event) => {
                    hold();
                    setSuggestion(event.target.value);
                  }}
                />
              </div>
            ) : null}

            {slide === "insights" ? (
              <div className="max-w-3xl">
                <p className="font-bold text-gray-900">Respostas por canal</p>
                <p className="text-[11px] text-gray-500 mt-1 mb-5">Números de exemplo. Toque numa barra para ler o que a equipa pode fazer a seguir.</p>
                <div className="space-y-3">
                  {bars.map((item) => (
                    <button key={item.id} type="button" onClick={() => { hold(); setBarId(item.id); }} className="w-full text-left">
                      <span className="flex justify-between text-[11px] mb-1">
                        <span className={item.id === bar.id ? "font-semibold text-gray-900" : "text-gray-600"}>{item.label}</span>
                        <span className="text-gray-400">{item.value}%</span>
                      </span>
                      <span className="block h-2 rounded-full bg-gray-100 overflow-hidden">
                        <span className={`block h-full rounded-full ${item.id === bar.id ? "bg-[#84cc16]" : "bg-gray-300"}`} style={{ width: `${(item.value / 24) * 100}%` }} />
                      </span>
                    </button>
                  ))}
                </div>
                <div className="mt-5 rounded-2xl bg-[#f0f4ea] border border-[#dce6d2] p-4">
                  <p className="text-[12px] text-gray-800 leading-relaxed">{bar.note}</p>
                  <button type="button" className="mt-3 text-[11px] font-semibold underline underline-offset-2" onClick={() => go("campanhas")}>
                    Levar isto para uma campanha
                  </button>
                </div>
              </div>
            ) : null}

            {slide === "contactos" ? (
              <div className="max-w-md">
                <p className="font-bold text-gray-900">Sofia Martins</p>
                <p className="text-[11px] text-gray-500 mt-1">Luna Studio · Luanda · escreveu pelo WhatsApp</p>
                <p className="text-[12px] text-gray-700 leading-relaxed mt-4">Quer juntar as conversas da equipa num só sítio. A nota fica na ficha, ao lado da conversa.</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {["Lead", "WhatsApp", "Luanda", "Seguimento"].map((tag) => {
                    const on = tags.includes(tag);
                    return (
                      <button
                        key={tag}
                        type="button"
                        aria-pressed={on}
                        onClick={() => {
                          hold();
                          setTags((current) => (current.includes(tag) ? current.filter((item) => item !== tag) : [...current, tag]));
                        }}
                        className={`px-3 py-1 rounded-full text-[11px] border ${on ? "bg-gray-900 text-white border-gray-900" : "border-gray-200 text-gray-500"}`}
                      >
                        {tag}
                      </button>
                    );
                  })}
                </div>
              </div>
            ) : null}
          </div>
        </div>

        <div className="flex items-center justify-between gap-3 px-2 pt-3">
          <p className="text-[11px] text-gray-500">{captions[slide]}</p>
          <div className="flex items-center gap-2">
            <button type="button" className="w-7 h-7 rounded-full border border-gray-200 text-gray-600" aria-label="Anterior" onClick={() => step(-1)}>
              ‹
            </button>
            {slides.map((item) => (
              <button
                key={item}
                type="button"
                aria-label={crumbs[item]}
                aria-current={item === slide ? "true" : undefined}
                onClick={() => go(item)}
                className={`h-1.5 rounded-full transition-all ${item === slide ? "w-6 bg-gray-900" : "w-1.5 bg-gray-300"}`}
              />
            ))}
            <button type="button" className="w-7 h-7 rounded-full border border-gray-200 text-gray-600" aria-label="Seguinte" onClick={() => step(1)}>
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
