import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — MD Momin Ali" },
      { name: "description", content: "Terms of use for the MD Momin Ali portfolio site and project engagements." },
      { property: "og:title", content: "Terms & Conditions — MD Momin Ali" },
      { property: "og:description", content: "Terms of use and engagement basics." },
    ],
  }),
  component: () => (
    <LegalPage
      title="Terms & Conditions"
      sections={[
        { h: "Use of this site", p: "Content, code samples and imagery here are owned by MD Momin Ali and shown for portfolio purposes." },
        { h: "Client work", p: "Project scope, timeline and payment terms are agreed in writing before work begins." },
        { h: "Third-party stores", p: "Linked storefronts belong to their respective brands; availability and content may change." },
        { h: "Liability", p: "This site is provided as-is without warranty. Reach out if anything looks wrong and I'll fix it." },
      ]}
    />
  ),
});
