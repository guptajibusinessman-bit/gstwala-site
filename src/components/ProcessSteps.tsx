import { PROCESS_STEPS } from "@/lib/conversion";

type Props = {
  title?: string;
  subtitle?: string;
  compact?: boolean;
  className?: string;
};

export function ProcessSteps({
  title = "Kaise shuru karein? – 4 simple steps",
  subtitle = "Office visit ki zaroorat nahi. WhatsApp pe order complete.",
  compact = false,
  className = "",
}: Props) {
  return (
    <section
      className={
        compact
          ? `rounded-2xl border border-emerald-100 bg-emerald-50/60 p-6 sm:p-8 ${className}`
          : `bg-white py-16 sm:py-20 ${className}`
      }
      aria-labelledby="process-steps-heading"
    >
      <div className={compact ? "" : "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"}>
        <div className={compact ? "mb-6" : "mb-10 text-center"}>
          <h2
            id="process-steps-heading"
            className={
              compact
                ? "text-xl font-bold text-gray-900 sm:text-2xl"
                : "text-3xl font-extrabold text-gray-900"
            }
          >
            {title}
          </h2>
          {subtitle && (
            <p
              className={
                compact
                  ? "mt-2 text-sm text-gray-600"
                  : "mx-auto mt-3 max-w-2xl text-gray-600"
              }
            >
              {subtitle}
            </p>
          )}
        </div>

        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((item) => (
            <li
              key={item.step}
              className="relative rounded-xl border border-gray-100 bg-white p-5 shadow-sm"
            >
              <span className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-blue-800 text-sm font-bold text-white">
                {item.step}
              </span>
              <h3 className="font-bold text-gray-900">{item.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-gray-600">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
