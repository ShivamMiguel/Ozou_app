import { NextResponse } from "next/server";
import { notifyWorkspace, saveSubscription } from "@/lib/push/server";

export async function POST(request: Request) {
  const body = (await request.json()) as {
    workspaceId?: string;
    confirm?: boolean;
    subscription?: { endpoint?: string; keys?: { p256dh?: string; auth?: string } };
  };
  const workspaceId = body.workspaceId ?? "";
  const endpoint = body.subscription?.endpoint ?? "";
  const p256dh = body.subscription?.keys?.p256dh ?? "";
  const auth = body.subscription?.keys?.auth ?? "";
  if (!/^[a-z0-9-]{2,64}$/i.test(workspaceId)) return NextResponse.json({ ok: false }, { status: 400 });
  const saved = await saveSubscription({ workspaceId, endpoint, keys: { p256dh, auth } });
  if (!saved) return NextResponse.json({ ok: false }, { status: 400 });
  if (body.confirm) {
    await notifyWorkspace(workspaceId, {
      title: "Avisos ativos",
      body: "As novas mensagens passam a aparecer neste telemóvel.",
      url: "/inbox",
      tag: "ozou-avisos",
    });
  }
  return NextResponse.json({ ok: true });
}
