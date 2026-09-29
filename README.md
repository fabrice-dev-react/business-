# Kigali Eye Care Consultants (KECC) — Landing Page

A clean, single-page website for an eye clinic in Kigali, Rwanda built with
[Next.js](https://nextjs.org) (App Router), [Tailwind CSS](https://tailwindcss.com)
and [lucide-react](https://lucide.dev) icons.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Stack

- **Next.js 16** — App Router, static pages
- **Tailwind CSS 4** — custom design tokens in `app/globals.css`
- **next/font** — Playfair Display (display) + Manrope (body)
- **lucide-react** — iconography
- Images served from Unsplash via `next/image` (host configured in `next.config.ts`)

## Structure

```
app/
  layout.tsx        Root layout (fonts + metadata)
  page.tsx          Landing page assembly
  globals.css       Theme tokens, animations
  icon.svg          Favicon (eye mark)
components/
  SiteHeader.tsx    Fixed nav with scroll state + mobile menu
  Hero.tsx          Full-screen hero
  Marquee.tsx       Scrolling services strip
  About.tsx         About the clinic
  Services.tsx      Clinical services + facilities/accessibility/payments
  QuoteBand.tsx     Patient quote band
  Team.tsx          Doctors & team spotlight
  Testimonials.tsx  Patient reviews
  Contact.tsx       Hours, location, appointment form
  SiteFooter.tsx    Footer
  Reveal.tsx        Scroll-reveal wrapper (IntersectionObserver)
```

## Customizing

- **Clinic details** — name, phone, address and district all live in
  `lib/site.ts`. Change them once and every section updates.
- Colors, fonts and animations live in the `@theme inline` block in `app/globals.css`.
- Photos are plain data at the top of each component — swap the Unsplash URLs
  for your own imagery.
- The appointment form and support/WhatsApp chats are front-end only (mimic
  support); wire them to an API route or service when you're ready.