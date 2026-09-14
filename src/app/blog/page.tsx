import { pageMetadata } from "@/lib/metadata";
import PageShell from "@/components/ui/PageShell";
import SectionTitle from "@/components/SectionTitle";
import PostCard from "@/components/PostCard";
import { notFound } from "next/navigation";
import { posts } from "@/data/posts";
import { moduleVisibility } from "@/lib/modules";
import { blogPageContent } from "@/content/pages.content";

export const metadata = pageMetadata({
  title: blogPageContent.metaTitle,
  description: blogPageContent.metaDescription,
  path: "/blog",
});

export default function BlogPage() {
  if (!moduleVisibility.blog) {
    notFound();
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
