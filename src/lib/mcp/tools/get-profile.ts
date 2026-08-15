import { defineTool } from "@lovable.dev/mcp-js";
import { EMAIL, SOCIALS, SKILL_GROUPS, REVIEWS } from "@/lib/portfolio";

export default defineTool({
  name: "get_profile",
  title: "Get profile, skills and reviews",
  description:
    "Get MD Momin Ali's contact email, social links, skill groups and client reviews.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const payload = {
      name: "MD Momin Ali",
      title: "Shopify Developer • Full-Stack Engineer",
      email: EMAIL,
      socials: SOCIALS,
      skills: SKILL_GROUPS,
      reviews: REVIEWS,
    };
    return {
      content: [{ type: "text", text: JSON.stringify(payload, null, 2) }],
      structuredContent: payload,
    };
  },
});
