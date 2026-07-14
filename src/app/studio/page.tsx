import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = buildMetadata({
  title: "Studio",
  description:
    "PlotArmour Studio is the internal execution engine behind every PlotArmour company. Brand, design, engineering, AI, research, product, growth, and media.",
  path: "/studio",
  keywords: ["PlotArmour Studio", "internal innovation studio", "brand engineering", "product design"],
});

const capabilities = [
  { name: "Brand", description: "Identity systems built to last. Naming, visual language, tone, and positioning for each company." },
  { name: "Research", description: "Market research, industry analysis, user research, and validation before a single line is written." },
  { name: "Engineering", description: "Full-stack product development, infrastructure, APIs, and platforms built for scale." },
  { name: "AI", description: "Applied AI across product, operations, and internal tooling. Not buzzwords. Actual systems." },
  { name: "Design", description: "Product design, UX, interaction design, and design systems that serve the product's purpose." },
  { name: "Product", description: "Product strategy, roadmaps, prioritisation, and delivery across every portfolio company." },
  { name: "Growth", description: "Distribution strategy, acquisition, and early market development for each new company." },
  { name: "Media", description: "Editorial, content infrastructure, and communication for launches and ongoing positioning." },
];

export default function StudioPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-black text-white">
        {/* Header */}
        <section className="section pt-32">
          <div className="container">
            <p className="label mb-6" style={{ color: "#7c3aed" }}>PlotArmour Studio</p>
            <h1 className="max-w-4xl text-balance text-5xl font-semibold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              The execution engine behind the portfolio.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--fg-muted)]">
              PlotArmour Studio is not an agency. It is the internal team that brings every portfolio company to life — from first principles through to launch and beyond.
            </p>
          </div>
        </section>

        {/* Not an agency */}
        <section className="section-sm">
          <div className="container">
            <div className="hairline mb-12" />
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight">Studio exists to accelerate companies.</h2>
              </div>
              <div className="space-y-4 text-[var(--fg-muted)]">
                <p className="leading-relaxed">
                  Every PlotArmour company benefits from the same concentrated capability: a team that can research, design, build, and ship at a pace that external agencies cannot match.
                </p>
                <p className="leading-relaxed">
                  Studio does not serve external clients. It serves the portfolio. This allows each company to move fast without sacrificing quality or strategic coherence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="section">
          <div className="container">
            <div className="hairline mb-12" />
            <p className="label mb-8">Capabilities</p>
            <div className="grid gap-px border border-[var(--border)] rounded-2xl overflow-hidden bg-[var(--border)] sm:grid-cols-2 lg:grid-cols-4">
              {capabilities.map((cap) => (
                <div key={cap.name} className="bg-black p-6">
                  <p className="font-semibold text-white">{cap.name}</p>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--fg-muted)]">{cap.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Studio site CTA */}
        <section className="section-sm">
          <div className="container">
            <div className="hairline mb-12" />
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-lg text-lg font-medium text-white">
                See Studio's full portfolio of work.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://studio.theplotarmour.xyz"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                >
                  Visit Studio ↗
                </a>
                <Link href="/companies" className="btn-secondary">
                  Our companies
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
