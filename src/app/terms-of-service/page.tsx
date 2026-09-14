import { pageMetadata } from "@/lib/metadata";
import LegalPage from "@/components/LegalPage";
import { termsOfServiceContent } from "@/content/legal.content";

export const metadata = pageMetadata({
  title: termsOfServiceContent.title,
  description: termsOfServiceContent.metaDescription,
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
