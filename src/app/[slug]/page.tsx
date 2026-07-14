import { notFound } from "next/navigation";
import { getArea } from "@/lib/content/areas";
import { getService } from "@/lib/content/services";
import { LocalPage } from "@/components/LocalPage";
import { ServicePage } from "@/components/ServicePage";
import { buildMetadata } from "@/lib/seo";
import { DEDICATED_AREA_SLUGS, SERVICE_SLUGS } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

/** Unknown slugs → 404 (no on-demand empty pages in production) */
export const dynamicParams = false;

export async function generateStaticParams() {
  return [...SERVICE_SLUGS, ...DEDICATED_AREA_SLUGS].map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (service) {
    return buildMetadata({
      title: service.metaTitle,
      description: service.metaDescription,
      path: `/${slug}`,
    });
  }
  const area = getArea(slug);
  if (area) {
    return buildMetadata({
      title: area.metaTitle,
      description: area.metaDescription,
      path: `/${slug}`,
    });
  }
  return {};
}

export default async function SlugPage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (service) return <ServicePage service={service} />;

  const area = getArea(slug);
  if (area) return <LocalPage area={area} />;

  notFound();
}