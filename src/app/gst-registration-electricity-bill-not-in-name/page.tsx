import type { Metadata } from "next";
import Link from "next/link";
import { CallButton } from "@/components/CallButton";
import { JsonLd } from "@/components/JsonLd";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ELECTRICITY_BILL_WA_MSG } from "@/lib/conversion";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

const PAGE_PATH = "/gst-registration-electricity-bill-not-in-name";
const PAGE_URL = `${SITE.baseUrl}${PAGE_PATH}`;
const WA = ELECTRICITY_BILL_WA_MSG;

export const metadata: Metadata = {
  ...buildMetadata({
    title: "GST Registration When Electricity Bill Is Not in Your Name",
    description:
      "Electricity bill is not in your name? Learn which address documents may work for GST registration and get your case checked on WhatsApp. GST registration ₹999, ₹0 advance.",
    path: PAGE_PATH,
  }),
  keywords: [
    "GST registration electricity bill not in my name",
    "GST registration without electricity bill in my name",
    "electricity bill not in my name for GST registration",
    "GST address proof",
    "GST registration from home",
    "electricity bill in father's name GST",
    "electricity bill in mother's name GST",
  ],
  robots: { index: true, follow: true },
};

const ctaWa =
  "inline-flex items-center justify-center gap-1.5 overflow-hidden whitespace-nowrap rounded-xl bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-600";
const ctaCall =
  "inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-blue-900 hover:bg-slate-50";

const SITUATIONS = [
  {
    title: "Father/Mother’s Name",
    text: "You live or sell from a parent’s house and the bill is in their name. Consent/NOC and owner/address proof are often part of the papers we check.",
  },
  {
    title: "Landlord’s Name",
    text: "You rent the premises and the bill is in the landlord’s name. Rent/lease documentation and the bill are commonly reviewed together.",
  },
  {
    title: "Family-Owned Property",
    text: "A spouse, sibling or other family member owns the house. Consent/NOC and owner/address proof may apply, similar to a parent’s property.",
  },
  {
    title: "Own Residential Property",
    text: "The house is yours but the meter is in another name. Ownership/address proof plus the applicable premises document may support the address.",
  },
] as const;

const DOC_ROWS = [
  {
    situation: "Own property",
    documents: "Ownership/address proof + applicable premises document",
  },
  {
    situation: "Parent/family property",
    documents: "Consent/NOC + applicable owner/address proof",
  },
  {
    situation: "Rented property",
    documents: "Rent/lease documentation + applicable premises/address proof",
  },
  {
    situation: "Other premises",
    documents: "Depends on the situation",
  },
] as const;

const WHY = [
  "₹0 advance",
  "Pay after GST approval",
  "Document check before filing",
  "Re-application without additional service charge if rejected",
] as const;

const PROCESS = [
  { step: "01", title: "Send documents" },
  { step: "02", title: "We check them" },
  { step: "03", title: "Application is filed" },
  { step: "04", title: "GST Department processes it" },
] as const;

const PAGE_FAQS: { question: string; answer: string }[] = [
  {
    question: "Can I get GST registration if the electricity bill is not in my name?",
    answer:
      "Often possible. An electricity bill is one possible address document and does not have to be in your own name. What is needed depends on the principal place of business and the papers available. The GST Department makes the final decision.",
  },
  {
    question: "Can I use my father's or mother's electricity bill?",
    answer:
      "A parent’s bill is commonly used when you live or operate from that house. Consent/NOC and owner/address proof may also be relevant, depending on the property.",
  },
  {
    question: "What if the electricity bill is in my landlord's name?",
    answer:
      "That is common for rented premises. Rent/lease documentation and the bill are often reviewed together. Owner-related papers or a consent/NOC may apply in some cases.",
  },
  {
    question: "Can I register GST from my home?",
    answer:
      "Often possible. Many home-based online sellers use a residential address as the principal place of business. A separate office is not required.",
  },
  {
    question: "Do I need a consent letter/NOC?",
    answer:
      "A consent letter or NOC is commonly discussed when the premises are in a parent’s, family member’s or landlord’s name. Whether it is needed depends on the case. It is not a universal requirement.",
  },
  {
    question: "What documents can be used as GST address proof?",
    answer:
      "Possible papers include a utility bill (even if not in your name), ownership or property documents, rent/lease papers, and consent/NOC — depending on the premises. Exact requirements vary.",
  },
  {
    question: "What happens if my GST application is rejected?",
    answer:
      "If the application is rejected, GSTwala will re-apply without an additional service charge, subject to correcting the required issues or documents. Government approval is not guaranteed.",
  },
];

export default function ElectricityBillNotInNamePage() {
  return (
    <div className="pb-8 md:pb-0">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "GST Registration", path: "/gst-registration" },
            { name: "Electricity Bill Not in Your Name", path: PAGE_PATH },
          ]),
          faqSchema(PAGE_FAQS),
          serviceSchema(
            "GST Registration When Electricity Bill Is Not in Your Name",
            "GST registration assistance when the electricity bill is not in the applicant’s name. Practical GST address proof guidance. ₹999, ₹0 advance, pay after GST approval.",
            PAGE_URL
          ),
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": `${PAGE_URL}#webpage`,
            url: PAGE_URL,
            name: "GST Registration When Electricity Bill Is Not in Your Name",
            description:
              "Electricity bill is not in your name? Learn which address documents may work for GST registration. ₹999, ₹0 advance.",
            isPartOf: { "@type": "WebSite", name: SITE.name, url: SITE.baseUrl },
            inLanguage: "en-IN",
          },
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
          <Link href="/gst-registration" className="font-medium text-blue-800 hover:underline">
            GST Registration
          </Link>
          <span aria-hidden>/</span>
          <span className="text-slate-800">Electricity bill not in your name</span>
        </div>
      </nav>

      <section className="surface-soft border-b border-slate-100" aria-labelledby="eb-hero">
        <div className="mx-auto max-w-4xl px-4 py-10 text-center sm:px-6 sm:py-12 lg:px-8">
          <h1
            id="eb-hero"
            className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.5rem]"
          >
            GST Registration When Electricity Bill Is Not in Your Name
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Electricity bill आपके नाम पर नहीं है? GST registration फिर भी possible हो सकता है. The
            required address documents depend on whose property it is and what documents are
            available.
          </p>
          <div className="mt-6 flex flex-col items-stretch justify-center gap-2.5 sm:flex-row sm:items-center">
            <WhatsAppButton
              message={WA}
              className={ctaWa}
              aria-label="Check My Documents on WhatsApp"
            >
              Check My Documents on WhatsApp →
            </WhatsAppButton>
            <CallButton className={ctaCall}>Call GSTwala</CallButton>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-100 bg-white py-10 sm:py-12" aria-labelledby="can-i">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 id="can-i" className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            Can I Get GST Registration If the Electricity Bill Is Not in My Name?
          </h2>
          <div className="mt-4 space-y-3 text-base leading-relaxed text-slate-600">
            <p>
              An electricity bill is one possible address document. It does not have to be in the
              applicant’s own name.
            </p>
            <p>
              What works depends on the principal place of business and the supporting documents
              available. The GST Department makes the final decision.
            </p>
          </div>
        </div>
      </section>

      <section
        className="border-b border-slate-100 bg-slate-50 py-10 sm:py-12"
        aria-labelledby="situations"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 id="situations" className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            Common Situations
          </h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {SITUATIONS.map((item) => (
              <li
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5"
              >
                <h3 className="text-sm font-bold text-blue-900 sm:text-base">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        className="border-b border-slate-100 bg-white py-10 sm:py-12"
        aria-labelledby="documents"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 id="documents" className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            Documents That May Be Required
          </h2>
          <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full min-w-[20rem] text-left text-sm">
              <caption className="sr-only">
                Possible GST supporting documents by premises situation
              </caption>
              <thead className="bg-slate-50 text-slate-900">
                <tr>
                  <th scope="col" className="px-4 py-3 font-bold sm:px-5">
                    Situation
                  </th>
                  <th scope="col" className="px-4 py-3 font-bold sm:px-5">
                    Possible supporting documents
                  </th>
                </tr>
              </thead>
              <tbody>
                {DOC_ROWS.map((row) => (
                  <tr key={row.situation} className="border-t border-slate-100">
                    <th
                      scope="row"
                      className="whitespace-nowrap px-4 py-3.5 align-top font-semibold text-slate-900 sm:px-5"
                    >
                      {row.situation}
                    </th>
                    <td className="px-4 py-3.5 align-top text-slate-600 sm:px-5">
                      {row.documents}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate-600">
            Exact document requirements can vary. Send your available documents on WhatsApp before
            filing.
          </p>
        </div>
      </section>

      <section className="border-b border-slate-100 bg-slate-50 py-10 sm:py-12" aria-labelledby="why">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 id="why" className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            Why GSTwala
          </h2>
          <ul className="mt-5 space-y-2">
            {WHY.map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-800"
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

      <section
        className="border-b border-slate-100 bg-white py-10 sm:py-12"
        aria-labelledby="process"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 id="process" className="text-center text-2xl font-extrabold text-slate-900 sm:text-3xl">
            GSTwala Process
          </h2>
          <ol className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((s, i) => (
              <li
                key={s.step}
                className="relative rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center shadow-sm"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-900 text-sm font-bold text-white">
                  {s.step}
                </span>
                <h3 className="mt-3 text-sm font-bold text-slate-900">{s.title}</h3>
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
          <p className="mx-auto mt-5 max-w-xl text-center text-sm text-slate-600">
            After approval, pay ₹999. If rejected, GSTwala will re-apply without additional service
            charge, subject to correcting required issues/documents.
          </p>
        </div>
      </section>

      <section
        className="border-b border-slate-100 bg-slate-50 py-10 sm:py-12"
        aria-labelledby="pricing"
      >
        <div className="mx-auto max-w-md px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border-2 border-blue-900 bg-white p-6 text-center shadow-md sm:p-8">
            <h2 id="pricing" className="text-lg font-bold text-slate-900">
              GST Registration
            </h2>
            <p className="mt-2 text-5xl font-extrabold text-blue-900">₹999</p>
            <p className="mt-2 text-sm font-semibold text-emerald-700">
              ₹0 advance · Pay after GST approval
            </p>
          </div>
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
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 py-10 text-white sm:py-12">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <h2 className="text-2xl font-extrabold sm:text-3xl">
            Electricity Bill Not in Your Name? Check Your Documents.
          </h2>
          <p className="mt-3 text-sm text-blue-100 sm:text-base">
            Send your available address document on WhatsApp. We&apos;ll tell you what may be
            required before filing.
          </p>
          <div className="mt-6 flex justify-center">
            <WhatsAppButton
              message={WA}
              className="inline-flex items-center justify-center overflow-hidden whitespace-nowrap rounded-xl bg-emerald-500 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-400"
              aria-label="Check My Documents on WhatsApp"
            >
              Check My Documents on WhatsApp →
            </WhatsAppButton>
          </div>
          <p className="mt-5 text-xs text-blue-200">
            <Link href="/" className="underline-offset-2 hover:underline">
              Homepage
            </Link>
            {" · "}
            <Link href="/gst-registration" className="underline-offset-2 hover:underline">
              GST Registration
            </Link>
            {" · "}
            <Link
              href="/gst-registration-online-business"
              className="underline-offset-2 hover:underline"
            >
              GST Registration for Online Business
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
