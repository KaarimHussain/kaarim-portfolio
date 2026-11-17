// Read-only tools shared by the MCP endpoint (/mcp) and the in-browser WebMCP registration.
import {
  getAchievements,
  getContact,
  getExperience,
  getProfile,
  getProjects,
  getSkills,
} from "./agent-content";

export const SERVER_INFO = { name: "kaarim-portfolio", title: "Kaarim Hussain Portfolio", version: "1.0.0" };

type Tool = {
  name: string;
  description: string;
  inputSchema: { type: "object"; properties: Record<string, unknown>; additionalProperties?: boolean };
  run: () => unknown;
};

const noInput = { type: "object" as const, properties: {}, additionalProperties: false };

export const agentTools: Tool[] = [
  {
    name: "get_profile",
    description: "Get Kaarim Hussain's profile: role, location, company, summary and social links.",
    inputSchema: noInput,
    run: getProfile,
  },
  {
    name: "list_projects",
    description: "List Kaarim Hussain's projects with descriptions, tech used and links.",
    inputSchema: noInput,
    run: getProjects,
  },
  {
    name: "list_experience",
    description: "List Kaarim Hussain's work experience, newest first.",
    inputSchema: noInput,
    run: getExperience,
  },
  {
    name: "list_skills",
    description: "List the languages, frameworks, databases and AI tools Kaarim Hussain uses, grouped by area.",
    inputSchema: noInput,
    run: getSkills,
  },
  {
    name: "list_achievements",
    description: "List Kaarim Hussain's awards and hackathon results.",
    inputSchema: noInput,
    run: getAchievements,
  },
  {
    name: "get_contact",
    description: "Get how to contact Kaarim Hussain or Klyron Studio about a project.",
    inputSchema: noInput,
    run: getContact,
  },
];

export function callTool(name: string) {
  const tool = agentTools.find((t) => t.name === name);
  if (!tool) return null;
  return { content: [{ type: "text" as const, text: JSON.stringify(tool.run(), null, 2) }] };
}
