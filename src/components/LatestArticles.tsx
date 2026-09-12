import SectionTitle from "./SectionTitle";
import Section from "./ui/Section";
import PostCard from "./PostCard";
import { latestPosts } from "@/data/posts";
import { homeContent, type HomeContent } from "@/content/home.content";

type Props = {
  content?: HomeContent["latestArticles"];
};

export default function LatestArticles({ content = homeContent.latestArticles }: Props) {
  return (
    <Section id="blog" surface="2">

      <SectionTitle
        badge={content.badge}
        title={content.title}
        description={content.description}
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
