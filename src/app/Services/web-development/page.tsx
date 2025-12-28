import type { Metadata } from "next";
import styles from "../Services.module.css";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Web Development Services | High-Performance Websites & Apps",
  description:
    "Custom web development services to build fast, secure, and scalable websites using modern technologies.",
  keywords: [
    "web development",
    "website development",
    "frontend development",
    "backend development",
    "full stack development",
    "next.js development",
  ],
};

export default function WebDevelopmentPage() {
  return (
    <>
      {/* Hero Section (Different Layout) */}
      <section className={styles.webHero}>
        <div className={styles.webHeroGrid}>
          <div className={styles.webHeroContent}>
            <h1>Web Development That Powers Growth</h1>
            <p>
              We build high-performance, scalable, and user-friendly websites
              that convert visitors into customers.
            </p>
            <Link href="/contact" className={styles.primaryBtn}>
              Start Your Project
            </Link>
          </div>

          {/* Image Space */}
          <div className={styles.webHeroImage}>
            <Image
              src="/services/webdev.png"
              alt="Web Development Illustration"
              fill
              priority
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Web Development Services</h2>

          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>Frontend Development</h3>
              <p>
                Responsive, interactive interfaces using React, Next.js, and
                modern UI frameworks.
              </p>
            </div>

            <div className={styles.card}>
              <h3>Backend Development</h3>
              <p>
                Secure APIs, databases, authentication, and server-side logic
                built to scale.
              </p>
            </div>

            <div className={styles.card}>
              <h3>Full Stack Solutions</h3>
              <p>
                End-to-end development covering design, development, testing,
                and deployment.
              </p>
            </div>

            <div className={styles.card}>
              <h3>Performance & SEO</h3>
              <p>
                Fast load times, Core Web Vitals optimization, and SEO-friendly
                architecture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className={styles.altSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Development Process</h2>

          <ol className={styles.processList}>
            <li>Requirement Analysis & Planning</li>
            <li>UI/UX Design & Prototyping</li>
            <li>Development & Integration</li>
            <li>Testing & Optimization</li>
            <li>Launch, Support & Scaling</li>
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <h2>Ready to Build Something Powerful?</h2>
          <p>
            Let our developers turn your idea into a high-performing digital
            product.
          </p>
          <Link href="/contact" className={styles.secondaryBtn}>
            Talk to a Developer
          </Link>
        </div>
      </section>
    </>
  );
}
