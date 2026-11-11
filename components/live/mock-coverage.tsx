"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { formatKz } from "@/lib/api/format";
import type { ChannelKind } from "@/lib/api/types";
import { afterLoginPath } from "./phone-inbox";
import { useOzou } from "./use-ozou";
import { messageCounts, TOP_UPS } from "./wallet";

type Panel = "workspace" | "account" | "topup" | "period" | null;

function reactHandler(element: HTMLElement, name: "onClick" | "onSubmit") {
  let names: string[] = [];
  try {
    names = Object.getOwnPropertyNames(element);
  } catch {
    names = Object.keys(element);
  }
  for (const key of names) {
    if (!key.startsWith("__reactProps$") && !key.startsWith("__reactFiber$")) continue;
    const value = (element as unknown as Record<string, { memoizedProps?: Record<string, unknown> }>)[key];
    if (!value || typeof value !== "object") continue;
    if (key.startsWith("__reactProps$") && typeof (value as unknown as Record<string, unknown>)[name] === "function") return true;
    if (key.startsWith("__reactFiber$") && typeof value.memoizedProps?.[name] === "function") return true;
  }
  return false;
}

function plainText(element: HTMLElement) {
  return (element.innerText || element.textContent || "").replace(/\s+/g, " ").trim();
}

function findControl(target: HTMLElement) {
  if (target.closest("input, textarea, select, option, label")) return null;
  const control = target.closest("button, a, [role='button']") as HTMLElement | null;
  if (control) return control;
  const pointer = target.closest(".cursor-pointer") as HTMLElement | null;
  if (pointer && plainText(pointer).length < 160) return pointer;
  let node: HTMLElement | null = target;
  for (let depth = 0; node && depth < 4; depth += 1, node = node.parentElement) {
    if (node.querySelector("button, a, input, textarea")) continue;
    const text = plainText(node).toLowerCase();
    if (text.includes("anexar") && text.length < 40) return node;
    if ((text.includes("studio workspace") || text.includes("plano pro") || text.includes("mariana costa")) && text.length < 48) return node;
  }
  return null;
}

function nearestField(from: HTMLElement) {
  let node: HTMLElement | null = from;
  for (let depth = 0; node && depth < 8; depth += 1, node = node.parentElement) {
    const field = node.querySelector("textarea, input[type='text'], input[type='search'], input:not([type])") as HTMLTextAreaElement | HTMLInputElement | null;
    if (field) return field;
  }
  return null;
}

function writeField(field: HTMLTextAreaElement | HTMLInputElement, next: string) {
  const prototype = field instanceof HTMLTextAreaElement ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype;
  Object.getOwnPropertyDescriptor(prototype, "value")?.set?.call(field, next);
  field.dispatchEvent(new Event("input", { bubbles: true }));
}

export function MockCoverage() {
  const { api, db } = useOzou();
  const router = useRouter();
  const [toast, setToast] = useState<string | null>(null);
  const [panel, setPanel] = useState<Panel>(null);

  function notify(message: string) {
    setToast(message);
    window.setTimeout(() => setToast((current) => (current === message ? null : current)), 2600);
  }

  useEffect(() => {
    function onClick(event: MouseEvent) {
      const target = event.target as HTMLElement | null;
      if (!target || target.closest("[data-ozou-panel]")) return;
      const element = findControl(target);
      if (!element) return;
      if (element instanceof HTMLAnchorElement) {
        const href = element.getAttribute("href");
        if (href && href !== "#" && !href.startsWith("javascript")) return;
      }
      if (element instanceof HTMLButtonElement && element.type === "submit") {
        const form = element.form;
        if (form && (form.getAttribute("action") || reactHandler(form, "onSubmit"))) return;
      } else if (reactHandler(element, "onClick")) return;

      event.preventDefault();
      event.stopPropagation();
      const label = (element.getAttribute("aria-label") || plainText(element)).replace(/\s+/g, " ").trim();
      void run(label, element);
    }

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);

    async function run(label: string, element: HTMLElement) {
      const text = label.toLowerCase();
      const path = window.location.pathname;

      if (text.includes("continuar com google")) {
        await api.signInWithGoogle();
        notify("Sessão iniciada com Google de demonstração.");
        router.push(afterLoginPath());
        return;
      }

      if (text.includes("workspace") || text.includes("plano pro")) {
        setPanel("workspace");
        return;
      }

      if (text === "conta" || text.includes("mariana costa") || (!text && element.closest("aside"))) {
        setPanel("account");
        return;
      }

      if (text.includes("comparar planos") || text.includes("carregar saldo") || text.includes("carregar carteira")) {
        setPanel("topup");
        return;
      }

      if (text.includes("este mês") || text.includes("este mes") || text.includes("novembro")) {
        setPanel("period");
        return;
      }

      if (text.includes("reenviar")) {
        if (text.includes("link") || text.includes("código") || text.includes("codigo")) {
          await api.requestPasswordReset("mariana@studio.ao");
          notify(text.includes("código") || text.includes("codigo") ? "Código 482913 reenviado." : "Link de recuperação reenviado.");
          return;
        }
        notify("Convite reenviado.");
        return;
      }

      if (text.includes("anexar")) {
        const field = nearestField(element);
        if (field) writeField(field, `${field.value}${field.value ? "\n" : ""}[Anexo: proposta-ozou.pdf]`);
        notify("Ficheiro anexado: proposta-ozou.pdf");
        return;
      }

      if (text.includes("melhorar com ia") || text.includes("gerar variação") || text.includes("gerar resposta")) {
        const field = nearestField(element);
        const next = await api.varyMessage(field?.value || "Olá, {{primeiro_nome}}!");
        if (field) writeField(field, next);
        notify("Variação gerada com a IA de demonstração.");
        return;
      }

      if (text.includes("trocar ficheiro")) {
        notify("Ficheiro substituído por contactos-dezembro.csv.");
        return;
      }

      if (text.includes("conectar") || text.includes("ligar canal") || text === "ligar") {
        const kind: ChannelKind = path.includes("instagram") ? "Instagram" : path.includes("sms") ? "SMS" : path.includes("email") || path.includes("e-mail") ? "E-mail" : "WhatsApp";
        if (kind === "Instagram") {
          router.push("/canais/instagram");
          return;
        }
        await api.connectChannel(kind);
        notify(`${kind} ligado à Studio Workspace.`);
        router.push("/canais/conectado");
        return;
      }

      if (text.includes("guardar")) {
        notify("Alterações guardadas.");
        router.push("/alteracoes-guardadas");
        return;
      }

      if (text.includes("enviar agora") || text.includes("agendar") || text.includes("agendamento")) {
        notify("Campanha pronta para revisão.");
        if (!path.includes("/rever")) router.push("/automacao-campanhas/rever");
        return;
      }

      if (text.includes("export")) {
        notify("Exportação preparada: contactos-studio.csv");
        return;
      }

      if (text.includes("elimin") || text.includes("remover") || text.includes("apagar")) {
        notify("Remoção registada na demonstração.");
        return;
      }

      if (text.startsWith("enviar") && !text.includes("link") && !text.includes("convite")) {
        const field = nearestField(element);
        if (field) writeField(field, "");
        notify("Mensagem enviada na demonstração.");
        if (!path.startsWith("/inbox")) router.push("/inbox");
        return;
      }

      const destination = destinationFor(text);
      if (destination && destination !== path) {
        router.push(destination);
        return;
      }

      if (text.includes("anterior") || text.includes("seguinte") || /^\d+$/.test(text)) {
        notify("Nesta vista de demonstração não há outra página. A lista activa está em Contactos.");
        if (!path.startsWith("/contactos")) router.push("/contactos");
        return;
      }

      notify(label ? `${label} registado na demonstração.` : "Acção registada na demonstração.");
    }
  }, [api, router]);

  const active = db.workspaces.find((workspace) => workspace.id === db.activeWorkspaceId);

  return (
    <div data-ozou-panel>
      {toast ? (
        <div className="fixed bottom-5 left-1/2 z-[80] -translate-x-1/2 rounded-full bg-[#18181B] px-4 py-2 text-xs text-white shadow-lg">
          {toast}
        </div>
      ) : null}
      {panel ? (
        <button aria-label="Fechar painel" className="fixed inset-0 z-[70] bg-black/20" type="button" onClick={() => setPanel(null)} />
      ) : null}
      {panel === "workspace" ? (
        <div className="fixed left-1/2 top-24 z-[75] w-[280px] -translate-x-1/2 rounded-2xl border border-[#E6E8E5] bg-white p-3 shadow-xl">
          <p className="px-2 pb-2 text-[11px] font-semibold uppercase tracking-wide text-[#71717A]">Espaços</p>
          {db.workspaces.map((workspace) => (
            <button
              key={workspace.id}
              className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm hover:bg-[#F4F4F3]"
              type="button"
              onClick={async () => {
                await api.switchWorkspace(workspace.id);
                notify(`Espaço activo: ${workspace.name}`);
                setPanel(null);
              }}
            >
              <span>
                <span className="block font-semibold">{workspace.name}</span>
                <span className="text-[11px] text-[#71717A]">Plano {workspace.plan}</span>
              </span>
              {workspace.id === active?.id ? <span className="text-xs">✓</span> : null}
            </button>
          ))}
          <Link href="/criar-empresa" className="mt-1 block rounded-xl px-3 py-2 text-sm font-medium hover:bg-[#F4F4F3]" onClick={() => setPanel(null)}>
            + Criar empresa
          </Link>
        </div>
      ) : null}
      {panel === "account" ? (
        <div className="fixed bottom-24 left-6 z-[75] w-[220px] rounded-2xl border border-[#E6E8E5] bg-white p-2 shadow-xl">
          <Link href="/definicoes/conta" className="block rounded-xl px-3 py-2 text-sm hover:bg-[#F4F4F3]" onClick={() => setPanel(null)}>
            Definições
          </Link>
          <Link href="/ajuda" className="block rounded-xl px-3 py-2 text-sm hover:bg-[#F4F4F3]" onClick={() => setPanel(null)}>
            Ajuda
          </Link>
          <button
            className="block w-full rounded-xl px-3 py-2 text-left text-sm hover:bg-[#F4F4F3]"
            type="button"
            onClick={async () => {
              await api.signOut();
              setPanel(null);
              router.push("/entrar");
            }}
          >
            Terminar sessão
          </button>
        </div>
      ) : null}
      {panel === "topup" ? (
        <div className="fixed left-1/2 top-1/2 z-[75] w-[min(420px,92vw)] -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-white p-6 shadow-2xl">
          <h2 className="text-lg font-bold">Carregar saldo</h2>
          <p className="mt-1 text-xs text-[#71717A]">
            {messageCounts(db.wallet?.balanceKz ?? 0)
              .map((item) => `${item.name} ${item.sends.toLocaleString("pt-PT")}`)
              .join(" · ")}
          </p>
          <div className="mt-4 grid grid-cols-2 gap-2">
            {TOP_UPS.map((amount) => (
              <button
                key={amount}
                className="rounded-full bg-[#18181B] py-2.5 text-xs font-medium text-white"
                type="button"
                onClick={async () => {
                  await api.topUp(amount);
                  notify(`Carteira carregada com ${formatKz(amount)}.`);
                  setPanel(null);
                }}
              >
                + {formatKz(amount)}
              </button>
            ))}
          </div>
        </div>
      ) : null}
      {panel === "period" ? (
        <div className="fixed right-8 top-28 z-[75] w-[220px] rounded-2xl border border-[#E6E8E5] bg-white p-2 shadow-xl">
          {["Este mês · Novembro 2026", "Últimos 7 dias", "Últimos 30 dias"].map((period) => (
            <button
              key={period}
              className="block w-full rounded-xl px-3 py-2 text-left text-sm hover:bg-[#F4F4F3]"
              type="button"
              onClick={() => {
                notify(`Período: ${period}`);
                setPanel(null);
              }}
            >
              {period}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}

function destinationFor(text: string) {
  if (text.includes("termo") || text.includes("privacidade")) return "/termos";
  if (text.includes("ia trata") || text.includes("ajuda")) return "/ajuda";
  if (text.includes("canais e liga") || text.includes("gerir os meus canais") || text.includes("definições de canais")) return "/definicoes/canais";
  if (text.includes("arquiv")) return "/contactos/arquivados";
  if (text.includes("convid")) return "/convidar-equipa";
  if (text.includes("equipa")) return "/definicoes/equipa";
  if (text.includes("fatura") || text.includes("conta e plano") || text.includes("a sua conta") || text.includes("defini")) return "/definicoes/conta";
  if (text.includes("inbox") || text.includes("todas as conversas") || text.includes("não lidas") || text.includes("nao lidas") || text.includes("nova conversa")) return "/inbox";
  if (text.includes("novo contacto")) return "/contactos/novo";
  if (text.includes("importar")) return "/contactos/importar";
  if (text.includes("contacto") || text.includes("leads") || text.includes("clientes") || text.includes("parceiros") || text.includes("sem resposta") || text.startsWith("todos")) return "/contactos";
  if (text.includes("campanha") || text.includes("automa")) return "/automacao-campanhas";
  if (text.includes("insight") || text.includes("métrica") || text.includes("metrica")) return "/insights";
  if (text.includes("empresa")) return "/empresas";
  if (text.includes("começar") || text.includes("comecar") || text.includes("criar conta") || text.includes("experiment")) return "/criar-conta";
  if (text === "entrar" || text.startsWith("entrar ") || text.includes("iniciar sessão") || text.includes("iniciar sessao")) return "/entrar";
  if (text === "canais" || text.includes("ligar canais") || text.includes("os canais")) return "/definicoes/canais";
  if (text.includes("início") || text.includes("inicio")) return "/inicio";
  if (text.includes("whatsapp")) return "/canais/whatsapp";
  if (text.includes("instagram")) return "/canais/instagram";
  if (text.includes("sms")) return "/canais/sms";
  if (text.includes("e-mail") || text.includes("email")) return "/canais/email";
  return null;
}
