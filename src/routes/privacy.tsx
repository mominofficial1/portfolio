import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — MD Momin Ali" },
      { name: "description", content: "How MD Momin Ali handles information submitted through this portfolio site." },
      { property: "og:title", content: "Privacy Policy — MD Momin Ali" },
      { property: "og:description", content: "Privacy practices for this portfolio site." },
    ],
  }),
  component: () => (
    <LegalPage
      title="Privacy Policy"
      sections={[
        { h: "What I collect", p: "Only what you send through the contact form: your name, email, subject and message." },
        { h: "How it's used", p: "Solely to reply to your enquiry and discuss potential work. Nothing is sold or shared with third parties." },
        { h: "Retention", p: "Messages are kept only as long as needed to handle the conversation. Ask any time and I'll delete yours." },
        { h: "Contact", p: "Questions about privacy? Email 232311005@vu.edu.bd." },
      ]}
    />
  ),
});
