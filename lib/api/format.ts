import type { ChannelKind } from "./types";

export function channelBadge(kind: ChannelKind) {
  if (kind === "WhatsApp") return "bg-[#E8F5E9] text-[#2E7D32]";
  if (kind === "Instagram") return "bg-[#F3E8FF] text-[#7E22CE]";
  if (kind === "SMS") return "bg-[#EFF8FF] text-[#175CD3]";
  return "bg-[#F2F4F7] text-[#475467]";
}

const demoToday = "2026-11-11";

export function formatWhen(iso: string) {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return iso;
  const time = date.toLocaleTimeString("pt-PT", { hour: "2-digit", minute: "2-digit", timeZone: "Africa/Luanda" });
  const day = date.toLocaleDateString("en-CA", { timeZone: "Africa/Luanda" });
  if (day === demoToday) return `Hoje, ${time}`;
  if (day === "2026-11-10") return `Ontem, ${time}`;
  return date.toLocaleDateString("pt-PT", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit", timeZone: "Africa/Luanda" });
}

export function formatKz(value: number) {
  return `${value.toLocaleString("pt-PT")} Kz`;
}

export function clock(iso: string) {
  return new Date(iso).toLocaleTimeString("pt-PT", { hour: "2-digit", minute: "2-digit" });
}
