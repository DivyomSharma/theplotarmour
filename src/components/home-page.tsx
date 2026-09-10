"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { companies } from "@/lib/site-data";
import { siteConfig } from "@/lib/seo";

/**
 * Pinned direction (user brief, confirmed): plotarmour.in is a pure card
 * directory to the group's sites — not a marketing scroll. Visual system
 * still clones PlotArmour Studio's dark "operating manual" identity:
 * surface-0/1 near-black, ink/subtle text, mono-label eyebrows,
 * engineering-green accent, hairline dividers, flat studio-button controls.
 * Reference: D:\Code\plotarmour-studio (src/index.css).
 * Real content only — company roster from src/lib/site-data.ts, unchanged.
 */

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

const ArrowUpRight = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
    <path d="M4 12L12 4M12 4H5M12 4V11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PA_VARS = {
  "--pa-surface-0": "#050505",
  "--pa-surface-1": "#0d0d0d",
  "--pa-ink": "#fafafa",
  "--pa-subtle": "#a1a1a1",
  "--pa-hairline": "rgba(255, 255, 255, 0.08)",
  "--pa-hairline-strong": "rgba(255, 255, 255, 0.14)",
  "--pa-engineering": "#22c55e",
  colorScheme: "dark",
} as React.CSSProperties;

function DarkHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--pa-hairline)] bg-[var(--pa-surface-0)]/85 backdrop-blur-xl">
      <div className="container-wide flex h-[72px] items-center justify-between">
        <Link href="/" className="flex shrink-0 items-center gap-2.5" aria-label="PlotArmour home">
          <img src="/logo-mark.png" alt="" aria-hidden="true" className="h-6 w-auto" />
          <span className="text-[15px] font-semibold tracking-[-0.01em] text-[var(--pa-ink)]">
            PlotArmour
          </span>
        </Link>

        <div className="flex items-center gap-5">
          <Link
            href="/about"
            className="hidden font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--pa-subtle)] transition-colors hover:text-[var(--pa-ink)] sm:inline"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="hidden font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--pa-subtle)] transition-colors hover:text-[var(--pa-ink)] sm:inline"
          >
            Contact
          </Link>
          <Link href="/careers" className="studio-button-pa studio-button-pa-secondary">
            Careers
          </Link>
        </div>
      </div>
    </header>
  );
}

function DarkFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[var(--pa-hairline)] bg-[var(--pa-surface-0)]">
      <div className="container-wide flex flex-col gap-4 py-8 text-xs text-[var(--pa-subtle)] md:flex-row md:items-center md:justify-between">
        <span className="font-mono">© {year} PlotArmour Group</span>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <Link href="/about" className="hover:text-[var(--pa-ink)]">About</Link>
          <Link href="/journal" className="hover:text-[var(--pa-ink)]">Journal</Link>
          <Link href="/press" className="hover:text-[var(--pa-ink)]">Press</Link>
          <Link href="/contact" className="hover:text-[var(--pa-ink)]">Contact</Link>
        </div>
        <span className="inline-flex items-center gap-2 font-mono">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--pa-engineering)]" />
          Actively building · {companies.length} companies
        </span>
      </div>
    </footer>
  );
}

export function HomePage() {
  return (
    <div style={PA_VARS} className="flex min-h-screen flex-col bg-[var(--pa-surface-0)] text-[var(--pa-ink)]">
      <style>{`
        .studio-button-pa {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          border-radius: 0.5rem;
          min-height: 2.5rem;
          padding: 0.625rem 1.1rem;
          font-size: 0.8125rem;
          font-weight: 500;
          line-height: 1;
          white-space: nowrap;
          transition: background-color 240ms cubic-bezier(0.22,1,0.36,1), border-color 240ms cubic-bezier(0.22,1,0.36,1), color 240ms cubic-bezier(0.22,1,0.36,1), transform 160ms cubic-bezier(0.22,1,0.36,1);
        }
        .studio-button-pa:active { transform: scale(0.97); }
        .studio-button-pa-secondary {
          background: transparent;
          color: var(--pa-ink);
          border: 1px solid var(--pa-hairline-strong);
        }
        .studio-button-pa-secondary:hover {
          background: var(--pa-surface-1);
          border-color: rgba(255,255,255,0.22);
        }
      `}</style>

      <DarkHeader />

      <main className="flex flex-1 flex-col justify-center py-16 md:py-20">
        <div className="container-wide">
          <div className="mb-12 flex items-end justify-between gap-6 border-b border-[var(--pa-hairline)] pb-6 md:mb-16">
            <div>
              <p className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--pa-subtle)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--pa-engineering)] animate-pulse" />
                PlotArmour Group · Est. 2023
              </p>
              <h1 className="mt-3 text-[clamp(1.75rem,3.4vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-[var(--pa-ink)]">
                Pick a company.
              </h1>
            </div>
            <p className="hidden max-w-[32ch] text-right text-sm leading-relaxed text-[var(--pa-subtle)] md:block">
              {siteConfig.description}
            </p>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {companies.map((company, i) => (
              <motion.li
                key={company.slug}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: EASE_OUT }}
              >
                <a
                  href={company.url ?? `/companies#${company.slug}`}
                  target={company.url ? "_blank" : undefined}
                  rel={company.url ? "noreferrer" : undefined}
                  className="group flex h-full flex-col justify-between rounded-xl border border-[var(--pa-hairline)] bg-[var(--pa-surface-1)] p-6 transition-colors hover:border-[var(--pa-hairline-strong)]"
                >
                  <div>
                    <div className="flex items-start justify-between gap-3">
                      <span
                        className="rounded-full px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider"
                        style={{ background: company.accentBg, color: company.accentColor }}
                      >
                        {company.status}
                      </span>
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-[var(--pa-subtle)] transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--pa-ink)]" />
                    </div>

                    <h2 className="mt-5 text-2xl font-semibold tracking-[-0.02em] text-[var(--pa-ink)]">
                      {company.name}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--pa-subtle)]">
                      {company.tagline}
                    </p>
                  </div>

                  <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--pa-subtle)]">
                    {company.category}
                  </p>
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </main>

      <DarkFooter />
    </div>
  );
}
