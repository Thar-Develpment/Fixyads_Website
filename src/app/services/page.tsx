import Link from "next/link";
import { ArrowRight, Code, Search, Share2, FileText, Users } from "lucide-react";
import styles from "./Services.module.css";

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Digital Marketing & Web Services | Fixyads",
  description:
    "Explore Fixyads services: web development, SEO, social media marketing, content and branding, and influencer campaigns—built for measurable growth.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Digital Marketing & Web Services | Fixyads",
    description:
      "End-to-end digital services from technical SEO and performance web builds to social, content, and creator partnerships.",
    url: "/services",
    type: "website",
  },
};

const services = [
  {
    title: "Web Development",
    link: "/services/web-development",
    icon: <Code size={24} />,
    desc: "We build fast, responsive, and scalable websites tailored to your business needs, ensuring seamless user experience, modern design, strong performance, and optimized structure to support growth and conversions.",
    deliverables: ["Next.js & React", "High Performance", "SEO Ready", "Responsive Layouts"]
  },
  {
    title: "Search Engine Optimization",
    link: "/services/search-engine-optimization",
    icon: <Search size={24} />,
    desc: "Our SEO services improve search rankings through keyword research, on-page optimization, technical fixes, and quality backlinks, helping your website attract organic traffic, increase visibility, and generate consistent leads.",
    deliverables: ["On-page Optimization", "Technical Audits", "Authority Backlinks", "Local SEO Maps"]
  },
  {
    title: "Social Media Marketing",
    link: "/services/social-media-marketing",
    icon: <Share2 size={24} />,
    desc: "We manage social media platforms to grow your brand, engage audiences, and drive traffic through strategic content, targeted campaigns, consistent posting, and performance tracking for better reach and conversions.",
    deliverables: ["Paid Ad Campaigns", "Content Strategy", "Brand Engagement", "ROI Reporting"]
  },
  {
    title: "Content Branding",
    link: "/services/content-branding",
    icon: <FileText size={24} />,
    desc: "We create valuable, engaging content that attracts and retains your audience, improves SEO performance, builds brand authority, and drives conversions through blogs, articles, and strategic content planning.",
    deliverables: ["Content Copywriting", "High-Value Blogs", "Brand Positioning", "Market Placement"]
  },
  {
    title: "Influencer Marketing",
    link: "/services/influencer-marketing",
    icon: <Users size={24} />,
    desc: "We connect your brand with relevant influencers to promote products authentically, increase trust, reach targeted audiences, and boost engagement through strategic collaborations, campaigns, and measurable performance results.",
    deliverables: ["Creator Matchmaking", "Campaign Operations", "UGC Asset Creation", "ROI Attribution"]
  },
];

const steps = [
  {
    num: "01",
    title: "Audit & Discovery",
    desc: "We analyze your digital presence, examine your competitors, and find hidden traffic and revenue gaps."
  },
  {
    num: "02",
    title: "Strategy Mapping",
    desc: "We build a customized, objective-led action plan aligned directly with your business goals."
  },
  {
    num: "03",
    title: "Launch & Execution",
    desc: "Our specialists launch high-performance web development and creative search/social campaigns."
  },
  {
    num: "04",
    title: "Scale & Optimize",
    desc: "We track performance metrics in real-time, refining campaigns daily to maximize your growth ROI."
  }
];

export default function ServicesPage() {
  return (
    <>
      {/* ── Glowing Hero Header ── */}
      <section className={styles.hero}>
        <div className={styles.heroOrb1} />
        <div className={styles.heroOrb2} />
        <div className={styles.heroGrid} />
        <div className={styles.heroInner}>
          <span className={styles.heroEyebrow}>{"// Specialized Agency Solutions"}</span>
          <h1 className={styles.heroTitle}>
            Engineered for <span>Measurable Growth</span>
          </h1>
          <p className={styles.heroSubtitle}>
            We deploy focused, data-driven digital strategies and premium web builds designed to capture high-intent audiences and convert them into revenue.
          </p>

          <div className={styles.heroStats}>
            <div className={styles.heroStat}>
              <span className={styles.heroStatNum}>100+</span>
              <span className={styles.heroStatLabel}>Brands Scaled</span>
            </div>
            <div className={styles.heroStatDivider} />
            <div className={styles.heroStat}>
              <span className={styles.heroStatNum}>5x</span>
              <span className={styles.heroStatLabel}>Avg Growth ROI</span>
            </div>
            <div className={styles.heroStatDivider} />
            <div className={styles.heroStat}>
              <span className={styles.heroStatNum}>Top Rated</span>
              <span className={styles.heroStatLabel}>Agency Partner</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services Directory ── */}
      <section className={styles.pageBody}>
        <div className={styles.gridContainer}>
          <div className={styles.grid}>
            {services.map((service, index) => (
              <Link key={index} href={service.link} className={styles.card}>
                <div className={styles.iconBox}>
                  {service.icon}
                </div>
                <h2 className={styles.cardTitle}>{service.title}</h2>
                <p className={styles.cardDesc}>{service.desc}</p>
                
                {/* Deliverables tags */}
                <div className={styles.deliverableList}>
                  {service.deliverables.map((item, i) => (
                    <span key={i} className={styles.tag}>{item}</span>
                  ))}
                </div>

                <div className={styles.cardAction}>
                  <span>Explore Program</span>
                  <span className={styles.cardActionArrow}>
                    <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Result Driven Process Strip ── */}
      <section className={styles.processStrip}>
        <div className={styles.processInner}>
          <div className={styles.processHeader}>
            <span className={styles.processEyebrow}>{"// How We Deliver Success"}</span>
            <h2 className={styles.processTitle}>Our Battle-Tested Spacing Execution Path</h2>
          </div>

          <div className={styles.processGrid}>
            {steps.map((step, index) => (
              <div key={index} className={styles.processStep}>
                <span className={styles.stepNum}>{step.num}</span>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Consultation CTA Block ── */}
      <section className="container mb-8">
        <div className={styles.ctaBlock}>
          <div className={styles.ctaOrb} />
          <div className={styles.ctaInner}>
            <span className={styles.ctaEyebrow}>{"// Ready to Scale Your Brand?"}</span>
            <h2 className={styles.ctaTitle}>Get a Free Growth Consultation Call</h2>
            <p className={styles.ctaText}>
              We build custom digital marketing strategies and high-converting web applications that align precisely with your business goals and drive real, sustainable growth.
            </p>
            <Link href="/contact" className={styles.ctaBtn}>
              <span>Schedule Strategy Session</span>
              <ArrowRight size={16} className={styles.ctaArrow} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}