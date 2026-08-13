import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { APropos } from "@/sections/APropos";
import { Contact } from "@/sections/Contact";
import { Formations } from "@/sections/Formations";
import { Hero } from "@/sections/Hero";
import { Parcours } from "@/sections/Parcours";
import { Temoignages } from "@/sections/Temoignages";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Formations />
        <Parcours />
        <APropos />
        <Temoignages />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
