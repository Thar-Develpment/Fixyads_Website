'use client';

import styles from './HowWeWork.module.css';

export default function HowWeWork() {
  return (
    <section className={styles.wrapper}>

      <div className={styles.container}>
        {/* Left Image */}
        <div>
          <h2 className={styles.title}><span style={{color: 'var(--primary)'}}>How We Work</span></h2>
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
            <div className={styles.circle}>📋</div>
            <div className={styles.content}>
              <span className={styles.stepNo}>01</span>
              <h3>Research</h3>
              <p>We deeply understand your business, audience, and goals.</p>
            </div>
          </div>

          <div className={styles.step}>
            <div className={styles.circle}>♟️</div>
            <div className={styles.content}>
              <span className={styles.stepNo}>02</span>
              <h3>Strategize</h3>
              <p>Customized strategies crafted to maximize growth.</p>
            </div>
          </div>

          <div className={styles.step}>
            <div className={styles.circle}>🚀</div>
            <div className={styles.content}>
              <span className={styles.stepNo}>03</span>
              <h3>Launch & Optimize</h3>
              <p>We execute, monitor, and optimize for real results.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
