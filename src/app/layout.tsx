import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "SSMPS | Premium Security, Housekeeping & Manpower Outsourcing",
  description: "SS Man power solutions (SSMPS) offers luxury-grade corporate security, professional industrial cleaning, housekeeping, and bespoke manpower facility management. Located in Hyderabad, serving IT hubs, mnc, hotels, malls, and healthcare facilities.",
  keywords: "Security Agency Hyderabad, Housekeeping Services Hyderabad, Manpower Outsourcing Hyderabad, Corporate Security Guard, Deep Cleaning Hyderabad, Facility Management Services",
  authors: [{ name: "SSMPS Team", url: "https://ssmps.in" }],
  openGraph: {
    title: "SSMPS | Premium Security, Housekeeping & Manpower Solutions",
    description: "Protecting What Matters. Maintaining Excellence. SS Man power solutions is Hyderabad's leading provider of elite corporate security and luxury housekeeping services.",
    url: "https://ssmps.in",
    siteName: "SS Man power solutions (SSMPS)",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SSMPS | Security & Housekeeping Excellence",
    description: "Elite security, deep cleaning, and facility outsourcing services in Hyderabad.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Local Business JSON-LD Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "SS Man power solutions (SSMPS)",
    "image": "https://ssmps.in/logo.png",
    "description": "Premium security services, commercial housekeeping, and outsourced facility management in Hyderabad.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Above raja medical, Beside saidabad bustand, madannapet mandi",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "postalCode": "500059",
      "addressCountry": "IN"
    },
    "telephone": "+919002570891",
    "email": "ssmps1991@gmail.com",
    "url": "https://ssmps.in",
    "priceRange": "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    }
  };

  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans overflow-x-hidden antialiased">
        {children}
      </body>
    </html>
  );
}
