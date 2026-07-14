import Link from "next/link";
import { companies, navItems } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg)] mt-20">
      <div className="container py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Masthead / Info */}
          <div>
            <p className="font-serif text-lg font-bold text-[var(--fg)]">PlotArmour Group</p>
            <p className="mt-4 text-xs font-mono uppercase tracking-wider text-[var(--fg-subtle)]">
              EST. 2023 · IN
            </p>
            <p className="mt-2 text-xs leading-relaxed text-[var(--fg-muted)]">
              Building category-defining infrastructure companies across modern enterprise operations.
            </p>
          </div>

          {/* Directory */}
          <div>
            <p className="text-xs font-mono uppercase tracking-wider text-[var(--fg-subtle)] mb-4">
              Directory
            </p>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Companies */}
          <div>
            <p className="text-xs font-mono uppercase tracking-wider text-[var(--fg-subtle)] mb-4">
              Sections
            </p>
            <ul className="space-y-2">
              {companies.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/companies#${c.slug}`}
                    className="text-sm text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors flex items-center gap-2"
                  >
                    <span
                      className="h-1.5 w-1.5 rounded-full"
                      style={{ background: c.accentColor }}
                    />
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Inquiries */}
          <div>
            <p className="text-xs font-mono uppercase tracking-wider text-[var(--fg-subtle)] mb-4">
              Inquiries
            </p>
            <ul className="space-y-2 text-sm text-[var(--fg-muted)]">
              <li>
                <span>General: </span>
                <a href="mailto:hello@theplotarmour.xyz" className="text-[var(--fg)] hover:underline">
                  hello@theplotarmour.xyz
                </a>
              </li>
              <li>
                <span>Partners: </span>
                <a href="mailto:partnerships@theplotarmour.xyz" className="text-[var(--fg)] hover:underline">
                  partnerships@theplotarmour.xyz
                </a>
              </li>
              <li>
                <span>Careers: </span>
                <a href="mailto:careers@theplotarmour.xyz" className="text-[var(--fg)] hover:underline">
                  careers@theplotarmour.xyz
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--fg-subtle)] font-mono">
          <p>© {new Date().getFullYear()} PlotArmour Group. All rights reserved.</p>
          <div className="flex gap-4">
            <span className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
              SYSTEMS ONLINE
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
