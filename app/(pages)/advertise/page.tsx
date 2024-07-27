import styles from '@/components/Layout/Component.module.css'
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Advertise - FZBOLA22",
  openGraph: {
    title: "Advertise - FZBOLA22",
    description:
      "FZBOLA22 is a FREE live football streaming site, featuring Premiere League, Bundesliga, La Liga, Serie A, BRI Liga 1, Liga 2, and More TOP Competitions.",
    url: "https://fzbola22.online/advertise",
    siteName: "FZBOLA22",
    images: "https://fzbola22.online/assets/img/opengraph-image.jpg",
    type: "website",
  },
  alternates: {
    canonical: "https://fzbola22.online/advertise",
  }
};

export default function Home() {
  
  return (
      <div className={styles.desc}>
        <h1>ADVERTISE</h1>
        <h2>FZBOLA22 is one of the Football live streaming sites. this site can attract football fans every month. Do you want to promote your brand?</h2>
        <center>
        <div className={styles.card}>
            <div className={styles.choice}>
                <i>
                    <Image
                        className={`${styles.iconimg} ${styles.imglk}`}
                        src="/assets/img/email.png"
                        alt="EMAIL-FZBOLA22"
                        width={20}
                        height={20}
                        priority
                    />
                </i>
                <Link href="mailto:fzbola22@gmail.com" rel="noopener noreferrer" target="_blank">
                <p>FZBOLA22@GMAIL.COM</p>
                </Link>
            </div>
            <div className={styles.choice}>
            <i>
                    <Image
                        className={`${styles.iconimg} ${styles.imglk}`}
                        src="/assets/img/x.png"
                        alt="EMAIL-FZBOLA22"
                        width={20}
                        height={20}
                        priority
                    />
                </i>
                <Link href="https://x.com/fzbola22_online" rel="noopener noreferrer" target="_blank">
                <p>@FZBOLA22_ONLINE</p>
                </Link>
            </div>
            <div className={styles.choice}>
            <i>
                    <Image
                        className={`${styles.iconimg} ${styles.imglk}`}
                        src="/assets/img/ig2.png"
                        alt="EMAIL-FZBOLA22"
                        width={20}
                        height={20}
                        priority
                    />
                </i>
                <Link href="https://www.instagram.com/fzbola22" rel="noopener noreferrer" target="_blank">
                <p>@FZBOLA22</p>
                </Link>
            </div>
        </div>
        </center>
        <br/>
        <div className={styles.menuads}>
            <h1 style={{textAlign:'center'}}>ADS PLACEMENT</h1>
        <div className="tabs">
        <input
          defaultChecked
          id="tabone"
          name="tabs"
          type="radio"
        />
        <label htmlFor="tabone">
          <i
            aria-hidden="true"
            className="fa fa-user-secret"
          />
          {' '}HOME PAGE
        </label>
        <div className="tab">
          <Image
            src="/assets/img/ads-home.png"
            alt='Home Page ADS Placement FZBOLA22'
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }} 
          />
        </div>
        <input
          id="tabtwo"
          name="tabs"
          type="radio"
        />
        <label htmlFor="tabtwo">
          <i
            aria-hidden="true"
          />
          {' '}WATCH PAGE
        </label>
        <div className="tab">
          <Image
            src="/assets/img/ads-watch.png"
            alt='Watch Page ADS Placement FZBOLA22'
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }} 
          />
        </div>
        <input
          id="tabthree"
          name="tabs"
          type="radio"
        />
      </div>
      </div>
      </div>
  );
}