import type { Metadata } from "next";
import { InboxScreen } from "@/components/inbox-screen";

export const metadata: Metadata = {
  title: "OZOU — Nova conversa",
};

export default function NovaConversaPage() {
  return <InboxScreen compose />;
}
