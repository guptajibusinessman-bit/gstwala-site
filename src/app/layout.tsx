import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { Footer } from "@/components/Footer";
import { GaPageViews } from "@/components/GaPageViews";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { WhatsAppFloat } from "@/components/WhatsAppButton";
import { GA_MEASUREMENT_ID } from "@/lib/analytics";
import { localBusinessSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  ...buildMetadata({
    title: "GST Registration for New Online Sellers | ₹999 | ₹0 Advance",
    description:
      "GST registration for new online sellers. Amazon, Flipkart, Meesho, Shopify & Instagram. ₹999, ₹0 advance, pay after GST approval. Certificate on WhatsApp. Nil filing from ₹300/month. GSTwala.",
    path: "/",
  }),
  metadataBase: new URL(SITE.baseUrl),
  applicationName: SITE.name,
  authors: [{ name: SITE.legalName }],
  creator: SITE.name,
  category: "business",
  icons: {
    icon: [{ url: "/images/gstwala-logo.jpg", type: "image/jpeg" }],
    apple: [{ url: "/images/gstwala-logo.jpg", type: "image/jpeg" }],
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  verification: {
    google: "ZVrHlDRkeNpQ80sPL8AAsix0cdiIOXdyauYYKfdc1Vg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" className={`${inter.variable} scroll-smooth`}>
      <body className="flex min-h-screen flex-col bg-white pb-20 font-sans text-gray-800 antialiased md:pb-0">
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_MEASUREMENT_ID}');`}
        </Script>
        <GaPageViews />
        <JsonLd data={localBusinessSchema()} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
