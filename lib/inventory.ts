// ─────────────────────────────────────────────────────────────
//  DEMO CONTENT — SAMPLE DATA
//
//  Everything in this file is placeholder content for the
//  template. Swap the cars, prices, photos and copy for your own
//  stock. Add or remove entries freely — the inventory grid,
//  the category filters and the "vehicle of interest" dropdown
//  all adapt automatically.
//
//  Photos live in `public/car-images/`. Add new photos there and
//  reference them as `/car-images/your-file.jpg`.
// ─────────────────────────────────────────────────────────────

export type Condition = "Brand New" | "Certified Used" | "Imported";

export type Vehicle = {
  name: string;
  category: "SUV & 4x4" | "Electric";
  tagline: string;
  price: number;
  condition: Condition;
  year: number;
  mileage: number;
  transmission: string;
  fuel: string;
  drive: string;
  seats: number;
  image: string;
  alt: string;
};

export const vehicleCategories = ["All", "SUV & 4x4", "Electric"] as const;

export const vehicles: Vehicle[] = [
  {
    name: "Toyota Land Cruiser Prado J150",
    category: "SUV & 4x4",
    tagline: "Full-time 4x4 and seven seats, built for Rwanda",
    price: 52000000,
    condition: "Imported",
    year: 2021,
    mileage: 78400,
    transmission: "Automatic",
    fuel: "Diesel",
    drive: "4WD",
    seats: 7,
    image: "/car-images/car-image-6.webp",
    alt: "Black Toyota Land Cruiser Prado parked on grass under trees",
  },
  {
    name: "Toyota Fortuner 2.4 GD-6",
    category: "SUV & 4x4",
    tagline: "The seven-seat 4x4 that works in town and country",
    price: 42500000,
    condition: "Certified Used",
    year: 2022,
    mileage: 48500,
    transmission: "Automatic",
    fuel: "Diesel",
    drive: "4x4",
    seats: 7,
    image: "/car-images/car-image-3.jpg",
    alt: "Red Toyota Fortuner SUV photographed from the front",
  },
  {
    name: "BMW X1 xDrive20i",
    category: "SUV & 4x4",
    tagline: "Compact luxury crossover with all-wheel drive",
    price: 38500000,
    condition: "Certified Used",
    year: 2023,
    mileage: 31200,
    transmission: "Automatic",
    fuel: "Petrol",
    drive: "AWD",
    seats: 5,
    image: "/car-images/car-image-5.png",
    alt: "Blue BMW X1 compact crossover parked on a city street",
  },
  {
    name: "Kia EV6 GT-Line",
    category: "Electric",
    tagline: "Fully electric, silent and quick to charge",
    price: 46000000,
    condition: "Brand New",
    year: 2024,
    mileage: 0,
    transmission: "Automatic",
    fuel: "Electric",
    drive: "AWD",
    seats: 5,
    image: "/car-images/car-image-2.jpg",
    alt: "White Kia EV6 electric crossover parked beside a wall",
  },
  {
    name: "Mahindra Thar 4x4",
    category: "SUV & 4x4",
    tagline: "Short-wheelbase off-roader for rough tracks",
    price: 21000000,
    condition: "Imported",
    year: 2022,
    mileage: 42000,
    transmission: "Manual",
    fuel: "Petrol",
    drive: "4WD",
    seats: 5,
    image: "/car-images/car-image-4.jpg",
    alt: "Black Mahindra Thar off-roader on a dirt track",
  },
  {
    // NOTE: this photo carries a "© The New Times 2024" news watermark.
    // Replace it with your own photo before going live.
    name: "BYD Atto 3",
    category: "Electric",
    tagline: "Electric crossover with a long, quiet range",
    price: 33900000,
    condition: "Brand New",
    year: 2024,
    mileage: 0,
    transmission: "Automatic",
    fuel: "Electric",
    drive: "FWD",
    seats: 5,
    image: "/car-images/car-image-1.jpg",
    alt: "Grey BYD Atto 3 electric crossover on a paved road",
  },
];

/* Categories offered in the enquiry form dropdown. */
export const budgetBrackets = [
  "Under RWF 20,000,000",
  "RWF 20,000,000 – 30,000,000",
  "RWF 30,000,000 – 40,000,000",
  "RWF 40,000,000 and above",
  "Still deciding",
];

/**
 * Rotating background images for the hero section. Every photo in
 * `public/car-images/` is used here as well as in the inventory grid.
 *
 * Tip: the hero is full-screen, so photos look their sharpest at
 * 1600px wide or more. `car-image-6.webp` (3840x2880) is the
 * crispest — add wider versions of the others if you can.
 */
export const heroSlides = [
  {
    image: "/car-images/car-image-6.webp",
    alt: "Black Toyota Land Cruiser Prado parked on grass under trees",
  },
  {
    image: "/car-images/car-image-3.jpg",
    alt: "Red Toyota Fortuner SUV photographed from the front",
  },
  {
    image: "/car-images/car-image-5.png",
    alt: "Blue BMW X1 compact crossover parked on a city street",
  },
  {
    image: "/car-images/car-image-2.jpg",
    alt: "White Kia EV6 electric crossover parked beside a wall",
  },
  {
    image: "/car-images/car-image-4.jpg",
    alt: "Black Mahindra Thar off-roader on a dirt track",
  },
  {
    image: "/car-images/car-image-1.jpg",
    alt: "Grey BYD Atto 3 electric crossover on a paved road",
  },
];

/* Low-contrast texture behind the "Why choose us" section. */
export const textureImage = {
  src: "/car-images/car-image-4.jpg",
  alt: "",
};

/* How it works */
export const processSteps = [
  {
    title: "Browse & shortlist",
    note: "Filter our live stock by budget, body type and fuel, then message us on WhatsApp to confirm a car is still available.",
  },
  {
    title: "Inspect & test drive",
    note: "Visit our Kigali yard or have the car brought to you. Every vehicle comes with an inspection report you can read.",
  },
  {
    title: "Paperwork & delivery",
    note: "We handle CAC registration, RALIS number plates, RIDA insurance and delivery to your district across Rwanda.",
  },
];

/* Quick wins shown beside the trade-in offer. */
export const tradeInPoints = [
  "Same-day valuation at our Kigali yard",
  "Market-based price, with no obligation",
  "Ownership transfer handled by us",
  "Trade-in value deducted from your purchase",
];

/* Dealer services */
export const services = [
  {
    icon: "repeat",
    title: "Trade-In & Exchange",
    note: "Bring the car you drive now and get a fair valuation on the spot. We take care of the ownership transfer for you.",
  },
  {
    icon: "wallet",
    title: "Financing & Loans",
    note: "Applications through partner banks and SACCOs. We prepare the file properly so approval moves faster.",
  },
  {
    icon: "ship",
    title: "Import & Export",
    note: "Clearing, taxes and paperwork handled for vehicles imported from Dubai, Japan and Europe.",
  },
  {
    icon: "truck",
    title: "Nationwide Delivery",
    note: "Free delivery within Kigali, and to your district across Rwanda on our scheduled runs.",
  },
  {
    icon: "wrench",
    title: "Servicing & Warranty",
    note: "Genuine parts, service packages and a six-month warranty on every vehicle we hand over.",
  },
  {
    icon: "shield",
    title: "Insurance & Roadside",
    note: "RIDA-compliant cover arranged on the spot, plus 24/7 roadside assistance for the life of the vehicle.",
  },
] as const;

/* Why choose us */
export const highlights = [
  {
    icon: "search",
    title: "150-Point Inspection",
    note: "Body, engine, transmission and brakes checked before a car is ever listed.",
  },
  {
    icon: "tag",
    title: "One Honest Price",
    note: "The price you see is the price you pay. No last-minute additions at the counter.",
  },
  {
    icon: "file",
    title: "Papers In Order",
    note: "Registration, insurance and service history sorted before you take the keys.",
  },
  {
    icon: "headset",
    title: "Owner Support",
    note: "We stay reachable after the sale for servicing, spares and any questions.",
  },
] as const;

/* Headline numbers */
export const stats = [
  { value: "150+", label: "Cars in stock" },
  { value: "10+", label: "Brands stocked" },
  { value: "1,200+", label: "Owners served" },
  { value: "4.9★", label: "Owner rating" },
];

/* Sample reviews — replace with real customer feedback */
export const reviews = [
  {
    quote:
      "I traded in my old Corolla and drove out in a Land Cruiser the same afternoon. The paperwork was ready before I had even finished my tea.",
    name: "Jean-Bosco N.",
    role: "Trade-in customer",
    initials: "JN",
    color: "bg-flame",
  },
  {
    quote:
      "The price on the listing was the price I paid. No surprise costs added at the counter and nobody put pressure on me.",
    name: "Diane U.",
    role: "First-time buyer",
    initials: "DU",
    color: "bg-olive",
  },
  {
    quote:
      "They delivered to Musanze and the car arrived with full service history and every document in order. Very straightforward people.",
    name: "Eric N.",
    role: "Delivery to Musanze",
    initials: "EN",
    color: "bg-gold",
  },
];
