import { createFileRoute } from "@tanstack/react-router";

import { OrganizersPage } from "@/components/site/pages";
import { pageHead } from "@/content/site-config";

export const Route = createFileRoute("/organizers")({
  head: () =>
    pageHead({
      title: "Organizers",
      description:
        "NASA Space Apps Challenge Ulaanbaatar is hosted by Questa. Meet the local organizers and get in touch.",
      path: "/organizers",
    }),
  component: OrganizersPage,
});
