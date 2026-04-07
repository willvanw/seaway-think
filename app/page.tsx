"use client";

import { useState, useCallback } from "react";
import Splash from "@/components/Splash";
import MenuButton from "@/components/MenuButton";
import Menu from "@/components/Menu";
import { CATEGORIES } from "@/lib/categories";

export default function Home() {
  const [splashComplete, setSplashComplete] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSplashComplete = useCallback(() => {
    setSplashComplete(true);
  }, []);

  return (
    <>
      {!splashComplete && <Splash onComplete={handleSplashComplete} />}

      <div
        style={{
          opacity: splashComplete ? 1 : 0,
          transition: "opacity 600ms ease",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <MenuButton onClick={() => setMenuOpen(true)} />
        <Menu
          categories={CATEGORIES}
          isOpen={menuOpen}
          onClose={() => setMenuOpen(false)}
        />

        {/* Home canvas — intentionally empty, like a title page */}
        <main
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "var(--space-2xl)",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <h1
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                fontWeight: 400,
                color: "var(--color-fg)",
                letterSpacing: "-0.025em",
                lineHeight: 1.1,
                marginBottom: "var(--space-lg)",
              }}
            >
              Seaway Think
            </h1>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "var(--text-base)",
                color: "var(--color-fg-tertiary)",
                letterSpacing: "0.02em",
              }}
            >
              Long-form thinking, organized by thread.
            </p>
          </div>
        </main>
      </div>
    </>
  );
}
