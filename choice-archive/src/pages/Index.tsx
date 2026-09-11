import React from "react";
import { HeaderNav, HeroSection } from "@/components/HeaderHero";
import {
  AcronymSection,
  PillarsDetailSection,
} from "@/components/PillarsSections";
import { AboutSection, TrackerSection } from "@/components/AboutTracker";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <main>
        <HeroSection />
        <AcronymSection />
        <PillarsDetailSection />
        <AboutSection />
        <TrackerSection />

        <section
          id="philosophy"
          className="bg-primary py-24 text-primary-foreground"
        >
          <div className="mx-auto max-w-4xl px-6 text-center">
            <blockquote className="text-2xl font-semibold md:text-3xl leading-snug">
              &ldquo;I have come that they may have life, and have it more
              abundantly.&rdquo;
            </blockquote>
            <p className="mt-3 text-accent font-semibold">&mdash; Jesus</p>

            <div className="mt-12 space-y-6 text-primary-foreground/80 leading-relaxed max-w-2xl mx-auto text-base">
              <p>
                Pain is not the enemy &mdash; it is a signal. A frozen computer
                restarts. A lost signal finds its root cause. A tripped breaker
                resets. The body works the same way.
              </p>
              <p>
                CHOICE is the restart. Vacation. Recreation. Restoration. Choose
                life. Choose today. It is your choice &mdash; and the formula is
                already in your hands.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="/get-started"
                className="rounded-full bg-gradient-to-r from-accent to-highlight px-8 py-3.5 text-sm font-bold text-accent-foreground shadow-md transition-transform hover:scale-105"
              >
                Start Your Journey
              </a>
              <a
                href="#top"
                className="rounded-full border border-primary-foreground/30 px-8 py-3.5 text-sm font-semibold hover:bg-primary-foreground/10 transition-colors"
              >
                Back to Top
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-primary py-16 text-primary-foreground/80 text-sm">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="flex flex-col leading-none mb-4">
                <img
                  src="https://vibe.filesafe.space/1788226803858169228/attachments/d415f1ae-0d7e-42b6-b108-134f2fb302e5.png"
                  alt="WellFIM Whole Person Wellness"
                  className="h-16 w-auto object-contain self-start mb-2"
                />
              </div>
              <p className="max-w-sm text-xs leading-relaxed text-primary-foreground/70">
                Optimize. Restore. Thrive. The CHOICE Formula for abundant life
                by Lorena Stephenson, FIM-P, BC-FMP.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-primary-foreground mb-3">
                The Pillars
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <a href="#pillar-0" className="hover:text-accent">
                    C &mdash; Calm
                  </a>
                </li>
                <li>
                  <a href="#pillar-1" className="hover:text-accent">
                    H &mdash; Hydrate
                  </a>
                </li>
                <li>
                  <a href="#pillar-2" className="hover:text-accent">
                    O &mdash; Optimize
                  </a>
                </li>
                <li>
                  <a href="#pillar-3" className="hover:text-accent">
                    I &mdash; Invest
                  </a>
                </li>
                <li>
                  <a href="#pillar-4" className="hover:text-accent">
                    C &mdash; Connect
                  </a>
                </li>
                <li>
                  <a href="#pillar-5" className="hover:text-accent">
                    E &mdash; Exercise
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-primary-foreground mb-3">
                Explore
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <a href="#formula" className="hover:text-accent">
                    The Formula
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-accent">
                    About Lorena
                  </a>
                </li>
                <li>
                  <a href="#tracker" className="hover:text-accent">
                    Daily Tracker
                  </a>
                </li>
                <li>
                  <a href="#philosophy" className="hover:text-accent">
                    The Philosophy
                  </a>
                </li>
                <li>
                  <a href="#top" className="hover:text-accent">
                    Back to Top
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t border-primary-foreground/10 pt-6 text-center text-xs text-primary-foreground/50 flex flex-col sm:flex-row justify-between items-center gap-2">
            <p>&copy; 2026 wellFIM, LLC. Whole Person Wellness.</p>
            <p>Optimize. Restore. Thrive.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
