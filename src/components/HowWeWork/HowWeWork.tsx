'use client';

import styles from './HowWeWork.module.css';

export default function HowWeWork() {
  return (
    <section className={styles.wrapper}>

      <div className={styles.container}>
        {/* Left Image */}
        <div>
          <h2 className={styles.title}><span style={{color: 'white'}}>How We Work</span></h2>
          <div className={styles.imageWrapper}>
            <img
              src="/Banner/banner.png"
              alt="How FixyAds works"
              className={styles.image}
            />
          </div>
        </div>


        {/* Steps */}
        <div className={styles.timeline}>
          <div className={styles.step}>
            <div className={styles.circle}>01</div>
            <div className={styles.content}>
              {/* <span className={styles.stepNo}>01</span> */}
              <h3>Understand</h3>
              <p>Understand your business goals, target audience, market trends, and digital marketing gaps through detailed research.</p>
            </div>
          </div>

          <div className={styles.step}>
            <div className={styles.circle}>02</div>
            <div className={styles.content}>
              {/* <span className={styles.stepNo}>02</span> */}
              <h3>Strategize</h3>
              <p>Strategize SEO, branding, content, and social media marketing plans tailored to your growth objectives.</p>
            </div>
          </div>

          <div className={styles.step}>
            <div className={styles.circle}>03</div>
            <div className={styles.content}>
              {/* <span className={styles.stepNo}>03</span> */}
              <h3>Deliver Results</h3>
              <p>Execute campaigns, measure performance, optimize tactics, and deliver measurable digital marketing results.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
