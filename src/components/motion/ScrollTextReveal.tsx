"use client";

import { useMemo, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useIsomorphicLayoutEffect } from "@/lib/useIsomorphicLayoutEffect";

/**
 * Word-by-word scroll reveal, rebuilt natively rather than importing the
 * proprietary Framer "Text Reveal" component.
 *
 * Each word is a `.reveal-word` span whose opacity, blur and offset are derived
 * in CSS from a single `--reveal` custom property (see globals.css). GSAP
 * scrubs that property from 0 to 1 with a stagger tied to scroll progress, so
 * the paragraph resolves as the reader moves through it.
 *
 * Progressive enhancement: `--reveal` defaults to 1, so with JS disabled or
 * `prefers-reduced-motion: reduce` the paragraph renders fully legible and no
 * ScrollTrigger is ever created.
 */
export function ScrollTextReveal({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const ref = useRef<HTMLParagraphElement>(null);

  const words = useMemo(() => text.split(/(\s+)/), [text]);

  useIsomorphicLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Read the preference directly: this component owns no Motion tree.
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".reveal-word",
        { "--reveal": 0 },
        {
          "--reveal": 1,
          ease: "none",
          stagger: 0.4,
          scrollTrigger: {
            trigger: el,
            start: "top 82%",
            end: "bottom 65%",
            scrub: 0.4,
          },
        },
      );
    }, el);

    return () => ctx.revert();
  }, [words]);

  return (
    <p ref={ref} className={className}>
      {words.map((chunk, i) =>
        /\s/.test(chunk) ? (
          <span key={i}> </span>
        ) : (
          <span key={i} className="reveal-word">
            {chunk}
          </span>
        ),
      )}
    </p>
  );
}
