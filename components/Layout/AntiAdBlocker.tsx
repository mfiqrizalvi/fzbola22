'use client';
import React, { useState, useEffect } from "react";
import { useDetectAdBlock } from "adblock-detect-react";
import Link from "next/link";
import styles from "./AntiAdBlocker.module.css";

const AntiAdBlocker = () => {
  const adBlockDetected = useDetectAdBlock();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (adBlockDetected) {
      setShowPopup(true);
    }
  }, [adBlockDetected]);

  const handleRefreshPage = () => {
    window.location.reload();
  };

  return (
    <div className={styles.popupContainer} style={{ display: showPopup ? "block" : "none" }}  data-nosnippet>
      <div className={styles.popup}>
        <h2>Ad Block Detected</h2>
        <span className={styles.justifytext}>
          Please disable your Ad Blocker to support our website. Adverts help us keep this site running. So, we would appreciate it if you disable your Ad Blocker and refresh the page.
        </span>
        <div className={styles.button}>
        <Link href={'#'} className="button" onClick={handleRefreshPage}>
          Refresh Page
        </Link>
        </div>
      </div>
    </div>
  );
};

export default AntiAdBlocker;