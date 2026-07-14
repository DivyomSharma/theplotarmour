import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Resources",
  description: "Shared documentation, templates, tools, and assets of PlotArmour Group.",
  path: "/resources",
});

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--fg)] flex flex-col justify-between transition-colors">
      <div>
        <SiteHeader />
        <main className="container py-16 lg:py-24">
          <div className="max-w-4xl space-y-6">
            <span className="magazine-label">Toolbox</span>
            <h1 className="font-serif text-[clamp(2.5rem,7vw,4.5rem)] font-bold leading-tight tracking-tight text-[var(--fg)]">
              Developer & Builder Resources.
            </h1>
            <p className="font-serif text-xl italic text-[var(--fg-muted)] leading-relaxed max-w-2xl">
              Public libraries, design tokens, blueprints, and template stacks engineered by PlotArmour Studio.
            </p>
          </div>
          <div className="hairline my-12" />
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="editorial-card rounded-2xl border border-[var(--border)] p-6 bg-[var(--surface)]">
              <h3 className="font-serif text-lg font-bold">Reference Blueprints</h3>
              <p className="text-xs leading-relaxed text-[var(--fg-muted)] mt-2">
                Browse our modular database architectures, telemetry pipelines, and workforce schemas.
              </p>
              <a href="/blueprints" className="text-xs font-semibold text-[var(--fg)] hover:underline mt-4 block">
                Open blueprints →
              </a>
            </div>
            <div className="editorial-card rounded-2xl border border-[var(--border)] p-6 bg-[var(--surface)]">
              <h3 className="font-serif text-lg font-bold">Design System Spec</h3>
              <p className="text-xs leading-relaxed text-[var(--fg-muted)] mt-2">
                Explore our typography layout styles, border configs, and monochrome color components.
              </p>
              <a href="/design-system" className="text-xs font-semibold text-[var(--fg)] hover:underline mt-4 block">
                Open specifications →
              </a>
            </div>
          </div>
        </main>
      </div>
      <SiteFooter />
    </div>
  );
}
