import { createFileRoute } from "@tanstack/react-router";

import { VenuePage } from "@/components/site/pages";
import { pageHead } from "@/content/site-config";

export const Route = createFileRoute("/venue")({
  head: () =>
    pageHead({
      title: "Venue",
      description:
        "NASA Space Apps Challenge Ulaanbaatar takes place at EduPark, Khan-Uul District, Ulaanbaatar, on 14–15 November 2026.",
      path: "/venue",
    }),
  component: VenuePage,
});
