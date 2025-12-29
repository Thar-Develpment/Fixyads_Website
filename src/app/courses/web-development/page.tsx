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
            <Link href="/contact" className="btn btn-primary">
              Start Learning
            </Link>
          </div>

          <div className={styles.courseHeroImage}>
            <Image
              src="/Courses/web-development.png"
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
        <h2 style={{color:'#119c90'}}>What You’ll Learn</h2>

        <div className={styles.curriculumGrid}>
          <div className={styles.curriculumItem}>
            <span>✓</span>
            <p>HTML, CSS, JavaScript</p>
          </div>
          <div className={styles.curriculumItem}>
            <span>✓</span>
            <p>React & Next.js</p>
          </div>
          <div className={styles.curriculumItem}>
            <span>✓</span>
            <p>Backend with Node / APIs</p>
          </div>
          <div className={styles.curriculumItem}>
            <span>✓</span>
            <p>Database & Auth</p>
          </div>
          <div className={styles.curriculumItem}>
            <span>✓</span>
            <p>Deployment & Performance</p>
          </div>
        </div>
        <div className="text-center" style={{ marginTop: '3rem',}}>
          <Link href="/contact" className="btn btn-primary">Contact us</Link>
        </div>
      </section>
    </>
  );
}
