import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";

export function Histoire() {
  return (
    <section className="s-white section" id="histoire">
      <div className="wrap">
        <div className="about">
          <Reveal className="about-media">
            <Image
              src="https://images.unsplash.com/photo-1679395608187-ac2bcedba9ab?fm=jpg&q=80&w=1400&auto=format&fit=crop"
              alt="Une élève au volant pendant une leçon de conduite"
              width={1120}
              height={1400}
              sizes="(max-width: 900px) 100vw, 45vw"
            />
            <div className="about-tag">
              <div className="k">2014</div>
              <div className="v">
                Une voiture, deux moniteurs,
                <br />
                une salle de code empruntée
              </div>
            </div>
          </Reveal>

          <Reveal className="about-copy">
            <span className="eyebrow">À propos de nous</span>
            <h2 className="h-lg forest">
              On a ouvert
              <br />
              par lassitude
            </h2>

            <p className="intro">
              Nadia Berthier a été monitrice pendant onze ans dans de grandes
              structures. Onze ans à voir des élèves changer de moniteur trois
              fois en six mois, payer des heures qu’on ne leur avait jamais
              expliquées, et passer l’examen avec une voiture découverte le
              matin même.
            </p>
            <p>
              En 2014, elle a loué un local rue des Capucins avec une Clio et un
              collègue. Pas de promesse de permis express, pas de forfait
              miracle : un moniteur par élève, un tarif horaire affiché, et le
              droit de dire « je ne suis pas prêt » sans se faire pousser vers
              la date d’examen.
            </p>
            <p>
              Douze ans plus tard, l’équipe compte huit enseignants, six
              véhicules dont deux boîtes automatiques, une salle de code au
              premier étage et 2 500 élèves passés par la porte. Le principe,
              lui, n’a pas bougé d’un centimètre.
            </p>

            <ul className="values">
              <li>
                <span className="n">01</span>
                <span className="t">
                  <b>Un moniteur attitré.</b> Celui qui vous fait votre première
                  heure vous accompagne à l’examen.
                </span>
              </li>
              <li>
                <span className="n">02</span>
                <span className="t">
                  <b>Des tarifs sans zone d’ombre.</b> Le prix de l’heure, du
                  dossier et de la présentation est affiché en vitrine et sur le
                  devis.
                </span>
              </li>
              <li>
                <span className="n">03</span>
                <span className="t">
                  <b>Former des conducteurs, pas des candidats.</b> Nuit, pluie,
                  autoroute, rocade d’Agadir : ce qui vous attend après
                  l’examen fait partie du programme.
                </span>
              </li>
            </ul>

            <p className="signature">
              — Nadia Berthier, fondatrice &amp; enseignante de la conduite
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
