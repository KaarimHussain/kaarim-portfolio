import { homepageMarkdown } from "../lib/agent-content";

// Markdown version of the homepage. proxy.ts also rewrites "/" here
// when a client sends `Accept: text/markdown`.
export function GET() {
  return new Response(homepageMarkdown(), {
    headers: { "Content-Type": "text/markdown; charset=utf-8", Vary: "Accept" },
  });
}
