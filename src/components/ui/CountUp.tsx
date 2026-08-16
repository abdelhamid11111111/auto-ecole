"use client";

import { useEffect, useRef } from "react";

const DURATION = 1600;

/** Formatted by hand rather than through `toLocaleString`, so the server and
 *  the client cannot disagree about the separator and trip up hydration. */
function format(value: number, decimals: number, group: boolean) {
  const fixed = value.toFixed(decimals);
  const [whole, fraction] = fixed.split(".");
  // U+202F narrow no-break space: the French thousands separator (2 500).
  const grouped = group ? whole.replace(/\B(?=(\d{3})+(?!\d))/g, " ") : whole;
  return fraction ? `${grouped},${fraction}` : grouped;
}

/** Ease-out cubic: fast off the line, settles on the figure. */
const ease = (t: number) => 1 - Math.pow(1 - t, 3);

/**
 * Counts up to `value` the first time the number scrolls into view.
 *
 * The frames are written straight to the text node instead of through state:
 * at 60fps a `setState` per frame would re-render the tree for a value nothing
 * else reads. React renders `0` (server and client alike, so hydration
 * matches) and never touches the node again.
 *
 * Reduced-motion visitors and browsers without IntersectionObserver get the
 * final figure with no animation.
 */
export function CountUp({
  value,
  decimals = 0,
  group = false,
  suffix = "",
  className,
}: {
  value: number;
  decimals?: number;
  group?: boolean;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const paint = (current: number) => {
      el.textContent = format(current, decimals, group) + suffix;
    };

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      paint(value);
      return;
    }

    let frame = 0;
    const run = () => {
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - start) / DURATION, 1);
        paint(value * ease(progress));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        observer.disconnect();
        run();
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value, decimals, group, suffix]);

  return (
    <span ref={ref} className={className}>
      {format(0, decimals, group) + suffix}
    </span>
  );
}
