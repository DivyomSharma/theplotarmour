import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Documentation",
  description: "PlotArmour developer and operational guidelines documentation.",
  path: "/docs",
});

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--fg)] flex flex-col justify-between transition-colors">
      <div>
        <SiteHeader />
        <main className="container py-16 lg:py-24">
          <div className="max-w-4xl space-y-6">
            <span className="magazine-label">Documentation</span>
            <h1 className="font-serif text-[clamp(2.5rem,7vw,4.5rem)] font-bold leading-tight tracking-tight text-[var(--fg)]">
              Ecosystem Documentation.
            </h1>
            <p className="font-serif text-xl italic text-[var(--fg-muted)] leading-relaxed max-w-2xl">
              Developer guidelines, deployment patterns, and operational directives for PlotArmour companies.
            </p>
          </div>
          <div className="hairline my-12" />
          <div className="grid gap-6 md:grid-cols-[200px_1fr] items-start">
            <nav className="flex flex-col gap-2 font-mono text-xs text-[var(--fg-subtle)] border-r border-[var(--border)] pr-6">
              <span className="text-[var(--fg)] font-semibold mb-2">Introduction</span>
              <a href="#" className="hover:text-[var(--fg)]">About the Group</a>
              <a href="#" className="hover:text-[var(--fg)]">Venture Lab Core</a>
              <span className="text-[var(--fg)] font-semibold mt-4 mb-2">Specifications</span>
              <a href="/blueprints" className="hover:text-[var(--fg)]">Blueprint Specs</a>
              <a href="/design-system" className="hover:text-[var(--fg)]">Design Tokens</a>
            </nav>
            <div className="space-y-6">
              <h2 className="font-serif text-2xl font-bold">Introduction to PlotArmour</h2>
              <p className="text-sm leading-relaxed text-[var(--fg-muted)]">
                PlotArmour builds independent, category-owning infrastructure businesses. This documentation describes how the venture lab validates, designs, builds, launches, and operations platforms.
              </p>
              <div className="p-6 border border-[var(--border)] rounded-xl bg-[var(--surface)] font-mono text-xs">
                <p className="text-[var(--fg-subtle)] mb-2">// Quick Start: Spin up a new portfolio stack using the reference templates</p>
                <p className="text-white">npx -y create-plotarmour-app@latest my-platform</p>
              </div>
            </div>
          </div>
        </main>
      </div>
      <SiteFooter />
    </div>
  );
}
