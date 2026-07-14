import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { companies } from "@/lib/site-data";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = buildMetadata({
  title: "Companies Portfolio",
  description:
    "The PlotArmour Group portfolio: Convoke, Keystone, Verity, VEDA, Studio, and Store. Detailed reference specifications, statuses, and links.",
  path: "/companies",
  keywords: ["Convoke", "Keystone", "Verity", "VEDA", "portfolio companies", "infrastructure companies"],
});

export default function CompaniesPage() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--fg)] flex flex-col justify-between transition-colors">
      <div>
        <SiteHeader />

        <main className="container py-16 lg:py-24">
          {/* Header */}
          <div className="max-w-4xl space-y-6">
            <span className="magazine-label">Holdings Portfolio</span>
            <h1 className="font-serif text-[clamp(2.5rem,7vw,4.5rem)] font-bold leading-tight tracking-tight text-[var(--fg)]">
              The Ecosystem Companies.
            </h1>
            <p className="font-serif text-xl italic text-[var(--fg-muted)] leading-relaxed max-w-2xl">
              Each company independently owns its category. Together they form the PlotArmour operational bedrock.
            </p>
          </div>

          <div className="hairline my-12" />

          {/* List with Cover Images */}
          <div className="space-y-20">
            {companies.map((company) => (
              <section
                key={company.slug}
                id={company.slug}
                className="grid gap-12 lg:grid-cols-[1fr_1.2fr] items-start border-b border-[var(--border)] pb-16 last:border-0 last:pb-0"
              >
                {/* Visual Identity Image */}
                <div className="w-full aspect-[16/10] bg-neutral-900 rounded-2xl overflow-hidden border border-[var(--border)]">
                  <img
                    src={`/companies/${company.slug}.png`}
                    alt={company.name}
                    className="w-full h-full object-cover grayscale brightness-90"
                  />
                </div>

                {/* Company Details */}
                <div className="space-y-6">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span
                        className="flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold text-white font-mono"
                        style={{ background: company.accentColor }}
                      >
                        {company.name.charAt(0)}
                      </span>
                      <div>
                        <h2 className="font-serif text-3xl font-bold text-[var(--fg)]">{company.name}</h2>
                        <p className="font-mono text-[9px] uppercase tracking-widest text-[var(--fg-subtle)]">
                          {company.category}
                        </p>
                      </div>
                    </div>
                    <span
                      className="rounded-full px-3 py-1 text-xs font-mono uppercase"
                      style={{ background: company.accentBg, color: company.accentColor }}
                    >
                      {company.status}
                    </span>
                  </div>

                  <p className="font-serif text-lg italic leading-relaxed text-[var(--fg-muted)] border-l-2 border-[var(--border)] pl-4">
                    {company.mission}
                  </p>

                  <p className="text-sm leading-relaxed text-[var(--fg-muted)]">
                    {company.description}
                  </p>

                  {company.industries && (
                    <div className="space-y-2">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--fg-subtle)]">
                        Holdings focus
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {company.industries.map((ind) => (
                          <span
                            key={ind}
                            className="font-mono text-[10px] border border-[var(--border)] px-2.5 py-1 rounded bg-[var(--surface)] text-[var(--fg-muted)]"
                          >
                            {ind}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="pt-4 flex flex-wrap gap-3">
                    {company.url ? (
                      <a
                        href={company.url}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-primary text-xs"
                      >
                        Visit {company.name} ↗
                      </a>
                    ) : (
                      <span className="font-mono text-xs text-[var(--fg-subtle)] self-center">
                        R&D Blueprints available inside Group docs.
                      </span>
                    )}
                    <Link href="/contact" className="btn-secondary text-xs">
                      Alliances Inquiry
                    </Link>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </main>
      </div>

      <SiteFooter />
    </div>
  );
}
