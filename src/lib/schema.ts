import { AREAS_SERVED, SITE } from "./site";

export type FAQ = { question: string; answer: string };

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE.baseUrl}/#business`,
    name: SITE.name,
    legalName: SITE.legalName,
    description: SITE.tagline,
    url: SITE.baseUrl,
    telephone: SITE.phone,
    email: SITE.email,
    image: [
      `${SITE.baseUrl}/images/gstwala-logo.jpg`,
      `${SITE.baseUrl}/images/hero-consultancy.jpg`,
    ],
    logo: `${SITE.baseUrl}/images/gstwala-logo.jpg`,
    priceRange: SITE.priceRange,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.locality,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.country,
    },
    areaServed: AREAS_SERVED.map((area) => ({
      "@type": "City",
      name: area,
    })),
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "10:00",
      closes: "19:00",
    },
    sameAs: [SITE.gmbUrl, SITE.gmbSearchUrl, `https://wa.me/${SITE.whatsapp}`],
  };
}

export function serviceSchema(name: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "ProfessionalService",
      name: SITE.name,
      url: SITE.baseUrl,
    },
    areaServed: AREAS_SERVED.map((area) => ({
      "@type": "City",
      name: area,
    })),
    url,
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE.baseUrl}${item.path === "/" ? "" : item.path}`,
    })),
  };
}

export function faqSchema(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}
