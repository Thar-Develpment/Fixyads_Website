'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import styles from './HowWeWorkSection.module.css';

const steps = [
  {
    num: '01',
    title: 'Understand',
    body: 'We begin with a deep exploration of your business objectives, audience behavior, market dynamics, and existing digital gaps. This research-led approach gives us a strategic understanding of your opportunities and challenges.',
  },
  {
    num: '02',
    title: 'Strategize',
    body: 'Our focus is to craft a clear and purposeful roadmap for sustainable digital growth. Based on these insights, we design a digital marketing plan aligned with your brand vision and commercial goals.',
  },
  {
    num: '03',
    title: 'Deliver Results',
    body: 'We bring the strategy to life through precise execution and continuous performance tracking. Every action is refined to maximize impact and deliver measurable, long-term results.',
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
            <span className={styles.eyebrow}>{"// Our Process"}</span>
            <h2 className={styles.title}>How We Work</h2>
            <p className={styles.subtitle}>
              A clear, repeatable process that turns your business goals into digital marketing results — 
              every single time.
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
