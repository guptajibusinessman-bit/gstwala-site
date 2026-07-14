import Link from "next/link";
import { CallButton } from "@/components/CallButton";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SITE } from "@/lib/site";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-4 py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-wider text-blue-800">404</p>
      <h1 className="mt-2 text-3xl font-extrabold text-gray-900">Page not found</h1>
      <p className="mt-4 text-gray-600">
        Yeh page available nahi hai. Home pe jaayein ya WhatsApp pe seedha consult karein.
      </p>
      <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:justify-center">
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-xl bg-blue-800 px-6 py-3 font-semibold text-white hover:bg-blue-900"
        >
          Go to Home
        </Link>
        <WhatsAppButton className="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-white hover:bg-emerald-600">
          WhatsApp
        </WhatsAppButton>
        <CallButton className="inline-flex items-center justify-center rounded-xl border-2 border-blue-200 px-6 py-3 font-semibold text-blue-800 hover:bg-blue-50">
          Call {SITE.phoneDisplay}
        </CallButton>
      </div>
      <ul className="mt-10 space-y-2 text-sm text-blue-800">
        <li>
          <Link href="/gst-registration" className="hover:underline">
            GST Registration ₹999
          </Link>
        </li>
        <li>
          <Link href="/contact-us" className="hover:underline">
            Contact us
          </Link>
        </li>
        <li>
          <Link href="/areas-we-serve" className="hover:underline">
            Areas we serve
          </Link>
        </li>
      </ul>
    </div>
  );
}
