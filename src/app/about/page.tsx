import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "PlotArmour is a venture studio and technology holding company. Learn about our mission, vision, philosophy, and how we build independent infrastructure companies.",
  path: "/about",
  keywords: ["about PlotArmour", "venture studio India", "technology holding company", "operating model"],
});

const operatingModel = [
  { step: "01", title: "Research", description: "We identify fundamental operational gaps in large, underserved industries." },
  { step: "02", title: "Validation", description: "We test the market, talk to operators, and understand the structural constraints before building." },
  { step: "03", title: "Studio", description: "PlotArmour Studio designs, engineers, and launches the initial product in a concentrated sprint." },
  { step: "04", title: "Independent Company", description: "The product becomes an independent company with its own brand, identity, leadership, and roadmap." },
  { step: "05", title: "Scaling", description: "The company scales with dedicated resources, sales, and customer success independent of the parent." },
  { step: "06", title: "Potential Spinout", description: "At maturity, companies may raise external capital, take on partners, or operate as fully autonomous entities." },
];

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-black text-white">
        {/* Header */}
        <section className="section pt-32">
          <div className="container">
            <p className="label mb-6">About</p>
            <h1 className="max-w-4xl text-balance text-5xl font-semibold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              We build companies that build industries.
            </h1>
          </div>
        </section>

        {/* What is PlotArmour */}
        <section className="section-sm">
          <div className="container">
            <div className="hairline mb-12" />
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <p className="label mb-4">What is PlotArmour</p>
                <h2 className="text-2xl font-semibold tracking-tight">
                  A technology holding company, not a studio or agency.
                </h2>
              </div>
              <div className="space-y-4 text-[var(--fg-muted)]">
                <p className="leading-relaxed">
                  PlotArmour Group is a venture studio and technology holding company building independent infrastructure businesses across India and beyond.
                </p>
                <p className="leading-relaxed">
                  We do not take external clients. We do not run campaigns. We build companies from scratch, invest our own time and resources, and grow them into independent, category-defining businesses.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section-sm">
          <div className="container">
            <div className="hairline mb-12" />
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8">
                <p className="label mb-4">Mission</p>
                <p className="text-xl font-semibold leading-snug text-white">
                  Build infrastructure companies that redefine how industries operate.
                </p>
              </div>
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8">
                <p className="label mb-4">Vision</p>
                <p className="text-xl font-semibold leading-snug text-white">
                  To become one of India's most respected technology groups by building category-defining businesses that solve real operational problems.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="section-sm">
          <div className="container">
            <div className="hairline mb-12" />
            <p className="label mb-8">Philosophy</p>
            <div className="space-y-0 divide-y divide-[var(--border)]">
              {[
                ["We don't chase trends.", "We build systems."],
                ["We don't create apps.", "We build infrastructure."],
                ["We don't build features.", "We build companies."],
              ].map(([prefix, suffix]) => (
                <div key={prefix} className="py-5 text-xl font-medium">
                  <span className="text-[var(--fg-muted)]">{prefix} </span>
                  <span className="text-white">{suffix}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Operating Model */}
        <section className="section">
          <div className="container">
            <div className="hairline mb-12" />
            <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
              <div>
                <p className="label mb-4">Operating Model</p>
                <h2 className="text-2xl font-semibold leading-tight tracking-tight">
                  How we take a company from idea to independent.
                </h2>
                <p className="mt-4 text-sm text-[var(--fg-muted)]">
                  This is what differentiates PlotArmour from incubators, accelerators, and agencies.
                </p>
              </div>
              <div className="space-y-0">
                {operatingModel.map((step, i) => (
                  <div
                    key={step.step}
                    className="grid grid-cols-[3rem_1fr] gap-4 border-b border-[var(--border)] py-6"
                  >
                    <p className="text-sm font-medium tabular-nums text-[var(--fg-subtle)]">{step.step}</p>
                    <div>
                      <p className="font-semibold text-white">{step.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-[var(--fg-muted)]">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-sm">
          <div className="container">
            <div className="hairline mb-12" />
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-lg text-lg font-medium text-white">
                Interested in what we are building?
              </p>
              <div className="flex gap-3">
                <Link href="/companies" className="btn-primary">
                  See the companies
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Get in touch
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
