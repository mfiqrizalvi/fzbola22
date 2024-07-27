import styles from '@/components/Layout/Component.module.css'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - FZBOLA22",
  openGraph: {
    title: "Terms of Service - FZBOLA22",
    description:
      "FZBOLA22 is a FREE live football streaming site, featuring Premiere League, Bundesliga, La Liga, Serie A, BRI Liga 1, Liga 2, and More TOP Competitions.",
    url: "https://fzbola22.online/terms-of-service",
    siteName: "FZBOLA22",
    images: "https://fzbola22.online/assets/img/opengraph-image.jpg",
    type: "website",
  },
  alternates: {
    canonical: "https://fzbola22.online/terms-of-service",
  }
};

export default function Home() {
  
  return (
      <div className={styles.descpp}>
      <h1>FZBOLA22 - Free Football Live Stream Terms of Service</h1>
        <h2>Introduction</h2>
          <p>FZBOLA22 is a free live football streaming site that provides access to various top football competitions, including the Premiere League, Bundesliga, La Liga, Serie A, BRI Liga 1, Liga 2, and more. This Terms of Service outlines the rules and guidelines for using our site.</p>
        <h2>1. Acceptance of Terms</h2>
          <p>By accessing or using our site, you agree to be bound by these Terms of Service. If you do not agree to these Terms, you must not use our site.</p>
        <h2>2. Use of the Service</h2>
          <h3>2.1. General Use</h3>
            <ul>
              <li>
                <strong>Streaming</strong>: You may use our site to stream live football matches for personal, non-commercial use.
              </li>
              <li>
                <strong>Content</strong>: You agree not to upload, share, or distribute any content that infringes on anyone else’s rights.
              </li>
            </ul>
          <h3>2.2. Restrictions</h3>
            <ul>
              <li>
                <strong>Advertising</strong>: You may not sell any advertising, sponsorships, or promotions on our site or on any page that only contains content from our site.
              </li>
              <li>
                <strong>Contests</strong>: You may not run contests on our site that do not comply with our contest policies and guidelines.
              </li>
              <li>
                <strong>Misuse</strong>: You may not use our site to distribute unsolicited promotional or commercial content, or to cause inaccurate measurements of genuine user engagement.
              </li>
            </ul>
          <h3>2.3. Security</h3>
            <ul>
              <li>
                <strong>Encryption</strong>: We use encryption to protect user data during transmission.
              </li>
              <li>
                <strong>Data Storage</strong>: We store user data securely on our servers, with access restricted to authorized personnel.
              </li>
            </ul>
          <h3>2.4. Changes to the Service</h3>
            <ul>
              <li>
                <strong>Updates</strong>: We reserve the right to update the Service at any time. Changes will be effective immediately upon posting.
              </li>
            </ul>
        <h2>3. User Conduct</h2>
          <h3>3.1. Responsibility</h3>
            <ul>
              <li>
                <strong>Account Suspension</strong>: We may suspend or terminate your account if you violate these Terms of Service.
              </li>
            </ul>
          <h3>3.2. Conduct</h3>
            <ul>
              <li>
                <strong>Respectful Behavior</strong>: You agree to use our site in a respectful and lawful manner.
              </li>
            </ul>
          <h3>3.3. Reporting Issues</h3>
            <ul>
              <li>
                <strong>Reporting</strong> Please contact us at <a href="mailto:fzbola22@gmail.com">fzbola22@gmail.com</a>.
              </li>
            </ul>
        <h2>4. Intellectual Property</h2>
          <h3>4.1. Ownership</h3>
            <ul>
              <li>
                <strong>Content</strong>: All content on our site is owned by FZBOLA22 or its licensors.
              </li>
            </ul>
          <h3>4.2. Use Restrictions</h3>
            <ul>
              <li>
                <strong>Unauthorized Use</strong>: You may not use our site or any content from our site for any purpose that is unlawful or prohibited by these Terms.
              </li>
            </ul>
        <h2>5. Indemnification</h2>
          <h3>5.1. Liability</h3>
            <ul>
              <li>
                <strong>Indemnification</strong>: You agree to defend, indemnify, and hold harmless FZBOLA22 and its officers, directors, employees, consultants, affiliates, subsidiaries, and agents from and against any and all claims, liabilities, damages, losses, and expenses, including reasonable attorneys&apos; fees and costs, arising out of or in any way connected with your use of our site.
              </li>
            </ul>
        <h2>6. Dispute Resolution</h2>
          <h3>6.1. Dispute Resolution</h3>
            <ul>
              <li>
                <strong>Dispute Resolution</strong>: Any disputes arising from these Terms will be resolved through arbitration in accordance with the rules of the relevant arbitration authority.
              </li>
            </ul>
        <h2>7. Governing Law</h2>
          <h3>7.1. Governing Law</h3>
            <ul>
              <li>
                <strong>Governing Law</strong>: These Terms will be governed by and construed in accordance with the laws of the country where our site is hosted.
              </li>
            </ul>
        <h2>8. Changes tothe Terms</h2>
          <h3>8.1. Changes</h3>
            <ul>
              <li>
                <strong>Changes</strong>: We reserve the right to update these Terms at any time. Changes will be effective immediately upon posting.
              </li>
            </ul>
        <h2>9. Contact Information</h2>
          <h3>9.1. Contact</h3>
            <ul>
              <li>
                <strong>Contact</strong>: <a href="mailto:fzbola22@gmail.com">fzbola22@gmail.com</a>.
              </li>
            </ul>
        <h2>Effective Date</h2>
          <p>These Terms of Service are effective as of June 28, 2024.</p>
      </div>
  );
}