"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { companies, philosophy, timeline, cultureValues } from "@/lib/site-data";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

const stagger = (i: number) => ({
  ...fadeUp,
  transition: { duration: 0.7, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] as const },
});

export function HomePage() {
  return (
    <main className="bg-[#000000] text-white">
      <SiteHeader />

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="relative flex min-h-dvh flex-col justify-end pb-20 pt-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-5xl"
          >
            <p className="label mb-8">PlotArmour Group</p>
            <h1 className="text-balance text-[clamp(3rem,7vw,6.5rem)] font-semibold leading-[1.0] tracking-[-0.03em] text-white">
              Building the infrastructure behind tomorrow's industries.
            </h1>
            <p className="mt-8 max-w-2xl text-[1.25rem] leading-[1.6] text-[var(--fg-muted)]">
              PlotArmour builds independent companies that solve fundamental operational problems across industries.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/companies" className="btn-primary">
                Explore Companies
              </Link>
              <Link href="/about" className="btn-secondary">
                Our Model
              </Link>
            </div>
          </motion.div>
        </div>

        {/* bottom rule */}
        <div className="container mt-20">
          <div className="hairline" />
        </div>
      </section>

      {/* ── Philosophy ────────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <motion.p {...fadeUp} className="label mb-12">
            Philosophy
          </motion.p>
          <div className="grid gap-px border border-[var(--border)] rounded-xl overflow-hidden bg-[var(--border)] sm:grid-cols-3">
            {philosophy.map((p, i) => (
              <motion.div
                key={p.statement}
                {...stagger(i)}
                className="bg-black p-8 lg:p-10"
              >
                <p className="text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl">
                  {p.statement}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-[var(--fg-muted)]">
                  {p.explanation}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why PlotArmour Exists ──────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
            <motion.div {...fadeUp}>
              <p className="label mb-6">The Model</p>
              <h2 className="text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                Independent companies. Shared philosophy.
              </h2>
            </motion.div>
            <motion.div {...stagger(1)} className="space-y-6 lg:pt-14">
              <p className="text-lg leading-relaxed text-[var(--fg-muted)]">
                Rather than building many products under one company, PlotArmour builds independent companies — each owning an entire category, each with its own brand, identity, roadmap, leadership, and future.
              </p>
              <p className="text-base leading-relaxed text-[var(--fg-muted)]">
                Together they form the PlotArmour ecosystem. This is not an incubator. This is not an agency. This is a holding structure built to create enduring infrastructure businesses.
              </p>
              <Link href="/about" className="btn-secondary inline-flex">
                How we build companies →
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Companies ─────────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="mb-12 flex items-end justify-between gap-4">
            <div>
              <motion.p {...fadeUp} className="label mb-4">
                Portfolio
              </motion.p>
              <motion.h2 {...stagger(1)} className="text-3xl font-semibold tracking-tight sm:text-4xl">
                The companies
              </motion.h2>
            </div>
            <Link href="/companies" className="btn-secondary hidden sm:inline-flex">
              View all →
            </Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {companies.map((company, i) => (
              <motion.article
                key={company.slug}
                {...stagger(i)}
                className="group relative flex flex-col justify-between rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-all duration-300 hover:border-[var(--border-hover)] hover:bg-[var(--surface-hover)]"
              >
                {/* accent dot */}
                <span
                  className="mb-6 block h-2 w-2 rounded-full"
                  style={{ background: company.accentColor }}
                />
                <div className="flex-1">
                  <div className="mb-1 flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-white">{company.name}</h3>
                    <span
                      className="rounded-full px-2 py-0.5 text-[0.65rem] font-medium uppercase tracking-wider"
                      style={{
                        background: company.accentBg,
                        color: company.accentColor,
                      }}
                    >
                      {company.status}
                    </span>
                  </div>
                  <p className="mb-3 text-xs font-medium uppercase tracking-widest text-[var(--fg-muted)]">
                    {company.category}
                  </p>
                  <p className="text-sm leading-relaxed text-[var(--fg-muted)]">{company.mission}</p>
                </div>
                <div className="mt-6 flex items-center justify-between border-t border-[var(--border)] pt-4">
                  <Link
                    href={`/companies#${company.slug}`}
                    className="text-xs font-medium text-white/60 transition-colors hover:text-white"
                  >
                    Learn more →
                  </Link>
                  {company.url && (
                    <a
                      href={company.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-[var(--fg-subtle)] transition-colors hover:text-[var(--fg-muted)]"
                    >
                      Visit ↗
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ──────────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <motion.p {...fadeUp} className="label mb-12">
            Evolution
          </motion.p>
          <div className="relative">
            {/* vertical line */}
            <div className="absolute left-[4.5rem] top-0 hidden h-full w-px bg-[var(--border)] md:block" />
            <div className="space-y-0">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.event}
                  {...stagger(i)}
                  className="relative grid gap-4 border-b border-[var(--border)] py-6 md:grid-cols-[9rem_1fr]"
                >
                  <p className="text-sm font-medium tabular-nums text-[var(--fg-muted)]">{item.year}</p>
                  <div>
                    <p className="font-semibold text-white">{item.event}</p>
                    <p className="mt-1 text-sm text-[var(--fg-muted)]">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Culture ───────────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <motion.div {...fadeUp}>
              <p className="label mb-6">How we work</p>
              <h2 className="text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                Built by people who prefer execution over conversation.
              </h2>
            </motion.div>
            <div className="grid gap-px border border-[var(--border)] rounded-xl overflow-hidden bg-[var(--border)] sm:grid-cols-2">
              {cultureValues.map((v, i) => (
                <motion.div
                  key={v.title}
                  {...stagger(i)}
                  className="bg-black p-6"
                >
                  <p className="font-semibold text-white">{v.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--fg-muted)]">{v.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Careers CTA ───────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <motion.div
            {...fadeUp}
            className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-10 text-center sm:p-16"
          >
            <p className="label mx-auto mb-6 justify-center">Careers</p>
            <h2 className="mx-auto max-w-3xl text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Join us in building the next generation of infrastructure companies.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-[var(--fg-muted)]">
              We are a small team with high standards. We value ownership, curiosity, and the willingness to build things that take years to be understood.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link href="/careers" className="btn-primary">
                See open roles
              </Link>
              <Link href="/about" className="btn-secondary">
                How we work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
