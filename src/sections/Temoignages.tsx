"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import { ArrowLeftIcon, ArrowRightIcon } from "@phosphor-icons/react/ssr";
import {
  animate,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
} from "motion/react";
import { Stars } from "@/components/ui/Stars";
import { useIsomorphicLayoutEffect } from "@/lib/useIsomorphicLayoutEffect";
import { temoignages } from "@/data/temoignages";

const CARD_STEP = 344; // card width plus gap, in px

/**
 * Section 5. Testimonials on a horizontal track.
 *
 * One interaction model for every input: Motion's `drag` handles mouse, touch
 * and pen identically, with momentum on release. The arrows are the keyboard
 * and pointer affordance for the same track, so nothing here is drag-only.
 * No scroll hijacking, so vertical scrolling over this section is untouched.
 */
export function Temoignages() {
  const viewport = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLUListElement>(null);
  const x = useMotionValue(0);
  const reduce = useReducedMotion();

  const [maxDrag, setMaxDrag] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  // Remeasure on mount and on any resize of the viewport or the track, so the
  // constraints survive font loading, orientation changes and zoom.
  useIsomorphicLayoutEffect(() => {
    const view = viewport.current;
    const rail = track.current;
    if (!view || !rail) return;

    const measure = () => {
      const next = Math.max(0, rail.scrollWidth - view.offsetWidth);
      setMaxDrag(next);
      if (x.get() < -next) x.set(-next);
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(view);
    observer.observe(rail);
    return () => observer.disconnect();
  }, [x]);

  // Boolean edge states only: the continuous position stays in the motion value.
  useMotionValueEvent(x, "change", (value) => {
    setAtStart(value > -8);
    setAtEnd(value < -maxDrag + 8);
  });

  const nudge = useCallback(
    (direction: -1 | 1) => {
      const target = Math.min(
        0,
        Math.max(-maxDrag, x.get() - direction * CARD_STEP),
      );
      animate(
        x,
        target,
        reduce
          ? { duration: 0 }
          : { type: "spring", stiffness: 220, damping: 34 },
      );
    },
    [maxDrag, reduce, x],
  );

  const scrollable = maxDrag > 0;

  return (
    <section id="avis" className="scroll-mt-24 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto w-full max-w-350 px-4 sm:px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="max-w-xl text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold tracking-tight leading-[1.08] text-balance">
            Ils ont eu leur permis ici
          </h2>

          {scrollable ? (
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => nudge(1)}
                disabled={atStart}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line-strong text-ink transition-colors hover:bg-surface-2 disabled:opacity-40 disabled:hover:bg-transparent"
              >
                <span className="sr-only">Témoignages précédents</span>
                <ArrowLeftIcon aria-hidden size={18} />
              </button>
              <button
                type="button"
                onClick={() => nudge(-1)}
                disabled={atEnd}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line-strong text-ink transition-colors hover:bg-surface-2 disabled:opacity-40 disabled:hover:bg-transparent"
              >
                <span className="sr-only">Témoignages suivants</span>
                <ArrowRightIcon aria-hidden size={18} />
              </button>
            </div>
          ) : null}
        </div>

        {/*
          `overflow-x: clip` rather than `hidden`. `hidden` makes this a scroll
          container, and the off-screen cards still counted toward the root
          scroll width, which gave the whole page a horizontal scrollbar. `clip`
          removes the overflow outright, and because it can pair with a visible
          y axis the card shadows are no longer sheared off top and bottom.
        */}
        <div ref={viewport} className="mt-10 overflow-x-clip">
          <motion.ul
            ref={track}
            drag={scrollable ? "x" : false}
            dragConstraints={{ left: -maxDrag, right: 0 }}
            dragElastic={0.06}
            dragMomentum={!reduce}
            style={{ x }}
            className={`flex gap-6 ${scrollable ? "cursor-grab active:cursor-grabbing" : ""}`}
          >
            {temoignages.map((person) => (
              <li
                key={person.id}
                className="w-80 shrink-0 rounded-card border border-line bg-surface p-6 shadow-card"
              >
                <div className="flex items-center gap-3">
                  <Image
                    src={person.avatar}
                    alt=""
                    width={48}
                    height={48}
                    draggable={false}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div className="min-w-0">
                    <p className="truncate text-[0.9375rem] font-medium">
                      {person.name}
                    </p>
                    <p className="truncate text-sm text-subtle">
                      {person.role}
                    </p>
                  </div>
                </div>
                <Stars rating={person.rating} className="mt-5" />
                <blockquote className="mt-3 text-[0.9375rem] leading-relaxed text-muted">
                  {`« ${person.quote} »`}
                </blockquote>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
