"use client";

import { useState, useEffect } from "react";

interface SplashProps {
  onComplete: () => void;
}

export default function Splash({ onComplete }: SplashProps) {
  const [phase, setPhase] = useState<"entering" | "visible" | "exiting" | "done">("entering");

  useEffect(() => {
    // Phase 1: Fade in (800ms)
    const enterTimer = setTimeout(() => setPhase("visible"), 50);
    // Phase 2: Hold (1600ms after visible)
    const holdTimer = setTimeout(() => setPhase("exiting"), 2000);
    // Phase 3: Fade out (600ms)
    const exitTimer = setTimeout(() => {
      setPhase("done");
      onComplete();
    }, 2800);

    return () => {
      clearTimeout(enterTimer);
      clearTimeout(holdTimer);
      clearTimeout(exitTimer);
    };
  }, [onComplete]);

  if (phase === "done") return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "var(--color-bg)",
        zIndex: 1000,
        opacity: phase === "entering" ? 0 : phase === "exiting" ? 0 : 1,
        transition: "opacity 800ms cubic-bezier(0.25, 0.1, 0.25, 1)",
      }}
    >
      <h1
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "clamp(2rem, 5vw, 3.5rem)",
          fontWeight: 400,
          color: "var(--color-fg)",
          letterSpacing: "-0.02em",
          transform: phase === "entering" ? "translateY(8px)" : "translateY(0)",
          opacity: phase === "entering" ? 0 : phase === "exiting" ? 0 : 1,
          transition:
            "opacity 800ms cubic-bezier(0.25, 0.1, 0.25, 1), transform 800ms cubic-bezier(0.25, 0.1, 0.25, 1)",
        }}
      >
        Seaway Think
      </h1>
    </div>
  );
}
