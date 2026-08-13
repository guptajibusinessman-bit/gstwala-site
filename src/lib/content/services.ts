import type { FAQ } from "@/lib/schema";
import type { ServiceSlug } from "@/lib/site";

export type ServiceContent = {
  slug: ServiceSlug;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  sections: { heading: string; content: string; subsections?: { heading: string; content: string }[] }[];
  pricing?: string;
  faqs: FAQ[];
  related: { slug?: ServiceSlug; href?: string; label: string }[];
  isPillar?: boolean;
};

export const SERVICES: Record<ServiceSlug, ServiceContent> = {
  "company-registration": {
    slug: "company-registration",
    title: "Company Registration Delhi",
    metaTitle: "Company Registration Delhi",
    metaDescription:
      "Register Pvt Ltd, LLP or OPC in Delhi with GSTwala. Expert documentation, fast filing & WhatsApp-only process. Free consultation – start your company today.",
    h1: "Company Registration in Delhi – Pvt Ltd, LLP & OPC",
    intro:
      "Starting a private limited company in Delhi NCR? GSTwala handles end-to-end company registration – name approval, DSC, DIN, MOA/AOA drafting, and ROC filing. All orders via WhatsApp; office visit not required.",
    pricing: "Free quote · Transparent govt + professional fees",
    isPillar: true,
    sections: [
      {
        heading: "Types of Company Registration We Handle",
        content:
          "Delhi entrepreneurs choose different structures based on funding, liability, and compliance appetite. We guide you to the right entity before filing begins.",
        subsections: [
          {
            heading: "Private Limited Company (Pvt Ltd)",
            content:
              "Most popular for startups and MSMEs seeking investment, limited liability, and brand credibility. Ideal for businesses planning GeM registration, bank loans, or trademark protection.",
          },
          {
            heading: "Limited Liability Partnership (LLP)",
            content:
              "Lower compliance burden than Pvt Ltd. Suited for professional firms, consultancies, and small partnerships that want limited liability without heavy ROC filings.",
          },
          {
            heading: "One Person Company (OPC)",
            content:
              "Single-founder structure with Pvt Ltd benefits. Popular among solo entrepreneurs in Patel Nagar, Karol Bagh, and West Delhi trading hubs.",
          },
        ],
      },
      {
        heading: "Documents Required for Company Registration",
        content:
          "Share clear photos on WhatsApp – our team verifies and prepares filings. Typical requirements: PAN & Aadhaar of directors, address proof, passport-size photos, utility bill for registered office, and NOC from property owner if rented premises.",
      },
      {
        heading: "Why Register Through GSTwala",
        content:
          "We combine consultancy expertise with Sai Associates execution tie-up. Transparent quote on WhatsApp before work begins – no hidden ROC charges – and post-incorporation guidance on Udyam, GST, and bank account opening.",
      },
      {
        heading: "Timeline & Process",
        content:
          "Standard Pvt Ltd registration in Delhi takes 7–12 working days after document submission. We track MCA status daily and update you on WhatsApp at each milestone – name approval, DSC, SPICe+ filing, and certificate delivery.",
      },
    ],
    faqs: [
      {
        question: "How much does company registration cost in Delhi?",
        answer:
          "Cost depends on entity type, number of directors, and government fees. Message us on WhatsApp for a transparent, itemised quote before we start – no hidden charges.",
      },
      {
        question: "Can I register a company without visiting your office?",
        answer:
          "Yes. GSTwala is 100% WhatsApp-based. Send documents as photos, approve drafts on chat, and receive your incorporation certificate digitally.",
      },
      {
        question: "What is the difference between Pvt Ltd and LLP?",
        answer:
          "Pvt Ltd suits businesses seeking investment and tenders; LLP has simpler annual compliance. We recommend the right structure based on your turnover, partners, and growth plans.",
      },
      {
        question: "Do I need GST registration after company incorporation?",
        answer:
          "If turnover exceeds the threshold or you sell interstate, GST registration is mandatory. We offer GST registration at ₹999 after your company certificate is issued.",
      },
      {
        question: "Can foreigners be directors in a Delhi company?",
        answer:
          "Yes, with valid passport, address proof, and at least one Indian resident director. We handle additional KYC requirements for foreign directors.",
      },
    ],
    related: [
      { slug: "udyam-registration", label: "Udyam MSME Registration" },
      { slug: "trademark", label: "Trademark Registration Delhi" },
      { slug: "gst-compliance", label: "GST Compliance & Filing" },
    ],
  },
  trademark: {
    slug: "trademark",
    title: "Trademark Registration",
    metaTitle: "Trademark Registration Delhi",
    metaDescription:
      "Protect your brand with trademark registration in Delhi. GSTwala handles search, filing & objection replies via WhatsApp. Book a free consultation today.",
    h1: "Trademark Registration in Delhi – Protect Your Brand",
    intro:
      "Your brand name is your biggest asset in Delhi's competitive markets. GSTwala manages trademark search, Class selection, TM-A filing, and status tracking – entirely over WhatsApp for traders, manufacturers, and startups.",
    pricing: "Free consultation · Govt fees quoted separately",
    isPillar: true,
    sections: [
      {
        heading: "Who Needs Trademark Registration in Delhi?",
        content:
          "Retailers in Karol Bagh, food brands in Patel Nagar, industrial units in Kirti Nagar, and e-commerce sellers across Delhi NCR benefit from registered trademarks. Registration gives legal exclusivity over your name, logo, or tagline in chosen classes.",
      },
      {
        heading: "Trademark Registration Process",
        content:
          "Step 1: Comprehensive trademark search to avoid conflicts. Step 2: Class identification (35 for retail, 29/30 for food, etc.). Step 3: TM-A application filing with user affidavit. Step 4: Examination report handling and objection replies if raised.",
        subsections: [
          {
            heading: "Timeline",
            content:
              "Filing to examination typically takes 3–6 months. Full registration may take 12–18 months depending on objections. We monitor IP India status and alert you on WhatsApp.",
          },
        ],
      },
      {
        heading: "Documents for Trademark Filing",
        content:
          "Logo (if device mark), applicant ID proof, MSME certificate for fee concession (if applicable), and power of attorney. Sole proprietors use individual PAN; companies use incorporation certificate.",
      },
      {
        heading: "Trademark vs Company Name",
        content:
          "ROC company name approval does not equal trademark protection. Many Delhi businesses register both – company for legal entity, trademark for brand enforcement against copycats on marketplaces and local markets.",
      },
    ],
    faqs: [
      {
        question: "How long does trademark registration take in India?",
        answer:
          "Application filing takes a few days via GSTwala. IP India examination follows in 3–6 months. Full registration certificate may take 12–18 months unless objections arise.",
      },
      {
        question: "Can I trademark my shop name only?",
        answer:
          "Yes. Word marks protect your business name even without a logo. Ideal for Karol Bagh traders and Patel Nagar retailers.",
      },
      {
        question: "What trademark classes apply to my business?",
        answer:
          "Class 35 covers retail/trading, Class 29/30 for food products, Class 42 for tech services. We analyse your business model and recommend correct classes.",
      },
      {
        question: "What if my trademark gets objected?",
        answer:
          "We draft examination replies, cite precedents, and represent your case. Objection handling is quoted separately on WhatsApp based on complexity.",
      },
      {
        question: "Is trademark registration mandatory?",
        answer:
          "Not legally mandatory, but strongly recommended before scaling, franchising, or selling on Amazon/Flipkart where brand complaints are common.",
      },
    ],
    related: [
      { slug: "company-registration", label: "Company Registration Delhi" },
      { slug: "gst-compliance", label: "GST Compliance Services" },
      { slug: "udyam-registration", label: "Udyam Registration" },
    ],
  },
  "gst-compliance": {
    slug: "gst-compliance",
    title: "GST Compliance Delhi",
    metaTitle: "GST Compliance Delhi",
    metaDescription:
      "Advanced GST compliance for Delhi businesses – monthly returns, reconciliation, notice handling & annual retainer. Expert support via WhatsApp. Get a quote today.",
    h1: "GST Compliance Services in Delhi – Beyond Basic Registration",
    intro:
      "Already GST registered? GSTwala's compliance division handles monthly GSTR-1/3B, ITC reconciliation, e-invoicing, E-way bills, annual returns, and GST notice replies. Built for growing MSMEs who need accuracy, not just form filling.",
    pricing: "From ₹999/month · Retainer plans available",
    isPillar: true,
    sections: [
      {
        heading: "GST Compliance vs GST Registration",
        content:
          "Registration gets you on the GST network. Compliance keeps you there without penalties. If you only need a new GSTIN at ₹999, see our GST Registration page. This page covers ongoing filing, audits, and notice management for active taxpayers.",
      },
      {
        heading: "From GST Registration to Monthly Filing",
        content:
          "Many first-time sellers start with GST Registration at ₹999, with ₹0 advance and payment after GST approval. After the GST department approves the application, monthly return filing may apply. For nil or low activity, GSTwala offers Nil GST Return Filing from ₹300/month. Exact filing type depends on your GST profile. Online sellers can also review GST Registration for Online Business. If you receive a GST notice, see GST Notice Handling.",
      },
      {
        heading: "Monthly & Quarterly Compliance",
        content:
          "We prepare and file GSTR-1 and GSTR-3B, reconcile purchase registers with GSTR-2B, flag ITC mismatches, and maintain filing calendars. QRMP scheme taxpayers get quarterly planning and cash-flow aligned tax payments.",
      },
      {
        heading: "GST Notice & Assessment Support",
        content:
          "Received a DRC-01, ASMT-10, or scrutiny notice? Our team drafts replies, compiles supporting invoices, and coordinates with Sai Associates for representation. Early response reduces interest and penalty exposure.",
      },
      {
        heading: "Annual Compliance Retainer",
        content:
          "Year-round package covers routine filings, phone/WhatsApp query support, and priority notice handling. Popular with Patel Nagar wholesalers and West Delhi manufacturers. Ask on WhatsApp for a retainer quote tailored to your turnover.",
      },
    ],
    faqs: [
      {
        question: "What is the difference between GST registration and GST compliance?",
        answer:
          "Registration is a one-time process to obtain GSTIN. Compliance is ongoing return filing, tax payment, and record maintenance. GSTwala offers both as separate services.",
      },
      {
        question: "What happens if I miss a GST return deadline?",
        answer:
          "Government late fees of ₹50–₹200 per day apply per act, plus interest on tax due. We send reminders and file pending returns to limit penalties.",
      },
      {
        question: "Can you handle GST department notices?",
        answer:
          "Yes. We draft replies for scrutiny, mismatch, and demand notices. Complex cases are escalated through our Sai Associates tie-up.",
      },
      {
        question: "Do you support e-invoicing and E-way bills?",
        answer:
          "Yes, for businesses crossing applicable turnover thresholds. We integrate e-invoice IRN generation into your monthly workflow.",
      },
      {
        question: "Is GST compliance done via WhatsApp?",
        answer:
          "Absolutely. Share purchase/sales data monthly on WhatsApp or Google Sheets. We file returns and share acknowledgements on chat.",
      },
    ],
    related: [
      { slug: "gst-registration", label: "New GST Registration ₹999" },
      { href: "/gst-registration-online-business", label: "GST Registration for Online Sellers" },
      { slug: "gst-notice-handling", label: "GST Notice Reply" },
      { slug: "company-registration", label: "Company Registration" },
    ],
  },
  "gst-registration": {
    slug: "gst-registration",
    title: "GST Registration ₹999",
    metaTitle: "GST Registration ₹999 Delhi",
    metaDescription:
      "New GST registration in Delhi at ₹999 flat – pay after approval, fast processing, 100% WhatsApp. No office visit. Send docs on WhatsApp & get your GSTIN fast.",
    h1: "GST Registration in Delhi – ₹999, Pay After Approval",
    intro:
      "Need a new GSTIN fast? GSTwala's entry service gets sole proprietors and small businesses registered at ₹999 flat – no advance payment, pay only after certificate approval. Documents via WhatsApp only.",
    sections: [
      {
        heading: "What's Included at ₹999",
        content:
          "GST REG-01 filing, ARN tracking, clarification replies if raised, and digital certificate delivery. Fixed price – no surprise CA fees. Ideal for new shops, freelancers, and Amazon/Flipkart sellers.",
      },
      {
        heading: "How Fast Is GST Registration?",
        content:
          "Most approvals within 3–72 hours when documents are clear. We photograph-check your PAN, Aadhaar, address proof, and bank details before filing to avoid rejection loops.",
      },
      {
        heading: "Who Should Choose ₹999 Registration?",
        content:
          "New businesses needing their first GSTIN. If you already have GSTIN and need monthly returns or notice help, visit our GST Compliance page instead.",
      },
    ],
    pricing: "₹999 flat – pay after approval",
    faqs: [
      {
        question: "Is GST registration really ₹999 with no advance?",
        answer:
          "Yes. ₹999 flat fee, payable only after your GST certificate is approved. Government portal fees are included in our quoted price.",
      },
      {
        question: "How is this different from GST compliance?",
        answer:
          "This page is for new GSTIN registration only. GST Compliance covers monthly returns, reconciliations, and notices for existing taxpayers.",
      },
      {
        question: "What documents do I send on WhatsApp?",
        answer:
          "PAN, Aadhaar, passport photo, address proof, bank proof/cancelled cheque, and business address proof with NOC if rented.",
      },
      {
        question: "Do I need to visit your office?",
        answer:
          "No. Entire process is WhatsApp-based. Click photos of documents and send – we handle the rest.",
      },
    ],
    related: [
      { slug: "gst-compliance", label: "GST Compliance & Filing" },
      { slug: "udyam-registration", label: "Udyam MSME Certificate" },
      { slug: "company-registration", label: "Company Registration" },
    ],
  },
  "udyam-registration": {
    slug: "udyam-registration",
    title: "Udyam Registration",
    metaTitle: "Udyam Registration Delhi",
    metaDescription:
      "Get your Udyam MSME certificate in Delhi with GSTwala. Unlock govt subsidies, tender benefits & bank schemes. WhatsApp-only process – register your MSME today.",
    h1: "Udyam Registration in Delhi – MSME Certificate",
    intro:
      "Udyam registration unlocks priority sector lending, GeM benefits, and subsidy schemes. GSTwala registers micro, small, and medium enterprises across Delhi NCR via WhatsApp in under 24 hours.",
    pricing: "Fast filing · Free consultation",
    sections: [
      {
        heading: "Benefits of Udyam for Delhi MSMEs",
        content:
          "Collateral-free loans under CGTMSE, lower interest rates, tender participation preference, and trademark fee concessions. Essential after company registration for formal MSME status.",
      },
      {
        heading: "Eligibility & Classification",
        content:
          "Classification by investment and turnover – micro, small, or medium. We assess your figures and file accurate NIC codes matching your actual business activity.",
      },
    ],
    faqs: [
      {
        question: "Is Udyam registration free on government portal?",
        answer:
          "Government filing is free, but businesses use GSTwala for correct NIC code selection, Aadhaar OTP assistance, and linked GST/PAN validation – avoiding rejection.",
      },
      {
        question: "Can proprietors apply for Udyam?",
        answer:
          "Yes. Sole proprietors with valid Aadhaar and PAN can register. Partnerships and companies also qualify.",
      },
      {
        question: "How long is Udyam certificate valid?",
        answer:
          "No expiry, but update turnover/investment when crossing classification limits.",
      },
      {
        question: "Do I need Udyam before applying for a bank loan?",
        answer:
          "Most MSME loan schemes require Udyam. We often register Udyam before DPR and loan assistance packages.",
      },
    ],
    related: [
      { slug: "company-registration", label: "Company Registration" },
      { slug: "trademark", label: "Trademark Registration" },
      { slug: "loan-assistance", label: "MSME Loan Assistance" },
    ],
  },
  "loan-assistance": {
    slug: "loan-assistance",
    title: "MSME Loan Assistance",
    metaTitle: "MSME Loan Assistance Delhi",
    metaDescription:
      "Bank loan support for Delhi MSMEs – DPR, CMA reports, Mudra & working capital. 95%+ documentation success. WhatsApp consultation. Apply for funding help today.",
    h1: "MSME Bank Loan Assistance in Delhi",
    intro:
      "Rejected by banks? GSTwala prepares bank-ready DPR, CMA reports, and project feasibility studies for Mudra, MSME, CGTMSE, and working capital loans – with Sai Associates execution support.",
    pricing: "Free assessment · Package quote on WhatsApp",
    sections: [
      {
        heading: "Loan Types We Support",
        content:
          "Mudra Shishu/Kishore/Tarun, MSME term loans, machinery finance, cash credit limits, and CGTMSE collateral-free facilities for Delhi manufacturers and traders.",
      },
      {
        heading: "DPR + CMA Documentation",
        content:
          "Banks need credible projections. Our DPR covers market analysis, technical feasibility, and 5-year financials. CMA reports align with bank formats for existing units seeking enhancement.",
      },
    ],
    faqs: [
      {
        question: "What is a DPR for bank loans?",
        answer:
          "A Detailed Project Report explains your business model, costs, revenue projections, and repayment capacity. Banks require it for new project finance.",
      },
      {
        question: "Can you guarantee loan approval?",
        answer:
          "No ethical consultant guarantees approval. We maximise approval odds with bank-format documentation – 95%+ success rate on eligible applications.",
      },
      {
        question: "Do I need Udyam before applying?",
        answer:
          "Recommended for MSME schemes. We can register Udyam and prepare loan docs in parallel via WhatsApp.",
      },
      {
        question: "Which banks do you work with?",
        answer:
          "We prepare lender-neutral documentation suitable for PSU banks, private banks, and NBFCs across Delhi NCR.",
      },
    ],
    related: [
      { slug: "udyam-registration", label: "Udyam Registration" },
      { slug: "company-registration", label: "Company Registration" },
      { slug: "gst-compliance", label: "GST Compliance" },
    ],
  },
  "fssai-registration": {
    slug: "fssai-registration",
    title: "FSSAI Registration",
    metaTitle: "FSSAI License Delhi",
    metaDescription:
      "FSSAI Basic, State & Central licenses in Delhi via GSTwala. Food business compliance on WhatsApp. Fast filing for restaurants, manufacturers & cloud kitchens.",
    h1: "FSSAI Registration & License in Delhi",
    intro:
      "Food businesses in Delhi need FSSAI before operating. GSTwala files Basic, State, and Central licenses for restaurants, cloud kitchens, food manufacturers, and packaged food brands.",
    pricing: "Free consult · Basic / State / Central",
    sections: [
      {
        heading: "Which FSSAI License Do You Need?",
        content:
          "Basic Registration for turnover under ₹12 lakh (government threshold). State License for medium operations. Central License for multi-state or large turnover units. We assess and file the correct category.",
      },
    ],
    faqs: [
      {
        question: "Is FSSAI mandatory for home kitchens?",
        answer:
          "Yes, if selling food commercially including online delivery platforms.",
      },
      {
        question: "How long does FSSAI approval take?",
        answer:
          "Basic registration: 7–15 days. State/Central: 15–45 days depending on inspection requirements.",
      },
      {
        question: "Can I get FSSAI via WhatsApp?",
        answer:
          "Yes. Share kitchen photos, layout, water test report, and ID proofs on WhatsApp.",
      },
      {
        question: "Do you help with FSSAI renewal?",
        answer:
          "Yes. We track expiry dates and process renewals before lapse.",
      },
    ],
    related: [
      { slug: "gst-registration", label: "GST Registration ₹999" },
      { slug: "company-registration", label: "Company Registration" },
      { slug: "trademark", label: "Trademark for Food Brands" },
    ],
  },
  "gem-registration": {
    slug: "gem-registration",
    title: "GeM Registration",
    metaTitle: "GeM Registration Delhi",
    metaDescription:
      "Government e-Marketplace seller registration in Delhi. Catalog setup, bidding & order support. Start selling to govt via WhatsApp with GSTwala – free consultation.",
    h1: "GeM Registration & Seller Setup in Delhi",
    intro:
      "Sell to government buyers through GeM. GSTwala handles seller registration, OEM/Reseller categorisation, catalog listing, and ongoing bid management for Delhi MSMEs.",
    pricing: "Free consultation · Catalog packages available",
    sections: [
      {
        heading: "GeM Registration Requirements",
        content:
          "Active GSTIN, bank account, authorised signatory KYC, and product/service catalog details. We complete primary registration and secondary user setup.",
      },
      {
        heading: "GeM Management Services",
        content:
          "Ongoing management includes new listings, L1 bidding strategy, order fulfilment compliance, and invoice guidance on the GeM portal. Quote on WhatsApp based on catalog size.",
      },
    ],
    faqs: [
      {
        question: "Who can register on GeM?",
        answer:
          "Manufacturers, traders, and service providers with valid GST and bank KYC. MSMEs get preference in many tenders.",
      },
      {
        question: "Is Udyam required for GeM?",
        answer:
          "Not mandatory for registration but strongly recommended for MSME preference benefits.",
      },
      {
        question: "Do you help with first government order?",
        answer:
          "Yes. Our GeM management service covers bid participation and order acceptance guidance.",
      },
      {
        question: "Can GeM registration be done on WhatsApp?",
        answer:
          "Yes. All KYC documents and DSC steps are coordinated via WhatsApp.",
      },
    ],
    related: [
      { slug: "e-tendering", label: "E-Tendering Support" },
      { slug: "udyam-registration", label: "Udyam Registration" },
      { slug: "gst-compliance", label: "GST Compliance" },
    ],
  },
  "e-tendering": {
    slug: "e-tendering",
    title: "E-Tendering Support",
    metaTitle: "E-Tendering Support Delhi",
    metaDescription:
      "Government e-tender bidding support in Delhi. Tender discovery, bid prep & submission via GSTwala. Win govt contracts – WhatsApp consultation today.",
    h1: "E-Tendering & Government Bid Support in Delhi",
    intro:
      "Navigate CPP Portal, eProcure, and GeM bids with expert assistance. GSTwala identifies relevant tenders, prepares technical/financial bids, and ensures timely submission.",
    pricing: "Per-bid quote · Free discovery call",
    sections: [
      {
        heading: "Tender Services We Offer",
        content:
          "Tender discovery by NIC code, EMD guidance, document compilation, digital signature support, and post-submission clarification handling.",
      },
    ],
    faqs: [
      {
        question: "Do I need GeM before e-tendering?",
        answer:
          "GeM is one channel. CPP/eProcure tenders are separate. We support both.",
      },
      {
        question: "What is EMD in tenders?",
        answer:
          "Earnest Money Deposit secures your bid. We advise on BG vs online payment per tender terms.",
      },
      {
        question: "Can new companies bid on tenders?",
        answer:
          "Yes, if tender eligibility criteria are met. Experience certificates and turnover proofs vary by tender.",
      },
      {
        question: "How are tender support fees charged?",
        answer:
          "Quoted per bid based on complexity and documentation required. Discovery-only packages also available – ask on WhatsApp.",
      },
    ],
    related: [
      { slug: "gem-registration", label: "GeM Registration" },
      { slug: "company-registration", label: "Company Registration" },
      { slug: "loan-assistance", label: "Loan for Tender Execution" },
    ],
  },
  "dpr-cma-reports": {
    slug: "dpr-cma-reports",
    title: "DPR & CMA Reports",
    metaTitle: "DPR CMA Reports Delhi",
    metaDescription:
      "Bank-ready DPR & CMA reports for Delhi businesses. Project finance documentation by GSTwala experts. WhatsApp consultation – get funding-ready today.",
    h1: "DPR & CMA Reports for Bank Loans in Delhi",
    intro:
      "Professional project reports aligned with PSU and private bank formats. Essential for new manufacturing units in Kirti Nagar, Moti Nagar, and expanding traders in Karol Bagh.",
    pricing: "Bank-ready format · Quote in 24 hours",
    sections: [
      {
        heading: "DPR Components",
        content:
          "Executive summary, promoter profile, market demand, technical setup, cost of project, means of finance, profitability projections, and DSCR analysis.",
      },
      {
        heading: "CMA for Existing Units",
        content:
          "Credit Monitoring Arrangement reports for working capital enhancement, CC limit renewal, and term loan top-ups.",
      },
    ],
    faqs: [
      {
        question: "How long does DPR preparation take?",
        answer:
          "Typically 7–14 working days after receiving business data on WhatsApp.",
      },
      {
        question: "Is DPR mandatory for Mudra loans?",
        answer:
          "Smaller Mudra loans may need simplified projections. Tarun loans above ₹5 lakh (government limit) usually need full DPR.",
      },
      {
        question: "Do you visit my factory for DPR?",
        answer:
          "No office or site visit required. Share photos, capacity details, and financials on WhatsApp.",
      },
      {
        question: "Can DPR be combined with loan assistance?",
        answer:
          "Yes. Our loan assistance package includes DPR, bank liaison, and application tracking.",
      },
    ],
    related: [
      { slug: "loan-assistance", label: "MSME Loan Assistance" },
      { slug: "udyam-registration", label: "Udyam Registration" },
      { slug: "gst-compliance", label: "GST Compliance" },
    ],
  },
  "gst-notice-handling": {
    slug: "gst-notice-handling",
    title: "GST Notice Handling",
    metaTitle: "GST Notice Reply Delhi",
    metaDescription:
      "GST notice reply & dispute support in Delhi. DRC, scrutiny & mismatch notices handled by GSTwala experts. Act fast – WhatsApp your notice today.",
    h1: "GST Notice Reply & Dispute Handling in Delhi",
    intro:
      "Received a GST notice? Don't ignore it. GSTwala analyses demand orders, scrutiny notices, and ITC mismatch letters – drafting compliant replies within statutory timelines.",
    pricing: "Urgent reply support · Quote after notice review",
    sections: [
      {
        heading: "Notices We Handle",
        content:
          "ASMT-10, DRC-01A/B, GSTR-3B mismatch intimations, cancellation show-cause notices, and audit queries.",
      },
    ],
    faqs: [
      {
        question: "How fast should I reply to a GST notice?",
        answer:
          "Most notices allow 15–30 days. Contact us immediately – late replies weaken your position.",
      },
      {
        question: "Can you reduce GST penalties?",
        answer:
          "Proper reply with documentary evidence often reduces or eliminates penalties. We structure responses to minimise liability.",
      },
      {
        question: "Do I send the notice on WhatsApp?",
        answer:
          "Yes. Photo or PDF of the notice plus related returns/invoices is enough to start.",
      },
      {
        question: "Is this different from GST compliance?",
        answer:
          "Compliance is preventive monthly filing. Notice handling is reactive defence for specific department communications.",
      },
    ],
    related: [
      { slug: "gst-compliance", label: "GST Compliance Retainer" },
      { slug: "gst-registration", label: "GST Registration ₹999" },
      { slug: "company-registration", label: "Company Registration" },
    ],
  },
};

export function getService(slug: string): ServiceContent | undefined {
  return SERVICES[slug as ServiceSlug];
}