export interface Frontmatter {
  title: string;
  date?: string;
  subtitle?: string;
  order: number;
}

export interface Article {
  slug: string;
  frontmatter: Frontmatter;
  content: string; // Raw markdown
  html: string; // Rendered HTML
}

export interface Category {
  name: string;
  slug: string;
  description?: string;
}
