import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { NextPage } from "next";
import { supabase } from '@/utils/supabase/client';
import dynamic from "next/dynamic";
import News from '@/components/Layout/News';

const WatchPage = dynamic(() => import("@/components/WatchPage/WatchPage"));

interface Props {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const { data } = await supabase
   .from('match_data')
   .select('*')
   .eq('id', params.id);

  if (!data ||!data[0]) {
    return {
      title: 'Not Found',
      description: 'Match not found',
    };
  }

  const { id, home_team_name, away_team_name } = data[0];

  return {
    title: `${home_team_name} vs ${away_team_name} - FZBOLA22`,
    openGraph: {
      title: `${home_team_name} vs ${away_team_name} - FZBOLA22`,
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
  const { data } = await supabase
   .from('match_data')
   .select('*')
   .eq('id', params.id);
   
  if (!data ||!data[0]) {
    return redirect('/');
  }

  return (
    <>
    <WatchPage />
    <News/>
    </>
  );
};

export default WatchPageComponent;