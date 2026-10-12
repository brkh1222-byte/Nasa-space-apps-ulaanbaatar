import { createFileRoute } from "@tanstack/react-router";

import { SchedulePage } from "@/components/site/pages";
import { pageHead } from "@/content/site-config";

export const Route = createFileRoute("/schedule")({
  head: () =>
    pageHead({
      title: "Schedule",
      description:
        "The two-day programme for NASA Space Apps Challenge Ulaanbaatar, Saturday 14 and Sunday 15 November 2026.",
      path: "/schedule",
    }),
  component: SchedulePage,
});
