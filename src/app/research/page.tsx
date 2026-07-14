import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { buildMetadata } from "@/lib/seo";
import { researchPapers } from "@/lib/site-data";

export const metadata: Metadata = buildMetadata({
  title: "Research Lab",
  description:
    "Long-form R&D reports, mapping market friction, and validating industrial software systems.",
  path: "/research",
  keywords: ["research", "industrial iot", "gig workforce", "venture architecture"],
});

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--fg)] flex flex-col justify-between transition-colors">
      <div>
        <SiteHeader />

        <main className="container py-16 lg:py-24">
          <div className="max-w-4xl space-y-6">
            <span className="magazine-label">Research & Analysis</span>
            <h1 className="font-serif text-[clamp(2.5rem,7vw,4.5rem)] font-bold leading-tight tracking-tight text-[var(--fg)]">
              The Research Library.
            </h1>
            <p className="font-serif text-xl italic text-[var(--fg-muted)] leading-relaxed max-w-2xl">
              Documenting bottlenecks, technical constraints, and operating maps inside active industries.
            </p>
          </div>

          <div className="hairline my-12" />

          {/* Grid of papers */}
          <div className="space-y-8">
            {researchPapers.map((paper) => (
              <article
                key={paper.id}
                className="grid gap-4 border-b border-[var(--border)] pb-8 sm:grid-cols-[120px_1fr_120px] items-start"
              >
                <div>
                  <span className="font-mono text-xs text-[var(--fg-subtle)]">{paper.id}</span>
                  <p className="font-mono text-[10px] uppercase text-[var(--fg-subtle)] mt-1">{paper.date}</p>
                </div>
                <div className="space-y-2">
                  <h2 className="font-serif text-2xl font-bold text-[var(--fg)] hover:opacity-85 transition-opacity">
                    {paper.title}
                  </h2>
                  <p className="text-sm leading-relaxed text-[var(--fg-muted)] max-w-3xl">
                    {paper.description}
                  </p>
                  <p className="text-xs font-mono text-[var(--fg-subtle)]">Author: {paper.author}</p>
                </div>
                <div className="sm:text-right">
                  <span className="text-xs font-mono text-[var(--fg-subtle)]">{paper.readTime}</span>
                </div>
              </article>
            ))}
          </div>
        </main>
      </div>

      <SiteFooter />
    </div>
  );
}
