import type { Venture } from "@/lib/legacy-ventures";

const statusDot: Record<Venture["status"], string> = {
  ACTIVE: "bg-emerald-500",
  BUILDING: "bg-amber-500",
};

export function VentureCard({
  venture,
  featured = false,
}: {
  venture: Venture;
  featured?: boolean;
}) {
  return (
    <a
      href={venture.url}
      target="_blank"
      rel="noreferrer"
      aria-label={`${venture.name} — ${venture.category}, ${venture.status.toLowerCase()}. Opens ${venture.domain}.`}
      className="group relative flex h-full flex-col justify-between border border-[var(--border)] bg-[var(--surface)] p-6 transition-colors duration-200 hover:border-[var(--border-hover)] hover:bg-[var(--surface-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--fg)]"
    >
      <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--fg-subtle)]">
        <span>{venture.number} / 07</span>
        <span className="flex items-center gap-1.5">
          <span className={`h-1.5 w-1.5 rounded-full ${statusDot[venture.status]}`} aria-hidden="true" />
          {venture.status}
        </span>
      </div>

      <div className={featured ? "mt-10" : "mt-8"}>
        <h3
          className={`font-serif font-semibold tracking-tight text-[var(--fg)] transition-transform duration-200 group-hover:translate-x-1 ${
            featured ? "text-4xl md:text-6xl" : "text-2xl md:text-3xl"
          }`}
        >
          {venture.name}
        </h3>
        <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--fg-muted)]">
          {venture.category}
        </p>
      </div>

      <div className="mt-8 flex items-center justify-between border-t border-[var(--border)] pt-4 font-sans text-sm text-[var(--fg-muted)]">
        <span>{venture.domain}</span>
        <span
          aria-hidden="true"
          className="inline-block transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
        >
          ↗
        </span>
      </div>
    </a>
  );
}
