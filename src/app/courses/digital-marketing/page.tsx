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
            <Link href="/contact" className="btn btn-primary">
              Enroll Now
            </Link>
          </div>

          <div className={styles.courseHeroImage}>
            <Image
              src="/Courses/Digital-marketing.png"
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
    </>
  );
}
