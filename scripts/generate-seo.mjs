// Writes public/sitemap.xml and public/robots.txt for the domain in VITE_SITE_URL.
// Runs automatically before `npm run build`.
import { writeFileSync } from "node:fs";

const siteUrl = (
  process.env.VITE_SITE_URL || "https://nasa-space-apps-ulaanbaatar.vercel.app"
).replace(/\/$/, "");
const paths = ["/", "/about", "/challenges", "/schedule", "/judging", "/faq", "/organizers"];
const today = new Date().toISOString().slice(0, 10);

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map((path) => `  <url><loc>${siteUrl}${path}</loc><lastmod>${today}</lastmod></url>`).join("\n")}
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;

writeFileSync(new URL("../public/sitemap.xml", import.meta.url), sitemap);
writeFileSync(new URL("../public/robots.txt", import.meta.url), robots);
console.log(`SEO files written for ${siteUrl}`);
