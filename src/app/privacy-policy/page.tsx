import { pageMetadata } from "@/lib/metadata";
import PageShell from "@/components/ui/PageShell";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How CipherRoot Software handles privacy and user data.",
  path: "/privacy-policy",
});


export default function PrivacyPolicyPage() {
  return (
    <PageShell>

      <h1 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
        Privacy Policy
      </h1>

      <p className="mt-6 max-w-3xl text-ink-muted">
        This page is ready to be customized for CipherRoot Software.
      </p>

    </PageShell>
  );
}
