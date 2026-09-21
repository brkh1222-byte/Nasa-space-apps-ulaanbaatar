# Ulaanbaatar Space Odyssey

Build a professional, modern, minimal website for "NASA Space Apps Challenge Ulaanbaatar 2026" — the official local site for the Ulaanbaatar edition of NASA's global Space Apps hackathon, happening November 14–15, 2026. This is an important official project, not a basic info page — treat visual quality and polish as a top priority.

DESIGN DIRECTION (minimal, whitespace-first)

- Extremely generous white space — err on the side of too much space rather than too little. Let sections breathe.

- Minimal, editorial aesthetic: clean grid layouts, lots of negative space, restrained color use, no visual clutter

- Typography-led design: one confident sans-serif family (e.g. Inter, Space Grotesk, or General Sans), a clear type scale, large confident headings, generous line-height

- Mostly white/light background with occasional deep navy/black "space" sections used sparingly for contrast — not busy backgrounds, not gradients everywhere

- One restrained accent color (e.g. a single electric blue or orange) used sparingly for CTAs and key highlights only

- NASA space imagery used deliberately and sparingly — a few high-impact full-bleed images/photos, not decoration everywhere

- Feels premium and technical, like a well-designed product or space-agency site — never crowded, never busy

- Smooth, refined navigation with clear visual hierarchy

SCROLL ANIMATION (important, central requirement)

- The header/hero must visibly animate as the user scrolls: e.g. the hero text and background transform, scale, fade, or parallax as the page scrolls down, so scrolling itself feels like an event

- As the user continues scrolling past the header, each new section should animate into view — fade-up, slide-in, or reveal-on-scroll — smooth and subtle, never janky or excessive

- Use scroll-linked animation (e.g. via Framer Motion or similar) for the header transition specifically, not just a simple fade

- Sticky/transforming nav bar is welcome (e.g. nav that shrinks or changes background opacity as you scroll past the hero)

- All animation must stay smooth on mobile and not hurt performance or accessibility 
LANGUAGE - Site must support English and Mongolian via a language toggle in the header - All text should live in a translation/config object (not hardcoded), even if only English is filled in for now — Mongolian will be added later - The 2026 challenges specifically need EN/MN explanations — structure the challenge data to hold both languages per challenge CONTENT REQUIREMENTS — must include all of the following, structured to be easily updated as content arrives from other teams: - Main event information and NASA Space Apps Ulaanbaatar overview - Event dates: November 14–15, 2026 - Location details - In-person and virtual participation options, clearly explained - Registration information and a clear registration CTA - How the hackathon works (step-by-step) - Challenges section (2026 challenges, EN/MN, placeholder data structure for now) - Schedule (two-day timeline) - Judging and awards (criteria, prizes, path to NASA Global Awards) - Mentors and judges section — build as an empty/"coming soon" state since these aren't confirmed yet, but structured so cards can be added later - FAQ / Q&A (accordion, EN/MN) - Organizers section - Contact information - Social media links - Any other important participant information (eligibility, what to bring, etc. — placeholder is fine)
TECHNICAL REQUIREMENTS - Fully responsive — must work cleanly on mobile and desktop, test at 375px, 768px, 1440px - React + Tailwind CSS, with Framer Motion (or similar) for scroll animation - Componentize every section (Header/Hero, About, HowItWorks, Challenges, Schedule, Judging, Mentors, FAQ, Organizers, Register, Footer) - Structure all repeatable content (challenges, FAQ, schedule, mentors/judges) as clearly separated data arrays/objects, commented, so non-developers can eventually update values without touching layout or animation code - Add clear placeholder/TODO comments anywhere real content (challenge descriptions, mentor bios, registration link, social URLs) needs to be swapped in later Start with the Header/Hero (including the scroll animation) and the About section fully built, and scaffold the rest of the sections with placeholder content and the data-array structure in place so content can be filled in incrementally.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/9d8024ac-9970-4af6-a5e0-51c69a7cfd77).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
