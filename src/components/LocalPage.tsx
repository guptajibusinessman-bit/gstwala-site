import Image from "next/image";
import type { AreaContent } from "@/lib/content/areas";
import { AREA_IMAGES } from "@/lib/images";
import { SITE } from "@/lib/site";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { Breadcrumbs } from "./Breadcrumbs";
import { CallButton } from "./CallButton";
import { FAQ } from "./FAQ";
import { JsonLd } from "./JsonLd";
import { ProcessSteps } from "./ProcessSteps";
import { WhatsAppButton } from "./WhatsAppButton";

export function LocalPage({ area }: { area: AreaContent }) {
  const path = `/${area.slug}`;
  const url = `${SITE.baseUrl}${path}`;
  const image = AREA_IMAGES[area.slug];
  const waMessage = `Namaste, Website se aa raha hoon. ${area.name} area mein service chahiye.`;

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
            WhatsApp pe Consult Karein – {area.name}
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
          </section>
        ))}

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-gray-900">
            Popular Services in {area.name}
          </h2>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {area.services.map((s) => (
              <li
                key={s}
                className="rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-700"
              >
                {s}
              </li>
            ))}
          </ul>
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
