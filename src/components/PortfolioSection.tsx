import SectionTitle from "./SectionTitle";
import Section from "./ui/Section";
import PortfolioCard from "./PortfolioCard";
import { portfolioItems } from "@/data/offerings";
import {
  portfolioPageContent,
  type ListingPageContent,
} from "@/content/pages.content";

type Props = {
  content?: Pick<ListingPageContent, "badge" | "title" | "description">;
};

/** Homepage section listing portfolio projects. Render only when Portfolio is visible. */
export default function PortfolioSection({ content = portfolioPageContent }: Props) {
  return (
    <Section id="portfolio" surface="1">

      <SectionTitle
        badge={content.badge}
        title={content.title}
        description={content.description}
      />

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {portfolioItems.map((project) => (
          <PortfolioCard key={project.slug} project={project} />
        ))}
      </div>

    </Section>
  );
}
