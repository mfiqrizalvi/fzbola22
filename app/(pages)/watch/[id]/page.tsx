import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { NextPage } from "next";
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
    openGraph: {
      title: `${home_team_name} vs ${away_team_name} | FZBOLA22 - Football Live Stream For Free`,
      description:
        "FZBOLA22 is a FREE live football streaming site, featuring Premiere League, Bundesliga, La Liga, Serie A, BRI Liga 1, Liga 2, and More TOP Competitions.",
      url: `https://fzbola22.online/watch/${id}`,
      siteName: "FZBOLA22",
      images: "https://fzbola22.online/assets/img/opengraph-image.jpg",
      type: "website",
    },
    alternates: {
      canonical: `https://fzbola22.online/watch/${id}`,
    },
  };
}

const WatchPageComponent: NextPage<Props> = async ({ params }) => {
  const response = await fetch(`${apiUrl}${params.id}`);
  const data = await response.json();

  if (!data || !data[0]) {
    redirect('/');
  }

  return (
    <section>
      <WatchPage />
    </section>
  );
};

export default WatchPageComponent;