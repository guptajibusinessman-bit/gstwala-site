import { SITE } from "@/lib/site";

type Props = { title?: string; height?: number };

export function MapEmbed({ title = "GSTwala map", height = 280 }: Props) {
  return (
    <iframe
      title={title}
      src={SITE.mapEmbedUrl}
      className="w-full border-0"
      style={{ height }}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
    />
  );
}
