"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import MenuButton from "@/components/MenuButton";
import Menu from "@/components/Menu";
import Typewriter from "@/components/Typewriter";
import { CATEGORIES } from "@/lib/categories";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [subtitleVisible, setSubtitleVisible] = useState(false);
  const [linksVisible, setLinksVisible] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setSubtitleVisible(true), 600);
    const t2 = setTimeout(() => setLinksVisible(true), 1200);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <MenuButton isOpen={menuOpen} onClick={() => setMenuOpen(!menuOpen)} />
      <Menu categories={CATEGORIES} isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      <main style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "var(--space-2xl)" }}>
        <div style={{ textAlign: "center" }}>
          <Typewriter />

          <p style={{
            fontFamily: "var(--font-sans)",
            fontSize: "var(--text-base)",
            color: "var(--color-fg-tertiary)",
            letterSpacing: "0.02em",
            marginTop: "var(--space-lg)",
            opacity: subtitleVisible ? 1 : 0,
            transition: "opacity 800ms ease",
          }}>
            Long-form thinking, organized by thread.
          </p>

          {/* Category links — direct path to content */}
          <nav style={{
            marginTop: "var(--space-2xl)",
            opacity: linksVisible ? 1 : 0,
            transform: linksVisible ? "translateY(0)" : "translateY(8px)",
            transition: "opacity 800ms ease, transform 800ms ease",
          }}>
            <p style={{
              fontFamily: "var(--font-sans)",
              fontSize: "var(--text-xs)",
              color: "var(--color-fg-tertiary)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "var(--space-md)",
            }}>
              Thoughts
            </p>
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={`/thoughts/${cat.slug}`}
                style={{
                  display: "block",
                  fontFamily: "var(--font-serif)",
                  fontSize: "var(--text-xl)",
                  color: "var(--color-fg)",
                  lineHeight: 1.4,
                  marginBottom: "var(--space-sm)",
                  transition: "opacity var(--transition-fast)",
                }}
              >
                {cat.name}
              </Link>
            ))}
          </nav>
        </div>
      </main>
    </div>
  );
}
