import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = buildMetadata({
  title: "Journal",
  description:
    "Long-form writing from PlotArmour on building infrastructure companies, enterprise software, manufacturing, workforce, and operations.",
  path: "/journal",
  keywords: ["PlotArmour journal", "venture studio writing", "infrastructure company essays", "enterprise technology India"],
});

const entries = [
  {
    slug: "why-we-build-independent-companies",
    date: "July 2026",
    category: "Group",
    title: "Why we build independent companies instead of one platform.",
    description:
      "On the structural decision to build separate companies under a holding model instead of a multi-product SaaS platform — and why it matters for both focus and outcome.",
  },
  {
    slug: "the-infrastructure-gap-in-indian-manufacturing",
    date: "July 2026",
    category: "Manufacturing",
    title: "The infrastructure gap in Indian manufacturing.",
    description:
      "India has the factories. India has the workforce. What India does not have is the software layer that ties it together. That is the problem VEDA exists to solve.",
  },
  {
    slug: "rethinking-workforce-infrastructure",
    date: "June 2026",
    category: "Workforce",
    title: "Rethinking workforce infrastructure at scale.",
    description:
      "Keystone was born from a simple observation: organisations that manage large workforces have no reliable, integrated system to do it. Most are still running on spreadsheets.",
  },
  {
    slug: "what-a-venture-studio-actually-is",
    date: "June 2026",
    category: "Group",
    title: "What a venture studio actually is — and what it is not.",
    description:
      "Not an incubator. Not an accelerator. Not a consulting firm. A venture studio builds companies. Here is how we think about it.",
  },
];

export default function JournalPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-black text-white">
        {/* Header */}
        <section className="section pt-32">
          <div className="container">
            <p className="label mb-6">Journal</p>
            <h1 className="text-5xl font-semibold leading-tight tracking-tight sm:text-6xl">Writing.</h1>
            <p className="mt-4 max-w-xl text-lg text-[var(--fg-muted)]">
              Essays, research, and company updates from the PlotArmour group.
            </p>
          </div>
        </section>

        {/* Entries */}
        <section className="section">
          <div className="container">
            <div className="space-y-0">
              {entries.map((entry) => (
                <article
                  key={entry.slug}
                  className="group border-b border-[var(--border)] py-8 last:border-0"
                >
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex-1">
                      <div className="mb-2 flex items-center gap-3">
                        <span className="text-xs font-medium uppercase tracking-widest text-[var(--fg-subtle)]">
                          {entry.date}
                        </span>
                        <span className="rounded-full border border-[var(--border)] px-2.5 py-0.5 text-xs text-[var(--fg-muted)]">
                          {entry.category}
                        </span>
                      </div>
                      <h2 className="text-xl font-semibold leading-snug text-white transition-colors group-hover:text-white/80 sm:text-2xl">
                        {entry.title}
                      </h2>
                      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[var(--fg-muted)]">
                        {entry.description}
                      </p>
                    </div>
                    <div className="flex-shrink-0 sm:pl-8 sm:pt-1">
                      <span className="text-sm text-[var(--fg-subtle)] transition-colors group-hover:text-white">
                        Read →
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Subscribe / note */}
        <section className="section-sm">
          <div className="container">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 sm:p-10">
              <p className="label mb-4">Stay informed</p>
              <p className="max-w-lg text-lg font-medium text-white">
                We write infrequently, but when we do, it is worth reading.
              </p>
              <p className="mt-2 text-sm text-[var(--fg-muted)]">
                Updates on our companies, the industries we operate in, and how we think about building.
              </p>
              <div className="mt-6">
                <a href="mailto:hello@theplotarmour.xyz?subject=Journal updates" className="btn-secondary">
                  Get updates
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
