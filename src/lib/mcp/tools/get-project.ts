import { defineTool, ToolError } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { PROJECTS } from "@/lib/portfolio";

export default defineTool({
  name: "get_project",
  title: "Get project case study",
  description:
    "Get the full case study for one portfolio project by slug: overview, role, year, tech stack and highlights.",
  inputSchema: { slug: z.string().min(1).describe("Project slug, e.g. \"chez-provence\".") },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ slug }) => {
    const project = PROJECTS.find((p) => p.slug === slug.trim().toLowerCase());
    if (!project) {
      throw new ToolError(
        `No project with slug "${slug}". Available: ${PROJECTS.map((p) => p.slug).join(", ")}`,
      );
    }
    return {
      content: [{ type: "text", text: JSON.stringify(project, null, 2) }],
      structuredContent: { project },
    };
  },
});
