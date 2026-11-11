import { NextResponse } from "next/server";
import { pullInstagramInbox } from "@/lib/instagram/accounts";

export async function GET(request: Request) {
  const workspaceId = new URL(request.url).searchParams.get("workspace") ?? "";
  if (!/^[a-z0-9-]{2,64}$/i.test(workspaceId)) return NextResponse.json({ messages: [] });
  const messages = await pullInstagramInbox(workspaceId);
  return NextResponse.json({
    messages: messages.map((message) => ({
      id: message.id,
      senderId: message.senderId,
      senderName: message.senderName,
      body: message.body,
      at: message.at,
    })),
  });
}
