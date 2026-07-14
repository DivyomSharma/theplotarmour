import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Our Team",
  description:
    "Meet the founders, directors, and operators leading the PlotArmour Group portfolio companies.",
  path: "/team",
  keywords: ["team", "leadership", "founders", "operators"],
});

const leaders = [
  { name: "Divyom Sharma", title: "Founder & MD", company: "PlotArmour Group" },
  { name: "Nakshatra Aggarwal", title: "Co-Founder & CEO", company: "PlotArmour Store" },
  { name: "Rishit Sansanwal", title: "Co-Founder & CTO", company: "PlotArmour Studio" },
  { name: "Ujjwal Khera", title: "Co-Founder & COO", company: "Suruchi" },
  { name: "Ayushmaan Gaur", title: "Digital Brand Experience", company: "Elev8 Media" },
  { name: "Aryan Samantaray", title: "Creative Director", company: "Aryn" },
];

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--fg)] flex flex-col justify-between transition-colors">
      <div>
        <SiteHeader />

        <main className="container py-16 lg:py-24">
          <div className="max-w-4xl space-y-6">
            <span className="magazine-label">Operators</span>
            <h1 className="font-serif text-[clamp(2.5rem,7vw,4.5rem)] font-bold leading-tight tracking-tight text-[var(--fg)]">
              The Leadership Core.
            </h1>
            <p className="font-serif text-xl italic text-[var(--fg-muted)] leading-relaxed max-w-2xl">
              Meet the builders and operators heading our portfolio companies.
            </p>
          </div>

          <div className="hairline my-12" />

          {/* Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {leaders.map((leader) => (
              <div
                key={leader.name}
                className="editorial-card rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-all hover:border-[var(--border-hover)] flex flex-col justify-between min-h-[140px]"
              >
                <div>
                  <h3 className="font-serif text-xl font-bold text-[var(--fg)]">{leader.name}</h3>
                  <p className="text-xs font-mono uppercase tracking-wider text-[var(--fg-subtle)] mt-1">
                    {leader.title}
                  </p>
                </div>
                <div className="mt-4 text-xs font-mono text-[var(--fg-muted)]">
                  {leader.company}
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      <SiteFooter />
    </div>
  );
}
