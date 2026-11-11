import { randomBytes } from "node:crypto";
import { NextResponse } from "next/server";
import { STATE_COOKIE, authorizeUrl } from "@/lib/instagram/oauth";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const workspaceId = url.searchParams.get("workspace") ?? "";
  if (!/^[a-z0-9-]{2,64}$/i.test(workspaceId)) {
    return NextResponse.redirect(new URL("/canais/instagram?erro=negocio", url.origin));
  }
  const state = `${randomBytes(24).toString("hex")}.${workspaceId}`;
  const destination = authorizeUrl(url.origin, state);
  if (!destination) {
    return NextResponse.redirect(new URL("/canais/instagram?erro=config", url.origin));
  }
  const response = NextResponse.redirect(destination);
  response.cookies.set(STATE_COOKIE, state, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 10,
  });
  return response;
}
