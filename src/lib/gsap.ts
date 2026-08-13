"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Registered once for the whole app. gsap.registerPlugin is idempotent, but
// funnelling every import through here keeps the plugin list in one place.
gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };
