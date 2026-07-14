import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Partnerships",
  description: "PlotArmour Group strategic alliances, distribution networks, and venture scaling partners.",
  path: "/partners",
});

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--fg)] flex flex-col justify-between transition-colors">
      <div>
        <SiteHeader />
        <main className="container py-16 lg:py-24">
          <div className="max-w-4xl space-y-6">
            <span className="magazine-label">Alliances</span>
            <h1 className="font-serif text-[clamp(2.5rem,7vw,4.5rem)] font-bold leading-tight tracking-tight text-[var(--fg)]">
              Strategic Partners.
            </h1>
            <p className="font-serif text-xl italic text-[var(--fg-muted)] leading-relaxed max-w-2xl">
              Collaborating with corporate operators, industry leaders, and distribution networks to scale category solutions.
            </p>
          </div>
          <div className="hairline my-12" />
          <div className="rounded-2xl border border-[var(--border)] p-12 text-center bg-[var(--surface)]">
            <h2 className="font-serif text-2xl font-bold mb-4">Partnering with PlotArmour</h2>
            <p className="text-sm text-[var(--fg-muted)] leading-relaxed max-w-xl mx-auto">
              We look for operators, distribution networks, and strategic firms inside manufacturing, logistics, healthcare, and enterprise staffing.
            </p>
            <a href="mailto:partnerships@theplotarmour.xyz" className="btn-primary mt-6 inline-flex">
              Discuss Alliances
            </a>
          </div>
        </main>
      </div>
      <SiteFooter />
    </div>
  );
}
