import { useRef, type RefObject } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CalendarDays,
  Coins,
  Facebook,
  Globe2,
  Instagram,
  Languages,
  MapPin,
} from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "motion/react";

import earthOrbit from "@/assets/earth-orbit.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { contact, officialUrls } from "@/content/site-config";
import {
  about,
  challenges,
  faqs,
  hero,
  howItWorks,
  keyFacts,
  officialLinks,
  organizers,
  register,
  ui,
} from "@/content/site-content";
import { useLanguage } from "@/lib/language";

import {
  Container,
  Eyebrow,
  ExternalLink,
  OfficialLinkCard,
  OrbitPattern,
  QuestaLogo,
  RegisterButton,
  Reveal,
  SectionHeading,
} from "./primitives";

const factIcons = [CalendarDays, MapPin, Globe2, Coins, Languages];

export function HomePage() {
  return (
    <>
      <EarthIntro />
      <HowItWorks />
      <ChallengeTeaser />
      <HostedByQuesta />
      <FaqTeaser />
      <OfficialLinks />
      <RegisterBand />
    </>
  );
}

/* The Earth photo is pinned behind the hero and the "What is Space Apps" section:
   it drifts slowly on its own, zooms as you scroll, then fades into the white page. */
function EarthIntro() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  // Derived from page scroll: an element-targeted useScroll stops updating once the hero leaves the viewport.
  const progress = useTransform(scrollY, (y) => {
    const height =
      heroRef.current?.offsetHeight || (typeof window === "undefined" ? 800 : window.innerHeight);
    return Math.min(Math.max(y / height, 0), 1);
  });
  return (
    <div className="relative">
      <EarthBackdrop progress={progress} />
      <Hero heroRef={heroRef} progress={progress} />
      <WhatIsSpaceApps />
    </div>
  );
}

function EarthBackdrop({ progress }: { progress: MotionValue<number> }) {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();
  const scale = useTransform(progress, [0, 1], [1, reduceMotion ? 1 : 1.18]);
  const y = useTransform(progress, [0, 1], [0, reduceMotion ? 0 : 110]);
  const veil = useTransform(progress, [0.25, 0.75], [0, 1]);

  return (
    <div className="pointer-events-none absolute inset-0">
      <div className="sticky top-0 h-[100svh] overflow-hidden bg-deep">
        <motion.div style={{ scale, y }} className="absolute inset-0 origin-center">
          <motion.img
            src={earthOrbit}
            alt={t(hero.imageAlt)}
            width={1920}
            height={1280}
            fetchPriority="high"
            className="h-full w-full object-cover object-center"
            initial={{ x: "-1.5%", y: "-1%", rotate: -1, scale: 1.12 }}
            animate={reduceMotion ? {} : { x: "1.5%", y: "1%", rotate: 1, scale: 1.17 }}
            transition={{ duration: 45, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-deep/70 via-deep/25 to-deep/85" />
        </motion.div>
        <motion.div style={{ opacity: veil }} className="absolute inset-0 bg-white" />
      </div>
    </div>
  );
}

function Hero({
  heroRef,
  progress,
}: {
  heroRef: RefObject<HTMLElement | null>;
  progress: MotionValue<number>;
}) {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();
  const copyY = useTransform(progress, [0, 0.6], [0, reduceMotion ? 0 : -90]);
  const copyOpacity = useTransform(progress, [0, 0.5], [1, reduceMotion ? 1 : 0]);

  return (
    <section ref={heroRef} className="relative z-10 flex min-h-[100svh] flex-col text-white">
      <motion.div style={{ y: copyY, opacity: copyOpacity }} className="flex flex-1 flex-col">
        <Container className="flex flex-1 flex-col justify-end gap-7 pb-10 pt-32 md:pb-14">
          <motion.div
            className="grid gap-6"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <Eyebrow tone="neon">{t(hero.kicker)}</Eyebrow>
            <h1 className="font-display font-black leading-[0.95]">
              <span className="block text-[clamp(3rem,9vw,7.5rem)]">{t(hero.titleTop)}</span>
              <span className="mt-2 block text-[clamp(1.6rem,4vw,3.2rem)] font-bold text-white/90">
                {t(hero.titleBottom)}
              </span>
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-white/85 md:text-xl">
              {t(hero.summary)}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <RegisterButton />
              <Button asChild variant="outlineLight" size="lg">
                <Link to="/about">{t(ui.learnMore)}</Link>
              </Button>
              <Button asChild variant="outlineLight" size="lg">
                <Link to="/challenges">{t(ui.challenges)}</Link>
              </Button>
              <Button asChild variant="outlineLight" size="lg">
                <Link to="/faq">{t(ui.faq)}</Link>
              </Button>
            </div>
            <div className="flex items-center gap-3 text-sm text-white/80">
              <span>{t(ui.hostedBy)}</span>
              <QuestaLogo tone="light" className="h-6" />
            </div>
          </motion.div>
          <dl className="mt-4 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/15 bg-white/15 backdrop-blur-md md:grid-cols-5">
            {keyFacts.map((fact, index) => {
              const Icon = factIcons[index] ?? CalendarDays;
              return (
                <div
                  key={fact.label.en}
                  className={`grid gap-1 bg-deep/55 px-4 py-4 md:px-5 ${index === keyFacts.length - 1 ? "col-span-2 md:col-span-1" : ""}`}
                >
                  <dt className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.12em] text-white/70">
                    <Icon className="size-3.5 text-neon" aria-hidden="true" />
                    {t(fact.label)}
                  </dt>
                  <dd className="font-display text-[15px] font-semibold leading-snug">
                    {t(fact.value)}
                  </dd>
                </div>
              );
            })}
          </dl>
        </Container>
      </motion.div>
    </section>
  );
}

function WhatIsSpaceApps() {
  const { t } = useLanguage();
  return (
    <section className="relative z-10 pb-24 pt-28 md:pb-32 md:pt-40">
      <Container className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <Reveal>
          <SectionHeading eyebrow={about.eyebrow} title={about.title} />
        </Reveal>
        <Reveal className="grid content-start gap-6">
          <p className="text-xl leading-9 text-deep md:text-2xl md:leading-10">{t(about.lead)}</p>
          <p className="leading-8 text-muted-foreground">{t(about.body)}</p>
          <div>
            <Button asChild variant="outlineBrand" size="lg">
              <Link to="/about">
                {t(ui.learnMore)} <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export function HowItWorks() {
  const { t } = useLanguage();
  return (
    <section className="bg-mist py-24 md:py-32">
      <Container className="grid gap-12">
        <Reveal>
          <SectionHeading eyebrow={howItWorks.eyebrow} title={howItWorks.title} />
        </Reveal>
        <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {howItWorks.steps.map((step, index) => (
            <Reveal key={step.title.en} delay={index * 0.06} className="h-full">
              <li className="flex h-full flex-col gap-3 rounded-2xl border border-line bg-white p-6">
                <span className="font-display text-3xl font-black text-electric">{index + 1}</span>
                <h3 className="text-xl font-bold text-deep">{t(step.title)}</h3>
                <p className="leading-7 text-muted-foreground">{t(step.text)}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}

function ChallengeTeaser() {
  const { t } = useLanguage();
  return (
    <section className="py-24 md:py-32">
      <Container>
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading eyebrow={challenges.eyebrow} title={challenges.teaserTitle} />
          <Button asChild variant="outlineBrand" size="lg" className="self-start md:self-auto">
            <Link to="/challenges">
              {t(ui.seeAllChallenges)} <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}

function HostedByQuesta() {
  const { t } = useLanguage();
  return (
    <section className="relative overflow-hidden bg-deep py-20 text-white md:py-24">
      <OrbitPattern className="opacity-10" />
      <Container className="relative grid items-center gap-10 md:grid-cols-[auto_1fr_auto] md:gap-14">
        <QuestaLogo tone="light" className="h-12 md:h-14" />
        <div className="grid max-w-2xl gap-3">
          <h2 className="text-2xl font-bold md:text-3xl">{t(organizers.hostTitle)}</h2>
          <p className="leading-7 text-on-deep">{t(organizers.hostText)}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
          <Button asChild variant="outlineLight" size="lg">
            <ExternalLink href={contact.questaInstagram}>
              <Instagram aria-hidden="true" /> {contact.questaInstagramHandle}
            </ExternalLink>
          </Button>
          <Button asChild variant="outlineLight" size="lg">
            <ExternalLink href={contact.questaFacebook}>
              <Facebook aria-hidden="true" /> Facebook
            </ExternalLink>
          </Button>
          <Button asChild variant="outlineLight" size="lg">
            <Link to="/organizers">{t(organizers.eyebrow)}</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}

function FaqTeaser() {
  const { t } = useLanguage();
  const featured = faqs.items.filter((item) => item.featured);
  return (
    <section className="py-24 md:py-32">
      <Container className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <Reveal className="grid content-start gap-8">
          <SectionHeading eyebrow={faqs.eyebrow} title={faqs.title} />
          <div>
            <Button asChild variant="outlineBrand" size="lg">
              <Link to="/faq">
                {t(ui.allQuestions)} <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </Reveal>
        <Reveal>
          <Accordion
            type="single"
            collapsible
            defaultValue="faq-0"
            className="border-t border-line"
          >
            {featured.map((item, index) => (
              <AccordionItem key={item.question.en} value={`faq-${index}`} className="border-line">
                <AccordionTrigger className="py-6 text-left font-display text-lg font-semibold text-deep hover:no-underline md:text-xl">
                  {t(item.question)}
                </AccordionTrigger>
                <AccordionContent className="pb-6 pr-8 text-base leading-7 text-muted-foreground">
                  {t(item.answer)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </Container>
    </section>
  );
}

export function OfficialLinks() {
  const { t } = useLanguage();
  return (
    <section className="bg-mist py-20 md:py-24">
      <Container className="grid gap-10">
        <Reveal>
          <SectionHeading eyebrow={officialLinks.eyebrow} title={officialLinks.title} />
        </Reveal>
        <Reveal className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {officialLinks.items.map((item) => (
            <OfficialLinkCard key={item.key} href={officialUrls[item.key]} label={t(item.label)} />
          ))}
        </Reveal>
      </Container>
    </section>
  );
}

export function RegisterBand() {
  const { t } = useLanguage();
  return (
    <section className="relative overflow-hidden bg-brand-gradient py-20 text-white md:py-28">
      <OrbitPattern />
      <Container className="relative grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-end">
        <div className="grid gap-4">
          <Eyebrow tone="neon">{t(register.eyebrow)}</Eyebrow>
          <h2 className="text-4xl font-black leading-tight md:text-6xl">{t(register.title)}</h2>
        </div>
        <div className="grid gap-5">
          <p className="text-lg leading-8 text-on-deep">{t(register.text)}</p>
          <div>
            <RegisterButton label={register.cta} />
          </div>
          <p className="text-sm text-on-deep">{t(register.note)}</p>
        </div>
      </Container>
    </section>
  );
}
