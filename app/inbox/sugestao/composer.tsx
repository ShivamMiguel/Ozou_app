"use client";

import Link from "next/link";
import { useState } from "react";

const suggestions = [
  "Claro, Sofia! Podem experimentar o plano Pro durante 14 dias, com até 5 pessoas. Sem cartão.",
  "Sofia, podem testar o plano Pro durante 14 dias, com WhatsApp e Instagram no mesmo espaço. Sem cartão.",
];

function Spark() {
  return (
    <svg className="w-3 h-3 text-[#111315]" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
    </svg>
  );
}

export function SuggestionComposer() {
  const [index, setIndex] = useState(0);
  const [value, setValue] = useState(suggestions[0]);

  return (
    <div className="p-5 pt-1 border-t border-transparent space-y-2.5 flex-shrink-0">
      <div className="inline-flex items-center gap-1.5 bg-[#EDF4E5] text-[#2F4D18] px-3 py-1 rounded-lg text-[11px] font-medium">
        <svg className="w-3 h-3 text-[#2F4D18]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
        </svg>
        <span>Sugestão pronta. Reveja antes de enviar.</span>
      </div>
      <div className="border border-[#E2E8F0] rounded-2xl p-4 bg-white shadow-sm focus-within:border-[#111315] transition">
        <div className="flex items-center gap-1 text-xs text-[#111315] mb-2 font-medium">
          <span className="text-[#868E96] font-normal">Responder via:</span>
          <button className="inline-flex items-center gap-1 font-semibold text-xs" type="button">
            WhatsApp
            <svg className="w-3 h-3 text-[#111315]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </button>
        </div>
        <textarea
          className="w-full border-0 p-0 text-xs text-[#111315] focus:ring-0 resize-none font-normal leading-relaxed tracking-normal"
          id="inbox-sugestao-reply"
          rows={2}
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <div className="flex items-center justify-between pt-3 mt-1">
          <button
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#E2E8F0] hover:bg-[#F8F9FA] text-[11px] font-medium text-[#111315] transition"
            type="button"
            onClick={() => {
              const next = (index + 1) % suggestions.length;
              setIndex(next);
              setValue(suggestions[next]);
            }}
          >
            <Spark />
            <span>Gerar outra sugestão</span>
          </button>
          <Link href="/inbox/enviada" className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full bg-[#181A1D] hover:bg-black text-white text-xs font-semibold shadow-sm transition">
            <span>Enviar</span>
            <span className="text-xs">↗</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
