import Script from "next/script";
import MatchSchedules from "@/components/Layout/MatchSchedules";
import ChatRoom from "@/components/Layout/ChatRoom";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "FZBOLA22 - Football Live Stream for Free",
    openGraph: {
      title: "FZBOLA22 - Football Live Stream for Free",
      description:
        "FZBOLA22 is a FREE live football streaming site, featuring Premiere League, Bundesliga, La Liga, Serie A, BRI Liga 1, Liga 2, and More TOP Competitions.",
      url: "https://fzbola22.online/",
      siteName: "FZBOLA22",
      images: "https://fzbola22.online/assets/img/opengraph-image.jpg",
      type: "website",
    },
    alternates: {
      canonical: "https://fzbola22.online/",
    }
  };

const jsonLd = {
    "@context": "https://schema.org",
    "@graph":
      [{  
        "@type": "WebSite",
        "url": "https://fzbola22.online/",
        "name": "FZBOLA22",
      }]
};

export default function Home() {
  
  return (
    <>
      <Script
        id="home-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <MatchSchedules/>
      <ChatRoom/>
    </>
  );
}