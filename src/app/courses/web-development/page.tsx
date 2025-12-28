import styles from "../Courses.module.css";
import Image from "next/image";
import Link from "next/link";

export default function WebDevelopmentCourse() {
  return (
    <>
      <section className={styles.courseHero}>
        <div className={styles.courseHeroGrid}>
          <div>
            <h1>Web Development Course</h1>
            <p>
              Become a full-stack developer by building real websites and
              applications from scratch.
            </p>
            <Link href="/contact" className="primaryBtn">
              Start Learning
            </Link>
          </div>

          <div className={styles.courseHeroImage}>
            <Image
              src="/courses/web-development.png"
              alt="Web Development Course"
              fill
            />
          </div>
        </div>
      </section>

      <div className={styles.courseHighlights}>
        <div className={styles.highlight}>
          <h3>HTML → React</h3>
          <p>Frontend</p>
        </div>
        <div className={styles.highlight}>
          <h3>Node</h3>
          <p>Backend</p>
        </div>
        <div className={styles.highlight}>
          <h3>5+</h3>
          <p>Projects</p>
        </div>
        <div className={styles.highlight}>
          <h3>Job</h3>
          <p>Focused</p>
        </div>
      </div>

      <section className={styles.curriculum}>
        <h2 className="sectionTitle">Curriculum Overview</h2>
        <ul className={styles.curriculumList}>
          <li>HTML, CSS, JavaScript</li>
          <li>React & Next.js</li>
          <li>Backend with Node / APIs</li>
          <li>Database & Auth</li>
          <li>Deployment & Performance</li>
        </ul>
      </section>
    </>
  );
}
