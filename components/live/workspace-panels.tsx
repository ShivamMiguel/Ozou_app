"use client";

import Link from "next/link";
import { useOzou } from "./use-ozou";

export function TeamPanel() {
  const { api, db } = useOzou();
  const members = api.listMembers();
  const pending = members.filter((member) => member.status !== "Ativo").length;
  return (
    <>
      <div className="flex items-end justify-between mb-6">
        <div>
          <h2 className="text-[22px] font-bold text-[#14171A] tracking-tight">A equipa certa, com o acesso certo.</h2>
          <p className="text-xs text-[#7A858F] mt-1.5">{members.length} membros na equipa · {pending} convites por aceitar</p>
        </div>
        <Link href="/convidar-equipa" className="inline-flex items-center gap-1.5 bg-[#181B1E] hover:bg-black text-white text-xs font-semibold px-5 py-2.5 rounded-full">
          <span>+</span>
          <span>Convidar pessoas</span>
        </Link>
      </div>
      <section className="border border-[#E7ECE9] rounded-2xl overflow-hidden bg-white mb-8">
        <div className="grid grid-cols-12 px-6 py-3.5 bg-[#F6F8F6] border-b border-[#E7ECE9] text-[12px] font-medium text-[#7A858F]">
          <div className="col-span-5">Pessoa</div>
          <div className="col-span-3">Função</div>
          <div className="col-span-2">Estado</div>
          <div className="col-span-2 text-right">Ação</div>
        </div>
        {members.map((member) => (
          <div key={member.id} className="grid grid-cols-12 px-6 py-4 items-center border-b border-[#F0F2F1] last:border-b-0">
            <div className="col-span-5 min-w-0">
              <div className="text-[13px] font-bold text-[#14171A] capitalize">{member.name}</div>
              <div className="text-[12px] text-[#7A858F] truncate">{member.email}</div>
            </div>
            <div className="col-span-3 text-[13px] text-[#343D46]">{member.role}</div>
            <div className="col-span-2 text-[12px] text-[#55606A]">{member.status}</div>
            <div className="col-span-2 flex justify-end">
              {member.status === "Ativo" ? (
                <Link href="/definicoes/conta" className="px-4 py-1.5 rounded-full border border-[#DCE2DF] text-xs font-semibold">
                  A sua conta
                </Link>
              ) : (
                <button className="px-4 py-1.5 rounded-full border border-[#DCE2DF] text-xs font-semibold" type="button" onClick={() => api.resendInvite(member.id)}>
                  Reenviar convite
                </button>
              )}
            </div>
          </div>
        ))}
        {db.notices[0]?.includes("Convite") ? <p className="px-6 py-3 text-xs text-[#2F4F24] bg-[#EFF4EB]">{db.notices[0]}</p> : null}
      </section>
    </>
  );
}

export function OnboardingSteps() {
  const { db } = useOzou();
  const connected = db.channels.filter((channel) => channel.status === "connected").length;
  const invites = db.members.filter((member) => member.status !== "Ativo").length;
  return (
    <section className="space-y-3.5">
      <Step index="01" title="Empresa criada" copy={`${db.workspaces.find((item) => item.id === db.activeWorkspaceId)?.name ?? "Studio Workspace"} · Angola`} done />
      <Step index="02" title="Ligar um canal" copy={connected ? `${connected} canais ligados` : "WhatsApp, Instagram, SMS ou E-mail"} done={connected > 0} href="/ligar-canais" action={connected ? "Canais ligados" : "Conectar"} />
      <Step index="03" title="Preparar a equipa" copy={invites ? `${invites} convites por aceitar` : "A equipa já foi convidada"} done={invites === 0} href="/convidar-equipa" action={invites ? "Rever convites" : "Equipa pronta"} />
    </section>
  );
}

function Step({ index, title, copy, done, href, action }: { index: string; title: string; copy: string; done: boolean; href?: string; action?: string }) {
  return (
    <div className="bg-white border border-[#EDEDED] rounded-2xl px-7 py-5 flex items-center justify-between gap-4">
      <div className="flex items-center space-x-7">
        <span className="text-[17px] font-semibold text-[#71717A] w-6">{index}</span>
        <div>
          <h4 className="text-[15px] font-bold text-[#111827]">{title}</h4>
          <p className="text-[13px] text-[#71717A] mt-0.5">{copy}</p>
        </div>
      </div>
      {done || !href ? (
        <span className="inline-flex items-center space-x-2 border border-[#E5E7EB] bg-white text-[#111827] text-[12.5px] font-medium px-5 py-2 rounded-full">✓ {action ?? "Concluído"}</span>
      ) : (
        <Link href={href} className="inline-flex items-center space-x-2 bg-[#17181A] text-white text-[12.5px] font-medium px-6 py-2 rounded-full">
          <span>{action}</span>
          <span>↗</span>
        </Link>
      )}
    </div>
  );
}

export function InsightFigures() {
  const { api, db } = useOzou();
  const figures = api.insights();
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      <Card label="Vendas no mês" value={figures.salesKz.toLocaleString("pt-PT") + " Kz"} delta="↗ com campanhas enviadas" />
      <Card label="Taxa de resposta" value={`${figures.replyRate}%`} delta={`${figures.openConversations} conversas abertas`} />
      <Card label="Tempo médio de resposta" value={`${figures.avgReplyMin} min`} delta={`${db.contacts.filter((contact) => !contact.archived).length} contactos activos`} />
    </div>
  );
}

function Card({ label, value, delta }: { label: string; value: string; delta: string }) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-[#eceeed] min-h-[148px] flex flex-col justify-between">
      <div>
        <div className="text-xs font-medium text-[#646a73]">{label}</div>
        <div className="text-[28px] font-bold tracking-tight text-[#111417] mt-1">{value}</div>
      </div>
      <div className="text-xs text-[#788089] mt-4">{delta}</div>
    </div>
  );
}
