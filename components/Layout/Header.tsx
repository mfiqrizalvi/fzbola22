import Link from "next/link";
import dynamic from "next/dynamic";
import styles from './Component.module.css'

const ImageWithDynamicImport = dynamic(() => import("next/image"), {
  ssr: false,
});

export default function Header() {
  return (
    <header>
      <div className={styles.header}>
        <div className={styles.headerlogo}>
          <Link href="/" title="FZBOLA22 - Football Live Stream For Free">
            <ImageWithDynamicImport
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
