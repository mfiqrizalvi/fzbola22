import styles from "./Component.module.css"
import BottomBannerAds from "./BottomBannerAds";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <>
        <div className={styles.menu404}>
        <h2>PAGE NOT FOUND</h2>
        <p>It looks like nothing was found at this location.</p>
        <Link href="/"><b>BACK TO HOME</b></Link>
    </div>
    <div
          className={styles.iklan1}
          style={{
            marginTop: "-2px",
            borderTop: "none",
         }}
        >
          <BottomBannerAds />
        </div>
    </>
  );
};

export default NotFoundPage