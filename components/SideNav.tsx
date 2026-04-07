"use client";

import { Article } from "@/lib/types";

interface SideNavProps {
  articles: Article[];
  activeIndex: number;
}

export default function SideNav({ articles, activeIndex }: SideNavProps) {
  const scrollToArticle = (slug: string) => {
    const el = document.getElementById(`article-${slug}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      aria-label="Scroll position"
      style={{
        position: "fixed",
        right: "var(--space-xl)",
        top: "50%",
        transform: "translateY(-50%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "12px",
        zIndex: 50,
      }}
    >
      {articles.map((article, index) => (
        <button
          key={article.slug}
          onClick={() => scrollToArticle(article.slug)}
          aria-label={`Jump to: ${article.frontmatter.title}`}
          title={article.frontmatter.title}
          style={{
            width: index === activeIndex ? "16px" : "6px",
            height: "6px",
            borderRadius: "3px",
            backgroundColor:
              index === activeIndex
                ? "var(--color-fg)"
                : "var(--color-rule)",
            transition:
              "width var(--transition-base), background-color var(--transition-base)",
            padding: 0,
          }}
        />
      ))}
    </nav>
  );
}
