import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import type { NavItem } from "@/lib/site-data";

type DetailPageProps = {
  eyebrow: string;
  title: string;
  summary: string;
  liveUrl?: string;
  highlights: string[];
  ctas: NavItem[];
};

export function DetailPage({
  eyebrow,
  title,
  summary,
  liveUrl,
  highlights,
  ctas,
}: DetailPageProps) {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--fg)] flex flex-col justify-between">
      <div>
        <SiteHeader />

        <main className="container py-16 lg:py-24">
          {/* Header */}
          <div className="max-w-4xl space-y-6">
            <div className="magazine-label">{eyebrow}</div>
            <h1 className="font-serif text-[clamp(2.5rem,7vw,4.5rem)] font-bold leading-[1.08] tracking-tight text-[var(--fg)]">
              {title}
            </h1>
            <p className="font-serif text-xl md:text-2xl italic leading-relaxed text-[var(--fg-muted)]">
              {summary}
            </p>
          </div>

          <div className="hairline my-12" />

          {/* Body */}
          <div className="grid gap-12 lg:grid-cols-[1.6fr_0.8fr]">
            {/* Highlights */}
            <div className="space-y-6">
              <h2 className="text-xs font-mono uppercase tracking-wider text-[var(--fg-subtle)]">
                Core Directives
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {highlights.map((item) => (
                  <div
                    key={item}
                    className="editorial-card rounded-xl p-6 border border-[var(--border)] bg-[var(--surface)] text-[var(--fg)] hover:border-[var(--border-hover)]"
                  >
                    <p className="text-sm font-medium leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-6">
              <h2 className="text-xs font-mono uppercase tracking-wider text-[var(--fg-subtle)]">
                Actions
              </h2>
              <div className="flex flex-col gap-3">
                {liveUrl && (
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary w-full text-center justify-center"
                  >
                    Launch Live Site ↗
                  </a>
                )}
                {ctas.map((cta) => (
                  <Link
                    key={cta.href}
                    href={cta.href}
                    className="btn-secondary w-full text-center justify-center"
                  >
                    {cta.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>

      <SiteFooter />
    </div>
  );
}
