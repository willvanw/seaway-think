export default function Footer() {
  return (
    <footer
      style={{
        padding: "var(--space-3xl) var(--space-xl) var(--space-xl)",
        textAlign: "center",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "var(--text-xs)",
          color: "var(--color-fg-tertiary)",
          letterSpacing: "0.06em",
        }}
      >
        Seaway Think &middot; {new Date().getFullYear()}
      </p>
    </footer>
  );
}
