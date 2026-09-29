"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarCheck,
  Car,
  CarFront,
  Check,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  Fuel,
  Gauge,
  Luggage,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Navigation,
  Phone,
  Quote,
  Route,
  Settings2,
  Shield,
  ShieldCheck,
  Star,
  Users,
  X,
} from "lucide-react";
import {
  address,
  businessName,
  businessShortName,
  email,
  phone,
  whatsapp,
} from "@/lib/site";

const WHATSAPP_LINK = `https://wa.me/${whatsapp.replace(/\s/g, "")}?text=${encodeURIComponent(
  "Hello GENI CAR RENTAL KIGALI, I would like to enquire about renting a car.",
)}`;

const NAV_LINKS = [
  { label: "Fleet", href: "#fleet" },
  { label: "Services", href: "#services" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

const SLIDES = [
  {
    image:
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=2200&q=80",
    alt: "A car driving along a scenic open road",
  },
  {
    image:
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=2200&q=80",
    alt: "A modern sedan parked at night",
  },
  {
    image:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=2200&q=80",
    alt: "A luxury car on the road at sunset",
  },
  {
    image:
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=2200&q=80",
    alt: "Driving through the open countryside",
  },
];

const FLEET_CATEGORIES = ["All", "SUV & 4x4", "Sedans", "Premium"];

const FLEET = [
  {
    name: "Toyota RAV4",
    category: "SUV & 4x4",
    tagline: "The go-anywhere city SUV",
    price: "40,000",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1000&q=80",
    alt: "Silver Toyota RAV4 style SUV",
    passengers: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    bags: 3,
    rating: 4.8,
  },
  {
    name: "Toyota Prado",
    category: "SUV & 4x4",
    tagline: "Rugged, spacious, dependable",
    price: "90,000",
    image:
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1000&q=80",
    alt: "Black luxury SUV",
    passengers: 7,
    transmission: "Automatic",
    fuel: "Diesel",
    bags: 4,
    rating: 4.9,
  },
  {
    name: "Toyota Land Cruiser",
    category: "SUV & 4x4",
    tagline: "Built for Rwanda's rugged roads",
    price: "110,000",
    image:
      "https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1000&q=80",
    alt: "Four-wheel-drive vehicle off road",
    passengers: 7,
    transmission: "Manual",
    fuel: "Diesel",
    bags: 4,
    rating: 4.9,
  },
  {
    name: "Toyota Corolla",
    category: "Sedans",
    tagline: "The efficient everyday driver",
    price: "25,000",
    image:
      "https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&w=1000&q=80",
    alt: "Dark blue sedan car",
    passengers: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    bags: 2,
    rating: 4.7,
  },
  {
    name: "Executive Sedan",
    category: "Premium",
    tagline: "Arrive first-class, every time",
    price: "75,000",
    image:
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1000&q=80",
    alt: "Premium executive sedan",
    passengers: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    bags: 3,
    rating: 4.9,
  },
  {
    name: "SUV — Family Class",
    category: "Premium",
    tagline: "Comfort for the whole family",
    price: "60,000",
    image:
      "https://images.unsplash.com/photo-1567818735868-e71b99932e29?auto=format&fit=crop&w=1000&q=80",
    alt: "Family-size SUV on the road",
    passengers: 7,
    transmission: "Automatic",
    fuel: "Petrol",
    bags: 3,
    rating: 4.8,
  },
];

const SERVICES = [
  {
    icon: CarFront,
    title: "Self-Drive Rental",
    note: "Take the wheel yourself with fully-insured vehicles, flexible mileage and transparent daily rates.",
  },
  {
    icon: Navigation,
    title: "Chauffeured Drive",
    note: "Relax with a professional, English & Kinyarwanda-speaking driver for business or leisure.",
  },
  {
    icon: Route,
    title: "Airport Transfer",
    note: "Meet-and-greet pickups at Kigali International Airport — we watch your flight and wait for you.",
  },
  {
    icon: CalendarCheck,
    title: "Long-Term Leasing",
    note: "Weekly, monthly and corporate leasing plans with security, maintenance and roadside support included.",
  },
  {
    icon: Shield,
    title: "All-Risk Insurance",
    note: "Every rental comes with comprehensive coverage — drive with confidence on every road in Rwanda.",
  },
  {
    icon: Settings2,
    title: "GPS & Cross-Border",
    note: "Satellite tracking and permits for scenic trips to Musanze, Rubavu, Akagera and beyond.",
  },
];

const HIGHLIGHTS = [
  {
    icon: Clock,
    title: "Available 24/7",
    note: "Pick up or drop off your car at any hour, every day of the week.",
  },
  {
    icon: ShieldCheck,
    title: "Fully Insured Fleet",
    note: "Comprehensive all-risk cover on every single vehicle we rent out.",
  },
  {
    icon: Users,
    title: "Rwanda's Drivers",
    note: "Chauffeured options with experienced local drivers who know every road.",
  },
  {
    icon: Gauge,
    title: "Well-Maintained Cars",
    note: "Serviced after every trip with a full pre-handover check, every time.",
  },
];

const STATS = [
  { value: "60+", label: "Cars in our fleet" },
  { value: "12", label: "Cities & districts served" },
  { value: "900+", label: "Happy clients each year" },
  { value: "4.9★", label: "Average client rating" },
];

const REVIEWS = [
  {
    quote:
      "The Prado was spotless and ready at the airport exactly on time. State insurance with no hidden costs — the drive to Akagera was a dream.",
    name: "Jean-Bosco N.",
    role: "Akagera safari trip",
    initials: "JN",
    color: "bg-flame",
  },
  {
    quote:
      "We rented three Corollas for a corporate workshop. Booking was done over WhatsApp in minutes and billing was perfectly organised.",
    name: "Diane U.",
    role: "Corporate client",
    initials: "DU",
    color: "bg-olive",
  },
  {
    quote:
      "Their driver handled our wedding convoy across Kigali smoothly while we focused on the day. Polite, punctual, professional.",
    name: "Patrick M.",
    role: "Wedding convoy",
    initials: "PM",
    color: "bg-gold",
  },
];

const HOURS = [
  { days: "Monday – Sunday", time: "24 hours / 7 days" },
  { days: "Airport desk", time: "6:00 am – 11:00 pm" },
];

const RENTAL_SERVICES = [
  "Toyota RAV4 / Prado / Land Cruiser",
  "Executive sedan",
  "Family SUV",
  "Long-term corporate lease",
  "Chauffeured hire",
  "Airport transfer",
];

export default function Home() {
  return (
    <main className="bg-coal text-cream">
      <Header />
      <Hero />
      <StatsStrip />
      <Fleet />
      <Services />
      <WhyUs />
      <Testimonials />
      <Contact />
      <Footer />
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
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold text-coal transition-transform duration-300 group-hover:-rotate-6">
            <Car className="h-5 w-5" strokeWidth={2.4} />
          </span>
          <span className="leading-none">
            <span className="block font-display text-xl font-bold tracking-[0.14em] text-cream">
              GENI
            </span>
            <span className="block text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-gold">
              Car Rental Kigali
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium uppercase tracking-[0.18em] text-cream/75 transition-colors hover:text-gold"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-flame px-6 py-3 text-sm font-semibold uppercase tracking-widest text-cream shadow-lg shadow-flame/25 transition-all hover:bg-gold hover:text-coal"
          >
            Book Now
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 text-cream lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-cream/10 bg-coal/95 px-5 pb-6 pt-2 backdrop-blur-md lg:hidden">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-medium uppercase tracking-[0.15em] text-cream/85 transition-colors hover:bg-cream/5 hover:text-gold"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={WHATSAPP_LINK}
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

function Hero() {
  const [index, setIndex] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    timer.current = setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, 7000);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, []);

  const goTo = (i: number) => {
    if (timer.current) clearInterval(timer.current);
    setIndex((i + SLIDES.length) % SLIDES.length);
    timer.current = setInterval(() => {
      setIndex((idx) => (idx + 1) % SLIDES.length);
    }, 7000);
  };

  return (
    <section
      id="top"
      className="grain relative flex min-h-screen flex-col justify-end overflow-hidden bg-coal"
    >
      {SLIDES.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            priority={i === 0}
            sizes="100vw"
            className={`object-cover ${
              i === index ? "animate-zoom-slow" : ""
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-coal/90 via-coal/55 to-coal/20" />
          <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-coal to-transparent" />
        </div>
      ))}

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-12 pt-36 sm:px-8">
        <div className="max-w-3xl">
          <p className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.32em] text-gold">
            <span className="h-px w-10 shrink-0 bg-gold/70" />
            Trusted car hire in Kigali
          </p>

          <h1 className="font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            Your car,
            <br />
            <span className="text-gold">your journey.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/80 sm:text-xl">
            Explore Rwanda your way. From modern city cars to rugged 4x4s —
            well-serviced, fully-insured vehicles with transparent daily
            prices across Kigali.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-5">
            <a
              href="#fleet"
              className="group inline-flex items-center gap-2.5 rounded-full bg-flame px-8 py-4 text-sm font-semibold uppercase tracking-widest text-cream shadow-xl shadow-flame/25 transition-colors hover:bg-gold hover:text-coal"
            >
              Browse the fleet
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="group text-sm font-semibold uppercase tracking-widest text-cream/80 transition-colors hover:text-gold"
            >
              Book on WhatsApp
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-cream/15 pt-6 text-sm text-cream/70">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4 text-gold" />
            All vehicles fully insured
          </span>
          <span className="flex items-center gap-1.5">
            <span className="flex text-gold">
              {Array.from({ length: 5 }).map((_, s) => (
                <Star key={s} className="h-3.5 w-3.5 fill-gold" />
              ))}
            </span>
            4.9 — client rating
          </span>
          <span>Free airport delivery</span>
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
          className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/25 text-cream backdrop-blur-sm transition-colors hover:border-gold hover:text-gold"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          aria-label="Next slide"
          onClick={() => goTo(index + 1)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/25 text-cream backdrop-blur-sm transition-colors hover:border-gold hover:text-gold"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="absolute bottom-6 left-5 z-10 flex gap-2 sm:left-8 sm:bottom-8">
        {SLIDES.map((_, i) => (
          <button
            key={i}
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
        {STATS.map((stat) => (
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

/* ─────────────────────────── Fleet ─────────────────────────── */

function Fleet() {
  const [active, setActive] = useState("All");
  const cars =
    active === "All"
      ? FLEET
      : FLEET.filter((car) => car.category === active);

  return (
    <section id="fleet" className="paper bg-cream text-coal">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <Reveal className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-flame">
              <span className="h-px w-10 bg-flame/60" />
              Our fleet
            </p>
            <h2 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              A car for every <span className="text-gold">Kigali journey</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-coal/60">
            Every vehicle is serviced, sanitised and checked before each
            handover. Prices include insurance and are per 24-hour day.
          </p>
        </Reveal>

        <Reveal className="mb-10 flex flex-wrap gap-2.5">
          {FLEET_CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold tracking-wide transition-colors ${
                active === cat
                  ? "bg-coal text-cream shadow-lg"
                  : "border border-linen bg-white text-coal/70 hover:border-coal/30"
              }`}
            >
              {cat}
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
                  <div className="absolute inset-0 bg-gradient-to-t from-coal/45 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-coal/75 px-3.5 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-cream backdrop-blur-sm">
                    {car.category}
                  </span>
                  <span className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-coal/75 px-3 py-1.5 text-xs font-semibold text-cream backdrop-blur-sm">
                    <Star className="h-3.5 w-3.5 fill-gold text-gold" />
                    {car.rating.toFixed(1)}
                  </span>
                  <span className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                    <span className="font-display text-2xl font-bold text-cream">
                      {car.price}
                      <span className="ml-1 text-xs font-medium text-cream/75">
                        RWF / day
                      </span>
                    </span>
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-2xl font-bold text-coal">
                    {car.name}
                  </h3>
                  <p className="mt-1 text-sm text-coal/55">{car.tagline}</p>

                  <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 border-t border-linen pt-5 text-sm text-coal/75">
                    <Spec icon={Users} label={`${car.passengers} Seats`} />
                    <Spec icon={Settings2} label={car.transmission} />
                    <Spec icon={Fuel} label={car.fuel} />
                    <Spec icon={Luggage} label={`${car.bags} Bags`} />
                  </ul>

                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noreferrer"
                    className="group/btn mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-coal px-6 py-3.5 text-sm font-semibold uppercase tracking-widest text-cream transition-colors hover:bg-flame"
                  >
                    Reserve this car
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 text-center">
          <p className="text-sm text-coal/55">
            Need a specific model or a longer rental? We&apos;ll source it for you.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full border border-coal/20 px-6 py-3 text-sm font-semibold uppercase tracking-widest text-coal transition-colors hover:border-flame hover:text-flame"
          >
            <MessageCircle className="h-4 w-4" />
            Request a custom quote
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
      <Icon className="h-4 w-4 text-flame" />
      {label}
    </li>
  );
}

/* ─────────────────────────── Services ─────────────────────────── */

function Services() {
  return (
    <section id="services" className="bg-charcoal text-cream">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <Reveal className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-gold">
              <span className="h-px w-10 bg-gold/60" />
              What we offer
            </p>
            <h2 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              More than just <span className="text-gold">a car</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-cream/60">
            From a quick airport pickup to a month-long 4x4 adventure,
            {businessShortName} covers every mile of your journey.
          </p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={(i % 3) * 90}>
              <div className="group h-full rounded-[1.75rem] border border-cream/10 bg-coal/60 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/50 hover:shadow-xl hover:shadow-gold/5">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/15 text-gold transition-colors group-hover:bg-gold group-hover:text-coal">
                  <service.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-2xl font-bold text-cream">
                  {service.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-cream/60">
                  {service.note}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16">
          <div className="grid overflow-hidden rounded-[2rem] border border-cream/10 lg:grid-cols-[1fr_360px]">
            <div className="flex flex-col justify-center bg-coal p-8 sm:p-12">
              <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.28em] text-gold">
                <Car className="h-4 w-4" />
                Same-day booking
              </p>
              <h3 className="font-display text-3xl font-bold text-cream sm:text-4xl">
                Car ready when you land?
              </h3>
              <p className="mt-4 max-w-md text-cream/70">
                Send us your flight details and we&apos;ll have your car waiting at
                Kigali International Airport — keys, insurance and a full tank
                ready before you reach the arrivals gate.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-flame px-7 py-3.5 text-sm font-semibold uppercase tracking-widest text-cream shadow-lg shadow-flame/25 transition-colors hover:bg-gold hover:text-coal"
                >
                  Book airport pickup
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <p className="text-sm text-cream/50">
                  Airport meet &amp; greet included
                </p>
              </div>
            </div>
            <div className="relative min-h-[280px]">
              <Image
                src="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=900&q=80"
                alt="Car interior with the road ahead"
                fill
                sizes="(max-width: 1024px) 100vw, 360px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coal/40 to-transparent lg:bg-gradient-to-r" />
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
          src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=2000&q=80"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-coal/80 via-coal/60 to-coal/90" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <Reveal className="mb-16 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-gold">
              <span className="h-px w-10 bg-gold/60" />
              Why choose us
            </p>
            <h2 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Driven by trust, <span className="text-gold">not shortcuts</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-cream/60">
            {businessName} was built on one promise — hand you a car you can
            rely on, at a price that makes sense, with zero surprises.
          </p>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {HIGHLIGHTS.map((item, i) => (
            <Reveal key={item.title} delay={(i % 4) * 90}>
              <div className="h-full rounded-[1.75rem] border border-cream/10 bg-coal/60 p-7 transition-all duration-300 hover:border-gold/50">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/15 text-gold">
                  <item.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold text-cream">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/60">
                  {item.note}
                </p>
              </div>
            </Reveal>
          ))}
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
            Happy clients
          </p>
          <h2 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            They trusted us <span className="text-gold">with the drive</span>
          </h2>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-linen bg-white px-5 py-2.5">
            <span className="flex text-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-gold" />
              ))}
            </span>
            <span className="text-sm font-semibold text-coal/80">
              4.9 average · verified client reviews
            </span>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {REVIEWS.map((review, i) => (
            <Reveal key={review.name} delay={i * 120}>
              <figure className="flex h-full flex-col rounded-3xl border border-linen bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                <Quote className="h-8 w-8 text-gold" />
                <div className="mt-4 flex text-gold">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-gold" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-lg leading-relaxed text-coal/80">
                  “{review.quote}”
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
    <section
      id="contact"
      className="border-t border-cream/10 bg-coal text-cream"
    >
      <div className="mx-auto grid max-w-7xl gap-16 px-5 py-24 sm:px-8 lg:grid-cols-2 lg:py-32">
        <Reveal>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-gold">
            Get in touch
          </p>
          <h2 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Book your car <span className="text-gold">today</span>
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-cream/70">
            Reservations take minutes over WhatsApp or phone. Tell us your
            dates and we&apos;ll have the perfect car confirmed and waiting.
          </p>

          <div className="mt-10 space-y-6">
            <ContactRow
              icon={Phone}
              title="Call or WhatsApp"
              lines={[phone, "24 hours a day, 7 days a week"]}
            />
            <ContactRow
              icon={Mail}
              title="Email us"
              lines={[email, "Replies within a few hours"]}
            />
            <ContactRow
              icon={MapPin}
              title="Find us"
              lines={[address, "Free delivery across Kigali"]}
            />
            <ContactRow
              icon={Clock}
              title="Opening hours"
              lines={HOURS.map((h) => `${h.days} — ${h.time}`)}
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
                  Request received!
                </h3>
                <p className="mt-3 max-w-sm text-cream/70">
                  Thank you. The team at {businessShortName} will contact you
                  shortly to confirm your booking.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-sm font-semibold uppercase tracking-widest text-gold underline-offset-4 hover:underline"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <>
                <h3 className="font-display text-2xl font-bold text-cream">
                  Request a booking
                </h3>
                <p className="mt-1 text-sm text-cream/60">
                  We&apos;ll confirm availability and price by phone.
                </p>
                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Full name" htmlFor="name">
                      <input
                        id="name"
                        type="text"
                        required
                        placeholder="Your name"
                        className="w-full rounded-xl border border-cream/15 bg-coal/50 px-4 py-3 text-cream placeholder:text-cream/35 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                      />
                    </Field>
                    <Field label="Phone number" htmlFor="phone">
                      <input
                        id="phone"
                        type="tel"
                        required
                        placeholder="0788 000 000"
                        className="w-full rounded-xl border border-cream/15 bg-coal/50 px-4 py-3 text-cream placeholder:text-cream/35 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                      />
                    </Field>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Car needed" htmlFor="car">
                      <select
                        id="car"
                        required
                        defaultValue={RENTAL_SERVICES[0]}
                        className="w-full rounded-xl border border-cream/15 bg-coal/50 px-4 py-3 text-cream focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                      >
                        {RENTAL_SERVICES.map((option) => (
                          <option
                            key={option}
                            value={option}
                            className="bg-coal"
                          >
                            {option}
                          </option>
                        ))}
                      </select>
                    </Field>
                    <Field label="Rental dates" htmlFor="dates">
                      <input
                        id="dates"
                        type="text"
                        required
                        placeholder="e.g. 20 – 27 Nov"
                        className="w-full rounded-xl border border-cream/15 bg-coal/50 px-4 py-3 text-cream placeholder:text-cream/35 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                      />
                    </Field>
                  </div>
                  <Field label="Message (optional)" htmlFor="message">
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Airport pickup? Driver required? Tell us what you need."
                      className="w-full resize-none rounded-xl border border-cream/15 bg-coal/50 px-4 py-3 text-cream placeholder:text-cream/35 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                    />
                  </Field>
                  <button
                    type="submit"
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-flame px-8 py-4 text-sm font-semibold uppercase tracking-widest text-cream shadow-lg shadow-flame/25 transition-colors hover:bg-gold hover:text-coal"
                  >
                    Request booking
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

function ContactRow({
  icon: Icon,
  title,
  lines,
}: {
  icon: typeof Phone;
  title: string;
  lines: string[];
}) {
  return (
    <div className="flex items-start gap-4">
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
    </div>
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

const FLEET_HOURS = [
  { days: "Monday – Sunday", time: "24 / 7" },
  { days: "Airport desk", time: "6 am – 11 pm" },
];

function Footer() {
  return (
    <footer className="border-t border-cream/10 bg-coal text-cream">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <a href="#top" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold text-coal">
              <Car className="h-5 w-5" strokeWidth={2.4} />
            </span>
            <span className="leading-none">
              <span className="block font-display text-xl font-bold tracking-[0.14em]">
                GENI
              </span>
              <span className="block text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-gold">
                Car Rental Kigali
              </span>
            </span>
          </a>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/60">
            Reliable, fully-insured car hire in Kigali — from city sedans to
            rugged 4x4s, with 24/7 support on every road in Rwanda.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-flame px-5 py-3 text-xs font-semibold uppercase tracking-widest text-cream transition-colors hover:bg-gold hover:text-coal"
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
            {NAV_LINKS.map((link) => (
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
              {address}
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              {phone}
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              {email}
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-gold">
            Hours
          </h4>
          <ul className="space-y-3 text-sm text-cream/70">
            {FLEET_HOURS.map((row) => (
              <li key={row.days} className="flex justify-between gap-6">
                <span>{row.days}</span>
                <span>{row.time}</span>
              </li>
            ))}
            <li className="pt-2 text-cream/45">
              Free delivery anywhere in Kigali.
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-xs text-cream/45 sm:flex-row sm:px-8">
          <p>
            © {new Date().getFullYear()} {businessShortName} Kigali. All rights
            reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Driving Rwanda with <Check className="h-3.5 w-3.5 text-gold" />{" "}
            care.
          </p>
        </div>
      </div>
    </footer>
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