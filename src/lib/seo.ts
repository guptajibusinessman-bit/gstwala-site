import type { Metadata } from "next";
import { SITE } from "./site";

const BRAND_SUFFIX = "GSTwala – Business Compliance Partner";

type MetaInput = {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
};

export function buildTitle(segment: string): string {
  const full = `${segment} | ${BRAND_SUFFIX}`;
  return full.length <= 60 ? full : `${segment} | GSTwala`;
}

export function buildMetadata({
  title,
  description,
  path,
  ogImage = "/images/hero-consultancy.jpg",
}: MetaInput): Metadata {
  const canonical = `${SITE.baseUrl}${path === "/" ? "" : path}`;
  const metaTitle = buildTitle(title);
  const imageUrl = ogImage.startsWith("http")
    ? ogImage
    : `${SITE.baseUrl}${ogImage}`;

  return {
    title: metaTitle,
    description,
    metadataBase: new URL(SITE.baseUrl),
    alternates: { canonical },
    openGraph: {
      title: metaTitle,
      description,
      url: canonical,
      siteName: SITE.name,
      locale: "en_IN",
      type: "website",
      images: [{ url: imageUrl, width: 1200, height: 630, alt: metaTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description,
      images: [imageUrl],
    },
    robots: { index: true, follow: true },
  };
}
