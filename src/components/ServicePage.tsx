import Image from "next/image";
import Link from "next/link";
import type { ServiceContent } from "@/lib/content/services";
import { SERVICE_IMAGES } from "@/lib/images";
import { SITE } from "@/lib/site";
import {
  breadcrumbSchema,
  faqSchema,
  serviceSchema,
} from "@/lib/schema";
import { Breadcrumbs } from "./Breadcrumbs";
import { CallButton } from "./CallButton";
import { FAQ } from "./FAQ";
import { JsonLd } from "./JsonLd";
import { ProcessSteps } from "./ProcessSteps";
import { WhatsAppButton } from "./WhatsAppButton";

export function ServicePage({ service }: { service: ServiceContent }) {
  const path = `/${service.slug}`;
  const url = `${SITE.baseUrl}${path}`;
  const image = SERVICE_IMAGES[service.slug];
  const waMessage = `Namaste, Website se aa raha hoon. ${service.title} ke baare mein jaanna hai.`;

  return (
    <>
      <JsonLd
        data={[
          serviceSchema(service.h1, service.intro, url),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: service.title, path },
          ]),
          faqSchema(service.faqs),
        ]}
      />

      <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: service.title, path },
          ]}
        />

        <div className="relative mb-8 h-48 overflow-hidden rounded-2xl sm:h-64">
          <Image
            src={image}
            alt={`${service.h1} – GSTwala Delhi NCR`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 896px"
            priority
          />
        </div>

        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          {service.h1}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-gray-600">{service.intro}</p>

        {service.slug === "gst-compliance" && (
          <p className="mt-4 text-base leading-relaxed text-gray-600">
            A common path for first-time sellers is{" "}
            <Link href="/gst-registration" className="font-medium text-blue-800 hover:underline">
              GST Registration ₹999
            </Link>
            {" "}
            (₹0 advance, pay after GST approval). After approval, monthly Nil GST Return Filing from
            ₹300 may apply depending on your GST profile. Online sellers can also read{" "}
            <Link
              href="/gst-registration-online-business"
              className="font-medium text-blue-800 hover:underline"
            >
              GST Registration for Online Business
            </Link>
            .
          </p>
        )}

        {service.pricing && (
          <p className="mt-4 inline-block rounded-full bg-emerald-50 px-4 py-1.5 text-sm font-semibold text-emerald-700">
            {service.pricing}
          </p>
        )}

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <WhatsAppButton
            message={waMessage}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-white hover:bg-emerald-600"
          >
            Free Consultation on WhatsApp
          </WhatsAppButton>
          <CallButton className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-blue-200 px-6 py-3 font-semibold text-blue-800 hover:bg-blue-50">
            Call {SITE.phoneDisplay}
          </CallButton>
        </div>

        <ProcessSteps
          compact
          className="mt-10"
          title="Is service ka process"
          subtitle="4 steps – free consultation se delivery tak, WhatsApp pe."
        />

        {service.sections.map((section) => (
          <section key={section.heading} className="mt-10">
            <h2 className="text-2xl font-bold text-gray-900">{section.heading}</h2>
            <p className="mt-3 leading-relaxed text-gray-600">{section.content}</p>
            {section.subsections?.map((sub) => (
              <div key={sub.heading} className="mt-6">
                <h3 className="text-lg font-semibold text-gray-800">{sub.heading}</h3>
                <p className="mt-2 leading-relaxed text-gray-600">{sub.content}</p>
              </div>
            ))}
          </section>
        ))}

        <section className="mt-12 rounded-2xl bg-gradient-to-br from-blue-800 to-blue-950 p-8 text-center text-white">
          <h2 className="text-xl font-bold sm:text-2xl">Ready to start?</h2>
          <p className="mx-auto mt-2 max-w-lg text-sm text-blue-100 sm:text-base">
            Free consultation · Transparent quote pehle · Documents WhatsApp pe · Digital delivery
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <WhatsAppButton
              message={waMessage}
              className="inline-flex w-full items-center justify-center rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-white hover:bg-emerald-400 sm:w-auto"
            >
              WhatsApp pe message karein
            </WhatsAppButton>
            <CallButton className="inline-flex w-full items-center justify-center rounded-xl border border-white/40 bg-white/10 px-6 py-3 font-semibold text-white hover:bg-white/20 sm:w-auto">
              Call now
            </CallButton>
          </div>
        </section>

        <section className="mt-10 rounded-xl border border-blue-100 bg-blue-50 p-6">
          <h2 className="text-xl font-bold text-gray-900">Related Services</h2>
          <ul className="mt-4 space-y-2">
            {service.related.map((rel) => (
              <li key={rel.href ?? rel.slug}>
                <Link
                  href={rel.href ?? `/${rel.slug}`}
                  className="font-medium text-blue-800 hover:underline"
                >
                  {rel.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <FAQ faqs={service.faqs} />

        <p className="mt-8 text-center text-xs text-gray-400">
          GSTwala provides business consultancy and coordination support. Government fees and
          partner professional charges are shared in your quote.{" "}
          <Link href="/disclaimer" className="underline hover:text-gray-600">
            Disclaimer
          </Link>
        </p>
      </article>
    </>
  );
}
