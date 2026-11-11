import type { OzouApi } from "./contract";
import { HttpOzouApi } from "./http";
import { MockOzouApi } from "./mock/client";

let api: OzouApi | undefined;

/**
 * Devolve o cliente activo.
 * Sem NEXT_PUBLIC_OZOU_API_URL usa dados simulados no browser (localStorage).
 * Com o endereço do backend, passa a usar os caminhos REST de `http.ts`.
 */
export function getOzouApi(): OzouApi {
  if (!api) {
    const base = process.env.NEXT_PUBLIC_OZOU_API_URL?.replace(/\/$/, "");
    api = base ? new HttpOzouApi(base) : new MockOzouApi();
  }
  return api;
}

export type { OzouApi } from "./contract";
export type * from "./types";
