# NASA Space Apps Challenge — Ulaanbaatar 2026

Official website for the Ulaanbaatar local event of the NASA Space Apps Challenge, November 14–15, 2026.

## Tech Stack

- React + TypeScript
- Vite
- Tailwind CSS
- npm

## Getting Started

```bash
git clone https://github.com/brkh1222-byte/Nasa-space-apps-ulaanbaatar.git
cd Nasa-space-apps-ulaanbaatar
npm install
npm run dev
```

Open the local URL it prints in your terminal.

To build for production:

```bash
npm run build
```

## Project Structure

```
src/
  components/
    site/             # the website: layout (header/footer), home, challenges, inner pages
    ui/               # shared UI primitives (buttons, accordion, etc.)
  content/
    site-content.ts   # ALL editable site text (EN + MN) — see below
    site-config.ts    # domain, contact email, official NASA links, logo paths
  lib/language.tsx    # EN/MN switch (remembered per visitor)
  routes/             # one file per page: /, /about, /challenges, /schedule, /judging, /faq, /organizers
  assets/             # Earth hero photo
  styles.css          # brand colours and fonts
public/
  brand/              # official logos (transparent, black + white), social preview image
scripts/
  generate-seo.mjs    # writes sitemap.xml and robots.txt before each build
design/source-logos/  # original logo files the brand/ versions were made from
```

## Brand

The design follows the [NASA Space Apps brand guidelines](https://www.spaceappschallenge.org/brand/): Deep Blue and Electric Blue, Neon Yellow only as an accent (the Register button), Fira Sans for headings and Overpass for body text. Both fonts support Mongolian Cyrillic.

The brand hex values in `src/styles.css` are working values. Confirm them against the colour page of the official brand guide PDF.

The logos in `public/brand/` are the official files. The Space Apps logo was already transparent; the Questa logo's grey background was removed. Don't redraw either logo.

## Editing Content (for non-devs too)

Almost all real content — event info, challenges, FAQ, schedule, mentors/judges — lives in `src/content/site-content.ts` as structured data, separate from the layout/design code. Links, the contact email and the domain live in `src/content/site-config.ts`. You should be able to update text, dates, and links there without touching any component files.

To publish the official contact email, set `contact.email` in `src/content/site-config.ts`. While it is empty, the site shows "Official email coming soon".

If you're adding a new challenge, FAQ entry, or mentor, follow the existing pattern for that section in the file — copy an existing entry and edit the fields (don't remove commas/brackets).

English and Mongolian text should both be filled in per entry where the structure supports it.

## Connecting the final domain

The site is deployed on Vercel. When the domain is ready:

1. In Vercel, open the project → **Settings → Domains** and add the domain (for example `example.mn`) and `www.example.mn`. Set `www` to redirect to the bare domain.
2. At the domain registrar, add the DNS records Vercel shows. Usually that's an `A` record for the bare domain pointing to `76.76.21.21` and a `CNAME` for `www` pointing to `cname.vercel-dns.com`.
3. In Vercel → **Settings → Environment Variables**, set `VITE_SITE_URL` to `https://example.mn` (no trailing slash) for Production.
4. Redeploy. Canonical links, social preview tags, `sitemap.xml` and `robots.txt` all switch to the new domain.

## Branching & PRs

- `main` should always be a working, deployable state
- Create a feature branch per task, e.g. `feature/challenges-data`, `feature/mn-translations`, `feature/schedule-section`
- Open a pull request into `main` rather than pushing directly, so changes get a quick review

## Notes

- This is a private repo — please don't make it public without checking with the team first
- Always use `npm install` / `npm run dev` / `npm run build` for this project, not other package managers, to avoid dependency resolution issues