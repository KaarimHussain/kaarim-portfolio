import type { MetadataRoute } from "next";
import { siteUrl } from "./lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${siteUrl}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/index.md`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${siteUrl}/llms.txt`, changeFrequency: "monthly", priority: 0.3 },
  ];
}
