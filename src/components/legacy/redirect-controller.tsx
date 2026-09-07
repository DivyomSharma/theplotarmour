"use client";

import { useEffect, useRef, useState } from "react";
import { NEW_HOME_LABEL, NEW_HOME_URL } from "@/lib/legacy-ventures";

const DURATION_MS = 10_000;

export function RedirectController() {
  const [cancelled, setCancelled] = useState(false);
  const [progress, setProgress] = useState(0);
  const startRef = useRef<number | null>(null);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    if (cancelled) return;

    startRef.current = performance.now();

    const tick = (now: number) => {
      const elapsed = now - (startRef.current ?? now);
      const pct = Math.min(100, (elapsed / DURATION_MS) * 100);
      setProgress(pct);

      if (pct >= 100) {
        window.location.href = NEW_HOME_URL;
        return;
      }
      frameRef.current = requestAnimationFrame(tick);
    };

    frameRef.current = requestAnimationFrame(tick);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [cancelled]);

  const secondsLeft = Math.max(0, Math.ceil((DURATION_MS - (progress / 100) * DURATION_MS) / 1000));

  if (cancelled) {
    return (
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--fg-subtle)]">
        Automatic redirect cancelled.
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-3 w-full max-w-xs" role="status" aria-live="polite">
      <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--fg-muted)]">
        <span>Redirecting to {NEW_HOME_LABEL}</span>
        <span>{secondsLeft}s</span>
      </div>
      <div className="h-[2px] w-full bg-[var(--border)] overflow-hidden">
        <div
          className="h-full bg-[var(--fg)]"
          style={{ width: `${progress}%`, transition: "width 100ms linear" }}
        />
      </div>
      <button
        type="button"
        onClick={() => setCancelled(true)}
        className="self-start font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--fg)] underline underline-offset-4 decoration-[var(--border-hover)] hover:decoration-[var(--fg)] transition-colors"
      >
        Stay here
      </button>
    </div>
  );
}
