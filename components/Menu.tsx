"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Category } from "@/lib/types";

interface MenuProps {
  categories: Category[];
  isOpen: boolean;
  onClose: () => void;
}

export default function Menu({ categories, isOpen, onClose }: MenuProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  return (
    <>
      {/* Overlay backdrop */}
      <div
        ref={overlayRef}
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          backgroundColor: "rgba(26, 26, 26, 0.03)",
          backdropFilter: isOpen ? "blur(2px)" : "blur(0px)",
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "auto" : "none",
          transition: "opacity var(--transition-slow), backdrop-filter var(--transition-slow)",
          zIndex: 90,
        }}
      />

      {/* Menu panel */}
      <nav
        role="dialog"
        aria-modal={isOpen}
        aria-label="Site navigation"
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          width: "min(380px, 85vw)",
          backgroundColor: "var(--color-bg)",
          borderLeft: "1px solid var(--color-rule-light)",
          padding: "var(--space-3xl) var(--space-2xl)",
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
          opacity: isOpen ? 1 : 0,
          transition:
            "transform var(--transition-slow), opacity var(--transition-slow)",
          zIndex: 100,
          display: "flex",
          flexDirection: "column",
          gap: "var(--space-3xl)",
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close menu"
          style={{
            alignSelf: "flex-end",
            fontFamily: "var(--font-sans)",
            fontSize: "var(--text-sm)",
            color: "var(--color-fg-secondary)",
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            transition: "opacity var(--transition-fast)",
          }}
        >
          Close
        </button>

        {/* Category heading */}
        <div>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "var(--text-xs)",
              color: "var(--color-fg-tertiary)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "var(--space-lg)",
            }}
          >
            Thoughts
          </p>

          <ul style={{ listStyle: "none" }}>
            {categories.map((category) => (
              <li key={category.slug} style={{ marginBottom: "var(--space-lg)" }}>
                <Link
                  href={`/thoughts/${category.slug}`}
                  onClick={onClose}
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "var(--text-xl)",
                    fontWeight: 400,
                    color: "var(--color-fg)",
                    display: "block",
                    transition: "opacity var(--transition-fast)",
                    lineHeight: 1.35,
                  }}
                >
                  {category.name}
                </Link>
                {category.description && (
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "var(--text-sm)",
                      color: "var(--color-fg-tertiary)",
                      marginTop: "var(--space-xs)",
                      lineHeight: 1.5,
                    }}
                  >
                    {category.description}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
