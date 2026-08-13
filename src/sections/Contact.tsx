import {
  ClockIcon,
  EnvelopeSimpleIcon,
  MapPinIcon,
  PhoneIcon,
} from "@phosphor-icons/react/ssr";
import { ContactForm } from "@/components/ui/ContactForm";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { mapEmbedUrl, mapLinkUrl, site } from "@/data/site";

/**
 * Section 6. Request form on one side, the agency's location on the other.
 * The map is a square by spec, so the embed sits in an `aspect-square` frame
 * with the iframe stretched to fill it.
 */
export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto w-full max-w-350 px-4 sm:px-6 lg:px-10">
        <SectionHeading
          title="Prendre rendez-vous"
          body="Un premier rendez-vous sans engagement, en agence ou par téléphone. On fait le point sur votre situation et on vous donne un tarif ferme."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-8">
          <ContactForm />

          <div className="flex flex-col gap-6">
            <div className="relative aspect-square overflow-hidden rounded-card border border-line bg-surface-2">
              <iframe
                title={`Carte: ${site.legalName}, ${site.address}`}
                src={mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>

            <ul className="grid gap-4 rounded-card border border-line bg-surface p-6 shadow-card sm:grid-cols-2">
              <li className="flex gap-3">
                <MapPinIcon
                  aria-hidden
                  size={20}
                  className="mt-0.5 shrink-0 text-accent-strong"
                />
                <div className="text-[0.9375rem]">
                  <p className="font-medium">Agence</p>
                  <a
                    href={mapLinkUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-block text-muted hover:text-ink transition-colors"
                  >
                    {site.address}
                  </a>
                </div>
              </li>

              <li className="flex gap-3">
                <ClockIcon
                  aria-hidden
                  size={20}
                  className="mt-0.5 shrink-0 text-accent-strong"
                />
                <div className="text-[0.9375rem]">
                  <p className="font-medium">Horaires</p>
                  <ul className="mt-1 space-y-0.5 text-muted">
                    {site.hours.map((slot) => (
                      <li key={slot.days}>
                        {slot.days}, {slot.time}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>

              <li className="flex gap-3">
                <PhoneIcon
                  aria-hidden
                  size={20}
                  className="mt-0.5 shrink-0 text-accent-strong"
                />
                <div className="text-[0.9375rem]">
                  <p className="font-medium">Téléphone</p>
                  <a
                    href={site.phoneHref}
                    className="mt-1 inline-block text-muted hover:text-ink transition-colors"
                  >
                    {site.phone}
                  </a>
                </div>
              </li>

              <li className="flex gap-3">
                <EnvelopeSimpleIcon
                  aria-hidden
                  size={20}
                  className="mt-0.5 shrink-0 text-accent-strong"
                />
                <div className="text-[0.9375rem]">
                  <p className="font-medium">E-mail</p>
                  <a
                    href={`mailto:${site.email}`}
                    className="mt-1 inline-block break-all text-muted hover:text-ink transition-colors"
                  >
                    {site.email}
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
