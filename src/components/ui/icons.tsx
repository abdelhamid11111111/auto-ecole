import type { FormationIcon } from "@/types";

/**
 * Every icon on the page, inline. They are line drawings on a 24 grid at
 * 1.2 stroke, so the whole set reads as one hand — sizing is left to CSS
 * (`.card .ico svg`, `.stars svg`, `.socials svg`, `.totop svg`).
 */

const strokeProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.2,
} as const;

function PermisIcon() {
  return (
    <svg {...strokeProps}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="3.4" />
      <path d="M12 3v5.6M4.2 16.4l4.9-2.8M19.8 16.4l-4.9-2.8" />
    </svg>
  );
}

function AacIcon() {
  return (
    <svg {...strokeProps}>
      <circle cx="8.5" cy="7.5" r="3" />
      <circle cx="16.5" cy="9" r="2.4" />
      <path d="M3 20v-1.6c0-2.4 2.5-4 5.5-4s5.5 1.6 5.5 4V20" />
      <path d="M15 20v-1.4c0-1.5.8-2.7 2.1-3.3M21 20v-1.6c0-1.6-1.1-2.8-2.7-3.2" />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg {...strokeProps}>
      <path d="M4 4.6h6.2c1 0 1.8.8 1.8 1.8V20c0-1-.8-1.8-1.8-1.8H4z" />
      <path d="M20 4.6h-6.2c-1 0-1.8.8-1.8 1.8V20c0-1 .8-1.8 1.8-1.8H20z" />
      <path d="M6.4 8.6h3M6.4 11.8h3M14.6 8.6h3M14.6 11.8h3" />
    </svg>
  );
}

function PerfectionnementIcon() {
  return (
    <svg {...strokeProps}>
      <path d="M9.6 3.4h4.8l2.6 17.2H7z" />
      <path d="M8.4 12h7.2M9 8h6" />
    </svg>
  );
}

/** Lookup so `formations.ts` can stay a plain data module with no JSX in it. */
export const formationIcons: Record<FormationIcon, () => React.JSX.Element> = {
  permis: PermisIcon,
  aac: AacIcon,
  code: CodeIcon,
  perfectionnement: PerfectionnementIcon,
};

export function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l3 6.5 7 .9-5 4.8 1.2 7L12 17.9 5.8 21.2 7 14.2 2 9.4l7-.9z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4}>
      <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="4.6" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5H16.7V3.6A21 21 0 0 0 14.3 3.5c-2.4 0-4 1.45-4 4.1v2.3H7.6V13h2.7v8z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M15.6 3h-2.7v12.1a2.4 2.4 0 1 1-2-2.36V10a5.1 5.1 0 1 0 4.7 5.08V9.14a6.3 6.3 0 0 0 3.6 1.14V7.6a3.7 3.7 0 0 1-3.6-3.7z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.2 3h3.3l-7.2 8.2L21.8 21h-6.6l-4.3-5.6L5.9 21H2.6l7.7-8.8L2.5 3h6.8l3.9 5.1zm-1.2 16h1.8L8.1 4.9H6.2z" />
    </svg>
  );
}

export const socialIcons: Record<string, () => React.JSX.Element> = {
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  tiktok: TikTokIcon,
  x: XIcon,
};

export function ChevronUpIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path d="M6 15l6-6 6 6" />
    </svg>
  );
}

/**
 * The arrow that slides on hover inside `.btn` and `.link-ghost`. It is text,
 * not an icon, so it inherits the label's weight and colour for free.
 */
export function Arrow() {
  return (
    <span className="arw" aria-hidden="true">
      →
    </span>
  );
}
