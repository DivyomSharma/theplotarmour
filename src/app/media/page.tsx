import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Media",
  description: "Visual drops, campaign infrastructure, and media releases from PlotArmour Group.",
  path: "/media",
});

export default function MediaPage() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--fg)] flex flex-col justify-between transition-colors">
      <div>
        <SiteHeader />
        <main className="container py-16 lg:py-24">
          <div className="max-w-4xl space-y-6">
            <span className="magazine-label">Drops</span>
            <h1 className="font-serif text-[clamp(2.5rem,7vw,4.5rem)] font-bold leading-tight tracking-tight text-[var(--fg)]">
              Media & Visual Output.
            </h1>
            <p className="font-serif text-xl italic text-[var(--fg-muted)] leading-relaxed max-w-2xl">
              Campaign prints, video assets, and design releases documenting the evolution of our brand identities.
            </p>
          </div>
          <div className="hairline my-12" />
          <div className="rounded-2xl border border-[var(--border)] p-12 text-center bg-[var(--surface)]">
            <p className="font-serif text-2xl italic text-[var(--fg)]">"Visual assets and drop publications are active inside individual brand nodes."</p>
            <p className="mt-4 text-xs font-mono text-[var(--fg-subtle)]">Refer to Convoke, Keystone, Verity, and VEDA channels for custom assets.</p>
          </div>
        </main>
      </div>
      <SiteFooter />
    </div>
  );
}
