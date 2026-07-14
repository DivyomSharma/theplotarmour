"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { companies, philosophy, timeline, cultureValues } from "@/lib/site-data";

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
};

const stagger = (i: number) => ({
  ...fadeUp,
  transition: { duration: 0.8, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] as const },
});

export function HomePage() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--fg)] flex flex-col justify-between transition-colors">
      <div>
        <SiteHeader />

        {/* ── Editorial Masthead Info ── */}
        <div className="border-b border-[var(--border)] py-3">
          <div className="container-wide flex justify-between items-center text-[10px] font-mono text-[var(--fg-subtle)]">
            <span>PLOTARMOUR GROUP · EST. 2023</span>
            <span className="hidden sm:inline">THE ORCHESTRATION OF SYSTEM INFRASTRUCTURE</span>
            <span>ISSUE 001</span>
          </div>
        </div>

        {/* ── Hero Section (120-160px top padding) ──────────────────────── */}
        <main className="container pt-32 pb-24 md:pt-40">
          <div className="space-y-12">
            <div>
              <span className="font-mono text-xs text-[var(--fg-subtle)]">ISSUE 001 · INTRODUCTORY ESSAY</span>
              <h1 className="mt-4 text-balance font-serif text-[clamp(3rem,8vw,6.5rem)] font-bold leading-[1.05] tracking-tight text-[var(--fg)]">
                Building the infrastructure behind tomorrow's industries.
              </h1>
            </div>

            {/* Large Editorial Hero Photograph */}
            <div className="w-full overflow-hidden rounded-2xl border border-[var(--border)] aspect-[21/9] bg-[var(--surface)]">
              <img
                src="/hero_editorial.png"
                alt="PlotArmour Editorial Infrastructure Architecture"
                className="w-full h-full object-cover grayscale brightness-90 dark:brightness-75 transition duration-700 hover:scale-105"
              />
            </div>

            <div className="grid gap-12 lg:grid-cols-[1.6fr_0.8fr] pt-8">
              <div className="space-y-6">
                <p className="font-serif text-xl md:text-2xl leading-relaxed text-[var(--fg-muted)]">
                  Rather than assembling secondary applications under one corporate shell, PlotArmour engineers independent, category-owning businesses. Each company owns an entire industrial layer.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Link href="/companies" className="btn-primary">
                    Explore Directory
                  </Link>
                  <Link href="/about" className="btn-secondary">
                    Our Operating Model
                  </Link>
                </div>
              </div>

              <div className="lg:border-l lg:border-[var(--border)] lg:pl-12 space-y-6">
                <p className="text-xs font-mono uppercase tracking-wider text-[var(--fg-subtle)]">
                  Holding Overview
                </p>
                <p className="text-sm leading-relaxed text-[var(--fg-muted)]">
                  PlotArmour Group operates as a Technology Holding Company. We invest engineering velocity, design systems, and operational blueprints directly into our holdings to accelerate scaling boundaries.
                </p>
              </div>
            </div>
          </div>

          {/* Spacing Scale: 140-200px between major sections */}
          <div className="my-36 hairline" />

          {/* ── Manifesto / Split Layout ──────────────────────────────── */}
          <section className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <span className="magazine-label">Philosophy</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight text-[var(--fg)]">
                We believe in structural operational engineering.
              </h2>
              <p className="text-sm leading-relaxed text-[var(--fg-muted)]">
                The modern enterprise has been buried in layers of disconnected SaaS features and operational noise. We reject superficial dashboarding. We build first-principle infrastructure connecting shop floors, workforce ledgers, and talent ecosystems.
              </p>
            </div>
            <div className="p-8 border border-[var(--border)] rounded-2xl bg-[var(--surface)] font-serif italic text-xl text-[var(--fg-muted)] leading-relaxed relative">
              <span className="absolute -top-4 left-6 bg-[var(--bg)] px-3 text-2xl text-[var(--fg-subtle)] font-mono">“</span>
              "The best software matches the physical rhythm of the industry it serves. A clock drifts, an assembly line stalls — software must anchor operations, not document them."
            </div>
          </section>

          <div className="my-36 hairline" />

          {/* ── Companies Showcase with Cover Images (Large padding, spacing) ── */}
          <section className="space-y-12">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="magazine-label">Holdings Portfolio</span>
                <h2 className="font-serif text-3xl font-bold tracking-tight text-[var(--fg)] sm:text-4xl mt-3">
                  Ecosystem Sections
                </h2>
              </div>
              <Link href="/companies" className="btn-secondary text-xs uppercase tracking-wider">
                Full directory →
              </Link>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {companies.map((company, i) => (
                <motion.article
                  key={company.slug}
                  {...stagger(i)}
                  className="editorial-card rounded-2xl border border-[var(--border)] bg-[var(--surface)] overflow-hidden transition-all duration-300 hover:border-[var(--border-hover)] hover:bg-[var(--surface-hover)] flex flex-col justify-between"
                >
                  <div>
                    {/* Cover image for company visual weight */}
                    <div className="w-full aspect-[16/10] bg-neutral-900 overflow-hidden border-b border-[var(--border)]">
                      <img
                        src={`/companies/${company.slug}.png`}
                        alt={company.name}
                        className="w-full h-full object-cover grayscale brightness-90 group-hover:scale-102 transition duration-500"
                      />
                    </div>

                    {/* Card Content with 32-40px padding */}
                    <div className="p-8 space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--fg-subtle)]">
                          {company.category}
                        </span>
                        <span
                          className="rounded-full px-2 py-0.5 text-[9px] font-mono uppercase"
                          style={{ background: company.accentBg, color: company.accentColor }}
                        >
                          {company.status}
                        </span>
                      </div>
                      <h3 className="font-serif text-2xl font-bold text-[var(--fg)]">{company.name}</h3>
                      <p className="text-xs leading-relaxed text-[var(--fg-muted)]">{company.mission}</p>
                    </div>
                  </div>

                  <div className="px-8 pb-8 pt-4 border-t border-[var(--border)] flex items-center justify-between">
                    <Link
                      href={`/companies#${company.slug}`}
                      className="text-xs font-semibold text-[var(--fg)] hover:underline"
                    >
                      Read specs →
                    </Link>
                    {company.url ? (
                      <a
                        href={company.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs text-[var(--fg-subtle)] hover:text-[var(--fg)]"
                      >
                        Visit site ↗
                      </a>
                    ) : (
                      <span className="text-[10px] font-mono text-[var(--fg-subtle)] uppercase">R&D NODE</span>
                    )}
                  </div>
                </motion.article>
              ))}
            </div>
          </section>

          <div className="my-36 hairline" />

          {/* ── Timeline Section with Milestone Imagery ───────────────── */}
          <section className="space-y-12">
            <span className="magazine-label">Timeline</span>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-[var(--fg)] sm:text-4xl">
              Operational Milestones
            </h2>

            <div className="space-y-12">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.event}
                  {...stagger(i)}
                  className="grid gap-8 lg:grid-cols-[200px_1fr] items-start border-t border-[var(--border)] pt-8"
                >
                  <div>
                    <span className="font-serif text-5xl font-bold tracking-tight italic block text-[var(--fg-subtle)]">
                      {item.year}
                    </span>
                    <span className="text-xs font-mono uppercase tracking-wider text-[var(--fg-subtle)] mt-1 block">
                      {item.event}
                    </span>
                  </div>
                  <div className="space-y-4">
                    <p className="text-base leading-relaxed text-[var(--fg-muted)] max-w-3xl">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          <div className="my-36 hairline" />

          {/* ── Culture Grid ──────────────────────────────────────────── */}
          <section className="space-y-12">
            <span className="magazine-label">Culture</span>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {cultureValues.map((v, i) => (
                <motion.div
                  key={v.title}
                  {...stagger(i)}
                  className="p-8 border border-[var(--border)] rounded-2xl bg-[var(--surface)] space-y-4"
                >
                  <h3 className="font-serif text-xl font-bold text-[var(--fg)]">{v.title}</h3>
                  <p className="text-xs leading-relaxed text-[var(--fg-muted)]">{v.body}</p>
                </motion.div>
              ))}
            </div>
          </section>

          <div className="my-36 hairline" />

          {/* ── Careers Editorial CTA ─────────────────────────────────── */}
          <section>
            <motion.div
              {...fadeUp}
              className="editorial-card rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-12 sm:p-20 text-center space-y-8"
            >
              <span className="magazine-label mx-auto">Careers</span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--fg)] max-w-4xl mx-auto leading-tight">
                Join our small group of systems builders.
              </h2>
              <p className="max-w-2xl mx-auto text-sm leading-relaxed text-[var(--fg-muted)]">
                We seek designers, researchers, and system engineers who value autonomy, respect details, and want to engineer the infrastructure behind tomorrow's industries.
              </p>
              <div className="flex flex-wrap justify-center gap-3 pt-4">
                <Link href="/careers" className="btn-primary">
                  Open Roles
                </Link>
                <Link href="/about" className="btn-secondary">
                  How We Build
                </Link>
              </div>
            </motion.div>
          </section>
        </main>

        <SiteFooter />
      </div>
    </div>
  );
}
