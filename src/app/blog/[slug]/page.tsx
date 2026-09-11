import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts, getPost } from "@/data/posts";
import { parseMarkdown, formatDate } from "@/lib/markdown";
import { pageMetadata } from "@/lib/metadata";
import PageShell from "@/components/ui/PageShell";
import { articleJsonLd } from "@/lib/jsonLd";

type Props = {
  params: Promise<{ slug: string }>;
};

// Only the slugs returned by generateStaticParams exist.
// Anything else must be a real 404, not a soft 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const post = getPost(slug);

  if (!post) {
    return {};
  }

  return pageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    image: post.cover,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  const blocks = parseMarkdown(post.content);

  return (
    <PageShell width="4xl">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd(post)),
        }}
      />

      <p className="text-sm uppercase tracking-wider text-brand-light">
        {post.category}
      </p>

      <h1 className="mt-4 text-balance text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
        {post.title}
      </h1>

      <p className="mt-6 flex flex-wrap items-center gap-2 text-sm text-ink-muted">
        <span>{post.author}</span>
        <span aria-hidden="true">·</span>
        <time dateTime={post.date}>{formatDate(post.date)}</time>
        <span aria-hidden="true">·</span>
        <span>{post.readingMinutes} min read</span>
      </p>

      <Image
        src={post.cover}
        alt={post.title}
        width={1200}
        height={675}
        sizes="(min-width: 896px) 896px, 100vw"
        priority
        className="mt-10 aspect-video w-full rounded-3xl border border-line object-cover"
      />

      <div className="mt-12">
        {blocks.map((block, index) =>
          block.type === "heading" ? (
            block.level === 2 ? (
              <h2
                key={index}
                className="mt-12 text-balance text-2xl font-bold tracking-tight sm:text-3xl"
              >
                {block.text}
              </h2>
            ) : (
              <h3
                key={index}
                className="mt-10 text-balance text-xl font-semibold sm:text-2xl"
              >
                {block.text}
              </h3>
            )
          ) : block.type === "list" ? (
            <ul
              key={index}
              className="mt-6 list-disc space-y-2 pl-6 text-pretty leading-8 text-ink-muted"
            >
              {block.items.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          ) : (
            <p
              key={index}
              className="mt-6 text-pretty leading-8 text-ink-muted"
            >
              {block.text}
            </p>
          ),
        )}
      </div>

      <div className="mt-16 border-t border-line pt-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-brand-light transition hover:text-brand-mid"
        >
          <span aria-hidden="true">←</span>
          Back to all articles
        </Link>
      </div>

    </PageShell>
  );
}
