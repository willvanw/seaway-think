"use client";

import { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import { Article } from "@/lib/types";
import ArticleScroll from "@/components/ArticleScroll";
import CategoryNav from "@/components/CategoryNav";
import SideNav from "@/components/SideNav";
import MenuButton from "@/components/MenuButton";
import Menu from "@/components/Menu";
import { CATEGORIES } from "@/lib/categories";

interface CategoryPageClientProps {
  articles: Article[];
  categoryName: string;
  categorySlug: string;
}

export default function CategoryPageClient({
  articles,
  categoryName,
}: CategoryPageClientProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [navExpanded, setNavExpanded] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const handleActiveChange = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  return (
    <div>
      <MenuButton onClick={() => setMenuOpen(true)} />
      <Menu
        categories={CATEGORIES}
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
      />

      {/* Back to home */}
      <Link
        href="/"
        style={{
          position: "fixed",
          top: "var(--space-xl)",
          left: "var(--space-xl)",
          fontFamily: "var(--font-serif)",
          fontSize: "var(--text-lg)",
          fontWeight: 400,
          color: "var(--color-fg)",
          letterSpacing: "-0.01em",
          zIndex: 50,
          transition: "opacity var(--transition-fast)",
        }}
      >
        Seaway Think
      </Link>

      {/* Desktop: Left sidebar nav */}
      {!isMobile && articles.length > 1 && (
        <CategoryNav
          articles={articles}
          activeIndex={activeIndex}
          categoryName={categoryName}
        />
      )}

      {/* Mobile: Collapsible top nav */}
      {isMobile && articles.length > 1 && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            backgroundColor: "var(--color-bg)",
            borderBottom: "1px solid var(--color-rule-light)",
            zIndex: 60,
            padding: "var(--space-lg) var(--space-xl)",
            paddingTop: "calc(var(--space-3xl) + var(--space-lg))",
          }}
        >
          <button
            onClick={() => setNavExpanded(!navExpanded)}
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "var(--text-sm)",
              color: "var(--color-fg-secondary)",
              display: "flex",
              alignItems: "center",
              gap: "var(--space-sm)",
            }}
          >
            <span>{articles[activeIndex]?.frontmatter.title}</span>
            <span
              style={{
                transform: navExpanded ? "rotate(180deg)" : "rotate(0)",
                transition: "transform var(--transition-fast)",
                fontSize: "0.6em",
              }}
            >
              ▼
            </span>
          </button>

          {navExpanded && (
            <ul
              style={{
                listStyle: "none",
                marginTop: "var(--space-md)",
                display: "flex",
                flexDirection: "column",
                gap: "var(--space-sm)",
              }}
            >
              {articles.map((article, index) => (
                <li key={article.slug}>
                  <button
                    onClick={() => {
                      setNavExpanded(false);
                      const el = document.getElementById(
                        `article-${article.slug}`
                      );
                      if (el)
                        el.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                    }}
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "var(--text-sm)",
                      color:
                        index === activeIndex
                          ? "var(--color-fg)"
                          : "var(--color-fg-tertiary)",
                      fontWeight: index === activeIndex ? 500 : 400,
                      textAlign: "left",
                      padding: "var(--space-xs) 0",
                    }}
                  >
                    {article.frontmatter.title}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {/* Desktop: Right side nav dots */}
      {!isMobile && articles.length > 1 && (
        <SideNav articles={articles} activeIndex={activeIndex} />
      )}

      {/* Main content area */}
      <main
        style={{
          marginLeft: !isMobile && articles.length > 1 ? "var(--nav-width)" : 0,
          marginRight: !isMobile && articles.length > 1 ? "var(--side-nav-width)" : 0,
          padding: isMobile
            ? "var(--space-xl) var(--space-xl)"
            : "0 var(--space-2xl)",
          paddingTop: isMobile && articles.length > 1 ? "120px" : undefined,
        }}
      >
        <ArticleScroll
          articles={articles}
          onActiveChange={handleActiveChange}
        />
      </main>
    </div>
  );
}
