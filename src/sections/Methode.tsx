import { Reveal } from "@/components/motion/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";
import { etapes } from "@/data/etapes";

export function Methode() {
  return (
    <section className="s-cream section" id="methode">
      <div className="wrap">
        {/* The eyebrow carries a no-break space before its question mark. */}
        <SectionHead
          eyebrow="Comment ça marche ?"
          title={
            <>
              De l’inscription
              <br />
              au permis en poche
            </>
          }
          intro="Quatre étapes, une seule ligne droite. Vous savez à tout moment où vous en êtes : votre livret de progression est mis à jour après chaque heure, et consultable depuis votre espace élève."
        />

        <Reveal className="road">
          {/* The dashed lane marking that ties the four steps together. */}
          <div className="road-line lane" aria-hidden="true" />
          <ol className="steps">
            {etapes.map((etape) => (
              <li className="step" key={etape.num}>
                <div className="knob">{etape.num}</div>
                <h3>{etape.title}</h3>
                <p>{etape.description}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
