"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { getOzouApi } from "@/lib/api";
import { useState, type CSSProperties, type FormEvent } from "react";

const systemFont = {
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
} as CSSProperties;

type Invite = { email: string; role: string };

const starter: Invite[] = [
  { email: "ana@studio.ao", role: "gestor" },
  { email: "tiago@studio.ao", role: "agente" },
];

const roles = [
  ["gestor", "Gestor"],
  ["agente", "Agente"],
  ["administrador", "Administrador"],
];

function Chevron() {
  return (
    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-neutral-700">
      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

export function InviteTeamScreen() {
  const router = useRouter();
  const [rows, setRows] = useState<Invite[]>(starter);

  function update(index: number, patch: Partial<Invite>) {
    setRows((current) => current.map((row, i) => (i === index ? { ...row, ...patch } : row)));
  }

  async function submit(event: FormEvent) {
    event.preventDefault();
    const api = getOzouApi();
    for (const row of rows) {
      if (row.email.includes("@")) await api.inviteMember(row);
    }
    router.push("/definicoes/equipa");
  }

  const countLabel = rows.length === 1 ? "Enviar 1 convite e concluir" : `Enviar ${rows.length} convites e concluir`;

  return (
    <div className="min-h-screen text-slate-900 flex flex-col justify-between selection:bg-neutral-200" style={{ ...systemFont, backgroundColor: "#f7f9f6" }}>
      <header className="w-full px-8 pt-8 pb-4 flex items-center justify-between">
        <Link href="/" className="text-[22px] font-extrabold tracking-tight text-neutral-900 select-none">
          OZOU
        </Link>
        <div className="text-[13px] text-neutral-500 font-normal">Configuração inicial</div>
      </header>
      <nav aria-label="Progresso da configuração" className="w-full flex justify-center items-center py-6">
        <ol className="flex items-center space-x-6 sm:space-x-10 text-[13px] font-medium text-neutral-800">
          <li>
            <Link href="/criar-empresa" className="flex items-center space-x-2.5">
              <span className="w-6 h-6 rounded-full bg-[#16191b] text-white flex items-center justify-center text-xs font-semibold">1</span>
              <span className="text-neutral-700">A sua empresa</span>
            </Link>
          </li>
          <li>
            <Link href="/ligar-canais" className="flex items-center space-x-2.5">
              <span className="w-6 h-6 rounded-full bg-[#16191b] text-white flex items-center justify-center text-xs font-semibold">2</span>
              <span className="text-neutral-700">Os seus canais</span>
            </Link>
          </li>
          <li className="flex items-center bg-[#edf2ea] pl-1.5 pr-5 py-1 rounded-full space-x-2.5">
            <span className="w-6 h-6 rounded-full bg-[#16191b] text-white flex items-center justify-center text-xs font-semibold">3</span>
            <span className="text-neutral-900 font-medium">A sua equipa</span>
          </li>
        </ol>
      </nav>
      <main className="w-full flex-grow flex flex-col items-center justify-center px-4 py-2">
        <section className="w-full max-w-[700px] bg-white rounded-[24px] border border-[#f0f2ed] shadow-[0_2px_12px_rgba(0,0,0,0.03)] px-10 py-10">
          <div className="mb-8">
            <h1 className="text-[28px] font-bold tracking-tight text-neutral-900 mb-2 leading-tight">Convide quem faz acontecer.</h1>
            <p className="text-[14px] text-neutral-500 font-normal">Partilhe o trabalho sem partilhar palavras-passe.</p>
          </div>
          <form className="space-y-4" onSubmit={submit}>
            <div className="grid grid-cols-12 gap-3 px-1">
              <div className="col-span-7">
                <span className="text-[11px] font-semibold tracking-wider text-neutral-500 uppercase">E-mail</span>
              </div>
              <div className="col-span-5">
                <span className="text-[11px] font-semibold tracking-wider text-neutral-500 uppercase">Função</span>
              </div>
            </div>
            {rows.map((row, index) => (
              <div key={index} className="grid grid-cols-12 gap-3 items-center">
                <div className="col-span-7">
                  <input
                    aria-label={`E-mail do membro ${index + 1}`}
                    className="w-full h-12 px-4 rounded-xl border border-neutral-200 text-[14px] text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-neutral-400 focus:ring-0 transition"
                    id={`invite-email-${index + 1}`}
                    type="email"
                    value={row.email}
                    onChange={(event) => update(index, { email: event.target.value })}
                  />
                </div>
                <div className="col-span-5 relative">
                  <select
                    aria-label={`Função do membro ${index + 1}`}
                    className="w-full h-12 px-4 pr-10 rounded-xl border border-neutral-200 text-[14px] text-neutral-800 bg-white focus:outline-none focus:border-neutral-400 focus:ring-0 cursor-pointer appearance-none transition"
                    id={`invite-role-${index + 1}`}
                    value={row.role}
                    onChange={(event) => update(index, { role: event.target.value })}
                  >
                    {roles.map(([value, label]) => (
                      <option key={value} value={value}>
                        {label}
                      </option>
                    ))}
                  </select>
                  <Chevron />
                </div>
              </div>
            ))}
            <div className="pt-2">
              <button
                className="h-10 px-5 inline-flex items-center text-[13px] font-medium text-neutral-800 border border-neutral-200 rounded-full hover:bg-neutral-50 transition"
                type="button"
                onClick={() => setRows((current) => [...current, { email: "", role: "agente" }])}
              >
                <span className="mr-1.5 text-base leading-none font-normal">+</span> Adicionar convite
              </button>
            </div>
            <div className="mt-6 pt-2">
              <div className="bg-[#f0f4ee] rounded-2xl p-6 text-[13px] leading-relaxed text-neutral-600">
                <h2 className="text-[14px] font-semibold text-neutral-900 mb-2">Cada pessoa, com o acesso certo.</h2>
                <p className="space-y-1">
                  <span className="block text-neutral-500">
                    <strong className="font-normal text-neutral-600">Administrador</strong> — empresa, faturação e todos os acessos.
                  </span>
                  <span className="block text-neutral-500">
                    <strong className="font-normal text-neutral-600">Gestor</strong> — equipa, campanhas e relatórios.
                  </span>
                  <span className="block text-neutral-500">
                    <strong className="font-normal text-neutral-600">Agente</strong> — conversas e contactos, sem acesso à faturação.
                  </span>
                </p>
              </div>
            </div>
            <div className="pt-8 flex items-center justify-between">
              <Link href="/inicio" className="h-11 px-6 rounded-full border border-neutral-200 text-[13px] font-medium text-neutral-800 hover:bg-neutral-50 transition inline-flex items-center">
                Fazer isto depois
              </Link>
              <button className="h-11 px-6 rounded-full bg-[#181b1d] hover:bg-black text-[13px] font-medium text-white inline-flex items-center transition shadow-sm" type="submit">
                <span>{countLabel}</span>
                <span className="ml-2 font-normal leading-none">→</span>
              </button>
            </div>
          </form>
        </section>
      </main>
      <footer className="w-full py-6 text-center">
        <p className="text-[12px] text-neutral-500 tracking-normal">A sua configuração fica guardada a cada passo.</p>
      </footer>
    </div>
  );
}
