const STATE_COOKIE = "ozou_ig_state";

export { STATE_COOKIE };

export function instagramConfig(origin: string) {
  const appId = process.env.INSTAGRAM_APP_ID;
  const appSecret = process.env.INSTAGRAM_APP_SECRET;
  if (!appId || !appSecret) return null;
  return {
    appId,
    appSecret,
    redirectUri: process.env.INSTAGRAM_REDIRECT_URI || `${origin}/api/instagram/callback`,
  };
}

export function authorizeUrl(origin: string, state: string) {
  const config = instagramConfig(origin);
  if (!config) return null;
  const url = new URL("https://www.instagram.com/oauth/authorize");
  url.searchParams.set("client_id", config.appId);
  url.searchParams.set("redirect_uri", config.redirectUri);
  url.searchParams.set("response_type", "code");
  url.searchParams.set("scope", "instagram_business_basic,instagram_business_manage_messages");
  url.searchParams.set("state", state);
  url.searchParams.set("force_reauth", "true");
  url.searchParams.set("enable_fb_login", "false");
  return url;
}

type TokenResponse = {
  access_token?: string;
  user_id?: string | number;
  expires_in?: number;
  error_message?: string;
  error?: { message?: string };
};

export async function exchangeInstagramCode(origin: string, code: string) {
  const config = instagramConfig(origin);
  if (!config) throw new Error("config");
  const body = new URLSearchParams({
    client_id: config.appId,
    client_secret: config.appSecret,
    grant_type: "authorization_code",
    redirect_uri: config.redirectUri,
    code: code.replace(/#.*$/, ""),
  });
  const tokenResponse = await fetch("https://api.instagram.com/oauth/access_token", {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body,
  });
  const shortLived = (await tokenResponse.json()) as TokenResponse;
  if (!tokenResponse.ok || !shortLived.access_token) throw new Error("token");

  const longUrl = new URL("https://graph.instagram.com/access_token");
  longUrl.searchParams.set("grant_type", "ig_exchange_token");
  longUrl.searchParams.set("client_secret", config.appSecret);
  longUrl.searchParams.set("access_token", shortLived.access_token);
  const longResponse = await fetch(longUrl);
  const longLived = (await longResponse.json()) as TokenResponse;
  const accessToken = longResponse.ok && longLived.access_token ? longLived.access_token : shortLived.access_token;
  const expiresIn = longLived.expires_in ?? 60 * 60;

  const profileUrl = new URL("https://graph.instagram.com/v21.0/me");
  profileUrl.searchParams.set("fields", "user_id,username");
  profileUrl.searchParams.set("access_token", accessToken);
  const profileResponse = await fetch(profileUrl);
  const profile = (await profileResponse.json()) as { user_id?: string; id?: string; username?: string };
  const igUserId = String(profile.user_id || profile.id || shortLived.user_id || "");
  if (!profileResponse.ok || !profile.username || !igUserId) throw new Error("profile");

  return { accessToken, expiresIn, username: profile.username, igUserId };
}
