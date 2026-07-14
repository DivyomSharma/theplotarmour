import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Press",
  description: "Press kit, group releases, and communication assets for PlotArmour Group.",
  path: "/press",
});

export default function PressPage() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--fg)] flex flex-col justify-between transition-colors">
      <div>
        <SiteHeader />
        <main className="container py-16 lg:py-24">
          <div className="max-w-4xl space-y-6">
            <span className="magazine-label">Communications</span>
            <h1 className="font-serif text-[clamp(2.5rem,7vw,4.5rem)] font-bold leading-tight tracking-tight text-[var(--fg)]">
              Press Relations.
            </h1>
            <p className="font-serif text-xl italic text-[var(--fg-muted)] leading-relaxed max-w-2xl">
              Official press kits, wordmarks, group statements, and communication access.
            </p>
          </div>
          <div className="hairline my-12" />
          <div className="grid gap-6 md:grid-cols-2">
            <div className="editorial-card rounded-2xl border border-[var(--border)] p-8 bg-[var(--surface)]">
              <h2 className="font-serif text-2xl font-bold mb-4">Official Announcements</h2>
              <p className="text-sm text-[var(--fg-muted)] leading-relaxed">
                For news queries, statements from founder Divyom Sharma, or requests for comment, reach out to our media desk.
              </p>
              <a href="mailto:press@theplotarmour.xyz" className="btn-secondary mt-6 inline-flex">
                press@theplotarmour.xyz
              </a>
            </div>
            <div className="editorial-card rounded-2xl border border-[var(--border)] p-8 bg-[var(--surface)]">
              <h2 className="font-serif text-2xl font-bold mb-4">Brand Kit Assets</h2>
              <p className="text-sm text-[var(--fg-muted)] leading-relaxed">
                Download verified high-resolution SVG wordmarks, typography guides, and layout templates for holding brands.
              </p>
              <a href="/brand" className="btn-primary mt-6 inline-flex">
                Download Brand Assets
              </a>
            </div>
          </div>
        </main>
      </div>
      <SiteFooter />
    </div>
  );
}
