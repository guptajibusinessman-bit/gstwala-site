import { SITE } from "@/lib/site";

type Props = {
  className?: string;
  children: React.ReactNode;
  "aria-label"?: string;
};

export function CallButton({
  className = "",
  children,
  "aria-label": ariaLabel = `Call GSTwala at ${SITE.phoneDisplay}`,
}: Props) {
  return (
    <a href={`tel:${SITE.phone}`} className={className} aria-label={ariaLabel}>
      {children}
    </a>
  );
}
