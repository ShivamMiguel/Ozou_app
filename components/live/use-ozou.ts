"use client";

import { useEffect, useState, type ReactNode } from "react";
import { getOzouApi } from "@/lib/api";
import { createSeed } from "@/lib/api/mock/seed";
import type { OzouDatabase } from "@/lib/api/types";

export function useOzou() {
  const api = getOzouApi();
  const [db, setDb] = useState<OzouDatabase>(createSeed);

  useEffect(() => {
    let live = true;
    const stop = api.subscribe(() => {
      if (live) setDb(api.peek());
    });
    api.hydrate().then(() => {
      if (live) setDb(api.peek());
    });
    return () => {
      live = false;
      stop();
    };
  }, [api]);

  return { api, db };
}

export function OzouProvider({ children }: { children: ReactNode }) {
  useOzou();
  return children;
}
