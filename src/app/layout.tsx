import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";

// One geometric sans for the whole page, display through body — the design
// system runs a single family at contrasting weights rather than a pairing.
// DM Sans is variable, so no weight list is needed.
const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${site.name} — Permis B, conduite accompagnée et code de la route à ${site.city}`,
  description:
    "Auto-école à Agadir depuis 2014. Permis B, conduite accompagnée, code de la route et perfectionnement. 95 % de réussite, un moniteur attitré du premier créneau à l’examen.",
};

// The page is light only. Declaring it here emits `<meta name="color-scheme">`
// so native controls (select, scrollbars, autofill) match the design and a
// visitor whose OS is dark never gets a flash of dark UA styling.
export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#fcf9f0",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={dmSans.variable}>
      <body>{children}</body>
    </html>
  );
}
