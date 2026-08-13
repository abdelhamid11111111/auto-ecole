import {
  BookOpenTextIcon,
  CarIcon,
  MotorcycleIcon,
  UsersThreeIcon,
} from "@phosphor-icons/react/ssr";
import type { Formation } from "@/types";

/**
 * The four formations, ordered by how the bento reads: the featured cell first,
 * then the wide cell, then the two half cells.
 */
export const formations: Formation[] = [
  {
    id: "permis-b",
    name: "Permis B",
    summary:
      "Boîte manuelle ou automatique. Vingt heures de conduite au minimum, puis autant qu’il en faut pour être vraiment prêt.",
    icon: CarIcon,
    points: [
      "Conduite en ville, sur route et sur voie rapide",
      "Créneaux, épis et manœuvres en marche arrière",
      "Freinage d’urgence et gestion des imprévus",
      "Examen blanc en conditions réelles",
    ],
    photo: {
      src: "https://images.pexels.com/photos/1051071/pexels-photo-1051071.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Une élève au volant, la main sur le toit ouvrant de la voiture",
      width: 1200,
      height: 1800,
    },
  },
  {
    id: "code",
    name: "Code de la route",
    summary:
      "Cours en salle six jours sur sept et entraînement en ligne illimité jusqu’au jour de l’examen. Vous passez le code quand votre taux de réussite est stable, pas avant.",
    icon: BookOpenTextIcon,
  },
  {
    id: "aac",
    name: "Conduite accompagnée",
    summary:
      "Dès 15 ans, 3 000 km au côté d’un proche et trois rendez-vous pédagogiques avec votre moniteur.",
    icon: UsersThreeIcon,
  },
  {
    id: "permis-a",
    name: "Permis moto",
    summary:
      "A1, A2 et passerelle A. Plateau sur piste privée, puis circulation en conditions réelles.",
    icon: MotorcycleIcon,
    photo: {
      src: "https://images.pexels.com/photos/26760670/pexels-photo-26760670.jpeg?auto=compress&cs=tinysrgb&w=900",
      alt: "Un motard casqué en circulation dans une rue de centre-ville",
      width: 900,
      height: 1350,
    },
  },
];
