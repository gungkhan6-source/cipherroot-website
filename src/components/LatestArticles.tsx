import SectionTitle from "./SectionTitle";
import Section from "./ui/Section";
import PostCard from "./PostCard";
import { latestPosts } from "@/data/posts";

export default function LatestArticles() {
  return (
    <Section id="blog" surface="2">

      <SectionTitle
        badge="Latest Articles"
        title="Insights & Development"
        description="Follow our latest technical articles, development diaries and software engineering insights."
      />

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {latestPosts.map((post) => (
          <PostCard
            key={post.slug}
            post={post}
          />
        ))}
      </div>

    </Section>
  );
}
