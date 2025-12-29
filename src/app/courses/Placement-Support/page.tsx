import styles from "../Courses.module.css";
import Link from "next/link";

export default function PlacementSupport() {
  return (
    <>
      <section className={styles.courseHero}>
        <div className={styles.courseHeroGrid}>
          <div>
            <h1>Placement Support</h1>
            <p>
              We don’t just teach skills — we help you land your first job with
              structured placement support.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Get Career Guidance
            </Link>
          </div>
        </div>
      </section>

      <div className={styles.courseHighlights}>
        <div className={styles.highlight}>
          <h3>Resume</h3>
          <p>Building</p>
        </div>
        <div className={styles.highlight}>
          <h3>Mock</h3>
          <p>Interviews</p>
        </div>
        <div className={styles.highlight}>
          <h3>Live</h3>
          <p>Projects</p>
        </div>
        <div className={styles.highlight}>
          <h3>Hiring</h3>
          <p>Support</p>
        </div>
      </div>

      <section className={styles.curriculum}>
        <h2 style={{color:'#119c90'}}>What You’ll Learn</h2>

        <div className={styles.curriculumGrid}>
          <div className={styles.curriculumItem}>
            <span>✓</span>
            <p>Resume & Portfolio Building</p>
          </div>
          <div className={styles.curriculumItem}>
            <span>✓</span>
            <p>Interview Preparation</p>
          </div>
          <div className={styles.curriculumItem}>
            <span>✓</span>
            <p>Mock Interviews</p>
          </div>
          <div className={styles.curriculumItem}>
            <span>✓</span>
            <p>Job Referrals</p>
          </div>
          <div className={styles.curriculumItem}>
            <span>✓</span>
            <p>Career Mentorship</p>
          </div>
        </div>
        <div className="text-center" style={{ marginTop: '3rem',}}>
          <Link href="/contact" className="btn btn-primary">Contact us</Link>
        </div>
      </section>
    </>
  );
}
