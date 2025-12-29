import styles from "../Courses.module.css";
import Image from "next/image";
import Link from "next/link";

export default function DigitalMarketingCourse() {
  return (
    <>
      <section className={styles.courseHero}>
        <div className={styles.courseHeroGrid}>
          <div>
            <h1>Digital Marketing Course</h1>
            <p>
              Master SEO, Social Media, Ads & Analytics with live projects and
              real-world training.
            </p>
            <Link href="/contact" className="primaryBtn">
              Enroll Now
            </Link>
          </div>

          <div className={styles.courseHeroImage}>
            <Image
              src="/courses/Digital-marketing.png"
              alt="Digital Marketing Course"
              fill
            />
          </div>
        </div>
      </section>

      <div className={styles.courseHighlights}>
        <div className={styles.highlight}>
          <h3>12+</h3>
          <p>Modules</p>
        </div>
        <div className={styles.highlight}>
          <h3>6+</h3>
          <p>Live Projects</p>
        </div>
        <div className={styles.highlight}>
          <h3>3</h3>
          <p>Certifications</p>
        </div>
        <div className={styles.highlight}>
          <h3>100%</h3>
          <p>Practical Training</p>
        </div>
      </div>

      <section className={styles.curriculum}>
        <h2 className="sectionTitle">What You’ll Learn</h2>
        <ul className={styles.curriculumList}>
          <li>SEO & Content Marketing</li>
          <li>Google Ads & Meta Ads</li>
          <li>Social Media Marketing</li>
          <li>Email & Automation</li>
          <li>Analytics & Conversion Optimization</li>
        </ul>
      </section>
    </>
  );
}
