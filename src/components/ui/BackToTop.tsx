"use client";

import { useEffect, useState } from "react";
import { ChevronUpIcon } from "@/components/ui/icons";

/**
 * Fixed return-to-top control. Hidden (and taken out of the tab order via
 * `pointer-events`/opacity in CSS) until the visitor is well past the hero.
 */
export function BackToTop() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const next = window.scrollY > 700;
      setShown((prev) => (prev === next ? prev : next));
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toTop = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      className={shown ? "totop show" : "totop"}
      onClick={toTop}
      tabIndex={shown ? 0 : -1}
      aria-hidden={!shown}
      aria-label="Revenir en haut de la page"
    >
      <ChevronUpIcon />
    </button>
  );
}
