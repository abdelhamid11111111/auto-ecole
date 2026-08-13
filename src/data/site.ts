/**
 * Single source of truth for brand, contact and navigation strings.
 *
 * Contact details, opening hours and the learner counts in `proof` are
 * placeholder values for the template. Swap them for the real agency data
 * before going live; the Google Maps embed reads `address` directly.
 */
export const site = {
  name: "Cap Conduite",
  legalName: "Auto-école Cap Conduite",
  city: "Lyon",
  address: "42 rue de Marseille, 69007 Lyon",
  phone: "04 78 61 24 09",
  phoneHref: "tel:+33478612409",
  email: "contact@capconduite.fr",
  hours: [
    { days: "Lundi au vendredi", time: "9h00 à 19h30" },
    { days: "Samedi", time: "9h00 à 17h00" },
  ],
  /** Placeholder social proof. Replace with audited figures. */
  proof: {
    learners: "312 élèves formés",
    rating: "4,8",
    ratingOutOf: "5",
  },
  ctaLabel: "Réserver un cours",
} as const;

export const navLinks = [
  { href: "#formations", label: "Formations" },
  { href: "#parcours", label: "Parcours" },
  { href: "#avis", label: "Avis" },
  { href: "#contact", label: "Contact" },
] as const;

/** Encoded once so the footer link and the map embed cannot drift apart. */
export const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  `${site.address}, France`,
)}&hl=fr&z=15&output=embed`;

export const mapLinkUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${site.address}, France`,
)}`;
