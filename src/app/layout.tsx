import type React from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "../lib/crypto-polyfill";
import Header from "@/src/components/common/header";
import Footer from "@/src/components/common/footer";
import WhatsAppToggle from "@/src/components/common/WhatsAppToggle";
import { LanguageProvider } from "@/src/contexts/LanguageContext";
import SchemaMarkup from "@/src/components/seo/SchemaMarkup";

const trajanPro = localFont({
  src: [
    {
      path: "../../public/fonts/TrajanPro3Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/TrajanPro3-Bold.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-trajan",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://theavenue.ae'),
  title: "The Avenue Real Estate - Dubai's Premier Luxury Property Experts",
  description: "Discover luxury properties, off-plan projects, and premium real estate solutions in Dubai with The Avenue Real Estate. Expert guidance for buying, renting, selling, and investing in Dubai's finest properties including Dubai Marina, Downtown Dubai, and Palm Jumeirah.",
  keywords: "Dubai real estate, luxury properties, off-plan projects, property investment, Dubai Marina apartments, Downtown Dubai penthouses, Palm Jumeirah villas, Business Bay properties, JLT apartments, Dubai Hills Estate, property management, mortgage services, real estate investment Dubai",
  authors: [{ name: "The Avenue Real Estate" }],
  creator: "The Avenue Real Estate",
  publisher: "The Avenue Real Estate",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/images/logo.png',
    shortcut: '/images/logo.png',
    apple: '/images/logo.png',
  },
  openGraph: {
    title: "The Avenue Real Estate - Dubai's Premier Luxury Property Experts",
    description: "Discover luxury properties, off-plan projects, and premium real estate solutions in Dubai",
    type: "website",
    locale: "en_US",
    url: "https://theavenue.ae",
    siteName: "The Avenue Real Estate",
    images: [
      {
        url: "/images/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "The Avenue Real Estate - Luxury Properties Dubai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Avenue Real Estate - Dubai's Premier Luxury Property Experts",
    description: "Discover luxury properties, off-plan projects, and premium real estate solutions in Dubai",
    images: ["/images/hero-bg.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  alternates: {
    canonical: "https://theavenue.ae",
    languages: {
      'en-US': 'https://theavenue.ae',
      'ar-AE': 'https://theavenue.ae/ar',
      'fr-FR': 'https://theavenue.ae/fr',
      'ru-RU': 'https://theavenue.ae/ru',
      'zh-CN': 'https://theavenue.ae/zh',
      'de-DE': 'https://theavenue.ae/de',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${trajanPro.variable} antialiased`}>
      <head>
        <script 
          src="https://www.google.com/recaptcha/api.js" 
          async 
          defer
        ></script>
        <SchemaMarkup type="organization" data={{}} />
      </head>
      <body className="luxury-bg">
        <LanguageProvider>
          <main className="min-h-screen">
            <Header />
            {children}
            <Footer />
            <WhatsAppToggle />
          </main>
        </LanguageProvider>
      </body>
    </html>
  );
}
