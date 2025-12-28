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
            <Link href="/contact" className="primaryBtn">
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
        <h2 className="sectionTitle">Placement Assistance Includes</h2>
        <ul className={styles.curriculumList}>
          <li>Resume & Portfolio Building</li>
          <li>Interview Preparation</li>
          <li>Mock Interviews</li>
          <li>Job Referrals</li>
          <li>Career Mentorship</li>
        </ul>
      </section>
    </>
  );
}
