import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { FitViewport } from "@/components/fit-viewport";
import { MockCoverage } from "@/components/live/mock-coverage";
import { OzouProvider } from "@/components/live/use-ozou";
import { PhoneInboxGate } from "@/components/live/phone-inbox";
import { WalletChip } from "@/components/live/wallet";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "OZOU",
    template: "%s",
  },
  description: "Conversas, campanhas e clareza para equipas em Angola. Preços em kwanzas.",
  applicationName: "OZOU",
  appleWebApp: {
    capable: true,
    title: "OZOU",
    statusBarStyle: "default",
  },
  icons: {
    icon: [
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#111315",
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-AO"
      className={`${inter.variable} ${jakarta.variable} h-full antialiased`}
    >
      <head>
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="OZOU" />
        <meta name="theme-color" content="#111315" />
      </head>
      <body className={`${inter.className} h-dvh overflow-hidden`}>
        <FitViewport>
          <OzouProvider>
            {children}
            <WalletChip />
            <MockCoverage />
          </OzouProvider>
        </FitViewport>
      </body>
    </html>
  );
}
