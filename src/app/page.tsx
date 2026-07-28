import Image from "next/image";
import Link from "next/link";
import { FAQ } from "@/components/FAQ";
import { JsonLd } from "@/components/JsonLd";
import { ProcessSteps } from "@/components/ProcessSteps";
import { TrustSection } from "@/components/TrustSection";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CallButton } from "@/components/CallButton";
import { HOME_SERVICES } from "@/lib/conversion";
import { HOME_SERVICE_IMAGES, IMAGES } from "@/lib/images";
import { faqSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

const HOME_FAQS = [
  {
    question: "What services does GSTwala offer in Delhi?",
    answer:
      "GST registration, company registration, trademark, GST compliance, Udyam, FSSAI, GeM, e-tendering, DPR/CMA reports, and MSME bank loan assistance – all via WhatsApp.",
  },
  {
    question: "Is office visit required for GSTwala services?",
    answer:
      "No. GSTwala is 100% WhatsApp-based. Send documents as photos, receive certificates digitally.",
  },
  {
    question: "What is the difference between GST registration and GST compliance?",
    answer:
      "GST registration (₹999, pay after approval) is for new GSTIN. GST compliance covers monthly returns, reconciliations, and notices for existing taxpayers – from ₹999/month.",
  },
  {
    question: "Which Delhi areas does GSTwala serve?",
    answer:
      "Central and West Delhi including Patel Nagar, Rajinder Nagar, Anand Parbat, Karol Bagh, Inderlok, Shastri Nagar, Kirti Nagar, Moti Nagar, DLF Moti Nagar, and surrounding MSME hubs.",
  },
  {
    question: "How do I start with GSTwala?",
    answer:
      "Message us on WhatsApp or call for a free consultation. We share a transparent quote before starting work – no hidden charges.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(HOME_FAQS)} />

      <section className="hero-pattern relative overflow-hidden bg-gradient-to-br from-blue-50/50 to-emerald-50/30">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-800">
              Delhi NCR · WhatsApp pe Order Karein
            </p>
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Apne Business ko <span className="text-blue-800">Scale Karein</span> with Premium
              Consultancy
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              GST, FSSAI, Trademark, GeM, Tenders, Project Reports &amp; Bank Loans – High-Ticket
              Solutions for MSMEs.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <WhatsAppButton className="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-8 py-4 font-semibold text-white hover:bg-emerald-600">
                Free Consultation Book Karein
              </WhatsAppButton>
              <CallButton className="inline-flex items-center justify-center rounded-xl border-2 border-blue-200 px-8 py-4 font-semibold text-blue-800 hover:border-blue-400 hover:bg-blue-50">
                Call {SITE.phoneDisplay}
              </CallButton>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              GST registration from <strong className="text-emerald-600">₹999</strong> · Pay after
              approval · Office visit not required
            </p>
            <div className="mt-10 grid grid-cols-3 gap-4 text-center sm:text-left">
              <div>
                <p className="text-2xl font-extrabold text-blue-800">500+</p>
                <p className="text-sm text-gray-500">Clients</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-blue-800">10+</p>
                <p className="text-sm text-gray-500">Years</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-emerald-600">₹999</p>
                <p className="text-sm text-gray-500">GST start</p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl shadow-xl">
            <Image
              src={IMAGES.hero}
              alt="GSTwala premium business consultancy for Delhi NCR MSMEs"
              width={800}
              height={600}
              className="h-64 w-full object-cover sm:h-80 lg:h-[28rem]"
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900/90 to-transparent p-5">
              <p className="font-semibold text-white">Trusted by 500+ Delhi NCR Businesses</p>
              <p className="text-sm text-blue-100">
                WhatsApp pe order karein · Office visit not required
              </p>
            </div>
          </div>
        </div>
      </section>

      <ProcessSteps className="border-b border-gray-100 bg-gray-50" />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            End-to-End Business Solutions
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-gray-600">
            From launch to funding to government contracts – sab kuch ek jagah, transparent quotes
            ke saath.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {HOME_SERVICES.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-40">
                  <Image
                    src={HOME_SERVICE_IMAGES[s.href]}
                    alt={`${s.title} services Delhi – GSTwala`}
                    fill
                    className="object-cover transition group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-gray-900">{s.title}</h3>
                  <p
                    className={`mt-1 text-sm font-semibold ${
                      s.highlight ? "text-emerald-600" : "text-blue-800"
                    }`}
                  >
                    {s.tag}
                  </p>
                  <span className="mt-3 inline-block text-sm font-medium text-gray-500 group-hover:text-blue-800">
                    Details dekhein →
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/gst-registration"
              className="text-sm font-semibold text-blue-800 hover:underline"
            >
              View all services via menu · FSSAI, Udyam, Notices &amp; more
            </Link>
          </div>
        </div>
      </section>

      <TrustSection />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">
                Your Trusted Partner for Business Growth
              </h2>
              <p className="mt-4 leading-relaxed text-gray-600">
                Premium business consultancy specializing in GST compliance, company formation,
                government tenders, project reports, and high-ticket solutions for MSMEs in Delhi
                NCR.
              </p>
              <p className="mt-4 leading-relaxed text-gray-600">
                Filings are coordinated with experienced compliance partners (including Sai
                Associates) for smooth execution.{" "}
                <strong>Office visit ki zaroorat nahi</strong> – saare orders WhatsApp pe. Clear
                quote pehle, kaam baad mein.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link
                  href="/contact-us"
                  className="inline-block font-semibold text-blue-800 hover:underline"
                >
                  Contact us →
                </Link>
                <Link
                  href={SITE.gmbUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block font-semibold text-emerald-600 hover:underline"
                >
                  Google reviews ({SITE.gmbName}) →
                </Link>
              </div>
            </div>
            <Image
              src={IMAGES.aboutTeam}
              alt="GSTwala expert consultancy team Delhi NCR"
              width={700}
              height={400}
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-extrabold text-gray-900">Areas We Serve</h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-gray-600">
            Central &amp; West Delhi – dedicated pages for key commercial hubs.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {(
              [
                {
                  href: "/patel-nagar-rajinder-nagar",
                  label: "Patel Nagar & Rajinder Nagar",
                },
                {
                  href: "/anand-parbat-karol-bagh",
                  label: "Anand Parbat & Karol Bagh",
                },
                {
                  href: "/inderlok-shastri-nagar",
                  label: "Inderlok & Shastri Nagar",
                },
                { href: "/karol-bagh", label: "Karol Bagh" },
                { href: "/kirti-nagar", label: "Kirti Nagar" },
                { href: "/moti-nagar", label: "Moti Nagar" },
                { href: "/dlf-moti-nagar", label: "Dlf Moti Nagar" },
              ] as const
            ).map((area) => (
              <Link
                key={area.href}
                href={area.href}
                className="rounded-full border border-blue-200 bg-white px-5 py-2 text-sm font-medium text-blue-800 hover:bg-blue-50"
              >
                {area.label}
              </Link>
            ))}
            <Link
              href="/areas-we-serve"
              className="rounded-full bg-blue-800 px-5 py-2 text-sm font-medium text-white hover:bg-blue-900"
            >
              All Areas
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <FAQ faqs={HOME_FAQS} />
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <WhatsAppButton className="inline-flex w-full items-center justify-center rounded-xl bg-emerald-500 px-8 py-4 font-semibold text-white hover:bg-emerald-600 sm:w-auto">
            Abhi WhatsApp pe Consult Karein
          </WhatsAppButton>
          <CallButton className="inline-flex w-full items-center justify-center rounded-xl border-2 border-blue-200 px-8 py-4 font-semibold text-blue-800 hover:bg-blue-50 sm:w-auto">
            Call Now
          </CallButton>
        </div>
      </section>
    </>
  );
}
