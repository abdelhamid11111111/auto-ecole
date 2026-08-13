// Type-only entry point: pulls the `Icon` signature without dragging any of
// the client-side icon components into a Server Component graph.
import type { Icon } from "@phosphor-icons/react/lib";

export type Photo = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type Formation = {
  id: string;
  name: string;
  summary: string;
  icon: Icon;
  /** Detail bullets. Only the featured bento cell renders these. */
  points?: string[];
  photo?: Photo;
};

export type Step = {
  id: string;
  name: string;
  description: string;
  icon: Icon;
};

export type Testimonial = {
  id: string;
  name: string;
  /** Age plus the formation taken, used as the attribution line. */
  role: string;
  quote: string;
  rating: 1 | 2 | 3 | 4 | 5;
  avatar: string;
};
