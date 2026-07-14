import type { Metadata } from "next";
import Link from "next/link";
import { motion } from "framer-motion";
import { buildMetadata } from "@/lib/seo";
import { companies } from "@/lib/site-data";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = buildMetadata({
  title: "Companies",
  description:
    "The PlotArmour portfolio: Convoke, Keystone, Verity, VEDA, Studio, and Store. Independent companies building infrastructure across industries.",
  path: "/companies",
  keywords: ["Convoke", "Keystone", "Verity", "VEDA", "portfolio companies", "infrastructure companies"],
});

export default function CompaniesPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-black text-white">
        {/* Header */}
        <section className="section pt-32">
          <div className="container">
            <p className="label mb-6">Portfolio</p>
            <h1 className="max-w-3xl text-balance text-5xl font-semibold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              The companies.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--fg-muted)]">
              Each company independently owns its category. Together they form the PlotArmour ecosystem.
            </p>
          </div>
        </section>

        {/* Companies list */}
        <section className="section">
          <div className="container">
            <div className="space-y-2">
              {companies.map((company, i) => (
                <div
                  key={company.slug}
                  id={company.slug}
                  className="group relative rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 transition-all duration-300 hover:border-[var(--border-hover)] hover:bg-[var(--surface-hover)] lg:p-10"
                >
                  {/* Top row */}
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex items-center gap-4">
                      <span
                        className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl text-sm font-bold text-white"
                        style={{ background: company.accentBg, border: `1px solid ${company.accentColor}30` }}
                      >
                        {company.name.charAt(0)}
                      </span>
                      <div>
                        <h2 className="text-2xl font-semibold text-white">{company.name}</h2>
                        <p
                          className="text-xs font-medium uppercase tracking-widest"
                          style={{ color: company.accentColor }}
                        >
                          {company.category}
                        </p>
                      </div>
                    </div>
                    <span
                      className="self-start rounded-full px-3 py-1 text-xs font-medium"
                      style={{ background: company.accentBg, color: company.accentColor }}
                    >
                      {company.status}
                    </span>
                  </div>

                  {/* Mission */}
                  <p className="mt-6 text-xl font-medium leading-snug text-white">{company.mission}</p>

                  {/* Description */}
                  <p className="mt-3 max-w-3xl text-base leading-relaxed text-[var(--fg-muted)]">
                    {company.description}
                  </p>

                  {/* Industries */}
                  {company.industries && (
                    <div className="mt-6">
                      <p className="mb-3 text-xs font-medium uppercase tracking-wider text-[var(--fg-subtle)]">
                        Industries
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {company.industries.map((ind) => (
                          <span
                            key={ind}
                            className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--fg-muted)]"
                          >
                            {ind}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* CTA */}
                  {company.url && (
                    <div className="mt-8">
                      <a
                        href={company.url}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-secondary inline-flex text-sm"
                        style={{ padding: "0.5rem 1.25rem" }}
                      >
                        Visit {company.name} ↗
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
