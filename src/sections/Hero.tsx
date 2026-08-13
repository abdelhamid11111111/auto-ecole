"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { Stars } from "@/components/ui/Stars";
import { site } from "@/data/site";
import { temoignages } from "@/data/temoignages";

const HERO_PHOTO =
  "https://images.pexels.com/photos/13781/pexels-photo-13781.jpeg?auto=compress&cs=tinysrgb&w=2000";

/**
 * Section 1. Full-bleed photo panel with the copy set into the left third and
 * a proof card breaking the bottom-right corner, per the supplied reference.
 *
 * Motion: one staggered entrance that walks the eye down the hierarchy
 * (headline, then subtext, then the CTA the section exists for).
 */
export function Hero() {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.09, delayChildren: 0.05 } },
  };
  const item = {
    hidden: reduce ? {} : { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section id="top" className="relative">
      <div className="mx-auto w-full max-w-350 px-4 sm:px-6 lg:px-10 pb-8">
        <div className="relative">
          {/*
            The panel is sized to land inside the first viewport: full dynamic
            viewport height minus the 72px header and the 32px gutter below it.
            `dvh` keeps the iOS address bar from making it jump, and the clamp
            stops it stretching absurdly on very tall or very short screens.
          */}
          <div className="relative overflow-hidden rounded-card h-[calc(100dvh-6.5rem)] min-h-104 max-h-208">
            <Image
              src={HERO_PHOTO}
              alt="Vue depuis le siège conducteur, mains sur le volant et tableau de bord éclairé"
              fill
              priority
              sizes="(min-width: 1400px) 1340px, (min-width: 640px) calc(100vw - 3rem), calc(100vw - 2rem)"
              className="object-cover"
            />
            {/* Scrim: guarantees white copy stays above AA whatever the photo does. */}
            <div
              aria-hidden
              className="absolute inset-0 bg-linear-to-r from-stone-950/90 via-stone-950/65 to-stone-950/25"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-linear-to-t from-stone-950/70 via-transparent to-transparent"
            />

            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="relative flex h-full flex-col justify-center px-6 sm:px-10 lg:px-16 py-10 sm:py-14"
            >
              <motion.h1
                variants={item}
                className="max-w-[16ch] text-[2.625rem] leading-[1.02] sm:text-6xl lg:text-[4.25rem] font-semibold tracking-tight text-white text-balance"
              >
                Apprenez à conduire sans stress
              </motion.h1>

              <motion.p
                variants={item}
                className="mt-6 max-w-[46ch] text-base sm:text-lg leading-relaxed text-white/85"
              >
                Permis B, permis moto et code de la route à {site.city}, avec des
                moniteurs qui prennent le temps.
              </motion.p>

              <motion.div
                variants={item}
                className="mt-9 flex flex-wrap items-center gap-3"
              >
                <Button href="#contact" size="lg">
                  {site.ctaLabel}
                </Button>
                <Button href="#formations" size="lg" variant="onPhoto">
                  Nos formations
                </Button>
              </motion.div>
            </motion.div>

            {/*
              Proof card notched into the panel's bottom-right corner, as in the
              reference. It lives inside the panel so the panel's own
              `overflow-hidden` + radius round off its bottom-right to match,
              while `rounded-tl-card` cuts the inner corner. The two-pixel
              page-coloured edge is the hairline gutter against the photo.
            */}
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute bottom-0 right-0 flex items-center gap-3 sm:gap-4 rounded-tl-card border-l-2 border-t-2 border-bg bg-surface px-4 py-3 sm:px-5 sm:py-4"
            >
              <ul className="flex -space-x-2.5">
                {temoignages.slice(0, 4).map((person) => (
                  <li key={person.id}>
                    <Image
                      src={person.avatar}
                      alt=""
                      width={40}
                      height={40}
                      className="h-9 w-9 sm:h-10 sm:w-10 rounded-full border-2 border-surface object-cover"
                    />
                  </li>
                ))}
              </ul>
              <div>
                <p className="text-[0.8125rem] sm:text-sm font-medium">
                  {site.proof.learners}
                </p>
                <p className="mt-1 flex items-center gap-2 text-[0.8125rem] sm:text-sm text-muted">
                  <Stars
                    rating={5}
                    label={`Note moyenne ${site.proof.rating} sur ${site.proof.ratingOutOf}`}
                  />
                  <span aria-hidden>
                    {site.proof.rating} / {site.proof.ratingOutOf}
                  </span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
