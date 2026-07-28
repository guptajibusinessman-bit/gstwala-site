import Image from "next/image";
import Link from "next/link";
import { FOOTER_SERVICES } from "@/lib/conversion";
import { IMAGES } from "@/lib/images";
import { MapEmbed } from "./MapEmbed";
import { WhatsAppButton } from "./WhatsAppButton";
import { SITE } from "@/lib/site";

const AREAS = [
  { href: "/patel-nagar-rajinder-nagar", label: "Patel Nagar & Rajinder Nagar" },
  { href: "/anand-parbat-karol-bagh", label: "Anand Parbat & Karol Bagh" },
  { href: "/inderlok-shastri-nagar", label: "Inderlok & Shastri Nagar" },
  { href: "/karol-bagh", label: "Karol Bagh" },
  { href: "/kirti-nagar", label: "Kirti Nagar" },
  { href: "/moti-nagar", label: "Moti Nagar" },
  { href: "/dlf-moti-nagar", label: "DLF Moti Nagar" },
];

export function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-400">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-3 inline-block rounded-lg bg-white px-2.5 py-1.5">
              <Image
                src={IMAGES.logo}
                alt="GSTwala logo"
                width={160}
                height={42}
                className="h-8 w-auto"
              />
            </div>
            <p className="text-sm">{SITE.legalName}</p>
            <p className="mt-2 text-sm">Premium Business Consultancy · WhatsApp-only orders</p>
            <a
              href={`tel:${SITE.phone}`}
              className="mt-3 block text-sm font-semibold text-emerald-400 hover:text-emerald-300"
            >
              {SITE.phoneDisplay}
            </a>
            <Link
              href={SITE.gmbUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block text-sm text-emerald-400/90 hover:text-emerald-300"
            >
              Google: {SITE.gmbName}
            </Link>
          </div>
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </p>
            <ul className="space-y-2 text-sm">
              {FOOTER_SERVICES.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="hover:text-emerald-400">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">Areas</p>
            <ul className="space-y-2 text-sm">
              {AREAS.map((a) => (
                <li key={a.href}>
                  <Link href={a.href} className="hover:text-emerald-400">
                    {a.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/areas-we-serve" className="hover:text-emerald-400">
                  All Areas We Serve
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </p>
            <p className="text-sm">{SITE.phoneDisplay}</p>
            <p className="text-sm">{SITE.email}</p>
            <p className="mt-2 text-sm">
              {SITE.address.street}, {SITE.address.locality}
              <br />
              {SITE.address.region} {SITE.address.postalCode}
            </p>
            <p className="mt-2 text-sm">{SITE.hoursDisplay}</p>
            <WhatsAppButton className="mt-4 inline-block rounded-lg bg-emerald-500/20 px-4 py-2 text-sm font-semibold text-emerald-400 hover:bg-emerald-500 hover:text-white">
              WhatsApp Us
            </WhatsAppButton>
          </div>
        </div>

        <div className="mb-8 overflow-hidden rounded-xl border border-gray-800">
          <MapEmbed title="GSTwala location map" height={200} />
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-8 text-sm sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {SITE.name} ({SITE.legalName}). All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/privacy" className="hover:text-emerald-400">
              Privacy
            </Link>
            <Link href="/disclaimer" className="hover:text-emerald-400">
              Disclaimer
            </Link>
            <Link
              href={SITE.gmbUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400"
            >
              Google Reviews ({SITE.gmbName})
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
