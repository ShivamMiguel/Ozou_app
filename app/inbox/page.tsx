import type { Metadata } from "next";
import { InboxScreen } from "@/components/inbox-screen";

export const metadata: Metadata = {
  title: "OZOU — Inbox unificado",
};

export default function InboxPage() {
  return <InboxScreen />;
}
