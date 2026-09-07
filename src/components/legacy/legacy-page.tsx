import { NEW_HOME_LABEL, NEW_HOME_URL } from "@/lib/legacy-ventures";
import { RedirectController } from "@/components/legacy/redirect-controller";
import { VentureGrid } from "@/components/legacy/venture-grid";

export function LegacyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--bg)] text-[var(--fg)]">
      {/* SECTION 01 — HEADER */}
      <header className="border-b border-[var(--border)]">
        <div className="container-wide flex items-center justify-between py-6">
          <div>
            <span className="font-serif text-xl font-semibold tracking-tight">PlotArmour</span>
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--fg-subtle)]">
              Legacy domain / 2026
            </p>
          </div>
          <a href={NEW_HOME_URL} className="btn-secondary text-xs">
            {NEW_HOME_LABEL} ↗
          </a>
        </div>
      </header>

      <main>
        {/* SECTION 02 — MIGRATION HERO */}
        <section className="container-wide section flex flex-col gap-12">
          <span className="magazine-label">theplotarmour.xyz / final edition</span>

          <div>
            <h1 className="font-display italic text-[clamp(3.5rem,12vw,9rem)] leading-[0.9] tracking-[-0.04em] text-[var(--fg)]">
              We moved.
            </h1>
            <p className="mt-4 font-serif text-[clamp(1.75rem,5vw,3rem)] font-semibold tracking-tight text-[var(--fg-muted)]">
              {NEW_HOME_LABEL}
            </p>
          </div>

          <p className="max-w-xl font-serif text-lg italic leading-relaxed text-[var(--fg-muted)]">
            PlotArmour has moved to a new home. Explore the ecosystem below, or continue directly to{" "}
            {NEW_HOME_LABEL}.
          </p>

          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex flex-wrap items-center gap-4">
              <a href={NEW_HOME_URL} className="btn-primary text-sm px-6 py-3">
                Enter {NEW_HOME_LABEL} ↗
              </a>
              <a href="#index" className="btn-secondary text-sm px-6 py-3">
                Explore the ecosystem ↓
              </a>
            </div>

            <RedirectController />
          </div>
        </section>

        <div className="hairline container-wide" />

        {/* SECTION 03 — ECOSYSTEM STATEMENT */}
        <section className="container-wide section text-center">
          <p className="mx-auto max-w-4xl font-serif text-[clamp(2rem,6vw,4rem)] font-semibold leading-[1.05] tracking-tight text-[var(--fg)]">
            PlotArmour isn&apos;t one product.
            <br />
            <span className="text-[var(--fg-muted)]">It&apos;s the company that builds the products.</span>
          </p>
          <p className="mx-auto mt-8 max-w-xl font-sans text-sm leading-relaxed text-[var(--fg-muted)]">
            Technology, brands, creative products and intellectual property — built across an evolving
            portfolio.
          </p>
        </section>

        <div className="hairline container-wide" />

        {/* SECTION 04 — ECOSYSTEM INDEX */}
        <VentureGrid />

        <div className="hairline container-wide" />

        {/* SECTION 05 — NEW HOME */}
        <section className="container-wide section flex flex-col items-center gap-8 text-center">
          <p className="font-serif text-[clamp(1.75rem,5vw,3rem)] font-semibold leading-tight tracking-tight text-[var(--fg-muted)]">
            The next chapter is at
          </p>
          <h2 className="font-display italic text-[clamp(3rem,10vw,7rem)] leading-[0.9] tracking-[-0.04em] text-[var(--fg)]">
            {NEW_HOME_LABEL}
          </h2>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--fg-subtle)]">
            theplotarmour.xyz is now the old address.
          </p>
          <a href={NEW_HOME_URL} className="btn-primary text-sm px-8 py-4">
            Go to {NEW_HOME_LABEL} ↗
          </a>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-[var(--border)]">
        <div className="container-wide flex flex-col gap-8 py-12 md:flex-row md:items-start md:justify-between">
          <div>
            <span className="font-serif text-lg font-semibold tracking-tight">PlotArmour</span>
            <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--fg-subtle)]">
              Multi-vertical company
              <br />
              Technology / Creativity / Storytelling
            </p>
          </div>
          <div className="flex flex-col gap-2 md:items-end">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--fg-subtle)]">
              India / 2026
            </span>
            <a
              href={NEW_HOME_URL}
              className="font-sans text-sm text-[var(--fg)] underline underline-offset-4 decoration-[var(--border-hover)] hover:decoration-[var(--fg)] transition-colors"
            >
              {NEW_HOME_LABEL} ↗
            </a>
          </div>
        </div>
        <div className="container-wide border-t border-[var(--border)] py-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--fg-subtle)]">
            © 2026 PlotArmour — theplotarmour.xyz — Archived
          </p>
        </div>
      </footer>
    </div>
  );
}
