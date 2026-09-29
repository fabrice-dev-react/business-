// ─────────────────────────────────────────────────────────────
//  BUSINESSNAME — TEMPLATE CONFIGURATION
//
//  This is the only file you need to edit to make this template
//  your own. Every placeholder below is filled in automatically
//  across the whole site (header, hero, contact, footer, links).
// ─────────────────────────────────────────────────────────────

/* Brand — replace with your dealership name, no "BusinessName" left. */
export const businessName = "BusinessName";

export const businessFullName = `${businessName} Car Dealers`;

export const businessTagline = "Car Dealership · Kigali";

export const businessDescriptor = "New & used cars in Kigali, Rwanda";

/* Contact */
export const phone = "+250 788 000 000";

export const phoneHref = "+250788000000";

export const email = "info@businessname.rw";

export const address = "KN 5 Road, Nyarugenge, Kigali, Rwanda";

/** Digits only — used to build the WhatsApp deep link. */
export const whatsapp = "250788000000";

/** Placeholder map link. Replace with your Google Maps or what3words link. */
export const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${businessFullName}, Kigali, Rwanda`,
)}`;

/* Opening hours */
export const hours = [
  { days: "Monday – Friday", time: "8:00 am – 6:00 pm" },
  { days: "Saturday", time: "9:00 am – 5:00 pm" },
  { days: "Sunday", time: "9:00 am – 2:00 pm" },
  { days: "WhatsApp & phone", time: "24 / 7" },
];

/* Navigation — anchors must match the section ids in app/page.tsx */
export const navLinks = [
  { label: "Inventory", href: "#inventory" },
  { label: "Services", href: "#services" },
  { label: "How it works", href: "#process" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

/* Currency — Rwanda's official unit. */
export const currency = "RWF";

/** Deterministic grouping so server and client markup always match. */
export function formatAmount(value: number) {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function formatPrice(value: number) {
  return `${currency} ${formatAmount(value)}`;
}

/** Pre-filled WhatsApp enquiry message. */
export const whatsappMessage = `Hello ${businessFullName}, I would like to ask about one of the cars in your inventory.`;

export const whatsappLink = `https://wa.me/${whatsapp}?text=${encodeURIComponent(
  whatsappMessage,
)}`;
