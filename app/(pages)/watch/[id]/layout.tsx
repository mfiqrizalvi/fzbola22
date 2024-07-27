'use client'
import React from "react";
import AntiAdBlocker from "@/components/Layout/AntiAdBlocker";
import { useDetectAdBlock } from "adblock-detect-react";
import FloatingAds from "@/components/Layout/FloatingAds";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const adBlockDetected = useDetectAdBlock();

  if (adBlockDetected) {
    return (
      <>
        <AntiAdBlocker />
        <div className="onmatch" style={{padding:'7em' }} >
        <center>
          <video width={20} height={20} autoPlay loop muted playsInline>
              <source src="/assets/img/loading.webm" type="video/webm" />
            </video>
          </center>
        </div>
      </>
    );
  }

  return (
    <>
      <AntiAdBlocker />
      <FloatingAds/>
      {children}
    </>
  );
}