import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
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
    <main className="relative min-h-screen overflow-hidden bg-[#040507] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(249,115,22,0.14),_transparent_28%),radial-gradient(circle_at_80%_10%,_rgba(14,165,233,0.16),_transparent_24%)]" />
      <SiteHeader />
      <section className="section-shell relative z-10 flex min-h-screen flex-col justify-center gap-12 py-28">
        <div className="max-w-4xl space-y-6">
          <p className="section-label">{eyebrow}</p>
          <h1 className="font-display max-w-4xl text-5xl uppercase tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-white/72 sm:text-xl">
            {summary}
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.4fr_0.9fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur">
            <p className="section-label">Focus</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-5 text-lg text-white/84"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur">
            <p className="section-label">Next</p>
            <div className="mt-6 flex flex-col gap-3">
              {liveUrl ? (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="cta-primary"
                >
                  Open Live Site
                </a>
              ) : null}

              {ctas.map((cta) => (
                <Link
                  key={cta.href}
                  href={cta.href}
                  className="cta-secondary"
                >
                  {cta.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
