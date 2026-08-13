import { StarIcon } from "@phosphor-icons/react/ssr";

/**
 * Rating display. The number is the accessible value; the stars are decorative
 * so screen readers hear "4 sur 5" once instead of five separate glyphs.
 */
export function Stars({
  rating,
  label,
  className = "",
}: {
  /** Filled star count, 0 to 5. */
  rating: number;
  /** Overrides the announced value when the glyphs round an average. */
  label?: string;
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-0.5 ${className}`}>
      <span className="sr-only">{label ?? `${rating} sur 5`}</span>
      {Array.from({ length: 5 }, (_, i) => (
        <StarIcon
          key={i}
          aria-hidden
          size={15}
          weight={i < rating ? "fill" : "regular"}
          className={i < rating ? "text-rating" : "text-line-strong"}
        />
      ))}
    </span>
  );
}
