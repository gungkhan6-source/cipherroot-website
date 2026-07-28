import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/data/posts";
import { formatDate } from "@/lib/markdown";

type Props = {
  post: Post;
};

export default function PostCard({ post }: Props) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-card transition-all duration-300 hover:-translate-y-2 hover:border-brand hover:shadow-2xl hover:shadow-brand/20">

      <Link href={`/blog/${post.slug}`} className="block overflow-hidden">
        <Image
          src={post.cover}
          alt={post.title}
          width={800}
          height={450}
          sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw"
          className="aspect-video w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </Link>

      <div className="flex flex-1 flex-col p-6 sm:p-8">

        <p className="text-sm uppercase tracking-wider text-brand-light">
          {post.category}
        </p>

        <h2 className="mt-4 text-balance text-xl font-bold sm:text-2xl">
          <Link href={`/blog/${post.slug}`} className="transition hover:text-brand-light">
            {post.title}
          </Link>
        </h2>

        <p className="mt-4 flex-1 text-pretty leading-8 text-ink-muted">
          {post.excerpt}
        </p>

        <p className="mt-6 flex flex-wrap items-center gap-2 text-sm text-zinc-500">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span aria-hidden="true">·</span>
          <span>{post.readingMinutes} min read</span>
        </p>

      </div>

    </article>
  );
}
