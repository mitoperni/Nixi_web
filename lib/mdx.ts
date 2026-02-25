import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog');

export interface PostMeta {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
}

export interface Post extends PostMeta {
  content: string;
}

function getPostPath(locale: string, slug: string): string {
  return path.join(BLOG_DIR, locale, `${slug}.mdx`);
}

export function getAllSlugs(): string[] {
  const dir = path.join(BLOG_DIR, 'es');
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''));
}

export function getAllPostsMeta(locale: string): PostMeta[] {
  const slugs = getAllSlugs();
  return slugs
    .map((slug) => {
      const filePath = getPostPath(locale, slug);
      const fallbackPath = getPostPath('es', slug);
      const source = fs.existsSync(filePath)
        ? fs.readFileSync(filePath, 'utf8')
        : fs.readFileSync(fallbackPath, 'utf8');
      const { data } = matter(source);
      return {
        slug,
        title: data.title as string,
        excerpt: data.excerpt as string,
        date: data.date as string,
        category: data.category as string,
        readTime: data.readTime as string,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPost(locale: string, slug: string): Post | null {
  const filePath = getPostPath(locale, slug);
  const fallbackPath = getPostPath('es', slug);

  const source = fs.existsSync(filePath)
    ? fs.readFileSync(filePath, 'utf8')
    : fs.existsSync(fallbackPath)
      ? fs.readFileSync(fallbackPath, 'utf8')
      : null;

  if (!source) return null;

  const { data, content } = matter(source);
  return {
    slug,
    title: data.title as string,
    excerpt: data.excerpt as string,
    date: data.date as string,
    category: data.category as string,
    readTime: data.readTime as string,
    content,
  };
}
