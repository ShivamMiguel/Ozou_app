"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { formatKz } from "@/lib/api/format";
import { useOzou } from "./use-ozou";

const RATES = { Email: 6, WhatsApp: 10, SMS: 15 } as const;

export function messageCounts(balanceKz: number) {
  return (Object.keys(RATES) as Array<keyof typeof RATES>).map((name) => ({
    name,
    sends: Math.floor(balanceKz / RATES[name]),
  }));
}

export const TOP_UPS = [5_000, 10_000, 25_000, 50_000, 100_000];

const hidden = new Set([
  "/",
  "/entrar",
  "/criar-conta",
  "/recuperar",
  "/verificar-email",
  "/credenciais-invalidas",
  "/nova-palavra-passe",
  "/email-enviado",
  "/termos",
]);

const TAGLINE = "A mensagem certa. No momento certo.";

function plain(element: Element) {
  return (element.textContent || "").replace(/\s+/g, " ").trim();
}

function subtitleAnchor() {
  const headers = [...document.querySelectorAll("header")].filter((header) => header.querySelector("h1") && !header.closest("[role='dialog']"));
  const tagline = headers.flatMap((header) => [...header.querySelectorAll("p")]).find((el) => plain(el) === TAGLINE);
  if (tagline) return tagline;
  const title = headers[0]?.querySelector("h1") ?? document.querySelector("main h1");
  if (!title) return null;
  let node = title.nextElementSibling;
  while (node) {
    if (node.tagName === "P" && plain(node)) return node;
    node = node.nextElementSibling;
  }
  return title;
}

function textLine(element: Element) {
  const range = document.createRange();
  range.selectNodeContents(element);
  return [...range.getClientRects()].find((rect) => rect.width > 2) ?? element.getBoundingClientRect();
}

export function WalletChip() {
  const path = usePathname();
  const { db } = useOzou();
  const [spot, setSpot] = useState<{ top: number; left: number } | null>(null);

  useEffect(() => {
    let frame = 0;
    const place = () => {
      const target = subtitleAnchor();
      if (!target) {
        setSpot(null);
        return;
      }
      const rect = textLine(target);
      if (rect.width < 2) return;
      const top = rect.top + rect.height / 2;
      const left = rect.right + 10;
      setSpot((current) => (current && Math.abs(current.top - top) < 0.5 && Math.abs(current.left - left) < 0.5 ? current : { top, left }));
    };
    const schedule = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(place);
    };
    schedule();
    const later = window.setTimeout(schedule, 60);
    window.addEventListener("resize", schedule);
    window.addEventListener("scroll", schedule, true);
    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(later);
      window.removeEventListener("resize", schedule);
      window.removeEventListener("scroll", schedule, true);
    };
  }, [path]);

  if (hidden.has(path) || !db.wallet || !spot) return null;
  const counts = messageCounts(db.wallet.balanceKz);
  const low = db.wallet.balanceKz < 5_000;
  return (
    <Link
      href="/definicoes/conta"
      style={{ top: spot.top, left: spot.left }}
      className={`ozou-wallet-chip fixed z-40 -translate-y-1/2 inline-flex items-center gap-3 rounded-full border px-3 py-1.5 text-[11px] shadow-sm ${low ? "border-[#fdba74] bg-[#fff7ed] text-[#9a3412]" : "border-[#E4E7EC] bg-white text-[#141416]"}`}
    >
      {counts.map((item) => (
        <span key={item.name} className="inline-flex items-baseline gap-1">
          <span className="font-medium text-[#71717A]">{item.name}</span>
          <span className="font-bold">{item.sends.toLocaleString("pt-PT")}</span>
        </span>
      ))}
    </Link>
  );
}

export function WalletPanel() {
  const { api, db } = useOzou();
  const [note, setNote] = useState<string | null>(null);
  const balance = db.wallet?.balanceKz ?? 0;

  return (
    <section id="carteira" className="bg-[#f0f3ec] rounded-2xl p-8 flex flex-col justify-between">
      <div>
        <span className="text-[10px] tracking-wider uppercase font-semibold text-[#666e60] block mb-4">Carteira</span>
        <h2 className="text-[26px] font-bold text-gray-900 leading-tight mb-4">Saldo disponível</h2>
        <div className="grid grid-cols-3 gap-2 mb-3">
          {messageCounts(balance).map((item) => (
            <div key={item.name}>
              <div className="text-[10px] font-semibold uppercase tracking-wide text-[#717b6a]">{item.name}</div>
              <div className="text-[22px] font-bold text-gray-900 tracking-tight">{item.sends.toLocaleString("pt-PT")}</div>
            </div>
          ))}
        </div>
        <p className="text-[11.5px] text-[#717b6a] font-normal mb-7">Mensagens disponíveis em cada canal. Carrega quando precisares.</p>
        <div className="grid grid-cols-2 gap-2">
          {TOP_UPS.map((amount) => (
            <button
              key={amount}
              className="rounded-full bg-white py-2.5 text-[12.5px] font-semibold text-gray-800 hover:bg-gray-50"
              type="button"
              onClick={async () => {
                await api.topUp(amount);
                setNote(`Carregamento de ${formatKz(amount)} registado.`);
              }}
            >
              + {formatKz(amount)}
            </button>
          ))}
        </div>
        {note ? <p className="mt-4 text-xs text-[#2F4F24]">{note}</p> : null}
      </div>
    </section>
  );
}
