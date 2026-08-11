import type { Metadata } from "next";
import Link from "next/link";
import { CallButton } from "@/components/CallButton";
import {
  DocumentGuidanceVisual,
  PlatformStrip,
  ProcessFlowVisual,
} from "@/components/HomeVisuals";
import { JsonLd } from "@/components/JsonLd";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import {
  GST_REG_INCLUDES,
  GST_WA_MSG,
  NIL_FILING_INCLUDES,
} from "@/lib/conversion";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

const PAGE_PATH = "/gst-registration-online-business";
const PAGE_URL = `${SITE.baseUrl}${PAGE_PATH}`;

export const metadata: Metadata = {
  ...buildMetadata({
    title: "GST Registration for Online Business | ₹999 Pay After Approval",
    description:
      "GST registration for online sellers & ecommerce businesses — Amazon, Flipkart, Meesho, Shopify & home business. GST number for online selling with practical document guidance. ₹999, ₹0 advance, pay after approval. GSTwala.",
    path: PAGE_PATH,
    ogImage: "/images/hero-family-v2.jpg",
  }),
  keywords: [
    "GST Registration for Online Business",
    "GST registration for online sellers",
    "GST registration for ecommerce seller",
    "GST for online business",
    "GST number for online selling",
    "GST registration for Amazon seller",
    "GST registration for Meesho seller",
    "GST registration for Flipkart seller",
    "GST registration for Shopify seller",
    "GST registration for home business",
    "GST registration documents",
  ],
  robots: { index: true, follow: true },
};

/** Same-page anchors for future dedicated platform guides (no empty pages) */
const PLATFORM_NOTES = [
  {
    id: "amazon-seller",
    name: "Amazon",
    h3: "GST registration for Amazon seller",
    text: "Amazon seller requirements can depend on category, location and account type. GST is often needed for marketplace selling — but the exact step depends on your case. We help first-time sellers check what applies before registration.",
  },
  {
    id: "flipkart-seller",
    name: "Flipkart",
    h3: "GST registration for Flipkart seller",
    text: "Flipkart onboarding rules can vary. GST for online business on Flipkart should be planned with your product type and setup in mind — we explain the practical next step in simple language.",
  },
  {
    id: "meesho-seller",
    name: "Meesho",
    h3: "GST registration for Meesho seller",
    text: "Many home-based sellers start on Meesho. Requirements can differ by product and scale. GSTwala focuses on GST registration for online sellers who are just starting — including Meesho-style social commerce.",
  },
  {
    id: "shopify-seller",
    name: "Shopify",
    h3: "GST registration for Shopify seller",
    text: "If you sell via Shopify or your own store, GST may apply based on goods/services, turnover and interstate sales. We help ecommerce sellers understand registration for a D2C / website business.",
  },
  {
    id: "instagram-seller",
    name: "Instagram / Social Selling",
    h3: "GST for Instagram & social selling",
    text: "Selling on Instagram or WhatsApp is still an online business. GST need depends on your model — not every social seller has the same requirement. We guide case-by-case.",
  },
  {
    id: "d2c-website",
    name: "Own Website / D2C",
    h3: "GST registration for home business & D2C",
    text: "Own website and D2C sellers often need a GST number for online selling as they grow. We support GST registration documents and application for home businesses.",
  },
] as const;

const WHY_ITEMS = [
  "Online seller focused",
  "Practical document guidance",
  "₹0 advance payment",
  "No office visit",
  "WhatsApp support",
  "Re-application without additional service charge if the application is rejected",
] as const;

const PAGE_FAQS: { question: string; answer: string }[] = [
  {
    question: "Amazon seller ko GST chahiye?",
    answer:
      "Bahut se Amazon sellers ke liye GST registration important hota hai, lekin exact need aapke seller type, category aur applicable GST rules pe depend karti hai. Har online seller automatically same nahi hota — WhatsApp pe setup bataiye, hum practical next step clear karte hain.",
  },
  {
    question: "Meesho/Flipkart seller ke GST requirements kya hain?",
    answer:
      "Meesho aur Flipkart pe selling ke rules alag ho sakte hain. GST registration for ecommerce sellers goods/services, turnover aur business model pe depend karta hai. GSTwala first-time sellers ko simple language mein guide karta hai.",
  },
  {
    question: "Parents ke naam ki property ho to GST registration ho sakta hai?",
    answer:
      "Bahut se first-time online sellers parents ke ghar se start karte hain. Possible hota hai, lekin GST registration documents / address proof case pe depend karte hain. Hum aapke papers dekh kar applicable options guide karte hain.",
  },
  {
    question: "Electricity bill mere naam par nahi hai?",
    answer:
      "Yeh common situation hai home business sellers mein. Supporting documents ka combination case pe depend karta hai. Pehle situation check karke clear path batate hain — blind claim nahi.",
  },
  {
    question: "Landlord documents nahi de raha?",
    answer:
      "Rented place pe landlord docs delay common problem hai. Alternatives aapke setup pe depend karte hain. GSTwala practical documentation guidance deta hai for online business GST registration.",
  },
  {
    question: "Business abhi start nahi hua?",
    answer:
      "Kai online sellers pehle GST number for online selling plan karte hain, phir selling start karte hain. Ready hain ya nahi — documents aur plan WhatsApp pe check kar dete hain.",
  },
  {
    question: "GST registration ke documents kya hain?",
    answer:
      "Typically PAN, Aadhaar, address proof, bank document, electricity bill aur basic business details. Final GST registration documents list aapke address type (own / parents / rent) pe change ho sakti hai.",
  },
  {
    question: "GST registration ₹999 mein kya included hai?",
    answer:
      "Document guidance, application preparation, submission, required follow-up assistance, GST Certificate PDF on WhatsApp, aur reject hone par re-application without additional service charge. Pay after GST approval — ₹0 advance.",
  },
  {
    question: "Advance payment deni hai?",
    answer:
      "Nahi. GST Registration for online business pe ₹0 advance. Aap ₹999 tabhi pay karte hain jab GST approve ho jaye.",
  },
  {
    question: "GST application reject ho jaye to kya hoga?",
    answer:
      "Reject reason samajh kar documents / application correct karke re-apply support dete hain, additional service charge ke bina. Government approval guarantee nahi hai.",
  },
  {
    question: "GST banne ke baad monthly filing kitni hai?",
    answer:
      "Return type turnover aur scheme pe depend karta hai. Nil / low activity ke liye Nil GST Return Filing ₹300/month se support available hai. Detail WhatsApp pe confirm hota hai.",
  },
  {
    question: "Office visit zaroori hai?",
    answer:
      "Nahi. Process WhatsApp pe chalta hai. Documents photos se share karein; certificate digital PDF se milta hai.",
  },
];

const ctaWa =
  "inline-flex items-center justify-center gap-1.5 rounded-xl bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-600";
const ctaCall =
  "inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-blue-900 hover:bg-slate-50";

export default function GstRegistrationOnlineBusinessPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "GST Registration for Online Business", path: PAGE_PATH },
          ]),
          faqSchema(PAGE_FAQS),
          serviceSchema(
            "GST Registration for Online Business",
            "GST registration for online sellers and ecommerce businesses. ₹999 with ₹0 advance — pay after GST approval. Support for Amazon, Flipkart, Meesho, Shopify and home businesses.",
            PAGE_URL
          ),
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": `${PAGE_URL}#webpage`,
            url: PAGE_URL,
            name: "GST Registration for Online Business",
            description:
              "Practical GST registration for online sellers — ecommerce and home business. ₹999, pay after approval.",
            isPartOf: { "@type": "WebSite", name: SITE.name, url: SITE.baseUrl },
            inLanguage: "en-IN",
          },
        ]}
      />

      {/* Internal linking / breadcrumb */}
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
          <span className="text-slate-800">GST Registration for Online Business</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="surface-soft border-b border-slate-100" aria-labelledby="ob-hero">
        <div className="mx-auto max-w-4xl px-4 py-12 text-center sm:px-6 sm:py-14 lg:px-8">
          <p className="mb-4 inline-flex rounded-full border border-blue-100 bg-white px-3.5 py-1.5 text-sm font-semibold text-blue-800 shadow-sm">
            GST for online business · First-time sellers
          </p>
          <h1
            id="ob-hero"
            className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.5rem]"
          >
            GST Registration for Online Business
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Starting an online business? Get practical GST registration support for Amazon, Flipkart,
            Meesho, Shopify and home-based online businesses — built for first-time online sellers
            who need a GST number for online selling without confusion.
          </p>

          <ul className="mx-auto mt-7 flex max-w-2xl flex-wrap items-center justify-center gap-2">
            {[
              "₹999 GST Registration",
              "₹0 Advance Payment",
              "Pay After GST Approval",
              "Same-Day Process",
              "No Office Visit",
            ].map((item) => (
              <li
                key={item}
                className="rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-slate-800 shadow-sm sm:text-sm"
              >
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-col items-stretch justify-center gap-2.5 sm:flex-row sm:items-center">
            <WhatsAppButton message={GST_WA_MSG} className={ctaWa}>
              Get GST Registration on WhatsApp
            </WhatsAppButton>
            <CallButton className={ctaCall}>Call GSTwala</CallButton>
          </div>

          <p className="mx-auto mt-6 max-w-xl text-xs leading-relaxed text-slate-500">
            Related:{" "}
            <Link href="/gst-registration" className="font-medium text-blue-800 hover:underline">
              GST Registration
            </Link>
            {" · "}
            <Link href="/gst-compliance" className="font-medium text-blue-800 hover:underline">
              GST Return Filing
            </Link>
            {" · "}
            <a href="#faq" className="font-medium text-blue-800 hover:underline">
              FAQ
            </a>
          </p>
        </div>
      </section>

      {/* Need GST? */}
      <section className="border-b border-slate-100 bg-white py-12 sm:py-14" aria-labelledby="need-gst">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 id="need-gst" className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            Do You Need GST Registration for Your Online Business?
          </h2>
          <div className="mt-4 space-y-3 text-base leading-relaxed text-slate-600">
            <p>
              GST registration for online sellers is not a one-size rule. Whether you need a GST
              number for online selling depends on your business model, goods or services, turnover,
              selling channel (marketplace / website / social), and applicable GST rules.
            </p>
            <p>
              Ecommerce sellers on Amazon, Flipkart or Meesho may need GST for platform onboarding;
              Shopify and home business sellers may need it as they grow or sell interstate. Always
              check your situation first — GSTwala helps first-time sellers understand the practical
              next step without jargon.
            </p>
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="border-b border-slate-100 bg-slate-50 py-12 sm:py-14" aria-labelledby="platforms">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2
            id="platforms"
            className="text-center text-2xl font-extrabold text-slate-900 sm:text-3xl"
          >
            GST for Amazon, Flipkart, Meesho &amp; Shopify Sellers
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-slate-600 sm:text-base">
            GST registration for ecommerce sellers can differ by platform and business model. Jump to
            your channel below — full platform guides can be added later without empty pages today.
          </p>

          <nav
            className="mx-auto mt-5 flex max-w-2xl flex-wrap justify-center gap-x-3 gap-y-2 text-sm"
            aria-label="Platform guides on this page"
          >
            <a href="#amazon-seller" className="font-semibold text-blue-800 hover:underline">
              Amazon
            </a>
            <span className="text-slate-300" aria-hidden>
              ·
            </span>
            <a href="#meesho-seller" className="font-semibold text-blue-800 hover:underline">
              Meesho
            </a>
            <span className="text-slate-300" aria-hidden>
              ·
            </span>
            <a href="#flipkart-seller" className="font-semibold text-blue-800 hover:underline">
              Flipkart
            </a>
            <span className="text-slate-300" aria-hidden>
              ·
            </span>
            <a href="#shopify-seller" className="font-semibold text-blue-800 hover:underline">
              Shopify
            </a>
          </nav>

          <PlatformStrip />

          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {PLATFORM_NOTES.map((p) => (
              <li
                key={p.id}
                id={p.id}
                className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <h3 className="text-base font-bold text-blue-900">{p.h3}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-400">
                  {p.name}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.text}</p>
                <WhatsAppButton
                  message={`Namaste, GSTwala website se aa raha hoon. ${p.name} pe sell karna hai — GST registration for online business (₹999) ke baare mein jaanna hai.`}
                  className="mt-3 text-sm font-semibold text-emerald-600 hover:underline"
                >
                  WhatsApp for {p.name} GST →
                </WhatsAppButton>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Documents */}
      <section className="border-b border-slate-100 bg-white py-10 sm:py-12" aria-labelledby="docs">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <DocumentGuidanceVisual
            headingId="docs"
            title="Documents Usually Needed for GST Registration"
            subtitle="Professional sample mockups — fictional / blurred details only. GST registration documents can vary by address type."
          />
          <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50/60 p-5 sm:p-6">
            <h3 className="text-lg font-bold text-slate-900">
              House is in your parents&apos; name?
            </h3>
            <p className="mt-2 text-sm font-semibold text-blue-900">
              Electricity bill isn&apos;t in your name?
            </p>
            <p className="mt-1 text-sm font-semibold text-blue-900">
              Landlord isn&apos;t providing documents?
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Yeh situations first-time online sellers aur home business sellers mein common hain.
              GSTwala aapke specific case ke documents check karta hai aur applicable documentation
              pe practical guidance deta hai — without one-size-fits-all promises.
            </p>
            <WhatsAppButton
              message="Namaste, GSTwala website se aa raha hoon. Address / electricity bill / landlord documents ke baare mein doubt hai — GST registration for online business help chahiye."
              className={`mt-4 ${ctaWa}`}
            >
              Check my documents on WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-b border-slate-100 bg-slate-50 py-12 sm:py-14" aria-labelledby="how">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 id="how" className="text-center text-2xl font-extrabold text-slate-900 sm:text-3xl">
            How GST Registration Works
          </h2>
          <ProcessFlowVisual />
        </div>
      </section>

      {/* Why */}
      <section className="border-b border-slate-100 bg-white py-12 sm:py-14" aria-labelledby="why">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 id="why" className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            Why GSTwala?
          </h2>
          <ul className="mt-6 space-y-3">
            {WHY_ITEMS.map((item) => (
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

      {/* Pricing */}
      <section className="border-b border-slate-100 bg-slate-50 py-12 sm:py-14" aria-labelledby="pricing">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 id="pricing" className="text-center text-2xl font-extrabold text-slate-900 sm:text-3xl">
            Pricing for Online Business GST Registration
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-5">
            <div className="relative flex flex-col rounded-2xl border-2 border-blue-900 bg-white p-6 shadow-md sm:p-8 md:col-span-3">
              <h3 className="text-lg font-bold text-slate-900">GST Registration</h3>
              <p className="mt-2 text-5xl font-extrabold text-blue-900">₹999</p>
              <p className="mt-1 text-sm font-semibold text-emerald-700">
                ₹0 advance · Pay after GST approval
              </p>
              <ul className="mt-5 flex-1 space-y-2 text-sm text-slate-600">
                {GST_REG_INCLUDES.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-emerald-500" aria-hidden>
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <WhatsAppButton message={GST_WA_MSG} className={`mt-6 w-full ${ctaWa}`}>
                Get GST Registration on WhatsApp
              </WhatsAppButton>
            </div>
            <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7 md:col-span-2">
              <h3 className="text-lg font-bold text-slate-900">Nil GST Return Filing</h3>
              <p className="mt-2 text-4xl font-extrabold text-slate-900">
                ₹300<span className="text-base font-semibold text-slate-500">/month</span>
              </p>
              <ul className="mt-5 flex-1 space-y-2 text-sm text-slate-600">
                {NIL_FILING_INCLUDES.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-emerald-500" aria-hidden>
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <WhatsAppButton
                message="Namaste, GSTwala website se aa raha hoon. Nil GST return filing ₹300/month ke baare mein jaanna hai."
                className="mt-6 inline-flex w-full items-center justify-center rounded-xl border-2 border-blue-900 py-2.5 text-sm font-semibold text-blue-900 hover:bg-blue-50"
              >
                Ask About Monthly Filing
              </WhatsAppButton>
              <Link
                href="/gst-compliance"
                className="mt-3 text-center text-xs font-semibold text-blue-800 hover:underline"
              >
                GST Return Filing service →
              </Link>
            </div>
          </div>
          <p className="mt-5 text-center text-xs text-slate-500">
            Government approval is not guaranteed. Timeline depends on portal processing and complete
            documents.
          </p>
        </div>
      </section>

      {/* After registration */}
      <section className="border-b border-slate-100 bg-white py-12 sm:py-14" aria-labelledby="after">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 id="after" className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            What Happens After GST Registration?
          </h2>
          <div className="mt-4 space-y-3 text-base leading-relaxed text-slate-600">
            <p>
              After approval you receive the GST Certificate PDF on WhatsApp. Next comes compliance —
              return filing when applicable for your GST profile.
            </p>
            <p>
              Early-stage online sellers often need simple support for nil / low-activity periods.
              GSTwala offers{" "}
              <strong className="font-semibold text-slate-800">
                Nil GST Return Filing at ₹300/month
              </strong>
              . Exact filing type depends on your case — see{" "}
              <Link href="/gst-compliance" className="font-semibold text-blue-800 hover:underline">
                GST Return Filing
              </Link>
              .
            </p>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <WhatsAppButton
              message="Namaste, GSTwala website se aa raha hoon. GST registration ke baad filing / compliance ke baare mein poochhna hai."
              className={ctaWa}
            >
              Ask About GST Filing
            </WhatsAppButton>
            <p className="text-sm text-slate-500">
              Need help with{" "}
              <WhatsAppButton
                message="Namaste, GSTwala website se aa raha hoon. GST cancellation ke baare mein jaanna hai."
                className="font-semibold text-blue-800 hover:underline"
              >
                GST Cancellation
              </WhatsAppButton>
              {" or "}
              <WhatsAppButton
                message="Namaste, GSTwala website se aa raha hoon. GST revocation / restoration ke baare mein jaanna hai."
                className="font-semibold text-blue-800 hover:underline"
              >
                GST Restoration
              </WhatsAppButton>
              ? Message on WhatsApp.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-slate-100 bg-slate-50 py-12 sm:py-14" aria-labelledby="faq">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <h2 id="faq" className="scroll-mt-24 text-center text-2xl font-extrabold text-slate-900 sm:text-3xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-center text-sm text-slate-500">
            Common questions on GST registration for online sellers, ecommerce and home business.
          </p>
          <div className="mt-7 space-y-2.5">
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

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 py-12 text-white sm:py-14">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <h2 className="text-2xl font-extrabold sm:text-3xl">
            Ready to Start Your Online Business?
          </h2>
          <p className="mt-3 text-sm text-blue-100 sm:text-base">
            Get GST registration support from GSTwala — for online sellers and ecommerce businesses.
          </p>
          <p className="mt-4 text-sm font-semibold text-white">
            ₹999 · ₹0 Advance · Pay After GST Approval
          </p>
          <div className="mt-7 flex flex-col gap-2.5 sm:flex-row sm:justify-center">
            <WhatsAppButton
              message={GST_WA_MSG}
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
            <Link href="/gst-registration" className="underline-offset-2 hover:underline">
              GST Registration
            </Link>
            {" · "}
            <Link href="/gst-compliance" className="underline-offset-2 hover:underline">
              GST Return Filing
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
