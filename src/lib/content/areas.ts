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
  "patel-nagar-rajinder-nagar": {
    slug: "patel-nagar-rajinder-nagar",
    name: "Patel Nagar & Rajinder Nagar",
    metaTitle: "GST Registration in Patel Nagar & Rajinder Nagar | ₹999",
    metaDescription:
      "Patel Nagar aur Rajinder Nagar mein GST registration ₹999 – pay after approval. Company registration, trademark, FSSAI, GeM aur compliance bhi WhatsApp pe. GSTwala.",
    h1: "GST Registration in Patel Nagar & Rajinder Nagar",
    intro:
      "Patel Nagar aur Rajinder Nagar ke shop owners, traders, professionals aur MSMEs ke liye GST registration ab simple hai – ₹999, pay after approval, documents WhatsApp pe. GSTwala (Raj GST Sewa Kendra) local businesses ko same-day process start, transparent quote aur digital certificate delivery deta hai. Office visit ki zaroorat nahi.",
    focus: "GST Registration (₹999, Pay After Approval)",
    sections: [
      {
        heading: "GST Focus – Patel Nagar & Rajinder Nagar",
        content:
          "Naya GSTIN chahiye, composition vs regular scheme samajhna hai, ya billing start karne se pehle registration – hum guide karte hain. Application documents milte hi start hoti hai. GST plans pe zero advance / pay after approval option available hai. Full details: GST Registration page pe dekhein.",
      },
      {
        heading: "Local Problems We Solve",
        content:
          "Busy markets, multi-location shops, online + offline sales, aur agent chase – in areas mein common hain. Wrong documents, delayed filing, hidden charges – yeh avoid karne ke liye clear checklist WhatsApp pe milti hai. East/West Patel Nagar, Rajinder Nagar, Rajendra Place nearby pockets bhi cover.",
      },
      {
        heading: "Other Services (Short)",
        content:
          "GST ke alawa Company Registration, Trademark, FSSAI, GST Compliance (returns & notices), GeM Registration aur Loan Assistance (DPR/CMA) bhi available hain – short consult pe pehle quote, phir kaam.",
      },
      {
        heading: "Nearby Areas",
        content:
          "Hum Patel Nagar, Rajinder Nagar, Rajendra Place, Karol Bagh side, Inderlok corridor aur Central Delhi MSMEs serve karte hain – same WhatsApp process.",
      },
    ],
    services: [
      "GST Registration (₹999)",
      "GST Compliance",
      "Company Registration",
      "Trademark",
      "FSSAI",
      "GeM Registration",
      "Loan Assistance",
    ],
    faqs: [
      {
        question: "Patel Nagar / Rajinder Nagar se GST registration kitne mein?",
        answer:
          "GST registration plan ₹999 se start. Pay after approval option available – pehle certificate, phir payment (plan terms ke hisaab se).",
      },
      {
        question: "Documents kya chahiye?",
        answer:
          "Aadhaar, PAN, address proof, bank details aur photo – clear photos WhatsApp pe bhejein. Detail checklist free consultation pe milti hai.",
      },
      {
        question: "Office visit zaroori hai kya?",
        answer:
          "Nahi. Patel Nagar / Rajinder Nagar dono ke clients 100% WhatsApp pe order complete kar sakte hain.",
      },
      {
        question: "GST ke baad returns bhi handle karte ho?",
        answer:
          "Haan. GST Compliance se monthly returns, reconciliation aur notice support milta hai.",
      },
    ],
  },
  "anand-parbat-karol-bagh": {
    slug: "anand-parbat-karol-bagh",
    name: "Anand Parbat & Karol Bagh",
    metaTitle: "GST Registration in Anand Parbat & Karol Bagh | ₹999",
    metaDescription:
      "Anand Parbat aur Karol Bagh mein GST registration ₹999 – pay after approval. Industrial units, traders aur shops ke liye WhatsApp pe GST, company, trademark, GeM. GSTwala.",
    h1: "GST Registration in Anand Parbat & Karol Bagh",
    intro:
      "Anand Parbat industrial units aur Karol Bagh traders/retailers ke liye GST registration ₹999 – pay after approval. Factory, workshop, wholesale shop ya e-commerce – documents WhatsApp pe bhejein, filing GSTwala handle karega. Local industrial + trading belt ke hisaab se practical guidance.",
    focus: "GST Registration (₹999, Pay After Approval)",
    sections: [
      {
        heading: "GST for Industrial & Trading Belt",
        content:
          "Anand Parbat pe fabrication/manufacturing units, Karol Bagh pe wholesale-retail – dono ko clean GSTIN, e-invoicing readiness aur input credit discipline chahiye. Hum regular/composition guidance, registration filing aur next steps clear karte hain. Main focus: GST Registration ₹999, pay after approval.",
      },
      {
        heading: "Local Angle – Anand Parbat & Karol Bagh",
        content:
          "Peak market hours, godown billing, interstate supply, marketplace sales – common challenges. Wrong GST type ya incomplete docs se delay hota hai. WhatsApp pe checklist + transparent quote se process smooth rehta hai. Ajmal Khan Road, industrial lanes aur nearby wholesale pockets cover.",
      },
      {
        heading: "Other Services (Short)",
        content:
          "Company Registration, Trademark, FSSAI, GST Compliance, GeM Registration, Loan Assistance – short packages available. Pehle free consult, phir service choose karein.",
      },
      {
        heading: "Nearby Areas",
        content:
          "Anand Parbat, Karol Bagh, Patel Nagar side, Moti Nagar / industrial corridors aur West–Central Delhi MSMEs – same remote process.",
      },
    ],
    services: [
      "GST Registration (₹999)",
      "GST Compliance",
      "Company Registration",
      "Trademark",
      "FSSAI",
      "GeM Registration",
      "Loan Assistance",
    ],
    faqs: [
      {
        question: "Anand Parbat factory ke liye GST registration hota hai?",
        answer:
          "Haan. Manufacturing / workshop units ke documents WhatsApp pe leke GST registration file karte hain – ₹999 plan available.",
      },
      {
        question: "Karol Bagh trader ko GST zaroori hai kya?",
        answer:
          "Turnover threshold, interstate sale ya e-commerce pe depend karta hai. Free consult pe aapke case ke hisaab se bata denge.",
      },
      {
        question: "Pay after approval ka matlab?",
        answer:
          "Selected GST plans pe aap certificate approval ke baad pay karte hain – pehle hidden charges nahi.",
      },
      {
        question: "GeM / loan bhi milta hai in areas se?",
        answer:
          "Haan. GeM Registration aur Loan Assistance short packages alag se available hain.",
      },
    ],
  },
  "inderlok-shastri-nagar": {
    slug: "inderlok-shastri-nagar",
    name: "Inderlok & Shastri Nagar",
    metaTitle: "GST Registration in Inderlok & Shastri Nagar | ₹999",
    metaDescription:
      "Inderlok aur Shastri Nagar mein GST registration ₹999 – pay after approval. Shops, service MSMEs aur traders ke liye WhatsApp pe GST, company, trademark, FSSAI. GSTwala.",
    h1: "GST Registration in Inderlok & Shastri Nagar",
    intro:
      "Inderlok aur Shastri Nagar ke shop owners, service businesses aur local traders ke liye GST registration ₹999 – pay after approval. Metro corridor pe busy commercial stretch – office visit skip karke WhatsApp pe documents bhejein, GSTwala registration complete karega.",
    focus: "GST Registration (₹999, Pay After Approval)",
    sections: [
      {
        heading: "GST Registration – Local Focus",
        content:
          "Naya shop, expanding service business, ya online sales start – GSTIN jaldi chahiye. Hum Inderlok / Shastri Nagar clients ko simple checklist, transparent ₹999 plan aur WhatsApp-only filing dete hain. Full process GST Registration page pe bhi explained hai.",
      },
      {
        heading: "Local Angle – Inderlok & Shastri Nagar",
        content:
          "Retail counters, clinics/services, small traders aur home-based sellers common hain. Time pe billing start karna, GSTR readiness, aur agent wait avoid karna – yeh priority. Nearby Patel Nagar, Inderlok Metro belt, Shastri Nagar commercial lanes cover.",
      },
      {
        heading: "Other Services (Short)",
        content:
          "Company Registration, Trademark, FSSAI, GST Compliance, GeM Registration, Loan Assistance – short mein available. GST ke baad compliance ya brand protection chahiye to same WhatsApp pe batayein.",
      },
      {
        heading: "Nearby Areas",
        content:
          "Inderlok, Shastri Nagar, Patel Nagar, Anand Parbat side aur Central Delhi surrounding pockets – same digital process.",
      },
    ],
    services: [
      "GST Registration (₹999)",
      "GST Compliance",
      "Company Registration",
      "Trademark",
      "FSSAI",
      "GeM Registration",
      "Loan Assistance",
    ],
    faqs: [
      {
        question: "Inderlok se GST registration WhatsApp pe hoga?",
        answer:
          "Haan. Documents photos bhejein – process remote complete hota hai. ₹999 plan, pay after approval option available.",
      },
      {
        question: "Shastri Nagar shop ke liye kitna time?",
        answer:
          "Documents complete hone pe application jaldi start. Government approval time portal pe depend karta hai; hum filing aur follow-up handle karte hain.",
      },
      {
        question: "GST ke alawa kya services hain?",
        answer:
          "Company Registration, Trademark, FSSAI, monthly GST Compliance, GeM aur Loan Assistance – short packages.",
      },
      {
        question: "Kaise start karein?",
        answer:
          "WhatsApp pe message karein – free consultation, quote, phir documents collect karke GST filing.",
      },
    ],
  },
  "patel-nagar": {
    slug: "patel-nagar",
    name: "Patel Nagar",
    metaTitle:
      "Business Consultancy Services in Patel Nagar | GST, Company Registration, Trademark",
    metaDescription:
      "Patel Nagar ke liye GST registration, company registration, trademark, FSSAI, GeM aur compliance services. WhatsApp pe order, pay after approval.",
    h1: "Business Services in Patel Nagar – GST, Company, Trademark & More",
    intro:
      "Patel Nagar ke factory owners, traders aur MSMEs ke liye complete business support. GSTwala (Raj GST Sewa Kendra) yahi se Central Delhi businesses ko GST, company registration, trademark, FSSAI, GeM aur bank loan documentation provide karta hai – 100% WhatsApp pe, office visit ki zaroorat nahi.",
    focus: "GST, company & trademark for local MSMEs",
    sections: [
      {
        heading: "Patel Nagar ke Local Business Challenges",
        content:
          "Patel Nagar, East & West Patel Nagar aur nearby commercial pockets mein traders, showrooms, small factories aur service MSMEs common hain. Busy market hours ke wajah se office visit mushkil hota hai – isliye hum documents WhatsApp pe lete hain aur filing remote handle karte hain.",
      },
      {
        heading: "Solutions We Provide for Patel Nagar",
        content:
          "GST registration ₹999 (pay after approval), monthly GST compliance, Pvt Ltd / LLP company registration, trademark for brand protection, FSSAI for food businesses, Udyam for MSME benefits, GeM seller setup, aur Mudra/MSME loan ke liye DPR-CMA support – sab ek trusted partner se.",
      },
      {
        heading: "Why Patel Nagar Businesses Choose GSTwala",
        content:
          "Hum Patel Nagar / Central Delhi pe focused hain – local address, WhatsApp-only process, transparent quotes, aur post-service support. Seedha WhatsApp ya call pe free consultation book karein.",
      },
    ],
    services: [
      "GST Registration (₹999)",
      "GST Compliance",
      "Company Registration",
      "Trademark",
      "FSSAI",
      "Udyam",
      "GeM Registration",
      "Loan Assistance",
    ],
    faqs: [
      {
        question: "Patel Nagar se GST registration kaise hoga?",
        answer:
          "WhatsApp pe Aadhaar, PAN, address proof, bank details aur photo bhejein. Application jaldi start hoti hai; GST plans pe pay after approval available hai.",
      },
      {
        question: "Kya office visit zaroori hai Patel Nagar ke liye?",
        answer:
          "Nahi. GSTwala 100% WhatsApp-based hai – documents photos se, certificate digital delivery.",
      },
      {
        question: "Patel Nagar MSMEs ke liye company registration milta hai?",
        answer:
          "Haan. Pvt Ltd, LLP aur related filings – DIN, DSC, MOA/AOA support with transparent quote pehle.",
      },
      {
        question: "Trademark bhi karwa sakte hain?",
        answer:
          "Haan. Brand name / logo search, filing aur basic objection guidance WhatsApp pe.",
      },
    ],
  },
  "anand-parbat": {
    slug: "anand-parbat",
    name: "Anand Parbat",
    metaTitle:
      "Business Consultancy Services in Anand Parbat | GST, Company Registration, Trademark",
    metaDescription:
      "Anand Parbat ke liye GST registration, company registration, trademark, FSSAI, GeM aur compliance services. WhatsApp pe order, pay after approval.",
    h1: "Business Services in Anand Parbat – GST, Company, Trademark & More",
    intro:
      "Anand Parbat ke factory owners, traders aur MSMEs ke liye complete business support. Industrial cluster, workshops aur trading units ke liye GST, factory-related compliance guidance, Udyam, GeM aur loan documentation – GSTwala se WhatsApp pe.",
    focus: "industrial MSME & factory compliance",
    sections: [
      {
        heading: "Anand Parbat ke Local Business Challenges",
        content:
          "Anand Parbat industrial area mein fabrication, small manufacturing, workshops aur wholesale traders operate karte hain. Common needs: regular GST filing, e-way bill discipline, Udyam certificate, factory/trade license guidance, aur working capital / machinery loans ke liye bank-ready papers.",
      },
      {
        heading: "Solutions for Anand Parbat Units",
        content:
          "GST registration ₹999, GST compliance retainer, company formation jab scale ho, trademark for brand, FSSAI where food-related, Udyam, GeM for govt buyers, aur DPR/CMA based loan assistance – clear quote pehle, kaam baad mein.",
      },
      {
        heading: "WhatsApp pe Industrial Support",
        content:
          "Factory visit ki zaroorat nahi. Capacity details, bills aur documents photos WhatsApp pe bhejein – hum filing, follow-up aur delivery handle karte hain.",
      },
    ],
    services: [
      "GST Registration (₹999)",
      "GST Compliance",
      "Company Registration",
      "Trademark",
      "FSSAI",
      "Udyam",
      "GeM Registration",
      "Loan Assistance",
    ],
    faqs: [
      {
        question: "Anand Parbat factory ke liye kaunsi services zaroori hain?",
        answer:
          "Usually GST registration/compliance, Udyam, optional factory/trade license guidance, aur bank loan ke liye DPR. GeM agar sarkari supply karna hai.",
      },
      {
        question: "Kya aap Anand Parbat pe physical visit karte ho?",
        answer:
          "Nahi. Process WhatsApp pe chalta hai – documents digital, delivery digital.",
      },
      {
        question: "MSME loan support milta hai Anand Parbat units ko?",
        answer:
          "Haan. Loan Assistance ke under DPR/CMA style documentation support – free assessment pehle.",
      },
      {
        question: "GST notice aaye to help milegi?",
        answer:
          "Haan. Notice reply / compliance support available – WhatsApp pe details share karein.",
      },
    ],
  },
  "inderlok": {
    slug: "inderlok",
    name: "Inderlok",
    metaTitle:
      "Business Consultancy Services in Inderlok | GST, Company Registration, Trademark",
    metaDescription:
      "Inderlok ke liye GST registration, company registration, trademark, FSSAI, GeM aur compliance services. WhatsApp pe order, pay after approval.",
    h1: "Business Services in Inderlok – GST, Company, Trademark & More",
    intro:
      "Inderlok ke factory owners, traders aur MSMEs ke liye complete business support. Shops, service businesses aur nearby commercial activity ke liye GST, company registration, trademark, FSSAI, Udyam aur GeM – GSTwala se WhatsApp pe order karein.",
    focus: "shops, traders & local MSMEs",
    sections: [
      {
        heading: "Inderlok ke Local Business Challenges",
        content:
          "Inderlok, Metro connectivity wale commercial stretch pe retailers, service providers aur small traders kaafi active hain. Peak hours mein offline agent chase karna time waste hai – isliye remote GST registration, compliance aur trademark filing preferred hai.",
      },
      {
        heading: "Solutions for Inderlok Businesses",
        content:
          "GST ₹999 pay-after-approval, monthly GST returns, company registration for growth, trademark for shop/brand name, FSSAI for food counters, Udyam benefits, GeM seller setup, aur loan assistance for expansion capital.",
      },
      {
        heading: "Nearby Coverage with Inderlok Focus",
        content:
          "Inderlok ke saath Patel Nagar, Shastri Nagar aur surrounding Central Delhi pockets bhi serve karte hain – same WhatsApp process, same transparent pricing.",
      },
    ],
    services: [
      "GST Registration (₹999)",
      "GST Compliance",
      "Company Registration",
      "Trademark",
      "FSSAI",
      "Udyam",
      "GeM Registration",
      "Loan Assistance",
    ],
    faqs: [
      {
        question: "Inderlok se GST registration possible hai bina office visit?",
        answer:
          "Haan. Documents WhatsApp pe bhejein – registration process remote complete hota hai.",
      },
      {
        question: "Shop owners ke liye trademark zaroori hai kya?",
        answer:
          "Brand name protect karne ke liye recommended – especially online sales ya multi-location plans ho.",
      },
      {
        question: "Company registration Inderlok address pe ho sakti hai?",
        answer:
          "Valid residential/commercial address proof aur required NOC ke saath company registration support available hai.",
      },
      {
        question: "Kaise start karein Inderlok se?",
        answer:
          "WhatsApp pe message karein – free consultation, transparent quote, phir documents collect karke filing.",
      },
    ],
  },
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