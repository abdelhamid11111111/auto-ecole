import { Reveal } from "@/components/motion/Reveal";
import { ContactForm } from "@/components/ui/ContactForm";
import { socialIcons } from "@/components/ui/icons";
import { MapCard } from "@/components/ui/MapCard";
import { SectionHead } from "@/components/ui/SectionHead";
import { site, socials } from "@/data/site";

export function Contact() {
  return (
    <section className="s-white section contact-section" id="contact">
      <div className="wrap">
        <SectionHead
          eyebrow="Contact"
          title={
            <>
              Prêt à prendre
              <br />
              <span className="forest">le volant ?</span>
            </>
          }
          intro="Laissez-nous vos coordonnées : on vous rappelle sous 24 heures ouvrées pour fixer votre évaluation de départ. Elle est gratuite et ne vous engage à rien."
        />

        <div className="contact">
          <Reveal className="contact-form">
            <ContactForm />
          </Reveal>

          <Reveal className="contact-panel contact-panel-infos" delay={80}>
            <h3 className="panel-title">Nous joindre</h3>
            <ul className="infos">
              <li>
                <span className="k">Téléphone</span>
                <span className="v">
                  <a href={site.phoneHref}>{site.phone}</a>
                </span>
              </li>
              <li>
                <span className="k">E-mail</span>
                <span className="v">
                  <a href={site.emailHref}>{site.email}</a>
                </span>
              </li>
              {site.hours.map((slot) => (
                <li key={slot.days}>
                  <span className="k">{slot.days}</span>
                  <span className="v">{slot.time}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="contact-panel contact-panel-social" delay={140}>
            <h3 className="panel-title">Nous suivre</h3>
            <ul className="social-list">
              {socials.map((social) => {
                const Icon = socialIcons[social.id];
                return (
                  <li key={social.id}>
                    <a
                      className="social-row"
                      href={social.href}
                      target="_blank"
                      rel="noopener"
                    >
                      <span className="ico" aria-hidden="true">
                        <Icon />
                      </span>
                      <span className="lbl">{social.label}</span>
                      <span className="handle">{social.handle}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </Reveal>

          <Reveal className="contact-map" delay={200}>
            <MapCard />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
