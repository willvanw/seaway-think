"use client";

interface MenuButtonProps {
  onClick: () => void;
}

export default function MenuButton({ onClick }: MenuButtonProps) {
  return (
    <button
      onClick={onClick}
      aria-label="Open menu"
      style={{
        position: "fixed",
        top: "var(--space-xl)",
        right: "var(--space-xl)",
        zIndex: 80,
        fontFamily: "var(--font-sans)",
        fontSize: "var(--text-sm)",
        fontWeight: 400,
        color: "var(--color-fg-secondary)",
        letterSpacing: "0.05em",
        textTransform: "uppercase",
        padding: "var(--space-sm) 0",
        transition: "opacity var(--transition-fast)",
      }}
    >
      Menu
    </button>
  );
}
