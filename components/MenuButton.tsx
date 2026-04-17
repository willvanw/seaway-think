"use client";

interface MenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export default function MenuButton({ isOpen, onClick }: MenuButtonProps) {
  const lineStyle: React.CSSProperties = {
    display: "block",
    width: "20px",
    height: "1.5px",
    backgroundColor: "var(--color-fg)",
    transition: "transform 400ms cubic-bezier(0.25,0.1,0.25,1), opacity 300ms ease",
    transformOrigin: "center",
  };

  return (
    <button
      onClick={onClick}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      style={{
        position: "fixed",
        top: "var(--space-xl)",
        right: "var(--space-xl)",
        zIndex: 110,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "5px",
        width: "44px",
        height: "44px",
        padding: 0,
        transition: "opacity var(--transition-fast)",
      }}
    >
      <span style={{
        ...lineStyle,
        transform: isOpen ? "rotate(45deg) translate(0, 4.5px)" : "none",
      }} />
      <span style={{
        ...lineStyle,
        opacity: isOpen ? 0 : 1,
      }} />
      <span style={{
        ...lineStyle,
        transform: isOpen ? "rotate(-45deg) translate(0, -4.5px)" : "none",
      }} />
    </button>
  );
}
