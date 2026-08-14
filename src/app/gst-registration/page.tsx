import type { Metadata } from "next";
import Link from "next/link";
import { CallButton } from "@/components/CallButton";
import { JsonLd } from "@/components/JsonLd";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { GST_REG_INCLUDES, GST_WA_MSG } from "@/lib/conversion";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

const PAGE_PATH = "/gst-registration";
const PAGE_URL = `${SITE.baseUrl}${PAGE_PATH}`;

export const metadata: Metadata = {
  ...buildMetadata({
    title: "GST Registration Online in Delhi",
    description:
      "Get GST registration assistance from GSTwala. ₹999 service fee, ₹0 advance and pay after GST approval. Document guidance and WhatsApp support.",
    path: PAGE_PATH,
  }),
  robots: { index: true, follow: true },
};

const WA = GST_WA_MSG;
const ctaWa =
  "inline-flex items-center justify-center gap-1.5 rounded-xl bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-600";
const ctaCall =
  "inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-blue-900 hover:bg-slate-50";

const BUSINESS_TYPES = [
  {
    title: "Online sellers",
    text: "Selling online through marketplaces, social media or your own store.",
    href: "/gst-registration-online-business",
  },
  {
    title: "Amazon sellers",
    text: "Planning to sell on Amazon — check GST for your seller setup.",
    href: "/gst-registration-online-business#amazon-seller",
  },
  {
    title: "Flipkart sellers",
    text: "Marketplace selling on Flipkart — registration guidance in context.",
    href: "/gst-registration-online-business#flipkart-seller",
  },
  {
    title: "Meesho sellers",
    text: "Home-based and social commerce sellers starting on Meesho.",
    href: "/gst-registration-online-business#meesho-seller",
  },
  {
    title: "Shopify / D2C sellers",
    text: "Own store or D2C website — GST as your business grows.",
    href: "/gst-registration-online-business#shopify-seller",
  },
  {
    title: "Home businesses",
    text: "Working from home — documents and premises questions answered simply.",
    href: "/gst-registration-online-business#d2c-website",
  },
] as const;

const DOC_ITEMS = [
  { label: "PAN", note: "Permanent Account Number" },
  { label: "Aadhaar", note: "Identity of applicant" },
  { label: "Address / premises proof", note: "Business premises" },
  { label: "Bank proof", note: "Where applicable" },
  { label: "Photograph", note: "Passport-size / clear photo" },
  { label: "Constitution docs", note: "Where applicable" },
] as const;

const PROCESS = [
  {
    step: "01",
    title: "WhatsApp / Contact",
    text: "Share your business type and basic details on WhatsApp or call.",
  },
  {
    step: "02",
    title: "Document Check",
    text: "We review what is needed for your situation and guide you on gaps.",
  },
  {
    step: "03",
    title: "Application preparation & submission",
    text: "We prepare and submit the GST registration application.",
  },
  {
    step: "04",
    title: "GST department processing",
    text: "Application is processed by the GST department. Timeline depends on the portal and complete documents.",
  },
] as const;

const WHY = [
  "₹999 service fee",
  "₹0 advance",
  "Pay after GST approval",
  "Practical document guidance",
  "WhatsApp support",
  "Application assistance",
  "Re-application without additional GSTwala service charge if rejected, subject to correcting required issues/documents",
] as const;

const FAQS: {
  question: string;
  answer: string;
  answerLink?: { href: string; phrase: string };
}[] = [
  {
    question: "What is GST registration?",
    answer:
      "GST registration is the process of obtaining a Goods and Services Tax Identification Number (GSTIN) so your business can charge/collect GST where applicable and comply with GST rules. It is a government registration — GSTwala assists with documentation and application support.",
  },
  {
    question: "Who needs GST registration?",
    answer:
      "It depends on your business model, turnover, goods or services, and applicable GST rules. Common cases include many online sellers, interstate suppliers, and businesses that are otherwise required to register. Not every individual business is automatically required — check your situation first.",
  },
  {
    question: "Can I get GST registration for an online business?",
    answer:
      "Yes, many online and ecommerce businesses register for GST. Exact need and documents depend on how and where you sell. See our guide on GST registration for online business for first-time seller context.",
    answerLink: {
      href: "/gst-registration-online-business",
      phrase: "GST registration for online business",
    },
  },
  {
    question: "Can I register from a home address?",
    answer:
      "Often possible, including when you work from home. Address and premises proof requirements depend on ownership, tenancy and supporting documents. Parents’ property or bills not in your name are common situations — we guide case by case.",
  },
  {
    question: "What documents are required?",
    answer:
      "Typically PAN, Aadhaar, photograph, address/business premises proof, bank proof where applicable, and constitution documents where applicable. The exact list can vary by business and premises type.",
  },
  {
    question: "Is office visit required?",
    answer:
      "No unnecessary office visit is required for our process. You can share document photos on WhatsApp and receive updates digitally.",
  },
  {
    question: "How much does GST registration cost?",
    answer:
      "GSTwala’s service fee for GST registration is ₹999. You pay after GST approval — ₹0 advance on this service.",
  },
  {
    question: "Is advance payment required?",
    answer:
      "No. For GST registration with GSTwala, advance is ₹0. You pay the ₹999 service fee after GST approval.",
  },
  {
    question: "What happens if application is rejected?",
    answer:
      "We help you understand the issue, correct documents/details as needed, and re-apply without an additional GSTwala service charge, subject to fixing the required issues. Government approval is not guaranteed.",
  },
  {
    question: "How long does GST registration take?",
    answer:
      "Processing time depends on the GST department portal, completeness of documents and any queries raised. We do not guarantee a fixed approval time. We assist promptly with filing and follow-up on our side.",
  },
  {
    question: "What happens after registration?",
    answer:
      "After approval you receive your GST certificate. You should then understand compliance for your business, including return filing when applicable. GSTwala also offers Nil GST Return Filing support where relevant.",
    answerLink: {
      href: "/gst-compliance",
      phrase: "Nil GST Return Filing",
    },
  },
];

export default function GstRegistrationPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "GST Registration", path: PAGE_PATH },
          ]),
          faqSchema(FAQS),
          serviceSchema(
            "GST Registration Online",
            "GST registration assistance from GSTwala. ₹999 service fee, ₹0 advance, pay after GST approval. Document guidance and WhatsApp support in Delhi.",
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
          <span className="text-slate-800">GST Registration</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="surface-soft border-b border-slate-100" aria-labelledby="gst-reg-h1">
        <div className="mx-auto max-w-4xl px-4 py-12 text-center sm:px-6 sm:py-14 lg:px-8">
          <h1
            id="gst-reg-h1"
            className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.5rem]"
          >
            GST Registration Online — ₹999
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Get GST registration assistance from GSTwala — for individuals, first-time entrepreneurs,
            small businesses and online sellers. Clear pricing, document guidance and WhatsApp support.
          </p>
          <ul className="mx-auto mt-6 flex max-w-2xl flex-wrap justify-center gap-2">
            {[
              "₹999 service fee",
              "₹0 advance",
              "Pay after GST approval",
              "WhatsApp support",
              "No unnecessary office visit",
            ].map((t) => (
              <li
                key={t}
                className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-800 shadow-sm sm:text-sm"
              >
                {t}
              </li>
            ))}
          </ul>
          <div className="mt-7 flex flex-col items-stretch justify-center gap-2.5 sm:flex-row sm:items-center">
            <WhatsAppButton message={WA} className={ctaWa}>
              Get GST Registration on WhatsApp
            </WhatsAppButton>
            <CallButton className={ctaCall}>Call GSTwala</CallButton>
          </div>
          <p className="mt-4 text-xs text-slate-500">
            Approval is processed by the GST department. We do not guarantee approval or a fixed
            processing time.
          </p>
        </div>
      </section>

      {/* 1. Who needs */}
      <section className="border-b border-slate-100 bg-white py-12 sm:py-14" aria-labelledby="who-needs">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 id="who-needs" className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            Who Needs GST Registration?
          </h2>
          <div className="mt-4 space-y-3 text-base leading-relaxed text-slate-600">
            <p>
              GST registration may apply to many businesses, but it is not automatic for every person
              who sells something. Applicability depends on your business model, turnover, goods or
              services, and applicable GST rules.
            </p>
            <p>Common situations where people explore GST registration include:</p>
            <ul className="list-disc space-y-1.5 pl-5">
              <li>
                <Link
                  href="/gst-registration-online-business"
                  className="font-medium text-blue-800 hover:underline"
                >
                  Online sellers and ecommerce businesses
                </Link>
              </li>
              <li>Amazon, Flipkart and Meesho sellers (where platform or law requires it)</li>
              <li>Shopify / D2C and website sellers</li>
              <li>Businesses supplying interstate or otherwise required to register</li>
              <li>Small businesses and first-time entrepreneurs setting up compliance</li>
            </ul>
            <p>
              If you are unsure whether you need GST, share your business type on WhatsApp — we
              explain the practical next step without pressure.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Business types */}
      <section className="border-b border-slate-100 bg-slate-50 py-12 sm:py-14" aria-labelledby="biz-types">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 id="biz-types" className="text-center text-2xl font-extrabold text-slate-900 sm:text-3xl">
            GST for Business Types
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-sm text-slate-600">
            Explore guidance for common seller types. Links go only to existing pages on this site.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {BUSINESS_TYPES.map((b) => (
              <li key={b.title}>
                <Link
                  href={b.href}
                  className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-blue-200 hover:shadow-md"
                >
                  <h3 className="text-base font-bold text-blue-900">{b.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{b.text}</p>
                  <span className="mt-3 text-sm font-semibold text-blue-800">Learn more →</span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-center text-sm text-slate-500">
            Full guide:{" "}
            <Link
              href="/gst-registration-online-business"
              className="font-semibold text-blue-800 hover:underline"
            >
              GST Registration for Online Business
            </Link>
          </p>
        </div>
      </section>

      {/* 3. Documents */}
      <section className="border-b border-slate-100 bg-white py-10 sm:py-12" aria-labelledby="docs">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 id="docs" className="text-center text-2xl font-extrabold text-slate-900 sm:text-3xl">
            Documents Required
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-sm text-slate-500">
            Requirements can vary by business and premises type. Typical items include:
          </p>
          <ul className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
            {DOC_ITEMS.map((d) => (
              <li
                key={d.label}
                className="flex flex-col items-center rounded-xl border border-slate-200 bg-slate-50 px-2 py-3 text-center"
              >
                <span
                  className="mb-2 flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-sm font-bold text-blue-800"
                  aria-hidden
                >
                  {d.label.slice(0, 1)}
                </span>
                <span className="text-xs font-bold text-slate-900">{d.label}</span>
                <span className="mt-0.5 text-[0.65rem] leading-tight text-slate-500">{d.note}</span>
              </li>
            ))}
          </ul>
          <p className="mx-auto mt-4 max-w-xl text-center text-xs text-slate-500">
            Bank proof where applicable · Constitution documents where applicable · Exact list
            confirmed after document check
          </p>
        </div>
      </section>

      {/* 4. Process */}
      <section className="border-b border-slate-100 bg-slate-50 py-12 sm:py-14" aria-labelledby="process">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 id="process" className="text-center text-2xl font-extrabold text-slate-900 sm:text-3xl">
            GST Registration Process
          </h2>
          <ol className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((s, i) => (
              <li
                key={s.step}
                className="relative rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm"
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
          <p className="mx-auto mt-6 max-w-lg text-center text-sm font-semibold text-slate-800">
            After approval → GST certificate is shared with you (typically as a PDF).
          </p>
          <div className="mt-6 text-center">
            <WhatsAppButton message={WA} className={ctaWa}>
              Get GST Registration on WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      </section>

      {/* 5. Why */}
      <section className="border-b border-slate-100 bg-white py-12 sm:py-14" aria-labelledby="why">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 id="why" className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            Why GSTwala?
          </h2>
          <ul className="mt-6 space-y-2.5">
            {WHY.map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800"
              >
                <span className="text-emerald-500" aria-hidden>
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 6. Pricing */}
      <section className="border-b border-slate-100 bg-slate-50 py-12 sm:py-14" aria-labelledby="pricing">
        <div className="mx-auto max-w-lg px-4 sm:px-6 lg:px-8">
          <h2 id="pricing" className="text-center text-2xl font-extrabold text-slate-900 sm:text-3xl">
            Pricing
          </h2>
          <div className="mt-8 rounded-2xl border-2 border-blue-900 bg-white p-6 shadow-md sm:p-8">
            <h3 className="text-lg font-bold text-slate-900">GST Registration</h3>
            <p className="mt-2 text-5xl font-extrabold text-blue-900">₹999</p>
            <p className="mt-2 text-sm font-semibold text-emerald-700">
              ₹0 advance · Pay after GST approval
            </p>
            <ul className="mt-5 space-y-2 text-sm text-slate-600">
              {GST_REG_INCLUDES.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-emerald-500" aria-hidden>
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <WhatsAppButton message={WA} className={`mt-6 w-full ${ctaWa}`}>
              Get GST Registration on WhatsApp
            </WhatsAppButton>
          </div>
          <p className="mt-4 text-center text-xs text-slate-500">
            Government approval is not guaranteed. Processing time depends on the GST department
            portal and complete documents.
          </p>
          <p className="mt-3 text-center text-sm text-slate-600">
            After GST approval, monthly filing may apply. See{" "}
            <Link href="/gst-compliance" className="font-semibold text-blue-800 hover:underline">
              Nil GST Return Filing
            </Link>
            {" "}from ₹300/month where relevant, or{" "}
            <Link
              href="/gst-notice-handling"
              className="font-semibold text-blue-800 hover:underline"
            >
              GST Notice Assistance
            </Link>
            {" "}if you receive a notice.
          </p>
        </div>
      </section>

      {/* 7. Delhi */}
      <section className="border-b border-slate-100 bg-white py-12 sm:py-14" aria-labelledby="delhi">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 id="delhi" className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            GST Registration in Delhi
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            GSTwala assists with GST registration online for clients across Delhi, with a practical
            focus on Central Delhi and nearby areas — including Patel Nagar, Rajinder Nagar, Anand
            Parbat, Karol Bagh, Inderlok, Shastri Nagar and Kirti Nagar. The process is WhatsApp-led,
            so you do not need an unnecessary office visit to start.
          </p>
          <p className="mt-3 text-sm text-slate-500">
            Area guides:{" "}
            <Link
              href="/patel-nagar-rajinder-nagar"
              className="font-medium text-blue-800 hover:underline"
            >
              Patel Nagar &amp; Rajinder Nagar
            </Link>
            {" · "}
            <Link
              href="/anand-parbat-karol-bagh"
              className="font-medium text-blue-800 hover:underline"
            >
              Anand Parbat &amp; Karol Bagh
            </Link>
            {" · "}
            <Link href="/inderlok-shastri-nagar" className="font-medium text-blue-800 hover:underline">
              Inderlok &amp; Shastri Nagar
            </Link>
            {" · "}
            <Link href="/areas-we-serve" className="font-medium text-blue-800 hover:underline">
              All areas
            </Link>
          </p>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="border-b border-slate-100 bg-slate-50 py-12 sm:py-14" aria-labelledby="faq">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <h2 id="faq" className="scroll-mt-24 text-center text-2xl font-extrabold text-slate-900 sm:text-3xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-7 space-y-2.5">
            {FAQS.map((item) => (
              <details
                key={item.question}
                className="group rounded-xl border border-slate-200 bg-white open:border-blue-200"
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
                  <FaqAnswerText answer={item.answer} link={item.answerLink} />
                </p>
              </details>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-slate-500">
            More for online sellers:{" "}
            <Link
              href="/gst-registration-online-business#faq"
              className="font-semibold text-blue-800 hover:underline"
            >
              Online business GST FAQ
            </Link>
            {" · "}
            <Link href="/gst-compliance" className="font-semibold text-blue-800 hover:underline">
              GST Return Filing
            </Link>
            {" · "}
            <Link href="/gst-notice-handling" className="font-semibold text-blue-800 hover:underline">
              GST Notice Assistance
            </Link>
          </p>
        </div>
      </section>

      {/* 9. Final CTA */}
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 py-12 text-white sm:py-14">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <h2 className="text-2xl font-extrabold sm:text-3xl">
            Ready to Get Your GST Registration?
          </h2>
          <p className="mt-4 text-sm font-semibold text-white">
            ₹999 · ₹0 Advance · Pay After GST Approval
          </p>
          <div className="mt-7 flex flex-col gap-2.5 sm:flex-row sm:justify-center">
            <WhatsAppButton
              message={WA}
              className="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-400"
            >
              Get GST Registration on WhatsApp
            </WhatsAppButton>
            <CallButton className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20">
              Call GSTwala
            </CallButton>
          </div>
          <p className="mt-6 text-xs text-blue-200">
            <Link href="/" className="underline-offset-2 hover:underline">
              Homepage
            </Link>
            {" · "}
            <Link
              href="/gst-registration-online-business"
              className="underline-offset-2 hover:underline"
            >
              GST Registration for Online Business
            </Link>
            {" · "}
            <Link href="/gst-compliance" className="underline-offset-2 hover:underline">
              GST Return Filing
            </Link>
            {" · "}
            <Link href="/gst-notice-handling" className="underline-offset-2 hover:underline">
              GST Notice Assistance
            </Link>
            {" · "}
            <a href="#faq" className="underline-offset-2 hover:underline">
              FAQ
            </a>
          </p>
        </div>
      </section>
    </>
  );
}

function FaqAnswerText({
  answer,
  link,
}: {
  answer: string;
  link?: { href: string; phrase: string };
}) {
  if (!link) return answer;
  const start = answer.toLowerCase().indexOf(link.phrase.toLowerCase());
  if (start === -1) return answer;
  const end = start + link.phrase.length;
  return (
    <>
      {answer.slice(0, start)}
      <Link href={link.href} className="font-semibold text-blue-800 hover:underline">
        {answer.slice(start, end)}
      </Link>
      {answer.slice(end)}
    </>
  );
}
