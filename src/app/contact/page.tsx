import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Contact PlotArmour Group for partnerships, press, careers, or general enquiries.",
  path: "/contact",
  keywords: ["contact PlotArmour", "partnerships", "press enquiries", "PlotArmour founder"],
});

const channels = [
  {
    label: "General",
    email: "hello@theplotarmour.xyz",
    description: "Questions about PlotArmour, our model, or the portfolio.",
  },
  {
    label: "Partnerships",
    email: "partnerships@theplotarmour.xyz",
    description: "Strategic partnerships, distribution, and commercial opportunities.",
  },
  {
    label: "Press",
    email: "press@theplotarmour.xyz",
    description: "Media enquiries, interviews, and editorial requests.",
  },
  {
    label: "Careers",
    email: "careers@theplotarmour.xyz",
    description: "Roles, internships, and open applications.",
  },
  {
    label: "Founder",
    email: "founder@theplotarmour.xyz",
    description: "Direct conversations about investing, co-building, or strategic alignment.",
  },
];

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-black text-white">
        {/* Header */}
        <section className="section pt-32">
          <div className="container">
            <p className="label mb-6">Contact</p>
            <h1 className="max-w-3xl text-balance text-5xl font-semibold leading-tight tracking-tight sm:text-6xl">
              Let's talk.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--fg-muted)]">
              Use the right channel and we will get back to you.
            </p>
          </div>
        </section>

        {/* Channels */}
        <section className="section">
          <div className="container">
            <div className="space-y-2">
              {channels.map((ch) => (
                <a
                  key={ch.label}
                  href={`mailto:${ch.email}`}
                  className="group flex flex-col gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-all hover:border-[var(--border-hover)] hover:bg-[var(--surface-hover)] sm:flex-row sm:items-center sm:justify-between sm:gap-8"
                >
                  <div>
                    <p className="font-semibold text-white">{ch.label}</p>
                    <p className="mt-1 text-sm text-[var(--fg-muted)]">{ch.description}</p>
                  </div>
                  <p className="flex-shrink-0 text-sm text-[var(--fg-muted)] transition-colors group-hover:text-white">
                    {ch.email} →
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
