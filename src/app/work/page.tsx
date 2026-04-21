import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { workItems } from "@/lib/site-data";

export default function WorkPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#040507] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.14),_transparent_28%),radial-gradient(circle_at_80%_10%,_rgba(249,115,22,0.14),_transparent_24%)]" />
      <SiteHeader />
      <section className="section-shell relative z-10 py-28">
        <div className="max-w-4xl space-y-6">
          <p className="section-label">Work</p>
          <h1 className="font-display text-5xl uppercase tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
            Signals from across the system.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-white/72">
            Multiplayer games, AI products, and legal learning tools built through the same
            operating pipeline.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-12">
          {workItems.map((item) => (
            <div
              key={item.name}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 transition duration-300 hover:-translate-y-1.5 xl:col-span-4"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.accent} opacity-75 transition duration-500 group-hover:scale-105`} />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,5,7,0.05),rgba(4,5,7,0.84))]" />
              <div className="relative z-10 flex min-h-[360px] flex-col justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.32em] text-white/48">
                    {item.category}
                  </p>
                  <h2 className="font-display mt-5 text-4xl uppercase tracking-[-0.04em] text-white">
                    {item.name}
                  </h2>
                </div>
                <div>
                  <p className="max-w-sm text-base leading-7 text-white/72">
                    {item.summary}
                  </p>
                  <div className="mt-6 flex items-center justify-between gap-3">
                    <p className="text-xs uppercase tracking-[0.3em] text-white/48">
                      {item.state}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs uppercase tracking-[0.3em] text-white/72 transition duration-300 group-hover:text-white"
                      >
                        Open project
                      </a>
                    ) : (
                      <span className="text-xs uppercase tracking-[0.3em] text-white/38">
                        Internal concept
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Link
            href="/"
            className="cta-secondary"
          >
            Back to PlotArmour
          </Link>
        </div>
      </section>
    </main>
  );
}
