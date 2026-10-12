import type { ReactNode } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { Button } from "@/components/ui/button";
import { brandAssets, officialUrls } from "@/content/site-config";
import { ui, type Localized } from "@/content/site-content";
import { useLanguage } from "@/lib/language";
import { cn } from "@/lib/utils";

export const sectionEase = [0.22, 1, 0.36, 1] as const;

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("mx-auto w-full max-w-[1200px] px-5 md:px-8", className)}>{children}</div>
  );
}

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: sectionEase, delay }}
    >
      {children}
    </motion.div>
  );
}

export function Eyebrow({
  children,
  tone = "electric",
}: {
  children: ReactNode;
  tone?: "electric" | "neon";
}) {
  return (
    <p
      className={cn(
        "text-xs font-bold uppercase tracking-[0.14em]",
        tone === "neon" ? "text-neon" : "text-electric",
      )}
    >
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  className,
}: {
  eyebrow: Localized;
  title: Localized;
  intro?: Localized;
  className?: string;
}) {
  const { t } = useLanguage();
  return (
    <div className={cn("grid max-w-3xl gap-4", className)}>
      <Eyebrow>{t(eyebrow)}</Eyebrow>
      <h2 className="text-3xl font-bold leading-tight text-deep md:text-[2.6rem]">{t(title)}</h2>
      {intro && <p className="text-lg leading-8 text-muted-foreground">{t(intro)}</p>}
    </div>
  );
}

export function OrbitPattern({ className }: { className?: string }) {
  return (
    <svg
      className={cn("pointer-events-none absolute inset-0 h-full w-full opacity-25", className)}
      viewBox="0 0 1200 400"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <g fill="none" stroke="#ffffff" strokeWidth="1">
        <ellipse cx="980" cy="200" rx="440" ry="150" transform="rotate(-12 980 200)" />
        <ellipse cx="980" cy="200" rx="320" ry="108" transform="rotate(-12 980 200)" />
        <ellipse cx="980" cy="200" rx="200" ry="66" transform="rotate(-12 980 200)" />
        <circle cx="980" cy="200" r="30" />
      </g>
    </svg>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: Localized;
  title: Localized;
  intro: Localized;
  children?: ReactNode;
}) {
  const { t } = useLanguage();
  return (
    <section className="relative overflow-hidden bg-brand-gradient pb-14 pt-32 text-white md:pb-20 md:pt-40">
      <OrbitPattern />
      <Container className="relative grid gap-5">
        <Eyebrow tone="neon">{t(eyebrow)}</Eyebrow>
        <h1 className="max-w-3xl text-4xl font-black leading-[1.05] md:text-6xl">{t(title)}</h1>
        <p className="max-w-2xl text-lg leading-8 text-on-deep">{t(intro)}</p>
        {children}
      </Container>
    </section>
  );
}

export function SpaceAppsLogo({ tone, className }: { tone: "dark" | "light"; className?: string }) {
  return (
    <img
      src={tone === "light" ? brandAssets.spaceAppsWhite : brandAssets.spaceAppsBlack}
      alt="NASA Space Apps Challenge"
      width={1527}
      height={600}
      className={cn("h-9 w-auto", className)}
    />
  );
}

export function QuestaLogo({ tone, className }: { tone: "dark" | "light"; className?: string }) {
  return (
    <img
      src={tone === "light" ? brandAssets.questaWhite : brandAssets.questaBlack}
      alt="Questa"
      width={591}
      height={194}
      className={cn("h-7 w-auto", className)}
    />
  );
}

export function Lockup({ tone, compact = false }: { tone: "dark" | "light"; compact?: boolean }) {
  const { t } = useLanguage();
  return (
    <span className="flex items-center gap-3">
      <SpaceAppsLogo tone={tone} className={compact ? "h-7 md:h-8" : "h-9 md:h-10"} />
      <span
        className={cn(
          "border-l-2 pl-3 font-display text-[11px] font-bold uppercase tracking-[0.16em] md:text-xs",
          tone === "light" ? "border-neon text-white" : "border-electric text-deep",
        )}
      >
        {t({ en: "Ulaanbaatar", mn: "Улаанбаатар" })}
      </span>
    </span>
  );
}

export function ExternalLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  const { t } = useLanguage();
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
      <span className="sr-only"> {t(ui.opensInNewTab)}</span>
    </a>
  );
}

export function RegisterButton({
  label,
  size = "lg",
  className,
}: {
  label?: Localized;
  size?: "sm" | "lg";
  className?: string;
}) {
  const { t } = useLanguage();
  return (
    <Button asChild variant="register" size={size} className={className}>
      <ExternalLink href={officialUrls.register}>
        {t(label ?? ui.register)} <ArrowRight aria-hidden="true" />
      </ExternalLink>
    </Button>
  );
}

export function OfficialLinkCard({ href, label }: { href: string; label: string }) {
  return (
    <ExternalLink
      href={href}
      className="group flex items-center justify-between gap-4 rounded-xl border border-line bg-white px-5 py-4 font-semibold text-deep transition-colors hover:border-electric hover:text-electric"
    >
      <span>{label}</span>
      <ArrowUpRight
        className="size-4 shrink-0 text-electric transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        aria-hidden="true"
      />
    </ExternalLink>
  );
}
