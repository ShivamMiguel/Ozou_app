import type { Metadata } from "next";
import ArchiveContactScreen from "./screen";

export const metadata: Metadata = {
  title: "OZOU — Arquivar contacto",
};

export default function ArquivarContactoPage() {
  return <ArchiveContactScreen />;
}
