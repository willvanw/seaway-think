"use client";

import { Article } from "@/lib/types";

interface CategoryNavProps {
  articles: Article[];
  activeIndex: number;
  categoryName: string;
}

export default function CategoryNav({
  articles,
  activeIndex,
  categoryName,
}: CategoryNavProps) {
  const scrollToArticle = (slug: string) => {
    const el = document.getElementById(`article-${slug}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      aria-label="Article navigation"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        bottom: 0,
        width: "var(--nav-width)",
        padding: "var(--space-xl)",
        paddingTop: "calc(var(--space-3xl) + var(--space-2xl))",
        overflowY: "auto",
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-xl)",
        zIndex: 50,
      }}
    >
      {/* Category title */}
      <p
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "var(--text-xs)",
          color: "var(--color-fg-tertiary)",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          lineHeight: 1.4,
        }}
      >
        {categoryName}
      </p>

      {/* Article list */}
      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "var(--space-sm)" }}>
        {articles.map((article, index) => (
          <li key={article.slug}>
            <button
              onClick={() => scrollToArticle(article.slug)}
              style={{
                display: "block",
                textAlign: "left",
                fontFamily: "var(--font-sans)",
                fontSize: "var(--text-sm)",
                lineHeight: 1.45,
                color:
                  index === activeIndex
                    ? "var(--color-fg)"
                    : "var(--color-fg-tertiary)",
                fontWeight: index === activeIndex ? 500 : 400,
                transition: "color var(--transition-fast), font-weight var(--transition-fast)",
                padding: "var(--space-xs) 0",
              }}
            >
              {article.frontmatter.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
