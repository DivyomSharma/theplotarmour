import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { buildMetadata } from "@/lib/seo";
import { blueprints } from "@/lib/site-data";

export const metadata: Metadata = buildMetadata({
  title: "Blueprint Library",
  description:
    "Explore the architectural reference specifications behind PlotArmour portfolio systems.",
  path: "/blueprints",
  keywords: ["blueprints", "reference architecture", "ledger", "IoT gateway", "identity"],
});

export default function BlueprintsPage() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--fg)] flex flex-col justify-between transition-colors">
      <div>
        <SiteHeader />

        <main className="container py-16 lg:py-24">
          <div className="max-w-4xl space-y-6">
            <span className="magazine-label">Architecture Specifications</span>
            <h1 className="font-serif text-[clamp(2.5rem,7vw,4.5rem)] font-bold leading-tight tracking-tight text-[var(--fg)]">
              Reference Blueprints.
            </h1>
            <p className="font-serif text-xl italic text-[var(--fg-muted)] leading-relaxed max-w-2xl">
              Systems architecture schematics built for reuse across our industrial, operations, and community products.
            </p>
          </div>

          <div className="hairline my-12" />

          {/* Blueprints Display */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blueprints.map((bp) => (
              <div
                key={bp.id}
                className="editorial-card rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-all hover:border-[var(--border-hover)] flex flex-col justify-between min-h-[280px]"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs text-[var(--fg-subtle)]">{bp.id}</span>
                    <span className="text-[10px] font-mono uppercase bg-white/5 px-2 py-0.5 rounded text-[var(--fg-subtle)]">
                      Spec Active
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[var(--fg)]">{bp.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-[var(--fg-muted)]">{bp.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-[var(--border)] space-y-3">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--fg-subtle)]">
                      Components
                    </span>
                    <div className="flex flex-wrap gap-1.5 mt-1.5">
                      {bp.components.map((comp) => (
                        <span
                          key={comp}
                          className="font-mono text-[9px] border border-[var(--border)] px-1.5 py-0.5 rounded bg-black/5 text-[var(--fg-muted)]"
                        >
                          {comp}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-[10px] font-mono text-[var(--fg-subtle)]">
                    Target: {bp.deployment}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      <SiteFooter />
    </div>
  );
}
