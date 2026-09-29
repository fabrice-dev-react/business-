"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Car,
  Check,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  Compass,
  FileText,
  Fuel,
  Headset,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Quote,
  Repeat,
  Search,
  Settings2,
  ShieldCheck,
  Ship,
  Star,
  Tag,
  Truck,
  Users,
  Wallet,
  Wrench,
  X,
} from "lucide-react";
import {
  address,
  businessDescriptor,
  businessFullName,
  businessName,
  businessTagline,
  email,
  formatAmount,
  formatPrice,
  hours,
  mapUrl,
  navLinks,
  phone,
  phoneHref,
  whatsappLink,
} from "@/lib/site";
import {
  budgetBrackets,
  heroSlides,
  highlights,
  processSteps,
  reviews,
  services,
  stats,
  textureImage,
  tradeInPoints,
  vehicleCategories,
  vehicles,
  type Condition,
} from "@/lib/inventory";

const ICONS = {
  repeat: Repeat,
  wallet: Wallet,
  ship: Ship,
  truck: Truck,
  wrench: Wrench,
  shield: ShieldCheck,
  search: Search,
  tag: Tag,
  file: FileText,
  headset: Headset,
} as const;

const CONDITION_STYLES: Record<Condition, string> = {
  "Brand New": "bg-olive text-cream",
  "Certified Used": "bg-flame text-cream",
  Imported: "bg-gold text-coal",
};

export default function Home() {
  return (
    <main className="bg-coal text-cream">
      <Header />
      <Hero />
      <StatsStrip />
      <Inventory />
      <Process />
      <Services />
      <WhyUs />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingActions />
    </main>
  );
}

/* ─────────────────────────── Header ─────────────────────────── */

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-gold/15 bg-coal/85 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="group flex items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold text-coal transition-transform duration-300 group-hover:-rotate-6">
            <Car className="h-5 w-5" strokeWidth={2.4} />
          </span>
          <span className="leading-none">
            <span className="block font-display text-lg font-bold tracking-[0.08em] text-cream sm:text-xl">
              {businessName}
            </span>
            <span className="mt-0.5 block text-[0.6rem] font-semibold uppercase tracking-[0.24em] text-gold sm:tracking-[0.3em]">
              {businessTagline}
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium uppercase tracking-[0.16em] text-cream/75 transition-colors hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-flame px-6 py-3 text-sm font-semibold uppercase tracking-widest text-cream shadow-lg shadow-flame/25 transition-all hover:bg-gold hover:text-coal focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
          >
            Book a test drive
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 text-cream transition-colors hover:border-gold hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-cream/10 bg-coal/95 px-5 pb-6 pt-2 backdrop-blur-md lg:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-medium uppercase tracking-[0.14em] text-cream/85 transition-colors hover:bg-cream/5 hover:text-gold"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
            className="mt-4 flex items-center justify-center gap-2 rounded-full bg-flame px-6 py-3.5 text-sm font-semibold uppercase tracking-widest text-cream"
          >
            <MessageCircle className="h-4 w-4" />
            Book on WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}

/* ─────────────────────────── Hero ─────────────────────────── */

const SLIDE_INTERVAL = 7000;

function Hero() {
  const [index, setIndex] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    timer.current = setInterval(() => {
      setIndex((i) => (i + 1) % heroSlides.length);
    }, SLIDE_INTERVAL);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, []);

  const goTo = (target: number) => {
    if (timer.current) clearInterval(timer.current);
    setIndex((target + heroSlides.length) % heroSlides.length);
    timer.current = setInterval(() => {
      setIndex((idx) => (idx + 1) % heroSlides.length);
    }, SLIDE_INTERVAL);
  };

  return (
    <section
      id="top"
      className="grain relative flex min-h-screen flex-col justify-end overflow-hidden bg-coal"
    >
      {heroSlides.map((slide, i) => (
        <div
          key={slide.image}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            priority={i === 0}
            quality={85}
            sizes="100vw"
            className={`object-cover ${
              i === index ? "animate-zoom-slow" : ""
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-coal/92 via-coal/60 to-coal/25" />
          <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-coal to-transparent" />
        </div>
      ))}

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-12 pt-36 sm:px-8">
        <div className="max-w-3xl">
          <p className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-gold">
            <span className="h-px w-10 shrink-0 bg-gold/70" />
            {businessDescriptor}
          </p>

          <h1 className="font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            Honest cars.
            <br />
            <span className="text-gold">Honest prices.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/80 sm:text-xl">
            Hand-picked new and pre-owned vehicles in Kigali — every car
            inspected, documented and ready for a test drive. Trade-in,
            financing and delivery across Rwanda.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-5">
            <a
              href="#inventory"
              className="group inline-flex items-center gap-2.5 rounded-full bg-flame px-8 py-4 text-sm font-semibold uppercase tracking-widest text-cream shadow-xl shadow-flame/25 transition-colors hover:bg-gold hover:text-coal focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            >
              Browse inventory
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-cream/80 transition-colors hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            >
              <MessageCircle className="h-4 w-4" />
              Book on WhatsApp
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-cream/15 pt-6 text-sm text-cream/70">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4 text-gold" />
            150-point inspection
          </span>
          <span className="flex items-center gap-1.5">
            <Repeat className="h-4 w-4 text-gold" />
            Trade-in welcome
          </span>
          <span className="flex items-center gap-1.5">
            <span className="flex text-gold">
              {Array.from({ length: 5 }).map((_, s) => (
                <Star key={s} className="h-3.5 w-3.5 fill-gold" />
              ))}
            </span>
            4.9 — owner rating
          </span>
          <span className="ml-auto hidden text-cream/45 sm:inline">
            Call {phone}
          </span>
        </div>
      </div>

      <div className="absolute bottom-6 right-6 z-10 flex items-center gap-2 sm:bottom-8 sm:right-8">
        <button
          type="button"
          aria-label="Previous slide"
          onClick={() => goTo(index - 1)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/25 text-cream backdrop-blur-sm transition-colors hover:border-gold hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          aria-label="Next slide"
          onClick={() => goTo(index + 1)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/25 text-cream backdrop-blur-sm transition-colors hover:border-gold hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="absolute bottom-6 left-5 z-10 flex gap-2 sm:bottom-8 sm:left-8">
        {heroSlides.map((slide, i) => (
          <button
            key={slide.image}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => goTo(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? "w-8 bg-gold" : "w-3 bg-cream/35 hover:bg-cream/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────── Stats strip ─────────────────────────── */

function StatsStrip() {
  return (
    <section className="border-y border-cream/10 bg-charcoal">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-8 px-5 py-10 sm:px-8 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center sm:text-left">
            <p className="font-display text-3xl font-bold text-gold sm:text-4xl">
              {stat.value}
            </p>
            <p className="mt-1 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-cream/60">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────── Inventory ─────────────────────────── */

function Inventory() {
  const [active, setActive] = useState<string>("All");

  const cars =
    active === "All"
      ? vehicles
      : vehicles.filter((car) => car.category === active);

  const countFor = (category: string) =>
    category === "All"
      ? vehicles.length
      : vehicles.filter((car) => car.category === category).length;

  return (
    <section id="inventory" className="paper bg-cream text-coal">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <Reveal className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-flame">
              <span className="h-px w-10 bg-flame/60" />
              Featured inventory
            </p>
            <h2 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Hand-picked cars, <span className="text-gold">ready to drive</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-coal/60">
            Every car is inspected, photographed and priced honestly. All prices
            are in RWF and include our full handover paperwork — no hidden fees
            at the counter.
          </p>
        </Reveal>

        <Reveal className="mb-10 flex flex-wrap gap-2.5">
          {vehicleCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              aria-pressed={active === category}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold tracking-wide transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-flame ${
                active === category
                  ? "bg-coal text-cream shadow-lg"
                  : "border border-linen bg-white text-coal/70 hover:border-coal/30"
              }`}
            >
              {category}
              <span
                className={`ml-2 text-xs ${
                  active === category ? "text-gold" : "text-coal/40"
                }`}
              >
                {countFor(category)}
              </span>
            </button>
          ))}
        </Reveal>

        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {cars.map((car, i) => (
            <Reveal key={car.name} delay={(i % 3) * 90}>
              <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-linen bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={car.image}
                    alt={car.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-coal/75 via-coal/10 to-transparent" />

                  <span
                    className={`absolute left-4 top-4 rounded-full px-3.5 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.16em] ${CONDITION_STYLES[car.condition]}`}
                  >
                    {car.condition}
                  </span>
                  <span className="absolute right-4 top-4 rounded-full bg-coal/75 px-3.5 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-cream backdrop-blur-sm">
                    {car.year}
                  </span>

                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                    <span className="font-display text-2xl font-bold leading-none text-cream">
                      {formatPrice(car.price)}
                    </span>
                    <span className="shrink-0 rounded-full bg-cream/15 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-cream backdrop-blur-sm">
                      {car.mileage === 0
                        ? "0 km"
                        : `${formatAmount(car.mileage)} km`}
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-flame">
                    {car.category}
                  </span>
                  <h3 className="mt-2 font-display text-xl font-bold leading-snug text-coal">
                    {car.name}
                  </h3>
                  <p className="mt-1.5 text-sm text-coal/55">{car.tagline}</p>

                  <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 border-t border-linen pt-5 text-sm text-coal/75">
                    <Spec icon={Settings2} label={car.transmission} />
                    <Spec icon={Fuel} label={car.fuel} />
                    <Spec icon={Compass} label={car.drive} />
                    <Spec icon={Users} label={`${car.seats} seats`} />
                  </ul>

                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="group/btn mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-coal px-6 py-3.5 text-sm font-semibold uppercase tracking-widest text-cream transition-colors hover:bg-flame focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-flame"
                  >
                    Book a test drive
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 text-center">
          <p className="text-sm text-coal/55">
            Not seeing the model you want? We source and import to order.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full border border-coal/20 px-6 py-3 text-sm font-semibold uppercase tracking-widest text-coal transition-colors hover:border-flame hover:text-flame focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-flame"
          >
            <MessageCircle className="h-4 w-4" />
            Ask us to source a car
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function Spec({
  icon: Icon,
  label,
}: {
  icon: typeof Users;
  label: string;
}) {
  return (
    <li className="flex items-center gap-2">
      <Icon className="h-4 w-4 shrink-0 text-flame" />
      <span className="truncate">{label}</span>
    </li>
  );
}

/* ─────────────────────────── Process ─────────────────────────── */

function Process() {
  return (
    <section id="process" className="bg-charcoal text-cream">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <Reveal className="mb-16 max-w-2xl">
          <p className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-gold">
            <span className="h-px w-10 bg-gold/60" />
            How it works
          </p>
          <h2 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Three steps from <span className="text-gold">browsing to driving</span>
          </h2>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-3">
          {processSteps.map((step, i) => (
            <Reveal key={step.title} delay={i * 110}>
              <div className="group relative h-full overflow-hidden rounded-[1.75rem] border border-cream/10 bg-coal/60 p-8 transition-all duration-300 hover:border-gold/50">
                <span className="pointer-events-none absolute -right-2 -top-6 font-display text-[7rem] font-bold leading-none text-cream/[0.06] transition-colors duration-300 group-hover:text-gold/10">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="relative">
                  <h3 className="font-display text-2xl font-bold text-cream">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-cream/60">
                    {step.note}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── Services ─────────────────────────── */

function Services() {
  return (
    <section id="services" className="grain relative overflow-hidden bg-coal text-cream">
      <div className="relative z-10 mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <Reveal className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-gold">
              <span className="h-px w-10 bg-gold/60" />
              What we do
            </p>
            <h2 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              More than just <span className="text-gold">selling cars</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-cream/60">
            From financing a first car to importing your next one,
            {businessName} handles the paperwork so you only have to choose.
          </p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, i) => {
            const Icon = ICONS[service.icon];
            return (
              <Reveal key={service.title} delay={(i % 3) * 90}>
                <div className="group h-full rounded-[1.75rem] border border-cream/10 bg-coal/60 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/50 hover:shadow-xl hover:shadow-gold/5">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/15 text-gold transition-colors group-hover:bg-gold group-hover:text-coal">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-bold text-cream">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-cream/60">
                    {service.note}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-16">
          <div className="grid overflow-hidden rounded-[2rem] border border-cream/10 lg:grid-cols-[1fr_380px]">
            <div className="flex flex-col justify-center bg-coal p-8 sm:p-12">
              <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.28em] text-gold">
                <BadgeCheck className="h-4 w-4" />
                Trade-in welcome
              </p>
              <h3 className="font-display text-3xl font-bold text-cream sm:text-4xl">
                Selling a car as well as buying?
              </h3>
              <p className="mt-4 max-w-md text-cream/70">
                Bring your vehicle to our Kigali yard for a same-day valuation.
                If you buy from us, we take care of the ownership transfer and
                deduct the value from your purchase.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-flame px-7 py-3.5 text-sm font-semibold uppercase tracking-widest text-cream shadow-lg shadow-flame/25 transition-colors hover:bg-gold hover:text-coal focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                >
                  Get a valuation
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <p className="text-sm text-cream/50">No obligation, no fees</p>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-4 border-t border-cream/10 bg-charcoal p-8 sm:p-10 lg:border-l lg:border-t-0">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold">
                How trade-in works
              </p>
              <ul className="space-y-3.5">
                {tradeInPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-cream/75">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─────────────────────────── Why us ─────────────────────────── */

function WhyUs() {
  return (
    <section id="why" className="grain relative overflow-hidden bg-coal text-cream">
      <div className="absolute inset-0">
        <Image
          src={textureImage.src}
          alt={textureImage.alt}
          fill
          sizes="100vw"
          className="object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-coal/85 via-coal/70 to-coal/90" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <Reveal className="mb-16 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-gold">
              <span className="h-px w-10 bg-gold/60" />
              Why choose us
            </p>
            <h2 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Built on trust, <span className="text-gold">not shortcuts</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-cream/60">
            {businessName} was built on one promise — hand you a car that is
            exactly what we advertised, at a price that makes sense.
          </p>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, i) => {
            const Icon = ICONS[item.icon];
            return (
              <Reveal key={item.title} delay={(i % 4) * 90}>
                <div className="h-full rounded-[1.75rem] border border-cream/10 bg-coal/60 p-7 transition-all duration-300 hover:border-gold/50">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/15 text-gold">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-bold text-cream">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/60">
                    {item.note}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── Testimonials ─────────────────────────── */

function Testimonials() {
  return (
    <section id="reviews" className="paper bg-cream text-coal">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <Reveal className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-flame">
            Happy owners
          </p>
          <h2 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            They drove out <span className="text-gold">with the keys</span>
          </h2>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-linen bg-white px-5 py-2.5">
            <span className="flex text-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-gold" />
              ))}
            </span>
            <span className="text-sm font-semibold text-coal/80">
              4.9 average · owner reviews
            </span>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((review, i) => (
            <Reveal key={review.name} delay={i * 120}>
              <figure className="flex h-full flex-col rounded-3xl border border-linen bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                <Quote className="h-8 w-8 text-gold" />
                <div className="mt-4 flex text-gold">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-gold" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-lg leading-relaxed text-coal/80">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-linen pt-5">
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-full ${review.color} text-sm font-bold text-cream`}
                  >
                    {review.initials}
                  </span>
                  <div>
                    <p className="font-display text-lg font-bold leading-tight text-coal">
                      {review.name}
                    </p>
                    <p className="text-sm text-coal/55">{review.role}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── Contact ─────────────────────────── */

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="border-t border-cream/10 bg-coal text-cream">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 py-24 sm:px-8 lg:grid-cols-2 lg:py-32">
        <Reveal>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-gold">
            Get in touch
          </p>
          <h2 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Book a test drive <span className="text-gold">this week</span>
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-cream/70">
            Send us the car you are interested in and we will confirm
            availability, arrange a viewing and hold it for you. No obligation.
          </p>

          <div className="mt-10 space-y-6">
            <ContactRow
              icon={Phone}
              title="Call or WhatsApp"
              lines={[phone, "Replies within minutes"]}
              href={whatsappLink}
              external
            />
            <ContactRow
              icon={Mail}
              title="Email us"
              lines={[email, "Replies the same day"]}
              href={`mailto:${email}`}
            />
            <ContactRow
              icon={MapPin}
              title="Visit the yard"
              lines={[address, "Free delivery anywhere in Kigali"]}
              href={mapUrl}
              external
            />
            <ContactRow
              icon={Clock}
              title="Opening hours"
              lines={hours.map((row) => `${row.days} — ${row.time}`)}
            />
          </div>
        </Reveal>

        <Reveal delay={140}>
          <div className="rounded-[2rem] border border-cream/10 bg-charcoal p-8 shadow-2xl sm:p-10">
            {submitted ? (
              <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                <span className="flex h-20 w-20 items-center justify-center rounded-full bg-gold/15 text-gold">
                  <CheckCircle2 className="h-10 w-10" />
                </span>
                <h3 className="mt-6 font-display text-3xl font-bold text-cream">
                  Request received
                </h3>
                <p className="mt-3 max-w-sm text-cream/70">
                  Thank you. {businessFullName} will call you shortly to confirm
                  the viewing.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-sm font-semibold uppercase tracking-widest text-gold underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <>
                <h3 className="font-display text-2xl font-bold text-cream">
                  Request a test drive
                </h3>
                <p className="mt-1 text-sm text-cream/60">
                  We&apos;ll confirm availability and price by phone.
                </p>
                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Full name" htmlFor="name">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Your name"
                        className={inputClass}
                      />
                    </Field>
                    <Field label="Phone number" htmlFor="phone">
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="0788 000 000"
                        className={inputClass}
                      />
                    </Field>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Vehicle of interest" htmlFor="vehicle">
                      <select
                        id="vehicle"
                        name="vehicle"
                        required
                        defaultValue={vehicles[0].name}
                        className={inputClass}
                      >
                        {vehicles.map((car) => (
                          <option key={car.name} value={car.name} className="bg-coal">
                            {car.name}
                          </option>
                        ))}
                        <option value="Something else in stock" className="bg-coal">
                          Something else in stock
                        </option>
                      </select>
                    </Field>
                    <Field label="Budget" htmlFor="budget">
                      <select
                        id="budget"
                        name="budget"
                        required
                        defaultValue={budgetBrackets[1]}
                        className={inputClass}
                      >
                        {budgetBrackets.map((bracket) => (
                          <option key={bracket} value={bracket} className="bg-coal">
                            {bracket}
                          </option>
                        ))}
                      </select>
                    </Field>
                  </div>
                  <Field label="Message (optional)" htmlFor="message">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Trade-in? Financing? Delivery to your district? Tell us what you need."
                      className={`${inputClass} resize-none`}
                    />
                  </Field>
                  <button
                    type="submit"
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-flame px-8 py-4 text-sm font-semibold uppercase tracking-widest text-cream shadow-lg shadow-flame/25 transition-colors hover:bg-gold hover:text-coal focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                  >
                    Request test drive
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </form>
              </>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const inputClass =
  "w-full rounded-xl border border-cream/15 bg-coal/50 px-4 py-3 text-cream placeholder:text-cream/35 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold";

function ContactRow({
  icon: Icon,
  title,
  lines,
  href,
  external,
}: {
  icon: typeof Phone;
  title: string;
  lines: string[];
  href?: string;
  external?: boolean;
}) {
  const content = (
    <>
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/30 text-gold">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <p className="font-display text-xl font-bold text-cream">{title}</p>
        {lines.map((line) => (
          <p key={line} className="mt-0.5 text-sm text-cream/70">
            {line}
          </p>
        ))}
      </div>
    </>
  );

  if (!href) {
    return <div className="flex items-start gap-4">{content}</div>;
  }

  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className="group flex items-start gap-4 transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
    >
      {content}
      <ArrowUpRight className="mt-3 h-4 w-4 shrink-0 text-gold opacity-0 transition-opacity group-hover:opacity-100" />
    </a>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.18em] text-cream/55">
        {label}
      </span>
      {children}
    </label>
  );
}

/* ─────────────────────────── Footer ─────────────────────────── */

function Footer() {
  return (
    <footer className="border-t border-cream/10 bg-coal text-cream">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <a href="#top" className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold text-coal">
              <Car className="h-5 w-5" strokeWidth={2.4} />
            </span>
            <span className="leading-none">
              <span className="block font-display text-lg font-bold tracking-[0.08em] sm:text-xl">
                {businessName}
              </span>
              <span className="mt-0.5 block text-[0.6rem] font-semibold uppercase tracking-[0.24em] text-gold sm:tracking-[0.3em]">
                {businessTagline}
              </span>
            </span>
          </a>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/60">
            New and pre-owned cars in Kigali — inspected, documented and priced
            honestly, with delivery across Rwanda.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-flame px-5 py-3 text-xs font-semibold uppercase tracking-widest text-cream transition-colors hover:bg-gold hover:text-coal focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp us
          </a>
        </div>

        <div>
          <h4 className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-gold">
            Explore
          </h4>
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-cream/70 transition-colors hover:text-gold"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#why"
                className="text-sm text-cream/70 transition-colors hover:text-gold"
              >
                Why choose us
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-gold">
            Contact
          </h4>
          <ul className="space-y-4 text-sm text-cream/70">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a
                href={mapUrl}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-gold"
              >
                {address}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a
                href={`tel:${phoneHref}`}
                className="transition-colors hover:text-gold"
              >
                {phone}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a
                href={`mailto:${email}`}
                className="transition-colors hover:text-gold"
              >
                {email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-gold">
            Hours
          </h4>
          <ul className="space-y-3 text-sm text-cream/70">
            {hours.map((row) => (
              <li key={row.days} className="flex justify-between gap-6">
                <span>{row.days}</span>
                <span className="shrink-0 text-right">{row.time}</span>
              </li>
            ))}
            <li className="pt-2 text-cream/45">
              Kinyarwanda · English · Français
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-xs text-cream/45 sm:flex-row sm:px-8">
          <p>
            © {new Date().getFullYear()} {businessFullName}. All rights
            reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Honest cars <Check className="h-3.5 w-3.5 text-gold" /> honest
            prices.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────────────────── Floating actions ─────────────────────────── */

function FloatingActions() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-5 right-5 z-40 flex flex-col gap-3 transition-all duration-300 sm:bottom-8 sm:right-8 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <a
        href={`tel:${phoneHref}`}
        aria-label={`Call ${businessFullName}`}
        className="flex h-12 w-12 items-center justify-center rounded-full border border-cream/15 bg-charcoal/90 text-cream backdrop-blur transition-colors hover:border-gold hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
      >
        <Phone className="h-5 w-5" />
      </a>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        aria-label={`WhatsApp ${businessFullName}`}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-olive text-cream shadow-xl shadow-olive/25 transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}

/* ─────────────────────────── Reveal helper ─────────────────────────── */

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.12 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
