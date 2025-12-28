import type { Metadata } from "next";
import styles from "../Services.module.css";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Content Marketing Services | Educate, Engage & Convert",
  description:
    "Strategic content marketing services to attract the right audience, build authority, and drive consistent organic growth.",
  keywords: [
    "content marketing",
    "blog marketing",
    "seo content",
    "content strategy",
    "lead generation content",
  ],
};

export default function ContentMarketingPage() {
  return (
    <>
      {/* Hero – Editorial Style */}
      <section className={styles.contentHero}>
        <div className={styles.contentHeroGrid}>
          <div className={styles.contentHeroContent}>
            <span className={styles.contentBadge}>Content Marketing</span>
            <h1>Content That Educates & Converts</h1>
            <p>
              We create high-quality, SEO-driven content that builds authority,
              nurtures trust, and delivers long-term growth.
            </p>
            <Link href="/contact" className={styles.primaryBtn}>
              Get Content Strategy
            </Link>
          </div>

          {/* Featured Image */}
          <div className={styles.contentHeroImage}>
            <Image
              src="/services/contentMarketing.png"
              alt="Content marketing strategy"
              fill
              priority
            />
          </div>
        </div>

        {/* Metrics */}
        <div className={styles.contentMetrics}>
          <div className={styles.metric}>
            <h3>3×</h3>
            <p>Higher Organic Traffic</p>
          </div>
          <div className={styles.metric}>
            <h3>2.5×</h3>
            <p>More Qualified Leads</p>
          </div>
          <div className={styles.metric}>
            <h3>70%</h3>
            <p>Lower Cost per Lead</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>
            Our Content Marketing Services
          </h2>

          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>Content Strategy</h3>
              <p>
                Audience research, topic planning, and content roadmaps aligned
                with business goals.
              </p>
            </div>

            <div className={styles.card}>
              <h3>SEO Content</h3>
              <p>
                Blog posts, landing pages, and pillar content optimized for
                search engines.
              </p>
            </div>

            <div className={styles.card}>
              <h3>Lead Magnets</h3>
              <p>
                Ebooks, guides, case studies, and whitepapers that convert
                visitors into leads.
              </p>
            </div>

            <div className={styles.card}>
              <h3>Content Distribution</h3>
              <p>
                Promoting content across search, email, and social channels for
                maximum reach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className={styles.altSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>
            Our Content Marketing Process
          </h2>

          <ol className={styles.processList}>
            <li>Audience & Keyword Research</li>
            <li>Content Planning & Calendar</li>
            <li>Content Creation & Optimization</li>
            <li>Publishing & Distribution</li>
            <li>Measurement & Improvement</li>
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <h2>Ready to Grow with Content?</h2>
          <p>
            Let our content experts help you attract, educate, and convert your
            audience.
          </p>
          <Link href="/contact" className={styles.secondaryBtn}>
            Talk to a Content Expert
          </Link>
        </div>
      </section>
    </>
  );
}
