/** Unique image per page/section – no duplicates across the site */
export const IMAGES = {
  logo: "/images/gstwala-logo.jpg",
  hero: "/images/hero-consultancy.jpg",
  aboutTeam: "/images/about-team.jpg",
  companyRegistration: "/images/company-registration.jpg",
  gstRegistration: "/images/gst-registration.jpg",
  gstCompliance: "/images/gst-compliance.jpg",
  trademark: "/images/trademark.jpg",
  loanAssistance: "/images/loan-assistance.jpg",
  gemRegistration: "/images/gem-registration.jpg",
  udyamRegistration: "/images/udyam-registration.jpg",
  fssaiRegistration: "/images/fssai-registration.jpg",
  eTendering: "/images/e-tendering.jpg",
  dprCmaReports: "/images/dpr-cma-reports.jpg",
  gstNoticeHandling: "/images/gst-notice-handling.jpg",
  karolBagh: "/images/karol-bagh.jpg",
  kirtiNagar: "/images/kirti-nagar.jpg",
  motiNagar: "/images/moti-nagar.jpg",
  dlfMotiNagar: "/images/dlf-moti-nagar.jpg",
  /** Reuse nearby-area assets – no design assets added */
  patelNagar: "/images/hero-consultancy.jpg",
  anandParbat: "/images/kirti-nagar.jpg",
  inderlok: "/images/moti-nagar.jpg",
  patelNagarRajinderNagar: "/images/gst-registration.jpg",
  anandParbatKarolBagh: "/images/karol-bagh.jpg",
  inderlokShastriNagar: "/images/moti-nagar.jpg",
} as const;

export const SERVICE_IMAGES: Record<string, string> = {
  "company-registration": IMAGES.companyRegistration,
  "gst-registration": IMAGES.gstRegistration,
  "gst-compliance": IMAGES.gstCompliance,
  trademark: IMAGES.trademark,
  "loan-assistance": IMAGES.loanAssistance,
  "gem-registration": IMAGES.gemRegistration,
  "udyam-registration": IMAGES.udyamRegistration,
  "fssai-registration": IMAGES.fssaiRegistration,
  "e-tendering": IMAGES.eTendering,
  "dpr-cma-reports": IMAGES.dprCmaReports,
  "gst-notice-handling": IMAGES.gstNoticeHandling,
};

export const AREA_IMAGES: Record<string, string> = {
  "patel-nagar-rajinder-nagar": IMAGES.patelNagarRajinderNagar,
  "anand-parbat-karol-bagh": IMAGES.anandParbatKarolBagh,
  "inderlok-shastri-nagar": IMAGES.inderlokShastriNagar,
  "patel-nagar": IMAGES.patelNagar,
  "anand-parbat": IMAGES.anandParbat,
  "inderlok": IMAGES.inderlok,
  "karol-bagh": IMAGES.karolBagh,
  "kirti-nagar": IMAGES.kirtiNagar,
  "moti-nagar": IMAGES.motiNagar,
  "dlf-moti-nagar": IMAGES.dlfMotiNagar,
};

export const HOME_SERVICE_IMAGES: Record<string, string> = {
  "/company-registration": IMAGES.companyRegistration,
  "/gst-registration": IMAGES.gstRegistration,
  "/gst-compliance": IMAGES.gstCompliance,
  "/trademark": IMAGES.trademark,
  "/loan-assistance": IMAGES.loanAssistance,
  "/gem-registration": IMAGES.gemRegistration,
};