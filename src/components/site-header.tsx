"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { navItems } from "@/lib/site-data";

function resolveActiveHref(pathname: string) {
  if (pathname === "/") {
    return "";
  }

  return navItems.find((item) => pathname === item.href || pathname.startsWith(`${item.href}/`))
    ?.href ?? "";
}

export function SiteHeader() {
  const pathname = usePathname();
  const [pendingHref, setPendingHref] = useState("");
  const activeHref = pendingHref || resolveActiveHref(pathname);

  useEffect(() => {
    setPendingHref("");
  }, [pathname]);

  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <div className="section-shell flex items-center justify-between gap-6 py-6">
        <Link
          href="/"
          className="font-display text-sm uppercase tracking-[0.4em] text-white/88 transition duration-300 hover:text-white"
        >
          PlotArmour
        </Link>
        <nav className="hidden items-center rounded-full border border-white/10 bg-black/25 p-1.5 text-sm text-white/68 shadow-[0_18px_50px_rgba(0,0,0,0.24)] backdrop-blur md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setPendingHref(item.href)}
              aria-current={activeHref === item.href ? "page" : undefined}
              className={`nav-pill-link ${
                activeHref === item.href ? "text-white" : "text-white/68 hover:text-white"
              }`}
            >
              {activeHref === item.href ? (
                <motion.span
                  layoutId="nav-pill"
                  className="nav-pill-bg absolute inset-0 -z-10 rounded-full border border-white/10"
                  transition={{ type: "spring", stiffness: 420, damping: 34, mass: 0.8 }}
                />
              ) : null}
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
