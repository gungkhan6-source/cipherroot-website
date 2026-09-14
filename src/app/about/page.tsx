import { pageMetadata } from "@/lib/metadata";
import PageShell from "@/components/ui/PageShell";
import { aboutContent } from "@/content/about.content";

export const metadata = pageMetadata({
  title: "About",
  description:
    "CipherRoot Software is an independent software studio focused on privacy, security and creative technologies.",
  path: "/about",
});


export default function AboutPage() {
  return (
    <PageShell width="5xl">

      <h1 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
        {aboutContent.title}
      </h1>

      {aboutContent.paragraphs.map((paragraph, index) => (
        <p
          key={paragraph}
          className={`${index === 0 ? "mt-10" : "mt-6"} text-lg leading-9 text-ink-muted`}
        >
          {paragraph}
        </p>
      ))}

    </PageShell>
  );
}
