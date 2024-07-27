import BottomBannerAds from "./BottomBannerAds";
import Image from "next/image";
import styles from './Component.module.css'

export default function ChatRoom() {
  return (
    <>
    <div className={styles.iklan2}>
        <BottomBannerAds />
      </div>
    <div className={styles.menuh1}>
        <span>
          <Image
            className={styles.iconh}
            src="/assets/img/chat.png"
            alt="Live Match"
            width={14}
            height={14}
            priority
          />
          {' '}
          CHAT ROOM
        </span>
      </div>
      <div className={styles.onmatchbox}>
        <iframe
          src="https://www5.cbox.ws/box/?boxid=951772&boxtag=Y2o7NK"
          width="100%"
          height={250}
          allow="autoplay"
          frameBorder={0}
          marginHeight={0}
          marginWidth={0}
          scrolling="auto"
        />
      </div>
    </>
  );
}
