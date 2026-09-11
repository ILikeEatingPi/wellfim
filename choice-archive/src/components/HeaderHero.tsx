import React, { useState } from "react";
import { Menu, X, Leaf, Target, Handshake, Heart } from "lucide-react";

// Official WellFIM logo (user-uploaded)
export const WELLFIM_LOGO =
  "https://vibe.filesafe.space/1788226803858169228/attachments/d415f1ae-0d7e-42b6-b108-134f2fb302e5.png";

// Bright modern wellness clinic — clean blank wall (logo overlaid in code)
export const HERO_BACKGROUND =
  "https://vibe.filesafe.space/1788226803858169228/assets/469ef1d0-7cba-4aaf-8443-566c6fa30d7c.png";

/* ── Navigation bar (fixed, used on all pages) ───────────────────── */
export const HeaderNav: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center">
          <img
            src={WELLFIM_LOGO}
            alt="wellFIM — Whole Person Wellness"
            className="h-16 w-28 rounded-full object-cover drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] ring-2 ring-white/20"
          />
        </a>

        <div className="hidden items-center gap-10 lg:flex">
          <NavLink href="#framework">The Framework</NavLink>
          <NavLink href="#pillars">The Pillars</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#tracker">Tracker</NavLink>
          <NavLink href="#philosophy">Philosophy</NavLink>
          <a
            href="/get-started"
            className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-300 px-9 py-5 text-2xl font-extrabold text-[#071326] shadow-[0_0_22px_-2px_rgba(255,200,0,0.7)] ring-2 ring-yellow-300/60 transition-transform hover:scale-105 animate-float-slow"
          >
            Start Your Journey <Leaf className="h-7 w-7" />
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg p-2 text-white hover:bg-white/10 lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </nav>

      {open && (
        <div className="bg-[#071326]/98 px-6 pb-6 pt-2 backdrop-blur-md lg:hidden">
          <div className="flex flex-col gap-4">
            <MobileLink href="#framework" onClick={() => setOpen(false)}>
              The Framework
            </MobileLink>
            <MobileLink href="#pillars" onClick={() => setOpen(false)}>
              The Pillars
            </MobileLink>
            <MobileLink href="#about" onClick={() => setOpen(false)}>
              About
            </MobileLink>
            <MobileLink href="#tracker" onClick={() => setOpen(false)}>
              Tracker
            </MobileLink>
            <MobileLink href="#philosophy" onClick={() => setOpen(false)}>
              Philosophy
            </MobileLink>
            <a
              href="/get-started"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-300 px-7 py-4 text-lg font-extrabold text-[#071326]"
            >
              Start Your Journey <Leaf className="h-6 w-6" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({
  href,
  children,
}) => (
  <a
    href={href}
    className="text-xl font-semibold text-white/90 transition-colors hover:text-accent"
  >
    {children}
  </a>
);

const MobileLink: React.FC<{
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}> = ({ href, onClick, children }) => (
  <a
    href={href}
    onClick={onClick}
    className="text-base font-semibold text-white/90 hover:text-accent"
  >
    {children}
  </a>
);

/* ── Hero section (homepage) ─────────────────────────────────────── */
export const HeroSection: React.FC = () => {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col bg-[#071326] text-white"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={HERO_BACKGROUND}
          alt="Two practitioners in a bright modern wellness clinic with potted plants as accents"
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* Subtle scrim top + bottom for legibility (no heavy layers) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0c2147]/70 via-transparent to-[#0c2147]/85" />

      {/* Top bar: logo left, live nav right */}
      <header className="relative z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-end px-6 py-5">
          <nav className="flex items-center gap-10" aria-label="Primary">
            <NavLink href="#framework">The Framework</NavLink>
            <NavLink href="#pillars">The Pillars</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#tracker">Tracker</NavLink>
            <NavLink href="#philosophy">Philosophy</NavLink>
            <a
              href="/get-started"
              className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-300 px-10 py-5 text-2xl font-extrabold text-[#071326] shadow-[0_0_28px_-2px_rgba(255,200,0,0.85)] ring-2 ring-yellow-300/70 transition-transform hover:scale-105 animate-float-slow"
            >
              Start Your Journey <Leaf className="h-7 w-7" />
            </a>
          </nav>
        </div>
      </header>

      {/* Flexible middle — lets the image breathe */}
      <div className="relative z-10 flex-1" />

      {/* wellFIM logo — square gold-framed picture baked into the wall, faded & flush */}
      <div className="pointer-events-none absolute top-[34%] left-[28%] z-10 hidden -translate-y-1/2 md:block">
        <div className="pointer-events-auto h-72 w-72 overflow-hidden rounded-md bg-[#0c2147] shadow-[0_10px_30px_rgba(0,0,0,0.4)] opacity-40">
          <img
            src={WELLFIM_LOGO}
            alt="wellFIM — Whole Person Wellness"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* Bottom CTAs: Start Your Journey + Explore the Network */}
      <div className="relative z-20 pb-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="inline-flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8">
            <a
              href="/get-started"
              className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-300 px-14 py-7 text-3xl font-extrabold text-[#071326] shadow-[0_0_34px_-2px_rgba(255,200,0,0.9)] ring-2 ring-yellow-300/70 transition-transform hover:scale-105 animate-float-slow"
            >
              Start Your Journey <Leaf className="h-8 w-8" />
            </a>
            <a
              href="#pillars"
              className="inline-flex items-center gap-3 rounded-full border-2 border-white/20 bg-[#0c2147] px-12 py-7 text-3xl font-bold text-white transition-all hover:bg-[#123064]"
            >
              Explore the Network
            </a>
          </div>
        </div>
      </div>

      {/* Feature cards bar */}
      <div className="relative z-20 border-t border-white/10 bg-[#0c2147] py-2">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
            <div className="grid flex-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-accent/20">
              <FeatureCard
                href="#about"
                icon={<Heart className="h-8 w-8" />}
                title="Whole-Person Care"
                sub="Mind, Body & Spirit"
              />
              <FeatureCard
                href="#framework"
                icon={<Target className="h-8 w-8" />}
                title="Root Cause Focus"
                sub="Beyond Symptoms"
              />
              <FeatureCard
                href="#tracker"
                icon={<Handshake className="h-8 w-8" />}
                title="Personalized Plans"
                sub="For Your Unique You"
              />
              <FeatureCard
                href="#pillars"
                icon={<Leaf className="h-8 w-8" />}
                title="Sustainable Wellness"
                sub="Choices That Last"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard: React.FC<{
  href: string;
  icon: React.ReactNode;
  title: string;
  sub: string;
}> = ({ href, icon, title, sub }) => (
  <a
    href={href}
    className="flex items-center gap-4 pt-6 sm:pt-0 sm:px-6 transition-colors hover:bg-accent/5 rounded-lg"
  >
    <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-accent/10 text-accent">
      {icon}
    </div>
    <div>
      <h4 className="font-bold text-xl text-white">{title}</h4>
      <p className="text-base text-white/60">{sub}</p>
    </div>
  </a>
);
