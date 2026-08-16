import type { Stat } from "@/types";

export const stats: Stat[] = [
  { value: 10, suffix: "+", label: "Années d’expérience" },
  { value: 2500, suffix: "+", group: true, label: "Élèves accompagnés" },
  // No-break space before the percent sign, as French typography wants.
  { value: 95, suffix: " %", label: "Taux de réussite" },
  { value: 4.9, decimals: 1, suffix: "/5", label: "Satisfaction moyenne" },
];
