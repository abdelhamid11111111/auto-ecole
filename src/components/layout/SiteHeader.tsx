"use client";

import { useState } from "react";
import { ListIcon, SteeringWheelIcon, XIcon } from "@phosphor-icons/react/ssr";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "motion/react";
import { Button } from "@/components/ui/Button";
import { navLinks, site } from "@/data/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [lifted, setLifted] = useState(false);
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();

  // Threshold crossing only, so this sets state twice per scroll pass rather
  // than on every frame. The continuous value stays inside the motion value.
  useMotionValueEvent(scrollY, "change", (y) => {
    const next = y > 12;
    setLifted((prev) => (prev === next ? prev : next));
  });

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-300 ${
        lifted
          ? "bg-bg/85 backdrop-blur-md border-b border-line"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto w-full max-w-350 px-4 sm:px-6 lg:px-10">
        <div className="h-18 grid grid-cols-[auto_1fr_auto] items-center gap-4">
          <a
            href="#top"
            className="inline-flex items-center gap-2 text-base font-semibold tracking-tight"
          >
            <SteeringWheelIcon
              aria-hidden
              size={24}
              weight="bold"
              className="text-accent-strong"
            />
            <span className="whitespace-nowrap">{site.name}</span>
          </a>

          {/* Desktop nav: one line, condensed labels, never wraps. */}
          <nav
            aria-label="Navigation principale"
            className="hidden lg:flex justify-center"
          >
            <ul className="flex items-center gap-8 text-sm">
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
          <span className="lg:hidden" />

          <div className="flex items-center justify-end gap-2">
            {/*
              Wrapper rather than `hidden` on the Button: the Button's own
              `inline-flex` would win the display cascade against it. Below
              `sm` the CTA lives in the menu sheet instead, and the hero's own
              CTA is one screen away regardless.
            */}
            <span className="hidden sm:block">
              <Button href="#contact">{site.ctaLabel}</Button>
            </span>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="menu-mobile"
              className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-line-strong text-ink"
            >
              <span className="sr-only">
                {open ? "Fermer le menu" : "Ouvrir le menu"}
              </span>
              {open ? (
                <XIcon aria-hidden size={20} />
              ) : (
                <ListIcon aria-hidden size={20} />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.nav
            id="menu-mobile"
            aria-label="Navigation mobile"
            className="lg:hidden overflow-hidden border-t border-line bg-bg"
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          >
            <ul className="mx-auto w-full max-w-350 px-4 sm:px-6 py-4 space-y-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-field px-3 py-3 text-base text-muted hover:bg-surface-2 hover:text-ink transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2 sm:hidden">
                <Button
                  href="#contact"
                  size="lg"
                  onClick={() => setOpen(false)}
                  className="w-full"
                >
                  {site.ctaLabel}
                </Button>
              </li>
            </ul>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
