import { defineTool } from "@lovable.dev/mcp-js";
import { SERVICES, SERVICE_PACKAGES } from "@/lib/portfolio";

export default defineTool({
  name: "list_services",
  title: "List services and packages",
  description:
    "List the services MD Momin Ali offers clients, their deliverables, and the available pricing packages.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const payload = { services: SERVICES, packages: SERVICE_PACKAGES };
    return {
      content: [{ type: "text", text: JSON.stringify(payload, null, 2) }],
      structuredContent: payload,
    };
  },
});
