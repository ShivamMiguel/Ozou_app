"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { ChannelKind } from "@/lib/api/types";
import { useOzou } from "./use-ozou";

const allChannels: ChannelKind[] = ["WhatsApp", "Instagram", "SMS", "E-mail"];

const audiences = ["Leads sem resposta há 7 dias", "Novos leads", "Clientes", "Todos os contactos com consentimento"];

function draftKey(draft: { audience?: string; message?: string; channels?: ChannelKind[] } | undefined) {
  return `${draft?.audience ?? ""}|${draft?.message ?? ""}|${draft?.channels?.join(",") ?? ""}`;
}

export function CampaignStudio() {
  const { api, db } = useOzou();
  const draft = db.campaigns.find((campaign) => campaign.status === "draft") ?? db.campaigns[0];
  const [message, setMessage] = useState(draft?.message ?? "");
  const [audience, setAudience] = useState(draft?.audience ?? audiences[0]);
  const [channels, setChannels] = useState<ChannelKind[]>((draft?.channels ?? ["WhatsApp", "E-mail"]).filter((item) => item !== "Instagram"));
  const [openAudience, setOpenAudience] = useState(false);
  const [note, setNote] = useState("");
  const dirty = useRef(false);
  const applied = useRef(draftKey(draft));

  useEffect(() => {
    const key = draftKey(draft);
    if (dirty.current || applied.current === key || !draft) return;
    applied.current = key;
    setMessage(draft.message);
    setAudience(draft.audience);
    setChannels(draft.channels.filter((item) => item !== "Instagram"));
  }, [draft]);

  const audienceCount = db.contacts.filter((contact) => !contact.archived && (audience.startsWith("Clientes") ? contact.status === "Cliente" : audience.startsWith("Novos") ? contact.status === "Novo lead" : audience.startsWith("Leads") ? contact.status === "Sem resposta" : contact.consent)).length;
  const preview = message.replaceAll("{{primeiro_nome}}", "Sofia");

  function toggle(kind: ChannelKind) {
    const next = channels.includes(kind) ? channels.filter((item) => item !== kind) : [...channels, kind];
    const safe = next.length ? next : [kind];
    dirty.current = true;
    setChannels(safe);
    void api.saveDraft({ channels: safe, audience, message });
  }

  async function vary() {
    const next = await api.varyMessage(message);
    setMessage(next);
    await api.saveDraft({ channels, audience, message: next });
    setNote("Variação gerada com a IA de demonstração.");
  }

  return (
    <div className="px-6 py-6 lg:px-8 w-full max-w-[1100px]">
      <div className="flex flex-wrap items-start justify-between gap-3 mb-6">
        <div>
          <h2 className="text-xl font-bold tracking-tight text-[#111827]">{draft?.name ?? "Nova campanha"}</h2>
          <p className="text-[12px] text-[#71717A] mt-0.5">Rascunho guardado neste browser · {draft?.status === "draft" ? "por enviar" : draft?.status}</p>
        </div>
        <Link href="/campanhas" className="text-[12px] font-medium px-4 py-2 rounded-full border border-[#E4E4E7] text-[#18181B] bg-white">
          Ver campanhas
        </Link>
      </div>
      {note ? <p className="mb-4 text-[12px] text-[#426830]">{note}</p> : null}
      <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1.15fr)_minmax(260px,0.85fr)] gap-6 items-start">
        <div className="min-w-0 space-y-7 border border-[#F0F0F0] rounded-2xl p-5 lg:p-6 bg-white">
          <section>
            <h3 className="text-[14px] font-bold text-[#18181B]">1. Escolha onde conversar</h3>
            <p className="text-[12px] text-[#71717A] mb-4">Combine os canais que fazem sentido para o seu público.</p>
            <div className="grid grid-cols-2 gap-2.5">
              {allChannels.map((kind) => {
                if (kind === "Instagram") {
                  return (
                    <Link key={kind} href="/inbox?canal=Instagram" className="flex min-w-0 items-center gap-2 p-3 rounded-xl border border-[#E5E7EB] bg-white text-left">
                      <span className="w-4 h-4 shrink-0 rounded border border-[#D1D5DB]" />
                      <span>
                        <span className="block text-[12px] font-medium">Instagram</span>
                        <span className="block text-[10px] text-[#71717A]">Responde-se no inbox</span>
                      </span>
                    </Link>
                  );
                }
                const on = channels.includes(kind);
                return (
                  <button key={kind} className={`flex min-w-0 items-center gap-2 p-3 rounded-xl border text-left ${on ? "border-[#D7E3CF] bg-[#F4F8F1]" : "border-[#E5E7EB] bg-white"}`} type="button" onClick={() => toggle(kind)}>
                    <span className={`w-4 h-4 shrink-0 rounded ${on ? "bg-[#18181B]" : "border border-[#D1D5DB]"}`} />
                    <span className="text-[12px] font-medium">{kind}</span>
                  </button>
                );
              })}
            </div>
          </section>
          <section>
            <h3 className="text-[14px] font-bold text-[#18181B]">2. Defina o público</h3>
            <p className="text-[12px] text-[#71717A] mb-4">Um filtro simples para chegar às pessoas certas.</p>
            <div className="relative">
              <button className="w-full border border-[#E5E7EB] rounded-xl px-4 py-2.5 flex items-center justify-between bg-white text-[13px]" type="button" onClick={() => setOpenAudience((open) => !open)}>
                <span>{audience}</span>
                <span className="text-[#71717A]">▾</span>
              </button>
              {openAudience ? (
                <div className="absolute z-20 mt-2 w-full rounded-2xl border border-[#E5E7EB] bg-white p-1 shadow-lg">
                  {audiences.map((item) => (
                    <button
                      key={item}
                      className="block w-full text-left px-3 py-2 text-[13px] rounded-xl hover:bg-[#F8F9FA]"
                      type="button"
                      onClick={() => {
                        dirty.current = true;
                        setAudience(item);
                        setOpenAudience(false);
                        void api.saveDraft({ channels, audience: item, message });
                      }}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              ) : null}
            </div>
            <div className="flex flex-wrap items-start justify-between gap-2 text-[11px] pt-2">
              <span className="font-semibold">{audienceCount} contactos encontrados</span>
              <span className="text-[#71717A]">Apenas contactos com consentimento de comunicação.</span>
            </div>
          </section>
          <section>
            <h3 className="text-[14px] font-bold text-[#18181B]">3. Dê voz à sua mensagem</h3>
            <p className="text-[12px] text-[#71717A] mb-4">Escreva uma mensagem. A IA ajuda a torná-la mais pessoal.</p>
            <div className="border border-[#E5E7EB] rounded-2xl p-4">
              <textarea className="w-full border-none p-0 text-[13.5px] leading-relaxed text-[#18181B] focus:outline-none resize-none bg-transparent" rows={4} value={message} aria-label="Mensagem da campanha" onChange={(event) => { dirty.current = true; setMessage(event.target.value); }} onBlur={() => void api.saveDraft({ channels, audience, message })} />
              <div className="text-right text-[11px] text-[#A1A1AA] pt-3">{message.length} / 1.024 caracteres</div>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-2 pt-3">
              <button className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#E5E7EB] text-[12px] font-medium" type="button" onClick={vary}>
                ✦ Gerar variação com IA
              </button>
            </div>
          </section>
        </div>
        <div className="min-w-0 space-y-5">
          <section className="border border-[#F0F0F0] rounded-2xl p-6 bg-white">
            <h3 className="text-[14px] font-bold">A sua mensagem, em contexto.</h3>
            <p className="text-[11px] text-[#71717A] mb-4">Pré-visualização · {channels[0] ?? "WhatsApp"}</p>
            <div className="bg-[#F8F9F7] rounded-xl p-4 border border-[#ECEEE9]">
              <div className="text-[13px] font-bold">Sofia Martins</div>
              <div className="text-[11px] text-[#71717A] mb-3">{channels[0] ?? "WhatsApp"}</div>
              <div className="bg-[#E4EEDC] rounded-2xl rounded-tl-sm p-4 text-[13px] leading-relaxed whitespace-pre-wrap">{preview}</div>
            </div>
          </section>
          <section className="bg-[#F4F6F1] border border-[#E7EDE2] rounded-2xl p-6">
            <h4 className="text-[14px] font-bold mb-2">Um bom momento para chegar.</h4>
            <div className="text-[13px] font-bold mb-2">Hoje, entre as 18:00 e as 19:00</div>
            <p className="text-[12px] text-[#52525B] leading-relaxed">Os seus contactos respondem mais neste intervalo. A IA sugere enviar às 18:30, hora de Luanda.</p>
            <div className="text-[11px] text-[#71717A] mt-4">{audienceCount} contactos · {channels.length} canais · Fuso: Luanda</div>
          </section>
        </div>
      </div>
      <footer className="mt-8 pt-5 border-t border-[#F4F4F5] bg-white flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-center">
        <div>
          <div className="text-[13px] font-bold">Tudo pronto para voltar à conversa.</div>
          <div className="text-[11px] text-[#71717A]">Pode rever ou cancelar antes do envio.</div>
        </div>
        <div className="flex flex-wrap items-center gap-2.5">
          <Link href="/automacao-campanhas/rever" className="px-5 py-2.5 rounded-full border border-[#E5E7EB] bg-white text-[12px] font-medium" onClick={() => void api.saveDraft({ channels, audience, message })}>
            Enviar agora
          </Link>
          <Link href="/automacao-campanhas/rever" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#18181B] text-white text-[12px] font-medium" onClick={() => void api.saveDraft({ channels, audience, message })}>
            ✦ Agendar no melhor horário · 18:30
          </Link>
        </div>
      </footer>
    </div>
  );
}
