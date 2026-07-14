"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { companies, philosophy, timeline, cultureValues } from "@/lib/site-data";

const fadeUp = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

const stagger = (i: number) => ({
  ...fadeUp,
  transition: { duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] as const },
});

export function HomePage() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--fg)] flex flex-col justify-between transition-colors">
      <div>
        <SiteHeader />

        {/* ── Editorial Masthead Info ── */}
        <div className="border-b border-[var(--border)] py-3">
          <div className="container flex flex-wrap justify-between items-center gap-3 text-xs font-mono text-[var(--fg-subtle)]">
            <span>PLOTARMOUR GROUP JOURNAL</span>
            <span>EDITION: JULY 2026</span>
            <span>SYSTEM STATUS: OPERATIONAL</span>
          </div>
        </div>

        {/* ── Hero ──────────────────────────────────────────────────── */}
        <main className="container py-16 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.6fr_0.8fr] lg:items-start">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-8"
            >
              <span className="magazine-label">Front Page</span>
              <h1 className="text-balance font-serif text-[clamp(2.8rem,7vw,5.5rem)] font-bold leading-[1.08] tracking-tight text-[var(--fg)]">
                Building the infrastructure behind tomorrow's industries.
              </h1>
              
              <blockquote className="pull-quote">
                "Rather than building many products under one company, PlotArmour builds independent companies, each owning an entire category."
              </blockquote>

              <p className="font-serif text-lg leading-relaxed text-[var(--fg-muted)]">
                PlotArmour Group is a technology holding company and venture studio building independent infrastructure businesses. Together they form a unified technology ecosystem.
              </p>
              
              <div className="flex flex-wrap gap-3 pt-4">
                <Link href="/companies" className="btn-primary">
                  Explore Companies
                </Link>
                <Link href="/about" className="btn-secondary">
                  Our Model
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="lg:border-l lg:border-[var(--border)] lg:pl-12 space-y-8"
            >
              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-[var(--fg-subtle)] mb-3">
                  Summary
                </p>
                <p className="text-sm leading-relaxed text-[var(--fg-muted)]">
                  PlotArmour is an Indian technology group building category-defining software platforms. Each company possesses independent roadmaps, leadership, and resources.
                </p>
              </div>
              
              <div className="hairline" />

              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-[var(--fg-subtle)] mb-3">
                  Current Holdings
                </p>
                <div className="space-y-3">
                  {companies.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/companies#${c.slug}`}
                      className="flex items-center justify-between group border-b border-[var(--border)] pb-2 last:border-0"
                    >
                      <div className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full" style={{ background: c.accentColor }} />
                        <span className="text-sm font-semibold text-[var(--fg)] group-hover:underline">
                          {c.name}
                        </span>
                      </div>
                      <span className="text-xs font-mono text-[var(--fg-subtle)] uppercase">
                        {c.status}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <div className="hairline my-16" />

          {/* ── Philosophy ────────────────────────────────────────────── */}
          <section className="space-y-12">
            <motion.p {...fadeUp} className="magazine-label">
              Philosophy
            </motion.p>
            <div className="grid gap-8 sm:grid-cols-3">
              {philosophy.map((p, i) => (
                <motion.div
                  key={p.statement}
                  {...stagger(i)}
                  className="space-y-4"
                >
                  <p className="font-serif text-2xl font-bold tracking-tight text-[var(--fg)]">
                    {p.statement}
                  </p>
                  <p className="text-sm leading-relaxed text-[var(--fg-muted)]">
                    {p.explanation}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          <div className="hairline my-16" />

          {/* ── Companies Grid ────────────────────────────────────────── */}
          <section className="space-y-12">
            <div className="flex items-end justify-between gap-4">
              <div>
                <motion.p {...fadeUp} className="magazine-label">
                  Ecosystem
                </motion.p>
                <motion.h2 {...stagger(1)} className="font-serif text-3xl font-bold tracking-tight text-[var(--fg)] sm:text-4xl mt-3">
                  Category Holdings
                </motion.h2>
              </div>
              <Link href="/companies" className="btn-secondary text-xs uppercase tracking-wider">
                All companies →
              </Link>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {companies.map((company, i) => (
                <motion.article
                  key={company.slug}
                  {...stagger(i)}
                  className="editorial-card rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-all duration-300 hover:border-[var(--border-hover)] hover:bg-[var(--surface-hover)] flex flex-col justify-between min-h-[260px]"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="h-2 w-2 rounded-full" style={{ background: company.accentColor }} />
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--fg-subtle)]">
                        {company.status}
                      </span>
                    </div>
                    <h3 className="font-serif text-xl font-bold text-[var(--fg)]">{company.name}</h3>
                    <p className="text-[11px] font-mono uppercase tracking-widest text-[var(--fg-subtle)] mt-1">
                      {company.category}
                    </p>
                    <p className="mt-3 text-xs leading-relaxed text-[var(--fg-muted)]">{company.mission}</p>
                  </div>
                  <div className="mt-6 border-t border-[var(--border)] pt-4 flex items-center justify-between">
                    <Link
                      href={`/companies#${company.slug}`}
                      className="text-xs font-semibold text-[var(--fg)] hover:underline"
                    >
                      Read blueprint →
                    </Link>
                    {company.url && (
                      <a
                        href={company.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs text-[var(--fg-subtle)] hover:text-[var(--fg)]"
                      >
                        Visit site ↗
                      </a>
                    )}
                  </div>
                </motion.article>
              ))}
            </div>
          </section>

          <div className="hairline my-16" />

          {/* ── Timeline ──────────────────────────────────────────────── */}
          <section className="space-y-12">
            <motion.p {...fadeUp} className="magazine-label">
              Timeline
            </motion.p>
            <div className="relative border-l border-[var(--border)] pl-6 space-y-8">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.event}
                  {...stagger(i)}
                  className="relative"
                >
                  {/* Bullet */}
                  <div className="absolute -left-[1.85rem] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-[var(--border-hover)] bg-[var(--bg)]" />
                  
                  <div className="grid gap-2 sm:grid-cols-[100px_1fr]">
                    <span className="text-xs font-mono tracking-wider text-[var(--fg-subtle)]">{item.year}</span>
                    <div>
                      <p className="font-serif text-lg font-bold text-[var(--fg)]">{item.event}</p>
                      <p className="mt-1 text-sm text-[var(--fg-muted)]">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          <div className="hairline my-16" />

          {/* ── Culture ───────────────────────────────────────────────── */}
          <section className="space-y-12">
            <div className="grid gap-12 lg:grid-cols-2">
              <motion.div {...fadeUp} className="space-y-4">
                <span className="magazine-label">Culture</span>
                <h2 className="font-serif text-3xl font-bold tracking-tight text-[var(--fg)] sm:text-4xl">
                  Builders over followers.
                </h2>
                <p className="text-base leading-relaxed text-[var(--fg-muted)]">
                  PlotArmour is structured on a shared operational philosophy. We values systems, execution, and long-term durability over marketing noise and quick updates.
                </p>
              </motion.div>
              <div className="grid gap-px border border-[var(--border)] rounded-2xl overflow-hidden bg-[var(--border)] sm:grid-cols-2">
                {cultureValues.map((v, i) => (
                  <motion.div
                    key={v.title}
                    {...stagger(i)}
                    className="bg-[var(--bg)] p-6"
                  >
                    <p className="font-serif text-lg font-bold text-[var(--fg)]">{v.title}</p>
                    <p className="mt-2 text-xs leading-relaxed text-[var(--fg-muted)]">{v.body}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <div className="hairline my-16" />

          {/* ── Careers CTA ───────────────────────────────────────────── */}
          <section>
            <motion.div
              {...fadeUp}
              className="editorial-card rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-10 sm:p-16 text-center"
            >
              <span className="magazine-label mx-auto mb-6">Open roles</span>
              <h2 className="font-serif text-3xl font-bold text-[var(--fg)] sm:text-4xl lg:text-5xl max-w-3xl mx-auto leading-tight">
                Join us in building the next generation of infrastructure companies.
              </h2>
              <p className="mt-6 max-w-xl mx-auto text-sm text-[var(--fg-muted)] leading-relaxed">
                We are a lean group with high requirements. We hire builders, researchers, and product engineers who value autonomy and ship clean systems.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <Link href="/careers" className="btn-primary">
                  Open Positions
                </Link>
                <Link href="/about" className="btn-secondary">
                  Our Operating Model
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
