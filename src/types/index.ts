/** Shared shapes for the page content in `src/data`. */

/** Keys of the inline SVG set in `components/ui/icons.tsx`. */
export type FormationIcon = "permis" | "aac" | "code" | "perfectionnement";

export type Formation = {
  id: string;
  icon: FormationIcon;
  title: string;
  description: string;
  /** Displayed as-is under the copy, e.g. "Dès 1 190 € · 20 h". */
  price: string;
};

export type Etape = {
  /** Two-digit marker shown in the knob. */
  num: string;
  title: string;
  description: string;
};

export type Temoignage = {
  id: string;
  quote: string;
  name: string;
  /** Formation followed + when, e.g. "Permis B · obtenu en mars". */
  meta: string;
  /** 1 to 5. */
  rating: number;
};

export type Stat = {
  /** Target of the count-up animation. */
  value: number;
  /** Decimals to keep while counting, e.g. 1 for "4,9". */
  decimals?: number;
  /** Thousands grouping with a narrow no-break space (2 500). */
  group?: boolean;
  /** Appended once the number is rendered, e.g. "+", " %", "/5". */
  suffix?: string;
  label: string;
};
