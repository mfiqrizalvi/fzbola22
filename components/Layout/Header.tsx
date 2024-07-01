import Link from "next/link";
import Image from "next/image";
import styles from './Component.module.css'

export default function Header() {
  return (
    <header>
      <div className={styles.header}>
        <div className={styles.headerlogo}>
          <Link href="/" title="FZBOLA22 - Football Live Stream For Free">
            <Image
              src="/assets/img/fzbola22.png"
              title="FZBOLA22 - Football Live Stream For Free"
              alt="FZBOLA22 - Football Live Stream For Free"
              width={155}
              height={55}
              priority={true}
            />
          </Link>
        </div>
      </div>
    </header>
  );
}
