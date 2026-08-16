"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";

type RevealTag = "div" | "article" | "section" | "li" | "ol";

/**
 * Enter-on-scroll wrapper for the `.rv` primitive in `globals.css`.
 *
 * The visual state lives in CSS (`.rv` -> `.rv.in`); this only flips the class
 * the first time the element crosses into view, then stops observing it. The
 * reduced-motion block in the stylesheet already pins `.rv` to its finished
 * state, so no JS branch is needed for that, and browsers without
 * IntersectionObserver get the content revealed immediately rather than a
 * blank page.
 */
export function Reveal({
  as = "div",
  className = "",
  delay = 0,
  children,
}: {
  as?: RevealTag;
  className?: string;
  /** Stagger in milliseconds, applied as a transition delay. */
  delay?: number;
  children: ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!("IntersectionObserver" in window)) {
      el.classList.add("in");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const Tag = as as ElementType;

  return (
    <Tag
      ref={ref}
      className={className ? `rv ${className}` : "rv"}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
