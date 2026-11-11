import type { Metadata } from "next";
import { InviteTeamScreen } from "./screen";

export const metadata: Metadata = {
  title: "OZOU — Convidar equipa",
};

export default function ConvidarEquipaPage() {
  return <InviteTeamScreen />;
}
