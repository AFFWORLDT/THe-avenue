import type React from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "../lib/crypto-polyfill";
import Header from "@/src/components/common/header";
import Footer from "@/src/components/common/footer";
import WhatsAppToggle from "@/src/components/common/WhatsAppToggle";
import { LanguageProvider } from "@/src/contexts/LanguageContext";

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
  title: "The Avenue Real Estate - Premium Properties in Dubai",
  description: "Discover luxury properties, off-plan projects, and premium real estate solutions in Dubai with The Avenue Real Estate. Your trusted partner for buying, renting, and investing in Dubai's finest properties.",
  keywords: "Dubai real estate, luxury properties, off-plan projects, property investment, Dubai Marina, Downtown Dubai, Palm Jumeirah",
  authors: [{ name: "The Avenue Real Estate" }],
  icons: {
    icon: '/images/logo.png',
    shortcut: '/images/logo.png',
    apple: '/images/logo.png',
  },
  openGraph: {
    title: "The Avenue Real Estate - Premium Properties in Dubai",
    description: "Discover luxury properties, off-plan projects, and premium real estate solutions in Dubai",
    type: "website",
    locale: "en_US",
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
