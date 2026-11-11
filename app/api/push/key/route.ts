import { NextResponse } from "next/server";
import { vapidPublicKey } from "@/lib/push/server";

export async function GET() {
  const publicKey = await vapidPublicKey();
  return NextResponse.json({ publicKey });
}
