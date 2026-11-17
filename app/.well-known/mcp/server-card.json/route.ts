// MCP Server Card (SEP-1649): lets agents discover the /mcp endpoint before connecting.
import { agentTools, SERVER_INFO } from "../../../lib/agent-tools";
import { siteDescription, siteUrl } from "../../../lib/site";

export function GET() {
  const card = {
    $schema: "https://static.modelcontextprotocol.io/schemas/mcp-server-card/v1.json",
    version: "1.0",
    protocolVersion: "2025-06-18",
    serverInfo: SERVER_INFO,
    description: siteDescription,
    iconUrl: `${siteUrl}/icon.svg`,
    documentationUrl: `${siteUrl}/llms.txt`,
    transport: { type: "streamable-http", endpoint: `${siteUrl}/mcp` },
    capabilities: { tools: { listChanged: false } },
    authentication: { required: false, schemes: [] },
    tools: agentTools.map(({ name, description, inputSchema }) => ({ name, description, inputSchema })),
    resources: [],
    prompts: [],
  };

  return new Response(JSON.stringify(card, null, 2), {
    headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
  });
}
