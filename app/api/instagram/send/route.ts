import { NextResponse } from "next/server";
import { sendInstagramMessage } from "@/lib/instagram/accounts";

export async function POST(request: Request) {
  const body = (await request.json()) as { workspaceId?: string; recipientId?: string; text?: string };
  const workspaceId = body.workspaceId ?? "";
  const recipientId = body.recipientId ?? "";
  const text = body.text?.trim() ?? "";
  if (!/^[a-z0-9-]{2,64}$/i.test(workspaceId) || !/^\d+$/.test(recipientId) || !text) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
  const ok = await sendInstagramMessage(workspaceId, recipientId, text);
  return NextResponse.json({ ok }, { status: ok ? 200 : 502 });
}
