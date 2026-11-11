import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { saveConnection } from "@/lib/instagram/accounts";
import { STATE_COOKIE, exchangeInstagramCode } from "@/lib/instagram/oauth";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const fail = (code: string) => NextResponse.redirect(new URL(`/canais/instagram?erro=${code}`, url.origin));

  if (url.searchParams.get("error")) return fail("negado");
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");
  const jar = await cookies();
  const expected = jar.get(STATE_COOKIE)?.value;
  const workspaceId = state?.slice(state.indexOf(".") + 1) ?? "";
  if (!code || !state || !expected || state !== expected || !/^[a-z0-9-]{2,64}$/i.test(workspaceId)) return fail("troca");

  try {
    const account = await exchangeInstagramCode(url.origin, code);
    await saveConnection({
      workspaceId,
      igUserId: account.igUserId,
      username: account.username,
      accessToken: account.accessToken,
      expiresAt: Date.now() + account.expiresIn * 1000,
    });
    const response = NextResponse.redirect(new URL("/inbox?canal=Instagram", url.origin));
    response.cookies.set(STATE_COOKIE, "", { httpOnly: true, path: "/", maxAge: 0 });
    return response;
  } catch (error) {
    const reason = error instanceof Error && error.message === "profile" ? "conta" : "troca";
    return fail(reason);
  }
}
