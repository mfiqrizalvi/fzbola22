'use client';
import Link from "next/link";
import Image from "next/image"; 
import styles from './Component.module.css'
import News from "./News";

const Footer = () => {
  return (
    <>
      <footer>
        <News />
        <div className={styles.menu1}>
        <h1>FZBOLA22 - Football Live Stream For Free</h1>
      </div>
        <section className={styles.desc}>
          <span>
          FZBOLA22 - Situs Streaming Bola Terbaik dan Terpercaya - Streaming Sepak Bola Gratis untuk penggemar sepak bola yang ingin menonton liga-liga top dunia, turnamen besar, dan liga lokal Indonesia. Situs ini mudah digunakan tanpa registrasi dan 100% gratis. Untuk mempertahankan kualitas dan ketersediaan konten, bantuan dari teman-teman melalui donasi atau klik iklan sangat diperlukan agar kami tetap semangat dalam melakukan update dan perawatan setiap harinya.
          </span>
        </section>
        <header className={styles.menu1}>
          <h2>FZBOLA22 - Streaming Bola Gratis</h2>
        </header>

        <section className={styles.desc}>
          <span>
            FZBOLA22 menawarkan streaming bola gratis untuk kompetisi top seperti Premier League, Bundesliga, La Liga, Serie A, Liga 1, Liga 2, dan lain-lain. Anda dapat menonton pertandingan favorit Anda secara online tanpa biaya. Situs ini menawarkan pengalaman streaming yang stabil dan cepat.
            Dengan FZBOLA22, Anda tidak perlu khawatir tentang biaya streaming yang mahal. Situs ini menawarkan streaming bola secara gratis, sehingga Anda dapat menonton pertandingan bola favorit Anda tanpa harus mengeluarkan biaya tambahan. Jadi, tunggu apa lagi? Akses FZBOLA22 sekarang dan mulai menonton pertandingan bola favorit Anda secara online dan gratis.
          </span>
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
              />
            </div>
          </div>
      </footer>
    </>
  );
};

export default Footer