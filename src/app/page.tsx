import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { BackToTop } from "@/components/ui/BackToTop";
import { Contact } from "@/sections/Contact";
import { Formations } from "@/sections/Formations";
import { Hero } from "@/sections/Hero";
import { Histoire } from "@/sections/Histoire";
import { Methode } from "@/sections/Methode";
import { Stats } from "@/sections/Stats";
import { Temoignages } from "@/sections/Temoignages";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Stats />
        <Formations />
        <Methode />
        <Histoire />
        <Temoignages />
        <Contact />
      </main>
      <SiteFooter />
      <BackToTop />
    </>
  );
}
