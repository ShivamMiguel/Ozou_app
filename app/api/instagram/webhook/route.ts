import { NextResponse } from "next/server";
import { connectionForInstagramUser, rememberInbound } from "@/lib/instagram/accounts";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const mode = url.searchParams.get("hub.mode");
  const token = url.searchParams.get("hub.verify_token");
  const challenge = url.searchParams.get("hub.challenge");
  if (mode === "subscribe" && challenge && token && token === process.env.INSTAGRAM_WEBHOOK_VERIFY_TOKEN) {
    return new Response(challenge, { status: 200 });
  }
  return new Response("forbidden", { status: 403 });
}

export async function POST(request: Request) {
  const payload = (await request.json()) as {
    entry?: Array<{
      id?: string;
      messaging?: Array<{ sender?: { id?: string }; timestamp?: number; message?: { mid?: string; text?: string } }>;
    }>;
  };
  for (const entry of payload.entry ?? []) {
    const connection = entry.id ? await connectionForInstagramUser(String(entry.id)) : null;
    if (!connection) continue;
    for (const event of entry.messaging ?? []) {
      const senderId = event.sender?.id;
      const text = event.message?.text;
      const id = event.message?.mid;
      if (!senderId || !text || !id || senderId === connection.igUserId) continue;
      await rememberInbound({
        id,
        workspaceId: connection.workspaceId,
        senderId,
        senderName: "Cliente Instagram",
        body: text,
        at: new Date(event.timestamp || Date.now()).toISOString(),
      });
    }
  }
  return NextResponse.json({ ok: true });
}
