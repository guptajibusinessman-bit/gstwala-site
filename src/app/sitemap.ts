import type { MetadataRoute } from "next";
import { DEDICATED_AREA_SLUGS, HERO_PAGES, SERVICE_SLUGS, SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.baseUrl;
  const now = new Date();

  const home = { url: base, lastModified: now, changeFrequency: "weekly" as const, priority: 1 };

  const heroPages = HERO_PAGES.map((slug) => ({
    url: `${base}/${slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 1,
  }));

  const heroSet = new Set<string>(HERO_PAGES);
  const otherServices = SERVICE_SLUGS.filter((s) => !heroSet.has(s)).map(
    (slug) => ({
      url: `${base}/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })
  );

  const localPages = DEDICATED_AREA_SLUGS.map((slug) => ({
    url: `${base}/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const support = [
    {
      url: `${base}/gst-registration-online-business`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.95,
    },
    {
      url: `${base}/gst-registration-electricity-bill-not-in-name`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.95,
    },
    { url: `${base}/areas-we-serve`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.85 },
    { url: `${base}/contact-us`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.85 },
    { url: `${base}/privacy`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${base}/disclaimer`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.3 },
  ];

  return [home, ...heroPages, ...otherServices, ...localPages, ...support];
}