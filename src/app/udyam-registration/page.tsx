import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CallButton } from "@/components/CallButton";
import { JsonLd } from "@/components/JsonLd";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { UDYAM_WA_MSG } from "@/lib/conversion";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

const PAGE_PATH = "/udyam-registration";
const PAGE_URL = `${SITE.baseUrl}${PAGE_PATH}`;
const WA = UDYAM_WA_MSG;

export const metadata: Metadata = {
  ...buildMetadata({
    title: "Udyam Registration in Delhi | ₹599",
    description:
      "Udyam Registration in Delhi (MSME) via WhatsApp. GSTwala service fee ₹599/-. Office in Patel Nagar. Assistance available beyond Delhi. Not a guaranteed approval.",
    path: PAGE_PATH,
  }),
  keywords: [
    "Udyam Registration in Delhi",
    "Udyam Registration Delhi",
    "Udyam MSME Registration",
    "MSME registration Delhi",
  ],
  robots: { index: true, follow: true },
};

const ctaWa =
  "inline-flex items-center justify-center gap-1.5 overflow-hidden whitespace-nowrap rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-600";
const ctaCall =
  "inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-blue-900 hover:bg-slate-50";
const card =
  "rounded-2xl border border-slate-200 bg-white p-5 shadow-sm";

const WHO = [
  {
    title: "Proprietorships",
    text: "Sole proprietors with valid Aadhaar and PAN commonly apply for Udyam / MSME registration.",
  },
  {
    title: "Small and home businesses",
    text: "Home-based and small local businesses may use Udyam as MSME proof. It is not required for every business.",
  },
  {
    title: "Traders and service businesses",
    text: "Trading and service activities can be registered when they fit MSME classification by investment and turnover.",
  },
  {
    title: "Manufacturers",
    text: "Manufacturing units that meet MSME criteria may register. NIC codes should match actual activity.",
  },
  {
    title: "Online sellers",
    text: "Marketplace and home-based online sellers sometimes add Udyam after GSTIN. Udyam does not replace GST registration.",
  },
] as const;

const DOCS = [
  { label: "Aadhaar", note: "Identity of the applicant" },
  { label: "PAN", note: "Linked to the business / applicant" },
  { label: "Business activity", note: "What you actually do — for NIC code" },
  { label: "Address details", note: "Business / correspondence address" },
  { label: "Bank details", note: "Where applicable" },
  { label: "GSTIN", note: "If you already have one — for PAN/GST check" },
] as const;

const PROCESS = [
  {
    step: "01",
    title: "Share details",
    text: "Send basic details and available documents on WhatsApp.",
  },
  {
    step: "02",
    title: "GSTwala checks",
    text: "We review eligibility, NIC code fit and what information is still needed.",
  },
  {
    step: "03",
    title: "Filing assistance",
    text: "We assist with the Udyam application and Aadhaar OTP / PAN checks as applicable.",
  },
  {
    step: "04",
    title: "Certificate",
    text: "After successful registration, the Udyam certificate is shared with you.",
  },
] as const;

const BENEFITS = [
  "May support access to MSME lending schemes (including schemes that use Udyam as MSME proof).",
  "May help with tender participation preference where MSME status is considered.",
  "Some government fee concessions (for example certain trademark fees) can apply to registered MSMEs — not automatic for every case.",
  "No expiry on the certificate; update investment/turnover if you cross classification limits.",
] as const;

const PAGE_FAQS: { question: string; answer: string }[] = [
  {
    question: "What is Udyam Registration?",
    answer:
      "Udyam Registration is the MSME registration for micro, small and medium enterprises in India. It is a government MSME certificate based on investment and turnover. GSTwala assists with the filing; we are not a government office.",
  },
  {
    question: "Who can apply for Udyam Registration?",
    answer:
      "Proprietors with valid Aadhaar and PAN commonly apply. Partnerships and companies can also qualify. Classification depends on investment and turnover. Not every business is legally required to register.",
  },
  {
    question: "How much does GSTwala charge for Udyam Registration?",
    answer:
      "GSTwala’s Udyam Registration fee is ₹599/-. Government portal filing itself is free; ₹599/- is GSTwala’s service charge for assistance. This is separate from GST Registration ₹999.",
  },
  {
    question: "What documents or information are needed?",
    answer:
      "Typically Aadhaar, PAN, business activity, address, and bank details where applicable. If you already have GSTIN, share it for PAN/GST validation. The exact list is confirmed on WhatsApp after we see your case.",
  },
  {
    question: "Can I apply for Udyam Registration online?",
    answer:
      "Yes. Share document photos and details on WhatsApp. GSTwala is based at Raj GST Sewa Kendra, Patel Nagar, Delhi, and assists applicants online beyond Delhi. No office visit is required for a typical WhatsApp case.",
  },
  {
    question: "Is Udyam Registration the same as GST Registration?",
    answer:
      "No. Udyam is MSME registration. GST Registration is a separate tax registration. You may need one, both, or neither depending on your business. GSTwala’s GST Registration is ₹999 — a different service from Udyam ₹599/-.",
  },
  {
    question: "How do I start Udyam Registration with GSTwala?",
    answer:
      "Message on WhatsApp with your Aadhaar, PAN and a short note on your business activity. We check what is needed and assist with filing. Approval is decided on the government portal — we do not guarantee a result or a fixed time.",
  },
];

export default function UdyamRegistrationPage() {
  return (
    <div className="pb-8 md:pb-0">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Udyam Registration", path: PAGE_PATH },
          ]),
          faqSchema(PAGE_FAQS),
          serviceSchema(
            "Udyam Registration in Delhi",
            "Udyam / MSME registration assistance. GSTwala service fee ₹599/-. WhatsApp process. Office in Patel Nagar, Delhi.",
            PAGE_URL
          ),
        ]}
      />

      <nav
        className="border-b border-slate-100 bg-white px-4 py-3 text-sm text-slate-500 sm:px-6"
        aria-label="Breadcrumb"
      >
        <div className="mx-auto flex max-w-5xl flex-wrap items-center gap-x-2 gap-y-1">
          <Link href="/" className="font-medium text-blue-800 hover:underline">
            Home
          </Link>
          <span aria-hidden>/</span>
          <span className="text-slate-800">Udyam Registration</span>
        </div>
      </nav>

      <section className="border-b border-slate-100 bg-white" aria-labelledby="udyam-hero">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-10 sm:px-6 sm:py-12 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-16">
          <div className="order-1 text-center lg:text-left">
            <h1
              id="udyam-hero"
              className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.5rem]"
            >
              Udyam Registration in Delhi
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg lg:mx-0">
              Udyam/MSME registration assistance by GSTwala.co.in
            </p>
            <p className="mt-2 text-sm font-medium text-slate-500">
              Online assistance available across India.
            </p>
            <p className="mt-6 text-xs font-bold uppercase tracking-wider text-blue-800">
              Udyam Registration
            </p>
            <p className="mt-1 text-5xl font-extrabold tracking-tight text-blue-900 sm:text-6xl">
              ₹599/-
            </p>
            <div className="mt-6 flex flex-col items-stretch gap-2.5 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
              <WhatsAppButton
                message={WA}
                className={ctaWa}
                aria-label="Udyam Registration on WhatsApp"
              >
                Udyam Registration — ₹599/-
              </WhatsAppButton>
              <CallButton className={ctaCall}>Call GSTwala</CallButton>
            </div>
            <p className="mt-4 text-xs leading-relaxed text-slate-500">
              Government portal filing is free. ₹599/- is GSTwala’s service fee. Registration is
              decided on the government portal — not guaranteed, and not a fixed-time promise.
            </p>
          </div>
          <div className="order-2 mx-auto w-full max-w-md lg:max-w-none">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm">
              <Image
                src="/images/udyam-hero.jpg"
                alt="Indian small-business owner reviewing registration paperwork on a laptop in a modest office"
                width={1082}
                height={812}
                className="aspect-[4/3] w-full object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-100 bg-white py-10 sm:py-12" aria-labelledby="what-is">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 id="what-is" className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            What is Udyam Registration?
          </h2>
          <div className="mt-4 space-y-3 text-base leading-relaxed text-slate-600">
            <p>
              Udyam Registration is India’s MSME registration for micro, small and medium
              enterprises. It records your business on the MSME portal using investment and
              turnover, and issues an Udyam / MSME certificate.
            </p>
            <p>
              Small-business owners in Delhi and elsewhere use it as MSME proof for schemes,
              tenders or banks that ask for it. It is separate from GST Registration. GSTwala
              assists with Udyam Registration in Delhi via WhatsApp; we do not operate the
              government portal.
            </p>
          </div>
        </div>
      </section>

      <section
        className="border-b border-slate-100 bg-slate-50 py-10 sm:py-12"
        aria-labelledby="who"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 id="who" className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            Who can consider Udyam Registration?
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-slate-600">
            These are common examples — not a legal requirement list. Eligibility depends on MSME
            classification.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {WHO.map((item) => (
              <li
                key={item.title}
                className={card}
              >
                <h3 className="text-sm font-bold text-blue-900 sm:text-base">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-slate-100 bg-white py-10 sm:py-12" aria-labelledby="docs">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 id="docs" className="text-center text-2xl font-extrabold text-slate-900 sm:text-3xl">
            Documents / information usually needed
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-sm text-slate-500">
            Typical items we already use for Udyam filing. Exact list confirmed after a WhatsApp
            check.
          </p>
          <ul className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
            {DOCS.map((d) => (
              <li
                key={d.label}
                className="flex flex-col items-center rounded-2xl border border-slate-200 bg-white px-3 py-4 text-center shadow-sm"
              >
                <span className="text-xs font-bold text-slate-900">{d.label}</span>
                <span className="mt-0.5 text-[0.65rem] leading-tight text-slate-500">{d.note}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        className="border-b border-slate-100 bg-slate-50 py-10 sm:py-12"
        aria-labelledby="process"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 id="process" className="text-center text-2xl font-extrabold text-slate-900 sm:text-3xl">
            How Udyam registration works
          </h2>
          <ol className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((s, i) => (
              <li
                key={s.step}
                className={`relative text-center ${card}`}
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-900 text-sm font-bold text-white">
                  {s.step}
                </span>
                <h3 className="mt-3 text-sm font-bold text-slate-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.text}</p>
                {i < PROCESS.length - 1 && (
                  <span
                    className="absolute -right-2 top-1/2 hidden -translate-y-1/2 text-slate-300 lg:block"
                    aria-hidden
                  >
                    →
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        className="border-b border-slate-100 bg-white py-10 sm:py-12"
        aria-labelledby="pricing"
      >
        <div className="mx-auto max-w-md px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border-2 border-blue-900 bg-white p-6 text-center shadow-md sm:p-8">
            <h2 id="pricing" className="text-lg font-bold text-slate-900">
              Udyam Registration
            </h2>
            <p className="mt-2 text-5xl font-extrabold text-blue-900">₹599/-</p>
            <p className="mt-2 text-sm font-semibold text-slate-600">
              GSTwala service fee · WhatsApp process
            </p>
            <p className="mt-4 text-xs leading-relaxed text-slate-500">
              Government Udyam filing on the portal is free. ₹599/- is GSTwala’s assistance fee —
              not GST Registration ₹999.
            </p>
            <WhatsAppButton message={WA} className={`mt-5 ${ctaWa}`}>
              Udyam Registration — ₹599/-
            </WhatsAppButton>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-100 bg-slate-50 py-10 sm:py-12" aria-labelledby="why">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 id="why" className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            Possible benefits of Udyam / MSME registration
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            Benefits depend on the scheme or bank. They are not automatic and not guaranteed.
          </p>
          <ul className="mt-5 space-y-2">
            {BENEFITS.map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-800 shadow-sm"
              >
                <span className="font-bold text-blue-800" aria-hidden>
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-slate-100 bg-white py-10 sm:py-12" aria-labelledby="faq">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <h2
            id="faq"
            className="scroll-mt-24 text-center text-2xl font-extrabold text-slate-900 sm:text-3xl"
          >
            Frequently Asked Questions
          </h2>
          <div className="mt-6 space-y-2.5">
            {PAGE_FAQS.map((item) => (
              <details
                key={item.question}
                className="group rounded-2xl border border-slate-200 bg-white shadow-sm open:border-blue-200"
              >
                <summary className="cursor-pointer list-none px-4 py-3.5 text-left text-sm font-semibold text-slate-900 marker:content-none">
                  <span className="flex items-start justify-between gap-3">
                    <span>{item.question}</span>
                    <span className="shrink-0 text-blue-800 group-open:hidden" aria-hidden>
                      +
                    </span>
                    <span className="hidden shrink-0 text-blue-800 group-open:inline" aria-hidden>
                      −
                    </span>
                  </span>
                </summary>
                <p className="border-t border-slate-100 px-4 pb-4 pt-3 text-sm leading-relaxed text-slate-600">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section
        className="border-b border-slate-100 bg-slate-50 py-10 sm:py-12"
        aria-labelledby="gst-cross"
      >
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <h2 id="gst-cross" className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            Need GST Registration too?
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            Udyam is MSME registration. GST is a separate tax registration. If you also need a
            GSTIN, GSTwala’s GST Registration is ₹999 (₹0 advance, pay after GST approval).
          </p>
          <Link
            href="/gst-registration"
            className="mt-5 inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-blue-900 hover:bg-slate-50"
          >
            GST Registration ₹999
          </Link>
        </div>
      </section>

      <section className="bg-blue-900 py-10 text-white sm:py-12">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <h2 className="text-2xl font-extrabold sm:text-3xl">Start Udyam Registration on WhatsApp</h2>
          <p className="mt-3 text-sm text-blue-100 sm:text-base">
            Udyam Registration ₹599/- · Patel Nagar, Delhi · WhatsApp assistance beyond Delhi
          </p>
          <div className="mt-6 flex justify-center">
            <WhatsAppButton
              message={WA}
              className="inline-flex items-center justify-center overflow-hidden whitespace-nowrap rounded-xl bg-emerald-500 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-400"
              aria-label="Udyam Registration on WhatsApp"
            >
              Udyam Registration — ₹599/-
            </WhatsAppButton>
          </div>
        </div>
      </section>
    </div>
  );
}
