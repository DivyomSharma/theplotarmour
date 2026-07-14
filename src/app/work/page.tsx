import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { buildMetadata } from "@/lib/seo";
import { workItems } from "@/lib/site-data";

export const metadata: Metadata = buildMetadata({
  title: "Selected Work",
  description:
    "Explore PlotArmour portfolio projects across multiplayer systems, AI social platforms, and legal learning tools.",
  path: "/work",
  keywords: ["selected work", "games", "AI products", "CourtWise AI", "Candor AI", "Battalion"],
});

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--fg)] flex flex-col justify-between transition-colors">
      <div>
        <SiteHeader />

        <main className="container py-16 lg:py-24">
          {/* Header */}
          <div className="max-w-4xl space-y-6">
            <span className="magazine-label">Portfolio</span>
            <h1 className="font-serif text-[clamp(2.5rem,7vw,4.5rem)] font-bold leading-tight tracking-tight text-[var(--fg)]">
              Signals from across the system.
            </h1>
            <p className="font-serif text-xl italic text-[var(--fg-muted)] leading-relaxed max-w-2xl">
              Strategic games, AI social platforms, and legal learning tools constructed through our venture-building engine.
            </p>
          </div>

          <div className="hairline my-12" />

          {/* Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {workItems.map((item) => (
              <div
                key={item.name}
                className="editorial-card rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-all duration-300 hover:border-[var(--border-hover)] flex flex-col justify-between min-h-[240px]"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--fg-subtle)]">
                      {item.category}
                    </span>
                    <span className="rounded-full bg-white/[0.05] px-2 py-0.5 text-[10px] font-mono text-[var(--fg-subtle)] uppercase">
                      {item.state}
                    </span>
                  </div>
                  <h2 className="font-serif text-xl font-bold text-[var(--fg)]">{item.name}</h2>
                  <p className="mt-2 text-xs leading-relaxed text-[var(--fg-muted)]">{item.summary}</p>
                </div>

                <div className="mt-6 border-t border-[var(--border)] pt-4 flex items-center justify-between">
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-semibold text-[var(--fg)] hover:underline"
                    >
                      Open application ↗
                    </a>
                  ) : (
                    <span className="text-xs font-mono text-[var(--fg-subtle)]">Internal R&D</span>
                  )}
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
