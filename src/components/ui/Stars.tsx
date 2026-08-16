import { StarIcon } from "@/components/ui/icons";

/**
 * Rating row. The stars are decorative once the score is announced, so the row
 * carries a single `img` role with the score as its label rather than five
 * unlabelled graphics.
 */
export function Stars({ rating, outOf = 5 }: { rating: number; outOf?: number }) {
  return (
    <div
      className="stars"
      role="img"
      aria-label={`${rating} étoiles sur ${outOf}`}
    >
      {Array.from({ length: rating }, (_, i) => (
        <StarIcon key={i} />
      ))}
    </div>
  );
}
