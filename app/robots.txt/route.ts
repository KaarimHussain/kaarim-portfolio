import { siteUrl } from "../lib/site";

// Served as /robots.txt. Content-Signal follows https://contentsignals.org:
// allow search indexing and AI answers that cite the site, but not model training.
export function GET() {
  const body = [
    "User-Agent: *",
    "Content-Signal: search=yes, ai-input=yes, ai-train=no",
    "Allow: /",
    "",
    `Sitemap: ${siteUrl}/sitemap.xml`,
    "",
  ].join("\n");

  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
