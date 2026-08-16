import { socialIcons } from "@/components/ui/icons";
import {
  footerFormations,
  footerLegal,
  footerNav,
  mapLinkUrl,
  site,
  socials,
} from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="s-cream footer">
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-about">
            <a className="wordmark" href="#accueil">
              <span className="mark">{site.name}</span>
              <span className="sub">{site.tagline}</span>
            </a>
            <p>
              Auto-école indépendante au cœur d’Agadir. Un moniteur attitré, des
              tarifs affichés, et des conducteurs qui tiennent la route bien
              après l’examen.
            </p>
            <div className="socials">
              {socials.map((social) => {
                const Icon = socialIcons[social.id];
                return (
                  <a
                    key={social.id}
                    href={social.href}
                    aria-label={social.label}
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>

          <nav aria-label="Navigation du pied de page">
            <h4>Navigation</h4>
            <ul>
              {footerNav.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Nos formations">
            <h4>Formations</h4>
            <ul>
              {footerFormations.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h4>Nous trouver</h4>
            <ul>
              <li>
                <a href={mapLinkUrl} target="_blank" rel="noopener">
                  {site.address.street}
                  <br />
                  {site.address.city}
                </a>
              </li>
              <li>
                <a href={site.phoneHref}>{site.phone}</a>
              </li>
              <li>
                <a href={site.emailHref}>{site.email}</a>
              </li>
              <li>
                <a href="#contact">Lun–Ven 9 h–19 h · Sam 9 h–13 h</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="foot-bottom">
          <p>
            © {new Date().getFullYear()} {site.name} — Agrément préfectoral{" "}
            {site.agrement}
          </p>
          <div className="foot-legal">
            {footerLegal.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
