import { defineTool, ToolError } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { PROJECTS, COLLECTIONS } from "@/lib/portfolio";

export default defineTool({
  name: "list_projects",
  title: "List portfolio projects",
  description:
    "List MD Momin Ali's portfolio projects, optionally filtered by category (shopify, web, growth).",
  inputSchema: {
    category: z
      .enum(["shopify", "web", "growth"])
      .optional()
      .describe("Optional category filter."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ category }) => {
    const items = PROJECTS.filter((p) => !category || p.category === category).map((p) => ({
      slug: p.slug,
      title: p.title,
      tag: p.tag,
      category: p.category,
      status: p.status,
      year: p.year,
      description: p.description,
      link: p.link,
    }));
    if (items.length === 0) throw new ToolError(`No projects found for category "${category}".`);
    return {
      content: [{ type: "text", text: JSON.stringify({ collections: COLLECTIONS.map((c) => ({ id: c.id, name: c.name })), projects: items }, null, 2) }],
      structuredContent: { projects: items },
    };
  },
});
