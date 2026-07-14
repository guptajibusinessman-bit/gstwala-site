import type { FAQ as FAQType } from "@/lib/schema";

export function FAQ({ faqs, title = "Frequently Asked Questions" }: { faqs: FAQType[]; title?: string }) {
  return (
    <section className="py-12">
      <h2 className="mb-8 text-2xl font-bold text-gray-900 sm:text-3xl">{title}</h2>
      <div className="space-y-4">
        {faqs.map((faq) => (
          <details
            key={faq.question}
            className="group rounded-xl border border-gray-200 bg-white p-5 open:shadow-sm"
          >
            <summary className="cursor-pointer font-semibold text-gray-900 marker:content-none">
              <span className="flex items-center justify-between gap-4">
                {faq.question}
                <span className="text-blue-800 group-open:rotate-45 transition-transform">+</span>
              </span>
            </summary>
            <p className="mt-3 text-gray-600 leading-relaxed">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}