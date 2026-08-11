import Link from "next/link";
import { SITE } from "@/lib/site";

/**
 * Reviews CTA only — no fabricated quotes or client statistics.
 * Prefer homepage reviews section; this remains for any residual imports.
 */
export function TrustSection() {
  return (
    <section className="bg-slate-950 py-16 text-white sm:py-20" aria-labelledby="trust-heading">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 id="trust-heading" className="text-3xl font-extrabold">
          Customer reviews on Google
        </h2>
        <p className="mt-3 text-slate-300">
          Real feedback is on our Google Business Profile — {SITE.gmbName}. We do not show invented
          reviews on the website.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href={SITE.gmbUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100"
          >
            View Google reviews – {SITE.gmbName}
          </Link>
          <Link
            href={SITE.gmbSearchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-slate-400 underline-offset-2 hover:text-white hover:underline"
          >
            Open on Google Maps
          </Link>
        </div>
      </div>
    </section>
  );
}
