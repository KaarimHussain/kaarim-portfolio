import { profile } from "../data";

// Public URL of the site. Set NEXT_PUBLIC_SITE_URL when you move to a custom domain.
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://kaarim-portfolio-blue.vercel.app").replace(
  /\/$/,
  "",
);

export const siteTitle = `${profile.name} | Founder of Klyron Studio`;

export const siteDescription =
  "Kaarim Hussain is a full-stack developer from Karachi and the founder of Klyron Studio. He builds web apps, mobile apps and AI tools with Next.js, ASP.NET Core, FastAPI and Flutter.";
