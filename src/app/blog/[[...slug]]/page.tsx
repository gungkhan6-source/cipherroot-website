import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageShell from "@/components/ui/PageShell";
import SectionTitle from "@/components/SectionTitle";
import PostCard from "@/components/PostCard";
import { posts, getPost } from "@/data/posts";
import { parseInline, parseMarkdown, formatDate } from "@/lib/markdown";
import { pageMetadata } from "@/lib/metadata";
import { articleJsonLd } from "@/lib/jsonLd";
import { moduleVisibility } from "@/lib/modules";
import { blogPageContent } from "@/content/pages.content";
import { uiContent } from "@/content/ui.content";
import { ImmersiveBlogHero } from "@/integrations/immersive";

type Props = {
  params: Promise<{ slug?: string[] }>;
};

/** Paragraph, list and heading text with its **bold** spans. */
function InlineText({ text }: { text: string }) {
  return parseInline(text).map((part, index) =>
    part.strong ? (
      <strong key={index} className="font-semibold text-ink">{part.text}</strong>
    ) : (
      part.text
    ),
  );
}

/**
 * /blog (listing) and /blog/[slug] (post) in one optional catch-all route,
 * like /services. While the blog is hidden or has no posts no page is
 * generated, so both URLs are a real 404 rather than a soft 404.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  if (!moduleVisibility.blog) {
    return [];
  }

  return [{ slug: [] }, ...posts.map((post) => ({ slug: [post.slug] }))];
}

function findPost(slug?: string[]) {
  return slug?.length === 1 ? getPost(slug[0]) : undefined;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  if (!slug || slug.length === 0) {
    return pageMetadata({
      title: blogPageContent.metaTitle,
      description: blogPageContent.metaDescription,
      path: "/blog",
    });
  }

  const post = findPost(slug);

  if (!post) {
    return {};
  }

  return pageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    image: post.cover,
    article: {
      publishedTime: post.date,
      modifiedTime: post.updated,
    },
  });
}

export default async function BlogPage({ params }: Props) {
  const { slug } = await params;

  if (!moduleVisibility.blog) {
    notFound();
  }

  if (!slug || slug.length === 0) {
    // Immersive hero: it holds the page title (h1), the list gets an h2.
    if (moduleVisibility.immersiveBlog) {
      return (
        <main id="main-content" className="bg-surface-3 text-ink">

          <ImmersiveBlogHero />

          <section
            id="articles"
            aria-labelledby="articles-title"
            className="mx-auto max-w-7xl scroll-mt-20 px-6 pt-20 pb-20 sm:px-8 sm:pt-28 sm:pb-28"
          >

            <h2
              id="articles-title"
              className="mb-12 text-center text-balance text-3xl font-bold leading-tight tracking-tight text-ink sm:mb-16 sm:text-4xl md:text-5xl"
            >
              {blogPageContent.listTitle}
            </h2>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <PostCard
                  key={post.slug}
                  post={post}
                />
              ))}
            </div>

          </section>

        </main>
      );
    }

    return (
      <PageShell>

        <SectionTitle
          as="h1"
          badge={blogPageContent.badge}
          title={blogPageContent.title}
          description={blogPageContent.description}
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard
              key={post.slug}
              post={post}
            />
          ))}
        </div>

      </PageShell>
    );
  }

  const post = findPost(slug);

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
        <span>{post.readingMinutes} {uiContent.status.minRead}</span>
      </p>

      <Image
        src={post.cover}
        alt={post.coverAlt ?? post.title}
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
                <InlineText text={block.text} />
              </h2>
            ) : (
              <h3
                key={index}
                className="mt-10 text-balance text-xl font-semibold sm:text-2xl"
              >
                <InlineText text={block.text} />
              </h3>
            )
          ) : block.type === "image" ? (
            <Image
              key={index}
              src={block.src}
              alt={block.alt}
              width={block.width}
              height={block.height}
              sizes="(min-width: 896px) 896px, 100vw"
              className="mt-10 h-auto w-full rounded-3xl border border-line"
            />
          ) : block.type === "list" ? (
            <ul
              key={index}
              className="mt-6 list-disc space-y-2 pl-6 text-pretty leading-8 text-ink-muted"
            >
              {block.items.map((item, itemIndex) => (
                <li key={itemIndex}><InlineText text={item} /></li>
              ))}
            </ul>
          ) : (
            <p
              key={index}
              className="mt-6 text-pretty leading-8 text-ink-muted"
            >
              <InlineText text={block.text} />
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
          {uiContent.actions.backToArticles}
        </Link>
      </div>

    </PageShell>
  );
}
