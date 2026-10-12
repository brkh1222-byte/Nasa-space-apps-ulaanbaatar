import { createFileRoute } from "@tanstack/react-router";

import { ChallengesPage } from "@/components/site/pages";
import { pageHead } from "@/content/site-config";

export const Route = createFileRoute("/challenges")({
  head: () =>
    pageHead({
      title: "2026 challenges",
      description:
        "All 14 official NASA Space Apps 2026 challenges, with difficulty levels and subjects, for teams at the Ulaanbaatar event.",
      path: "/challenges",
    }),
  component: ChallengesPage,
});
