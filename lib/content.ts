import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { Article, Category } from "./types";
import { CATEGORIES } from "./categories";

const contentDirectory = path.join(process.cwd(), "content", "thoughts");

/* ---- Categories ---- */

export function getCategories() {
  return CATEGORIES;
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}

export function getCategorySlugs(): string[] {
  return CATEGORIES.map((c) => c.slug);
}

/* ---- Articles ---- */

export async function getArticlesByCategory(
  categorySlug: string
): Promise<Article[]> {
  const categoryDir = path.join(contentDirectory, categorySlug);

  if (!fs.existsSync(categoryDir)) {
    return [];
  }

  const filenames = fs
    .readdirSync(categoryDir)
    .filter((f) => f.endsWith(".md"))
    .sort(); // Alphabetical sort — filenames prefixed with order number

  const articles: Article[] = [];

  for (const filename of filenames) {
    const filePath = path.join(categoryDir, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    // Skip drafts
    if (data.draft) continue;

    const processed = await remark().use(html).process(content);
    const htmlContent = processed.toString();

    const slug = filename.replace(/\.md$/, "");

    articles.push({
      slug,
      frontmatter: data as Article["frontmatter"],
      content,
      html: htmlContent,
    });
  }

  // Sort by order (ascending — oldest first, showing journey of thinking)
  return articles.sort((a, b) => a.frontmatter.order - b.frontmatter.order);
}

export async function getAllArticles(): Promise<
  (Article & { category: string })[]
> {
  const categories = getCategories();
  const allArticles: (Article & { category: string })[] = [];

  for (const category of categories) {
    const articles = await getArticlesByCategory(category.slug);
    allArticles.push(
      ...articles.map((a) => ({ ...a, category: category.slug }))
    );
  }

  return allArticles;
}
