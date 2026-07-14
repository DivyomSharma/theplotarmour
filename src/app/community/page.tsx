import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Community",
  description: "PlotArmour community networks, forums, and developer channels.",
  path: "/community",
});

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--fg)] flex flex-col justify-between transition-colors">
      <div>
        <SiteHeader />
        <main className="container py-16 lg:py-24">
          <div className="max-w-4xl space-y-6">
            <span className="magazine-label">Ecosystem Connect</span>
            <h1 className="font-serif text-[clamp(2.5rem,7vw,4.5rem)] font-bold leading-tight tracking-tight text-[var(--fg)]">
              PlotArmour Community.
            </h1>
            <p className="font-serif text-xl italic text-[var(--fg-muted)] leading-relaxed max-w-2xl">
              Fostering connection points for engineers, designers, researchers, and operators building new systems.
            </p>
          </div>
          <div className="hairline my-12" />
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="editorial-card rounded-2xl border border-[var(--border)] p-6 bg-[var(--surface)]">
              <h3 className="font-serif text-lg font-bold">Talent Sourcing</h3>
              <p className="text-xs leading-relaxed text-[var(--fg-muted)] mt-2">
                Convoke coordinates active sourcing tracks, developer cohorts, and opportunity boards.
              </p>
              <a href="/companies#convoke" className="text-xs font-semibold text-[var(--fg)] hover:underline mt-4 block">
                Learn about Convoke →
              </a>
            </div>
            <div className="editorial-card rounded-2xl border border-[var(--border)] p-6 bg-[var(--surface)]">
              <h3 className="font-serif text-lg font-bold">Developer Discord</h3>
              <p className="text-xs leading-relaxed text-[var(--fg-muted)] mt-2">
                Connect with internal operators and external builders inside active design and dev sprint lines.
              </p>
              <a href="https://discord.gg/mNXK4ejYpf" target="_blank" rel="noreferrer" className="text-xs font-semibold text-[var(--fg)] hover:underline mt-4 block">
                Join Server ↗
              </a>
            </div>
          </div>
        </main>
      </div>
      <SiteFooter />
    </div>
  );
}
