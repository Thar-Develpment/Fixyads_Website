'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import styles from './Testimonials.module.css';

const feedbackList = [
  {
    name: 'Mark Parker',
    role: 'CEO, Nexvyon',
    text: 'FixyAds completely transformed our search engine presence. Their keyword execution and link strategies helped us climb to the #1 spot, increasing organic traffic by over 200%. Highly recommended!',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
  },
  {
    name: 'Sarah Jenkins',
    role: 'Marketing Director, Tahrshop',
    text: 'Working with FixyAds has been a revelation for our social channels. We launched multi-channel SMM campaigns that drove outstanding user engagements and thousands of qualified conversions.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80',
  },
  {
    name: 'Tham Selva',
    role: 'Co-Founder, Koothan Group',
    text: 'The absolute best in website design and paid media performance! They developed a fast custom website and coupled it with ROI-focused PPC ads that lowered our client acquisition cost by 40%.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
  },
];

const Testimonials = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Left: Stacked Cards */}
        <div className={styles.stackCol}>
          {feedbackList.map((item, idx) => (
            <div
              key={idx}
              className={styles.card}
              style={{ 
                marginTop: idx > 0 ? '-60px' : '0',
                marginLeft: idx === 1 ? '32px' : '0',
                zIndex: feedbackList.length - idx,
                position: 'relative',
              }}
            >
              <p className={styles.cardText}>&quot;{item.text}&quot;</p>
              <div className={styles.cardProfile}>
                <div className={styles.cardAvatar}>
                  <img src={item.avatar} alt={item.name} className={styles.cardAvatarImg} />
                </div>
                <div className={styles.cardProfileInfo}>
                  <span className={styles.cardName}>{item.name}</span>
                  <span className={styles.cardRole}>{item.role}</span>
                </div>
              </div>
              <span className={styles.quoteGlyph}>&quot;</span>
            </div>
          ))}
        </div>

        {/* Right: Content */}
        <div className={styles.contentCol}>
          <span className={styles.eyebrow}>Testimonials</span>
          <h2 className={styles.title}>
            Client&apos;s Feedback
          </h2>
          <p className={styles.body}>
            At FixyAds, client satisfaction and direct performance transparency are our top objectives. 
            We are incredibly honored to cooperate with hundreds of businesses globally to scale their 
            digital solutions and grow their revenue.
          </p>

          <div className={styles.statsRow}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>450+</span>
              <span className={styles.statLabel}>Client Feedbacks</span>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.statItem}>
              <span className={styles.statNumberYellow}>4.9★</span>
              <span className={styles.statLabel}>Average Rating</span>
            </div>
          </div>

          <Link href="/contact" className={styles.btn}>
            <span>Get in Touch</span>
            <ArrowRight size={16} className={styles.btnArrow} />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
