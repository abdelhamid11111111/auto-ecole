import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { formations } from "@/data/formations";
import type { Formation } from "@/types";

function IconTile({ icon: Icon }: { icon: Formation["icon"] }) {
  return (
    <span className="inline-flex h-11 w-11 items-center justify-center rounded-field bg-accent text-white">
      <Icon aria-hidden size={22} weight="bold" />
    </span>
  );
}

/**
 * Section 2. Bento with exactly four cells for exactly four formations:
 * a tall featured cell, one wide cell, two half cells. Two cells carry real
 * photography and one carries an accent wash, so the grid is not four
 * identical white text boxes.
 */
export function Formations() {
  const [permisB, code, aac, permisA] = formations;

  return (
    <section
      id="formations"
      className="scroll-mt-24 py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto w-full max-w-350 px-4 sm:px-6 lg:px-10">
        <Reveal>
          <SectionHeading
            title="Choisissez votre formation"
            body="Quatre parcours, tous encadrés par des moniteurs diplômés d’État, et adaptés à votre rythme plutôt qu’à un forfait."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-12">
          {/* Featured cell: the formation most learners come for. */}
          <Reveal className="sm:col-span-2 lg:col-span-6 lg:row-span-2">
            <article className="flex h-full flex-col overflow-hidden rounded-card border border-line bg-surface shadow-card">
              <div className="p-6 sm:p-8">
                <IconTile icon={permisB.icon} />
                <h3 className="mt-5 text-2xl font-semibold tracking-tight">
                  {permisB.name}
                </h3>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted">
                  {permisB.summary}
                </p>
                <ul className="mt-6 space-y-2.5">
                  {permisB.points?.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-[0.9375rem] text-muted"
                    >
                      <span
                        aria-hidden
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              {permisB.photo ? (
                <div className="relative mx-6 mb-6 sm:mx-8 sm:mb-8 min-h-64 flex-1 overflow-hidden rounded-field">
                  <Image
                    src={permisB.photo.src}
                    alt={permisB.photo.alt}
                    fill
                    sizes="(min-width: 1024px) 620px, (min-width: 640px) calc(100vw - 3rem), calc(100vw - 2rem)"
                    className="object-cover"
                  />
                </div>
              ) : null}
            </article>
          </Reveal>

          {/* Wide cell: accent wash instead of a photo. */}
          <Reveal delay={0.06} className="sm:col-span-2 lg:col-span-6">
            <article className="flex h-full flex-col rounded-card border border-line bg-accent-soft p-6 sm:p-8">
              <IconTile icon={code.icon} />
              <h3 className="mt-5 text-xl font-semibold tracking-tight">
                {code.name}
              </h3>
              <p className="mt-3 max-w-[52ch] text-[0.9375rem] leading-relaxed text-muted">
                {code.summary}
              </p>
            </article>
          </Reveal>

          <Reveal delay={0.12} className="lg:col-span-3">
            <article className="flex h-full flex-col rounded-card border border-line bg-surface p-6 shadow-card">
              <IconTile icon={aac.icon} />
              <h3 className="mt-5 text-xl font-semibold tracking-tight">
                {aac.name}
              </h3>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted">
                {aac.summary}
              </p>
            </article>
          </Reveal>

          <Reveal delay={0.18} className="lg:col-span-3">
            <article className="flex h-full flex-col overflow-hidden rounded-card border border-line bg-surface shadow-card">
              {permisA.photo ? (
                <div className="relative h-40 w-full shrink-0">
                  <Image
                    src={permisA.photo.src}
                    alt={permisA.photo.alt}
                    fill
                    sizes="(min-width: 1024px) 320px, (min-width: 640px) 50vw, calc(100vw - 2rem)"
                    className="object-cover"
                  />
                </div>
              ) : null}
              <div className="flex flex-1 flex-col p-6">
                <IconTile icon={permisA.icon} />
                <h3 className="mt-5 text-xl font-semibold tracking-tight">
                  {permisA.name}
                </h3>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted">
                  {permisA.summary}
                </p>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
