import Image from "next/image";
import SectionTitle from "./SectionTitle";
import Section from "./ui/Section";
import { galleryItems } from "@/data/gallery";
import { homeContent, type HomeContent } from "@/content/home.content";

type Props = {
  content?: HomeContent["gallery"];
};

/** Homepage image gallery. Render only when the Gallery module is visible. */
export default function GallerySection({ content = homeContent.gallery }: Props) {
  return (
    <Section id="gallery" surface="1">

      <SectionTitle
        badge={content.badge}
        title={content.title}
        description={content.description}
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {galleryItems.map((item) => (
          <figure
            key={item.src}
            className="overflow-hidden rounded-3xl border border-line bg-card"
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={item.width}
              height={item.height}
              sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
              className="aspect-[4/3] w-full object-cover"
            />

            {item.caption && (
              <figcaption className="p-5 text-sm leading-7 text-ink-muted">
                {item.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>

    </Section>
  );
}
