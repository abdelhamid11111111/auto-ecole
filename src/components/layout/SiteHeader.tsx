"use client";

import { useEffect, useState } from "react";
import { mobileNavLinks, navLinks, site } from "@/data/site";

/** Sections the nav can mark as current. */
const spySections = ["accueil", "formations", "methode", "histoire", "avis"];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [shrunk, setShrunk] = useState(false);
  const [current, setCurrent] = useState("accueil");

  // Threshold crossing only, so this sets state twice per scroll pass rather
  // than on every frame.
  useEffect(() => {
    const onScroll = () => {
      const next = window.scrollY > 40;
      setShrunk((prev) => (prev === next ? prev : next));
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy. The margins leave a narrow band across the middle of the
  // viewport, so exactly one section is "in view" at a time and the marker
  // never flickers between two neighbours.
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;

    const elements = spySections
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setCurrent(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header className={shrunk ? "nav shrunk" : "nav"}>
      <div className="wrap">
        <div className="nav-inner">
          <a
            className="wordmark"
            href="#accueil"
            aria-label={`${site.name}, accueil`}
          >
            <span className="mark">{site.name}</span>
            <span className="sub">{site.tagline}</span>
          </a>

          <nav className="nav-links" aria-label="Navigation principale">
            {navLinks.map((link) => {
              const isCurrent = link.href === `#${current}`;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={isCurrent ? "is-current" : undefined}
                  aria-current={isCurrent ? "true" : undefined}
                >
                  {link.label}
                </a>
              );
            })}
            {/* <a href={site.phoneHref} className="tel">
              {site.phone}
            </a> */}
          </nav>

          <button
            type="button"
            className={open ? "burger is-open" : "burger"}
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobileMenu"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          >
            <span />
          </button>
        </div>

        <div
          className={open ? "mobile-menu open" : "mobile-menu"}
          id="mobileMenu"
        >
          {mobileNavLinks.map((link) => (
            <a key={link.label} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a
            href={site.phoneHref}
            className="forest"
            onClick={() => setOpen(false)}
          >
            {site.phone}
          </a>
        </div>
      </div>
    </header>
  );
}
