import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { WhatsAppFloat } from "@/components/WhatsAppButton";
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
    title: "GST Registration in Delhi | ₹999 Pay After Approval",
    description:
      "GST registration Delhi ₹999 – pay after approval. Patel Nagar, Rajinder Nagar, Anand Parbat, Karol Bagh, Inderlok, Shastri Nagar MSMEs ke liye WhatsApp pe order. GSTwala.",
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
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" className={`${inter.variable} scroll-smooth`}>
      <body className="flex min-h-screen flex-col bg-white font-sans text-gray-800 antialiased">
        <JsonLd data={localBusinessSchema()} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
