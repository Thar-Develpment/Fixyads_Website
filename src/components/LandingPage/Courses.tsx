'use client';

import React from 'react';
import Link from 'next/link';
import { Code2, Megaphone, Palette, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import styles from './Courses.module.css';

const courses = [
  {
    icon: <Code2 size={26} />,
    label: 'Web Development',
    duration: '16 Weeks Program',
    description:
      'Master front-end and back-end technologies — HTML, CSS, JavaScript, React, Next.js, and Node.js — to build real-world applications.',
    features: [
      'HTML & CSS Fundamentals',
      'React & Next.js Frameworks',
      'Node.js & RESTful APIs',
      'Database & Deployment',
    ],
    href: '/courses/web-development',
    accent: '#f4521e',
    glow: 'rgba(244,82,30,0.18)',
    bg: 'rgba(244,82,30,0.06)',
  },
  {
    icon: <Megaphone size={26} />,
    label: 'Digital Marketing',
    duration: '12 Weeks Program',
    description:
      'Master SEO, Google Ads, Meta campaign strategies, content marketing, and web analytics to drive measurable business growth.',
    features: [
      'SEO & Search Strategy',
      'Google & Meta Ad Campaigns',
      'Email & Content Marketing',
      'Web Analytics & Reporting',
    ],
    href: '/courses/digital-marketing',
    accent: '#2563eb',
    glow: 'rgba(37,99,235,0.18)',
    bg: 'rgba(37,99,235,0.06)',
  },
  {
    icon: <Palette size={26} />,
    label: 'UI/UX Design',
    duration: '10 Weeks Program',
    description:
      'Master the complete UI/UX process, from user research and wireframes to interactive prototypes and modern interface design with Figma.',
    features: [
      'User Research & UX Process',
      'Wireframing & Prototyping',
      'Figma & UI Interface Design',
      'Portfolio-Ready Projects',
    ],
    href: '/courses/ui-ux-design',
    accent: '#8b5cf6',
    glow: 'rgba(139,92,246,0.18)',
    bg: 'rgba(139,92,246,0.06)',
  },
];

const highlights = [
  { value: '500+', label: 'Students Trained' },
  { value: '100%', label: 'Practical Training' },
  { value: 'Live', label: 'Industry Projects' },
  { value: 'Career', label: 'Placement Support' },
];

const Courses = () => {
  return (
    <section className={styles.section}>
      {/* Background ambient lighting */}
      <div className={styles.orbLeft} />
      <div className={styles.orbRight} />

      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.eyebrow}>
            <Sparkles size={14} className={styles.eyebrowIcon} />
            Career Programs & Training
          </span>
          <h2 className={styles.title}>Courses We Provide</h2>
          <p className={styles.subtitle}>
            Practical, industry-aligned programs designed to turn beginners into confident professionals
            — with hands-on live projects and expert mentorship every step of the way.
          </p>
        </div>

        {/* 3-Column Courses Grid */}
        <div className={styles.courseGrid}>
          {courses.map((course) => (
            <div
              key={course.label}
              className={styles.courseCard}
              style={
                {
                  '--card-accent': course.accent,
                  '--card-glow': course.glow,
                  '--card-bg': course.bg,
                } as React.CSSProperties
              }
            >
              {/* Glass sheen & accent line */}
              <div className={styles.cardShine} />
              <div className={styles.cardAccentBar} />

              {/* Top row: Icon + Duration badge */}
              <div className={styles.cardHeader}>
                <div className={styles.iconWrap}>{course.icon}</div>
                <span className={styles.durationBadge}>{course.duration}</span>
              </div>

              {/* Title & Description */}
              <h3 className={styles.courseTitle}>{course.label}</h3>
              <p className={styles.courseDesc}>{course.description}</p>

              {/* Feature Checklist */}
              <ul className={styles.featureList}>
                {course.features.map((feature) => (
                  <li key={feature} className={styles.featureItem}>
                    <CheckCircle2 size={16} color={course.accent} style={{ flexShrink: 0 }} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Action Link / Button */}
              <div className={styles.cardFooter}>
                <Link href={course.href} className={styles.enrollBtn}>
                  <span>Enroll Now</span>
                  <ArrowRight size={16} className={styles.btnArrow} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust/Highlights Bar */}
        {/* <div className={styles.trustBar}>
          {highlights.map((item, idx) => (
            <React.Fragment key={item.label}>
              {idx > 0 && <div className={styles.trustDivider} />}
              <div className={styles.trustItem}>
                <span className={styles.trustValue}>{item.value}</span>
                <span className={styles.trustLabel}>{item.label}</span>
              </div>
            </React.Fragment>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default Courses;