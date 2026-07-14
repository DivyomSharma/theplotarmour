import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Design System",
  description: "PlotArmour editorial design tokens, fonts, spacing tables, and layout principles.",
  path: "/design-system",
});

export default function DesignSystemPage() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--fg)] flex flex-col justify-between transition-colors">
      <div>
        <SiteHeader />
        <main className="container py-16 lg:py-24">
          <div className="max-w-4xl space-y-6">
            <span className="magazine-label">Design Standards</span>
            <h1 className="font-serif text-[clamp(2.5rem,7vw,4.5rem)] font-bold leading-tight tracking-tight text-[var(--fg)]">
              Design System Spec.
            </h1>
            <p className="font-serif text-xl italic text-[var(--fg-muted)] leading-relaxed max-w-2xl">
              Specifications outlining typography weight pairings, light/dark mode variables, and monochrome layout grids.
            </p>
          </div>
          <div className="hairline my-12" />
          <div className="space-y-12">
            {/* Fonts */}
            <div>
              <h2 className="font-mono text-xs uppercase tracking-wider text-[var(--fg-subtle)] mb-4">Typography Stack</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="p-6 border border-[var(--border)] rounded-xl">
                  <span className="font-mono text-xs text-[var(--fg-subtle)]">--font-display (Instrument Serif)</span>
                  <p className="font-display text-4xl italic mt-3">PlotArmour Group</p>
                  <p className="text-xs text-[var(--fg-muted)] mt-2">Giant italic statements, editorial quotes.</p>
                </div>
                <div className="p-6 border border-[var(--border)] rounded-xl">
                  <span className="font-mono text-xs text-[var(--fg-subtle)]">--font-serif (Newsreader)</span>
                  <p className="font-serif text-3xl font-bold mt-3">Infrastructure Bedrock</p>
                  <p className="text-xs text-[var(--fg-muted)] mt-2">Articles, hero headlines, company tags.</p>
                </div>
                <div className="p-6 border border-[var(--border)] rounded-xl">
                  <span className="font-mono text-xs text-[var(--fg-subtle)]">--font-sans (Inter Tight)</span>
                  <p className="font-sans text-xl font-medium mt-3">Operational Dashboard Navigation</p>
                  <p className="text-xs text-[var(--fg-muted)] mt-2">Labels, UI elements, button copies, general body blocks.</p>
                </div>
                <div className="p-6 border border-[var(--border)] rounded-xl">
                  <span className="font-mono text-xs text-[var(--fg-subtle)]">--font-mono (JetBrains Mono)</span>
                  <p className="font-mono text-sm mt-3">BP-04-Settlement-Router</p>
                  <p className="text-xs text-[var(--fg-muted)] mt-2">Blueprint codes, timestamps, issue IDs.</p>
                </div>
              </div>
            </div>
            
            <div className="hairline" />

            {/* Colors */}
            <div>
              <h2 className="font-mono text-xs uppercase tracking-wider text-[var(--fg-subtle)] mb-4">System Colors</h2>
              <div className="grid gap-3 sm:grid-cols-4">
                <div className="p-4 border border-[var(--border)] rounded-lg">
                  <span className="h-4 w-full block rounded bg-white border border-black/10" />
                  <p className="font-mono text-[10px] mt-2 text-black font-semibold">Light Background (#ffffff)</p>
                </div>
                <div className="p-4 border border-[var(--border)] rounded-lg">
                  <span className="h-4 w-full block rounded bg-black" />
                  <p className="font-mono text-[10px] mt-2 text-white font-semibold">Dark Background (#000000)</p>
                </div>
                <div className="p-4 border border-[var(--border)] rounded-lg">
                  <span className="h-4 w-full block rounded bg-[#111111]" />
                  <p className="font-mono text-[10px] mt-2 text-[var(--fg-muted)]">Light Foreground (#111111)</p>
                </div>
                <div className="p-4 border border-[var(--border)] rounded-lg">
                  <span className="h-4 w-full block rounded bg-[#f5f5f7]" />
                  <p className="font-mono text-[10px] mt-2 text-[var(--fg-muted)]">Dark Foreground (#f5f5f7)</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <SiteFooter />
    </div>
  );
}
