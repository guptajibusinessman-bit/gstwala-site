import Link from "next/link";
import { TESTIMONIALS, TRUST_POINTS } from "@/lib/conversion";
import { SITE } from "@/lib/site";

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 text-amber-400" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} aria-hidden>
          ★
        </span>
      ))}
    </div>
  );
}

export function TrustSection() {
  return (
    <section className="bg-slate-950 py-16 text-white sm:py-20" aria-labelledby="trust-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-emerald-400">
            Google reviews · {SITE.gmbName}
          </p>
          <h2 id="trust-heading" className="text-3xl font-extrabold">
            Delhi NCR MSMEs jo humein trust karte hain
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-300">
            Real client feedback from our Google Business Profile. Transparent quotes, WhatsApp-only
            process, pay-after-approval on GST registration.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {TRUST_POINTS.map((t) => (
            <div
              key={t.sub}
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-5 text-center"
            >
              <p className="text-2xl font-extrabold text-emerald-400 sm:text-3xl">{t.label}</p>
              <p className="mt-1 text-sm text-slate-300">{t.sub}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <blockquote
              key={t.name}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <Stars count={t.rating} />
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-200">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-4 border-t border-white/10 pt-4">
                <p className="font-semibold text-white">{t.name}</p>
                <p className="text-sm text-slate-400">{t.role}</p>
                <p className="mt-1 text-xs text-slate-500">{t.source} · {SITE.gmbName}</p>
              </footer>
            </blockquote>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href={SITE.gmbUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100"
          >
            View all Google reviews – {SITE.gmbName}
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
