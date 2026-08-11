export const SITE = {
  name: "GSTwala",
  legalName: "Raj GST Sewa Kendra",
  tagline: "GST Registration for Online Business — ₹999, ₹0 advance",
  baseUrl: "https://gstwala.co.in",
  phone: "+919212270108",
  phoneDisplay: "+91 92122 70108",
  whatsapp: "919212270108",
  email: "info@gstwala.co.in",
  address: {
    street: "Patel Nagar",
    locality: "Central Delhi",
    region: "Delhi",
    postalCode: "110008",
    country: "IN",
  },
  /** Official Google Business Profile share link – Raj GST Sewa Kendra */
  gmbUrl: "https://share.google/CISeTccxFbRhvJONE",
  gmbName: "Raj GST Sewa Kendra",
  gmbSearchUrl:
    "https://www.google.com/maps/search/?api=1&query=Raj+GST+Sewa+Kendra+Patel+Nagar+Delhi",
  mapEmbedUrl:
    "https://maps.google.com/maps?q=Raj+GST+Sewa+Kendra,+Patel+Nagar,+Delhi&t=&z=16&ie=UTF8&iwloc=&output=embed",
  hours: "Mo-Sa 10:00-19:00",
  hoursDisplay: "Mon – Sat: 10:00 AM – 7:00 PM",
  priceRange: "₹₹",
} as const;

export const AREAS_SERVED = [
  "Patel Nagar",
  "Rajinder Nagar",
  "Anand Parbat",
  "Karol Bagh",
  "Inderlok",
  "Shastri Nagar",
  "Kirti Nagar",
  "Moti Nagar",
  "DLF Moti Nagar",
  "Rajendra Place",
  "Punjabi Bagh",
  "Rama Road",
  "Naraina",
  "Mayapuri",
  "Baljeet Nagar",
  "Connaught Place",
  "Central Delhi",
  "West Delhi",
] as const;

export const DEDICATED_AREA_SLUGS = [
  "patel-nagar-rajinder-nagar",
  "anand-parbat-karol-bagh",
  "inderlok-shastri-nagar",
  "patel-nagar",
  "anand-parbat",
  "inderlok",
  "karol-bagh",
  "kirti-nagar",
  "moti-nagar",
  "dlf-moti-nagar",
] as const;

export const HERO_PAGES = [
  "company-registration",
  "trademark",
  "gst-compliance",
] as const;

export const SERVICE_SLUGS = [
  "company-registration",
  "trademark",
  "gst-compliance",
  "gst-registration",
  "udyam-registration",
  "loan-assistance",
  "fssai-registration",
  "gem-registration",
  "e-tendering",
  "dpr-cma-reports",
  "gst-notice-handling",
] as const;

export type ServiceSlug = (typeof SERVICE_SLUGS)[number];
export type AreaSlug = (typeof DEDICATED_AREA_SLUGS)[number];

export function whatsappUrl(message: string) {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const DEFAULT_WHATSAPP_MSG =
  "Namaste, GSTwala website se aa raha hoon. Online business ke liye GST Registration ₹999 chahiye (₹0 advance).";