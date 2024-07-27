import Link from "next/link";
import Image from "next/image";
import styles from './Component.module.css'

export default function Header() {
  return (
    <header>
      <div className={styles.header}>
        <div className={styles.headerlogo}>
          <Link href="/" title="FZBOLA22">
            <Image
              src="/assets/img/fzbola22.png"
              title="FZBOLA22"
              alt="FZBOLA22"
              width={124}
              height={35}
              priority={true}
            />
          </Link>
        </div>
      </div>
    </header>
  );
}
