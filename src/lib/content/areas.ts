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
  /** Optional extras — only set on pages that need them; others stay unchanged */
  gstRegistrationCta?: boolean;
  sellerHubLink?: boolean;
  afterGstin?: boolean;
  nearbyLinks?: { href: string; label: string }[];
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
      "GST Registration in Patel Nagar, Rajinder Nagar and nearby Central Delhi is ₹999 — ₹0 advance, pay after GST approval. GSTwala (Raj GST Sewa Kendra) helps local shops, new firms and businesses that also sell online. Share documents on WhatsApp. No office visit. Same-Day Process.",
    focus: "GST Registration (₹999, Pay After Approval)",
    gstRegistrationCta: true,
    sellerHubLink: true,
    afterGstin: true,
    nearbyLinks: [
      { href: "/karol-bagh", label: "Karol Bagh" },
      { href: "/inderlok-shastri-nagar", label: "Inderlok & Shastri Nagar" },
    ],
    sections: [
      {
        heading: "GST Focus – Patel Nagar & Rajinder Nagar",
        content:
          "This page is for a new GSTIN in Patel Nagar and Rajinder Nagar — a new shop, a new firm, or a local business that needs GST for billing. Some clients sell only from the shop; some also sell online. We check what applies in your case, then prepare and submit the GST Registration application. ₹999, ₹0 advance, pay after approval. Full process is on the GST Registration page.",
      },
      {
        heading: "Local Problems We Solve",
        content:
          "East and West Patel Nagar, Rajinder Nagar and Rajendra Place are busy commercial pockets — multi-location shops, mixed online and offline selling, and little time for office visits. Incomplete address or premises papers are a common delay. We share a practical WhatsApp checklist for your situation instead of a one-size list.",
      },
      {
        heading: "Other Services (Short)",
        content:
          "If you later need company registration, trademark, FSSAI, GeM or loan documentation, ask on the same WhatsApp chat. Those are separate services. This page stays focused on GST Registration.",
      },
      {
        heading: "Nearby Areas",
        content:
          "We also assist nearby Central Delhi stretches on the same WhatsApp GST Registration process — including Karol Bagh and the Inderlok–Shastri Nagar corridor.",
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
          "GST Registration is ₹999. ₹0 advance — you pay after GST approval. Government approval is not guaranteed.",
      },
      {
        question: "Documents kya chahiye?",
        answer:
          "Typically PAN, Aadhaar, photograph, address / premises proof and bank proof where applicable. The exact list depends on your shop or home setup. We confirm on WhatsApp after a document check.",
      },
      {
        question: "Office visit zaroori hai kya?",
        answer:
          "Nahi. Patel Nagar and Rajinder Nagar clients complete GST Registration on WhatsApp. No unnecessary office visit.",
      },
      {
        question: "Business abhi start nahi hua — GST le sakte hain?",
        answer:
          "Kai local businesses pehle GSTIN lete hain, phir billing or selling start karte hain. Ready hain ya nahi — documents aur plan WhatsApp pe check kar dete hain. Approval still depends on the GST department.",
      },
      {
        question: "GST ke baad monthly filing kya hoti hai?",
        answer:
          "After GST Registration, return filing may apply. For no activity or eligible nil activity, Nil GST Return Filing from ₹300/month may be relevant — we check your profile first. It is not automatic for every new GSTIN.",
      },
    ],
  },
  "anand-parbat-karol-bagh": {
    slug: "anand-parbat-karol-bagh",
    name: "Anand Parbat & Karol Bagh",
    metaTitle: "GST Registration in Anand Parbat & Karol Bagh | ₹999",
    metaDescription:
      "Anand Parbat industrial units aur Karol Bagh wholesale ke liye GST registration ₹999 – pay after approval. Workshop, business premises aur godown billing WhatsApp pe. GSTwala.",
    h1: "GST Registration in Anand Parbat & Karol Bagh — Units & Wholesale",
    intro:
      "GST Registration in the Anand Parbat–Karol Bagh corridor is ₹999 for Anand Parbat workshops and industrial units, and for Karol Bagh wholesale businesses. ₹0 advance, pay after GST approval. Share documents on WhatsApp. No office visit. Same-Day Process. Some units and godowns also bill interstate or sell through marketplaces — that is a secondary use of the same GSTIN, depending on the business.",
    focus: "GST Registration (₹999, Pay After Approval)",
    gstRegistrationCta: true,
    sellerHubLink: true,
    afterGstin: true,
    nearbyLinks: [
      { href: "/karol-bagh", label: "Karol Bagh" },
      { href: "/moti-nagar", label: "Moti Nagar" },
    ],
    sections: [
      {
        heading: "GST for workshops, units and wholesale",
        content:
          "This page is for a GSTIN used in business billing on this corridor — a workshop or industrial unit on the Anand Parbat side, or a wholesale business with shop or godown operations toward Karol Bagh. Factory or business premises papers are part of the document check. Interstate supply can apply in some cases. We check what is required, then prepare and submit the GST Registration application. ₹999, ₹0 advance, pay after approval. Full process is on the GST Registration page.",
      },
      {
        heading: "Anand Parbat vs Karol Bagh on this corridor",
        content:
          "Anand Parbat is the industrial stretch: workshops, fabrication and manufacturing units, and the business premises those units operate from. Karol Bagh on this page is the wholesale and trading side: stock, godown and billing for distribution — not the dedicated shop-and-marketplace trader page. Peak hours make an office visit a poor fit; the GST Registration process stays on WhatsApp.",
      },
      {
        heading: "Interstate and marketplace from a unit or godown",
        content:
          "An industrial unit, wholesaler or godown may also supply customers interstate or sell through marketplaces. A GSTIN can be relevant depending on that activity — we check the case. We do not treat GST as automatic for every marketplace seller.",
      },
      {
        heading: "Other Services (Short)",
        content:
          "If you later need company registration, trademark, FSSAI, GeM or loan documentation, ask on the same WhatsApp chat. Those are separate services. This page stays focused on GST Registration.",
      },
      {
        heading: "Nearby Areas",
        content:
          "Karol Bagh shop, godown and trader GST has its own page. Moti Nagar sits on the industrial side of this West–Central Delhi belt. This page stays on industrial and wholesale GST Registration for the Anand Parbat–Karol Bagh corridor.",
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
        question: "Anand Parbat / Karol Bagh corridor se GST registration kitne mein?",
        answer:
          "GST Registration is ₹999. ₹0 advance — you pay after GST approval. Government approval is not guaranteed.",
      },
      {
        question: "Documents kya chahiye?",
        answer:
          "Typically PAN, Aadhaar, photograph, address / premises proof for the workshop, unit, shop or godown, and bank proof where applicable. The exact list depends on the industrial or business premises. We confirm on WhatsApp after a document check.",
      },
      {
        question: "Anand Parbat factory ya workshop ke liye GST registration hota hai?",
        answer:
          "Haan — manufacturing and workshop units routinely file GST Registration for business billing from those premises. Documents WhatsApp pe share karein. Approval still depends on the GST department.",
      },
      {
        question: "Wholesale ya interstate billing ke liye GST chahiye?",
        answer:
          "It depends on how you sell, where you supply, and the applicable GST requirements. Many wholesale and interstate businesses register for billing. We check your case. We do not say GST is mandatory for every wholesale or interstate movement.",
      },
      {
        question: "Unit ya godown se marketplace pe bhi sell karte hain — GST same hai?",
        answer:
          "A GSTIN used for the unit, wholesale or godown can also be relevant if you sell through marketplaces, depending on the activity. Exact need is not automatic. For first-time online-business GST questions, see our online-business GST page.",
      },
      {
        question: "Office visit zaroori hai kya?",
        answer:
          "Nahi. Anand Parbat and Karol Bagh corridor clients complete GST Registration on WhatsApp. No unnecessary office visit.",
      },
      {
        question: "GST ke baad kya hota hai?",
        answer:
          "After GST Registration you receive your GSTIN. Return filing may then apply. For no activity or eligible nil activity, Nil GST Return Filing from ₹300/month may be relevant — we check your profile first. Industrial or wholesale businesses do not automatically qualify for Nil filing.",
      },
      {
        question: "Pay after approval ka matlab?",
        answer:
          "GST Registration pe pehle se advance nahi. Aap GST approve hone ke baad ₹999 pay karte hain. Government approval is not guaranteed.",
      },
    ],
  },
  "inderlok-shastri-nagar": {
    slug: "inderlok-shastri-nagar",
    name: "Inderlok & Shastri Nagar",
    metaTitle: "GST Registration in Inderlok & Shastri Nagar | ₹999",
    metaDescription:
      "Inderlok aur Shastri Nagar mein first GST registration ₹999 – pay after approval. New shops, service businesses aur home-based setups ke liye WhatsApp pe. GSTwala.",
    h1: "GST Registration in Inderlok & Shastri Nagar — Home & New Businesses",
    intro:
      "First GSTIN for a new shop, service business or home-based business in Inderlok and Shastri Nagar is GST Registration ₹999 — ₹0 advance, pay after approval. Share documents on WhatsApp. No office visit. Same-Day Process. Some people here also start an online or home business; that is a supporting case for the same first GSTIN, not a separate marketplace process.",
    focus: "GST Registration (₹999, Pay After Approval)",
    gstRegistrationCta: true,
    sellerHubLink: true,
    afterGstin: true,
    nearbyLinks: [
      { href: "/patel-nagar-rajinder-nagar", label: "Patel Nagar & Rajinder Nagar" },
    ],
    sections: [
      {
        heading: "GST Registration – Local Focus",
        content:
          "This page is for a first GST registration in Inderlok and Shastri Nagar — a new shop, a new service business, or a home-based setup that needs a GSTIN for billing. The metro corridor is a busy commercial stretch; we still work on WhatsApp instead of an office visit. We check what applies in your case, then prepare and submit the GST Registration application. ₹999, ₹0 advance, pay after approval. Full process is on the GST Registration page.",
      },
      {
        heading: "Home and address documents",
        content:
          "Many first GSTINs here use a residential address — own home, parents' home, or a rented premises. The papers GST needs depend on the actual address and property situation, not on a single checklist. A parents' address does not automatically qualify. We review your documents on WhatsApp and tell you what is required for that setup. Approval still depends on the GST department.",
      },
      {
        heading: "Home-based and starting online from here",
        content:
          "Retail counters, clinics and other service businesses, small traders and home-based work are common along Inderlok Metro and Shastri Nagar commercial lanes. Someone starting an online business from home may need GST registration depending on their activity and applicable requirements — we check the case; we do not treat GST as automatic for every home or online seller.",
      },
      {
        heading: "Other Services (Short)",
        content:
          "If you later need company registration, trademark, FSSAI, GeM or loan documentation, ask on the same WhatsApp chat. Those are separate services. This page stays focused on GST Registration.",
      },
      {
        heading: "Nearby Areas",
        content:
          "Patel Nagar sits next to this corridor. GST Registration there has its own page. This page stays on home-based and new or small-business GST in Inderlok and Shastri Nagar.",
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
        question: "Inderlok / Shastri Nagar se GST registration kitne mein?",
        answer:
          "GST Registration is ₹999. ₹0 advance — you pay after GST approval. Government approval is not guaranteed.",
      },
      {
        question: "Documents kya chahiye?",
        answer:
          "Typically PAN, Aadhaar, photograph, address / premises proof and bank proof where applicable. The exact list depends on your shop or home setup. We confirm on WhatsApp after a document check.",
      },
      {
        question: "Own home, parents' home ya rented address pe GST ho sakta hai?",
        answer:
          "Possible hai, lekin documents aapke actual address aur property situation pe depend karte hain. Parents ke ghar ka address automatically qualify nahi karta. Hum case dekh kar practical next step batate hain. Approval GST department pe depend karta hai.",
      },
      {
        question: "Business abhi start nahi hua — GST le sakte hain?",
        answer:
          "Kai local shops, service businesses aur home setups pehle GSTIN lete hain, phir billing or selling start karte hain. Ready hain ya nahi — documents aur plan WhatsApp pe check kar dete hain. Approval still depends on the GST department.",
      },
      {
        question: "Office visit zaroori hai kya?",
        answer:
          "Nahi. Inderlok and Shastri Nagar clients complete GST Registration on WhatsApp. No unnecessary office visit.",
      },
      {
        question: "Shastri Nagar shop ke liye kitna time?",
        answer:
          "Documents complete hone pe application jaldi start. Government processing and approval time depend on the GST portal; we do not guarantee a government timeline. Hum filing aur follow-up handle karte hain.",
      },
      {
        question: "GST ke baad monthly filing kya hoti hai?",
        answer:
          "After GST Registration, return filing may apply. For no activity or eligible nil activity, Nil GST Return Filing from ₹300/month may be relevant — we check your profile first. It is not automatic for every new GSTIN.",
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
    metaTitle: "GST Registration in Karol Bagh | Traders | ₹999",
    metaDescription:
      "GST registration in Karol Bagh for wholesale and retail traders. ₹999, ₹0 advance, pay after approval. Shops, godowns and marketplace selling from this market. WhatsApp. GSTwala.",
    h1: "GST Registration in Karol Bagh — For Traders & Marketplace Sellers",
    intro:
      "GST Registration in Karol Bagh is ₹999 for wholesale and retail businesses — shops and godowns in this trading corridor. ₹0 advance, pay after GST approval. Share documents on WhatsApp. No office visit. Same-Day Process. Some Karol Bagh traders also use the same GSTIN for Amazon or Flipkart activity from this market — we check your case; we do not treat GST as automatic for every marketplace seller.",
    focus: "GST Registration for Karol Bagh traders & marketplace dispatch",
    gstRegistrationCta: true,
    sellerHubLink: true,
    afterGstin: true,
    nearbyLinks: [
      { href: "/anand-parbat-karol-bagh", label: "Anand Parbat & Karol Bagh" },
      { href: "/patel-nagar-rajinder-nagar", label: "Patel Nagar & Rajinder Nagar" },
    ],
    sections: [
      {
        heading: "GST for Karol Bagh shops, godowns and wholesale",
        content:
          "Karol Bagh is a busy trading corridor — electronics, garments, mobile accessories and wholesale distribution, including Ajmal Khan Road. This page is for GST Registration at ₹999 when you need a GSTIN for shop billing, wholesale trade or interstate supply. Peak market hours are a poor time for office visits; the process is WhatsApp-led.",
      },
      {
        heading: "Marketplace selling from Karol Bagh",
        content:
          "A Karol Bagh trader may need GST registration for local wholesale or shop operations and may also use that GSTIN for marketplace activity such as Amazon or Flipkart from a shop or godown here. Whether GST applies still depends on how and where you sell — not on the platform name alone. We do not say every Amazon or Flipkart seller must register.",
      },
      {
        heading: "Other Services (Short)",
        content:
          "Trademark, Udyam, GeM or loan documentation can be discussed on the same WhatsApp chat if you need them later. They are separate services. This page stays on GST Registration for Karol Bagh traders.",
      },
      {
        heading: "Nearby Areas",
        content:
          "The Anand Parbat industrial belt sits next to this market. Some Karol Bagh businesses also keep stock toward Patel Nagar. Those corridors have their own GST pages — this one is Karol Bagh shop, godown and trader GST.",
      },
    ],
    services: [
      "GST Registration ₹999",
      "GST Compliance",
      "Trademark Registration",
      "Udyam MSME Certificate",
      "GeM Seller Registration",
      "Working Capital Loan DPR",
    ],
    faqs: [
      {
        question: "Do Karol Bagh traders need GST registration?",
        answer:
          "It depends on your turnover, interstate supply, shop or godown setup, and how you sell. Many Karol Bagh wholesalers register for billing and input tax credit. Marketplace selling can also raise GST questions — we check your case. We do not say GST is mandatory for every e-commerce seller.",
      },
      {
        question: "I sell on Amazon or Flipkart from a Karol Bagh godown — is GST the same?",
        answer:
          "You may need a GSTIN for local wholesale or shop operations and may also use it for Amazon or Flipkart onboarding from this market. Exact need depends on your setup. For first-time online-seller documents and platforms, see our online-business GST page.",
      },
      {
        question: "GST Registration in Karol Bagh kitne mein hai?",
        answer:
          "GST Registration is ₹999. ₹0 advance — you pay after GST approval. Government approval is not guaranteed.",
      },
      {
        question: "Documents kya chahiye?",
        answer:
          "Typically PAN, Aadhaar, photograph, address / premises proof for the shop or godown, and bank proof where applicable. The exact list depends on your premises. We confirm on WhatsApp after a document check.",
      },
      {
        question: "Office visit zaroori hai kya?",
        answer:
          "Nahi. Karol Bagh clients complete GST Registration on WhatsApp — useful during peak market hours.",
      },
      {
        question: "GST ke baad kya hota hai?",
        answer:
          "After approval you receive your GSTIN. Monthly return filing may apply. For no activity or eligible nil activity, Nil GST Return Filing from ₹300/month may be relevant — we check your profile first.",
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