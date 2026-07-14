import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = buildMetadata({
  title: "Careers",
  description:
    "Join PlotArmour. We are looking for builders, researchers, engineers, and operators who want to build infrastructure companies that define new categories.",
  path: "/careers",
  keywords: ["careers PlotArmour", "jobs at PlotArmour", "venture studio careers", "infrastructure company jobs India"],
});

const values = [
  { title: "Ownership", body: "Everyone here owns something real. You are not a resource in a process — you are a builder with accountability." },
  { title: "Curiosity", body: "We work on hard problems in large industries. The ability to learn fast and change your mind is more valuable than credentials." },
  { title: "Small teams", body: "We run lean. Small teams move faster, communicate better, and produce higher quality work than large departments." },
  { title: "Fast execution", body: "We ship. We iterate. We do not sit in planning phases for quarters. Decisions get made and work gets done." },
  { title: "High standards", body: "We build things we are proud of. Quality is a value, not a phase." },
  { title: "Long-term thinking", body: "We are building infrastructure. That takes years. If you want fast money, this is probably not the right place." },
];

const openRoles = [
  { title: "Product Engineer", company: "Keystone", type: "Full-time", location: "Remote / India" },
  { title: "Product Designer", company: "PlotArmour Studio", type: "Full-time", location: "Remote / India" },
  { title: "Business Analyst", company: "Verity", type: "Full-time", location: "Remote / India" },
  { title: "Growth Associate", company: "Convoke", type: "Full-time", location: "Remote / India" },
];

const internships = [
  { title: "Engineering Intern", company: "PlotArmour Studio", duration: "3–6 months" },
  { title: "Design Intern", company: "PlotArmour Studio", duration: "3–6 months" },
  { title: "Research Intern", company: "Multiple", duration: "2–4 months" },
  { title: "Product Intern", company: "Multiple", duration: "3–6 months" },
];

export default function CareersPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-black text-white">
        {/* Header */}
        <section className="section pt-32">
          <div className="container">
            <p className="label mb-6">Careers</p>
            <h1 className="max-w-4xl text-balance text-5xl font-semibold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Build things that matter at scale.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--fg-muted)]">
              We are a small team building multiple category-defining infrastructure companies. If you like hard problems, ownership, and shipping, read on.
            </p>
          </div>
        </section>

        {/* Values */}
        <section className="section-sm">
          <div className="container">
            <div className="hairline mb-12" />
            <p className="label mb-8">What we value</p>
            <div className="grid gap-px border border-[var(--border)] rounded-2xl overflow-hidden bg-[var(--border)] sm:grid-cols-2 lg:grid-cols-3">
              {values.map((v) => (
                <div key={v.title} className="bg-black p-6">
                  <p className="font-semibold text-white">{v.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--fg-muted)]">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open roles */}
        <section className="section-sm">
          <div className="container">
            <div className="hairline mb-12" />
            <p className="label mb-8">Open positions</p>
            <div className="space-y-2">
              {openRoles.map((role) => (
                <div
                  key={role.title + role.company}
                  className="flex flex-col gap-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 transition-colors hover:border-[var(--border-hover)] sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <p className="font-semibold text-white">{role.title}</p>
                    <p className="text-sm text-[var(--fg-muted)]">{role.company} · {role.location}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="rounded-full border border-[var(--border)] px-3 py-0.5 text-xs text-[var(--fg-muted)]">
                      {role.type}
                    </span>
                    <a
                      href="mailto:careers@theplotarmour.xyz"
                      className="btn-secondary text-sm"
                      style={{ padding: "0.4rem 1rem" }}
                    >
                      Apply →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Internships */}
        <section className="section-sm">
          <div className="container">
            <div className="hairline mb-12" />
            <p className="label mb-8">Internships & Fellowships</p>
            <div className="grid gap-3 sm:grid-cols-2">
              {internships.map((role) => (
                <div
                  key={role.title}
                  className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5"
                >
                  <p className="font-semibold text-white">{role.title}</p>
                  <p className="mt-1 text-sm text-[var(--fg-muted)]">{role.company} · {role.duration}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-[var(--fg-muted)]">
              All internship applications:{" "}
              <a href="mailto:careers@theplotarmour.xyz" className="text-white underline-offset-2 hover:underline">
                careers@theplotarmour.xyz
              </a>
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="section">
          <div className="container">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-10 text-center sm:p-14">
              <p className="label mx-auto mb-4 justify-center">Don't see your role?</p>
              <h2 className="mx-auto max-w-xl text-balance text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
                We always want to hear from exceptional people.
              </h2>
              <div className="mt-8">
                <a href="mailto:careers@theplotarmour.xyz" className="btn-primary">
                  Introduce yourself
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
