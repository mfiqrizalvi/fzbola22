import styles from '@/components/Layout/Component.module.css'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - FZBOLA22",
  openGraph: {
    title: "Privacy Policy - FZBOLA22",
    description:
      "FZBOLA22 is a FREE live football streaming site, featuring Premiere League, Bundesliga, La Liga, Serie A, BRI Liga 1, Liga 2, and More TOP Competitions.",
    url: "https://fzbola22.online/privacy-policy",
    siteName: "FZBOLA22",
    images: "https://fzbola22.online/assets/img/opengraph-image.jpg",
    type: "website",
  },
  alternates: {
    canonical: "https://fzbola22.online/privacy-policy",
  }
};

export default function Home() {
  
  return (
      <div className={styles.descpp}>
        <h1>FZBOLA22 - Free Football Live Stream Privacy Policy</h1>
          <h2>Introduction</h2>
            <p>FZBOLA22 is a free live football streaming site that provides access to various top football competitions, including the Premiere League, Bundesliga, La Liga, Serie A, BRI Liga 1, Liga 2, and more. This privacy policy outlines how we collect, use, and protect the personal data of our users.</p>
            <h2>Data Collection</h2>
              <h3>1. Non-Personal Data</h3>
                <ul>
                  <li>
                    <strong>Browser Information</strong>: We collect information about the user&apos;s browser, including:
                  </li>
                  <ul>
                    <li>
                      <strong>Browser Type</strong>: The type of browser used to access our site.
                    </li>
                    <li>
                      <strong>Browser Version</strong>: The version of the browser used.
                    </li>
                    <li>
                      <strong>Operating System</strong>: The operating system used by the user.
                    </li>
                    <li>
                      <strong>IP Address</strong>: The IP address of the user&apos;s device.
                    </li>
                  </ul>
                  <li>
                    <strong>Streaming Data</strong>: We collect data related to the user&apos;s streaming activities, including:
                  </li>
                  <ul>
                    <li>
                      <strong>Streaming History</strong>: A record of the matches and competitions streamed by the user.
                    </li>
                    <li>
                      <strong>Streaming Preferences</strong>: The user&apos;s preferred streaming settings, such as video quality and audio settings.
                    </li>
                  </ul>
                </ul>
              <h3>2. Cookies</h3>
                <ul>
                  <li>
                    <strong>Session Cookies</strong>: We use session cookies to manage user sessions and to store temporary data.
                  </li>
                  <li>
                    <strong>Persistent Cookies</strong>: We use persistent cookies to store user preferences and to enhance the user experience.
                  </li>
                </ul>
            <h2>Data Use</h2>
              <h3>1. Non-Personal Data</h3>
              <ul>
                <li>
                  <strong>Site Improvement</strong>: We use non-personal data to improve the user experience, to enhance site performance, and to troubleshoot technical issues.
                </li>
                <li>
                  <strong>Advertising</strong>: We use non-personal data to display targeted advertisements and to improve the effectiveness of our advertising campaigns.
                </li>
              </ul>
            <h2>Data Protection</h2>
              <h3>1. Security Measures</h3>
              <ul>
                <li>
                  <strong>Encryption</strong>: We use encryption to protect user data during transmission.
                </li>
                <li>
                  <strong>Data Storage</strong>: We store user data securely on our servers, with access restricted to authorized personnel.
                </li>
              </ul>
              <h3>2. Data Retention</h3>
              <ul>
                <li>
                  <strong>Non-Personal Data</strong>: We retain non-personal data for a period of 12 months before it is deleted.
                </li>
              </ul>
            <h2>Changes to the Privacy Policy</h2>
              <p>We reserve the right to update this privacy policy at any time. Changes will be effective immediately upon posting. Users are responsible for regularly reviewing this policy to ensure they are aware of any changes.</p>
            <h2>Contact Information</h2>
              <p>Please contact us at <a href="mailto:fzbola22@gmail.com">fzbola22@gmail.com</a>. </p>
            <h2>Effective Date</h2>
              <p>This privacy policy is effective as of June 28, 2024.</p>
      </div>
  );
}