"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent, type ReactNode } from "react";
import { useOzou } from "./use-ozou";

type Intent = "sign-in" | "sign-up" | "recover" | "reset-password" | "create-company" | "confirm-email";

export function BoundForm({ intent, className, children }: { intent: Intent; className?: string; children: ReactNode }) {
  const { api } = useOzou();
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setPending(true);
    setError(null);
    try {
      if (intent === "confirm-email") {
        router.push("/inicio");
        return;
      }
      if (intent === "sign-in") {
        const result = await api.signIn(String(data.get("email") ?? ""), String(data.get("password") ?? ""));
        router.push(result.ok ? "/inicio" : "/credenciais-invalidas");
        return;
      }
      if (intent === "sign-up") {
        const result = await api.signUp({
          name: String(data.get("fullName") ?? ""),
          email: String(data.get("workEmail") ?? ""),
          password: String(data.get("password") ?? ""),
        });
        if (!result.ok) {
          setError(result.reason);
          return;
        }
        router.push("/verificar-email");
        return;
      }
      if (intent === "recover") {
        const result = await api.requestPasswordReset(String(data.get("email") ?? ""));
        if (!result.ok) {
          setError(result.reason);
          return;
        }
        router.push("/email-enviado");
        return;
      }
      if (intent === "reset-password") {
        const password = String(data.get("password") ?? data.get("new-password") ?? "");
        const confirm = String(data.get("confirm") ?? data.get("confirm-password") ?? data.get("passwordConfirm") ?? password);
        if (confirm && confirm !== password) {
          setError("As palavras-passe não coincidem.");
          return;
        }
        const result = await api.resetPassword(password);
        if (!result.ok) {
          setError(result.reason);
          return;
        }
        router.push("/entrar");
        return;
      }
      await api.createWorkspace({
        name: String(data.get("company-name") ?? ""),
        taxId: String(data.get("tax-id") ?? ""),
        sector: String(data.get("industry-sector") ?? data.get("sector") ?? ""),
      });
      router.push("/ligar-canais");
    } finally {
      setPending(false);
    }
  }

  return (
    <form className={className} onSubmit={onSubmit}>
      {children}
      {error ? <p className="text-xs text-[#9b2c2c]">{error}</p> : null}
      {pending ? <p className="sr-only">A guardar</p> : null}
    </form>
  );
}

export function GoogleSignIn({ className, children }: { className: string; children: ReactNode }) {
  const { api } = useOzou();
  const router = useRouter();
  return (
    <button
      className={className}
      type="button"
      onClick={async () => {
        await api.signInWithGoogle();
        router.push("/inicio");
      }}
    >
      {children}
    </button>
  );
}

export function SignOutButton({ className, children }: { className: string; children: ReactNode }) {
  const { api } = useOzou();
  const router = useRouter();
  return (
    <button
      className={className}
      type="button"
      onClick={async () => {
        await api.signOut();
        router.push("/entrar");
      }}
    >
      {children}
    </button>
  );
}

export function SaveProfileButton({ className, children }: { className: string; children: ReactNode }) {
  const { api } = useOzou();
  const router = useRouter();
  return (
    <button
      className={className}
      type="button"
      onClick={async () => {
        const name = (document.getElementById("conta-name") as HTMLInputElement | null)?.value ?? "";
        const email = (document.getElementById("conta-email") as HTMLInputElement | null)?.value ?? "";
        await api.updateProfile({ name, email });
        router.push("/alteracoes-guardadas");
      }}
    >
      {children}
    </button>
  );
}

export function CreateContactButton({ className, children }: { className: string; children: ReactNode }) {
  const { api } = useOzou();
  const router = useRouter();
  return (
    <button
      className={className}
      type="button"
      onClick={async () => {
        const value = (id: string) => (document.getElementById(id) as HTMLInputElement | HTMLSelectElement | null)?.value ?? "";
        await api.createContact({
          name: value("novo-nome"),
          email: value("novo-email"),
          phone: value("novo-telemovel"),
          company: value("novo-empresa"),
          channel: (value("novo-canal") || "WhatsApp") as "WhatsApp",
          status: (value("novo-status") || "Novo lead") as "Novo lead",
        });
        router.push("/contactos");
      }}
    >
      {children}
    </button>
  );
}

export function ImportContactsButton({ className, children }: { className: string; children: ReactNode }) {
  const { api } = useOzou();
  const router = useRouter();
  return (
    <button
      className={className}
      type="button"
      onClick={async () => {
        await api.importSampleContacts();
        router.push("/contactos/importados");
      }}
    >
      {children}
    </button>
  );
}

export function ConnectChannelButton({ kind, href, className, children }: { kind: "WhatsApp" | "Instagram" | "SMS" | "E-mail"; href: string; className: string; children: ReactNode }) {
  const { api } = useOzou();
  const router = useRouter();
  return (
    <button
      className={className}
      type="button"
      onClick={async () => {
        if (kind === "Instagram") {
          router.push(href);
          return;
        }
        await api.connectChannel(kind);
        router.push(href);
      }}
    >
      {children}
    </button>
  );
}

export function CampaignConfirm({ kind, className, children }: { kind: "send" | "schedule"; className: string; children: ReactNode }) {
  const { api } = useOzou();
  const router = useRouter();
  return (
    <button
      className={className}
      type="button"
      onClick={async () => {
        if (kind === "send") await api.sendCampaign();
        else await api.scheduleCampaign();
        router.push(kind === "send" ? "/automacao-campanhas/enviada" : "/automacao-campanhas/agendada");
      }}
    >
      {children}
    </button>
  );
}
