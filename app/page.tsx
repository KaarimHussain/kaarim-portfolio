import type { CSSProperties, ReactNode } from "react";
import { achievements, education, experience, profile, projects, spotlight, stack } from "./data";
import {
  ArrowIcon,
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  PinIcon,
  SparkIcon,
  TrophyIcon,
  VerifiedIcon,
  XIcon,
} from "./components/icons";
import { TechChip } from "./components/tech-chip";
import { ThemeToggle } from "./components/theme-toggle";

/* ---------- layout primitives ---------- */

// Full-bleed horizontal rule with the centred column's vertical rails inside.
function Row({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className="border-b border-line">
      <div className={`mx-auto max-w-3xl border-x border-line ${className}`}>{children}</div>
    </div>
  );
}

function Divider({ tall = false }: { tall?: boolean }) {
  return (
    <div className="hatch border-b border-line">
      <div className={`mx-auto max-w-3xl border-x border-line ${tall ? "h-16" : "h-5"}`} />
    </div>
  );
}

function SectionHeading({ id, title, note }: { id: string; title: string; note?: string }) {
  return (
    <Row>
      <div id={id} className="flex scroll-mt-14 items-baseline justify-between px-4 py-2.5">
        <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
        {note && <span className="font-mono text-xs text-muted">{note}</span>}
      </div>
    </Row>
  );
}

function ExternalLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="link font-medium text-fg">
      {children}
    </a>
  );
}

/* ---------- page ---------- */

const nav = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Home() {

  return (
    <div className="min-h-dvh">
      {/* Header */}
      <header className="sticky top-0 z-20 border-b border-line bg-bg/80 backdrop-blur-md">
        <div className="mx-auto flex h-13 max-w-3xl items-center justify-between border-x border-line px-4">
          <a href="#" className="text-[15px] font-semibold tracking-tight">
            {profile.handle}
          </a>
          <nav className="flex items-center gap-1">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="hidden rounded-md px-2.5 py-1.5 text-sm text-muted transition-colors hover:text-fg sm:block"
              >
                {n.label}
              </a>
            ))}
            <span className="mx-1 hidden h-4 w-px bg-line sm:block" />
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <main>
        <Divider tall />

        {/* Profile */}
        <Row className="flex">
          <div className="rise shrink-0 border-r border-line p-1.5" style={{ "--i": 0 } as CSSProperties}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={profile.avatar}
              alt={profile.name}
              width={128}
              height={128}
              className="size-24 rounded-full object-cover ring-1 ring-line ring-offset-2 ring-offset-bg sm:size-32"
            />
          </div>
          <div className="flex min-w-0 flex-1 flex-col justify-end">
            <p
              className="rise border-b border-dashed border-line px-4 pb-1 font-mono text-[11px] tracking-wide text-muted sm:text-xs"
              style={{ "--i": 1 } as CSSProperties}
            >
              {profile.tagline}
            </p>
            <h1
              className="rise flex items-center gap-1.5 border-b border-dashed border-line px-4 py-1 text-2xl font-semibold tracking-tight sm:text-3xl"
              style={{ "--i": 2 } as CSSProperties}
            >
              {profile.name}
              <VerifiedIcon className="shrink-0" />
            </h1>
            <p className="rise px-4 py-1.5 text-sm text-fg/80" style={{ "--i": 3 } as CSSProperties}>
              {profile.role}
            </p>
          </div>
        </Row>

        {/* Quick facts */}
        <Row className="px-4 py-4">
          <ul className="space-y-2.5 text-sm text-fg/80">
            <li className="flex items-center gap-2.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logos/klyron.png" alt="" className="size-4 object-contain" />
              {profile.studio.role} at <ExternalLink href={profile.studio.url}>{profile.studio.name}</ExternalLink>
            </li>
            <li className="flex items-center gap-2.5">
              <SparkIcon className="text-muted" />
              I build web apps, mobile apps and AI tools
            </li>
            <li className="flex items-center gap-2.5">
              <PinIcon className="text-muted" />
              Based in {profile.location}
            </li>
            <li className="flex items-center gap-2.5">
              <XIcon className="size-3.5 text-muted" />
              Follow me on <ExternalLink href={profile.socials.x}>X</ExternalLink>
            </li>
            <li className="flex items-center gap-2.5">
              <LinkedInIcon className="size-3.5 text-muted" />
              Let&apos;s connect on <ExternalLink href={profile.socials.linkedin}>LinkedIn</ExternalLink>
            </li>
            <li className="flex items-center gap-2.5">
              <GitHubIcon className="text-muted" />
              Check out my repos on <ExternalLink href={profile.socials.github}>GitHub</ExternalLink>
            </li>
            <li className="flex items-center gap-2.5">
              <InstagramIcon className="text-muted" />
              Follow along on <ExternalLink href={profile.socials.instagram}>Instagram</ExternalLink>
            </li>
            <li className="flex items-center gap-2.5 pt-1">
              <span className="relative flex size-4 items-center justify-center">
                <span className="absolute size-2 animate-ping rounded-full bg-accent/60 motion-reduce:hidden" />
                <span className="size-2 rounded-full bg-accent" />
              </span>
              <span className="text-fg">Open to long-term work with founders and teams</span>
            </li>
          </ul>
        </Row>

        <Divider />

        {/* About */}
        <SectionHeading id="about" title="About" />
        <Row className="px-4 py-4">
          <div className="space-y-3 text-[15px] leading-7 text-fg/80 [&_strong]:font-semibold [&_strong]:text-fg">
            <p>
              I&apos;m Kaarim, a <strong>full-stack developer</strong> from Karachi. I run{" "}
              <strong>Klyron Studio</strong> with my co-founder Asim Sarfaraz.
            </p>
            <p>
              I build whole products: the backend, the website, the mobile app and the AI features. Most of my work
              uses <strong>Next.js</strong>, <strong>ASP.NET Core</strong>, <strong>FastAPI</strong> and{" "}
              <strong>Flutter</strong>. I also build AI tools that run on the <strong>Gemini API</strong> or on local
              models with <strong>Ollama</strong>.
            </p>
            <p>
              I like working with the same people for a long time. If you have a product and want a developer who
              sticks around after launch, let&apos;s talk.
            </p>
          </div>
        </Row>

        <Divider />

        {/* Stack */}
        <SectionHeading id="stack" title="Tech Stack" />
        <Row className="divide-y divide-dashed divide-line">
          {stack.map((g) => (
            <div key={g.group} className="flex flex-col gap-2.5 px-4 py-3.5 sm:flex-row sm:gap-4">
              <h3 className="w-32 shrink-0 pt-1.5 font-mono text-xs text-muted">{g.group}</h3>
              <ul className="flex flex-wrap gap-2">
                {g.items.map((t) => (
                  <TechChip key={t.name} tech={t} />
                ))}
              </ul>
            </div>
          ))}
        </Row>

        <Divider />

        {/* Experience */}
        <SectionHeading id="work" title="Experience" />
        {experience.map((job) => (
          <Row key={job.company} className="px-4 py-5">
            <div className="flex gap-3.5">
              <div className="grid size-10 shrink-0 place-items-center rounded-lg border border-line bg-surface font-mono text-sm font-semibold">
                {job.logo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={job.logo} alt={`${job.company} logo`} className="size-6 object-contain" />
                ) : (
                  job.company.charAt(0)
                )}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
                  <h3 className="flex items-center gap-2 font-semibold">
                    {job.role}
                    {job.current && (
                      <span className="rounded-full border border-accent/30 bg-accent/10 px-2 py-px font-mono text-[10px] font-medium text-accent">
                        current
                      </span>
                    )}
                  </h3>
                  <span className="font-mono text-xs text-muted">{job.period}</span>
                </div>
                <p className="text-sm text-muted">
                  {job.href ? (
                    <a href={job.href} target="_blank" rel="noopener noreferrer" className="link text-fg/80">
                      {job.company}
                    </a>
                  ) : (
                    job.company
                  )}{" "}
                  · {job.meta}
                </p>
                <p className="mt-3 text-sm leading-6 text-fg/80">{job.summary}</p>
                {job.highlights.length > 0 && (
                  <ul className="mt-2.5 space-y-1.5 text-sm text-fg/80">
                    {job.highlights.map((h) => (
                      <li key={h} className="flex gap-2.5">
                        <span className="mt-2.5 h-px w-2.5 shrink-0 bg-muted" />
                        {h}
                      </li>
                    ))}
                  </ul>
                )}
                <ul className="mt-3.5 flex flex-wrap gap-1.5">
                  {job.tags.map((t) => (
                    <li key={t} className="rounded border border-line px-1.5 py-0.5 font-mono text-[11px] text-muted">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Row>
        ))}

        <Divider />

        {/* Projects */}
        <SectionHeading id="projects" title="Projects" note={`${spotlight.length + projects.length} projects`} />
        <Row className="grid gap-px bg-line sm:grid-cols-2">
          {spotlight.map((s) => (
            <article
              key={s.title}
              style={{ "--brand": s.color } as CSSProperties}
              className="flex flex-col gap-3 bg-bg p-4"
            >
              <div className="flex items-center gap-2.5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={s.logo} alt="" className="size-5 object-contain" />
                <h3 className="text-lg font-semibold tracking-tight">{s.title}</h3>
                <span className="font-mono text-[11px] uppercase tracking-wider text-(--brand)">{s.kind}</span>
              </div>
              <p className="text-sm leading-6 text-fg/75">{s.description}</p>
              {s.command && (
                <code className="w-fit rounded-md border border-line bg-surface px-2 py-1 font-mono text-xs text-fg/90">
                  <span className="select-none text-muted">$ </span>
                  {s.command}
                </code>
              )}
              <ul className="flex flex-wrap gap-1.5">
                {s.tags.map((t) => (
                  <li key={t} className="rounded border border-line bg-bg px-1.5 py-0.5 font-mono text-[11px] text-muted">
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-1 pt-1 text-sm">
                {s.links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1 font-medium text-fg/80 transition-colors hover:text-(--brand)"
                  >
                    {l.label}
                    <ArrowIcon className="size-3.5 transition-transform group-hover:-translate-y-px group-hover:translate-x-px" />
                  </a>
                ))}
                <span className="ml-auto font-mono text-[11px] text-muted">{s.status}</span>
              </div>
            </article>
          ))}
        </Row>
        <Row className="grid gap-px bg-line sm:grid-cols-2">
          {projects.map((p) => {
            const Tag = p.href ? "a" : "div";
            return (
              <Tag
                key={p.title}
                {...(p.href ? { href: p.href, target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group flex flex-col gap-3 bg-bg p-4 transition-colors hover:bg-surface"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-wider text-muted">{p.kind}</p>
                    <h3 className="mt-1 text-lg font-semibold tracking-tight">{p.title}</h3>
                  </div>
                  {p.href && (
                    <ArrowIcon className="mt-1 text-muted transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg" />
                  )}
                </div>
                <p className="text-sm leading-6 text-fg/75">{p.description}</p>
                <ul className="mt-auto flex flex-wrap gap-1.5 pt-1">
                  {p.tags.map((t) => (
                    <li key={t} className="rounded border border-line bg-bg px-1.5 py-0.5 font-mono text-[11px] text-muted">
                      {t}
                    </li>
                  ))}
                </ul>
              </Tag>
            );
          })}
        </Row>

        <Divider />

        {/* Achievements */}
        <SectionHeading id="awards" title="Achievements" />
        <Row className="divide-y divide-dashed divide-line">
          {achievements.map((a) => (
            <div key={a.title} className="flex gap-3.5 px-4 py-3.5">
              <TrophyIcon className="mt-0.5 shrink-0 text-muted" />
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h3 className="text-[15px] font-medium">
                    {a.title}
                    <span className="ml-2 rounded-full border border-line px-2 py-px align-middle font-mono text-[10px] text-muted">
                      {a.place}
                    </span>
                  </h3>
                  <span className="font-mono text-xs text-muted">{a.date}</span>
                </div>
                {a.detail && <p className="mt-0.5 text-sm text-fg/70">{a.detail}</p>}
              </div>
            </div>
          ))}
        </Row>

        <Divider />

        {/* Education */}
        <SectionHeading id="education" title="Education" />
        <Row className="divide-y divide-dashed divide-line">
          {education.map((e) => (
            <div key={e.title} className="flex flex-wrap items-baseline justify-between gap-x-4 px-4 py-3">
              <h3 className="text-[15px] font-medium">{e.title}</h3>
              <span className="text-sm text-muted">
                {e.school}
                {e.detail && ` · ${e.detail}`}
              </span>
            </div>
          ))}
        </Row>

        <Divider />

        {/* Contact */}
        <SectionHeading id="contact" title="Work with me" />
        <Row className="px-4 py-5">
          <p className="max-w-xl text-[15px] leading-7 text-fg/80">
            Have a product idea, or an app that needs a developer? Through{" "}
            <a href={profile.studio.url} target="_blank" rel="noopener noreferrer" className="link font-medium text-fg">
              {profile.studio.name}
            </a>{" "}
            I work with founders and teams for the long term, not just one project. Send me an email and tell me what
            you are building.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex h-9 items-center gap-2 rounded-md bg-fg px-3.5 text-sm font-medium text-bg transition-[opacity,transform] hover:opacity-90 active:scale-[0.97]"
            >
              <MailIcon className="size-3.5" />
              Email me
            </a>
            <a
              href={profile.studio.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 items-center gap-2 rounded-md border border-line px-3.5 text-sm font-medium transition-[background-color,transform] hover:bg-surface active:scale-[0.97]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logos/klyron.png" alt="" className="size-3.5 object-contain" />
              Klyron Studio
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 items-center gap-2 rounded-md border border-line px-3.5 text-sm font-medium transition-[background-color,transform] hover:bg-surface active:scale-[0.97]"
            >
              <LinkedInIcon className="size-3.5" />
              LinkedIn
            </a>
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 items-center gap-2 rounded-md border border-line px-3.5 text-sm font-medium transition-[background-color,transform] hover:bg-surface active:scale-[0.97]"
            >
              <GitHubIcon className="size-3.5" />
              GitHub
            </a>
            <a
              href={profile.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 items-center gap-2 rounded-md border border-line px-3.5 text-sm font-medium transition-[background-color,transform] hover:bg-surface active:scale-[0.97]"
            >
              <InstagramIcon className="size-3.5" />
              Instagram
            </a>
          </div>
        </Row>

        <Divider tall />
      </main>

      <footer>
        <Row className="flex flex-wrap items-center justify-between gap-2 px-4 py-4 font-mono text-xs text-muted">
          <span>© 2026 {profile.name}</span>
          <span>Built with Next.js & Tailwind</span>
        </Row>
      </footer>
    </div>
  );
}
