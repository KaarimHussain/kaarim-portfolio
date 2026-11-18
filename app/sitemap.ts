import type { MetadataRoute } from "next";
import { siteUrl } from "./lib/site";

// Only list pages meant for search results. The Markdown copy (/index.md) and
// /llms.txt are for AI agents and are linked from the page head and robots.txt.
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: `${siteUrl}/`, lastModified: "2026-11-18", changeFrequency: "monthly", priority: 1 }];
}
