"use client";

import { useEffect, useRef } from "react";
import { Article } from "@/lib/types";

interface ArticleScrollProps {
  articles: Article[];
  onActiveChange?: (index: number) => void;
}

export default function ArticleScroll({
  articles,
  onActiveChange,
}: ArticleScrollProps) {
  const articleRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    articleRefs.current.forEach((el, index) => {
      if (!el) return;

      // Scroll reveal
      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
            }
          });
        },
        { threshold: 0.05 }
      );
      revealObserver.observe(el);
      observers.push(revealObserver);

      // Active tracking
      const activeObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && onActiveChange) {
              onActiveChange(index);
            }
          });
        },
        { threshold: 0.15, rootMargin: "-10% 0px -60% 0px" }
      );
      activeObserver.observe(el);
      observers.push(activeObserver);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [articles, onActiveChange]);

  return (
    <div>
      {articles.map((article, index) => (
        <article
          key={article.slug}
          id={`article-${article.slug}`}
          ref={(el) => { articleRefs.current[index] = el; }}
          className="reveal"
          style={{
            maxWidth: "var(--prose-width)",
            margin: "0 auto",
            paddingTop: index === 0 ? "var(--space-3xl)" : "var(--space-4xl)",
            paddingBottom: "var(--space-2xl)",
          }}
        >
          {/* Article divider (not on first) */}
          {index > 0 && (
            <div
              style={{
                width: "32px",
                height: "1px",
                backgroundColor: "var(--color-rule)",
                marginBottom: "var(--space-3xl)",
              }}
            />
          )}

          {/* Header */}
          <header style={{ marginBottom: "var(--space-2xl)" }}>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                fontWeight: 400,
                lineHeight: 1.2,
                letterSpacing: "-0.015em",
                color: "var(--color-fg)",
                marginBottom: "var(--space-md)",
              }}
            >
              {article.frontmatter.title}
            </h2>

            {article.frontmatter.subtitle && (
              <p
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "var(--text-xl)",
                  fontStyle: "italic",
                  fontWeight: 400,
                  color: "var(--color-fg-secondary)",
                  lineHeight: 1.45,
                }}
              >
                {article.frontmatter.subtitle}
              </p>
            )}
          </header>

          {/* Body */}
          <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: article.html }}
          />
        </article>
      ))}

      {/* Bottom breathing room */}
      <div style={{ height: "40vh" }} />
    </div>
  );
}
