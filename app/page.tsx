import Script from "next/script";
import MatchSchedules from "@/components/Layout/MatchSchedules";

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [{
        "@type": "WebPage",
        "@id": "https://fzbola22.online/",
        "url": "https://fzbola22.online/",
        "name": "FZBOLA22 - Football Live Stream For Free",
        "isPartOf": {
            "@id": "https://fzbola22.online/#website"
        },
        "about": {
            "@id": "https://fzbola22.online/#organization"
        },
        "primaryImageOfPage": {
            "@id": "https://fzbola22.online/#primaryimage"
        },
        "image": {
            "@id": "https://fzbola22.online/#primaryimage"
        },
        "thumbnailUrl": "https://fzbola22.online/assets/img/opengraph-image.jpg",
        "description": "FZBOLA22 is a FREE live football streaming site, featuring Premiere League, Bundesliga, La Liga, Serie A, BRI Liga 1, Liga 2, and More TOP Competitions.",
        "inLanguage": "id",
        "potentialAction": [{
            "@type": "ReadAction",
            "target": ["https://fzbola22.online/"]
        }]
    }, {
        "@type": "ImageObject",
        "inLanguage": "id",
        "@id": "https://fzbola22.online/#primaryimage",
        "url": "https://fzbola22.online/assets/img/opengraph-image.jpg",
        "contentUrl": "https://fzbola22.online/assets/img/opengraph-image.jpg"
    }, {
        "@type": "WebSite",
        "@id": "https://fzbola22.online/#website",
        "url": "https://fzbola22.online/",
        "name": "FZBola22",
        "alternateName":"FZBola",
        "description": "FZBOLA22 is a FREE live football streaming site, featuring Premiere League, Bundesliga, La Liga, Serie A, BRI Liga 1, Liga 2, and More TOP Competitions.",
        "publisher": {
            "@id": "https://fzbola22.online/#organization"
        },
        "potentialAction": [{
            "@type": "SearchAction",
            "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://fzbola22.online/?s={search_term_string}"
            },
            "query-input": "required name=search_term_string"
        }],
        "inLanguage": "id"
    }, {
        "@type": "Organization",
        "@id": "https://fzbola22.online/#organization",
        "name": "FZBOLA22",
        "url": "https://fzbola22.online/",
        "logo": {
            "@type": "ImageObject",
            "inLanguage": "id",
            "@id": "https://fzbola22.online/#/schema/logo/image/",
            "url": "https://fzbola22.online/assets/img/fzbola22.png",
            "contentUrl": "https://fzbola22.online/assets/img/fzbola22.png",
            "width": 155,
            "height": 55,
            "caption": "FZBOLA22"
        },
        "image": {
            "@id": "https://fzbola22.online/#/schema/logo/image/"
        }
    }]
};

export default function Home() {
  
  return (
    <>
      <Script
        id="home-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <MatchSchedules/>
    </>
  );
}