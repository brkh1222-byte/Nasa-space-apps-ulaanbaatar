import { useEffect, useState, type ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, Menu, X } from "lucide-react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";

import { contact, officialUrls, spaceAppsSocials } from "@/content/site-config";
import {
  footer,
  languageNames,
  navItems,
  officialLinks,
  ui,
  type Language,
} from "@/content/site-content";
import { useLanguage } from "@/lib/language";
import { cn } from "@/lib/utils";

import { Container, ExternalLink, Lockup, QuestaLogo, RegisterButton } from "./primitives";

export function SiteLayout({ children }: { children: ReactNode }) {
  const { t } = useLanguage();
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <a
        href="#main"
        className="fixed left-4 top-3 z-[70] -translate-y-20 rounded-lg bg-deep px-4 py-2 text-sm font-bold text-white focus:translate-y-0"
      >
        {t(ui.skip)}
      </a>
      <SiteHeader />
      <main id="main" className="flex-1">
        {children}
      </main>
      <SiteFooter />
      <MobileRegisterBar />
    </div>
  );
}

function useScrolledPast(threshold: number) {
  const { scrollY } = useScroll();
  const [past, setPast] = useState(false);
  useMotionValueEvent(scrollY, "change", (y) => setPast(y > threshold));
  useEffect(() => setPast(window.scrollY > threshold), [threshold]);
  return past;
}

function LanguageSwitch({ tone }: { tone: "dark" | "light" }) {
  const { language, setLanguage, t } = useLanguage();
  return (
    <div
      role="group"
      aria-label={t(ui.language)}
      className={cn(
        "flex items-center rounded-lg border p-0.5",
        tone === "light" ? "border-white/30" : "border-line",
      )}
    >
      {(Object.keys(languageNames) as Language[]).map((code) => {
        const active = language === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLanguage(code)}
            aria-pressed={active}
            className={cn(
              "h-7 rounded-md px-2.5 text-[11px] font-bold transition-colors",
              active
                ? tone === "light"
                  ? "bg-white text-deep"
                  : "bg-deep text-white"
                : tone === "light"
                  ? "text-white/80 hover:text-white"
                  : "text-muted-foreground hover:text-deep",
            )}
          >
            {languageNames[code]}
          </button>
        );
      })}
    </div>
  );
}

function SiteHeader() {
  const { t } = useLanguage();
  const scrolled = useScrolledPast(24);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;
  const tone = solid ? "dark" : "light";

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,height] duration-300",
          solid
            ? "h-16 bg-white/95 shadow-[0_1px_0_var(--line)] backdrop-blur-md"
            : "h-20 bg-transparent",
        )}
      >
        <Container className="flex h-full items-center justify-between gap-6">
          <Link
            to="/"
            className="shrink-0 rounded-md"
            aria-label="NASA Space Apps Challenge Ulaanbaatar, home"
          >
            <Lockup tone={tone} compact />
          </Link>
          <nav className="hidden items-center gap-5 xl:flex 2xl:gap-7" aria-label="Primary">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "relative whitespace-nowrap text-sm font-semibold transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:bg-current after:transition-all hover:after:w-full",
                  tone === "light"
                    ? "text-white/85 hover:text-white"
                    : "text-muted-foreground hover:text-deep",
                )}
                activeProps={{
                  className: cn("after:w-full", tone === "light" ? "!text-white" : "!text-deep"),
                }}
              >
                {t(item.label)}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2.5">
            <div className="hidden sm:block">
              <LanguageSwitch tone={tone} />
            </div>
            <RegisterButton size="sm" className="hidden md:inline-flex" />
            <button
              type="button"
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? t(ui.close) : t(ui.menu)}
              className={cn(
                "grid size-10 place-items-center rounded-lg xl:hidden",
                tone === "light" ? "text-white hover:bg-white/10" : "text-deep hover:bg-mist",
              )}
            >
              {open ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </Container>
      </header>
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 bottom-0 top-16 z-50 flex flex-col overflow-y-auto bg-white xl:hidden"
          >
            <Container className="flex flex-1 flex-col gap-8 py-8">
              <nav className="grid gap-1" aria-label="Mobile">
                <Link
                  to="/"
                  className="rounded-lg px-2 py-3 text-2xl font-bold text-deep"
                  activeOptions={{ exact: true }}
                  activeProps={{ className: "text-electric" }}
                >
                  {t({ en: "Home", mn: "Нүүр" })}
                </Link>
                {navItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="rounded-lg px-2 py-3 text-2xl font-bold text-deep"
                    activeProps={{ className: "text-electric" }}
                  >
                    {t(item.label)}
                  </Link>
                ))}
              </nav>
              <div className="flex items-center gap-3 border-t border-line pt-6">
                <span className="text-sm font-semibold text-muted-foreground">
                  {t(ui.language)}
                </span>
                <LanguageSwitch tone="dark" />
              </div>
              <div className="mt-auto grid gap-3">
                <RegisterButton label={ui.registerLong} className="w-full" />
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function MobileRegisterBar() {
  const show = useScrolledPast(520);
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 80 }}
          animate={{ y: 0 }}
          exit={{ y: 80 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/95 px-4 pt-3 backdrop-blur-md md:hidden"
          style={{ paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 12px)" }}
        >
          <RegisterButton label={ui.registerLong} className="w-full" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function SiteFooter() {
  const { t } = useLanguage();
  return (
    <footer className="bg-deep pb-28 pt-16 text-on-deep md:pb-10">
      <Container className="grid gap-12">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div className="grid content-start gap-6">
            <Lockup tone="light" />
            <div className="flex items-center gap-3 text-sm">
              <span>{t(ui.hostedBy)}</span>
              <QuestaLogo tone="light" className="h-6" />
            </div>
            <p className="max-w-sm text-sm leading-6">{t(footer.identity)}</p>
          </div>
          <div className="grid content-start gap-3">
            <p className="font-display text-sm font-bold text-white">{t(footer.pagesLabel)}</p>
            {navItems.map((item) => (
              <Link key={item.to} to={item.to} className="text-sm hover:text-white">
                {t(item.label)}
              </Link>
            ))}
          </div>
          <div className="grid content-start gap-3">
            <p className="font-display text-sm font-bold text-white">{t(footer.officialLabel)}</p>
            {officialLinks.items.map((item) => (
              <ExternalLink
                key={item.key}
                href={officialUrls[item.key]}
                className="text-sm hover:text-white"
              >
                {t(item.label)}
              </ExternalLink>
            ))}
          </div>
          <div className="grid content-start gap-3">
            <p className="font-display text-sm font-bold text-white">{t(footer.contactLabel)}</p>
            {contact.email ? (
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-2 text-sm hover:text-white"
              >
                <Mail className="size-4" aria-hidden="true" /> {contact.email}
              </a>
            ) : (
              <span className="flex items-center gap-2 text-sm">
                <Mail className="size-4" aria-hidden="true" /> {t(footer.emailSoon)}
              </span>
            )}
            <ExternalLink
              href={contact.questaInstagram}
              className="flex items-center gap-2 text-sm hover:text-white"
            >
              <Instagram className="size-4" aria-hidden="true" /> Questa{" "}
              {contact.questaInstagramHandle}
            </ExternalLink>
            <ExternalLink
              href={contact.questaFacebook}
              className="flex items-center gap-2 text-sm hover:text-white"
            >
              <Facebook className="size-4" aria-hidden="true" /> Questa Facebook
            </ExternalLink>
            <p className="mt-4 font-display text-sm font-bold text-white">
              {t(footer.followSpaceApps)}
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {spaceAppsSocials.map((social) => (
                <ExternalLink
                  key={social.label}
                  href={social.href}
                  className="text-sm hover:text-white"
                >
                  {social.label}
                </ExternalLink>
              ))}
            </div>
          </div>
        </div>
        <div className="grid gap-4 border-t border-white/15 pt-8 text-xs leading-5 md:grid-cols-[1fr_auto] md:gap-10">
          <p className="max-w-3xl">{t(footer.disclaimer)}</p>
          <p className="whitespace-nowrap">{t(footer.copyright)}</p>
        </div>
      </Container>
    </footer>
  );
}
