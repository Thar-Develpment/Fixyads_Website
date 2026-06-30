import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import styles from "./CoursesLanding.module.css";

export const metadata: Metadata = {
  title: "Professional Training Courses | Digital Marketing & Web Development",
  description:
    "Hands-on courses in digital marketing, full-stack web development, and placement support. Live projects, mentorship, and career-focused training at Fixyads.",
  alternates: { canonical: "/courses" },
  openGraph: {
    title: "Professional Training Courses | Fixyads",
    description:
      "Practical digital marketing and web development programs with real projects and placement guidance.",
    url: "/courses",
    type: "website",
  },
};

const courses = [
  {
    title: "Digital Marketing",
    href: "/courses/digital-marketing",
    duration: "12 Weeks Program",
    status: "Live Training",
    body: "SEO, paid media, social, analytics, and conversion optimization with live campaigns and industry certifications.",
    skills: ["SEO Audit", "Paid Media", "Google Ads", "Web Analytics"]
  },
  {
    title: "Web Development",
    href: "/courses/web-development",
    duration: "16 Weeks Program",
    status: "Live Training",
    body: "HTML, CSS, JavaScript, React, Next.js, APIs, databases, and hosting—built around portfolio-ready real-world projects.",
    skills: ["React & Next.js", "JavaScript ES6", "APIs & Databases", "Hosting & CI/CD"]
  },
  {
    title: "Placement Support",
    href: "/courses/placement-support",
    duration: "Lifetime Support",
    status: "Career Assist",
    body: "Resume and portfolio reviews, mock interviews, referral directories, and structured guidance toward your first corporate role.",
    skills: ["Resume Building", "Portfolio Audits", "Mock Interviews", "Referral Access"]
  },
];

export default function CoursesIndexPage() {
  return (
    <>
      {/* ── Academy Dark Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroOrb1} />
        <div className={styles.heroOrb2} />
        <div className={styles.heroGrid} />
        <div className={styles.heroInner}>
          <span className={styles.heroEyebrow}>{"// Career Programs & Academics"}</span>
          <h1 className={styles.heroTitle}>
            Industry-Led <span>Training Programs</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Choose a professional track designed to match today&apos;s job market. Every program blends instructor-led lectures, practical assignments, and feedback so you graduate with real-world skills employers recognize.
          </p>

          <div className={styles.heroStats}>
            <div className={styles.heroStat}>
              <span className={styles.heroStatNum}>500+</span>
              <span className={styles.heroStatLabel}>Students Trained</span>
            </div>
            <div className={styles.heroStatDivider} />
            <div className={styles.heroStat}>
              <span className={styles.heroStatNum}>100%</span>
              <span className={styles.heroStatLabel}>Career Assistance</span>
            </div>
            <div className={styles.heroStatDivider} />
            <div className={styles.heroStat}>
              <span className={styles.heroStatNum}>Live Projects</span>
              <span className={styles.heroStatLabel}>Real Experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Courses Directory ── */}
      <section className={styles.pageBody}>
        <div className={styles.gridContainer}>
          <div className={styles.grid}>
            {courses.map((c) => (
              <Link key={c.href} href={c.href} className={styles.card}>
                
                {/* Card Top Row */}
                <div className={styles.cardTop}>
                  <span className={styles.durationBadge}>{c.duration}</span>
                  <div className={styles.tagGroup}>
                    <span className={styles.tagDot} />
                    <span>{c.status}</span>
                  </div>
                </div>

                <h2 className={styles.cardTitle}>{c.title}</h2>
                <p className={styles.cardDesc}>{c.body}</p>
                
                {/* Skills tags */}
                <div className={styles.skillsGroup}>
                  {c.skills.map((item, i) => (
                    <span key={i} className={styles.skillBadge}>{item}</span>
                  ))}
                </div>

                <div className={styles.cardAction}>
                  <span>Explore Curriculum</span>
                  <span className={styles.cardActionArrow}>
                    <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Admissions Advisory CTA Block ── */}
      <section className="container mb-8">
        <div className={styles.ctaBlock}>
          <div className={styles.ctaOrb} />
          <div className={styles.ctaInner}>
            <span className={styles.ctaEyebrow}>{"// Need Career Counseling?"}</span>
            <h2 className={styles.ctaTitle}>Talk with Our Academic Advisors</h2>
            <p className={styles.ctaText}>
              Not sure which track fits your career goals? Schedule a free consulting session with our mentors to map out your digital marketing or web engineering roadmap.
            </p>
            <Link href="/contact" className={styles.ctaBtn}>
              <span>Get Free Consultation</span>
              <ArrowRight size={16} className={styles.ctaArrow} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
