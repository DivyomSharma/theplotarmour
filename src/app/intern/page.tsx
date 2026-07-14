import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Internships",
  description:
    "Participate in real project builds at the PlotArmour Group. Details on role tracks, guidelines, and performance reviews.",
  path: "/intern",
  keywords: ["internship", "design intern", "engineering intern", "sprint tracks"],
});

const tracks = [
  { title: "Systems Engineering", desc: "Building high-performance APIs, Edge workers, telemetry pipelines, and web components." },
  { title: "Brand & Design", desc: "Constructing modular layout libraries, naming assets, visual guides, and product design systems." },
  { title: "Applied AI Research", desc: "Automating validation flows, implementing multi-agent frameworks, and compiling reports." },
];

export default function InternPage() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--fg)] flex flex-col justify-between transition-colors">
      <div>
        <SiteHeader />

        <main className="container py-16 lg:py-24">
          <div className="max-w-4xl space-y-6">
            <span className="magazine-label">Build Track</span>
            <h1 className="font-serif text-[clamp(2.5rem,7vw,4.5rem)] font-bold leading-tight tracking-tight text-[var(--fg)]">
              Intern at the execution layer.
            </h1>
            <p className="font-serif text-xl italic text-[var(--fg-muted)] leading-relaxed max-w-2xl">
              We design structured internships tied to real product output. Contribute to active systems across our portfolio companies.
            </p>
          </div>

          <div className="hairline my-12" />

          {/* Grid of tracks */}
          <div className="grid gap-6 sm:grid-cols-3">
            {tracks.map((track) => (
              <div
                key={track.title}
                className="editorial-card rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-all hover:border-[var(--border-hover)]"
              >
                <h3 className="font-serif text-lg font-bold text-[var(--fg)]">{track.title}</h3>
                <p className="mt-3 text-xs leading-relaxed text-[var(--fg-muted)]">{track.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center p-8 border border-[var(--border)] rounded-2xl bg-[var(--surface)]">
            <h2 className="font-serif text-2xl font-bold mb-2">Apply for Onboarding</h2>
            <p className="text-sm text-[var(--fg-muted)] mb-6">
              Role fits are evaluated based on execution capacity, portfolios, and alignment with active system builds.
            </p>
            <a
              href="mailto:careers@theplotarmour.xyz?subject=Internship Application"
              className="btn-primary"
            >
              Submit Application
            </a>
          </div>
        </main>
      </div>

      <SiteFooter />
    </div>
  );
}
