import type { FAQ } from "@/lib/schema";
import type { AreaSlug } from "@/lib/site";

export type AreaContent = {
  slug: AreaSlug;
  name: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  focus: string;
  sections: { heading: string; content: string }[];
  services: string[];
  faqs: FAQ[];
};

export const AREAS: Record<AreaSlug, AreaContent> = {
  "karol-bagh": {
    slug: "karol-bagh",
    name: "Karol Bagh",
    metaTitle: "Karol Bagh Business Services",
    metaDescription:
      "GST, trademark & shop registration for Karol Bagh traders & retailers. GSTwala – Delhi's compliance partner. WhatsApp-only orders. Free consultation for Karol Bagh businesses.",
    h1: "Business Registration & Compliance in Karol Bagh",
    intro:
      "Karol Bagh is one of Delhi's busiest trading corridors – electronics, garments, mobile accessories, and wholesale distribution. GSTwala specializes in trader-first compliance: GST registration at ₹999, shop establishment, trademark for brand protection, and Udyam for MSME benefits.",
    focus: "trader/retail registration",
    sections: [
      {
        heading: "Services Popular in Karol Bagh",
        content:
          "Retail GST registration, composition scheme guidance, trademark for shop brands, GeM seller setup for traders supplying government buyers, and working capital loan documentation for inventory expansion.",
      },
      {
        heading: "Why Karol Bagh Traders Choose GSTwala",
        content:
          "We understand wholesale billing cycles, multi-state B2B supply, and marketplace GST requirements for Amazon and Flipkart sellers operating from Karol Bagh godowns. All filings via WhatsApp – no office visit during peak market hours.",
      },
      {
        heading: "Karol Bagh to Pan-Delhi Growth",
        content:
          "Many Karol Bagh businesses expand to Patel Nagar warehouses or GeM government contracts. We support company registration (Pvt Ltd), trademark, and GST compliance retainer as you scale beyond sole proprietorship.",
      },
    ],
    services: [
      "GST Registration ₹999",
      "Trademark Registration",
      "Udyam MSME Certificate",
      "GeM Seller Registration",
      "Working Capital Loan DPR",
    ],
    faqs: [
      {
        question: "Do Karol Bagh shop owners need GST registration?",
        answer:
          "Mandatory if turnover exceeds threshold or you sell interstate/e-commerce. Many Karol Bagh wholesalers register voluntarily for input tax credit.",
      },
      {
        question: "Can I register trademark for my Karol Bagh shop name?",
        answer:
          "Yes. Word mark protection prevents marketplace copycats using your established local brand name.",
      },
      {
        question: "Is office visit required from Karol Bagh?",
        answer:
          "No. GSTwala processes all Karol Bagh client orders 100% via WhatsApp.",
      },
      {
        question: "Do you serve Karol Bagh wholesale markets only?",
        answer:
          "We serve retail shops, distributors, and e-commerce sellers across Karol Bagh, including Ajmal Khan Road and wholesale hubs.",
      },
    ],
  },
  "kirti-nagar": {
    slug: "kirti-nagar",
    name: "Kirti Nagar",
    metaTitle: "Kirti Nagar Factory Compliance",
    metaDescription:
      "Factory license, pollution NOC & GST for Kirti Nagar manufacturers. Industrial compliance by GSTwala. WhatsApp-only service for Kirti Nagar furniture & fabrication units.",
    h1: "Factory & Industrial Compliance in Kirti Nagar",
    intro:
      "Kirti Nagar's furniture manufacturing, metal fabrication, and woodworking clusters need more than basic GST. GSTwala supports factory licensing, pollution NOC guidance, FSSAI for ancillary cafeterias, MSME Udyam, and bank finance DPR for machinery upgrades.",
    focus: "factory/industrial licensing",
    sections: [
      {
        heading: "Industrial Licensing Support",
        content:
          "Factory plan filing guidance, labour license compliance pointers, pollution control board NOC prerequisites, and fire NOC coordination through Sai Associates network for Kirti Nagar manufacturing units.",
      },
      {
        heading: "GST & Compliance for Manufacturers",
        content:
          "Regular GST registration, monthly GSTR filing, e-way bill support for furniture dispatches, and ITC optimisation on raw material purchases – plywood, hardware, and finishing materials.",
      },
      {
        heading: "Funding for Kirti Nagar Units",
        content:
          "Machinery term loans, CGTMSE collateral-free facilities, and DPR preparation for expanding production lines. We document capacity, orders, and cash flows for bank-ready submissions.",
      },
    ],
    services: [
      "Factory License Guidance",
      "Pollution NOC Support",
      "GST Compliance",
      "Udyam Registration",
      "DPR for Machinery Loans",
    ],
    faqs: [
      {
        question: "Do Kirti Nagar furniture factories need pollution NOC?",
        answer:
          "Many manufacturing units require CTO/CTE from DPCC based on production scale and emissions. We assess applicability and guide documentation.",
      },
      {
        question: "Can small fabrication shops get MSME loans?",
        answer:
          "Yes, with Udyam registration and proper DPR. Kirti Nagar units commonly qualify for Mudra and CGTMSE schemes.",
      },
      {
        question: "Do you visit Kirti Nagar factories?",
        answer:
          "No site visits required. Share factory photos, capacity details, and documents on WhatsApp.",
      },
      {
        question: "What GST issues do Kirti Nagar manufacturers face?",
        answer:
          "Common issues include e-way bill errors on interstate furniture dispatch and ITC mismatches on raw material invoices. Our compliance retainer addresses these.",
      },
    ],
  },
  "moti-nagar": {
    slug: "moti-nagar",
    name: "Moti Nagar",
    metaTitle: "Moti Nagar Industrial Services",
    metaDescription:
      "GST, factory compliance & MSME loans for Moti Nagar industries. GSTwala supports West Delhi manufacturers via WhatsApp. Book free compliance consultation today.",
    h1: "Industrial Business Compliance in Moti Nagar",
    intro:
      "Moti Nagar hosts automotive ancillary units, electronics repair industries, cold storage operations, and light manufacturing. GSTwala provides industrial-grade compliance – factory licensing support, FSSAI for food storage, GST notices, and tender documentation for govt supply contracts.",
    focus: "factory/industrial licensing",
    sections: [
      {
        heading: "Moti Nagar Industrial Compliance",
        content:
          "From GST registration for new units to annual compliance retainers for established factories. We handle GSTR reconciliation when raw material ITC chains span multiple states.",
      },
      {
        heading: "Licenses for Manufacturing & Storage",
        content:
          "Factory license filing support, cold storage FSSAI, pollution board applications, and shop & establishment for ancillary retail counters attached to industrial premises.",
      },
      {
        heading: "Government Contracts from Moti Nagar",
        content:
          "GeM registration and e-tender bidding for units supplying components, packaging, or services to government buyers. Udyam MSME status improves tender eligibility scores.",
      },
    ],
    services: [
      "Factory Compliance Package",
      "FSSAI for Cold Storage",
      "GeM & E-Tendering",
      "GST Notice Handling",
      "MSME Loan DPR",
    ],
    faqs: [
      {
        question: "What industries does GSTwala serve in Moti Nagar?",
        answer:
          "Automotive ancillaries, electronics, cold storage, metal works, and light assembly units across Moti Nagar industrial areas.",
      },
      {
        question: "Can Moti Nagar units get GeM registration?",
        answer:
          "Yes, with valid GST and product catalog. Many component suppliers register for defence and railway tenders.",
      },
      {
        question: "How do I send factory documents?",
        answer:
          "WhatsApp photos of PAN, GST, electricity bill, factory layout, and partnership/company papers. No physical visit needed.",
      },
      {
        question: "Do you handle GST notices for factories?",
        answer:
          "Yes. Manufacturing units often receive ITC mismatch and e-way bill scrutiny notices. We draft replies within deadlines.",
      },
    ],
  },
  "dlf-moti-nagar": {
    slug: "dlf-moti-nagar",
    name: "DLF Moti Nagar",
    metaTitle: "DLF Moti Nagar Business Compliance",
    metaDescription:
      "Company registration, GST & trademark for DLF Moti Nagar offices & showrooms. Premium compliance by GSTwala. WhatsApp-only – consult for DLF Moti Nagar businesses now.",
    h1: "Business Compliance for DLF Moti Nagar",
    intro:
      "DLF Moti Nagar combines commercial showrooms, corporate offices, and service businesses in a premium West Delhi address. GSTwala supports Pvt Ltd incorporation, showroom GST, trademark for retail brands, FSSAI for food courts, and professional GST compliance retainers.",
    focus: "commercial/showroom & corporate",
    sections: [
      {
        heading: "Showroom & Retail in DLF Moti Nagar",
        content:
          "GST registration for multi-brand showrooms, trademark protection for franchise brands, and GeM registration when showroom operators also supply institutional buyers.",
      },
      {
        heading: "Corporate Office Setup",
        content:
          "Pvt Ltd company registration with registered office address, startup compliance kits, Udyam for service MSMEs, and trademark for SaaS/consultancy brands operating from DLF Moti Nagar business centres.",
      },
      {
        heading: "Premium Support for DLF Moti Nagar",
        content:
          "Priority WhatsApp response, annual compliance retainer, and cross-service bundling – company + GST + trademark in one coordinated onboarding for new commercial tenants.",
      },
    ],
    services: [
      "Pvt Ltd Company Registration",
      "Showroom GST Registration",
      "Trademark for Retail Brands",
      "Annual Compliance Retainer",
      "FSSAI for Food Courts",
    ],
    faqs: [
      {
        question: "Can DLF Moti Nagar address be used for company registration?",
        answer:
          "Yes, with valid NOC from property owner and utility bill. Many businesses use commercial spaces as registered offices.",
      },
      {
        question: "Do showroom tenants need separate GST?",
        answer:
          "Each legal entity needs its own GSTIN. Franchisees often register individually even within DLF Moti Nagar complexes.",
      },
      {
        question: "Is GSTwala service WhatsApp-only for DLF Moti Nagar?",
        answer:
          "Yes. Premium does not mean physical meetings – all orders and documents flow through WhatsApp.",
      },
      {
        question: "Do you support food court FSSAI in DLF Moti Nagar?",
        answer:
          "Yes. State and Central FSSAI licenses for food operators in commercial complexes.",
      },
    ],
  },
};

export function getArea(slug: string): AreaContent | undefined {
  return AREAS[slug as AreaSlug];
}