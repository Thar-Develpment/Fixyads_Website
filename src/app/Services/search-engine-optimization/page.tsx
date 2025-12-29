import type { Metadata } from "next";
import styles from "../Services.module.css";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "SEO Services | Rank Higher & Grow Organic Traffic",
  description:
    "Professional SEO services to boost your website rankings, increase organic traffic, and drive quality leads. On-page, off-page & technical SEO.",
  keywords: [
    "SEO services",
    "search engine optimization",
    "on page seo",
    "off page seo",
    "technical seo",
    "local seo",
  ],
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section with Image */}
      <section className={styles.seoHero}>
        <div className={styles.seoHeroGrid}>
          <div className={styles.seoHeroContent}>
            <h1>SEO Services That Drive Real Growth</h1>
            <p>
              Rank higher on Google, attract quality traffic, and convert visitors
              into customers with our proven SEO strategies.
            </p>
            <Link href="/contact" className='btn primary-btn'>
              Get Free SEO Audit
            </Link>
          </div>

          {/* Image */}
          <div className={styles.seoHeroImage}>
            <Image
              src="/services/seo.png"
              alt="SEO analytics and growth dashboard"
              fill
              priority
            />
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our SEO Services</h2>

          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>On-Page SEO</h3>
              <p>
                Keyword optimization, content improvements, meta tags, internal
                linking, and UX enhancements.
              </p>
            </div>

            <div className={styles.card}>
              <h3>Technical SEO</h3>
              <p>
                Website speed, mobile optimization, crawlability, indexing,
                schema markup, and site health fixes.
              </p>
            </div>

            <div className={styles.card}>
              <h3>Off-Page SEO</h3>
              <p>
                High-quality backlinks, brand mentions, and authority building
                to improve trust and rankings.
              </p>
            </div>

            <div className={styles.card}>
              <h3>Local SEO</h3>
              <p>
                Google Business Profile optimization, local citations, and
                location-based ranking improvements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className={styles.altSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our SEO Process</h2>

          <ol className={styles.processList}>
            <li>Website & Competitor Audit</li>
            <li>Keyword Research & Strategy</li>
            <li>On-Page & Technical Optimization</li>
            <li>Link Building & Content Growth</li>
            <li>Tracking, Reporting & Scaling</li>
          </ol>
        </div>
      </section>


      <section className={styles.curriculum}>
        <h2 style={{color:'#119c90'}}>What You’ll Learn</h2>

        <div className={styles.curriculumGrid}>
          <div className={styles.curriculumItem}>
            <span>✓</span>
            <p>SEO & Content Marketing</p>
          </div>
          <div className={styles.curriculumItem}>
            <span>✓</span>
            <p>Google Ads & Meta Ads</p>
          </div>
          <div className={styles.curriculumItem}>
            <span>✓</span>
            <p>Social Media Marketing</p>
          </div>
          <div className={styles.curriculumItem}>
            <span>✓</span>
            <p>Email Marketing & Automation</p>
          </div>
          <div className={styles.curriculumItem}>
            <span>✓</span>
            <p>Analytics & Conversion Optimization</p>
          </div>
        </div>
        <div className="text-center" style={{ marginTop: '3rem',}}>
          <Link href="/contact" className="btn btn-primary">Contact us</Link>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <h2>Ready to Dominate Search Results?</h2>
          <p>
            Let our SEO experts help you grow organic traffic and increase sales.
          </p>
          <Link href="/contact" className='btn btn-secondary' style={{marginTop: '30px'}}>
            Talk to an Expert
          </Link>
        </div>
      </section>
    </>
  );
}
