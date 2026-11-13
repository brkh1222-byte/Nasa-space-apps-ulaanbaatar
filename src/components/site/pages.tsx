import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Monitor,
  Users,
} from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { contact, officialUrls, venueMap } from "@/content/site-config";
import {
  about,
  challenges,
  faqs,
  footer,
  judging,
  organizers,
  participantGuide,
  schedule,
  ui,
  venue,
  type FaqTopic,
} from "@/content/site-content";
import { useLanguage } from "@/lib/language";
import { cn } from "@/lib/utils";

import { ChallengeBrowser } from "./challenges";
import { HowItWorks, OfficialLinks, RegisterBand } from "./home";
import {
  Container,
  ExternalLink,
  PageHero,
  QuestaLogo,
  RegisterButton,
  Reveal,
  SectionHeading,
} from "./primitives";

export function AboutPage() {
  const { t } = useLanguage();
  return (
    <>
      <PageHero eyebrow={about.eyebrow} title={about.title} intro={about.pageIntro}>
        <div className="pt-2">
          <RegisterButton />
        </div>
      </PageHero>
      <section className="py-20 md:py-28">
        <Container className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <Reveal>
            <p className="text-2xl leading-10 text-deep md:text-[1.75rem] md:leading-[1.5]">
              {t(about.lead)}
            </p>
          </Reveal>
          <Reveal>
            <p className="text-lg leading-8 text-muted-foreground">{t(about.body)}</p>
          </Reveal>
        </Container>
      </section>
      <section className="pb-20 md:pb-28">
        <Container className="grid gap-8">
          <Reveal>
            <h2 className="text-2xl font-bold text-deep md:text-3xl">{t(about.modesTitle)}</h2>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-2">
            {about.modes.map((mode, index) => {
              const Icon = index === 0 ? Users : Monitor;
              return (
                <Reveal key={mode.title.en} className="h-full">
                  <article className="flex h-full flex-col gap-4 rounded-2xl border border-line bg-white p-7">
                    <span className="grid size-11 place-items-center rounded-xl bg-mist text-electric">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <h3 className="text-2xl font-bold text-deep">{t(mode.title)}</h3>
                    <p className="leading-7 text-muted-foreground">{t(mode.text)}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>
      <HowItWorks />
      <section className="py-20 md:py-28">
        <Container className="grid gap-10">
          <Reveal>
            <SectionHeading eyebrow={participantGuide.eyebrow} title={participantGuide.title} />
          </Reveal>
          <div className="grid gap-4 md:grid-cols-3">
            {participantGuide.items.map((item) => (
              <Reveal key={item.title.en} className="h-full">
                <article className="h-full rounded-2xl border border-line p-7">
                  <h3 className="text-xl font-bold text-deep">{t(item.title)}</h3>
                  <p className="mt-4 leading-7 text-muted-foreground">{t(item.text)}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
      <OfficialLinks />
      <RegisterBand />
    </>
  );
}

export function ChallengesPage() {
  return (
    <>
      <PageHero
        eyebrow={challenges.eyebrow}
        title={challenges.teaserTitle}
        intro={challenges.pageIntro}
      />
      <ChallengeBrowser />
      <RegisterBand />
    </>
  );
}

export function SchedulePage() {
  const { t } = useLanguage();
  return (
    <>
      <PageHero eyebrow={schedule.eyebrow} title={schedule.title} intro={schedule.pageIntro} />
      <section className="py-20 md:py-28">
        <Container className="grid gap-12 lg:grid-cols-2">
          {schedule.days.map((day) => (
            <Reveal key={day.label.en}>
              <article>
                <div className="flex items-end justify-between gap-4 border-b-2 border-deep pb-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-electric">
                      {t(day.label)}
                    </p>
                    <h2 className="mt-1 text-2xl font-bold text-deep md:text-3xl">{t(day.date)}</h2>
                    {day.theme && (
                      <p className="mt-2 font-medium text-muted-foreground">{t(day.theme)}</p>
                    )}
                  </div>
                </div>
                <ol>
                  {day.items.map((item) => {
                    const key = item.key;
                    return (
                      <li
                        key={item.time}
                        className="grid items-baseline gap-1 border-b border-line py-5 sm:grid-cols-[8.5rem_1fr] sm:gap-4"
                      >
                        <time className="font-display text-lg font-semibold tabular-nums text-muted-foreground">
                          {item.time}
                        </time>
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                          <p
                            className={cn(
                              "text-lg",
                              key ? "font-bold text-deep" : "font-medium text-foreground",
                            )}
                          >
                            {t(item.title)}
                          </p>
                          {key && (
                            <span className="rounded-full bg-deep px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide text-neon">
                              {t(schedule.keyMoment)}
                            </span>
                          )}
                          {item.note && (
                            <p className="basis-full leading-7 text-muted-foreground">
                              {t(item.note)}
                            </p>
                          )}
                        </div>
                      </li>
                    );
                  })}
                </ol>
                {day.footnote && (
                  <p className="mt-5 italic leading-7 text-muted-foreground">{t(day.footnote)}</p>
                )}
              </article>
            </Reveal>
          ))}
        </Container>
      </section>
      <RegisterBand />
    </>
  );
}

export function VenuePage() {
  const { t } = useLanguage();
  return (
    <>
      <PageHero eyebrow={venue.eyebrow} title={venue.title} intro={venue.pageIntro} />
      <section className="py-20 md:py-28">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:items-start">
          <Reveal>
            <div className="grid gap-8">
              <h2 className="text-3xl font-bold text-deep md:text-4xl">{venue.name}</h2>
              <dl className="grid gap-6">
                <div className="flex gap-4">
                  <MapPin className="mt-1 size-5 shrink-0 text-electric" aria-hidden="true" />
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
                      {t(venue.addressLabel)}
                    </dt>
                    <dd className="mt-1 text-lg leading-7 text-deep">
                      {venue.name}, {t(venue.address)}
                      <span className="block text-sm text-muted-foreground">{venue.plusCode}</span>
                    </dd>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CalendarDays className="mt-1 size-5 shrink-0 text-electric" aria-hidden="true" />
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
                      {t(venue.datesLabel)}
                    </dt>
                    <dd className="mt-1 text-lg leading-7 text-deep">{t(venue.dates)}</dd>
                  </div>
                </div>
              </dl>
              <Button asChild size="lg" className="w-fit">
                <ExternalLink href={venueMap.link}>
                  {t(venue.openMap)} <ArrowUpRight className="size-4" aria-hidden="true" />
                </ExternalLink>
              </Button>
            </div>
          </Reveal>
          <Reveal>
            <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-line bg-mist">
              <iframe
                src={venueMap.embed}
                title={t(venue.mapTitle)}
                className="size-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>
        </Container>
      </section>
      <RegisterBand />
    </>
  );
}

export function JudgingPage() {
  const { t } = useLanguage();
  return (
    <>
      <PageHero eyebrow={judging.eyebrow} title={judging.title} intro={judging.pageIntro} />
      <section className="py-20 md:py-28">
        <Container className="grid gap-14">
          <Reveal>
            <p className="max-w-3xl text-xl leading-9 text-deep">{t(judging.intro)}</p>
          </Reveal>
          <div className="grid gap-6">
            <Reveal>
              <h2 className="text-2xl font-bold text-deep md:text-3xl">{t(judging.awardsTitle)}</h2>
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {judging.awards.map((award) => (
                <Reveal key={award.title.en} className="h-full">
                  <article className="h-full rounded-2xl border border-line p-6">
                    <p className="font-display text-4xl font-black text-electric">{award.mark}</p>
                    <h3 className="mt-6 text-xl font-bold text-deep">{t(award.title)}</h3>
                    <p className="mt-2 leading-7 text-muted-foreground">{t(award.text)}</p>
                  </article>
                </Reveal>
              ))}
            </div>
            <Reveal>
              <p className="border-l-4 border-electric bg-mist px-5 py-4 font-semibold text-deep">
                {t(judging.awardsNote)}
              </p>
            </Reveal>
          </div>
          <div className="grid gap-6">
            <Reveal>
              <h2 className="text-2xl font-bold text-deep md:text-3xl">
                {t(judging.criteriaTitle)}
              </h2>
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {judging.criteria.map((criterion, index) => (
                <Reveal key={criterion.label.en} className="h-full">
                  <article className="h-full rounded-2xl border border-line p-6">
                    <p className="font-display text-4xl font-black text-electric">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-6 text-xl font-bold text-deep">{t(criterion.label)}</h3>
                    <p className="mt-2 leading-7 text-muted-foreground">{t(criterion.text)}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal className="grid gap-6 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
            <div>
              <h2 className="text-2xl font-bold text-deep md:text-3xl">
                {t(judging.submissionTitle)}
              </h2>
              <p className="mt-4 leading-7 text-muted-foreground">{t(judging.submissionIntro)}</p>
            </div>
            <div>
              <ul className="grid gap-3">
                {judging.submission.map((item) => (
                  <li key={item.en} className="flex gap-3 leading-7 text-deep">
                    <span
                      aria-hidden="true"
                      className="mt-2.5 size-2 shrink-0 rounded-full bg-electric"
                    />
                    {t(item)}
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-l-4 border-electric bg-mist px-5 py-4 font-semibold text-deep">
                {t(judging.submissionNote)}
              </p>
            </div>
          </Reveal>
        </Container>
      </section>
      <section className="py-20 md:py-28">
        <Container className="grid gap-6">
          <Reveal>
            <h2 className="text-2xl font-bold text-deep md:text-3xl">{t(judging.judgesTitle)}</h2>
            <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">
              {t(judging.judgesIntro)}
            </p>
          </Reveal>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {judging.judges.map((judge, index) => (
              <Reveal key={index} className="h-full">
                <li className="flex h-full flex-col rounded-2xl border border-line bg-white p-6">
                  <div className="grid h-24 place-items-center rounded-xl bg-mist px-6">
                    {judge.logo ? (
                      <img
                        src={judge.logo}
                        alt={t(judge.organization)}
                        className="max-h-14 w-auto max-w-full object-contain"
                        loading="lazy"
                      />
                    ) : (
                      <span className="text-center font-display text-lg font-bold text-deep">
                        {t(judge.organization)}
                      </span>
                    )}
                  </div>
                  {judge.name && <p className="mt-5 text-lg font-bold text-deep">{judge.name}</p>}
                  <p className={cn("font-semibold text-deep", judge.name ? "mt-1" : "mt-5")}>
                    {t(judge.role)}
                  </p>
                  <p className="text-muted-foreground">{t(judge.organization)}</p>
                </li>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>
      <section className="bg-mist py-20 md:py-28">
        <Container className="grid gap-10 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <h2 className="text-2xl font-bold text-deep md:text-3xl">{t(judging.pathTitle)}</h2>
            <ol className="mt-8 grid gap-4">
              {judging.path.map((step, index) => (
                <li key={step.en} className="flex gap-4 rounded-xl bg-white p-5">
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-deep font-display text-sm font-bold text-neon">
                    {index + 1}
                  </span>
                  <span className="pt-1 leading-7 text-deep">{t(step)}</span>
                </li>
              ))}
            </ol>
          </Reveal>
          <Reveal>
            <h2 className="text-2xl font-bold text-deep md:text-3xl">{t(judging.mentorsTitle)}</h2>
            <div className="mt-8 rounded-2xl border border-dashed border-line bg-white p-7">
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-electric">
                {t(ui.comingSoon)}
              </span>
              <p className="mt-3 leading-7 text-muted-foreground">{t(judging.mentorsText)}</p>
            </div>
          </Reveal>
        </Container>
      </section>
      <RegisterBand />
    </>
  );
}

const topicOrder: FaqTopic[] = ["registration", "teams", "participation", "event", "judging"];

export function FaqPage() {
  const { t } = useLanguage();
  return (
    <>
      <PageHero
        eyebrow={{ en: "FAQ", mn: "Асуулт, хариулт" }}
        title={faqs.title}
        intro={faqs.pageIntro}
      />
      <section className="py-16 md:py-24">
        <Container className="grid gap-12 lg:grid-cols-[220px_1fr] lg:gap-16">
          <nav
            aria-label={t({ en: "FAQ topics", mn: "Сэдвүүд" })}
            className="lg:sticky lg:top-24 lg:self-start"
          >
            <ul className="flex flex-wrap gap-2 lg:grid lg:gap-1">
              {topicOrder.map((topic) => (
                <li key={topic}>
                  <a
                    href={`#faq-${topic}`}
                    className="block rounded-lg border border-line px-3 py-2 text-sm font-semibold text-muted-foreground hover:border-electric hover:text-electric lg:border-transparent"
                  >
                    {t(faqs.topics[topic])}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="grid gap-14">
            {topicOrder.map((topic) => (
              <section key={topic} id={`faq-${topic}`} className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-deep">{t(faqs.topics[topic])}</h2>
                <Accordion type="multiple" className="mt-4 border-t border-line">
                  {faqs.items
                    .filter((item) => item.topic === topic)
                    .map((item) => (
                      <AccordionItem
                        key={item.question.en}
                        value={item.question.en}
                        className="border-line"
                      >
                        <AccordionTrigger className="py-5 text-left font-display text-lg font-semibold text-deep hover:no-underline">
                          {t(item.question)}
                        </AccordionTrigger>
                        <AccordionContent className="pb-5 pr-8 text-base leading-7 text-muted-foreground">
                          {t(item.answer)}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                </Accordion>
              </section>
            ))}
            <ContactCard />
          </div>
        </Container>
      </section>
      <OfficialLinks />
    </>
  );
}

function ContactCard() {
  const { t } = useLanguage();
  return (
    <div className="grid gap-5 rounded-2xl bg-deep p-7 text-white md:grid-cols-[1fr_auto] md:items-center">
      <div className="grid gap-2">
        <h2 className="text-2xl font-bold">
          {t({ en: "Still have a question?", mn: "Өөр асуулт байна уу?" })}
        </h2>
        <p className="text-on-deep">{contact.email ? contact.email : t(footer.emailSoon)}</p>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row">
        {contact.email && (
          <Button asChild variant="outlineLight">
            <a href={`mailto:${contact.email}`}>
              <Mail aria-hidden="true" /> Email
            </a>
          </Button>
        )}
        <Button asChild variant="outlineLight">
          <ExternalLink href={contact.questaInstagram}>
            <Instagram aria-hidden="true" /> {contact.questaInstagramHandle}
          </ExternalLink>
        </Button>
        <Button asChild variant="outlineLight">
          <ExternalLink href={contact.questaFacebook}>
            <Facebook aria-hidden="true" /> Facebook
          </ExternalLink>
        </Button>
        <Button asChild variant="outlineLight">
          <ExternalLink href={officialUrls.participantFaqs}>
            {t({ en: "Official FAQs", mn: "Албан ёсны FAQ" })} <ArrowUpRight aria-hidden="true" />
          </ExternalLink>
        </Button>
      </div>
    </div>
  );
}

export function OrganizersPage() {
  const { t } = useLanguage();
  return (
    <>
      <PageHero
        eyebrow={organizers.eyebrow}
        title={organizers.title}
        intro={organizers.pageIntro}
      />
      <section className="py-20 md:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          <Reveal className="grid place-items-center rounded-3xl border border-line bg-mist px-10 py-16">
            <QuestaLogo tone="dark" className="h-16 md:h-20" />
          </Reveal>
          <Reveal className="grid gap-5">
            <h2 className="text-3xl font-bold text-deep md:text-4xl">{t(organizers.hostTitle)}</h2>
            <p className="text-lg leading-8 text-muted-foreground">{t(organizers.hostText)}</p>
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="brand" size="lg">
                <ExternalLink href={contact.questaInstagram}>
                  <Instagram aria-hidden="true" /> {t(organizers.followQuesta)}
                </ExternalLink>
              </Button>
              <Button asChild variant="outlineBrand" size="lg">
                <ExternalLink href={contact.questaFacebook}>
                  <Facebook aria-hidden="true" /> Facebook
                </ExternalLink>
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
      <section className="bg-mist py-20 md:py-28">
        <Container className="grid gap-6 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <h2 className="text-2xl font-bold text-deep md:text-3xl">{t(organizers.teamTitle)}</h2>
            <p className="mt-4 leading-7 text-muted-foreground">{t(organizers.teamText)}</p>
          </Reveal>
          <Reveal className="grid content-start gap-4 rounded-2xl bg-white p-7">
            <p className="font-semibold text-deep">{t(organizers.partnerCta)}</p>
            {contact.email ? (
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-2 font-semibold text-electric hover:text-deep"
              >
                <Mail className="size-4" aria-hidden="true" /> {contact.email}
              </a>
            ) : (
              <p className="flex items-center gap-2 text-muted-foreground">
                <Mail className="size-4" aria-hidden="true" /> {t(footer.emailSoon)}
              </p>
            )}
            <ExternalLink
              href={contact.questaInstagram}
              className="flex items-center gap-2 font-semibold text-electric hover:text-deep"
            >
              <Instagram className="size-4" aria-hidden="true" /> {contact.questaInstagramHandle}
            </ExternalLink>
            <ExternalLink
              href={contact.questaFacebook}
              className="flex items-center gap-2 font-semibold text-electric hover:text-deep"
            >
              <Facebook className="size-4" aria-hidden="true" /> Questa Facebook
            </ExternalLink>
          </Reveal>
        </Container>
      </section>
      <RegisterBand />
    </>
  );
}

export function NotFoundPage() {
  const { t } = useLanguage();
  return (
    <section className="relative overflow-hidden bg-brand-gradient py-40 text-white">
      <Container className="grid justify-items-start gap-6">
        <p className="font-display text-7xl font-black text-neon">404</p>
        <h1 className="text-3xl font-bold md:text-4xl">
          {t({ en: "This page is lost in space.", mn: "Энэ хуудас сансарт төөрчээ." })}
        </h1>
        <Button asChild variant="register" size="lg">
          <Link to="/">
            {t(ui.backHome)} <ArrowRight aria-hidden="true" />
          </Link>
        </Button>
      </Container>
    </section>
  );
}
