import { NextResponse } from "next/server";
import { connectionForWorkspace } from "@/lib/instagram/accounts";
import { instagramConfig } from "@/lib/instagram/oauth";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const config = instagramConfig(url.origin);
  const workspaceId = url.searchParams.get("workspace") ?? "";
  const connection = /^[a-z0-9-]{2,64}$/i.test(workspaceId) ? await connectionForWorkspace(workspaceId) : null;
  return NextResponse.json({
    configured: Boolean(config),
    connected: Boolean(connection),
    username: connection?.username ?? null,
    redirectUri: config?.redirectUri ?? `${url.origin}/api/instagram/callback`,
  });
}
