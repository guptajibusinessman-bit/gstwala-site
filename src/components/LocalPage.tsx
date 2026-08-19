import Image from "next/image";
import Link from "next/link";
import type { AreaContent } from "@/lib/content/areas";
import { GST_WA_MSG } from "@/lib/conversion";
import { AREA_IMAGES } from "@/lib/images";
import { SITE } from "@/lib/site";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { Breadcrumbs } from "./Breadcrumbs";
import { CallButton } from "./CallButton";
import { FAQ } from "./FAQ";
import { JsonLd } from "./JsonLd";
import { ProcessSteps } from "./ProcessSteps";
import { WhatsAppButton } from "./WhatsAppButton";

/** Map popular service labels → existing service routes (internal SEO links) */
const SERVICE_HREFS: Record<string, string> = {
  "GST Registration (₹999)": "/gst-registration",
  "GST Registration ₹999": "/gst-registration",
  "GST Compliance": "/gst-compliance",
  "Company Registration": "/company-registration",
  "Pvt Ltd Company Registration": "/company-registration",
  Trademark: "/trademark",
  "Trademark Registration": "/trademark",
  "Trademark for Retail Brands": "/trademark",
  FSSAI: "/fssai-registration",
  "FSSAI for Cold Storage": "/fssai-registration",
  "FSSAI for Food Courts": "/fssai-registration",
  Udyam: "/udyam-registration",
  "Udyam MSME Certificate": "/udyam-registration",
  "Udyam Registration": "/udyam-registration",
  "GeM Registration": "/gem-registration",
  "GeM Seller Registration": "/gem-registration",
  "GeM & E-Tendering": "/gem-registration",
  "Loan Assistance": "/loan-assistance",
  "Working Capital Loan DPR": "/loan-assistance",
  "DPR for Machinery Loans": "/loan-assistance",
  "MSME Loan DPR": "/loan-assistance",
};

export function LocalPage({ area }: { area: AreaContent }) {
  const path = `/${area.slug}`;
  const url = `${SITE.baseUrl}${path}`;
  const image = AREA_IMAGES[area.slug];
  const waMessage = area.gstRegistrationCta
    ? GST_WA_MSG
    : `Namaste, Website se aa raha hoon. ${area.name} area mein service chahiye.`;

  return (
    <>
      <JsonLd
        data={[
          serviceSchema(`Business Compliance in ${area.name}`, area.intro, url),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Areas We Serve", path: "/areas-we-serve" },
            { name: area.name, path },
          ]),
          faqSchema(area.faqs),
        ]}
      />

      <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Areas We Serve", path: "/areas-we-serve" },
            { name: area.name, path },
          ]}
        />

        <div className="relative mb-8 h-48 overflow-hidden rounded-2xl sm:h-64">
          <Image
            src={image}
            alt={`${area.h1} – GSTwala Delhi NCR`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 896px"
            priority
          />
        </div>

        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          {area.h1}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-gray-600">{area.intro}</p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <WhatsAppButton
            message={waMessage}
            className="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-white hover:bg-emerald-600"
          >
            {area.gstRegistrationCta
              ? "Get GST Registration on WhatsApp"
              : `WhatsApp pe Consult Karein – ${area.name}`}
          </WhatsAppButton>
          <CallButton className="inline-flex items-center justify-center rounded-xl border-2 border-blue-200 px-6 py-3 font-semibold text-blue-800 hover:bg-blue-50">
            Call {SITE.phoneDisplay}
          </CallButton>
        </div>

        <ProcessSteps
          compact
          className="mt-10"
          title={`${area.name} se kaise shuru karein?`}
          subtitle="Office visit nahi – WhatsApp pe documents, digital delivery."
        />

        {area.sections.map((section) => (
          <section key={section.heading} className="mt-10">
            <h2 className="text-2xl font-bold text-gray-900">{section.heading}</h2>
            <p className="mt-3 leading-relaxed text-gray-600">{section.content}</p>
            {section.heading.startsWith("GST Focus") && area.sellerHubLink && (
              <p className="mt-3 leading-relaxed text-gray-600">
                Selling mainly on Amazon, Flipkart, Meesho or your own website? See{" "}
                <Link
                  href="/gst-registration-online-business"
                  className="font-medium text-blue-800 hover:underline"
                >
                  GST Registration for Online Business
                </Link>
                .
              </p>
            )}
            {section.heading.startsWith("Marketplace") && area.sellerHubLink && (
              <p className="mt-3 leading-relaxed text-gray-600">
                For first-time online-seller documents, home-business questions and platform context,
                see{" "}
                <Link
                  href="/gst-registration-online-business"
                  className="font-medium text-blue-800 hover:underline"
                >
                  GST Registration for Online Business
                </Link>
                .
              </p>
            )}
            {section.heading.startsWith("Home-based") && area.sellerHubLink && (
              <p className="mt-3 leading-relaxed text-gray-600">
                If you are starting an online or home business and need GST context for that setup, see{" "}
                <Link
                  href="/gst-registration-online-business"
                  className="font-medium text-blue-800 hover:underline"
                >
                  GST Registration for Online Business
                </Link>
                .
              </p>
            )}
            {section.heading.startsWith("Interstate") && area.sellerHubLink && (
              <p className="mt-3 leading-relaxed text-gray-600">
                For GST questions when selling online from a workshop, unit or godown, see{" "}
                <Link
                  href="/gst-registration-online-business"
                  className="font-medium text-blue-800 hover:underline"
                >
                  GST Registration for Online Business
                </Link>
                .
              </p>
            )}
            {section.heading === "Nearby Areas" && area.nearbyLinks && area.nearbyLinks.length > 0 && (
              <p className="mt-3 text-sm text-gray-600">
                Nearby:{" "}
                {area.nearbyLinks.map((n, i) => (
                  <span key={n.href}>
                    {i > 0 && " · "}
                    <Link href={n.href} className="font-medium text-blue-800 hover:underline">
                      {n.label}
                    </Link>
                  </span>
                ))}
              </p>
            )}
          </section>
        ))}

        {area.afterGstin && (
          <section className="mt-10">
            <h2 className="text-2xl font-bold text-gray-900">After GST Registration</h2>
            <p className="mt-3 leading-relaxed text-gray-600">
              After GST approval you receive your GSTIN. Monthly return filing may then apply. For
              no activity or eligible nil activity, GSTwala offers{" "}
              <Link href="/gst-compliance" className="font-medium text-blue-800 hover:underline">
                Nil GST Return Filing from ₹300/month
              </Link>
              . Exact filing type depends on your GST profile — we do not assume every new GSTIN
              qualifies for Nil filing.
            </p>
          </section>
        )}

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-gray-900">
            Popular Services in {area.name}
          </h2>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {area.services.map((s) => {
              const href = SERVICE_HREFS[s];
              return (
                <li
                  key={s}
                  className="rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-700"
                >
                  {href ? (
                    <Link href={href} className="font-medium text-blue-800 hover:underline">
                      {s}
                    </Link>
                  ) : (
                    s
                  )}
                </li>
              );
            })}
          </ul>
          <p className="mt-4 text-sm text-gray-600">
            Related:{" "}
            <Link href="/gst-registration" className="font-medium text-blue-800 hover:underline">
              GST Registration (₹999)
            </Link>
            {" · "}
            <Link
              href="/company-registration"
              className="font-medium text-blue-800 hover:underline"
            >
              Company Registration
            </Link>
            {" · "}
            <Link href="/" className="font-medium text-blue-800 hover:underline">
              Home
            </Link>
          </p>
          <p className="mt-3">
            <Link
              href="/gst-registration"
              className="text-sm font-semibold text-emerald-600 hover:underline"
            >
              Full GST Registration details &amp; plans →
            </Link>
          </p>
        </section>

        <section className="mt-12 rounded-2xl bg-gradient-to-br from-blue-800 to-blue-950 p-8 text-center text-white">
          <h2 className="text-xl font-bold">Serving {area.name} via WhatsApp</h2>
          <p className="mt-2 text-sm text-blue-100">
            Free consultation · Transparent quote · Digital delivery
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <WhatsAppButton
              message={waMessage}
              className="inline-flex w-full items-center justify-center rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-white hover:bg-emerald-400 sm:w-auto"
            >
              WhatsApp now
            </WhatsAppButton>
            <CallButton className="inline-flex w-full items-center justify-center rounded-xl border border-white/40 bg-white/10 px-6 py-3 font-semibold text-white hover:bg-white/20 sm:w-auto">
              Call now
            </CallButton>
          </div>
        </section>

        <FAQ faqs={area.faqs} />
      </article>
    </>
  );
}
