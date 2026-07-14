/** Shared conversion copy used on home + service pages */

export const PROCESS_STEPS = [
  {
    step: "1",
    title: "Free Consultation",
    description: "WhatsApp pe requirement bataiye – free advice, no pressure.",
  },
  {
    step: "2",
    title: "Transparent Quote",
    description: "Clear fees & timeline pehle. Hidden charges nahi.",
  },
  {
    step: "3",
    title: "Documents on Chat",
    description: "Photos bhejein WhatsApp pe. Office visit ki zaroorat nahi.",
  },
  {
    step: "4",
    title: "Delivery & Support",
    description: "Certificate digitally milega + post-service guidance.",
  },
] as const;

export const TRUST_POINTS = [
  { label: "500+", sub: "Delhi NCR clients" },
  { label: "10+", sub: "Years experience" },
  { label: "₹999", sub: "GST reg. starting" },
  { label: "100%", sub: "WhatsApp orders" },
] as const;

/** Customer reviews featured for Raj GST Sewa Kendra (Google Business / GSTwala clients) */
export const TESTIMONIALS = [
  {
    quote:
      "Got my GST certificate the same day I sent my documents. Didn't pay a single rupee until it was in my hands. Highly recommended for any Delhi business owner.",
    name: "Rahul Sharma",
    role: "Shop Owner, Karol Bagh",
    rating: 5,
    source: "Google",
  },
  {
    quote:
      "I was worried about fake agents. But the pay-after-work policy gave me full confidence. Service was fast, professional, and completely on WhatsApp.",
    name: "Priya Gupta",
    role: "Boutique Owner, Patel Nagar",
    rating: 5,
    source: "Google",
  },
  {
    quote:
      "My CA was quoting ₹2500 and said it would take 4 days. GSTwala did it in 3 hours for ₹999 — and I only paid after it was approved. Couldn't be happier.",
    name: "Mohit Verma",
    role: "Trader, Anand Parbat",
    rating: 5,
    source: "Google",
  },
] as const;

/** Home service cards – tag used as conversion price/benefit line */
export const HOME_SERVICES = [
  {
    href: "/company-registration",
    title: "Company Registration",
    tag: "Free quote · Pvt Ltd / LLP / OPC",
    highlight: false,
  },
  {
    href: "/gst-registration",
    title: "GST Registration",
    tag: "₹999 · Pay after approval",
    highlight: true,
  },
  {
    href: "/gst-compliance",
    title: "GST Compliance",
    tag: "From ₹999/mo · Returns & notices",
    highlight: true,
  },
  {
    href: "/trademark",
    title: "Trademark",
    tag: "Free consult · Brand protection",
    highlight: false,
  },
  {
    href: "/loan-assistance",
    title: "Loan Assistance",
    tag: "Free assessment · DPR · CMA · Mudra",
    highlight: false,
  },
  {
    href: "/gem-registration",
    title: "GeM Registration",
    tag: "Free consult · Govt seller setup",
    highlight: false,
  },
] as const;

export const NAV_PRIMARY = [
  { href: "/gst-registration", label: "GST @ ₹999" },
  { href: "/gst-compliance", label: "GST Compliance" },
  { href: "/company-registration", label: "Company" },
  { href: "/areas-we-serve", label: "Areas" },
  { href: "/contact-us", label: "Contact" },
] as const;

export const NAV_MORE_SERVICES = [
  { href: "/trademark", label: "Trademark Registration" },
  { href: "/loan-assistance", label: "MSME Loan Assistance" },
  { href: "/gem-registration", label: "GeM Registration" },
  { href: "/fssai-registration", label: "FSSAI License" },
  { href: "/udyam-registration", label: "Udyam Registration" },
  { href: "/e-tendering", label: "E-Tendering" },
  { href: "/dpr-cma-reports", label: "DPR / CMA Reports" },
  { href: "/gst-notice-handling", label: "GST Notice Handling" },
] as const;

export const FOOTER_SERVICES = [
  { href: "/company-registration", label: "Company Registration" },
  { href: "/gst-registration", label: "GST Registration @ ₹999" },
  { href: "/gst-compliance", label: "GST Compliance" },
  { href: "/trademark", label: "Trademark Registration" },
  { href: "/loan-assistance", label: "MSME Loan Assistance" },
  { href: "/gem-registration", label: "GeM Registration" },
  { href: "/fssai-registration", label: "FSSAI License" },
  { href: "/udyam-registration", label: "Udyam Registration" },
] as const;
