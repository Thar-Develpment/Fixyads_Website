import type { Metadata } from "next";
import styles from "../Services.module.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Content & Branding Services | Build a Powerful Brand Identity",
  description:
    "Strategic content and branding services to create a strong brand voice, compelling visuals, and consistent messaging that connects with your audience.",
  keywords: [
    "content marketing",
    "branding services",
    "brand identity",
    "content strategy",
    "copywriting",
    "visual branding",
  ],
};

export default function ContentBrandingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1>Content & Branding That Builds Trust</h1>
          <p>
            Create a memorable brand identity with impactful content, consistent
            messaging, and visuals that connect with your audience.
          </p>
          <Link href="/contact" className={styles.primaryBtn}>
            Get Free Brand Consultation
          </Link>
        </div>
      </section>

      {/* Services Overview */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>
            Our Content & Branding Services
          </h2>

          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>Brand Strategy</h3>
              <p>
                Defining your brand voice, positioning, messaging, and unique
                value proposition.
              </p>
            </div>

            <div className={styles.card}>
              <h3>Content Strategy</h3>
              <p>
                Data-driven content planning tailored to your audience, goals,
                and platforms.
              </p>
            </div>

            <div className={styles.card}>
              <h3>Copywriting</h3>
              <p>
                High-converting website copy, ads, blogs, and social media
                captions.
              </p>
            </div>

            <div className={styles.card}>
              <h3>Visual Branding</h3>
              <p>
                Logos, brand guidelines, creatives, and visual systems that
                ensure brand consistency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className={styles.altSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>
            Our Content & Branding Process
          </h2>

          <ol className={styles.processList}>
            <li>Brand Discovery & Research</li>
            <li>Brand Positioning & Messaging</li>
            <li>Content Planning & Creation</li>
            <li>Visual Identity Development</li>
            <li>Launch, Optimize & Scale</li>
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <h2>Ready to Build a Strong Brand?</h2>
          <p>
            Let our branding experts help you stand out and create lasting
            connections.
          </p>
          <Link href="/contact" className={styles.secondaryBtn}>
            Talk to a Branding Expert
          </Link>
        </div>
      </section>
    </>
  );
}
