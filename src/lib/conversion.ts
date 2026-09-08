/** Shared conversion copy – GST Registration for Online Business */

export const GST_WA_MSG =
  "Namaste, GSTwala website se aa raha hoon. Online business ke liye GST Registration ₹999 chahiye (₹0 advance).";

export const NIL_FILING_WA_MSG =
  "Namaste, GSTwala website se aa raha hoon. Nil GST return filing ₹300/month ke baare mein jaanna hai.";

export const ELECTRICITY_BILL_WA_MSG =
  "Hi GSTwala, my electricity bill is not in my name. I want GST Registration for ₹999. Please check my documents. SRC: ELECTRICITY-BILL";

export const ONLINE_PLATFORMS = [
  "Amazon",
  "Flipkart",
  "Meesho",
  "Shopify",
  "Instagram / Social Media",
  "Own Website / D2C",
] as const;

export const WHY_BENEFITS = [
  "Focused on online sellers",
  "Practical document guidance",
  "₹0 advance payment",
  "WhatsApp support from start to registration",
] as const;

/** Homepage process – 3 steps for first-time applicants */
export const HOME_PROCESS_STEPS = [
  {
    step: "01",
    title: "WhatsApp Us",
    description: "Tell us about your online business and share the basic details.",
  },
  {
    step: "02",
    title: "Document Check",
    description:
      "We review your documents and tell you exactly what is required for your situation.",
  },
  {
    step: "03",
    title: "GST Application",
    description: "We prepare and submit the application and assist with the process.",
  },
] as const;

/** Used by ProcessSteps on service/local pages */
export const PROCESS_STEPS = [
  {
    step: "1",
    title: "WhatsApp pe start",
    description: "Online business type aur documents share karein – free guidance, no pressure.",
  },
  {
    step: "2",
    title: "Document check",
    description: "Photos WhatsApp pe bhejein – hum exact checklist batate hain.",
  },
  {
    step: "3",
    title: "Application",
    description: "Filing prepare + submit; process pe assist karte hain.",
  },
  {
    step: "4",
    title: "Certificate",
    description: "Approval ke baad GST Certificate PDF WhatsApp pe.",
  },
] as const;

export const GST_REG_INCLUDES = [
  "Document guidance",
  "Application preparation",
  "Application submission",
  "Required follow-up assistance",
  "GST Certificate PDF on WhatsApp",
  "Re-application if the application is rejected",
  "Pay only after GST approval",
] as const;

export const NIL_FILING_INCLUDES = [
  "Nil GST return filing",
  "Monthly compliance support",
  "WhatsApp assistance",
] as const;

export const GST_SERVICES = [
  {
    title: "GST Registration",
    description: "For new sellers — ₹999, pay after approval.",
    href: "/gst-registration",
    primary: true,
  },
  {
    title: "GST Return Filing",
    description: "Nil filing from ₹300/month · ongoing support.",
    href: "/gst-compliance",
    primary: true,
  },
  {
    title: "GST Cancellation",
    description: "Help closing an existing GST registration.",
    href: null,
    primary: false,
  },
  {
    title: "GST Revocation / Restoration",
    description: "Support if your GST was cancelled and needs restore.",
    href: null,
    primary: false,
  },
  {
    title: "GST Amendment",
    description: "Update address, bank or business details on GST.",
    href: null,
    primary: false,
  },
  {
    title: "GST Notice Assistance",
    description: "Help understanding and responding to GST notices.",
    href: "/gst-notice-handling",
    primary: false,
  },
] as const;

export const FINAL_CTA_HIGHLIGHTS = [
  "₹999 GST Registration",
  "Same-Day Process",
  "No Office Visit",
  "Pay After GST Approval",
] as const;

/** Single homepage FAQ accordion */
export const HOME_FAQS: { question: string; answer: string }[] = [
  {
    question: "Amazon/Meesho/Flipkart ke liye GST registration chahiye?",
    answer:
      "Marketplace pe sell karne ke liye usually GST registration chahiye hota hai. Exact need aapke seller type aur platform process pe depend karti hai — WhatsApp pe details share karein, hum clear path batate hain.",
  },
  {
    question: "Ghar parents ke naam par hai — GST ho sakta hai?",
    answer:
      "Bahut se first-time sellers parents ke ghar se start karte hain. Possible hai, lekin address proof / supporting documents case pe depend karte hain. Aapke docs dekh ke practical option batate hain.",
  },
  {
    question: "Electricity bill mere naam par nahi hai — kya karein?",
    answer:
      "Bill kisi aur ke naam par hona common hai. Har case mein same document fit nahi hota. Supporting options kya possible hain — checklist WhatsApp pe clarify karte hain.",
  },
  {
    question: "Landlord documents nahi de raha — kya options hain?",
    answer:
      "Rented place pe landlord docs delay common hai. Alternatives situation pe depend karte hain. Aapka setup samajh kar possible next steps batate hain.",
  },
  {
    question: "Business abhi start nahi hua — GST le sakte hain?",
    answer:
      "Kai online sellers pehle GST lete hain, phir selling start karte hain. Ready hain ya nahi — documents aur plan WhatsApp pe check kar dete hain.",
  },
  {
    question: "GST registration ke liye documents kya chahiye?",
    answer:
      "Typically Aadhaar, PAN, photo, address proof aur bank details. Final list aapke address type (own / parents / rent) pe change ho sakti hai. Exact checklist free consult pe milti hai.",
  },
  {
    question: "GST registration ki fees kitni hai?",
    answer:
      "GST Registration service fee ₹999 hai. ₹0 advance — aap GST approve hone ke baad pay karte hain.",
  },
  {
    question: "Payment kab dena hota hai?",
    answer:
      "GST Registration pe pehle se advance nahi. Approval ke baad ₹999. Certificate PDF WhatsApp pe milta hai.",
  },
  {
    question: "GST reject ho jaye to kya hoga?",
    answer:
      "Reject hone pe reason samajh kar documents / application correct karke re-apply support dete hain, additional service charge ke bina.",
  },
  {
    question: "GST banne ke baad monthly filing kitni hai?",
    answer:
      "Nil / low activity pe support ₹300/month se shuru ho sakta hai. Actual filing type turnover aur scheme pe depend karta hai — pehle clearly explain karte hain.",
  },
  {
    question: "Office visit zaroori hai?",
    answer:
      "Nahi. Documents photos WhatsApp pe bhejein. Process remote chalta hai; certificate digital delivery.",
  },
];

/** Nav – GST-first (used by Header) */
export const NAV_PRIMARY = [
  { href: "/gst-registration", label: "GST @ ₹999" },
  { href: "/gst-compliance", label: "Nil Filing" },
  { href: "/gst-notice-handling", label: "GST Notice" },
  { href: "/contact-us", label: "Contact" },
] as const;

export const NAV_MORE_SERVICES = [
  { href: "/gst-registration", label: "GST Registration" },
  { href: "/gst-registration-online-business", label: "GST for Online Sellers" },
  {
    href: "/gst-registration-electricity-bill-not-in-name",
    label: "Electricity Bill Not in Your Name",
  },
  { href: "/gst-compliance", label: "Nil Filing" },
  { href: "/gst-notice-handling", label: "GST Notice Assistance" },
  { href: "/udyam-registration", label: "Udyam Registration" },
  { href: "/company-registration", label: "Company Registration" },
  { href: "/trademark", label: "Trademark Registration" },
] as const;

export const FOOTER_SERVICES = [
  { href: "/gst-registration", label: "GST Registration @ ₹999" },
  { href: "/gst-registration-online-business", label: "GST for Online Sellers" },
  {
    href: "/gst-registration-electricity-bill-not-in-name",
    label: "Electricity Bill Not in Your Name",
  },
  { href: "/gst-compliance", label: "Nil Filing" },
  { href: "/gst-notice-handling", label: "GST Notice Assistance" },
  { href: "/udyam-registration", label: "Udyam Registration ₹599/-" },
  { href: "/company-registration", label: "Company Registration" },
  { href: "/contact-us", label: "Contact / WhatsApp" },
] as const;

/** Kept for service pages that still import ProcessSteps */
export const TRUST_POINTS = [
  { label: "₹999", sub: "GST registration" },
  { label: "₹0", sub: "Advance payment" },
  { label: "₹300", sub: "Nil filing / month" },
  { label: "100%", sub: "WhatsApp process" },
] as const;

/** Not used on homepage – do not invent customer quotes */
export const TESTIMONIALS = [] as const;

/** Legacy home cards – unused after homepage rebuild */
export const HOME_SERVICES = [
  {
    href: "/gst-registration",
    title: "GST Registration",
    tag: "₹999 · Pay after approval",
    highlight: true,
  },
  {
    href: "/gst-compliance",
    title: "GST Compliance",
    tag: "Nil filing from ₹300/mo",
    highlight: true,
  },
] as const;
