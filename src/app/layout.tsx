import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import CursorEffect from "@/components/CursorEffect";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const BASE_URL = "https://ace-corporate.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "ACE — Ahonzo Consulting Experts | Conseil Data, IA & Cloud à Abidjan",
    template: "%s | ACE — Ahonzo Consulting Experts",
  },
  description:
    "ACE (Ahonzo Consulting Experts) est un cabinet de conseil en Data Science, Intelligence Artificielle, Cloud & Infrastructure, Cybersécurité et Stratégie digitale basé à Abidjan, Côte d'Ivoire.",
  keywords: [
    "conseil data science Abidjan",
    "intelligence artificielle Côte d'Ivoire",
    "cloud infrastructure Afrique",
    "transformation digitale PME",
    "cybersécurité Abidjan",
    "business analytics",
    "consulting IT Côte d'Ivoire",
    "Ahonzo Consulting Experts",
    "ACE corporate",
    "cabinet conseil Abidjan",
    "data driven Afrique",
    "machine learning Côte d'Ivoire",
  ],
  authors: [{ name: "Ahonzo Consulting Experts", url: BASE_URL }],
  creator: "ACE — Ahonzo Consulting Experts",
  publisher: "ACE — Ahonzo Consulting Experts",
  category: "Business & Technology Consulting",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: BASE_URL,
    siteName: "ACE — Ahonzo Consulting Experts",
    title: "ACE — Conseil Data, IA & Cloud | Abidjan, Côte d'Ivoire",
    description:
      "Transformez vos données en avantage concurrentiel. ACE accompagne les PME et grands comptes dans leur transformation digitale — Data Science, IA, Cloud, Cybersécurité.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ACE — Conseil Data, IA & Cloud | Abidjan",
    description:
      "Transformez vos données en avantage concurrentiel. Data Science, IA, Cloud & Cybersécurité pour PME et grands comptes en Côte d'Ivoire.",
  },
  alternates: {
    canonical: BASE_URL,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Ahonzo Consulting Experts",
  alternateName: "ACE",
  url: BASE_URL,
  logo: `${BASE_URL}/logo.png`,
  image: `${BASE_URL}/og-image.png`,
  description:
    "Cabinet de conseil en Data Science, Intelligence Artificielle, Cloud, Cybersécurité et Stratégie digitale basé à Abidjan, Côte d'Ivoire.",
  telephone: "+22509039090",
  email: "contact@ace-corporate.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Abidjan",
    addressRegion: "Le Plateau",
    addressCountry: "CI",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 5.3564,
    longitude: -4.0167,
  },
  founder: {
    "@type": "Person",
    name: "Aristide AHONZO",
    jobTitle: "Directeur Général",
  },
  sameAs: [
    "https://www.linkedin.com/company/acecorporate/",
    "https://ace-corporate.com",
  ],
  serviceType: [
    "Data Science",
    "Intelligence Artificielle",
    "Cloud & Infrastructure",
    "Cybersécurité",
    "Stratégie & Conseil",
    "Business Analytics",
    "Transformation Digitale",
  ],
  areaServed: {
    "@type": "Country",
    name: "Côte d'Ivoire",
  },
  priceRange: "Sur devis",
  openingHours: "Mo-Fr 08:00-18:00",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={outfit.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <CursorEffect />
        {children}
      </body>
    </html>
  );
}
