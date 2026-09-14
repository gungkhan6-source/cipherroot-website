import { pageMetadata } from "@/lib/metadata";
import LegalPage from "@/components/LegalPage";
import { privacyPolicyContent } from "@/content/legal.content";

export const metadata = pageMetadata({
  title: privacyPolicyContent.title,
  description: privacyPolicyContent.metaDescription,
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title={privacyPolicyContent.title}
      updated={privacyPolicyContent.updated}
      intro={privacyPolicyContent.intro}
      sections={privacyPolicyContent.sections}
    />
  );
}
