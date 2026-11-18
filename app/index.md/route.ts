import { homepageMarkdown } from "../lib/agent-content";
import { siteUrl } from "../lib/site";

// Markdown version of the homepage. proxy.ts also rewrites "/" here
// when a client sends `Accept: text/markdown`.
export function GET() {
  return new Response(homepageMarkdown(), {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      Vary: "Accept",
      // Keep this agent copy out of Google results; the HTML homepage is the canonical page.
      "X-Robots-Tag": "noindex",
      Link: `<${siteUrl}/>; rel="canonical"`,
    },
  });
}
