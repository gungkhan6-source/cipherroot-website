import { pageMetadata } from "@/lib/metadata";
import LegalPage from "@/components/LegalPage";
import { cookiePolicyContent } from "@/content/legal.content";

export const metadata = pageMetadata({
  title: "Cookie Policy",
  description:
    "Which cookies may be used on cipherrootsoftware.com, what they do, and how to control them.",
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
