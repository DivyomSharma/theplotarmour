import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Experiments Lab",
  description: "R&D prototypes, hardware blueprints, and early operations testing at PlotArmour.",
  path: "/experiments",
});

const experiments = [
  { name: "Project Sentinel", type: "Telemetry Integration", desc: "Translating device sensors to direct manufacturing workflows." },
  { name: "Vera Node", type: "AI Agent Orchestrator", desc: "Multi-party contract validation and regulatory compliance matching." },
  { name: "PlotPack", type: "Design System Tokens", desc: "Modular interface patterns built for spatial and mobile layouts." },
];

export default function ExperimentsPage() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--fg)] flex flex-col justify-between transition-colors">
      <div>
        <SiteHeader />
        <main className="container py-16 lg:py-24">
          <div className="max-w-4xl space-y-6">
            <span className="magazine-label">Research & Development</span>
            <h1 className="font-serif text-[clamp(2.5rem,7vw,4.5rem)] font-bold leading-tight tracking-tight text-[var(--fg)]">
              Active Experiments.
            </h1>
            <p className="font-serif text-xl italic text-[var(--fg-muted)] leading-relaxed max-w-2xl">
              Unreleased prototypes, system tests, and hardware blueprints being validated in the venture lab.
            </p>
          </div>
          <div className="hairline my-12" />
          <div className="grid gap-6 sm:grid-cols-3">
            {experiments.map((exp) => (
              <div key={exp.name} className="editorial-card rounded-2xl border border-[var(--border)] p-6 bg-[var(--surface)]">
                <span className="font-mono text-xs text-[var(--fg-subtle)]">{exp.type}</span>
                <h3 className="font-serif text-lg font-bold mt-4 text-[var(--fg)]">{exp.name}</h3>
                <p className="mt-2 text-xs leading-relaxed text-[var(--fg-muted)]">{exp.desc}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
      <SiteFooter />
    </div>
  );
}
