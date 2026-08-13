import { useEffect, useLayoutEffect } from "react";

/**
 * `useLayoutEffect` on the client, `useEffect` during SSR.
 *
 * Every GSAP setup here starts by writing the "before" state (a collapsed rail,
 * a blurred word). Running that in `useEffect` would land after first paint and
 * flash the finished state, so it has to be a layout effect. The swap keeps
 * React from warning while the client component prerenders on the server.
 */
export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;
