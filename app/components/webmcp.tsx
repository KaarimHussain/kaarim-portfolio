"use client";

import { useEffect } from "react";
import { agentTools, callTool } from "../lib/agent-tools";

type ModelContext = {
  registerTool: (tool: {
    name: string;
    description: string;
    inputSchema: object;
    execute: (input: unknown) => Promise<unknown>;
  }) => unknown;
  unregisterTool?: (name: string) => void;
};

// Registers the portfolio's read-only tools with in-browser agents (WebMCP).
// Does nothing in browsers without navigator.modelContext.
export function WebMcp() {
  useEffect(() => {
    const mc = (navigator as Navigator & { modelContext?: ModelContext }).modelContext;
    if (!mc?.registerTool) return;

    const registered: string[] = [];
    for (const t of agentTools) {
      try {
        mc.registerTool({
          name: t.name,
          description: t.description,
          inputSchema: t.inputSchema,
          execute: async () => callTool(t.name),
        });
        registered.push(t.name);
      } catch {
        // already registered (e.g. React strict mode re-run) or unsupported
      }
    }
    return () => {
      for (const name of registered) {
        try {
          mc.unregisterTool?.(name);
        } catch {}
      }
    };
  }, []);

  return null;
}
