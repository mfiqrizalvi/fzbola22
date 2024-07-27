import styles from '@/components/Layout/Component.module.css'
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - FZBOLA22",
  openGraph: {
    title: "About Us - FZBOLA22",
    description:
      "FZBOLA22 is a FREE live football streaming site, featuring Premiere League, Bundesliga, La Liga, Serie A, BRI Liga 1, Liga 2, and More TOP Competitions.",
    url: "https://fzbola22.online/about",
    siteName: "FZBOLA22",
    images: "https://fzbola22.online/assets/img/opengraph-image.jpg",
    type: "website",
  },
  alternates: {
    canonical: "https://fzbola22.online/about",
  }
};

export default function Home() {
  
  return (
      <div className={styles.desc}>
         <h1>FZBOLA22: Your Go-To Destination for Free Football Live Streaming</h1>
        <center>
        <Image
            className={styles.aboutlogo}
            src="/assets/img/fzbola22-logo.png"
            alt="FZBOLA22-Logo"
            width={256}
            height={90}
            priority={true}
        />
        </center>
        <br/>
        <center>
        <Link href="https://x.com/fzbola22_online" rel="noopener noreferrer" target="_blank" className={styles.button}>
          <Image
            className={styles.iconimg}
            src="/assets/img/x.png"
            alt="X-FZBOLA22"
            width={14}
            height={14}
            loading="lazy"
          />
          {" "}
          <span>
            @FZBOLA22_ONLINE<span></span>
          </span>
        </Link>
        <Link href="https://www.instagram.com/fzbola22" rel="noopener noreferrer" target="_blank" className={styles.button}>
          <Image
            className={styles.iconimg}
            src="/assets/img/ig.png"
            width={14}
            height={14}
            alt="INSTAGRAM-FZBOLA22"
            loading="lazy"
          />
          {" "}
          <span>
            @FZBOLA22<span></span>
          </span>
        </Link>
        <br/><br/>
        </center>
        <b>Our Story</b>
        <p>FZBOLA22 was founded with a passion for football and a desire to make it accessible to all. Our works tirelessly to ensure that you can watch your favorite football matches without any additional costs. We understand that football is more than just a game; it&apos;s a way of life, and we want to be a part of that journey.</p>
        <b>Our Vision</b>
        <p>Our vision is to become the leading platform for free football live streaming, providing a stable and fast streaming experience to football enthusiasts worldwide. We strive to build a community that is passionate about the beautiful game and values the opportunity to watch their favorite teams and players without any barriers.</p>
        <b>What We Offer</b>
        <p>At FZBOLA22, we offer a wide range of football matches from top leagues around the world, including the Premier League, Bundesliga, La Liga, Serie A, and many more. Our platform is designed to provide you with a stable and fast streaming experience, ensuring that you never miss a moment of the action.</p>
        <b>Join the FZBOLA22 Community</b>
        <p>Join our community today and become a part of the FZBOLA22 family. We invite you to explore our platform, watch your favorite football matches, and share your passion for the beautiful game with us. Together, let&apos;s make football more accessible and enjoyable for everyone.</p>
      </div>
  );
}