import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
import Script from "next/script";
import "./global.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import TopBannerAds from "@/components/Layout/TopBannerAds";
import styles from "./pages.module.css"
import { Links } from "@/components/Layout/Nav";

const inter = Inter({ subsets: ["latin"] });
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_MEASUREMENT_ID;
export const runtime = 'edge';

export const metadata: Metadata = {
  description:
    "FZBOLA22 is a FREE Live Football Streaming Site, featuring Premiere League, Bundesliga, La Liga, Serie A, BRI Liga 1, Liga 2, and More TOP Competitions.",
  keywords: [
    "FZBOLA22",
    "FZBOLA 22",
    "FZBOLA",
    "FZ BOLA",
    "FZBOLA live football streaming",
    "FZBOLA free football streaming",
    "FZBOLA22 Live Football",
    "FZBOLA22 Streaming Bola",
    "FZBOLA22 Streaming Bola Indonesia",
  ],
  alternates: {
    canonical: "https://fzbola22.online/",
  },
  other: {
    author: "FZBOLA22",
    monetag: "4383ad0f05a5e1bae04a67411bf8a11c",
  },
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/assets/img//favicon/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/assets/img/favicon/favicon-16x16.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/assets/img//favicon/apple-touch-icon.png',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <Script
  src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_MEASUREMENT_ID}');
  `}
</Script>
      <body className={inter.className}>
        <div itemScope itemType="https://schema.org/WebSite">
          <meta itemProp="url" content="https://fzbola22.online/"/>
          <meta itemProp="name" content="FZBOLA22"/>
        </div>
        <Header />
        <div className={styles.spacebc}>
          <Links/>
        </div>
      <div className={styles.iklan2}>
        <TopBannerAds />
      </div>
      <div className="notranslate" translate="no">
        {children}
      </div>
        <Footer />
        </body>
    </html>
  );
}