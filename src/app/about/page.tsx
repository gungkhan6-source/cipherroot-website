import { pageMetadata } from "@/lib/metadata";
import PageShell from "@/components/ui/PageShell";

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
        About CipherRoot Software
      </h1>

      <p className="mt-10 text-lg leading-9 text-ink-muted">
        CipherRoot Software is an independent software studio focused on
        privacy, security and creative technologies.
      </p>

      <p className="mt-6 text-lg leading-9 text-ink-muted">
        We develop Android applications, indie games and productivity
        software with a strong focus on performance, simplicity and user
        privacy.
      </p>

      <p className="mt-6 text-lg leading-9 text-ink-muted">
        Every project is designed to provide practical solutions while
        maintaining clean design, reliability and long-term support.
      </p>

    </PageShell>
  );
}
