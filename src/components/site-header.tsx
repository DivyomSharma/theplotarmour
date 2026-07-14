"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { navItems } from "@/lib/site-data";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-[var(--border)] bg-black/80 backdrop-blur-xl" : ""
      }`}
    >
      <div className="container-wide flex items-center justify-between gap-8 py-5">
        {/* Wordmark */}
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-white/90 transition-colors hover:text-white"
        >
          PlotArmour
        </Link>

        {/* Nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative rounded-full px-3.5 py-1.5 text-sm transition-colors ${
                  isActive ? "text-white" : "text-[var(--fg-muted)] hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 -z-10 rounded-full bg-white/8"
                    transition={{ type: "spring", stiffness: 500, damping: 40 }}
                  />
                )}
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <Link href="/contact" className="btn-primary hidden text-sm md:inline-flex" style={{ padding: "0.5rem 1.25rem" }}>
          Get in touch
        </Link>
      </div>
    </header>
  );
}
