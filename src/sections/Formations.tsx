import { Reveal } from "@/components/motion/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";
import { Arrow, formationIcons } from "@/components/ui/icons";
import { formations } from "@/data/formations";

export function Formations() {
  return (
    <section className="s-white section" id="formations">
      <div className="wrap">
        <SectionHead
          eyebrow="Nos formations"
          title={
            <>
              Quatre parcours,
              <br />
              un seul niveau d’exigence
            </>
          }
          intro="Chaque formation commence par une évaluation de départ gratuite : 45 minutes au volant pour estimer votre volume d’heures réel. Le devis est remis le jour même, et il ne bouge plus."
        />

        <div className="cards">
          {formations.map((formation, index) => {
            const Icon = formationIcons[formation.icon];
            return (
              <Reveal
                key={formation.id}
                as="article"
                className="card"
                delay={index * 70}
              >
                <div className="ico" aria-hidden="true">
                  <Icon />
                </div>
                <h3>{formation.title}</h3>
                <p>{formation.description}</p>
                <span className="price">{formation.price}</span>
                {/* <a href="#contact" className="link-ghost">
                  Voir le programme <Arrow />
                </a> */}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
