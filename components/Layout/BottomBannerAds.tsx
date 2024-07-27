'use client';
import useSWR from 'swr';
import { supabase } from '@/utils/supabase/client';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Component.module.css'

const fetcher = async () => {
  const { data } = await supabase
    .from('bottom_ads')
    .select('*')
    .limit(20)
    .order('created_at', { ascending: true });

  return data;
};

export default function BottomBannerAds() {
  const { data: bottombanner, error } = useSWR('/btmads', fetcher);

  if (error) {
    console.error(error);
    return <div>Error fetching data</div>;
  }

  if (!bottombanner || bottombanner.length === 0) {
    return (
        <Link aria-label="Advertise Here" rel="sponsored" href="mailto:fzbola22@gmail.com" target="_blank">
          <video className={styles.imgads} preload="metadata" autoPlay loop muted playsInline>
            <source src="/assets/img/place-ads.mp4" type="video/mp4" />
            <p>Video not supported</p>
          </video>
        </Link>
    );
  }

  return (
    <>
      {bottombanner.map((banner: { id: number; ads_link: string; ads_img: string; ads_alt: string }) => (
        <div key={banner.id}>
          <Link rel="sponsored" href={banner.ads_link} target="_blank">
            <Image
              className={styles.imgads}
              src={banner.ads_img}
              width={728}
              height={90}
              alt={banner.ads_alt}
              priority
            />
          </Link>
        </div>
      ))}
    </>
  );
}