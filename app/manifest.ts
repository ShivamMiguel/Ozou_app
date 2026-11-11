import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "OZOU",
    short_name: "OZOU",
    description: "Conversas da empresa, num só lugar.",
    start_url: "/inbox",
    scope: "/",
    display: "standalone",
    background_color: "#fcfdfa",
    theme_color: "#111315",
    lang: "pt-AO",
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/icons/icon-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
