import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";

/**
 * The two-column section header used by every section: eyebrow + title on the
 * left, a paragraph of context on the right, both baseline-aligned.
 *
 * The page is light throughout, so the colours come straight from the tokens
 * and there is nothing per-section to configure.
 */
export function SectionHead({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: ReactNode;
  title: ReactNode;
  intro: ReactNode;
}) {
  return (
    <Reveal className="sec-head">
      <div className="col">
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="h-lg forest">{title}</h2>
      </div>
      <div className="col">
        <p className="body muted">{intro}</p>
      </div>
    </Reveal>
  );
}
