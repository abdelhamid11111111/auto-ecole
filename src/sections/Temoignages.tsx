import { Reveal } from "@/components/motion/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";
import { Stars } from "@/components/ui/Stars";
import { temoignages } from "@/data/temoignages";

export function Temoignages() {
  return (
    <section className="s-cream section" id="avis">
      <div className="wrap">
        <SectionHead
          eyebrow="Ils nous font confiance"
          title="4,9/5 sur 312 avis"
          intro="Les avis ci-dessous sont extraits de notre fiche Google et de l’enquête envoyée à chaque élève un mois après l’obtention du permis."
        />

        <div className="quotes">
          {temoignages.map((avis, index) => (
            <Reveal
              key={avis.id}
              as="article"
              className="quote"
              delay={index * 80}
            >
              <Stars rating={avis.rating} />
              <blockquote>{avis.quote}</blockquote>
              <div className="who">
                {/* Initial rather than a stock portrait: no invented face. */}
                <div className="avatar" aria-hidden="true">
                  {avis.name.charAt(0)}
                </div>
                <div>
                  <div className="n">{avis.name}</div>
                  <div className="m">{avis.meta}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
