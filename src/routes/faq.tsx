import { createFileRoute } from "@tanstack/react-router";

import { FaqPage } from "@/components/site/pages";
import { pageHead } from "@/content/site-config";

export const Route = createFileRoute("/faq")({
  head: () =>
    pageHead({
      title: "FAQ",
      description:
        "Answers to common questions about registering, teams, virtual participation and the day of NASA Space Apps Challenge Ulaanbaatar.",
      path: "/faq",
    }),
  component: FaqPage,
});
