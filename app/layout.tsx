import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { FitViewport } from "@/components/fit-viewport";
import { MockCoverage } from "@/components/live/mock-coverage";
import { OzouProvider } from "@/components/live/use-ozou";
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
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-AO"
      className={`${inter.variable} ${jakarta.variable} h-full antialiased`}
    >
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
