import { legacyVentures } from "@/lib/legacy-ventures";
import { VentureCard } from "@/components/legacy/venture-card";

export function VentureGrid() {
  const [neki, verity, convoke, candor, studio, store, merch] = legacyVentures;

  return (
    <section id="index" className="container-wide section-sm">
      <div className="flex flex-col gap-4 border-b border-[var(--border)] pb-10 md:flex-row md:items-end md:justify-between">
        <div>
          <span className="magazine-label">The Index</span>
          <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-[var(--fg)] md:text-5xl">
            Currently public.
          </h2>
        </div>
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--fg-subtle)]">
          07 public properties — 2026
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <VentureCard venture={neki} featured />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <VentureCard venture={verity} />
          <VentureCard venture={convoke} />
          <VentureCard venture={candor} />
          <VentureCard venture={studio} />
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
        <VentureCard venture={store} />
        <VentureCard venture={merch} />
      </div>
    </section>
  );
}
