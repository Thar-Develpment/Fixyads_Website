import type { Metadata } from "next";
import styles from "../Services.module.css";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Social Media Marketing Services | Grow Your Brand Online",
  description:
    "Professional social media marketing services to increase brand awareness, engagement, and sales across Instagram, Facebook, LinkedIn, and more.",
  keywords: [
    "social media marketing",
    "SMM services",
    "instagram marketing",
    "facebook ads",
    "linkedin marketing",
    "brand growth",
  ],
};

export default function SocialMediaMarketingPage() {
  return (
    <>
      {/* Hero Section with Image */}
      <section className={styles.smmHero}>
        <div className={styles.smmHeroGrid}>
          <div className={styles.smmHeroContent}>
            <h1>Social Media Marketing That Builds Brands</h1>
            <p>
              Engage your audience, grow your followers, and turn social media
              into a powerful revenue channel with data-driven strategies.
            </p>
            <Link href="/contact" className='btn btn-primary'>
              Get Free Strategy Call
            </Link>
          </div>

          {/* Image */}
          <div className={styles.smmHeroImage}>
            <Image
              src="/services/smm.png"
              alt="Social media marketing dashboard and engagement"
              fill
              priority
            />
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>
            Our Social Media Marketing Services
          </h2>

          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>Social Media Strategy</h3>
              <p>
                Platform-specific strategies aligned with your business goals,
                audience research, and content planning.
              </p>
            </div>

            <div className={styles.card}>
              <h3>Content Creation</h3>
              <p>
                High-quality posts, reels, stories, captions, and creatives
                designed to maximize engagement.
              </p>
            </div>

            <div className={styles.card}>
              <h3>Paid Social Ads</h3>
              <p>
                High-performing ad campaigns on Instagram, Facebook, and
                LinkedIn to generate leads and sales.
              </p>
            </div>

            <div className={styles.card}>
              <h3>Community Management</h3>
              <p>
                Comment moderation, DM handling, audience interaction, and brand
                reputation management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className={styles.altSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>
            Our Social Media Marketing Process
          </h2>

          <ol className={styles.processList}>
            <li>Brand & Audience Research</li>
            <li>Content & Campaign Planning</li>
            <li>Creative Production & Scheduling</li>
            <li>Ads Optimization & Scaling</li>
            <li>Analytics, Reporting & Growth</li>
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
          <h2>Ready to Grow on Social Media?</h2>
          <p>
            Let our social media experts turn your followers into loyal
            customers.
          </p>
          <Link href="/contact" className='btn btn-secondary' style={{marginTop: '35px'}}>
            Talk to a Social Media Expert
          </Link>
        </div>
      </section>
    </>
  );
}
