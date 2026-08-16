import Image from "next/image";
import { Arrow } from "@/components/ui/icons";

export function Hero() {
  return (
    <section className="hero" id="accueil">
      <div className="hero-media">
        {/*
          `fill` + `priority`: this is the LCP element, so it is fetched
          eagerly and sized by the CSS (`object-fit: cover`) rather than by
          intrinsic dimensions.
        */}
        <Image
          src="https://images.unsplash.com/photo-1553782097-130fef5d3e27?fm=jpg&q=80&w=2400&auto=format&fit=crop"
          alt="Une élève au volant et son moniteur côté passager, en circulation de jour"
          fill
          priority
          sizes="100vw"
        />
      </div>
      <div className="hero-scrim" />

      <div className="wrap hero-inner">
        {/* <span className="badge">
          <span className="dot" />+ de 10 ans d’expérience · 2 500 élèves
          accompagnés
        </span> */}

        <h1 className="display">
          Prenez la route
          <span className="l2 lemon">en confiance</span>
        </h1>

        <p className="lede muted">
          Auto-école indépendante au cœur d’Agadir. Permis B, conduite
          accompagnée, code de la route et perfectionnement — avec un moniteur
          attitré, des tarifs affichés au centime près et un rythme qui suit le
          vôtre, pas celui d’une salle d’attente.
        </p>

        <div className="hero-ctas">
          <a href="#contact" className="btn btn-fill">
            Commencer mon inscription <Arrow />
          </a>
          <a href="#formations" className="btn btn-ghost">
            Découvrir nos formations
          </a>
        </div>

        <ul className="hero-meta">
          <li>Agrément préfectoral E1806900120</li>
          <li>Financement CPF accepté</li>
          <li>Boîte manuelle &amp; automatique</li>
        </ul>
      </div>
    </section>
  );
}
