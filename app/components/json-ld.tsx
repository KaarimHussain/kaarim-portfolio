import { achievements, education, profile, spotlight, stack } from "../data";
import { siteDescription, siteTitle, siteUrl } from "../lib/site";

const personId = `${siteUrl}/#person`;
const studioId = `${siteUrl}/#klyron-studio`;
const websiteId = `${siteUrl}/#website`;

const graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": personId,
      name: profile.name,
      alternateName: "Muhammad Kaarim Hussain",
      url: siteUrl,
      image: profile.avatar,
      email: `mailto:${profile.email}`,
      jobTitle: profile.studio.role,
      description: siteDescription,
      worksFor: { "@id": studioId },
      address: { "@type": "PostalAddress", addressLocality: "Karachi", addressCountry: "PK" },
      alumniOf: education
        .filter((e) => e.school !== "Higher Secondary")
        .map((e) => ({ "@type": "EducationalOrganization", name: e.school })),
      knowsAbout: stack.flatMap((g) => g.items.map((t) => t.name)),
      award: achievements.map((a) => `${a.title} (${a.place}, ${a.date})`),
      sameAs: Object.values(profile.socials),
    },
    {
      "@type": "Organization",
      "@id": studioId,
      name: profile.studio.name,
      url: profile.studio.url,
      logo: `${siteUrl}/logos/klyron.png`,
      description:
        "A software development studio in Karachi. Helps clients build their business from scratch, or takes over part of an existing business to lighten their workload.",
      founder: { "@id": personId },
      address: { "@type": "PostalAddress", addressLocality: "Karachi", addressCountry: "PK" },
      areaServed: "Worldwide",
      sameAs: [profile.studio.url],
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: siteUrl,
      name: siteTitle,
      description: siteDescription,
      inLanguage: "en",
      publisher: { "@id": personId },
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#profile`,
      url: siteUrl,
      name: siteTitle,
      isPartOf: { "@id": websiteId },
      mainEntity: { "@id": personId },
    },
    ...spotlight.map((s) => ({
      "@type": "SoftwareApplication",
      name: s.title,
      description: s.description,
      url: s.links[0].href,
      image: `${siteUrl}${s.logo}`,
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Web",
      author: { "@id": personId },
      publisher: { "@id": studioId },
      ...(s.title === "Lyrix"
        ? {
            license: "https://opensource.org/licenses/MIT",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD", url: s.links[0].href },
          }
        : {}),
    })),
  ],
};

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, "\\u003c") }}
    />
  );
}
