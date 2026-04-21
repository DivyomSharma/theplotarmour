"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ParticleField } from "@/components/particle-field";
import { SiteHeader } from "@/components/site-header";
import {
  philosophy,
  pipelineStages,
  systemNodes,
  verticals,
  workItems,
} from "@/lib/site-data";

const fadeInUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  viewport: { once: true, amount: 0.25 },
};

function HeroLink({
  href,
  label,
  external,
  ghost = false,
}: {
  href: string;
  label: string;
  external?: boolean;
  ghost?: boolean;
}) {
  const className = ghost
    ? "cta-secondary"
    : "cta-primary";

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={className}>
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
}

export function HomePage() {
  return (
    <main className="overflow-hidden bg-[#040507] text-white">
      <section className="grain-overlay relative min-h-screen">
        <div className="absolute inset-0">
          <ParticleField />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(4,5,7,0.28)_50%,_rgba(4,5,7,0.92)_100%)]" />
        <SiteHeader />

        <div className="relative z-10 flex min-h-screen items-end px-4 pb-16 pt-28 sm:px-6 lg:px-10 lg:pb-20">
          <div className="mx-auto grid w-full max-w-[1440px] gap-12 lg:grid-cols-[minmax(0,780px)_1fr] lg:items-end">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-4xl"
            >
              <p className="mb-5 text-sm uppercase tracking-[0.42em] text-white/56">
                Built for what comes next.
              </p>
              <h1 className="font-display text-balance text-[clamp(4.4rem,10vw,9rem)] uppercase leading-[0.88] tracking-[-0.08em] text-white">
                PlotArmour
              </h1>
              <p className="mt-6 max-w-2xl text-balance text-lg leading-8 text-white/72 sm:text-xl">
                From idea to execution, everything runs through a single system.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <HeroLink
                  href="https://studio.theplotarmour.xyz"
                  label="Enter Studio"
                  external
                />
                <HeroLink
                  href="https://merch.theplotarmour.xyz"
                  label="Explore Merchandise"
                  external
                  ghost
                />
                <HeroLink
                  href="https://store.theplotarmour.xyz"
                  label="Visit Store"
                  external
                  ghost
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16, duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
              className="grid gap-4 self-end lg:max-w-sm"
            >
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.32em] text-white/48">
                  System
                </p>
                <p className="mt-5 text-xl leading-8 text-white/82">
                  Creators, brands, communities, and startups connected by one operating layer.
                </p>
              </div>
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 text-sm uppercase tracking-[0.28em] text-white/56">
                In-house design, development, production, and distribution.
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <motion.section {...fadeInUp} className="section-shell py-24 sm:py-28">
        <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-4">
            <p className="section-label">Verticals</p>
            <h2 className="font-display max-w-3xl text-4xl uppercase tracking-[-0.05em] text-white sm:text-5xl">
              Three distinct systems. One controlled parent layer.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-white/64">
            PlotArmour is not a brochure. It is the front door into deeper ecosystems built for
            product, production, and culture.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {verticals.map((vertical, index) => (
            <motion.article
              key={vertical.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.08 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-7"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${vertical.accent} opacity-60 transition duration-500 group-hover:scale-105`}
              />
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black via-black/60 to-transparent" />
              <div className="relative z-10 flex h-full min-h-[420px] flex-col justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.32em] text-white/48">
                    {vertical.eyebrow}
                  </p>
                  <h3 className="font-display mt-5 text-4xl uppercase tracking-[-0.04em] text-white">
                    {vertical.label}
                  </h3>
                  <p className="mt-5 max-w-sm text-base leading-7 text-white/72">
                    {vertical.summary}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link
                    href={vertical.href}
                    className="cta-primary"
                  >
                    Enter Section
                  </Link>
                  <a
                    href={vertical.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="cta-secondary"
                  >
                    Live Site
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section {...fadeInUp} className="section-shell py-24 sm:py-28">
        <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div className="space-y-5">
            <p className="section-label">Unified System</p>
            <h2 className="font-display max-w-3xl text-4xl uppercase tracking-[-0.05em] text-white sm:text-5xl">
              One pipeline. Multiple fronts.
            </h2>
            <p className="max-w-2xl text-lg leading-8 text-white/72">
              We operate as a unified system. A network of creators, brands, communities, and
              startups, backed by in-house design, development, and production.
            </p>
            <p className="max-w-2xl text-base leading-7 text-white/58">
              From concept to distribution, everything runs through a single pipeline. We work with
              creators, communities, and companies to design, build, and scale products and
              content, while execution stays fast, controlled, and consistent.
            </p>
          </div>

          <div className="overflow-hidden rounded-[2.4rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))]">
            <div className="grid gap-px bg-white/10 md:grid-cols-2">
              {systemNodes.map((node, index) => (
                <div
                  key={node.title}
                  className={`bg-[#090b0f] p-7 ${
                    index === 0 ? "bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.14),transparent_48%),#090b0f]" : ""
                  } ${
                    index === 1 ? "bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.12),transparent_42%),#090b0f]" : ""
                  } ${
                    index === 2 ? "bg-[radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.1),transparent_42%),#090b0f]" : ""
                  } ${
                    index === 3 ? "bg-[radial-gradient(circle_at_bottom_right,rgba(34,197,94,0.1),transparent_42%),#090b0f]" : ""
                  }`}
                >
                  <p className="font-display text-3xl uppercase tracking-[-0.04em] text-white">
                    {node.title}
                  </p>
                  <p className="mt-4 max-w-sm text-sm leading-7 text-white/62">
                    {node.summary}
                  </p>
                </div>
              ))}
            </div>

            <div className="border-t border-white/10 bg-black/30 p-6">
              <p className="text-xs uppercase tracking-[0.34em] text-white/42">
                Execution Pipeline
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                {pipelineStages.map((stage) => (
                  <span
                    key={stage}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm uppercase tracking-[0.22em] text-white/76"
                  >
                    {stage}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section {...fadeInUp} className="section-shell py-24 sm:py-28">
        <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-4">
            <p className="section-label">Selected Work</p>
            <h2 className="font-display max-w-3xl text-4xl uppercase tracking-[-0.05em] text-white sm:text-5xl">
              Signals from across the system.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-white/64">
            Multiplayer worlds, AI platforms, and legal learning products shaped through the same
            pipeline.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-12">
          {workItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.08 }}
              viewport={{ once: true, amount: 0.25 }}
              whileHover={{ y: -8 }}
              className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 md:min-h-[380px] ${
                index === 0
                  ? "xl:col-span-7"
                  : index === 1
                    ? "xl:col-span-5"
                    : index === 2
                      ? "xl:col-span-4"
                      : index === 3
                        ? "xl:col-span-4"
                        : "xl:col-span-4"
              }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.accent} opacity-70 transition duration-500 group-hover:scale-105`} />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,5,7,0.05),rgba(4,5,7,0.82))]" />
              <div className="relative z-10 flex min-h-[360px] flex-col justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.32em] text-white/48">
                    {item.category}
                  </p>
                  <h3 className="font-display mt-5 max-w-md text-4xl uppercase tracking-[-0.04em] text-white">
                    {item.name}
                  </h3>
                </div>
                <div>
                  <p className="max-w-xl text-base leading-7 text-white/72">
                    {item.summary}
                  </p>
                  <div className="mt-6 flex items-center justify-between gap-3">
                    <p className="text-xs uppercase tracking-[0.3em] text-white/48">
                      {item.state}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs uppercase tracking-[0.3em] text-white/72 transition duration-300 group-hover:text-white"
                      >
                        Open project
                      </a>
                    ) : (
                      <span className="text-xs uppercase tracking-[0.3em] text-white/38">
                        Internal concept
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section {...fadeInUp} className="section-shell py-24 sm:py-28">
        <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-8 sm:p-10 lg:p-12">
          <p className="section-label">Philosophy</p>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {philosophy.map((line) => (
              <div
                key={line}
                className="rounded-[1.8rem] border border-white/10 bg-black/20 p-6 font-display text-3xl uppercase tracking-[-0.04em] text-white/90"
              >
                {line}
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section {...fadeInUp} className="section-shell py-24 sm:py-28">
        <div className="rounded-[2.8rem] border border-white/10 bg-[linear-gradient(135deg,rgba(249,115,22,0.16),rgba(255,255,255,0.03),rgba(14,165,233,0.12))] p-8 sm:p-10 lg:p-12">
          <p className="section-label">Next Move</p>
          <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div className="space-y-4">
              <h2 className="font-display max-w-3xl text-4xl uppercase tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
                Start a project. Partner with PlotArmour.
              </h2>
              <p className="max-w-2xl text-base leading-7 text-white/72 sm:text-lg">
                Choose the ecosystem that matches the brief, or step through the parent site to see
                how the system is structured end to end.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <HeroLink href="/contact" label="Start a Project" />
              <HeroLink href="/work" label="View Work" ghost />
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
