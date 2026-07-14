import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "Privacy policy for GSTwala (Raj GST Sewa Kendra) – how we collect, use, and protect your information when you contact us via WhatsApp, phone, or website.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy" },
        ])}
      />
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Privacy Policy", path: "/privacy" },
          ]}
        />
        <h1 className="text-3xl font-extrabold text-gray-900">Privacy Policy</h1>
        <p className="mt-2 text-sm text-gray-500">Last updated: July 2026</p>

        <div className="prose-sm mt-8 space-y-6 text-gray-600 leading-relaxed">
          <p>
            {SITE.name} ({SITE.legalName}) operates {SITE.baseUrl.replace("https://", "")}. This
            policy explains how we handle personal and business information shared through our
            website, WhatsApp, phone, or email.
          </p>

          <section>
            <h2 className="text-lg font-bold text-gray-900">Information we collect</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Contact details: name, phone number, email, WhatsApp number</li>
              <li>Business details: firm name, GSTIN, address, documents you send for filing</li>
              <li>Usage data: pages visited (via standard web analytics, if enabled)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900">How we use information</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>To respond to enquiries and provide consultancy / filing support</li>
              <li>To prepare applications, returns, and related documentation you request</li>
              <li>To share updates on application status and deadlines</li>
              <li>To improve our website and service quality</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900">Sharing</h2>
            <p className="mt-2">
              We may share necessary details with compliance partners and government portals only
              for the service you ordered (for example ROC, GST portal, GeM, or bank documentation).
              We do not sell your personal data.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900">WhatsApp &amp; phone</h2>
            <p className="mt-2">
              Messages and documents sent on WhatsApp or by phone are used solely for service
              delivery. Please avoid sending passwords or OTPs to anyone claiming to be GSTwala
              unless you initiated the chat with our official number {SITE.phoneDisplay}.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900">Your choices</h2>
            <p className="mt-2">
              To update or delete contact data we hold (except records we must keep for legal or
              tax reasons), email{" "}
              <a href={`mailto:${SITE.email}`} className="font-medium text-blue-800 hover:underline">
                {SITE.email}
              </a>{" "}
              or message us on WhatsApp.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900">Contact</h2>
            <p className="mt-2">
              {SITE.legalName}
              <br />
              {SITE.address.street}, {SITE.address.locality}, {SITE.address.region}{" "}
              {SITE.address.postalCode}
              <br />
              Phone: {SITE.phoneDisplay}
              <br />
              Email: {SITE.email}
            </p>
          </section>
        </div>

        <p className="mt-10">
          <Link href="/contact-us" className="font-semibold text-blue-800 hover:underline">
            Contact us →
          </Link>
        </p>
      </div>
    </>
  );
}
