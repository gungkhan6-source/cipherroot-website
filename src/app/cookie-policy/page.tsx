import { pageMetadata } from "@/lib/metadata";
import LegalPage from "@/components/LegalPage";
import { cookiePolicyContent } from "@/content/legal.content";

export const metadata = pageMetadata({
  title: cookiePolicyContent.title,
  description: cookiePolicyContent.metaDescription,
  path: "/cookie-policy",
});

export default function CookiePolicyPage() {
  return (
    <LegalPage
      title={cookiePolicyContent.title}
      updated={cookiePolicyContent.updated}
      intro={cookiePolicyContent.intro}
      sections={cookiePolicyContent.sections}
    />
  );
}
