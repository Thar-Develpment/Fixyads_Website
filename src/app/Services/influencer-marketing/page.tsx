import type { Metadata } from "next";
import styles from "../Services.module.css";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Influencer Marketing Services | Build Trust & Drive Sales",
  description:
    "Strategic influencer marketing campaigns to increase brand trust, reach the right audience, and drive real conversions.",
  keywords: [
    "influencer marketing",
    "creator marketing",
    "brand collaborations",
    "instagram influencers",
    "youtube influencers",
  ],
};

export default function InfluencerMarketingPage() {
  return (
    <>
      {/* Hero Section – Different Style */}
      <section className={styles.influencerHero}>
        <div className={styles.influencerGrid}>
          <div className={styles.influencerContent}>
            <h1>Influencer Marketing That Feels Authentic</h1>
            <p>
              Collaborate with trusted creators to amplify your brand message
              and connect with audiences that truly care.
            </p>
            <Link href="/contact" className={styles.primaryBtn}>
              Launch a Campaign
            </Link>
          </div>

          {/* Influencer Images */}
          <div className={styles.influencerImages}>
            <div className={styles.influencerImage}>
              <Image
                src="/services/influencer1.png"
                alt="Influencer campaign"
                fill
              />
            </div>
            <div className={styles.influencerImage}>
              <Image
                src="/services/influencer3.png"
                alt="Brand collaboration"
                fill
              />
            </div>
            <div className={styles.influencerImage}>
              <Image
                src="/services/influencer2.png"
                alt="Content creator marketing"
                fill
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>
            Our Influencer Marketing Services
          </h2>

          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>Influencer Discovery</h3>
              <p>
                Finding the right creators based on niche, audience, reach, and
                authenticity.
              </p>
            </div>

            <div className={styles.card}>
              <h3>Campaign Strategy</h3>
              <p>
                Campaign planning aligned with your brand goals and KPIs.
              </p>
            </div>

            <div className={styles.card}>
              <h3>Creator Collaborations</h3>
              <p>
                Managing influencer partnerships, contracts, and deliverables.
              </p>
            </div>

            <div className={styles.card}>
              <h3>Tracking & Reporting</h3>
              <p>
                Performance analysis, ROI tracking, and detailed reporting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className={styles.altSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>
            Our Influencer Marketing Process
          </h2>

          <ol className={styles.processList}>
            <li>Brand Alignment & Goal Setting</li>
            <li>Influencer Shortlisting</li>
            <li>Campaign Execution</li>
            <li>Content Publishing & Engagement</li>
            <li>Analytics & Optimization</li>
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <h2>Ready to Work With Influencers?</h2>
          <p>
            Let us connect your brand with creators who truly influence buying
            decisions.
          </p>
          <Link href="/contact" className={styles.secondaryBtn}>
            Talk to Our Team
          </Link>
        </div>
      </section>
    </>
  );
}
