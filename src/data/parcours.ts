import {
  CertificateIcon,
  ClipboardTextIcon,
  MonitorIcon,
  RoadHorizonIcon,
  SteeringWheelIcon,
} from "@phosphor-icons/react/ssr";
import type { Step } from "@/types";

/** The five stages of the learner journey, in order. */
export const parcours: Step[] = [
  {
    id: "inscription",
    name: "Inscription",
    description:
      "On fait le point sur votre situation, votre budget et vos disponibilités. Votre dossier ANTS est monté avec vous, en agence, en une demi-heure.",
    icon: ClipboardTextIcon,
  },
  {
    id: "code",
    name: "Code de la route",
    description:
      "Cours en salle et entraînement en ligne illimité. Vous passez l’examen théorique quand vos scores blancs sont stables au-dessus de 35 sur 40.",
    icon: MonitorIcon,
  },
  {
    id: "conduite",
    name: "Leçons de conduite",
    description:
      "Deux heures par semaine en moyenne, toujours avec le même moniteur. Ville, route, voie rapide et manœuvres, dans cet ordre.",
    icon: SteeringWheelIcon,
  },
  {
    id: "examen-blanc",
    name: "Examen blanc",
    description:
      "Un parcours d’examen complet sur les routes du centre d’examen, noté sur la vraie grille. Vous savez exactement où vous en êtes.",
    icon: RoadHorizonIcon,
  },
  {
    id: "examen",
    name: "Jour de l’examen",
    description:
      "Votre moniteur vous conduit au centre et vous attend à la sortie. Le résultat tombe sous 48 heures sur votre espace ANTS.",
    icon: CertificateIcon,
  },
];
