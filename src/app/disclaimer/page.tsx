import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Disclaimer",
  description:
    "Service disclaimer for GSTwala business consultancy in Delhi NCR – scope of services, government fees, and partner execution.",
  path: "/disclaimer",
});

export default function DisclaimerPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Disclaimer", path: "/disclaimer" },
        ])}
      />
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Disclaimer", path: "/disclaimer" },
          ]}
        />
        <h1 className="text-3xl font-extrabold text-gray-900">Disclaimer</h1>
        <p className="mt-2 text-sm text-gray-500">Last updated: July 2026</p>

        <div className="mt-8 space-y-6 text-gray-600 leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-gray-900">Nature of services</h2>
            <p className="mt-2">
              {SITE.name} ({SITE.legalName}) provides business consultancy, documentation support,
              and coordination for GST, company formation, licenses, tenders, and related MSME
              services in Delhi NCR. We are a consultancy desk – not a substitute for a chartered
              accountant, company secretary, or advocate where statute requires a specific
              professional.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900">Quotes &amp; fees</h2>
            <p className="mt-2">
              Prices shown on the website (for example GST registration at ₹999) are indicative
              service fees unless confirmed in writing on WhatsApp. Government portal fees, DSC
              charges, stamp duty, and partner professional fees may be extra and will be listed in
              your quote before work starts.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900">Approvals &amp; timelines</h2>
            <p className="mt-2">
              Registration and loan outcomes depend on government portals, banks, and completeness
              of documents. We do not guarantee approval timelines or loan sanction. Success-rate
              language on marketing pages refers to documentation quality for eligible cases, not a
              legal guarantee.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900">Partners</h2>
            <p className="mt-2">
              Filings may be executed with experienced compliance partners (including Sai
              Associates) under our coordination. Final legal responsibility for filings rests as
              per the engagement confirmed with you on WhatsApp.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900">Website content</h2>
            <p className="mt-2">
              GST rules, thresholds, and schemes change. Content on this site is for general
              information. Always confirm current requirements for your case during consultation.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900">Contact</h2>
            <p className="mt-2">
              Questions about this disclaimer:{" "}
              <a href={`mailto:${SITE.email}`} className="font-medium text-blue-800 hover:underline">
                {SITE.email}
              </a>{" "}
              or {SITE.phoneDisplay}.
            </p>
          </section>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <WhatsAppButton className="inline-flex rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-white hover:bg-emerald-600">
            Free consultation
          </WhatsAppButton>
          <Link
            href="/contact-us"
            className="inline-flex items-center font-semibold text-blue-800 hover:underline"
          >
            Contact page →
          </Link>
        </div>
      </div>
    </>
  );
}
