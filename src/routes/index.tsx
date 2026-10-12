import { createFileRoute } from "@tanstack/react-router";

import { HomePage } from "@/components/site/home";
import { pageHead } from "@/content/site-config";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead({
      title: "NASA Space Apps Challenge Ulaanbaatar 2026",
      description:
        "Join NASA Space Apps Challenge Ulaanbaatar on 14–15 November 2026, hosted by Questa. Free, in person or virtual: build solutions for challenges on Earth and in space with NASA open data.",
      path: "/",
    }),
  component: HomePage,
});
