import { pageMetadata } from "@/lib/metadata";
import LegalPage from "@/components/LegalPage";
import { termsOfServiceContent } from "@/content/legal.content";

export const metadata = pageMetadata({
  title: "Terms of Service",
  description:
    "The terms that apply when you use the CipherRoot Software website, applications and games.",
  path: "/terms-of-service",
});

export default function TermsOfServicePage() {
  return (
    <LegalPage
      title={termsOfServiceContent.title}
      updated={termsOfServiceContent.updated}
      intro={termsOfServiceContent.intro}
      sections={termsOfServiceContent.sections}
    />
  );
}
