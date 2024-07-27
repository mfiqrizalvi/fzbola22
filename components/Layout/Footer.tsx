'use client';
import Link from "next/link";
import Image from "next/image"; 
import styles from './Component.module.css'
import { LinksBtm } from "./NavBtm";

const Footer = () => {
  return (
    <>
      <footer>
        <div className={styles.menu1f}>
          <h1>FZBOLA22</h1>&nbsp;-&nbsp;<h2>Football Live Stream For Free</h2>
        </div>
        <section className={styles.desc}>
          <span>
          FZBOLA22: Free Football Streaming Website. Discover the ultimate destination for Free Football Streaming - FZBOLA22. Enjoy live matches from top competitions like the Premier League, Bundesliga, La Liga, Serie A, Liga 1, Liga 2, and more, all at no cost. Our platform ensures a stable and fast streaming experience, eliminating the need for expensive streaming fees. With FZBOLA22, you can watch your favorite football matches without any additional charges. So, what are you waiting for? Access FZBOLA22 now and start streaming your favorite football matches online for free.
          </span>
          <br/><br/>
          <LinksBtm/>
          <br/><br/>
          <strong>&gt; </strong>
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
        </section>
        <div className={styles.spacefoot}>
          <div className={styles.footc}>
            <Link
              href="//www.dmca.com/Protection/Status.aspx?ID=d7b69eba-408b-4068-a05d-c171bc21406d"
              title="DMCA.com Protection Status"
              className="dmca-badge"
            >
              <Image
                className={styles.footc}
                src="https://images.dmca.com/Badges/dmca_protected_sml_120p.png?ID=d7b69eba-408b-4068-a05d-c171bc21406d"
                alt="DMCA.com Protection Status"
                width={101}
                height={23}
                priority={true}
              />
            </Link>
            <div className={styles.footx}>
              <Link
                href="https://transparencyreport.google.com/safe-browsing/search?url=https://fzbola22.online"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="/assets/img/google-safe-badge.png"
                  alt="Google Safe Badge FZBOLA22"
                  width={81}
                  height={26}
                  priority={true}
                />
              </Link>
            </div>
          </div>
          </div>
          <div className={styles.footer}>
            <span>Copyright © 2024 FZBOLA22</span>
            <div className={styles.footcount}>
            <img
                className={styles.footcount}
                src="https://www.easycounter.com/counter.php?fzbola22"
                alt="Visitor-Counter"
                width={78}
                height={17}
                loading="lazy"
              />
            </div>
          </div>
      </footer>
    </>
  );
};

export default Footer