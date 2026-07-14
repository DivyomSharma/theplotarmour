import Link from "next/link";
import { companies, navItems } from "@/lib/site-data";

const contactLinks = [
  { label: "General", email: "hello@theplotarmour.xyz" },
  { label: "Partnerships", email: "partnerships@theplotarmour.xyz" },
  { label: "Press", email: "press@theplotarmour.xyz" },
  { label: "Careers", email: "careers@theplotarmour.xyz" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border)] bg-black">
      <div className="container py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <p className="text-sm font-semibold text-white">PlotArmour Group</p>
            <p className="mt-2 text-xs leading-relaxed text-[var(--fg-muted)]">
              Venture Studio & Technology Holding Company.
              <br />
              Building infrastructure companies.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-wider text-[var(--fg-subtle)]">Navigation</p>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[var(--fg-muted)] transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Companies */}
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-wider text-[var(--fg-subtle)]">Companies</p>
            <ul className="space-y-2">
              {companies.map((c) => (
                <li key={c.slug} className="flex items-center gap-2">
                  <span
                    className="h-1.5 w-1.5 flex-shrink-0 rounded-full"
                    style={{ background: c.accentColor }}
                  />
                  {c.url ? (
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-[var(--fg-muted)] transition-colors hover:text-white"
                    >
                      {c.name}
                    </a>
                  ) : (
                    <Link
                      href={`/companies#${c.slug}`}
                      className="text-sm text-[var(--fg-muted)] transition-colors hover:text-white"
                    >
                      {c.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-wider text-[var(--fg-subtle)]">Contact</p>
            <ul className="space-y-2">
              {contactLinks.map((c) => (
                <li key={c.label}>
                  <a
                    href={`mailto:${c.email}`}
                    className="text-sm text-[var(--fg-muted)] transition-colors hover:text-white"
                  >
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-[var(--border)] pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-[var(--fg-subtle)]">
            © {new Date().getFullYear()} PlotArmour Group. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-[var(--fg-subtle)] transition-colors hover:text-[var(--fg-muted)]">
              Privacy
            </a>
            <a href="#" className="text-xs text-[var(--fg-subtle)] transition-colors hover:text-[var(--fg-muted)]">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
