import Image from "next/image";
import { ScrollTextReveal } from "@/components/motion/ScrollTextReveal";

const ABOUT_PHOTO =
  "https://images.pexels.com/photos/13633258/pexels-photo-13633258.jpeg?auto=compress&cs=tinysrgb&w=1200";

const ABOUT_TEXT =
  "Cap Conduite est née d’un constat simple. Trop d’élèves abandonnent en route, " +
  "découragés par des plannings impossibles et des moniteurs qui changent à chaque " +
  "leçon. Ici, vous gardez le même moniteur du premier créneau jusqu’à l’examen. " +
  "Les tarifs sont affichés une fois pour toutes, sans frais de dossier surprise et " +
  "sans heures vendues à l’avance dont vous n’avez pas besoin.";

/**
 * Section 4. No heading by design: one photograph and one paragraph that
 * resolves word by word as the reader scrolls through it.
 *
 * The image is CSS-sticky on wide screens so it holds still while the text
 * assembles beside it, which is the whole point of the effect.
 */
export function APropos() {
  return (
    <section className="py-20 sm:py-24 lg:py-28">
      <div className="mx-auto w-full max-w-350 px-4 sm:px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <div className="relative aspect-4/5 overflow-hidden rounded-card">
                <Image
                  src={ABOUT_PHOTO}
                  alt="Un élève des deux mains sur le volant pendant une leçon de conduite"
                  fill
                  sizes="(min-width: 1024px) 520px, calc(100vw - 2rem)"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex items-center">
            <ScrollTextReveal
              text={ABOUT_TEXT}
              className="text-xl sm:text-2xl lg:text-[1.75rem] leading-[1.45] tracking-tight text-ink max-w-[42ch]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
