/** Homepage visual components — no business copy changes */

const PLATFORMS: {
  key: string;
  label: string;
  logo?: string;
}[] = [
  { key: "amazon", label: "Amazon", logo: "/images/platforms/amazon.svg" },
  { key: "flipkart", label: "Flipkart", logo: "/images/platforms/flipkart.svg" },
  { key: "meesho", label: "Meesho", logo: "/images/platforms/meesho.svg" },
  { key: "shopify", label: "Shopify", logo: "/images/platforms/shopify.svg" },
  { key: "instagram", label: "Instagram", logo: "/images/platforms/instagram.svg" },
  { key: "own", label: "Own Website / D2C" },
];

export function PlatformStrip() {
  return (
    <div className="mt-8">
      <p className="mb-5 text-center text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
        Platforms We Support
      </p>
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {PLATFORMS.map((p) => (
          <li
            key={p.key}
            className="flex min-h-[6.5rem] flex-col items-center justify-center gap-2.5 rounded-2xl border border-slate-200 bg-white px-3 py-5 shadow-sm"
          >
            {p.logo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={p.logo}
                alt={`${p.label} logo`}
                width={p.key === "meesho" ? 100 : 36}
                height={36}
                className={
                  p.key === "meesho"
                    ? "h-6 w-auto max-w-[6rem] object-contain"
                    : "h-8 w-8 object-contain"
                }
              />
            ) : (
              <span
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-800"
                aria-hidden
              >
                <GlobeIcon className="h-5 w-5" />
              </span>
            )}
            <span className="text-center text-xs font-semibold text-slate-700 sm:text-sm">
              {p.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const FLOW = [
  { step: "01", label: "WhatsApp Us", color: "bg-emerald-500", Icon: IconWhatsApp },
  { step: "02", label: "Document Check", color: "bg-blue-800", Icon: IconDocs },
  { step: "03", label: "GST Application", color: "bg-blue-800", Icon: IconForm },
  { step: "04", label: "Approval", color: "bg-blue-900", Icon: IconCert },
] as const;

/** WhatsApp → Document Check → GST Application → Approval */
export function ProcessFlowVisual() {
  return (
    <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
      <ol className="mx-auto grid max-w-4xl grid-cols-2 gap-y-6 sm:grid-cols-4 sm:gap-0">
        {FLOW.map((item, i) => (
          <li key={item.step} className="relative flex flex-col items-center px-2 text-center">
            <span
              className={`flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-md sm:h-14 sm:w-14 ${item.color}`}
            >
              <item.Icon className="h-6 w-6 sm:h-7 sm:w-7" />
            </span>
            <span className="mt-3 text-[0.7rem] font-bold tracking-wide text-blue-800 sm:text-xs">
              {item.step}
            </span>
            <span className="mt-0.5 text-sm font-bold text-slate-900">{item.label}</span>
            {i < FLOW.length - 1 && (
              <span
                className="absolute right-0 top-5 hidden translate-x-1/2 text-xl font-semibold text-slate-300 sm:block"
                aria-hidden
              >
                →
              </span>
            )}
          </li>
        ))}
      </ol>
      <p className="mx-auto mt-6 max-w-lg border-t border-slate-100 pt-5 text-center text-sm font-semibold text-slate-800">
        After Approval → GST Registration Certificate PDF sent on WhatsApp
      </p>
    </div>
  );
}

type DocKind = "pan" | "aadhaar" | "address" | "bank" | "electricity" | "other";

const DOC_CARDS: { title: string; kind: DocKind }[] = [
  { title: "PAN Card", kind: "pan" },
  { title: "Aadhaar Card", kind: "aadhaar" },
  { title: "Address Proof", kind: "address" },
  { title: "Bank Statement", kind: "bank" },
  { title: "Electricity Bill", kind: "electricity" },
  { title: "Business / Trade Document", kind: "other" },
];

/** Compact horizontal document strip — supporting only */
export function DocumentGuidanceVisual({
  title = "Documents We Usually Need",
  subtitle = "Professional sample mockups — fictional / blurred details only.",
  headingId = "documents-heading",
}: {
  title?: string;
  subtitle?: string;
  headingId?: string;
} = {}) {
  return (
    <div>
      <h2
        id={headingId}
        className="text-center text-lg font-bold tracking-tight text-slate-900 sm:text-xl"
      >
        {title}
      </h2>
      <p className="mx-auto mt-1 max-w-lg text-center text-xs text-slate-500">{subtitle}</p>
      <ul className="mt-4 flex gap-2 overflow-x-auto pb-1 sm:grid sm:grid-cols-6 sm:gap-2.5 sm:overflow-visible">
        {DOC_CARDS.map((doc) => (
          <li
            key={doc.title}
            className="flex w-[4.75rem] shrink-0 flex-col items-center rounded-lg border border-slate-200 bg-white p-1.5 sm:w-auto"
          >
            <DocPreview kind={doc.kind} compact />
            <p className="mt-1 line-clamp-2 min-h-[2rem] text-center text-[0.6rem] font-semibold leading-tight text-slate-700 sm:text-[0.65rem]">
              {doc.title}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function DocPreview({ kind, compact = false }: { kind: DocKind; compact?: boolean }) {
  const blur = "select-none blur-[3px]";
  const pad = compact ? "p-1.5" : "p-2.5";
  if (kind === "pan") {
    return (
      <div
        className={`relative aspect-[1.58/1] overflow-hidden rounded-lg bg-gradient-to-br from-[#1a365d] to-[#0f2744] ${pad} text-white`}
        aria-hidden
      >
        <div className="flex justify-between text-[0.5rem] font-semibold opacity-90">
          <span>INCOME TAX DEPT.</span>
          <span>GOI</span>
        </div>
        <div className="mt-2 flex gap-2">
          <div className="h-9 w-7 rounded bg-white/15" />
          <div className="flex-1 space-y-1 pt-0.5">
            <div className={`h-1.5 w-14 rounded bg-white/40 ${blur}`} />
            <div className={`h-2 w-20 rounded bg-amber-300/90 ${blur}`} />
            <div className={`h-1.5 w-16 rounded bg-white/30 ${blur}`} />
          </div>
        </div>
        <p className="absolute bottom-2 left-2.5 text-[0.55rem] font-bold tracking-[0.2em] text-amber-200">
          PAN
        </p>
      </div>
    );
  }
  if (kind === "aadhaar") {
    return (
      <div
        className="relative aspect-[1.58/1] overflow-hidden rounded-xl border border-slate-200 bg-white p-2"
        aria-hidden
      >
        <div className="h-1 w-full rounded-full bg-gradient-to-r from-orange-500 via-white to-green-600" />
        <div className="mt-2 flex gap-2">
          <div className="h-10 w-8 rounded bg-slate-200" />
          <div className="flex-1 space-y-1">
            <div className={`h-1.5 w-16 rounded bg-slate-300 ${blur}`} />
            <div className={`h-1.5 w-20 rounded bg-slate-200 ${blur}`} />
            <div className={`mt-1 h-2 w-24 rounded bg-slate-400 ${blur}`} />
          </div>
        </div>
        <p className="mt-1.5 text-center text-[0.55rem] font-bold text-red-700">AADHAAR</p>
      </div>
    );
  }
  if (kind === "address") {
    return (
      <div
        className="relative aspect-[1.58/1] overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-2.5"
        aria-hidden
      >
        <p className="text-[0.55rem] font-bold uppercase text-slate-500">Address proof</p>
        <div className={`mt-2 space-y-1 ${blur}`}>
          <div className="h-1.5 w-full rounded bg-slate-300" />
          <div className="h-1.5 w-5/6 rounded bg-slate-300" />
          <div className="h-1.5 w-4/6 rounded bg-slate-200" />
          <div className="h-1.5 w-3/6 rounded bg-slate-200" />
        </div>
      </div>
    );
  }
  if (kind === "bank") {
    return (
      <div
        className="relative aspect-[1.58/1] overflow-hidden rounded-xl border border-emerald-100 bg-emerald-50/40 p-2.5"
        aria-hidden
      >
        <p className="text-[0.55rem] font-bold text-emerald-900">Bank statement</p>
        <div className="mt-2 grid grid-cols-4 gap-0.5">
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} className={`h-1 rounded bg-emerald-200 ${blur}`} />
          ))}
        </div>
        <div className={`mt-1.5 space-y-1 ${blur}`}>
          <div className="h-1.5 w-full rounded bg-slate-200" />
          <div className="h-1.5 w-full rounded bg-slate-200" />
        </div>
      </div>
    );
  }
  if (kind === "electricity") {
    return (
      <div
        className="relative aspect-[1.58/1] overflow-hidden rounded-xl border border-sky-100 bg-sky-50/50 p-2.5"
        aria-hidden
      >
        <p className="text-[0.55rem] font-bold text-sky-900">Electricity bill</p>
        <div className={`mt-2 space-y-1 ${blur}`}>
          <div className="h-1.5 w-full rounded bg-sky-200" />
          <div className="h-1.5 w-5/6 rounded bg-sky-200" />
          <div className="h-1.5 w-4/6 rounded bg-sky-100" />
        </div>
        <span className="absolute bottom-2 right-2 rounded bg-sky-800 px-1.5 py-0.5 text-[0.45rem] font-bold text-white">
          BILL
        </span>
      </div>
    );
  }
  return (
    <div
      className="relative aspect-[1.58/1] overflow-hidden rounded-xl border border-indigo-100 bg-indigo-50/40 p-2.5"
      aria-hidden
    >
      <p className="text-[0.55rem] font-bold text-indigo-900">Business document</p>
      <div className={`mt-2 space-y-1 ${blur}`}>
        <div className="h-1.5 w-full rounded bg-indigo-200" />
        <div className="h-1.5 w-full rounded bg-indigo-200" />
        <div className="h-1.5 w-3/4 rounded bg-indigo-100" />
      </div>
      <div className="mt-2 h-5 rounded border border-dashed border-indigo-200 bg-white" />
    </div>
  );
}

export function HeroBenefitCard() {
  const items = ["Build Trust", "Sell Legally", "Expand Faster", "Claim Input Tax Credit"];
  return (
    <div className="absolute bottom-3 left-3 right-3 z-10 rounded-xl bg-white/95 p-3.5 shadow-lg ring-1 ring-slate-200/80 sm:bottom-4 sm:left-auto sm:right-4 sm:w-56 sm:p-4">
      <p className="text-sm font-bold text-slate-900">Grow Your Online Business With GST</p>
      <ul className="mt-2 space-y-1.5">
        {items.map((item) => (
          <li key={item} className="flex gap-2 text-xs font-medium text-slate-700">
            <span className="text-emerald-500" aria-hidden>
              ✓
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

const SERVICE_ICONS: Record<string, typeof IconDocs> = {
  "GST Registration": IconForm,
  "GST Return Filing": IconDocs,
  "GST Cancellation": IconCancel,
  "GST Revocation / Restoration": IconRestore,
  "GST Amendment": IconEdit,
  "GST Notice Assistance": IconNotice,
};

export function ServiceIcon({ title, className }: { title: string; className?: string }) {
  const Icon = SERVICE_ICONS[title] ?? IconDocs;
  return <Icon className={className} />;
}

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.75}
        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
      />
    </svg>
  );
}

function IconWhatsApp({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function IconDocs({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.75}
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    </svg>
  );
}

function IconForm({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.75}
        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
      />
    </svg>
  );
}

function IconCert({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.75}
        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
      />
    </svg>
  );
}

function IconCancel({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

function IconRestore({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.75}
        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
      />
    </svg>
  );
}

function IconEdit({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.75}
        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
      />
    </svg>
  );
}

function IconNotice({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.75}
        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
      />
    </svg>
  );
}
