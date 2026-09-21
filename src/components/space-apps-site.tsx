import { useState, type ReactNode } from "react";
import { ArrowDown, ArrowRight, CalendarDays, Globe2, MapPin, Menu, Monitor, Users, X } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

import earthOrbit from "@/assets/earth-orbit.jpg";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  about, challenges, faqs, footer, hero, howItWorks, judging, languageNames,
  navItems, organizers, participantGuide, people, register, schedule, t, ui,
  type Language, type Localized,
} from "@/content/site-content";

const sectionEase = [0.22, 1, 0.36, 1] as const;

function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.14 }}
      transition={{ duration: 0.8, ease: sectionEase }}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({ index, eyebrow, title, language, inverse = false }: {
  index: string; eyebrow: Localized; title: Localized; language: Language; inverse?: boolean;
}) {
  return (
    <div className="grid gap-8 border-t border-border pt-6 md:grid-cols-12 md:gap-6">
      <div className={`text-xs font-semibold uppercase ${inverse ? "text-space-muted" : "text-muted-foreground"}`}>{index}</div>
      <div className="md:col-span-3">
        <p className={`text-xs font-semibold uppercase ${inverse ? "text-space-muted" : "text-muted-foreground"}`}>{t(eyebrow, language)}</p>
      </div>
      <h2 className="text-balance text-4xl font-medium leading-[1.04] md:col-span-8 md:text-6xl lg:text-7xl">{t(title, language)}</h2>
    </div>
  );
}

export function SpaceAppsSite() {
  const [language, setLanguage] = useState<Language>("en");
  return (
    <div className="bg-background text-foreground">
      <a href="#main" className="fixed left-4 top-3 z-[70] -translate-y-20 bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground focus:translate-y-0">
        {t(ui.skip, language)}
      </a>
      <Header language={language} setLanguage={setLanguage} />
      <main id="main">
        <Hero language={language} />
        <About language={language} />
        <HowItWorks language={language} />
        <Challenges language={language} />
        <Schedule language={language} />
        <Judging language={language} />
        <Mentors language={language} />
        <ParticipantGuide language={language} />
        <FAQ language={language} />
        <Organizers language={language} />
        <Register language={language} />
      </main>
      <Footer language={language} />
    </div>
  );
}

function Header({ language, setLanguage }: { language: Language; setLanguage: (language: Language) => void }) {
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const headerBackground = useTransform(scrollY, [0, 100], ["rgba(250,250,249,0)", "rgba(250,250,249,0.94)"]);
  const headerHeight = useTransform(scrollY, [0, 100], [88, 64]);
  const headerBorder = useTransform(scrollY, [0, 100], ["rgba(0,0,0,0)", "rgba(20,25,35,0.13)"]);

  return (
    <motion.header style={{ backgroundColor: headerBackground, height: headerHeight, borderColor: headerBorder }} className="fixed inset-x-0 top-0 z-50 border-b backdrop-blur-md">
      <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-5 md:px-10 lg:px-14">
        <a href="#top" className="flex items-center gap-3" aria-label={t(hero.eyebrow, language)}>
          <span className="flex size-8 items-center justify-center rounded-full border border-foreground text-[9px] font-bold">SA</span>
          <span className="hidden text-xs font-semibold leading-tight sm:block">SPACE APPS<br />ULAANBAATAR</span>
        </a>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => <a key={item.href} href={item.href} className="text-xs font-medium text-muted-foreground transition-colors hover:text-foreground">{t(item.label, language)}</a>)}
        </nav>
        <div className="flex items-center gap-2">
          <div className="hidden items-center rounded-sm border border-border p-0.5 sm:flex" aria-label={t(ui.language, language)}>
            {(Object.keys(languageNames) as Language[]).map((code) => (
              <Button key={code} variant={language === code ? "secondary" : "ghost"} size="sm" onClick={() => setLanguage(code)} aria-pressed={language === code} className="h-7 px-2.5 text-[11px]">{languageNames[code]}</Button>
            ))}
          </div>
          <Button asChild variant="event" size="sm" className="hidden lg:inline-flex"><a href="#register">{t(ui.register, language)} <ArrowRight /></a></Button>
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setOpen(!open)} aria-label={open ? t(ui.close, language) : t(ui.menu, language)}>{open ? <X /> : <Menu />}</Button>
        </div>
      </div>
      {open && (
        <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} className="border-t border-border bg-background px-5 py-7 lg:hidden">
          <nav className="flex flex-col gap-5">
            {navItems.map((item) => <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-2xl font-medium">{t(item.label, language)}</a>)}
            <a href="#register" onClick={() => setOpen(false)} className="text-2xl font-medium text-primary">{t(ui.register, language)}</a>
          </nav>
          <div className="mt-8 flex gap-2 border-t border-border pt-5">
            {(Object.keys(languageNames) as Language[]).map((code) => <Button key={code} variant={language === code ? "default" : "outline"} size="sm" onClick={() => setLanguage(code)}>{languageNames[code]}</Button>)}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}

function Hero({ language }: { language: Language }) {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const copyY = useTransform(scrollYProgress, [0, 0.14], [0, reduceMotion ? 0 : -120]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.12], [1, reduceMotion ? 1 : 0.12]);
  const imageScale = useTransform(scrollYProgress, [0, 0.18], [1.05, reduceMotion ? 1.05 : 1.22]);
  const imageY = useTransform(scrollYProgress, [0, 0.18], [0, reduceMotion ? 0 : 100]);

  return (
    <section id="top" className="relative flex min-h-[100svh] overflow-hidden bg-space text-primary-foreground">
      <motion.div style={{ scale: imageScale, y: imageY }} className="absolute inset-0 origin-center">
        <img src={earthOrbit} alt={t(hero.imageAlt, language)} width={1920} height={1280} fetchPriority="high" className="h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-space/35" />
        <div className="absolute inset-x-0 top-0 h-1/3 bg-space/35" />
      </motion.div>
      <motion.div style={{ y: copyY, opacity: copyOpacity }} className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1440px] flex-col px-5 pb-8 pt-28 md:px-10 md:pb-10 md:pt-36 lg:px-14">
        <div className="flex items-center gap-3 text-[10px] font-semibold uppercase text-space-muted md:text-xs">
          <span className="h-px w-8 bg-primary" />{t(hero.eyebrow, language)}
        </div>
        <div className="mt-auto">
          <h1 className="text-balance text-[clamp(3.6rem,11vw,10rem)] font-medium leading-[0.83]">
            <span className="block">{t(hero.titleTop, language)}</span><span className="block text-primary">{t(hero.titleBottom, language)}</span>
          </h1>
          <div className="mt-8 grid gap-8 border-t border-line pt-6 md:grid-cols-12 md:items-end">
            <p className="max-w-xl text-lg leading-relaxed text-space-muted md:col-span-6 md:text-xl">{t(hero.summary, language)}</p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-5 text-sm md:col-span-4 md:col-start-9">
              <div><CalendarDays className="mb-2 size-4 text-primary" /><p>{t(hero.date, language)}</p></div>
              <div><MapPin className="mb-2 size-4 text-primary" /><p>{t(hero.location, language)}</p></div>
              <div><Globe2 className="mb-2 size-4 text-primary" /><p>{t(hero.format, language)}</p></div>
              <Button asChild variant="inverse" size="lg" className="col-span-2 mt-2 sm:col-span-1"><a href="#register">{t(ui.register, language)} <ArrowRight /></a></Button>
            </div>
          </div>
        </div>
        <div className="mt-8 hidden items-center gap-2 text-[10px] uppercase text-space-muted md:flex"><ArrowDown className="size-3 animate-bounce" />{t(hero.scroll, language)}</div>
      </motion.div>
    </section>
  );
}

function About({ language }: { language: Language }) {
  return (
    <section id="about" className="px-5 py-28 md:px-10 md:py-40 lg:px-14 lg:py-52">
      <div className="mx-auto max-w-[1440px]">
        <Reveal><SectionHeading index={about.index} eyebrow={about.eyebrow} title={about.title} language={language} /></Reveal>
        <div className="mt-20 grid gap-12 md:grid-cols-12 md:mt-32">
          <Reveal className="md:col-span-7 md:col-start-5"><p className="text-balance text-2xl leading-relaxed md:text-4xl md:leading-snug">{t(about.lead, language)}</p></Reveal>
          <Reveal className="md:col-span-5 md:col-start-7"><p className="text-base leading-8 text-muted-foreground">{t(about.body, language)}</p></Reveal>
        </div>
        <Reveal className="mt-24 md:mt-40">
          <h3 className="mb-8 text-xs font-semibold uppercase text-muted-foreground">{t(about.modesTitle, language)}</h3>
          <div className="grid border-y border-border md:grid-cols-2">
            {about.modes.map((mode, index) => (
              <article key={mode.number} className={`py-10 md:p-10 ${index === 1 ? "border-t border-border md:border-l md:border-t-0" : "md:pl-0"}`}>
                <div className="flex items-center gap-3 text-xs text-primary"><span>{mode.number}</span>{index === 0 ? <Users className="size-4" /> : <Monitor className="size-4" />}</div>
                <h3 className="mt-10 text-3xl font-medium">{t(mode.title, language)}</h3>
                <p className="mt-5 max-w-lg leading-7 text-muted-foreground">{t(mode.text, language)}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function HowItWorks({ language }: { language: Language }) {
  return (
    <section className="bg-surface px-5 py-28 md:px-10 md:py-40 lg:px-14" id="how-it-works"><div className="mx-auto max-w-[1440px]">
      <Reveal><SectionHeading index={howItWorks.index} eyebrow={howItWorks.eyebrow} title={howItWorks.title} language={language} /></Reveal>
      <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4">
        {howItWorks.steps.map((step, index) => <Reveal key={step.number} className={`border-t border-border py-8 md:p-8 ${index % 2 !== 0 ? "md:border-l" : ""} ${index > 1 ? "lg:border-l" : ""} ${index === 0 ? "lg:pl-0" : ""}`}><span className="text-xs text-primary">{step.number}</span><h3 className="mt-16 text-2xl font-medium">{t(step.title, language)}</h3><p className="mt-4 leading-7 text-muted-foreground">{t(step.text, language)}</p></Reveal>)}
      </div>
    </div></section>
  );
}

function Challenges({ language }: { language: Language }) {
  return (
    <section id="challenges" className="bg-space px-5 py-28 text-primary-foreground md:px-10 md:py-40 lg:px-14"><div className="mx-auto max-w-[1440px]">
      <Reveal><SectionHeading index={challenges.index} eyebrow={challenges.eyebrow} title={challenges.title} language={language} inverse /></Reveal>
      <Reveal className="mt-12 md:ml-[33.333%] md:mt-20"><p className="max-w-2xl text-lg leading-8 text-space-muted">{t(challenges.intro, language)}</p></Reveal>
      <div className="mt-20 border-t border-line">
        {challenges.items.map((item) => <Reveal key={item.code}><article className="grid gap-6 border-b border-line py-10 md:grid-cols-12 md:items-start"><div className="text-xs text-primary md:col-span-2">{item.code}</div><h3 className="text-2xl font-medium md:col-span-3">{t(item.title, language)}</h3><p className="leading-7 text-space-muted md:col-span-5">{t(item.description, language)}</p><div className="text-xs uppercase text-space-muted md:col-span-2 md:text-right">{t(item.status, language)}</div></article></Reveal>)}
      </div>
    </div></section>
  );
}

function Schedule({ language }: { language: Language }) {
  return (
    <section id="schedule" className="px-5 py-28 md:px-10 md:py-40 lg:px-14"><div className="mx-auto max-w-[1440px]">
      <Reveal><SectionHeading index={schedule.index} eyebrow={schedule.eyebrow} title={schedule.title} language={language} /></Reveal>
      <div className="mt-20 grid gap-16 md:grid-cols-2 md:gap-12">
        {schedule.days.map((day) => <Reveal key={day.label.en}><article><div className="flex items-end justify-between border-b border-foreground pb-5"><div><p className="text-xs font-semibold uppercase text-primary">{t(day.label, language)}</p><h3 className="mt-2 text-2xl font-medium">{t(day.date, language)}</h3></div><span className="text-[10px] uppercase text-muted-foreground">{t(schedule.provisional, language)}</span></div>{day.items.map((item) => <div key={item.time} className="grid grid-cols-[5rem_1fr] border-b border-border py-5"><time className="text-sm text-muted-foreground">{item.time}</time><p className="font-medium">{t(item.title, language)}</p></div>)}</article></Reveal>)}
      </div>
    </div></section>
  );
}

function Judging({ language }: { language: Language }) {
  return (
    <section className="bg-surface px-5 py-28 md:px-10 md:py-40 lg:px-14"><div className="mx-auto max-w-[1440px]">
      <Reveal><SectionHeading index={judging.index} eyebrow={judging.eyebrow} title={judging.title} language={language} /></Reveal>
      <div className="mt-20 grid gap-16 md:grid-cols-12"><Reveal className="md:col-span-5 md:col-start-2"><p className="text-lg leading-8 text-muted-foreground">{t(judging.intro, language)}</p><p className="mt-8 border-l-2 border-primary pl-5 font-medium">{t(judging.prizes, language)}</p></Reveal><Reveal className="grid grid-cols-2 md:col-span-5 md:col-start-8">{judging.criteria.map((criterion) => <div key={criterion.label.en} className="border border-border p-6 first:border-r-0 [&:nth-child(3)]:border-r-0 [&:nth-child(n+3)]:border-t-0"><p className="text-4xl font-medium text-primary">{criterion.value}</p><p className="mt-8 text-sm">{t(criterion.label, language)}</p></div>)}</Reveal></div>
    </div></section>
  );
}

function Mentors({ language }: { language: Language }) {
  return (
    <section className="px-5 py-28 md:px-10 md:py-40 lg:px-14"><div className="mx-auto max-w-[1440px]">
      <Reveal><SectionHeading index={people.index} eyebrow={people.eyebrow} title={people.title} language={language} /></Reveal>
      <Reveal className="mt-20 grid gap-10 border-y border-border py-14 md:grid-cols-12"><div className="flex size-16 items-center justify-center rounded-full border border-primary text-primary"><Users /></div><div className="md:col-span-7 md:col-start-5"><h3 className="text-3xl font-medium">{t(people.emptyTitle, language)}</h3><p className="mt-5 max-w-2xl leading-7 text-muted-foreground">{t(people.emptyText, language)}</p><span className="mt-8 inline-block text-xs font-semibold uppercase text-primary">{t(ui.comingSoon, language)}</span></div></Reveal>
    </div></section>
  );
}

function ParticipantGuide({ language }: { language: Language }) {
  return (
    <section className="bg-space px-5 py-28 text-primary-foreground md:px-10 md:py-40 lg:px-14"><div className="mx-auto max-w-[1440px]">
      <Reveal><SectionHeading index={participantGuide.index} eyebrow={participantGuide.eyebrow} title={participantGuide.title} language={language} inverse /></Reveal>
      <div className="mt-20 grid gap-px bg-line md:grid-cols-3">{participantGuide.items.map((item) => <Reveal key={item.title.en} className="bg-space p-8 md:min-h-72"><h3 className="text-2xl font-medium">{t(item.title, language)}</h3><p className="mt-8 leading-7 text-space-muted">{t(item.text, language)}</p></Reveal>)}</div>
    </div></section>
  );
}

function FAQ({ language }: { language: Language }) {
  return (
    <section id="faq" className="px-5 py-28 md:px-10 md:py-40 lg:px-14"><div className="mx-auto max-w-[1440px]">
      <Reveal><SectionHeading index={faqs.index} eyebrow={faqs.eyebrow} title={faqs.title} language={language} /></Reveal>
      <Reveal className="mt-16 md:ml-[33.333%] md:mt-24"><Accordion type="single" collapsible>{faqs.items.map((item, index) => <AccordionItem key={item.question.en} value={`item-${index}`}><AccordionTrigger className="py-7 text-left text-lg font-medium hover:no-underline md:text-xl"><span className="pr-8">{t(item.question, language)}</span></AccordionTrigger><AccordionContent className="max-w-2xl pb-7 pr-10 text-base leading-7 text-muted-foreground">{t(item.answer, language)}</AccordionContent></AccordionItem>)}</Accordion></Reveal>
    </div></section>
  );
}

function Organizers({ language }: { language: Language }) {
  return (
    <section className="bg-surface px-5 py-28 md:px-10 md:py-40 lg:px-14"><div className="mx-auto max-w-[1440px]">
      <Reveal><SectionHeading index={organizers.index} eyebrow={organizers.eyebrow} title={organizers.title} language={language} /></Reveal>
      <Reveal className="mt-16 grid gap-8 border-y border-border py-10 md:grid-cols-12"><p className="max-w-2xl text-lg leading-8 text-muted-foreground md:col-span-6 md:col-start-5">{t(organizers.text, language)}</p><div className="md:col-span-2 md:text-right"><span className="text-xs font-semibold uppercase text-primary">{t(ui.comingSoon, language)}</span></div></Reveal>
    </div></section>
  );
}

function Register({ language }: { language: Language }) {
  return (
    <section id="register" className="bg-primary px-5 py-28 text-primary-foreground md:px-10 md:py-40 lg:px-14"><Reveal className="mx-auto max-w-[1440px]"><p className="text-xs font-semibold uppercase">{t(register.eyebrow, language)}</p><div className="mt-12 grid gap-12 md:grid-cols-12"><h2 className="text-balance text-5xl font-medium leading-none md:col-span-8 md:text-8xl">{t(register.title, language)}</h2><div className="md:col-span-4 md:self-end"><p className="text-lg leading-8 text-primary-foreground/80">{t(register.text, language)}</p><Button variant="inverse" size="lg" disabled className="mt-8 w-full justify-between sm:w-auto">{t(register.cta, language)} <ArrowRight /></Button><p className="mt-4 text-xs text-primary-foreground/70">{t(register.note, language)}</p></div></div></Reveal></section>
  );
}

function Footer({ language }: { language: Language }) {
  return (
    <footer className="bg-space px-5 pb-10 pt-20 text-primary-foreground md:px-10 lg:px-14"><div className="mx-auto max-w-[1440px]"><div className="grid gap-14 border-b border-line pb-20 md:grid-cols-12"><div className="md:col-span-5"><div className="flex items-center gap-4"><span className="flex size-12 items-center justify-center rounded-full border border-space-muted text-xs font-bold">SA</span><p className="max-w-xs text-xl font-medium">{t(footer.identity, language)}</p></div></div><div className="md:col-span-3 md:col-start-8"><p className="text-xs uppercase text-space-muted">{t(footer.contactLabel, language)}</p><p className="mt-4 text-sm">{t(footer.contact, language)}</p></div><div className="md:col-span-2"><p className="text-xs uppercase text-space-muted">{t(footer.socialLabel, language)}</p><div className="mt-4 flex flex-col gap-2">{footer.socials.map((social) => <span key={social.label} className="text-sm text-space-muted">{social.label} · {t(ui.detailsSoon, language)}</span>)}</div></div></div><div className="flex flex-col gap-5 pt-8 text-xs leading-5 text-space-muted md:flex-row md:items-start md:justify-between"><p className="max-w-xl">{t(footer.disclaimer, language)}</p><p>{t(footer.copyright, language)}</p></div></div></footer>
  );
}
