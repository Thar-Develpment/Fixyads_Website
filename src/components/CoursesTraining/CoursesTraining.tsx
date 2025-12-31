import styles from "./CoursesTraining.module.css";
import { FaBullhorn, FaCode, FaBriefcase } from "react-icons/fa";

const courses = [
  {
    title: "Digital Marketing",
    description: "Hands-on digital marketing course covering SEO, social media marketing, Google Ads, analytics tools, live projects, and real-world strategies.",
    icon: <FaBullhorn />,
  },
  {
    title: "Web Development",
    description: "Practical website development training using HTML, CSS, JavaScript, CMS platforms, responsive design, SEO practices, and performance optimization.",
    icon: <FaCode />,
  },
  {
    title: "Placement Support",
    description: "Placement support with resume building, interview preparation, portfolio guidance, mock interviews, and career assistance tools.",
    icon: <FaBriefcase />,
  },
];

export default function CoursesTraining() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Courses & Training</h2>
        <p className={styles.subheading}>
          Learn digital skills with practical, job-ready training
        </p>

        <div className={styles.cards}>
          {courses.map((course, index) => (
            <div key={index} className={styles.card}>
              <div >
                <div className={styles.icon}>{course.icon}</div>
                <div>
                  <h3 className={styles.cardTitle}>{course.title}</h3>
                  <p className={styles.cardText}>{course.description}</p>
                </div>
              </div>
              <button className={styles.cardBtn}>View Details</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
