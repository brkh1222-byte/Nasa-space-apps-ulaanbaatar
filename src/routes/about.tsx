import { createFileRoute } from "@tanstack/react-router";

import { AboutPage } from "@/components/site/pages";
import { pageHead } from "@/content/site-config";

export const Route = createFileRoute("/about")({
  head: () =>
    pageHead({
      title: "About the hackathon",
      description:
        "What NASA Space Apps is, how the Ulaanbaatar event works on 14–15 November 2026, in-person and virtual participation, and who can join.",
      path: "/about",
    }),
  component: AboutPage,
});
