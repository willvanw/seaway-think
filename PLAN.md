# Seaway Think — Build Plan

## Overview

A minimal, typographic editorial site built on Next.js (App Router), deployed to Vercel. Publishes long-form "Thoughts" organized by category, rendered from Markdown with YAML frontmatter. Design language: LoveFrom-caliber restraint — serif-forward, whitespace-heavy, deliberately paced.

---

## Phase 1: Project Scaffold & Core Infrastructure

**Goal:** Bootable Next.js app with the right file structure, fonts, global styles, and content pipeline.

| Step | Deliverable | Details |
|------|-------------|---------|
| 1.1 | `create-next-app` with App Router, TypeScript, no Tailwind | Clean starter — CSS Modules + vanilla CSS only |
| 1.2 | Font loading | `next/font` — EB Garamond (display/headings) + DM Sans (body/UI). Fallback stack defined. |
| 1.3 | CSS foundation (`styles/globals.css`) | Custom properties for palette (`--fg: #1a1a1a`, `--bg: #faf9f6`), type scale, spacing tokens, prose max-width (700px), base transitions |
| 1.4 | Root layout (`app/layout.tsx`) | HTML metadata, font injection, global style import |
| 1.5 | Content pipeline (`lib/content.ts`) | Markdown parser (gray-matter + remark/rehype), frontmatter schema (title, subtitle, date, order), `getArticlesByCategory()`, `getCategories()` |
| 1.6 | TypeScript types (`lib/types.ts`) | `Article`, `Category`, `Frontmatter` interfaces |
| 1.7 | Content directory structure | `/content/thoughts/the-company-world-model/` with one placeholder `.md` file for pipeline validation |
| 1.8 | Vercel config | `vercel.json` (if needed), confirm SSG via `generateStaticParams`, build script in `package.json` |

**Exit criteria:** `npm run build` succeeds, placeholder article renders at `/thoughts/the-company-world-model`.

---

## Phase 2: Splash Screen & Home Page

**Goal:** First impression — the animated entry point and clean home canvas.

| Step | Deliverable | Details |
|------|-------------|---------|
| 2.1 | Splash component (`components/Splash.tsx`) | "Seaway Think" in EB Garamond, fade-in/reveal animation over ~2.5s. CSS keyframes only — no libraries. Uses `onAnimationEnd` to transition to home state. |
| 2.2 | Home page (`app/page.tsx`) | Post-splash: clean canvas. Menu button (top-right, minimal). Nothing else competes for attention. State management for splash → home transition. |
| 2.3 | Splash bypass | Store session flag so returning visitors skip splash within same session. |

**Exit criteria:** Page loads → splash plays → resolves to home. Feels unhurried and intentional.

---

## Phase 3: Menu & Navigation Shell

**Goal:** The menu overlay that reveals Thought categories and routes to them.

| Step | Deliverable | Details |
|------|-------------|---------|
| 3.1 | Menu component (`components/Menu.tsx`) | Slide-out or overlay. Lists categories pulled from `getCategories()`. Opacity/fade transitions. Near-invisible close affordance. |
| 3.2 | Menu trigger | Minimal icon or wordmark button. Hover state: opacity shift only. |
| 3.3 | Category routing | Each menu item links to `/thoughts/[category-slug]`. Dynamic route via `app/thoughts/[category]/page.tsx`. |

**Exit criteria:** Menu opens/closes cleanly. Clicking a category navigates to the correct route.

---

## Phase 4: Category Page — Infinite Scroll Article View

**Goal:** The core reading experience. All articles in a category rendered as a continuous scroll.

| Step | Deliverable | Details |
|------|-------------|---------|
| 4.1 | Category page (`app/thoughts/[category]/page.tsx`) | SSG with `generateStaticParams`. Fetches all articles for the category, ordered by `order` (ascending = chronological). |
| 4.2 | Article renderer (`components/ArticleScroll.tsx`) | Maps over articles. Each article: title (H2, EB Garamond), date (subtle, DM Sans, secondary color), optional subtitle, prose body. Elegant divider between articles (generous whitespace + thin rule). |
| 4.3 | Markdown rendering | rehype plugins for safe HTML. Supports headings, blockquotes, lists, images, code blocks. Prose styling: 700px max-width, 1.65 line-height, comfortable paragraph spacing. |
| 4.4 | Scroll-triggered reveals | IntersectionObserver on each article section. Subtle fade-in on enter. Slow, deliberate — 600ms+ ease. |

**Exit criteria:** Category page renders all articles in scroll. Prose is beautifully typeset. Transitions feel calm.

---

## Phase 5: In-Page Navigation

**Goal:** Two nav affordances — article index (left/top) and scroll position indicator (right).

| Step | Deliverable | Details |
|------|-------------|---------|
| 5.1 | Category nav (`components/CategoryNav.tsx`) | Sticky left sidebar (desktop) / top bar (mobile). Lists article titles for current category. Clicking smooth-scrolls to article. Active article highlights based on scroll position (IntersectionObserver). |
| 5.2 | Side nav (`components/SideNav.tsx`) | Floating vertical rail on right side. Dots/dashes representing each article. Current position highlighted. Click to jump. Acts as scroll progress indicator. |
| 5.3 | Mobile adaptation | CategoryNav becomes a collapsible top bar. SideNav collapses to a bottom sheet or is hidden. Single-column reading stays generous. |

**Exit criteria:** Both navs work on desktop. Mobile is usable and uncluttered. Active states track scroll accurately.

---

## Phase 6: Content Ingestion

**Goal:** Format and load your real articles for *The Company World Model*.

| Step | Deliverable | Details |
|------|-------------|---------|
| 6.1 | Receive articles from you | Text, notes, or drafts — any format |
| 6.2 | Format to Markdown | Clean heading hierarchy (no H1 in body), proper frontmatter (title, date, order, optional subtitle) |
| 6.3 | Save to content directory | `/content/thoughts/the-company-world-model/[order]-[slug].md` |
| 6.4 | Validate rendering | Confirm each article renders correctly in the scroll view |

**Exit criteria:** All articles published, properly ordered, rendering cleanly.

---

## Phase 7: Polish & Performance

**Goal:** Production-grade refinement. LoveFrom-level feel. Lighthouse 95+.

| Step | Deliverable | Details |
|------|-------------|---------|
| 7.1 | Typography audit | Verify type scale, line-height, letter-spacing, heading rhythm across viewports |
| 7.2 | Animation timing pass | Review all transitions — splash, menu, scroll reveals, nav highlights. Ensure nothing feels rushed or bouncy. |
| 7.3 | Performance optimization | Minimize client JS. Confirm static generation. Font subsetting if needed. Image optimization (next/image). |
| 7.4 | Lighthouse audit | Target 95+ across Performance, Accessibility, Best Practices, SEO |
| 7.5 | Cross-browser / responsive QA | Test key breakpoints: 375px (mobile), 768px (tablet), 1440px (desktop) |
| 7.6 | Favicon & metadata | OG tags, site title, description, favicon |

**Exit criteria:** Site feels like a designed object, not a deployed template. Passes the LoveFrom test.

---

## Phase 8: Deployment

**Goal:** Live on Vercel with proper build config.

| Step | Deliverable | Details |
|------|-------------|---------|
| 8.1 | `vercel.json` finalized | Build command, output directory, any rewrites/headers |
| 8.2 | Environment check | Confirm no env vars needed (pure static site) |
| 8.3 | Deployment instructions | Step-by-step: connect repo to Vercel, configure, deploy |
| 8.4 | Custom domain setup (if applicable) | DNS instructions for connecting a domain |

**Exit criteria:** Site is live and rebuilds on content push.

---

## Execution Sequence

```
Phase 1  →  Phase 2  →  Phase 3  →  Phase 4  →  Phase 5
  (scaffold)  (splash)    (menu)     (reading)   (nav)
                                         ↓
Phase 8  ←  Phase 7  ←  Phase 6
(deploy)    (polish)    (content)
```

Phases 1–5 are the build sprint — pure code, no content dependency.
Phase 6 is where your articles come in.
Phases 7–8 are the polish-and-ship tail.

---

## Key Decisions Baked In

- **No Tailwind.** Hand-tuned CSS with custom properties. The design requires pixel-level control.
- **SSG only.** No client-side data fetching. Rebuild on content push.
- **CSS animations only.** No Framer Motion, no GSAP. IntersectionObserver + CSS keyframes/transitions.
- **Markdown as source of truth.** No CMS, no database. Git-driven content.
- **EB Garamond + DM Sans.** Can swap later, but this pairing fits the brief: refined serif + clean sans.

---

## What I Need From You to Start

1. **Green light** on this plan (or edits).
2. **Articles** for The Company World Model — whenever ready (can be raw drafts, I'll format).
3. **Any font preference** override (if EB Garamond + DM Sans isn't right, flag now).
