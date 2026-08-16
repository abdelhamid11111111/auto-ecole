/**
 * Single source of truth for brand, contact and navigation strings.
 *
 * Every figure below is placeholder copy for the template — swap them for the
 * real agency data before going live.
 */
export const site = {
  name: "Auto-École Phare",
  tagline: "Agadir · depuis 2014",
  city: "Agadir",
  agrement: "E1806900120",
  phone: "04 78 42 19 07",
  phoneHref: "tel:+33478421907",
  email: "bonjour@autoecolephare.fr",
  emailHref: "mailto:bonjour@autoecolephare.fr",
  address: {
    street: "14 rue des Capucins",
    city: "69001 Agadir",
    access: "Métro Hôtel de Ville · Parking Terreaux à 200 m",
  },
  hours: [
    { days: "Lundi – vendredi", time: "9 h – 12 h 30 · 14 h – 19 h" },
    { days: "Samedi", time: "9 h – 13 h" },
    { days: "Dimanche", time: "Fermé" },
  ],
} as const;

/** Encoded once so the map card and the footer link cannot drift apart. */
export const mapLinkUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${site.address.street} ${site.address.city}`,
)}`;

/**
 * Desktop nav, right-aligned next to the phone number. The hash doubles as the
 * scroll-spy target, so each entry must match a section `id` on the page.
 */
export const navLinks = [
  { href: "#accueil", label: "Accueil" },
  { href: "#formations", label: "Formations" },
  { href: "#methode", label: "Méthode" },
  { href: "#histoire", label: "Notre histoire" },
  { href: "#avis", label: "Avis" },
] as const;

export const mobileNavLinks = [
  { href: "#formations", label: "Formations" },
  { href: "#methode", label: "Méthode" },
  { href: "#histoire", label: "Notre histoire" },
  { href: "#avis", label: "Avis" },
  { href: "#contact", label: "Contact" },
] as const;

export const footerNav = [
  { href: "#accueil", label: "Accueil" },
  { href: "#methode", label: "Comment ça marche" },
  { href: "#histoire", label: "Notre histoire" },
  { href: "#avis", label: "Avis des élèves" },
  { href: "#contact", label: "Contact" },
] as const;

export const footerFormations = [
  { href: "#formations", label: "Permis B" },
  { href: "#formations", label: "Conduite accompagnée" },
  { href: "#formations", label: "Code de la route" },
  { href: "#formations", label: "Perfectionnement" },
  { href: "#contact", label: "Financement CPF" },
] as const;

export const footerLegal = [
  { href: "#", label: "Mentions légales" },
  { href: "#", label: "Politique de confidentialité" },
  { href: "#", label: "Conditions générales" },
] as const;

/** The handle doubles as the visible label in the contact panel. */
export const socials = [
  { id: "facebook", label: "Facebook", handle: "Auto-École Phare", href: "#" },
  { id: "instagram", label: "Instagram", handle: "@autoecolephare", href: "#" },
  { id: "tiktok", label: "TikTok", handle: "@autoecolephare", href: "#" },
  { id: "x", label: "X (Twitter)", handle: "@autoecolephare", href: "#" },
] as const;
