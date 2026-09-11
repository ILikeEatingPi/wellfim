import React from "react";
import { Check } from "lucide-react";
import { CHOICE_PILLARS, Pillar } from "@/data/choiceData";

export const AcronymCard: React.FC<{ pillar: Pillar; index: number }> = ({
  pillar,
  index,
}) => {
  return (
    <a
      href={`#pillar-${index}`}
      className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-sm ring-4 ring-[#0c2147] ring-offset-2 ring-offset-[#0c2147]/40 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-md"
    >
      <div className="flex items-center gap-4">
        <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-primary text-2xl font-bold text-primary-foreground transition-transform group-hover:scale-105">
          {pillar.letter}
        </span>
        <div>
          <h3 className="text-2xl font-semibold">{pillar.title}</h3>
          <p className="text-base text-muted-foreground">{pillar.tagline}</p>
        </div>
      </div>
      <p className="mt-5 text-base leading-relaxed text-muted-foreground line-clamp-3">
        {pillar.description}
      </p>
      <span className="mt-5 inline-block text-base font-semibold text-accent transition-transform group-hover:translate-x-1">
        Read more &rarr;
      </span>
    </a>
  );
};

export const PillarDetailRow: React.FC<{ pillar: Pillar; index: number }> = ({
  pillar,
  index,
}) => {
  const isEven = index % 2 === 0;
  return (
    <div
      id={`pillar-${index}`}
      className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16 scroll-mt-28"
    >
      <div className={`relative ${isEven ? "" : "lg:order-2"}`}>
        <div className="relative overflow-hidden rounded-3xl shadow-md ring-4 ring-[#0c2147] ring-offset-2 ring-offset-[#0c2147]/40">
          <img
            src={pillar.image}
            alt={pillar.alt}
            loading="lazy"
            className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
        </div>
        <div
          className={`absolute -top-5 grid h-20 w-20 place-items-center rounded-2xl bg-primary text-4xl font-bold text-primary-foreground shadow-lg ${
            isEven ? "-left-3 lg:-left-5" : "-right-3 lg:-right-5"
          }`}
        >
          {pillar.letter}
        </div>
      </div>

      <div className={isEven ? "" : "lg:order-1"}>
        <p className="mb-2 text-base font-semibold uppercase tracking-[0.25em] text-accent">
          {pillar.title}
        </p>
        <h3 className="text-4xl font-bold leading-tight md:text-5xl">
          {pillar.title} &mdash; {pillar.subtitle}
        </h3>
        <p className="mt-4 text-xl font-medium italic text-secondary">
          {pillar.tagline}
        </p>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
          {pillar.description}
        </p>

        <ul className="mt-7 space-y-4">
          {pillar.points.map((pt, pIdx) => (
            <li key={pIdx} className="flex gap-3.5">
              <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-gradient-to-br from-accent to-highlight text-accent-foreground">
                <Check className="h-4 w-4 stroke-[3]" />
              </span>
              <div>
                <p className="text-lg font-semibold text-foreground">
                  {pt.title}
                </p>
                <p className="text-base text-muted-foreground">{pt.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const AcronymSection: React.FC = () => {
  return (
    <section id="formula" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-base font-semibold uppercase tracking-[0.25em] text-accent">
            The Acronym
          </p>
          <h2 className="text-5xl font-bold md:text-6xl">
            Six pillars, one{" "}
            <span className="text-gradient-accent">CHOICE</span>
          </h2>
          <p className="mt-5 text-xl leading-relaxed text-muted-foreground">
            Each letter is an action verb &mdash; not just a noun. Together they
            form a daily practice that restores the body's natural rhythm and
            clears the signals of malfunction.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CHOICE_PILLARS.map((pillar, idx) => (
            <AcronymCard key={idx} pillar={pillar} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export const PillarsDetailSection: React.FC = () => {
  return (
    <section id="pillars" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-20 max-w-2xl text-center">
          <p className="mb-3 text-base font-semibold uppercase tracking-[0.25em] text-accent">
            The Six Pillars
          </p>
          <h2 className="text-5xl font-bold md:text-6xl">
            A practice for every day
          </h2>
          <p className="mt-5 text-xl text-muted-foreground">
            Action verbs, not just nouns. Each pillar is something you do
            &mdash; today.
          </p>
        </div>

        <div className="space-y-24 md:space-y-32">
          {CHOICE_PILLARS.map((pillar, idx) => (
            <PillarDetailRow key={idx} pillar={pillar} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};
