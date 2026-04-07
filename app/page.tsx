"use client";

import { useState, useEffect } from "react";
import MenuButton from "@/components/MenuButton";
import Menu from "@/components/Menu";
import Typewriter from "@/components/Typewriter";
import { CATEGORIES } from "@/lib/categories";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [subtitleVisible, setSubtitleVisible] = useState(false);

  useEffect(() => {
    // Fade in the subheading after a short delay
    const timer = setTimeout(() => setSubtitleVisible(true), 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
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
          <Typewriter />

          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "var(--text-base)",
              color: "var(--color-fg-tertiary)",
              letterSpacing: "0.02em",
              marginTop: "var(--space-lg)",
              opacity: subtitleVisible ? 1 : 0,
              transition: "opacity 800ms ease",
            }}
          >
            Long-form thinking, organized by thread.
          </p>
        </div>
      </main>
    </div>
  );
}
