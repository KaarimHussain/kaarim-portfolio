// Minimal, stateless MCP server over Streamable HTTP (JSON responses only).
// Read-only tools that expose the portfolio content. Spec: https://modelcontextprotocol.io
import { agentTools, callTool, SERVER_INFO } from "../lib/agent-tools";

const PROTOCOL_VERSIONS = ["2025-06-18", "2025-03-26", "2024-11-05"];

type RpcRequest = { jsonrpc: "2.0"; id?: string | number | null; method: string; params?: Record<string, unknown> };

const ok = (id: RpcRequest["id"], result: unknown) => ({ jsonrpc: "2.0", id, result });
const fail = (id: RpcRequest["id"], code: number, message: string) => ({ jsonrpc: "2.0", id, error: { code, message } });

function handle(msg: RpcRequest) {
  const { id, method, params } = msg;
  switch (method) {
    case "initialize": {
      const requested = typeof params?.protocolVersion === "string" ? params.protocolVersion : "";
      return ok(id, {
        protocolVersion: PROTOCOL_VERSIONS.includes(requested) ? requested : PROTOCOL_VERSIONS[0],
        capabilities: { tools: { listChanged: false } },
        serverInfo: SERVER_INFO,
        instructions:
          "Read-only information about Kaarim Hussain, a full-stack developer and founder of Klyron Studio. Use list_projects, list_experience and get_contact.",
      });
    }
    case "ping":
      return ok(id, {});
    case "tools/list":
      return ok(id, {
        tools: agentTools.map(({ name, description, inputSchema }) => ({
          name,
          description,
          inputSchema,
          annotations: { readOnlyHint: true, openWorldHint: false },
        })),
      });
    case "tools/call": {
      const result = callTool(String(params?.name ?? ""));
      return result ? ok(id, result) : fail(id, -32602, `Unknown tool: ${String(params?.name)}`);
    }
    default:
      return fail(id, -32601, `Method not found: ${method}`);
  }
}

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { "Content-Type": "application/json" } });

export async function POST(request: Request) {
  let body: RpcRequest | RpcRequest[];
  try {
    body = await request.json();
  } catch {
    return json(fail(null, -32700, "Parse error"), 400);
  }

  const messages = Array.isArray(body) ? body : [body];
  const responses = messages
    .filter((m) => m && m.id !== undefined && m.id !== null) // notifications get no reply
    .map(handle);

  if (responses.length === 0) return new Response(null, { status: 202 });
  return json(Array.isArray(body) ? responses : responses[0]);
}

export function GET() {
  // No server-initiated stream; clients should POST JSON-RPC messages.
  return new Response("Method Not Allowed. POST JSON-RPC messages to this endpoint.", {
    status: 405,
    headers: { Allow: "POST" },
  });
}
