import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { NextPage } from "next";
import Script from 'next/script';
import dynamic from "next/dynamic";

export const runtime = 'edge'
const apiUrl = process.env.NEXT_PUBLIC_API_WATCH;

const WatchPage = dynamic(() => import("@/components/WatchPage/WatchPage"));

interface Props {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const response = await fetch(`${apiUrl}${params.id}`);
  const data = await response.json();

  if (!data || !data[0]) {
    return {
      title: 'Not Found',
      description: 'Match not found',
    };
  }

  const { id, home_team_name, away_team_name } = data[0];

  return {
    title: `${home_team_name} vs ${away_team_name}`,
    description: 'FZBOLA22 is a FREE live football streaming site, featuring Premiere League, Bundesliga, La Liga, Serie A, BRI Liga 1, Liga 2, and More TOP Competitions.',
    openGraph: {
      title: `${home_team_name} vs ${away_team_name} | FZBOLA22 - Football Live Stream For Free`,
      description:
        "FZBOLA22 is a FREE live football streaming site, featuring Premiere League, Bundesliga, La Liga, Serie A, BRI Liga 1, Liga 2, and More TOP Competitions.",
      url: `https://fzbola22.online/watch/${id}`,
      siteName: "FZBOLA22",
      images: "https://fzbola22.online/assets/img/opengraph-image.jpg",
      type: "website",
    },
  };
}

const WatchPageComponent: NextPage<Props> = async ({ params }) => {
  const response = await fetch(`${apiUrl}${params.id}`);
  const data = await response.json();

  if (!data || !data[0]) {
    redirect('/');
  }

  const { home_team_name, away_team_name } = data[0];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [{
      "@type": "WebPage",
      "@id": `https://fzbola22.online/watch/${params.id}`,
      "url": `https://fzbola22.online/watch/${params.id}`,
      "name": `${home_team_name} vs ${away_team_name} | FZBOLA22 - Football Live Stream For Free`,
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
        "target": ["https://fzbola22.online/watch/${params.id}"]
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
      "name":"FZBola22",
      "alternateName": "FZBola",
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
  
  return (
    <>
    <Script
        id="watch-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <WatchPage />
    </>
  );
};

export default WatchPageComponent;