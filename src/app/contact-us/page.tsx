import type { Metadata } from "next";
import { MapEmbed } from "@/components/MapEmbed";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CallButton } from "@/components/CallButton";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQ } from "@/components/FAQ";
import { ProcessSteps } from "@/components/ProcessSteps";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Contact GSTwala Delhi",
  description:
    "Contact GSTwala for GST, company registration & compliance in Delhi. WhatsApp-only orders – no office visit. Call +91 92122 70108 or message us today.",
  path: "/contact-us",
});

const FAQS = [
  {
    question: "Do I need to visit GSTwala office?",
    answer:
      "No. All orders, documents, and consultations are handled 100% via WhatsApp. Office visit is not required.",
  },
  {
    question: "What are GSTwala working hours?",
    answer: `${SITE.hoursDisplay}. WhatsApp messages outside hours are answered next business day.`,
  },
  {
    question: "How do I place an order?",
    answer:
      "Message us on WhatsApp with your requirement. Share documents as photos. We quote, execute, and deliver digitally.",
  },
  {
    question: "Where is GSTwala located?",
    answer: `${SITE.legalName}, ${SITE.address.street}, ${SITE.address.locality}, ${SITE.address.region} ${SITE.address.postalCode}. Service is Delhi NCR-wide via WhatsApp.`,
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact-us" },
          ]),
          faqSchema(FAQS),
        ]}
      />

      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact-us" },
          ]}
        />

        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Contact GSTwala – WhatsApp-Only Service
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Office visit ki zaroorat nahi. Saare orders WhatsApp pe – documents bhejein, kaam shuru.
          Free consultation · transparent quote pehle.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <WhatsAppButton className="rounded-2xl bg-emerald-500 p-6 text-white hover:bg-emerald-600">
            <span className="block text-lg font-bold">WhatsApp Karein</span>
            <span className="text-sm text-emerald-50">{SITE.phoneDisplay}</span>
            <span className="mt-2 block text-sm text-emerald-100">
              Fastest response · Free consultation
            </span>
          </WhatsAppButton>
          <CallButton className="rounded-2xl border-2 border-blue-200 bg-blue-50 p-6 text-left hover:border-blue-400">
            <span className="block text-lg font-bold text-blue-900">Call Now</span>
            <span className="text-sm font-semibold text-blue-800">{SITE.phoneDisplay}</span>
            <span className="mt-2 block text-sm text-blue-700">{SITE.hoursDisplay}</span>
          </CallButton>
        </div>

        <div className="mt-6 rounded-2xl border border-gray-200 bg-gray-50 p-6">
          <p className="font-semibold text-gray-900">{SITE.legalName}</p>
          <p className="mt-2 text-sm text-gray-600">
            {SITE.address.street}, {SITE.address.locality}
            <br />
            {SITE.address.region} – {SITE.address.postalCode}
          </p>
          <p className="mt-2 text-sm">
            <a href={`mailto:${SITE.email}`} className="text-blue-800 hover:underline">
              {SITE.email}
            </a>
          </p>
        </div>

        <ProcessSteps
          compact
          className="mt-10"
          title="Order kaise place karein?"
          subtitle="4 steps – consult se delivery tak."
        />

        <div className="mt-10 overflow-hidden rounded-2xl border border-gray-200">
          <MapEmbed title="GSTwala Google Map – Patel Nagar Delhi" height={320} />
        </div>
        <p className="mt-3 text-center text-sm text-gray-500">
          <a
            href={SITE.gmbUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-blue-800 hover:underline"
          >
            {SITE.gmbName} – Google Business Profile
          </a>
          {" · "}
          <a
            href={SITE.gmbSearchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-800 hover:underline"
          >
            Open in Google Maps
          </a>
        </p>

        <FAQ faqs={FAQS} />
      </div>
    </>
  );
}
