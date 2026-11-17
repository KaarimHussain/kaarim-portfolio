// All portfolio content lives here. Edit this file to update the site.

export const profile = {
  name: "Kaarim Hussain",
  handle: "kaarim.h",
  tagline: "Code, products, coffee...",
  role: "Founder & Full-Stack Developer",
  avatar: "https://github.com/KaarimHussain.png",
  location: "Karachi, Pakistan",
  email: "kaarim.dev@gmail.com",
  studio: {
    name: "Klyron Studio",
    role: "Founder & Lead Engineer",
    url: "https://www.klyronstudio.com/",
  },
  socials: {
    github: "https://github.com/KaarimHussain",
    linkedin: "https://www.linkedin.com/in/kaarim-hussain-bb2559270/",
    x: "https://x.com/KaarimHussain",
    instagram: "https://www.instagram.com/kaarimhussain/",
  },
};

export type Tech = { name: string; slug?: string; mono?: boolean };

// `slug` is a Simple Icons slug (https://simpleicons.org). `mono` marks
// black logos that should be inverted in dark mode. If a slug doesn't
// exist the chip shows a small dot instead.
export const stack: { group: string; items: Tech[] }[] = [
  {
    group: "Frontend & Mobile",
    items: [
      { name: "Next.js", slug: "nextdotjs", mono: true },
      { name: "React", slug: "react" },
      { name: "TypeScript", slug: "typescript" },
      { name: "JavaScript", slug: "javascript" },
      { name: "Tailwind CSS", slug: "tailwindcss" },
      { name: "Flutter", slug: "flutter" },
      { name: "Dart", slug: "dart" },
    ],
  },
  {
    group: "Backend",
    items: [
      { name: "ASP.NET Core", slug: "dotnet" },
      { name: "C#", slug: "csharp" },
      { name: "Node.js", slug: "nodedotjs" },
      { name: "NestJS", slug: "nestjs" },
      { name: "Express", slug: "express", mono: true },
      { name: "FastAPI", slug: "fastapi" },
      { name: "PHP", slug: "php" },
      { name: "Laravel", slug: "laravel" },
    ],
  },
  {
    group: "Data & Servers",
    items: [
      { name: "PostgreSQL", slug: "postgresql" },
      { name: "SQL Server", slug: "microsoftsqlserver" },
      { name: "MongoDB", slug: "mongodb" },
      { name: "MySQL", slug: "mysql" },
      { name: "Redis", slug: "redis" },
      { name: "Firebase", slug: "firebase" },
      { name: "Linux", slug: "linux", mono: true },
    ],
  },
  {
    group: "Building with AI",
    items: [
      { name: "Gemini API", slug: "googlegemini" },
      { name: "Ollama", slug: "ollama", mono: true },
      { name: "Qwen", slug: "qwen" },
      { name: "Playwright", slug: "playwright" },
      { name: "Scrapling" },
      { name: "edge-tts / piper-tts" },
      { name: "Python", slug: "python" },
    ],
  },
  {
    group: "AI Tools I Use",
    items: [
      { name: "Claude Code", slug: "claude" },
      { name: "ChatGPT", slug: "openai", mono: true },
      { name: "DeepSeek", slug: "deepseek" },
      { name: "Hermes Agent" },
      { name: "Gemini", slug: "googlegemini" },
      { name: "GitHub Copilot", slug: "githubcopilot", mono: true },
      { name: "Perplexity", slug: "perplexity" },
      { name: "Windsurf", slug: "windsurf", mono: true },
      { name: "Grok" },
      { name: "Kimi" },
    ],
  },
  {
    group: "CMS & Tools",
    items: [
      { name: "WordPress", slug: "wordpress" },
      { name: "Elementor", slug: "elementor" },
      { name: "Git", slug: "git" },
      { name: "GitHub", slug: "github", mono: true },
      { name: "Figma", slug: "figma" },
    ],
  },
];

export const experience = [
  {
    company: "Klyron Studio",
    href: "https://www.klyronstudio.com/",
    logo: "/logos/klyron.png",
    role: "Founder & Lead Engineer",
    period: "Present",
    meta: "Karachi · Co-founded with Asim Sarfaraz",
    current: true,
    summary:
      "A software development studio. We help clients build their business from scratch, or take over part of an existing business to lighten their workload.",
    highlights: [
      "I make all the big decisions for the company",
      "We work with local and international clients, give them reliable support and build lasting relationships",
    ],
    tags: ["Next.js", "ASP.NET Core", "FastAPI", "Playwright", "Ollama", "PostgreSQL"],
  },
  {
    company: "Syntrix System",
    href: "https://syntrixsys.com/",
    logo: "/logos/syntrix.png",
    role: "Full-Stack Developer",
    period: "Sep 2025 - Present",
    meta: "Karachi · Software agency",
    current: false,
    summary:
      "Built websites for clients in other countries, both custom-coded and on WordPress. Also worked on the company's own internal tools.",
    highlights: [
      "Built a custom CRM that made the team 48% more efficient",
      "Built an internal tool for the marketing and sales teams to generate leads and automate their work",
      "Helped redesign the company's brand websites and handled their SEO",
    ],
    tags: ["Next.js", "NestJS", "Gemini API", ".NET", "WordPress", "SEO"],
  },
  {
    company: "Mind Vibes Solutions",
    href: undefined,
    logo: undefined,
    role: "Junior Full-Stack Developer",
    period: "Jan 2024 - Sep 2024",
    meta: "Remote · Part-time",
    current: false,
    summary:
      "Built and maintained web apps. Connected frontends to backends, tested features and shipped updates.",
    highlights: [],
    tags: ["PHP", "MySQL", "JavaScript", "AJAX"],
  },
];

// The two big cards at the top of the Projects section.
export const spotlight = [
  {
    title: "Lyrix",
    kind: "Open source",
    logo: "/logos/lyrix.png",
    color: "#258651",
    description:
      "A visual page builder and CMS for Next.js. You drag and drop pages, and Lyrix turns them into real React pages on the server. Your pages stay as plain files in your own repo.",
    command: "npx create-lyrix-app",
    status: "MIT license",
    tags: ["Next.js", "React", "TypeScript", "npm"],
    links: [
      { label: "Website", href: "https://lyrix-seven.vercel.app/" },
      { label: "GitHub", href: "https://github.com/KaarimHussain/lyrix-starter" },
      { label: "npm", href: "https://www.npmjs.com/package/create-lyrix-app" },
    ],
  },
  {
    title: "Veyra",
    kind: "AI agent",
    logo: "/logos/veyra.png",
    color: "#F9A602",
    description:
      "An AI agent that uses the browser for you. Tell it what you need in plain words, and it clicks, scrolls and fills in forms to get it done. Runs on local models with Ollama or with your own API key.",
    command: undefined,
    status: "Coming soon",
    tags: ["Next.js", "Fastify", "Playwright", "Drizzle", "Neon", "Clerk"],
    links: [{ label: "Website", href: "https://veyra-ruby.vercel.app/" }],
  },
];

export type Project = {
  title: string;
  kind: string;
  description: string;
  tags: string[];
  href?: string;
};

export const projects: Project[] = [
  {
    title: "Skill-Ustad",
    kind: "AI learning platform",
    description:
      "A learning platform where AI builds your lessons and reads them out loud to you.",
    tags: ["ASP.NET Core 9", "FastAPI", "React", "Ollama", "TTS", "PostgreSQL"],
    href: "https://github.com/KaarimHussain",
  },
  {
    title: "E-Administration",
    kind: "Web app",
    description: "An admin system for managing records, built on the .NET stack.",
    tags: ["ASP.NET Core MVC", "C#", "SQL Server"],
    href: "https://github.com/KaarimHussain",
  },
  {
    title: "Jobistan",
    kind: "Job platform",
    description:
      "A job site that connects job seekers with employers. It has search, messaging and dashboards for both sides.",
    tags: ["PHP", "MySQL", "jQuery", "AJAX", "Bootstrap"],
    href: "https://github.com/KaarimHussain/jobistan",
  },
  {
    title: "Watch Hub",
    kind: "Mobile app",
    description:
      "A watch shopping app. Users can browse, filter and buy watches, with a cart, wishlist, reviews and an admin panel.",
    tags: ["Flutter", "Dart", "Firebase"],
    href: "https://github.com/KaarimHussain/Watch-Hub",
  },
];

export const achievements: { title: string; detail?: string; place: string; date: string }[] = [
  {
    title: "TechWiz 7: Game Developer of the Year",
    detail: "Made Klyron City, a cyber detective game.",
    place: "2nd Runner-up",
    date: "2026",
  },
  {
    title: "Vision 2026",
    place: "Winner",
    date: "2026",
  },
  {
    title: "GDG Kolachi: Build With AI",
    detail: "Took part in the Google Developer Groups AI build event in Karachi.",
    place: "Participant",
    date: "2026",
  },
  {
    title: "TechWiz 6: Game Developer of the Year",
    detail: "Made Curse of the Dead Lands, a zombie survival game in Unity, in 5 days.",
    place: "2nd Runner-up",
    date: "2025",
  },
  {
    title: "Aptech Tech Olympics S4",
    detail: "Won Mobile App Developer of the Year and Web Designer of the Year.",
    place: "2 titles",
    date: "2025",
  },
  {
    title: "Vision: Web Developer of the Year",
    place: "Winner",
    date: "2025",
  },
];

export const education = [
  {
    title: "Software Engineering Diploma (ACCP Prime 2.0)",
    school: "Aptech",
    detail: "3 years",
  },
  {
    title: "CIT, Technical Board Degree",
    school: "Jinnah Polytechnical Institute",
    detail: "",
  },
  {
    title: "Intermediate",
    school: "Higher Secondary",
    detail: "",
  },
];
