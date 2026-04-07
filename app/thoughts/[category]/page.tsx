import {
  getArticlesByCategory,
  getCategoryBySlug,
  getCategorySlugs,
} from "@/lib/content";
import { notFound } from "next/navigation";
import CategoryPageClient from "./CategoryPageClient";

export async function generateStaticParams() {
  const slugs = getCategorySlugs();
  return slugs.map((category) => ({ category }));
}

interface PageProps {
  params: Promise<{ category: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);
  if (!category) return {};

  return {
    title: category.name,
    description: category.description || `Thoughts on ${category.name}`,
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    notFound();
  }

  const articles = await getArticlesByCategory(categorySlug);

  return (
    <CategoryPageClient
      articles={JSON.parse(JSON.stringify(articles))}
      categoryName={category.name}
      categorySlug={category.slug}
    />
  );
}
