import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";

// One geometric sans for the whole page, display through body. The reference
// template runs a single family at contrasting weights rather than a pairing.
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${site.name} | Auto-école à ${site.city}`,
  description:
    "Permis B, permis moto, code de la route et conduite accompagnée à Lyon. Le même moniteur du premier créneau jusqu’à l’examen.",
};

// The page is light only. Declaring it here emits `<meta name="color-scheme">`
// so a visitor whose OS is dark never gets a flash of dark UA styling before
// the stylesheet lands.
export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#fafaf9",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${outfit.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-bg text-ink">
        {children}
      </body>
    </html>
  );
}
