import type React from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
      <body className="luxury-bg">
        {children}
      </body>
    </html>
  );
}
