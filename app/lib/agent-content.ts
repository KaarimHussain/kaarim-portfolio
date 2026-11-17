// Plain-data views of the portfolio for agents: Markdown, llms.txt and tool results.
// Everything here is derived from app/data.ts, so it stays in sync with the page.
import { achievements, education, experience, profile, projects, spotlight, stack } from "../data";
import { siteDescription, siteUrl } from "./site";

export function getProfile() {
  return {
    name: profile.name,
    role: profile.role,
    location: profile.location,
    summary: siteDescription,
    company: { name: profile.studio.name, role: profile.studio.role, url: profile.studio.url },
    email: profile.email,
    links: profile.socials,
    website: siteUrl,
  };
}

export function getProjects() {
  return [
    ...spotlight.map((s) => ({
      title: s.title,
      kind: s.kind,
      description: s.description,
      status: s.status,
      tags: s.tags,
      links: s.links,
      spotlight: true,
    })),
    ...projects.map((p) => ({
      title: p.title,
      kind: p.kind,
      description: p.description,
      tags: p.tags,
      links: p.href ? [{ label: "GitHub", href: p.href }] : [],
      spotlight: false,
    })),
  ];
}

export function getExperience() {
  return experience.map((e) => ({
    company: e.company,
    role: e.role,
    period: e.period,
    details: e.meta,
    summary: e.summary,
    highlights: e.highlights,
    tags: e.tags,
    url: e.href,
  }));
}

export function getSkills() {
  return stack.map((g) => ({ group: g.group, items: g.items.map((t) => t.name) }));
}

export function getAchievements() {
  return achievements;
}

export function getContact() {
  return {
    email: profile.email,
    studio: profile.studio.url,
    ...profile.socials,
    note: "Kaarim works with founders and teams on long-term projects through Klyron Studio.",
  };
}

const list = (items: string[]) => items.map((i) => `- ${i}`).join("\n");

/** Full Markdown version of the homepage. */
export function homepageMarkdown() {
  const lines: string[] = [];
  lines.push(`# ${profile.name}`, "", `${profile.role}. Based in ${profile.location}.`, "", siteDescription, "");
  lines.push(
    "## Links",
    "",
    list([
      `Klyron Studio: ${profile.studio.url}`,
      `Email: ${profile.email}`,
      `GitHub: ${profile.socials.github}`,
      `LinkedIn: ${profile.socials.linkedin}`,
      `X: ${profile.socials.x}`,
      `Instagram: ${profile.socials.instagram}`,
    ]),
    "",
  );

  lines.push("## Experience", "");
  for (const e of experience) {
    lines.push(`### ${e.role}, ${e.company}`, "", `${e.period} · ${e.meta}`, "", e.summary, "");
    if (e.highlights.length) lines.push(list(e.highlights), "");
    lines.push(`Tech: ${e.tags.join(", ")}`, "");
  }

  lines.push("## Projects", "");
  for (const p of getProjects()) {
    lines.push(`### ${p.title}`, "", `${p.kind}${"status" in p && p.status ? ` · ${p.status}` : ""}`, "", p.description, "");
    if (p.links.length) lines.push(list(p.links.map((l) => `${l.label}: ${l.href}`)), "");
    lines.push(`Tech: ${p.tags.join(", ")}`, "");
  }

  lines.push("## Tech stack", "");
  for (const g of getSkills()) lines.push(`- **${g.group}:** ${g.items.join(", ")}`);
  lines.push("");

  lines.push("## Achievements", "");
  for (const a of achievements) {
    lines.push(`- **${a.title}** (${a.place}, ${a.date})${a.detail ? `: ${a.detail}` : ""}`);
  }
  lines.push("");

  lines.push("## Education", "");
  for (const e of education) lines.push(`- ${e.title}, ${e.school}${e.detail ? ` (${e.detail})` : ""}`);
  lines.push("");

  lines.push(
    "## Contact",
    "",
    `Have a product or an app that needs a developer? Email ${profile.email} or visit ${profile.studio.url}.`,
    "",
  );
  return lines.join("\n");
}

/** llms.txt: short summary plus links to the key resources (https://llmstxt.org). */
export function llmsTxt() {
  return [
    `# ${profile.name}`,
    "",
    `> ${siteDescription}`,
    "",
    `${profile.name} runs ${profile.studio.name} (${profile.studio.url}), a software development studio that works with local and international clients on long-term projects.`,
    "",
    "## Pages",
    "",
    `- [Homepage (Markdown)](${siteUrl}/index.md): Full profile with experience, projects, skills, awards and education`,
    `- [Homepage (HTML)](${siteUrl}/): The portfolio website`,
    "",
    "## Featured projects",
    "",
    ...spotlight.map((s) => `- [${s.title}](${s.links[0].href}): ${s.description}`),
    "",
    "## Agent access",
    "",
    `- [MCP server](${siteUrl}/mcp): Streamable HTTP endpoint with read-only tools for profile, projects, experience, skills and contact`,
    `- [MCP server card](${siteUrl}/.well-known/mcp/server-card.json)`,
    "",
    "## Contact",
    "",
    `- [Email](mailto:${profile.email})`,
    `- [GitHub](${profile.socials.github})`,
    `- [LinkedIn](${profile.socials.linkedin})`,
    "",
  ].join("\n");
}
