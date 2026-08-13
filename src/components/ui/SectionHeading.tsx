/**
 * Section header. Headline and body stack vertically on purpose: no
 * headline-left / explainer-right split, and no small-caps eyebrow above.
 */
export function SectionHeading({
  title,
  body,
  className = "",
}: {
  title: string;
  body?: string;
  className?: string;
}) {
  return (
    <div className={`max-w-2xl ${className}`}>
      <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold tracking-tight leading-[1.08] text-balance">
        {title}
      </h2>
      {body ? (
        <p className="mt-4 text-base sm:text-lg leading-relaxed text-muted max-w-[60ch]">
          {body}
        </p>
      ) : null}
    </div>
  );
}
