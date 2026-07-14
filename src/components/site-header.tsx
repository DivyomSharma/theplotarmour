"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/site-data";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="border-b border-[var(--border)] bg-[var(--bg)]/80 backdrop-blur-md sticky top-0 z-50 transition-colors">
      <div className="container-wide py-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="font-serif text-2xl font-bold tracking-tight text-[var(--fg)] hover:opacity-80 transition-opacity"
          >
            PlotArmour
          </Link>
        </div>
        <nav className="flex flex-wrap items-center gap-x-5 gap-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`font-sans text-xs uppercase tracking-wider transition-colors py-1 ${
                  isActive
                    ? "text-[var(--fg)] font-semibold border-b border-[var(--fg)]"
                    : "text-[var(--fg-muted)] hover:text-[var(--fg)]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
