"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const openToEveryone = new Set([
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

export function afterLoginPath() {
  if (typeof window !== "undefined" && window.matchMedia("(max-width: 767px)").matches) return "/inbox";
  return "/inicio";
}

export function PhoneInboxGate() {
  const path = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (openToEveryone.has(path) || path === "/inbox") return;
    if (!window.matchMedia("(max-width: 767px)").matches) return;
    router.replace("/inbox");
  }, [path, router]);

  return null;
}
