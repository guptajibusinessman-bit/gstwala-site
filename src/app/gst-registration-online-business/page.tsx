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

/** Same-page platform notes — no separate marketplace URLs */
const PLATFORM_NOTES = [
  {
    id: "amazon-seller",
    name: "Amazon",
    h3: "GST registration for Amazon seller",
    know: "A first-time Amazon seller usually meets GST on the onboarding form, not as a separate legal lecture. Whether you must register still depends on your supplies, turnover, location and account type. Amazon’s GST fields can change — treat the current screen as a request for your GST position, not proof that every seller must register.",
    gstin:
      "A GSTIN may be relevant so the marketplace can map your seller account and invoices. When GST applies to you, having it ready usually makes that onboarding step simpler.",
    help: "You are starting Amazon for the first time, papers are not in your name, or the form is asking for GST details you do not yet have.",
  },
  {
    id: "flipkart-seller",
    name: "Flipkart",
    h3: "GST registration for Flipkart seller",
    know: "Flipkart seller onboarding can also request GST information. What they ask can vary by category, account setup and current platform rules. Plan GST around your catalogue and location — not another seller’s path, and not a screenshot from last year.",
    gstin:
      "A GSTIN may be how the marketplace records your seller identity for orders and any tax-related reporting that applies to you.",
    help: "Flipkart has asked for GST details, you sell from home, or you want the application prepared without an office visit.",
  },
  {
    id: "meesho-seller",
    name: "Meesho",
    h3: "GST registration for Meesho seller",
    know: "Many first-time and home-based sellers start on Meesho. GST still depends on what you sell, scale and applicable rules — not on Meesho alone. Meesho’s GST prompts can change as the seller account grows.",
    gstin:
      "If Meesho or your buyers need GST details, a GSTIN is what you share. Some sellers register before listing; others should check first. We do not assume every Meesho seller must register.",
    help: "You sell from a parents’ house or a rented room, the electricity bill is not in your name, or you want a document check before you apply.",
  },
  {
    id: "shopify-seller",
    name: "Shopify",
    h3: "GST registration for Shopify seller",
    know: "On Shopify you run the store. GST may apply based on goods or services, turnover and where you ship. Payment and theme apps sometimes ask for a GSTIN — those prompts can change, and they are not a substitute for checking your own GST position.",
    gstin:
      "A GSTIN may be needed on invoices, checkout or payment setup as the business grows. Exact display and compliance depend on your GST profile.",
    help: "You are moving from social selling to your own store, you sell interstate, or home / rented premises documents are unclear.",
  },
  {
    id: "instagram-seller",
    name: "Instagram / Social Selling",
    h3: "GST for Instagram & social selling",
    know: "Selling on Instagram, WhatsApp or Facebook is still an online business. GST is not decided by the app — it depends on your model, supplies and other applicable conditions.",
    gstin:
      "If you later list on a marketplace or open a website, having GST in place (when it applies) avoids a last-minute scramble. Social selling by itself does not automatically mean GST is required.",
    help: "Orders are growing, you want to move to Amazon, Meesho or Shopify, or you need to know whether to register before you spend on ads or stock.",
  },
  {
    id: "d2c-website",
    name: "Own Website / D2C",
    h3: "GST registration for home business & D2C",
    know: "Your own website is your store. GST for online selling here follows the same case-by-case rules — and once registered, invoices and returns are your responsibility.",
    gstin:
      "A GSTIN is what you put on tax invoices and, where required, on the site. After registration, filing still applies when your GST profile requires it.",
    help: "You operate from home, documents are in a parent’s or landlord’s name, or you need registration plus a clear view of filing next.",
  },
] as const;

const SELL_CHANNELS = [
  {
    title: "Amazon, Flipkart & Meesho",
    text: "You sell through their platform. A GSTIN field often appears during seller onboarding or as you grow. You follow their current seller steps plus the GST rules that apply to you — the marketplace is not your GST consultant, and its form can change.",
  },
  {
    title: "Shopify / own website",
    text: "You run the store, collect payment and fulfil orders. A GSTIN may be needed on invoices and, as supplies grow, for checkout or payment setup. There is no marketplace collecting GST data for you.",
  },
  {
    title: "Instagram / social selling",
    text: "Selling in DMs is still an online business. GST depends on what and how you sell — not on Instagram or WhatsApp. Many first-time sellers check GST before they move to a marketplace or their own site.",
  },
] as const;

const HOME_SITUATIONS = [
  {
    title: "Business operated from home",
    text: "A home-based online business can often use the house as premises. Proof still depends on whose name is on the property and utility papers — not on the fact that you sell from home.",
  },
  {
    title: "Parents’ property or address",
    text: "Very common for first-time sellers. Supporting documents vary with ownership and who lives there. We review what you have before filing — we do not promise one standard pack for every parents’ house.",
  },
  {
    title: "Electricity / utility bill not in your name",
    text: "Also common. A bill in someone else’s name does not automatically block GST, but the supporting papers depend on the case. We do not treat one substitute document as universally accepted.",
  },
  {
    title: "Rented premises",
    text: "A rent agreement is often part of the discussion. What is accepted depends on the tenancy papers, the period covered, and whose name is on the bill.",
  },
  {
    title: "Landlord consent / NOC",
    text: "Some rented cases also need a landlord letter or NOC. Formats differ. We check what fits your tenancy instead of handing you a single “always accepted” consent letter.",
  },
] as const;

const AFTER_GSTIN_STEPS = [
  { step: "01", title: "GST Registration", text: "Application prepared and submitted with your documents." },
  { step: "02", title: "GSTIN & certificate", text: "After approval, GSTIN and the certificate PDF are shared with you." },
  {
    step: "03",
    title: "Marketplace / business use",
    text: "Add GSTIN where Amazon, Flipkart, Meesho, Shopify or your own store currently requires it.",
  },
  {
    step: "04",
    title: "GST return filing",
    text: "File returns as applicable. Nil / low activity support from ₹300/month.",
    href: "/gst-compliance",
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
  {
    question: "Do online sellers need GST registration?",
    answer:
      "It depends on your business model, the goods or services you supply, turnover, location and other GST conditions. Selling on a marketplace or website can make GST relevant, but it is not true that every online seller must register. WhatsApp us if you want a practical check for your case.",
  },
  {
    question: "Can I register GST for a home-based online business?",
    answer:
      "Often yes — many first-time sellers operate from home. Address and premises documents depend on whether the house is yours, in a parent’s name, or rented. We review your papers before filing. Acceptance still depends on the documents and the GST department.",
  },
  {
    question: "What happens after I receive a GSTIN?",
    answer:
      "You receive the GST certificate (typically as a PDF). Then you use the GSTIN where your marketplace or website requires it, and file GST returns as applicable. For nil or low activity, GSTwala offers Nil GST Return Filing from ₹300/month. Exact filing type depends on your GST profile.",
  },
  {
    question: "Why do marketplaces ask for GST when I start selling?",
    answer:
      "Amazon, Flipkart, Meesho and similar platforms often have a GSTIN field during seller onboarding. That question is about their current account setup and compliance process. It does not, by itself, mean GST is mandatory for every first-time online seller. Your GST position still depends on your supplies, turnover, location and other applicable conditions.",
  },
  {
    question: "Can a document or address mismatch cause GST problems?",
    answer:
      "Yes. Applications often stall when PAN, Aadhaar and premises proof do not tell one clear story — for example a home-based business where the electricity bill is in a parent’s or landlord’s name and supporting papers are missing. GSTwala checks those gaps before submission. We do not invent approval odds, and government approval is not guaranteed.",
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
            <Link href="/gst-notice-handling" className="font-medium text-blue-800 hover:underline">
              GST Notice Assistance
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
              GST applicability depends on the seller&apos;s business model, supplies, turnover,
              location and other conditions under GST rules. It is not a single rule for every online
              seller — and we do not claim that GST is mandatory for every online seller.
            </p>
            <p>
              Marketplace selling, a Shopify or own-website store, or Instagram / social selling can
              all raise GST questions. Some first-time sellers need GST before they can finish
              platform onboarding; others should check first. Ecommerce sellers are not automatically
              in the same position.
            </p>
            <p>
              If you are starting an online business for the first time, GST usually appears when a
              marketplace form or your own-store checkout asks for a GSTIN. That onboarding field is
              asking for your GST position — it is not a legal finding that every first-time online
              seller must register. We help you separate “the platform asked” from “GST applies to
              you.”
            </p>
            <p>
              If you already know you want assistance with the application, see{" "}
              <Link href="/gst-registration" className="font-semibold text-blue-800 hover:underline">
                GST Registration
              </Link>{" "}
              (₹999, ₹0 advance, pay after approval).
            </p>
          </div>
          <p className="mt-6 text-base font-semibold text-slate-900">
            Not sure whether GST applies to your case? WhatsApp us.
          </p>
          <WhatsAppButton
            message="Namaste, GSTwala website se aa raha hoon. Online business ke liye GST chahiye ya nahi — case check karna hai."
            className={`mt-3 ${ctaWa}`}
          >
            WhatsApp GSTwala
          </WhatsAppButton>
        </div>

        <div className="mx-auto mt-10 max-w-5xl px-4 sm:px-6 lg:px-8">
          <h3 className="text-center text-lg font-bold text-slate-900 sm:text-xl">
            Marketplace vs own website vs social selling
          </h3>
          <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-slate-600">
            GST for online selling is the same idea everywhere — check if it applies, then register
            if it does. What changes is who asks for your GSTIN and who issues invoices.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-3">
            {SELL_CHANNELS.map((item) => (
              <li
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm"
              >
                <h4 className="text-base font-bold text-blue-900">{item.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p>
              </li>
            ))}
          </ul>
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
            GST registration for ecommerce sellers can differ by platform and business model.
            Platform GST fields can change — use the notes below as a first-time briefing, then
            WhatsApp us with what your current onboarding screen actually asks.
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
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.know}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  <span className="font-semibold text-slate-800">Why GSTIN can matter: </span>
                  {p.gstin}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  <span className="font-semibold text-slate-800">Ask us when: </span>
                  {p.help}
                </p>
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
            subtitle="Professional sample mockups — fictional / blurred details only. GST documents for online sellers can vary by address type."
          />
          <div className="mx-auto mt-6 max-w-3xl text-sm leading-relaxed text-slate-600">
            <p>
              First-time online sellers are usually asked for PAN, Aadhaar, a photograph,
              address / business premises proof, and bank proof where applicable. Constitution
              documents (for anything other than a simple proprietorship) are added only when they
              apply.
            </p>
            <p className="mt-2">
              The exact list depends on how the business is set up and whose name is on the
              premises papers — own home, parents&apos; house, or rent. GST documents for online
              sellers are confirmed after a document check, not from a generic internet list.
            </p>
            <p className="mt-3">
              Address and name mismatches are a common reason applications get queries or come
              back for correction: PAN, Aadhaar and premises proof must tell one clear story. A
              home-based business with the electricity bill in a parent&apos;s or landlord&apos;s
              name is not automatically rejected — missing supporting papers is what creates
              avoidable problems. See{" "}
              <Link
                href="/gst-registration-electricity-bill-not-in-name"
                className="font-semibold text-blue-800 hover:underline"
              >
                GST registration when electricity bill is not in your name
              </Link>
              .
            </p>
            <p className="mt-2">
              Before we submit, GSTwala checks that identity papers match the applicant, the
              premises documents match the address you are using, and obvious gaps (unclear
              ownership, incomplete rent or NOC papers) are flagged. We cannot promise approval
              or quote rejection rates. We can reduce issues that were visible before filing.
            </p>
          </div>
          <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50/60 p-5 sm:p-6">
            <h3 className="text-lg font-bold text-slate-900">
              GST for home-based online business
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Many first-time sellers operate from home. Documents depend on your actual
              circumstances — we do not treat one paper as universally accepted.
            </p>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {HOME_SITUATIONS.map((item) => (
                <li
                  key={item.title}
                  className="rounded-xl border border-blue-100 bg-white px-4 py-3"
                >
                  <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">{item.text}</p>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm font-semibold text-slate-900">
              Not sure which documents apply to your case? WhatsApp GSTwala, or read{" "}
              <Link
                href="/gst-registration-electricity-bill-not-in-name"
                className="text-blue-800 hover:underline"
              >
                GST address proof when the electricity bill is not in your name
              </Link>
              .
            </p>
            <WhatsAppButton
              message="Namaste, GSTwala website se aa raha hoon. Address / electricity bill / landlord documents ke baare mein doubt hai — GST registration for online business help chahiye."
              className={`mt-3 ${ctaWa}`}
            >
              WhatsApp GSTwala
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
          <ol className="mt-6 grid gap-3 sm:grid-cols-2">
            {AFTER_GSTIN_STEPS.map((item) => (
              <li
                key={item.step}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
              >
                <span className="text-xs font-bold text-blue-800">{item.step}</span>
                <h3 className="mt-1 text-sm font-bold text-slate-900">
                  {"href" in item && item.href ? (
                    <Link href={item.href} className="text-blue-800 hover:underline">
                      {item.title}
                    </Link>
                  ) : (
                    item.title
                  )}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">{item.text}</p>
              </li>
            ))}
          </ol>
          <div className="mt-6 space-y-3 text-base leading-relaxed text-slate-600">
            <p>
              In short: GST registration → GSTIN / certificate → business or marketplace
              compliance →{" "}
              <Link href="/gst-compliance" className="font-semibold text-blue-800 hover:underline">
                GST return filing
              </Link>{" "}
              when it applies to your profile.
            </p>
            <p>
              After approval you receive the GST Certificate PDF on WhatsApp. Then you add the
              GSTIN where Amazon, Flipkart, Meesho, Shopify or your own store currently requires
              it.
            </p>
            <p>
              Early-stage online sellers often need simple support for nil / low-activity periods.
              GSTwala offers{" "}
              <strong className="font-semibold text-slate-800">
                Nil GST Return Filing from ₹300/month
              </strong>
              . Exact filing type depends on your case — see{" "}
              <Link href="/gst-compliance" className="font-semibold text-blue-800 hover:underline">
                GST Return Filing
              </Link>
              . If you receive a department query or notice, we also offer{" "}
              <Link href="/gst-notice-handling" className="font-semibold text-blue-800 hover:underline">
                GST Notice Assistance
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
          <p className="mt-6 text-center text-sm text-slate-500">
            Electricity bill not in your name?{" "}
            <Link
              href="/gst-registration-electricity-bill-not-in-name"
              className="font-semibold text-blue-800 hover:underline"
            >
              GST address proof guide
            </Link>
          </p>
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
