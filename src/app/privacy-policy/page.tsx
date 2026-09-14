import { pageMetadata } from "@/lib/metadata";
import LegalPage from "@/components/LegalPage";
import { privacyPolicyContent } from "@/content/legal.content";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How CipherRoot Software collects, uses and protects information, including cookies, advertising and third-party services.",
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
