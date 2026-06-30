'use client';

import React from 'react';
import Link from 'next/link';
import { Code2, Megaphone, CheckCircle2 } from 'lucide-react';
import styles from './Courses.module.css';

const courses = [
  {
    icon: <Code2 size={28} />,
    label: 'Web Development',
    description:
      'Master front-end and back-end technologies — HTML, CSS, JavaScript, React, Node.js and more — to build real-world, production-ready web applications.',
    features: ['HTML & CSS Fundamentals', 'React & Next.js', 'Node.js & REST APIs', 'Database & Deployment'],
    href: '/courses/web-development',
    accent: 'var(--accent)',
    bg: 'rgba(244,82,30,0.07)',
    glow: 'rgba(244,82,30,0.18)',
  },
  {
    icon: <Megaphone size={28} />,
    label: 'Digital Marketing',
    description:
      'Learn SEO, paid ads, social media strategy, email campaigns, and analytics to drive growth and maximize ROI for any business.',
    features: ['SEO & Content Strategy', 'Google & Meta Ads', 'Email Marketing', 'Analytics & Reporting'],
    href: '/courses/digital-marketing',
    accent: '#0B1C3D',
    bg: 'rgba(11,28,61,0.06)',
    glow: 'rgba(11,28,61,0.18)',
  },
];

const MissionGoal = () => {
  return (
    <section className={styles.section}>
      <div className={styles.coursesContainer}>
        {/* Left Column: Title, Subtitle, and Image */}
        <div className={styles.leftColumn}>
          <div className={styles.coursesHeader}>
            <span className={styles.eyebrow}>
              <span className={styles.eyebrowDot} />
              What We Teach
            </span>
            <h2 className={styles.title}>Courses We Provide</h2>
            <p className={styles.body}>
              Practical, industry-aligned programs designed to turn beginners into confident professionals
              — with hands-on projects and expert mentorship every step of the way.
            </p>
          </div>

          <div className={styles.imageWrap}>
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&auto=format&fit=crop&q=80"
              alt="Professional training environment"
              className={styles.courseImage}
            />
          </div>
        </div>

        {/* Right Column: Course cards */}
        <div className={styles.rightColumn}>
          <div className={styles.courseGrid}>
            {courses.map((course) => (
              <Link
                key={course.label}
                href={course.href}
                className={styles.courseCard}
                style={{
                  '--card-accent': course.accent,
                  '--card-glow': course.glow,
                } as React.CSSProperties}
              >
                {/* Glass shine streak */}
                <div className={styles.cardShine} />

                {/* Top accent line */}
                <div className={styles.cardAccentBar} />

                {/* Left Side Content */}
                <div className={styles.cardLeft}>
                  {/* Icon */}
                  <div className={styles.courseIconWrap}>
                    {course.icon}
                  </div>

                  {/* Content info */}
                  <div className={styles.cardContent}>
                    <h3 className={styles.courseTitle}>{course.label}</h3>
                    <p className={styles.courseDesc}>{course.description}</p>

                    {/* Features */}
                    <ul className={styles.featureList}>
                      {course.features.map((f) => (
                        <li key={f} className={styles.featureItem}>
                          <CheckCircle2 size={15} color={course.accent} style={{ flexShrink: 0, marginTop: 2 }} />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Side Button */}
                <div className={styles.cardRight}>
                  <span className="btn btn-primary">
                    Enroll Now
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionGoal;