import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { siteDescription, siteTitle, siteUrl } from "./lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  applicationName: "Kaarim Hussain",
  authors: [{ name: "Kaarim Hussain", url: siteUrl }],
  creator: "Kaarim Hussain",
  keywords: [
    "Kaarim Hussain",
    "Klyron Studio",
    "full-stack developer",
    "Next.js developer",
    "ASP.NET Core developer",
    "AI developer",
    "Flutter developer",
    "software developer Karachi",
    "Lyrix",
    "Veyra",
  ],
  alternates: {
    canonical: "/",
    types: { "text/markdown": "/index.md" },
  },
  openGraph: {
    type: "profile",
    url: "/",
    siteName: "Kaarim Hussain",
    title: siteTitle,
    description: siteDescription,
    firstName: "Kaarim",
    lastName: "Hussain",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    creator: "@KaarimHussain",
  },
  robots: { index: true, follow: true },
};

// Runs before first paint so the saved / system theme never flashes.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&matchMedia('(prefers-color-scheme: dark)').matches))document.documentElement.classList.add('dark')}catch(e){}})()`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <link rel="alternate" type="text/plain" href="/llms.txt" title="llms.txt" />
      </head>
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
