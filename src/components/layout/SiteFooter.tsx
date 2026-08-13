import { SteeringWheelIcon } from "@phosphor-icons/react/ssr";
import { navLinks, site } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto w-full max-w-350 px-4 sm:px-6 lg:px-10 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <span className="inline-flex items-center gap-2 text-base font-semibold tracking-tight">
              <SteeringWheelIcon
                aria-hidden
                size={22}
                weight="bold"
                className="text-accent-strong"
              />
              {site.name}
            </span>
            <p className="mt-3 text-sm leading-relaxed text-muted max-w-xs">
              {site.legalName}, agrément préfectoral. Formations au permis B, au
              permis moto et au code de la route.
            </p>
          </div>

          <div className="text-sm">
            <h2 className="font-medium">Nous trouver</h2>
            <address className="mt-3 not-italic leading-relaxed text-muted">
              {site.address}
              <br />
              <a
                href={site.phoneHref}
                className="hover:text-ink transition-colors"
              >
                {site.phone}
              </a>
              <br />
              <a
                href={`mailto:${site.email}`}
                className="hover:text-ink transition-colors"
              >
                {site.email}
              </a>
            </address>
            <dl className="mt-4 space-y-1 text-muted">
              {site.hours.map((slot) => (
                <div key={slot.days} className="flex gap-2">
                  <dt className="text-subtle">{slot.days}</dt>
                  <dd>{slot.time}</dd>
                </div>
              ))}
            </dl>
          </div>

          <nav aria-label="Pied de page" className="text-sm">
            <h2 className="font-medium">Sur cette page</h2>
            <ul className="mt-3 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted hover:text-ink transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <p className="mt-12 border-t border-line pt-6 text-xs text-subtle">
          © {new Date().getFullYear()} {site.legalName}. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
