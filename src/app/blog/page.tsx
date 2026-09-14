import { pageMetadata } from "@/lib/metadata";
import PageShell from "@/components/ui/PageShell";
import SectionTitle from "@/components/SectionTitle";
import PostCard from "@/components/PostCard";
import { notFound } from "next/navigation";
import { posts } from "@/data/posts";
import { featuresConfig } from "@/config/features.config";

export const metadata = pageMetadata({
  title: "Blog",
  description:
    "News, development updates, Android applications, indie games and technology articles.",
  path: "/blog",
});

export default function BlogPage() {
  if (!featuresConfig.blog) {
    notFound();
  }

  return (
    <PageShell>

      <SectionTitle
        as="h1"
        badge="Blog"
        title="Insights & Development"
        description="Technical articles, development diaries and engineering notes from CipherRoot Software."
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
