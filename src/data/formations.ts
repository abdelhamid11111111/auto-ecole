import type { Formation } from "@/types";

export const formations: Formation[] = [
  {
    id: "permis-b",
    icon: "permis",
    title: "Permis B",
    description:
      "Boîte manuelle ou automatique, à partir de 20 heures de conduite. Un moniteur attitré du premier créneau jusqu’au jour de l’examen, et un bilan écrit après chaque leçon.",
    price: "Dès 1 190 € · 20 h",
  },
  {
    id: "conduite-accompagnee",
    icon: "aac",
    title: "Conduite accompagnée",
    description:
      "Dès 15 ans, pour aborder l’examen avec 3 000 km dans les jambes. On forme aussi vos accompagnateurs et on vous revoit trois fois pendant la période.",
    price: "Dès 1 290 € · AAC",
  },
  {
    id: "code",
    icon: "code",
    title: "Code de la route",
    description:
      "Cours en salle trois soirs par semaine, plateforme d’entraînement illimitée et séries corrigées à voix haute par un enseignant — pas par un écran.",
    price: "Dès 290 € · 6 mois d’accès",
  },
  {
    id: "perfectionnement",
    icon: "perfectionnement",
    title: "Perfectionnement",
    description:
      "Reprise après une longue pause, autoroute, manœuvres, conduite de nuit ou sous la pluie. À l’heure, sans forfait et sans engagement.",
    price: "52 €/heure · à la carte",
  },
];

/** Options of the "Formation souhaitée" select in the contact form. */
export const formationOptions = [
  "Permis B — boîte manuelle",
  "Permis B — boîte automatique",
  "Conduite accompagnée (AAC)",
  "Code de la route",
  "Perfectionnement à la conduite",
  "Je ne sais pas encore",
] as const;
