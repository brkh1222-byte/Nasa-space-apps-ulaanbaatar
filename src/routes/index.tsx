import { createFileRoute } from "@tanstack/react-router";
import { SpaceAppsSite } from "@/components/space-apps-site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NASA Space Apps Challenge Ulaanbaatar 2026" },
      { name: "description", content: "Join NASA Space Apps Challenge Ulaanbaatar on 14–15 November 2026: two days of open data, bold ideas, and global collaboration." },
      { property: "og:title", content: "NASA Space Apps Challenge Ulaanbaatar 2026" },
      { property: "og:description", content: "Ulaanbaatar’s official local NASA Space Apps event. Build solutions for Earth and space on 14–15 November 2026." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SpaceAppsSite,
});
