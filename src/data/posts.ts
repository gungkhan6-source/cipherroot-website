import fs from "node:fs";
import path from "node:path";

export type Post = {
  slug: string;
  title: string;
  date: string;
  updated?: string;
  category: string;
  author: string;
  cover: string;
  /** Description of the cover image; the title is used when missing. */
  coverAlt?: string;
  excerpt: string;
  order: number;
  content: string;
  readingMinutes: number;
};

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

function readingMinutes(text: string): number {
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

/**
 * Reads every post from content/blog at build time.
 * Single source of truth: one folder per post, with meta.json + article.md.
 */
function loadPosts(): Post[] {
  const slugs = fs
    .readdirSync(BLOG_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);

  const items = slugs.map((slug) => {
    const meta = JSON.parse(
      fs.readFileSync(path.join(BLOG_DIR, slug, "meta.json"), "utf-8"),
    );

    const content = fs.readFileSync(
      path.join(BLOG_DIR, slug, "article.md"),
      "utf-8",
    );

    return {
      ...meta,
      slug,
      content,
      readingMinutes: readingMinutes(content),
    } as Post;
  });

  return items.sort((a, b) => a.order - b.order);
}

export const posts: Post[] = loadPosts();

export function getPost(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}

export const categories: string[] = Array.from(
  new Set(posts.map((post) => post.category)),
).sort();

export const latestPosts: Post[] = posts.slice(0, 3);
