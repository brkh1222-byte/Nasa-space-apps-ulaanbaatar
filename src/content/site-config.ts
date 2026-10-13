// Set VITE_SITE_URL in Vercel (Project → Settings → Environment Variables) once the final domain is connected.
export const SITE_URL = (
  import.meta.env["VITE_SITE_URL"] || "https://nasa-space-apps-ulaanbaatar.vercel.app"
).replace(/\/$/, "");

export const SITE_NAME = "NASA Space Apps Challenge Ulaanbaatar 2026";

export const contact = {
  email: "hello@spaceappsulaanbaatar.com",
  questaInstagram: "https://www.instagram.com/questastem/",
  questaInstagramHandle: "@questastem",
  questaFacebook: "https://www.facebook.com/share/1DiwbMB9Xk/",
};

export const officialUrls = {
  localEvent: "https://www.spaceappschallenge.org/2026/local-events/ulaanbaatar/",
  register: "https://www.spaceappschallenge.org/2026/local-events/ulaanbaatar/?tab=teams",
  hackathon: "https://www.spaceappschallenge.org/2026/",
  challenges: "https://www.spaceappschallenge.org/2026/challenges/",
  findTeam: "https://www.spaceappschallenge.org/2026/find-a-team/",
  localEvents: "https://www.spaceappschallenge.org/2026/local-events/",
  participantFaqs: "https://www.spaceappschallenge.org/resources/participant-faqs/",
  resources: "https://www.spaceappschallenge.org/resources/",
  brand: "https://www.spaceappschallenge.org/brand/",
  home: "https://www.spaceappschallenge.org/",
};

export const spaceAppsSocials = [
  { label: "Instagram", href: "https://www.instagram.com/nasa_spaceapps" },
  { label: "Facebook", href: "https://www.facebook.com/spaceappschallenge" },
  { label: "X", href: "https://www.twitter.com/spaceapps" },
  { label: "YouTube", href: "https://www.youtube.com/nasaspaceappschallenge" },
];

export const brandAssets = {
  spaceAppsBlack: "/brand/space-apps-logo-black.png",
  spaceAppsWhite: "/brand/space-apps-logo-white.png",
  questaBlack: "/brand/questa-logo-black.png",
  questaWhite: "/brand/questa-logo-white.png",
  ogImage: "/brand/og-image.jpg",
};

export function pageHead({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  const url = `${SITE_URL}${path}`;
  const fullTitle = path === "/" ? title : `${title} · NASA Space Apps Ulaanbaatar`;
  return {
    meta: [
      { title: fullTitle },
      { name: "description", content: description },
      { property: "og:title", content: fullTitle },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { name: "twitter:title", content: fullTitle },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
