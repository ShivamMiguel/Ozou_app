import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import { ConnectChannelButton } from "@/components/live/actions";

export const metadata: Metadata = {
  title: "OZOU — Ligar primeiros canais",
};

const system = { fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' } as CSSProperties;

const channels = [
  ["/canais/whatsapp", "WhatsApp", "Ligue a sua conta WhatsApp Business."],
  ["/canais/instagram", "Instagram", "Receba as mensagens do Instagram."],
  ["/canais/sms", "SMS", "Converse através do seu número."],
  ["/canais/email", "E-mail", "Centralize as caixas da sua equipa."],
] as const;

export default function LigarCanaisPage() {
  return (
    <div className="bg-[#f8faf7] min-h-screen flex flex-col justify-between text-[#111827] antialiased px-6 md:px-12 py-8 selection:bg-gray-200" style={system}>
      <header className="w-full max-w-[1360px] mx-auto flex items-center justify-between pt-2 px-2">
        <Link href="/" className="text-[26px] font-extrabold tracking-tight text-[#191b1e] uppercase">OZOU</Link>
        <div className="text-[14.5px] font-normal text-[#6b7280] tracking-normal">Configuração inicial</div>
      </header>
      <main className="w-full max-w-[940px] mx-auto flex flex-col items-center mt-6 mb-8">
        <nav aria-label="Progresso" className="flex items-center space-x-7 mb-9">
          <Link href="/criar-empresa" className="flex items-center space-x-2.5">
            <span className="w-[26px] h-[26px] rounded-full bg-[#191b1e] text-white text-[12px] font-semibold flex items-center justify-center">1</span>
            <span className="text-[13.5px] font-medium text-[#191b1e] tracking-normal">A sua empresa</span>
          </Link>
          <div className="flex items-center space-x-2.5 bg-[#edf2e7] px-4 py-1.5 rounded-full border border-[#e4ebe0]">
            <span className="w-[26px] h-[26px] rounded-full bg-[#191b1e] text-white text-[12px] font-semibold flex items-center justify-center">2</span>
            <span className="text-[13.5px] font-medium text-[#191b1e] pr-1 tracking-normal">Os seus canais</span>
          </div>
          <Link href="/convidar-equipa" className="flex items-center space-x-2.5">
            <span className="w-[26px] h-[26px] rounded-full bg-[#e5e7eb] text-[#6b7280] text-[12px] font-semibold flex items-center justify-center">3</span>
            <span className="text-[13.5px] font-medium text-[#6b7280] tracking-normal">A sua equipa</span>
          </Link>
        </nav>
        <section className="w-full bg-white rounded-3xl border border-[#ebece8] shadow-[0_1px_3px_rgba(0,0,0,0.02)] p-10 md:p-14">
          <header className="mb-10 text-left">
            <h1 className="text-[34px] font-bold text-[#191b1e] tracking-tight leading-snug">Os seus canais, no mesmo lugar.</h1>
            <p className="text-[15px] text-[#6b7280] mt-2 tracking-normal font-normal">Ligue os canais que já utiliza. Pode terminar mais tarde.</p>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
            {channels.map(([href, name, copy]) => (
              <article key={name} className="border border-[#e7e9e4] rounded-2xl p-7 flex flex-col justify-between min-h-[175px] hover:border-gray-300 transition-colors">
                <div>
                  <h2 className="text-[20px] font-bold text-[#191b1e] tracking-tight">{name}</h2>
                  <p className="text-[14px] text-[#6b7280] mt-2">{copy}</p>
                </div>
                <ConnectChannelButton kind={name} href={href} className="w-full mt-6 py-2.5 px-4 rounded-full border border-[#dedfdc] hover:border-gray-400 bg-white text-[13.5px] font-medium text-[#191b1e] inline-flex items-center justify-center space-x-1.5 transition-all">
                  <span>Conectar</span>
                  <span className="text-xs leading-none">↗</span>
                </ConnectChannelButton>
              </article>
            ))}
          </div>
          <div className="mb-14">
            <p className="text-[13px] text-[#6b7280] tracking-normal">As permissões são apresentadas antes de cada ligação.</p>
          </div>
          <footer className="flex items-center justify-between pt-2">
            <Link href="/criar-empresa" className="inline-flex items-center justify-center space-x-2 py-3 px-6 rounded-full border border-[#dedfdc] hover:border-gray-400 bg-white text-[14px] font-medium text-[#191b1e] transition-all">
              <span>←</span>
              <span>Empresa</span>
            </Link>
            <Link href="/convidar-equipa" className="inline-flex items-center justify-center space-x-2 py-3 px-8 rounded-full bg-[#1b1c1e] hover:bg-black text-white text-[14px] font-medium transition-all shadow-sm">
              <span>Ligar mais tarde</span>
              <span className="text-xs">→</span>
            </Link>
          </footer>
        </section>
      </main>
      <footer className="w-full text-center pb-4">
        <p className="text-[13px] text-[#6b7280] font-normal tracking-tight">A sua configuração fica guardada a cada passo.</p>
      </footer>
    </div>
  );
}
