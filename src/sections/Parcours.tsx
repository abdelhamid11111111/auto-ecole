"use client";

import { useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useIsomorphicLayoutEffect } from "@/lib/useIsomorphicLayoutEffect";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { parcours } from "@/data/parcours";

/**
 * Section 3. The five stages of the learner journey as a vertical timeline.
 *
 * Motion (GSAP ScrollTrigger, no Motion components in this tree): the rail
 * between two markers fills as the reader passes it, so the line literally
 * traces the journey the copy describes, and each marker pops when its stage
 * is reached. Everything animated is a transform or opacity.
 */
export function Parcours() {
  const root = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    const el = root.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".parcours-fill").forEach((fill) => {
        gsap.fromTo(
          fill,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: fill,
              start: "top 78%",
              end: "bottom 78%",
              scrub: 0.4,
            },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>(".parcours-step").forEach((step) => {
        const dot = step.querySelector(".parcours-dot");
        const body = step.querySelector(".parcours-body");

        gsap.fromTo(
          dot,
          { scale: 0 },
          {
            scale: 1,
            duration: 0.45,
            ease: "back.out(2)",
            scrollTrigger: { trigger: step, start: "top 82%", once: true },
          },
        );

        gsap.fromTo(
          body,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: { trigger: step, start: "top 82%", once: true },
          },
        );
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section id="parcours" className="scroll-mt-24 py-20 sm:py-24 lg:py-28">
      <div
        ref={root}
        className="mx-auto w-full max-w-350 px-4 sm:px-6 lg:px-10"
      >
        {/*
          Heading and timeline share the row on wide screens so the rail runs
          through the middle of the page rather than hugging the left edge with
          a dead half beside it. Below `lg` this collapses to one column.
        */}
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <SectionHeading
              title="Comment ça se passe"
              body="Du premier rendez-vous au permis en poche, voici les cinq étapes et ce que vous avez à faire à chacune."
            />
          </div>

          <ol className="lg:col-span-8">
            {parcours.map((step, i) => {
              const isLast = i === parcours.length - 1;
              const Icon = step.icon;

              return (
                <li
                  key={step.id}
                  className="parcours-step grid grid-cols-[2rem_1fr] lg:grid-cols-[2.5rem_1fr] gap-x-5 lg:gap-x-8"
                >
                  {/* Rail: marker, then the connector down to the next stage. */}
                  <div className="flex flex-col items-center">
                    <span className="parcours-dot mt-2 block h-3.5 w-3.5 shrink-0 rounded-full bg-accent ring-4 ring-bg" />
                    {!isLast ? (
                      <span
                        aria-hidden
                        className="relative mt-2 w-0.5 flex-1 bg-line"
                      >
                        <span className="parcours-fill absolute inset-0 origin-top bg-accent" />
                      </span>
                    ) : null}
                  </div>

                  <div
                    className={`parcours-body ${isLast ? "pb-0" : "pb-12 lg:pb-14"}`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon
                        aria-hidden
                        size={20}
                        weight="bold"
                        className="text-accent-strong"
                      />
                      <h3 className="text-xl sm:text-2xl font-semibold tracking-tight">
                        {step.name}
                      </h3>
                    </div>
                    <p className="mt-3 max-w-[58ch] text-[0.9375rem] sm:text-base leading-relaxed text-muted">
                      {step.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
