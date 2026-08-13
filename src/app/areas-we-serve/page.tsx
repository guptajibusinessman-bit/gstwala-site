import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQ } from "@/components/FAQ";
import { JsonLd } from "@/components/JsonLd";
import { AREAS } from "@/lib/content/areas";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { AREAS_SERVED, DEDICATED_AREA_SLUGS } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Areas We Serve Delhi",
  description:
    "GSTwala serves Central & West Delhi – Patel Nagar, Rajinder Nagar, Anand Parbat, Karol Bagh, Inderlok, Shastri Nagar, Kirti Nagar, Moti Nagar & more. WhatsApp pe GST & compliance.",
  path: "/areas-we-serve",
});

const FAQS = [
  {
    question: "Which areas does GSTwala serve?",
    answer:
      "We serve Central Delhi and West Delhi including Patel Nagar, Rajinder Nagar, Anand Parbat, Karol Bagh, Inderlok, Shastri Nagar, Kirti Nagar, Moti Nagar, DLF Moti Nagar, and surrounding industrial zones.",
  },
  {
    question: "Is service available outside Delhi NCR?",
    answer:
      "Yes. All services are WhatsApp-based, so pan-India clients can order documentation and compliance support remotely.",
  },
  {
    question: "Do you visit my area for document collection?",
    answer:
      "No physical visits. Share document photos on WhatsApp from anywhere in your service area.",
  },
  {
    question: "Which areas have dedicated local pages?",
    answer:
      "Combined GST-focused pages: Patel Nagar & Rajinder Nagar, Anand Parbat & Karol Bagh, Inderlok & Shastri Nagar – plus Karol Bagh, Kirti Nagar, Moti Nagar, and DLF Moti Nagar.",
  },
];

const dedicatedSet = new Set<string>(DEDICATED_AREA_SLUGS);

const GST_FOCUSED_AREA_SLUGS = [
  "patel-nagar-rajinder-nagar",
  "anand-parbat-karol-bagh",
  "inderlok-shastri-nagar",
] as const;

const OTHER_AREA_SLUGS = DEDICATED_AREA_SLUGS.filter(
  (slug) => !(GST_FOCUSED_AREA_SLUGS as readonly string[]).includes(slug)
);

export default function AreasPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Areas We Serve", path: "/areas-we-serve" },
          ]),
          faqSchema(FAQS),
        ]}
      />

      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Areas We Serve", path: "/areas-we-serve" },
          ]}
        />

        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Areas We Serve in Delhi NCR
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          GSTwala provides premium business compliance across Central and West Delhi. Dedicated local expertise for key commercial and industrial hubs.
        </p>
        <p className="mt-3 text-base text-gray-600">
          GST-focused area guides:{" "}
          <Link
            href="/patel-nagar-rajinder-nagar"
            className="font-medium text-blue-800 hover:underline"
          >
            Patel Nagar &amp; Rajinder Nagar
          </Link>
          {", "}
          <Link
            href="/anand-parbat-karol-bagh"
            className="font-medium text-blue-800 hover:underline"
          >
            Anand Parbat &amp; Karol Bagh
          </Link>
          {" and "}
          <Link
            href="/inderlok-shastri-nagar"
            className="font-medium text-blue-800 hover:underline"
          >
            Inderlok &amp; Shastri Nagar
          </Link>
          .
        </p>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-gray-900">GST-Focused Local Pages</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {GST_FOCUSED_AREA_SLUGS.map((slug) => {
              const area = AREAS[slug];
              return (
                <Link
                  key={slug}
                  href={`/${slug}`}
                  className="rounded-xl border border-blue-100 bg-blue-50 p-5 hover:shadow-md transition-shadow"
                >
                  <h3 className="font-bold text-blue-900">{area.name}</h3>
                  <p className="mt-1 text-sm text-gray-600">{area.focus}</p>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-gray-900">More Local Pages</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {OTHER_AREA_SLUGS.map((slug) => {
              const area = AREAS[slug];
              return (
                <Link
                  key={slug}
                  href={`/${slug}`}
                  className="rounded-xl border border-blue-100 bg-blue-50 p-5 hover:shadow-md transition-shadow"
                >
                  <h3 className="font-bold text-blue-900">{area.name}</h3>
                  <p className="mt-1 text-sm text-gray-600">{area.focus}</p>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-gray-900">All Service Areas</h2>
          <ul className="mt-4 grid gap-2 sm:grid-cols-3">
            {AREAS_SERVED.map((area) => {
              const slug = area.toLowerCase().replace(/\s+/g, "-");
              const hasPage = dedicatedSet.has(slug);
              return (
                <li key={area}>
                  {hasPage ? (
                    <Link href={`/${slug}`} className="text-blue-800 hover:underline">
                      {area}
                    </Link>
                  ) : (
                    <span className="text-gray-700">{area}</span>
                  )}
                </li>
              );
            })}
          </ul>
        </section>

        <FAQ faqs={FAQS} />
      </div>
    </>
  );
}