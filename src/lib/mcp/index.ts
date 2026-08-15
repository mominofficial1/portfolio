import { defineMcp } from "@lovable.dev/mcp-js";
import listProjects from "./tools/list-projects";
import getProject from "./tools/get-project";
import listServices from "./tools/list-services";
import getProfile from "./tools/get-profile";

export default defineMcp({
  name: "momin-s-digital-canvas-58",
  title: "Momin's Digital Canvas (58)",
  version: "0.1.0",
  instructions:
    "Public tools for MD Momin Ali's portfolio. Use `list_projects` to browse work, `get_project` for a case study, `list_services` for services and packages, and `get_profile` for skills, reviews and contact details.",
  tools: [listProjects, getProject, listServices, getProfile] as unknown as Parameters<typeof defineMcp>[0]["tools"],
});
