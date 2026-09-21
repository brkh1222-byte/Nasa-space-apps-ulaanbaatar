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
    ui/               # shared UI primitives (buttons, cards, accordion, etc.)
    space-apps-site.tsx  # main site component
  content/
    site-content.ts   # ALL editable site text/data lives here — see below
  routes/              # page routes
  assets/              # images
  styles.css           # global styles
public/
  favicon.ico
```

## Editing Content (for non-devs too)

Almost all real content — event info, challenges, FAQ, schedule, mentors/judges, links — lives in `src/content/site-content.ts` as structured data, separate from the layout/design code. You should be able to update text, dates, and links there without touching any component files.

If you're adding a new challenge, FAQ entry, or mentor, follow the existing pattern for that section in the file — copy an existing entry and edit the fields (don't remove commas/brackets).

English and Mongolian text should both be filled in per entry where the structure supports it.

## Branching & PRs

- `main` should always be a working, deployable state
- Create a feature branch per task, e.g. `feature/challenges-data`, `feature/mn-translations`, `feature/schedule-section`
- Open a pull request into `main` rather than pushing directly, so changes get a quick review

## Notes

- This is a private repo — please don't make it public without checking with the team first
- Always use `npm install` / `npm run dev` / `npm run build` for this project, not other package managers, to avoid dependency resolution issues