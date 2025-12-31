'use client';

import Link from 'next/link';
import styles from './Hero.module.css';
import { useEffect, useRef } from 'react';

const Hero = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  return (
    <section ref={sectionRef} className={styles.hero}>
      <div className={styles.container1}>
        <div className={styles.container2}>
          
          <div className={styles.content}>
          <h1 className={styles.title} style={{margin:'0px'}}>AI-Driven </h1>
            <h1 className={styles.title}>
              <span className={styles.orangehighlight}>Digital Marketing</span> to{' '}
              <span className={styles.highlight}>Build</span>{' '}
              <span className={styles.orangehighlight}>Strong Brands</span>
            </h1>

            <p className={styles.description}>
              Expert Digital Marketing, Branding, and Social Media Marketing solutions built for measurable growth.
            </p>

            <div className={styles.actions}>
              <Link href="/contact" className="btn btn-primary">
                Free Marketing Audit
              </Link>
              <Link href="/courses/digital-marketing" className="btn btn-outline">
                Access Free Demo
              </Link>
            </div>
          </div>

          <div className={styles.imageWrapper}>
            <img
              src="/Hero_images_planner/image-1.png"
              alt="Digital Marketing Growth"
              className={styles.heroImage}
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
