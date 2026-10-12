import { useId, useState } from "react";
import { ArrowUpRight, ChevronDown, Search } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import { Button } from "@/components/ui/button";
import { officialUrls } from "@/content/site-config";
import {
  challenges,
  difficultyLabels,
  subjectLabels,
  type Challenge,
  type Difficulty,
} from "@/content/site-content";
import { useLanguage } from "@/lib/language";
import { cn } from "@/lib/utils";

import { Container, ExternalLink, sectionEase } from "./primitives";

const difficultyOrder: Difficulty[] = ["beginner", "intermediate", "advanced"];
const difficultyDot: Record<Difficulty, string> = {
  beginner: "bg-emerald-600",
  intermediate: "bg-amber-500",
  advanced: "bg-rocket",
};

export function ChallengeBrowser() {
  const { t, language } = useLanguage();
  const reduceMotion = useReducedMotion();
  const searchId = useId();
  const [filter, setFilter] = useState<Difficulty | "all">("all");
  const [query, setQuery] = useState("");

  const needle = query.trim().toLowerCase();
  const items = challenges.items.filter((item) => {
    if (filter !== "all" && !item.difficulty.includes(filter)) return false;
    if (!needle) return true;
    const haystack = [
      item.title.en,
      item.title.mn,
      t(item.purpose),
      ...item.subjects.map((s) => `${subjectLabels[s].en} ${subjectLabels[s].mn}`),
    ]
      .join(" ")
      .toLowerCase();
    return haystack.includes(needle);
  });

  const filters = [
    { value: "all" as const, label: t(challenges.all), count: challenges.items.length },
    ...difficultyOrder.map((level) => ({
      value: level,
      label: t(difficultyLabels[level]),
      count: challenges.items.filter((item) => item.difficulty.includes(level)).length,
    })),
  ];

  return (
    <section className="py-14 md:py-20">
      <Container className="grid gap-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2" role="group" aria-label={t(challenges.eyebrow)}>
            {filters.map((option) => {
              const active = filter === option.value;
              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setFilter(option.value)}
                  aria-pressed={active}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-colors",
                    active
                      ? "border-deep bg-deep text-white"
                      : "border-line bg-white text-muted-foreground hover:border-electric hover:text-electric",
                  )}
                >
                  {option.value !== "all" && (
                    <span
                      className={cn("size-2 rounded-full", difficultyDot[option.value])}
                      aria-hidden="true"
                    />
                  )}
                  {option.label}
                  <span className={active ? "text-white/70" : "text-muted-foreground/70"}>
                    {option.count}
                  </span>
                </button>
              );
            })}
          </div>
          <label htmlFor={searchId} className="relative block w-full lg:w-80">
            <span className="sr-only">{t(challenges.searchLabel)}</span>
            <Search
              className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
            <input
              id={searchId}
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={t(challenges.searchPlaceholder)}
              lang={language}
              className="h-11 w-full rounded-lg border border-line bg-white pl-10 pr-4 text-sm text-deep placeholder:text-muted-foreground focus:border-electric focus:outline-none focus:ring-2 focus:ring-electric/20"
            />
          </label>
        </div>

        {items.length === 0 ? (
          <div className="grid justify-items-start gap-4 rounded-2xl border border-dashed border-line p-10">
            <p className="text-lg text-muted-foreground">{t(challenges.noResults)}</p>
            <Button
              variant="outlineBrand"
              onClick={() => {
                setFilter("all");
                setQuery("");
              }}
            >
              {t(challenges.clearFilters)}
            </Button>
          </div>
        ) : (
          <motion.div layout={!reduceMotion} className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            <AnimatePresence mode="popLayout" initial={false}>
              {items.map((item) => (
                <motion.div
                  key={item.code}
                  layout={!reduceMotion}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: reduceMotion ? 0 : 0.35, ease: sectionEase }}
                >
                  <ChallengeCard item={item} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        <div className="flex flex-col gap-3 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">{t(challenges.source)}</p>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="outlineBrand">
              <ExternalLink href={officialUrls.challenges}>
                {t(challenges.officialList)} <ArrowUpRight aria-hidden="true" />
              </ExternalLink>
            </Button>
            <Button asChild variant="brand">
              <ExternalLink href={officialUrls.findTeam}>
                {t(challenges.findTeam)} <ArrowUpRight aria-hidden="true" />
              </ExternalLink>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function ChallengeCard({ item, compact = false }: { item: Challenge; compact?: boolean }) {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const panelId = `challenge-${item.code}-background`;

  return (
    <article className="flex h-full flex-col rounded-2xl border border-line bg-white p-6 transition-shadow duration-300 hover:shadow-[0_18px_40px_-24px_rgba(7,23,63,0.35)] md:p-7">
      <div className="flex items-start justify-between gap-4">
        <span className="font-display text-sm font-bold text-electric">CH—{item.code}</span>
        <div className="flex flex-wrap justify-end gap-x-3 gap-y-1">
          {difficultyOrder
            .filter((level) => item.difficulty.includes(level))
            .map((level) => (
              <span
                key={level}
                className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wide text-muted-foreground"
              >
                <span
                  className={cn("size-1.5 rounded-full", difficultyDot[level])}
                  aria-hidden="true"
                />
                {t(difficultyLabels[level])}
              </span>
            ))}
        </div>
      </div>
      <h3 className="mt-6 text-xl font-bold leading-snug text-deep">{t(item.title)}</h3>
      {!compact && (
        <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.12em] text-muted-foreground">
          {t(challenges.goalLabel)}
        </p>
      )}
      <p className={cn("leading-7 text-foreground/80", compact ? "mt-3" : "mt-2")}>
        {t(item.purpose)}
      </p>
      {!compact && (
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              id={panelId}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: sectionEase }}
              className="overflow-hidden"
            >
              <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.12em] text-muted-foreground">
                {t(challenges.backgroundLabel)}
              </p>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">{t(item.introduction)}</p>
            </motion.div>
          )}
        </AnimatePresence>
      )}
      <div className="mt-auto pt-6">
        <div className="flex flex-wrap gap-1.5">
          {item.subjects.map((subject) => (
            <span
              key={subject}
              className="rounded-full bg-mist px-2.5 py-1 text-xs text-muted-foreground"
            >
              {t(subjectLabels[subject])}
            </span>
          ))}
        </div>
        {!compact && (
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls={panelId}
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-electric hover:text-deep"
          >
            {t(open ? challenges.hideBackground : challenges.showBackground)}
            <ChevronDown
              className={cn("size-4 transition-transform duration-300", open && "rotate-180")}
              aria-hidden="true"
            />
          </button>
        )}
      </div>
    </article>
  );
}
