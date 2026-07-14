import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Brand Assets",
  description: "Official logos, wordmarks, color specifications, and brand guidelines for PlotArmour Group.",
  path: "/brand",
});

export default function BrandPage() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--fg)] flex flex-col justify-between transition-colors">
      <div>
        <SiteHeader />
        <main className="container py-16 lg:py-24">
          <div className="max-w-4xl space-y-6">
            <span className="magazine-label">Design Guide</span>
            <h1 className="font-serif text-[clamp(2.5rem,7vw,4.5rem)] font-bold leading-tight tracking-tight text-[var(--fg)]">
              Brand Assets.
            </h1>
            <p className="font-serif text-xl italic text-[var(--fg-muted)] leading-relaxed max-w-2xl">
              Official logos, typography configurations, and brand markers for PlotArmour and holding companies.
            </p>
          </div>
          <div className="hairline my-12" />
          <div className="grid gap-6 md:grid-cols-2">
            <div className="editorial-card rounded-2xl border border-[var(--border)] p-8 bg-[var(--surface)]">
              <h2 className="font-serif text-2xl font-bold mb-4">Wordmarks & Logos</h2>
              <p className="text-sm text-[var(--fg-muted)] leading-relaxed">
                Download verified high-resolution SVG and PNG formats of our PA logo mark and wordmarks in pure dark and light configurations.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="/icon.png" download className="btn-secondary text-xs">
                  Download Logo (.png)
                </a>
              </div>
            </div>
            <div className="editorial-card rounded-2xl border border-[var(--border)] p-8 bg-[var(--surface)]">
              <h2 className="font-serif text-2xl font-bold mb-4">Holdings Guidelines</h2>
              <p className="text-sm text-[var(--fg-muted)] leading-relaxed">
                Guidelines on color palettes and logo layouts across Keystone, Verity, VEDA, Convoke, and Studio.
              </p>
              <a href="/design-system" className="btn-primary mt-6 inline-flex">
                View System Tokens
              </a>
            </div>
          </div>
        </main>
      </div>
      <SiteFooter />
    </div>
  );
}
