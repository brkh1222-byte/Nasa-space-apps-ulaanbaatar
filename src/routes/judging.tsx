import { createFileRoute } from "@tanstack/react-router";

import { JudgingPage } from "@/components/site/pages";
import { pageHead } from "@/content/site-config";

export const Route = createFileRoute("/judging")({
  head: () =>
    pageHead({
      title: "Judging & awards",
      description:
        "How projects are judged at NASA Space Apps Challenge Ulaanbaatar and how local nominees advance to NASA Global Judging.",
      path: "/judging",
    }),
  component: JudgingPage,
});
