import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CallButton } from "@/components/CallButton";
import {
  DocumentGuidanceVisual,
  PlatformStrip,
  ProcessFlowVisual,
  ServiceIcon,
} from "@/components/HomeVisuals";
import {
  FINAL_CTA_HIGHLIGHTS,
  GST_SERVICES,
  GST_WA_MSG,
  HOME_FAQS,
  GST_REG_INCLUDES,
  HOME_PROCESS_STEPS,
  NIL_FILING_INCLUDES,
  WHY_BENEFITS,
} from "@/lib/conversion";
import { faqSchema, serviceSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "GST Registration for Online Business | ₹999 | ₹0 Advance",
  description:
    "GST registration for Amazon, Flipkart, Meesho, Shopify & Instagram sellers. ₹999 after approval, ₹0 advance. Certificate PDF on WhatsApp. Nil filing from ₹300/month. GSTwala.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={[
          faqSchema(HOME_FAQS),
          serviceSchema(
            "GST Registration for Online Business",
            "GST registration for online sellers at ₹999 with ₹0 advance. Pay only after GST approval. Certificate delivered on WhatsApp.",
            SITE.baseUrl
          ),
        ]}
      />

      {/* 1. Hero */}
      <section className="surface-soft border-b border-slate-100" aria-labelledby="hero-heading">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-18">
          <div className="text-center lg:text-left">
            <p className="mb-4 inline-flex items-center rounded-full border border-blue-100 bg-white px-3.5 py-1.5 text-sm font-semibold text-blue-800 shadow-sm">
              For online sellers &amp; home-based businesses
            </p>
            <h1
              id="hero-heading"
              className="text-[1.85rem] font-extrabold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl lg:text-[2.55rem]"
            >
              GST Registration for Online Business —{" "}
              <span className="text-blue-800">₹999</span>
            </h1>
            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-slate-600 sm:text-lg lg:mx-0">
              Starting an online business on Amazon, Flipkart, Meesho, Shopify or your own website?
              Get GST registration with practical guidance for online sellers and home-based
              businesses.
            </p>

            <div className="mx-auto mt-7 grid max-w-md grid-cols-1 gap-3 sm:max-w-none sm:grid-cols-2 lg:mx-0">
              <div className="rounded-2xl border border-emerald-100 bg-emerald-50 px-4 py-3.5 text-left">
                <p className="text-[0.65rem] font-bold uppercase tracking-wider text-emerald-700">
                  Advance
                </p>
                <p className="mt-1 text-lg font-extrabold text-emerald-800 sm:text-xl">
                  ₹0 Advance Payment
                </p>
              </div>
              <div className="rounded-2xl border border-blue-100 bg-white px-4 py-3.5 text-left shadow-sm">
                <p className="text-[0.65rem] font-bold uppercase tracking-wider text-blue-700">
                  After approval
                </p>
                <p className="mt-1 text-lg font-extrabold text-blue-900 sm:text-xl">
                  Pay ₹999 only after GST approval
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-col items-stretch gap-2.5 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
              <WhatsAppButton
                message={GST_WA_MSG}
                className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-600"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Get GST Registration on WhatsApp
              </WhatsAppButton>
              <CallButton className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-blue-900 hover:bg-slate-50">
                Call {SITE.phoneDisplay}
              </CallButton>
            </div>
            <p className="mt-4 text-sm font-medium text-slate-500">
              Same-Day Process · No Office Visit · Pay After GST Approval
            </p>
          </div>

          <div className="mx-auto w-full max-w-md lg:max-w-none">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-lg shadow-slate-900/8">
              <Image
                src="/images/hero-family-v2.jpg"
                alt="Middle-class Indian family selling products online from home on a laptop"
                width={1152}
                height={864}
                className="aspect-[4/3] w-full object-cover object-center lg:aspect-auto lg:h-[24rem]"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Platforms */}
      <section className="border-b border-slate-100 bg-white py-12 sm:py-14" aria-labelledby="platforms-heading">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2
            id="platforms-heading"
            className="text-center text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl"
          >
            GST for Your Online Business
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-sm text-slate-600 sm:text-base">
            Starting to sell online? GSTwala helps first-time sellers understand and complete their
            GST registration.
          </p>
          <PlatformStrip />
          <div className="mt-8 text-center">
            <WhatsAppButton
              message={GST_WA_MSG}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-500 px-6 py-3.5 text-sm font-semibold text-white hover:bg-emerald-600"
            >
              Get GST Help on WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      </section>

      {/* 3. Why GSTwala */}
      <section className="border-b border-slate-100 bg-slate-50 py-12 sm:py-14" aria-labelledby="why-heading">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2
            id="why-heading"
            className="text-center text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl"
          >
            Why Online Sellers Choose GSTwala
          </h2>
          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_BENEFITS.map((benefit, i) => (
              <li
                key={benefit}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <span className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-xs font-bold text-blue-800">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm font-bold leading-snug text-slate-900">{benefit}</p>
              </li>
            ))}
          </ul>
          <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 shadow-md">
            <Image
              src="/images/why-online-seller-banner.jpg"
              alt="Online seller managing home business and GST registration on laptop"
              width={1200}
              height={480}
              className="h-44 w-full object-cover object-center sm:h-56 md:h-64"
              sizes="(max-width: 1024px) 100vw, 960px"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* 4. FAQ */}
      <section className="bg-white py-12 sm:py-14" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <h2
            id="faq-heading"
            className="text-center text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl"
          >
            Common Questions About GST Registration
          </h2>
          <div className="mt-7 space-y-2.5">
            {HOME_FAQS.map((item) => (
              <details
                key={item.question}
                className="group rounded-xl border border-slate-200 bg-white open:border-blue-200"
              >
                <summary className="cursor-pointer list-none px-4 py-3.5 text-left text-sm font-semibold text-slate-900 marker:content-none sm:text-[0.95rem]">
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
          <div className="mt-7 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-6 text-center">
            <p className="font-semibold text-slate-900">Not sure about your documents?</p>
            <WhatsAppButton
              message="Namaste, GSTwala website se aa raha hoon. GST registration documents ke baare mein doubt hai — help chahiye."
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-500 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-600"
            >
              Ask GSTwala on WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      </section>

      {/* 5. Process */}
      <section className="border-y border-slate-100 bg-slate-50 py-12 sm:py-14" aria-labelledby="process-heading">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2
            id="process-heading"
            className="text-center text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl"
          >
            GST Registration — Simple 3-Step Process
          </h2>
          <ProcessFlowVisual />
          <ol className="mt-5 grid gap-3 sm:grid-cols-3">
            {HOME_PROCESS_STEPS.map((step) => (
              <li
                key={step.step}
                className="rounded-xl border border-slate-200 bg-white p-4 text-center sm:p-5"
              >
                <h3 className="text-sm font-bold text-slate-900 sm:text-base">
                  <span className="text-blue-800">{step.step}</span> {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.description}</p>
              </li>
            ))}
          </ol>
          <div className="mt-7 text-center">
            <WhatsAppButton
              message={GST_WA_MSG}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-500 px-6 py-3.5 text-sm font-semibold text-white hover:bg-emerald-600"
            >
              Start on WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      </section>

      {/* 6. Documents — compact supporting strip */}
      <section className="border-t border-slate-100 bg-white py-8 sm:py-10" aria-labelledby="documents-heading">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <DocumentGuidanceVisual />
        </div>
      </section>

      {/* 7. Pricing — locked amounts */}
      <section className="border-y border-slate-100 bg-slate-50 py-12 sm:py-14" aria-labelledby="pricing-heading">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2
            id="pricing-heading"
            className="text-center text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl"
          >
            Simple &amp; Transparent Pricing
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-5">
            <div className="relative flex flex-col rounded-2xl border-2 border-blue-900 bg-white p-6 shadow-lg shadow-blue-900/10 sm:p-8 md:col-span-3">
              <span className="absolute -top-3 left-6 rounded-full bg-blue-900 px-3 py-0.5 text-[0.65rem] font-bold uppercase tracking-wide text-white">
                Most popular
              </span>
              <h3 className="text-lg font-bold text-slate-900">GST Registration</h3>
              <p className="mt-3 text-5xl font-extrabold tracking-tight text-blue-900 sm:text-6xl">
                ₹999
              </p>
              <ul className="mt-5 flex-1 space-y-2.5 text-sm text-slate-600">
                {GST_REG_INCLUDES.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="font-bold text-emerald-500" aria-hidden>
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <WhatsAppButton
                message={GST_WA_MSG}
                className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-emerald-500 py-3.5 text-sm font-semibold text-white shadow-md shadow-emerald-500/20 hover:bg-emerald-600"
              >
                Get GST Registration
              </WhatsAppButton>
            </div>
            <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7 md:col-span-2">
              <h3 className="text-lg font-bold text-slate-900">Nil GST Return Filing</h3>
              <p className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900">
                ₹300
                <span className="text-base font-semibold text-slate-500">/month</span>
              </p>
              <ul className="mt-5 flex-1 space-y-2.5 text-sm text-slate-600">
                {NIL_FILING_INCLUDES.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="font-bold text-emerald-500" aria-hidden>
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <WhatsAppButton
                message="Namaste, GSTwala website se aa raha hoon. Nil GST return filing ₹300/month ke baare mein jaanna hai."
                className="mt-6 inline-flex w-full items-center justify-center rounded-2xl border-2 border-blue-900 py-3.5 text-sm font-semibold text-blue-900 hover:bg-blue-50"
              >
                Ask About Monthly Filing
              </WhatsAppButton>
            </div>
          </div>
          <p className="mx-auto mt-5 max-w-2xl text-center text-xs text-slate-500">
            Filing requirements and applicable services may vary depending on your business and GST
            profile.
          </p>
        </div>
      </section>

      {/* 8. Services */}
      <section className="bg-white py-12 sm:py-14" aria-labelledby="services-heading">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2
            id="services-heading"
            className="text-center text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl"
          >
            More GST Support When You Need It
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-sm text-slate-500">
            Extra GST help beyond new registration — only if you need it.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {GST_SERVICES.filter((s) => s.primary).map((s) => (
              <li key={s.title}>
                <Link
                  href={s.href!}
                  className="flex h-full gap-4 rounded-2xl border-2 border-blue-900/80 bg-blue-50/30 p-5 shadow-sm transition hover:bg-blue-50/60 sm:p-6"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-900 text-white">
                    <ServiceIcon title={s.title} className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-base font-bold text-blue-900 sm:text-lg">
                      {s.title}
                    </span>
                    <span className="mt-1 block text-sm text-slate-600">{s.description}</span>
                    <span className="mt-2 block text-sm font-semibold text-blue-800">
                      View details →
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <ul className="mt-3 grid gap-3 sm:grid-cols-2">
            {GST_SERVICES.filter((s) => !s.primary).map((s) => {
              const body = (
                <>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                    <ServiceIcon title={s.title} className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-slate-900">{s.title}</span>
                    <span className="mt-0.5 block text-sm text-slate-500">{s.description}</span>
                  </span>
                </>
              );
              if (s.href) {
                return (
                  <li key={s.title}>
                    <Link
                      href={s.href}
                      className="flex h-full gap-3 rounded-2xl border border-slate-200 bg-white p-4 transition hover:border-slate-300"
                    >
                      {body}
                    </Link>
                  </li>
                );
              }
              return (
                <li key={s.title}>
                  <WhatsAppButton
                    message={`Namaste, GSTwala website se aa raha hoon. ${s.title} ke baare mein jaanna hai.`}
                    className="flex h-full gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-left transition hover:border-slate-300"
                  >
                    {body}
                  </WhatsAppButton>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* 9. Reviews */}
      <section className="border-y border-slate-800 bg-slate-950 py-12 text-white sm:py-14" aria-labelledby="reviews-heading">
        <div className="mx-auto max-w-xl px-4 text-center sm:px-6">
          <h2 id="reviews-heading" className="text-2xl font-extrabold sm:text-3xl">
            Customer Reviews
          </h2>
          <p className="mt-3 text-slate-300">See our verified customer reviews on Google</p>
          <Link
            href={SITE.gmbUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 hover:bg-slate-100"
          >
            View Google Reviews
          </Link>
        </div>
      </section>

      {/* 10. Final CTA */}
      <section
        className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 py-12 text-white sm:py-14"
        aria-labelledby="final-cta-heading"
      >
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <h2 id="final-cta-heading" className="text-2xl font-extrabold sm:text-3xl">
            Ready to Start Your Online Business?
          </h2>
          <p className="mt-3 text-sm text-blue-100 sm:text-base">
            Get your GST registration without unnecessary paperwork or an office visit.
          </p>
          <ul className="mx-auto mt-5 flex max-w-lg flex-wrap justify-center gap-2">
            {FINAL_CTA_HIGHLIGHTS.map((item) => (
              <li
                key={item}
                className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold sm:text-sm"
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <WhatsAppButton
              message={GST_WA_MSG}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-500 px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-emerald-400"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Get GST Registration on WhatsApp
            </WhatsAppButton>
            <CallButton className="inline-flex items-center justify-center rounded-2xl border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/20">
              Call GSTwala
            </CallButton>
          </div>
        </div>
      </section>
    </>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
