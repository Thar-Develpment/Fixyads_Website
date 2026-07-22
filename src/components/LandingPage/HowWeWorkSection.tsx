'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import styles from './HowWeWorkSection.module.css';

const steps = [
  {
    num: '01',
    title: 'Discover & Analyze',
    body: 'Every successful strategy starts with a clear understanding of your business. We evaluate your industry, competitors, customer journey, digital presence, and market opportunities to identify the best path for improving online visibility and attracting potential customers',
  },
  {
    num: '02',
    title: 'Plan & Execute',
    body: 'Using these insights, we develop a customized digital marketing strategy aligned with your business objectives. We select the right channels, create targeted campaigns, and deliver meaningful customer experiences that increase engagement, qualified leads, and conversions.',
  },
  {
    num: '03',
    title: 'Measure & Optimize',
    body: 'Digital marketing is an ongoing process. We continuously monitor campaign performance, analyze customer behaviour, and refine strategies to improve marketing efficiency, strengthen your online presence, and support long-term business growth.',
  },
];

const HowWeWorkSection = () => {
  return (
    <section className={styles.section}>
      {/* ── ATMOSPHERE: grid + glow mesh ── */}
      <div className={styles.bgStack}>
        <div className={styles.bgColorOverlay}></div>
        <div className={styles.bgGrid}></div>
        <div className={styles.glowBlobA}></div>
        <div className={styles.glowBlobB}></div>
      </div>
      <div className={styles.container}>

        {/* Restructured Template Header */}
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            {/* <span className={styles.eyebrow}>{"// Our Process"}</span> */}
            <h2 className={styles.title}>How We Work</h2>
            <p className={styles.subtitle}>
              Every business is different, and so is its path to growth. Our structured digital marketing process combines market insights, customer understanding, and continuous optimization to build meaningful online experiences that strengthen your brand, attract potential customers, and support long-term business success. 
            </p>
          </div>
          <div className={styles.headerRight}>
            <Link href="/contact" className={styles.ctaBtn}>
              <span>Let&apos;s Collaborate</span>
              <ArrowRight size={16} className={styles.btnArrow} />
            </Link>
          </div>
        </div>

        {/* Horizontal Steps Grid */}
        <div className={styles.stepsGrid}>
          {steps.map((step, idx) => (
            <div key={idx} className={styles.step}>
              <div className={styles.circle}>{step.num}</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepBody}>{step.body}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowWeWorkSection;
