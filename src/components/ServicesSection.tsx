import SectionTitle from "./SectionTitle";
import Section from "./ui/Section";
import ServiceCard from "./ServiceCard";
import { services } from "@/data/offerings";
import {
  servicesPageContent,
  type ListingPageContent,
} from "@/content/pages.content";

type Props = {
  content?: Pick<ListingPageContent, "badge" | "title" | "description">;
};

/** Homepage section listing every service. Render only when Services is visible. */
export default function ServicesSection({ content = servicesPageContent }: Props) {
  return (
    <Section id="services" surface="2">

      <SectionTitle
        badge={content.badge}
        title={content.title}
        description={content.description}
      />

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </div>

    </Section>
  );
}
