"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { companies, philosophy, timeline, cultureValues } from "@/lib/site-data";
import { navItems } from "@/lib/site-data";
import { siteConfig } from "@/lib/seo";

/**
 * Pinned direction (user brief, confirmed): clone PlotArmour Studio's dark
 * "operating manual" identity — surface-0/1 near-black, ink/subtle text,
 * mono-label eyebrows, engineering-green accent, hairline dividers, flat
 * studio-button controls, numbered accordion index as signature interaction.
 * Reference: D:\Code\plotarmour-studio (src/index.css, StudioHomepage.tsx).
 * Real content only — companies/timeline/culture/philosophy copy already
 * authored in src/lib/site-data.ts, reused verbatim, nothing fabricated.
 */

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: EASE_OUT },
};

const stagger = (i: number) => ({
  ...fadeUp,
  transition: { duration: 0.7, delay: i * 0.06, ease: EASE_OUT },
});

const ArrowUpRight = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
    <path d="M4 12L12 4M12 4H5M12 4V11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowRight = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
    <path d="M2 8H14M14 8L9 3M14 8L9 13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PA_VARS = {
  "--pa-surface-0": "#050505",
  "--pa-surface-1": "#0d0d0d",
  "--pa-surface-2": "#1a1a1a",
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
      <div className="container-wide flex h-[72px] items-center justify-between gap-4">
        <Link href="/" className="flex shrink-0 items-center gap-2.5" aria-label="PlotArmour home">
          <img src="/logo-mark.png" alt="" aria-hidden="true" className="h-6 w-auto" />
          <span className="font-sans text-[15px] font-semibold tracking-[-0.01em] text-[var(--pa-ink)]">
            PlotArmour
          </span>
        </Link>

        <nav
          className="flex items-center gap-x-6 overflow-x-auto whitespace-nowrap scrollbar-none"
          style={{ scrollbarWidth: "none" }}
          aria-label="Primary"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="shrink-0 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--pa-subtle)] transition-colors hover:text-[var(--pa-ink)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/careers"
          className="hidden shrink-0 studio-button-pa studio-button-pa-primary sm:inline-flex"
        >
          Careers
        </Link>
      </div>
    </header>
  );
}

function DarkFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[var(--pa-hairline)] bg-[var(--pa-surface-0)]">
      <div className="container-wide py-16">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,360px)]">
          <div>
            <Link href="/" className="flex items-center gap-2.5" aria-label="PlotArmour home">
              <img src="/logo-mark.png" alt="" aria-hidden="true" className="h-7 w-auto" />
              <span className="font-sans text-[15px] font-semibold tracking-[-0.01em] text-[var(--pa-ink)]">
                PlotArmour
              </span>
            </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-[var(--pa-subtle)]">
              {siteConfig.description}
            </p>

            <div className="mt-6">
              <p className="mono-label-pa">Companies</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {companies.map((c) => (
                  <li key={c.slug}>
                    <Link
                      href={`/companies#${c.slug}`}
                      className="inline-flex items-center gap-2 rounded-md border border-[var(--pa-hairline)] bg-[var(--pa-surface-1)] px-3 py-1.5 text-xs text-[var(--pa-ink)] transition-colors hover:border-[var(--pa-hairline-strong)]"
                    >
                      {c.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <p className="mono-label-pa">Get in touch</p>
            <p className="mt-3 text-sm leading-relaxed text-[var(--pa-subtle)]">
              For partnerships, careers, or press — reach the group directly.
            </p>
            <Link href="/contact" className="mt-4 studio-button-pa studio-button-pa-secondary w-full">
              Contact PlotArmour
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-8 border-t border-[var(--pa-hairline)] pt-10 md:grid-cols-4">
          <nav aria-label="Ecosystem">
            <p className="mono-label-pa">Ecosystem</p>
            <ul className="mt-4 space-y-2.5">
              {[
                { href: "/companies", label: "Companies" },
                { href: "/studio", label: "Studio" },
                { href: "/work", label: "Work" },
                { href: "/blueprints", label: "Blueprints" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-[var(--pa-subtle)] transition-colors hover:text-[var(--pa-ink)]">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Retail">
            <p className="mono-label-pa">Retail</p>
            <ul className="mt-4 space-y-2.5">
              {[
                { href: "/merchandise", label: "Merch" },
                { href: "/store", label: "Store" },
                { href: "/brand", label: "Brand" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-[var(--pa-subtle)] transition-colors hover:text-[var(--pa-ink)]">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Group">
            <p className="mono-label-pa">Group</p>
            <ul className="mt-4 space-y-2.5">
              {[
                { href: "/about", label: "About" },
                { href: "/team", label: "Team" },
                { href: "/careers", label: "Careers" },
                { href: "/journal", label: "Journal" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-[var(--pa-subtle)] transition-colors hover:text-[var(--pa-ink)]">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Resources">
            <p className="mono-label-pa">Resources</p>
            <ul className="mt-4 space-y-2.5">
              {[
                { href: "/research", label: "Research" },
                { href: "/docs", label: "Docs" },
                { href: "/press", label: "Press" },
                { href: "/contact", label: "Contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-[var(--pa-subtle)] transition-colors hover:text-[var(--pa-ink)]">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-[var(--pa-hairline)] pt-8 text-xs text-[var(--pa-subtle)] md:flex-row md:items-center md:justify-between">
          <span className="font-mono">© {year} PlotArmour Group</span>
          <span className="inline-flex items-center gap-2 font-mono">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--pa-engineering)]" />
            Actively building · {companies.length} companies
          </span>
        </div>
      </div>
    </footer>
  );
}

export function HomePage() {
  const [activeSlug, setActiveSlug] = useState(companies[0].slug);

  return (
    <div
      style={PA_VARS}
      className="min-h-screen bg-[var(--pa-surface-0)] text-[var(--pa-ink)]"
    >
      <style>{`
        .mono-label-pa {
          font-family: var(--font-jetbrains-mono), monospace;
          font-size: 0.6875rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--pa-subtle);
        }
        .studio-button-pa {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          border-radius: 0.5rem;
          min-height: 2.75rem;
          padding: 0.75rem 1.25rem;
          font-size: 0.875rem;
          font-weight: 500;
          line-height: 1;
          white-space: nowrap;
          transition: background-color 240ms cubic-bezier(0.22,1,0.36,1), border-color 240ms cubic-bezier(0.22,1,0.36,1), color 240ms cubic-bezier(0.22,1,0.36,1), transform 160ms cubic-bezier(0.22,1,0.36,1);
        }
        .studio-button-pa:active { transform: scale(0.97); }
        .studio-button-pa-primary {
          background: var(--pa-ink);
          color: var(--pa-surface-0);
          border: 1px solid var(--pa-ink);
        }
        .studio-button-pa-primary:hover { background: #e6e6e6; }
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

      <main>
        {/* ── Hero ─────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden border-b border-[var(--pa-hairline)]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-1/4 -top-1/4 h-[60vw] w-[60vw] rounded-full opacity-[0.14] blur-3xl"
            style={{ background: "radial-gradient(circle, var(--pa-engineering), transparent 70%)" }}
          />
          <div className="container-wide relative z-10 grid gap-10 pb-20 pt-20 md:pt-28 lg:grid-cols-[1.4fr_0.8fr] lg:items-end">
            <div className="max-w-[46rem]">
              <p className="mono-label-pa mb-6 flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--pa-engineering)] animate-pulse" />
                PlotArmour Group · Est. 2023
              </p>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: EASE_OUT }}
                className="font-sans text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[0.98] tracking-[-0.03em] text-[var(--pa-ink)]"
              >
                Independent companies.
                <br />
                One operating system.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: EASE_OUT, delay: 0.15 }}
                className="mt-7 max-w-[54ch] text-lg leading-relaxed text-[var(--pa-subtle)] md:text-xl"
              >
                Rather than assembling secondary applications under one corporate shell,
                PlotArmour engineers independent, category-owning businesses. Each company
                owns an entire industrial layer, backed by shared engineering velocity and
                operational blueprints.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: EASE_OUT, delay: 0.3 }}
                className="mt-9 flex flex-wrap items-center gap-3"
              >
                <Link href="/companies" className="studio-button-pa studio-button-pa-primary">
                  Explore Directory
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/about" className="studio-button-pa studio-button-pa-secondary">
                  Our Operating Model
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </div>

            <motion.dl
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-2 gap-x-8 gap-y-6 border-t border-[var(--pa-hairline)] pt-6 lg:border-t-0 lg:border-l lg:pl-10 lg:pt-0"
            >
              <div>
                <dt className="mono-label-pa">Status</dt>
                <dd className="mt-1 text-sm text-[var(--pa-ink)]">Actively building</dd>
              </div>
              <div>
                <dt className="mono-label-pa">Companies</dt>
                <dd className="mt-1 font-mono text-sm tabular-nums text-[var(--pa-ink)]">{companies.length}</dd>
              </div>
              <div>
                <dt className="mono-label-pa">Model</dt>
                <dd className="mt-1 text-sm text-[var(--pa-ink)]">Venture studio &amp; holding company</dd>
              </div>
              <div>
                <dt className="mono-label-pa">Founded</dt>
                <dd className="mt-1 font-mono text-sm tabular-nums text-[var(--pa-ink)]">2023</dd>
              </div>
            </motion.dl>
          </div>
        </section>

        {/* ── Companies — numbered accordion index ────────────────── */}
        <section className="border-b border-[var(--pa-hairline)] py-20 md:py-28" aria-labelledby="companies-heading">
          <div className="container-wide">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:items-end">
              <div>
                <p className="mono-label-pa">{companies.length} companies · one system</p>
                <h2 id="companies-heading" className="mt-4 font-sans text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-[var(--pa-ink)]">
                  Ecosystem Sections
                </h2>
              </div>
              <p className="max-w-[56ch] text-lg leading-relaxed text-[var(--pa-subtle)]">
                Each holding runs its own roadmap, brand, and leadership — connected by shared
                infrastructure, not quoting each other for headcount.
              </p>
            </div>

            <ul className="mt-14 border-t border-[var(--pa-hairline)]">
              {companies.map((company, i) => {
                const active = activeSlug === company.slug;
                return (
                  <li
                    key={company.slug}
                    data-active={active}
                    className="group relative border-b border-[var(--pa-hairline)]"
                    onMouseEnter={() => setActiveSlug(company.slug)}
                  >
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute left-0 top-0 h-full w-px origin-top scale-y-0 transition-transform duration-300 group-data-[active=true]:scale-y-100"
                      style={{ backgroundColor: company.accentColor }}
                    />
                    <Link
                      href={`/companies#${company.slug}`}
                      onFocus={() => setActiveSlug(company.slug)}
                      className="block py-8 pl-5 pr-2 transition-colors md:py-10 md:pl-8"
                    >
                      <div className="flex items-baseline gap-4 md:gap-8">
                        <span className="font-mono text-[11px] text-[var(--pa-subtle)] transition-colors group-data-[active=true]:text-[var(--pa-ink)]">
                          {String(i + 1).padStart(2, "0")}
                        </span>

                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-3">
                            <h3 className="font-sans text-[clamp(1.6rem,4.4vw,3.1rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-[var(--pa-subtle)] transition-colors group-data-[active=true]:text-[var(--pa-ink)]">
                              {company.name}
                            </h3>
                            <span
                              className="rounded-full px-2 py-0.5 text-[9px] font-mono uppercase tracking-wider"
                              style={{ background: company.accentBg, color: company.accentColor }}
                            >
                              {company.status}
                            </span>
                          </div>
                          <p className="mt-2 max-w-[52ch] text-base leading-relaxed text-[var(--pa-subtle)] md:text-lg">
                            {company.tagline}
                          </p>

                          <div className="grid grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out lg:grid-rows-[0fr] lg:group-data-[active=true]:grid-rows-[1fr]">
                            <div className="overflow-hidden">
                              <div className="pt-5">
                                <p className="max-w-[62ch] text-sm leading-relaxed text-[var(--pa-subtle)]">
                                  {company.description}
                                </p>
                                {company.industries && (
                                  <ul className="mt-4 flex flex-wrap gap-x-2 gap-y-2">
                                    {company.industries.map((tag) => (
                                      <li
                                        key={tag}
                                        className="rounded-sm border border-[var(--pa-hairline)] bg-[var(--pa-surface-1)] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-[var(--pa-subtle)]"
                                      >
                                        {tag}
                                      </li>
                                    ))}
                                  </ul>
                                )}
                                {company.url && (
                                  <a
                                    href={company.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="mt-4 inline-flex items-center gap-1 text-xs text-[var(--pa-ink)] hover:underline"
                                  >
                                    Visit site <ArrowUpRight className="h-3 w-3" />
                                  </a>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>

                        <ArrowUpRight
                          aria-hidden="true"
                          className="mt-3 hidden h-5 w-5 shrink-0 self-start text-[var(--pa-subtle)] transition-all group-data-[active=true]:translate-x-0.5 group-data-[active=true]:text-[var(--pa-ink)] md:block"
                        />
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* ── Philosophy ───────────────────────────────────────────── */}
        <section className="border-b border-[var(--pa-hairline)] py-20 md:py-28">
          <div className="container-wide">
            <p className="mono-label-pa">Philosophy</p>
            <div className="mt-10 grid gap-10 border-t border-[var(--pa-hairline)] pt-10 md:grid-cols-3">
              {philosophy.map((p, i) => (
                <motion.div key={p.statement} {...stagger(i)}>
                  <span className="font-mono text-[11px] text-[var(--pa-subtle)]">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-3 font-sans text-2xl font-semibold tracking-tight text-[var(--pa-ink)]">
                    {p.statement}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--pa-subtle)]">{p.explanation}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Timeline ─────────────────────────────────────────────── */}
        <section className="border-b border-[var(--pa-hairline)] py-20 md:py-28">
          <div className="container-wide">
            <p className="mono-label-pa">Timeline</p>
            <h2 className="mt-4 font-sans text-3xl font-semibold tracking-tight text-[var(--pa-ink)] sm:text-4xl">
              Operational Milestones
            </h2>

            <div className="mt-12 space-y-10">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.event}
                  {...stagger(i)}
                  className="grid gap-6 border-t border-[var(--pa-hairline)] pt-8 lg:grid-cols-[160px_1fr] lg:items-start"
                >
                  <div>
                    <span className="font-mono text-3xl font-semibold tracking-tight text-[var(--pa-subtle)]">
                      {item.year}
                    </span>
                    <span className="mono-label-pa mt-1 block">{item.event}</span>
                  </div>
                  <p className="max-w-3xl text-base leading-relaxed text-[var(--pa-subtle)]">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Culture ──────────────────────────────────────────────── */}
        <section className="border-b border-[var(--pa-hairline)] py-20 md:py-28">
          <div className="container-wide">
            <p className="mono-label-pa">Culture</p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {cultureValues.map((v, i) => (
                <motion.div
                  key={v.title}
                  {...stagger(i)}
                  className="rounded-xl border border-[var(--pa-hairline)] bg-[var(--pa-surface-1)] p-6"
                >
                  <h3 className="font-sans text-lg font-semibold text-[var(--pa-ink)]">{v.title}</h3>
                  <p className="mt-3 text-xs leading-relaxed text-[var(--pa-subtle)]">{v.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Careers CTA ──────────────────────────────────────────── */}
        <section className="py-20 md:py-28">
          <div className="container-wide">
            <motion.div
              {...fadeUp}
              className="rounded-2xl border border-[var(--pa-hairline)] bg-[var(--pa-surface-1)] p-12 text-center sm:p-20"
            >
              <p className="mono-label-pa mx-auto">Careers</p>
              <h2 className="mx-auto mt-5 max-w-4xl font-sans text-4xl font-semibold leading-tight text-[var(--pa-ink)] md:text-5xl lg:text-6xl">
                Join our small group of systems builders.
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-[var(--pa-subtle)]">
                We seek designers, researchers, and system engineers who value autonomy, respect
                details, and want to engineer the infrastructure behind tomorrow&apos;s industries.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link href="/careers" className="studio-button-pa studio-button-pa-primary">
                  Open Roles
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/about" className="studio-button-pa studio-button-pa-secondary">
                  How We Build
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <DarkFooter />
    </div>
  );
}
