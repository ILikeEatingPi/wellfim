import React, { useState, useEffect } from "react";
import { Check, RefreshCw, Heart, Sparkles, Shield } from "lucide-react";
import { toast } from "sonner";
import { CHOICE_PILLARS } from "@/data/choiceData";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="bg-muted/50 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="relative lg:col-span-5">
            <div className="relative overflow-hidden rounded-3xl bg-card p-3 shadow-md ring-4 ring-[#0c2147] ring-offset-2 ring-offset-[#0c2147]/40">
              <img
                src="https://vibe.filesafe.space/1788226803858169228/attachments/65adbcb2-267c-4779-8507-7dcb88550c98.png"
                alt="Lorena Stephenson, FIM-P, BC-FMP"
                className="w-full rounded-2xl object-cover -scale-x-100"
              />
              <div className="absolute bottom-4 left-4 rounded-lg bg-primary/90 px-3 py-1.5 text-sm font-semibold text-primary-foreground backdrop-blur-sm">
                FIM-P, BC-FMP
              </div>
            </div>
            <blockquote className="mt-4 text-center text-lg italic text-muted-foreground">
              &ldquo;Optimize. Restore. Thrive.&rdquo;
              <span className="block not-italic font-semibold text-foreground mt-1">
                &mdash; Lorena Stephenson, FIM-P, BC-FMP
              </span>
            </blockquote>
          </div>

          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 text-base font-semibold uppercase tracking-wider text-accent mb-2">
              <Heart className="h-5 w-5" /> Meet Your Guide
            </div>
            <h2 className="text-3xl font-bold md:text-4xl whitespace-nowrap">
              Lorena Stephenson,{" "}
              <span className="text-accent">FIM-P, BC-FMP</span>
            </h2>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-6">
              <img
                src="https://vibe.filesafe.space/1786729719531050823/attachments/6cb38064-af66-4387-a105-22dd949eb9d5.jpg"
                alt="AANWP Board Certified"
                className="h-28 rounded object-contain [mix-blend-mode:multiply]"
              />
              <img
                src="https://vibe.filesafe.space/1786729719531050823/attachments/fb36b72b-855f-44b0-85fa-8e3c9086dc05.png"
                alt="GEHA"
                className="h-16 rounded object-contain"
              />
            </div>

            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Board Certified Functional Medicine Practitioner. Not just a
              clinician &mdash; a believer that the body knows how to heal when
              we give it what it needs and remove what harms it.
            </p>

            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              The CHOICE formula wasn't invented in a boardroom. It grew from
              years of watching patients struggle with the same patterns:
              inflammation they couldn't explain, fatigue they couldn't shake,
              and a healthcare system that treated signals instead of sources.
            </p>

            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Pain, restlessness, exhaustion, anxiety, depression, confusion,
              skin irritation, and other signs of malfunction are the body's
              signals &mdash; not enemies to silence. The question isn't{" "}
              <em>how do we quiet them</em> &mdash; it's{" "}
              <em>what is the body trying to say</em>. CHOICE gives you the
              language to listen, and the tools to respond.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-6 text-center">
              <div>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent mb-2">
                  <Sparkles className="h-6 w-6" />
                </div>
                <h4 className="font-bold text-base">Root Cause</h4>
                <p className="text-sm text-muted-foreground">
                  Find the source, not the symptom
                </p>
              </div>
              <div>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent mb-2">
                  <Shield className="h-6 w-6" />
                </div>
                <h4 className="font-bold text-base">Faith-Based</h4>
                <p className="text-sm text-muted-foreground">
                  Trust in the Creator's design
                </p>
              </div>
              <div>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent mb-2">
                  <Check className="h-6 w-6" />
                </div>
                <h4 className="font-bold text-base">Action-Oriented</h4>
                <p className="text-sm text-muted-foreground">
                  Verbs, not just nouns
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const TrackerSection: React.FC = () => {
  const [checkedPillars, setCheckedPillars] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  useEffect(() => {
    const saved = localStorage.getItem("choice_checklist");
    const savedDate = localStorage.getItem("choice_checklist_date");
    const today = new Date().toDateString();

    if (savedDate !== today) {
      localStorage.setItem("choice_checklist_date", today);
      localStorage.setItem(
        "choice_checklist",
        JSON.stringify([false, false, false, false, false, false]),
      );
    } else if (saved) {
      try {
        setCheckedPillars(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const togglePillar = (index: number) => {
    const updated = [...checkedPillars];
    updated[index] = !updated[index];
    setCheckedPillars(updated);
    localStorage.setItem("choice_checklist", JSON.stringify(updated));
    if (updated[index]) {
      toast.success(`Practiced ${CHOICE_PILLARS[index].title} today!`);
    }
  };

  const resetToday = () => {
    const reset = [false, false, false, false, false, false];
    setCheckedPillars(reset);
    localStorage.setItem("choice_checklist", JSON.stringify(reset));
    toast.info("Tracker reset for today.");
  };

  const completedCount = checkedPillars.filter(Boolean).length;
  const progressPercent = Math.round((completedCount / 6) * 100);

  const currentDateStr = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <section id="tracker" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <p className="mb-2 text-base font-semibold uppercase tracking-[0.25em] text-accent">
            Daily Practice
          </p>
          <h2 className="text-4xl font-bold md:text-5xl">
            Today's <span className="text-gradient-accent">CHOICE</span>{" "}
            Checklist
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Action verbs, not just nouns. Check off each pillar you practiced
            today &mdash; your progress saves automatically and resets each
            morning.
          </p>
          <p className="mt-1 text-base font-medium text-accent">
            {currentDateStr}
          </p>
        </div>

        <div className="mt-8 rounded-2xl bg-card p-6 shadow-sm border border-border">
          <div className="mb-2 flex items-center justify-between text-base font-semibold">
            <span>{completedCount} of 6 pillars</span>
            <span>{progressPercent}%</span>
          </div>
          <div className="h-3 w-full overflow-hidden rounded-full bg-muted">
            <div
              className="h-full bg-gradient-to-r from-accent to-highlight transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CHOICE_PILLARS.map((pillar, idx) => {
            const isChecked = checkedPillars[idx];
            return (
              <button
                key={idx}
                onClick={() => togglePillar(idx)}
                className={`flex items-start gap-4 rounded-xl border p-5 text-left ring-4 ring-[#0c2147] ring-offset-2 ring-offset-[#0c2147]/40 transition-all ${
                  isChecked
                    ? "border-accent bg-accent/10 shadow-sm"
                    : "border-border bg-card hover:border-accent/50"
                }`}
              >
                <div
                  className={`grid h-10 w-10 shrink-0 place-items-center rounded-lg font-bold transition-colors ${
                    isChecked
                      ? "bg-accent text-accent-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {isChecked ? <Check className="h-5 w-5" /> : pillar.letter}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {pillar.checklistDesc}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-8 flex items-center justify-between text-base text-muted-foreground">
          <span>Tap a pillar to begin your day.</span>
          <button
            onClick={resetToday}
            className="flex items-center gap-1.5 hover:text-foreground transition-colors"
          >
            <RefreshCw className="h-4 w-4" /> Reset Today
          </button>
        </div>
      </div>
    </section>
  );
};
