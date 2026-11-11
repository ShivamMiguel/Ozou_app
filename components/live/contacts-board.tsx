"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import type { ChannelKind, ContactStatus } from "@/lib/api/types";
import { formatWhen } from "@/lib/api/format";
import { useOzou } from "./use-ozou";

const groups = [
  ["todos", "Todos"],
  ["leads", "Leads"],
  ["clientes", "Clientes"],
  ["sem-resposta", "Sem resposta"],
] as const;

const channels: Array<ChannelKind | "todos"> = ["todos", "WhatsApp", "Instagram", "SMS", "E-mail"];

export function ContactsBoard() {
  const { api, db } = useOzou();
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [group, setGroup] = useState<(typeof groups)[number][0]>("todos");
  const [channel, setChannel] = useState<ChannelKind | "todos">("todos");
  const [sort, setSort] = useState<"recent" | "name">("recent");
  const [page, setPage] = useState(1);
  const [picked, setPicked] = useState<string[]>([]);
  const [channelOpen, setChannelOpen] = useState(false);

  const result = useMemo(
    () => api.listContacts({ search, group, channel, page, pageSize: 5, sort }),
    [api, db, search, group, channel, page, sort],
  );

  const notice = db.notices[0];
  const allChecked = result.rows.length > 0 && result.rows.every((row) => picked.includes(row.id));

  function toggle(id: string) {
    setPicked((current) => (current.includes(id) ? current.filter((item) => item !== id) : [...current, id]));
  }

  async function start(contactId: string, preferred: ChannelKind) {
    const id = await api.startConversation({
      contactId,
      channel: preferred,
      body: "Olá! Escrevo da Studio Workspace. Podemos continuar a conversa por aqui?",
    });
    window.sessionStorage.setItem("ozou.openConversation", id);
    router.push("/inbox");
  }

  return (
    <>
      {notice ? (
        <div className="mb-6">
          <div className="bg-[#EFF7EC] border border-[#DEEDD9] rounded-2xl px-5 py-3.5 flex items-center gap-3 text-xs text-[#1F3316]">
            <svg className="w-4 h-4 text-[#355E24]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="font-medium">{notice}</span>
          </div>
        </div>
      ) : null}

      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <div>
          <h2 className="text-xl font-bold tracking-tight text-[#111111]">As pessoas por trás das conversas.</h2>
          <p className="text-xs text-[#71717A] mt-1 font-normal">{result.counts.todos} contactos na Studio Workspace</p>
        </div>
        <div className="flex items-center gap-3">
          {picked.length > 0 ? (
            <button
              className="h-10 px-5 rounded-full border border-[#DEDEDA] bg-white hover:bg-[#F9F9F8] text-xs font-medium text-[#18181B]"
              type="button"
              onClick={async () => {
                await api.archiveContacts(picked);
                setPicked([]);
              }}
            >
              Arquivar {picked.length}
            </button>
          ) : null}
          <Link href="/contactos/importar" className="h-10 px-5 rounded-full border border-[#DEDEDA] bg-white hover:bg-[#F9F9F8] text-xs font-medium text-[#18181B] inline-flex items-center">
            Importar contactos
          </Link>
          <Link href="/contactos/novo" className="h-10 px-5 rounded-full bg-[#141414] hover:bg-[#262626] text-white text-xs font-medium inline-flex items-center gap-2 shadow-sm">
            <span className="text-sm leading-none">+</span>
            <span>Novo contacto</span>
          </Link>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mt-2">
        <div className="flex flex-wrap items-center gap-2.5">
          {groups.map(([value, label]) => {
            const count = value === "todos" ? result.counts.todos : value === "leads" ? result.counts.leads : value === "clientes" ? result.counts.clientes : result.counts.semResposta;
            const active = group === value;
            return (
              <button
                key={value}
                className={active ? "bg-[#141414] text-white px-4 py-2 rounded-full text-xs font-medium" : "bg-white border border-[#E3E3E1] hover:bg-[#F8F8F7] text-[#27272A] px-4 py-2 rounded-full text-xs font-medium"}
                type="button"
                onClick={() => {
                  setGroup(value);
                  setPage(1);
                }}
              >
                {label} <span className={active ? "font-normal opacity-90 ml-1" : "text-[#71717A] font-normal ml-1"}>{count}</span>
              </button>
            );
          })}
        </div>
        <div className="text-[11px] text-[#8E8E93]">Dados de demonstração · prontos para o backend</div>
      </div>

      <div className="border border-[#ECECEB] rounded-3xl p-5 mb-8 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div className="flex flex-wrap items-center gap-3 flex-1">
            <input
              id="contacts-search"
              aria-label="Pesquisar contactos"
              className="w-full max-w-[340px] bg-[#F4F4F3] border-transparent focus:border-zinc-300 focus:bg-white focus:ring-0 rounded-full text-xs placeholder-[#9CA3AF] px-4 py-2.5"
              placeholder="Pesquisar por nome, e-mail ou telefone..."
              type="text"
              value={search}
              onChange={(event) => {
                setSearch(event.target.value);
                setPage(1);
              }}
            />
            <div className="relative">
              <button className="border border-[#E4E4E2] bg-white rounded-full px-4 py-2 text-xs font-medium text-[#27272A] inline-flex items-center gap-2" type="button" onClick={() => setChannelOpen((open) => !open)}>
                <span>{channel === "todos" ? "Canal preferido" : channel}</span>
                <span className="text-[#71717A]">▾</span>
              </button>
              {channelOpen ? (
                <div className="absolute z-20 mt-2 w-44 rounded-2xl border border-[#E4E4E2] bg-white p-1 shadow-lg">
                  {channels.map((item) => (
                    <button
                      key={item}
                      className="block w-full text-left px-3 py-2 text-xs rounded-xl hover:bg-[#F4F4F3]"
                      type="button"
                      onClick={() => {
                        setChannel(item);
                        setChannelOpen(false);
                        setPage(1);
                      }}
                    >
                      {item === "todos" ? "Todos os canais" : item}
                    </button>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
          <div className="text-xs text-[#8E8E93]">{result.total === 0 ? "0 contactos" : `${result.rows.length} de ${result.total} contactos`}</div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#F0F0EE] text-[11px] text-[#71717A] font-normal">
                <th className="py-3 px-3 w-8">
                  <input
                    className="rounded border-[#D1D1CF] w-3.5 h-3.5"
                    type="checkbox"
                    aria-label="Selecionar todos"
                    checked={allChecked}
                    onChange={() => setPicked(allChecked ? [] : result.rows.map((row) => row.id))}
                  />
                </th>
                <th className="py-3 px-2 font-normal">
                  <button className="inline-flex items-center gap-1" type="button" onClick={() => setSort((current) => (current === "name" ? "recent" : "name"))}>
                    Nome <span>{sort === "name" ? "↑" : "↓"}</span>
                  </button>
                </th>
                <th className="py-3 px-2 font-normal">Canal preferido</th>
                <th className="py-3 px-2 font-normal">Última interacção</th>
                <th className="py-3 px-2 font-normal">Status</th>
                <th className="py-3 px-2 font-normal text-right pr-6">Acção rápida</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F6F6F5] text-xs">
              {result.rows.map((contact) => (
                <tr key={contact.id} className="hover:bg-[#FAFAF9]">
                  <td className="py-3.5 px-3">
                    <input className="rounded border-[#D1D1CF] w-3.5 h-3.5" type="checkbox" aria-label={`Selecionar ${contact.name}`} checked={picked.includes(contact.id)} onChange={() => toggle(contact.id)} />
                  </td>
                  <td className="py-3.5 px-2">
                    <Link href={contact.id === "sofia" ? "/contactos/sofia-martins" : "/contactos"} className="font-medium text-[#18181B] hover:underline">
                      {contact.name}
                    </Link>
                    <div className="text-[11px] text-[#8E8E93]">{contact.email}</div>
                  </td>
                  <td className="py-3.5 px-2">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-[#F4F4F3] text-[11px] text-[#27272A]">{contact.channel}</span>
                  </td>
                  <td className="py-3.5 px-2 text-[#52525B] text-[11px]">{formatWhen(contact.lastInteraction)}</td>
                  <td className="py-3.5 px-2">
                    <StatusPill status={contact.status} />
                  </td>
                  <td className="py-3.5 px-2 text-right pr-4">
                    <button className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#E4E4E2] bg-white text-xs font-medium text-[#27272A] hover:bg-[#F4F4F3]" type="button" onClick={() => start(contact.id, contact.channel)}>
                      Iniciar conversa <span>↗</span>
                    </button>
                  </td>
                </tr>
              ))}
              {result.rows.length === 0 ? (
                <tr>
                  <td className="py-8 px-3 text-sm text-[#71717A]" colSpan={6}>
                    Nenhum contacto corresponde a esta pesquisa.
                  </td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>

        <div className="pt-5 flex items-center justify-between">
          <div className="text-xs text-[#71717A]">
            Página {result.page} de {result.pages}
          </div>
          <div className="flex items-center gap-2">
            <button className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#E4E4E2] bg-white text-xs font-medium disabled:opacity-40" type="button" disabled={result.page <= 1} onClick={() => setPage((current) => current - 1)}>
              ← Anterior
            </button>
            <span className="w-8 h-8 rounded-full bg-[#141414] text-white text-xs font-medium inline-flex items-center justify-center">{result.page}</span>
            <button className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#E4E4E2] bg-white text-xs font-medium disabled:opacity-40" type="button" disabled={result.page >= result.pages} onClick={() => setPage((current) => current + 1)}>
              Seguinte →
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function StatusPill({ status }: { status: ContactStatus }) {
  const client = status === "Cliente";
  return <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-[11px] ${client ? "bg-[#E8F3E4] text-[#2E551E]" : "bg-[#F4F4F3] text-[#3F3F46]"}`}>{status}</span>;
}
