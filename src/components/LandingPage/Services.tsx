'use client';

import React from 'react';
import Link from 'next/link';
import { Search, Mail, Share2, Palette, TrendingUp, Code, ArrowUpRight } from 'lucide-react';
import styles from './Services.module.css';

const serviceData = [
  {
    title: 'Search Engine Optimization',
    description: 'Capture high-intent organic traffic with precision keyword strategy, technical excellence, and content that earns authority.',
    IconEl: Search,
    accent: '#60a5fa',
    glow: 'rgba(96,165,250,0.18)',
    link: '/services/search-engine-optimization',
  },
  {
    title: 'Social Media Marketing',
    description: 'Build an engaged community with platform-native formats, viral content frameworks, and paid social that converts.',
    IconEl: Share2,
    accent: '#34d399',
    glow: 'rgba(52,211,153,0.18)',
    link: '/services/social-media-marketing',
  },
  {
    title: 'Content Marketing Services',
    description: 'Create content that answers real questions, builds trust, and turns visitors into brand advocates.',
    IconEl: Palette,
    accent: '#f59e0b',
    glow: 'rgba(245,158,11,0.18)',
    link: '/services/content-marketing-services',
  },
  {
    title: 'Influencer Marketing',
    description: 'Connect with influencers who align naturally with your values — authentic collaborations that build lasting credibility.',
    IconEl: TrendingUp,
    accent: '#c084fc',
    glow: 'rgba(192,132,252,0.18)',
    link: '/services/influencer-marketing',
  },
  {
    title: 'Email Marketing',
    description: 'Segmented, personalized campaigns that nurture leads into high-lifetime-value loyal clients.',
    IconEl: Mail,
    accent: '#fb923c',
    glow: 'rgba(251,146,60,0.18)',
    link: '/contact',
  },
  {
    title: 'Website Development',
    description: 'Fast, intuitive, conversion-optimised websites built with SEO and usability baked in from day one.',
    IconEl: Code,
    accent: '#2dd4bf',
    glow: 'rgba(45,212,191,0.18)',
    link: '/services/web-development',
  },
];

const Services = () => {
  return (
    <section className={styles.section}>
      {/* Background orbs */}
      <div className={styles.orb1} />
      <div className={styles.orb2} />
      <div className={styles.orb3} />
      <div className={styles.orb4} />

      {/* Noise grain overlay */}
      <div className={styles.grain} />

      <div className={styles.container}>

        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <span className={styles.eyebrow}>
              <span className={styles.eyebrowDot} />
              What We Do
            </span>
            <h2 className={styles.title}>
              Scale Your Online Presence with
              <span className={styles.titleAccent}> Military Grade Digital </span>
              Marketing Services
            </h2>
            <p className={styles.subtitle}>
              As a results-focused digital marketing company, we deliver end-to-end digital marketing solutions designed to help businesses improve conversion rates, and achieve consistent revenue growth across competitive markets.
            </p>
          </div>
          <div className={styles.headerRight}>
            <Link href="/services" className={styles.viewAllBtn}>
              <span>View All Services</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          {serviceData.map((service, index) => {
            const Icon = service.IconEl;
            return (
              <Link
                key={index}
                href={service.link}
                className={styles.card}
                style={{
                  '--card-accent': service.accent,
                  '--card-glow': service.glow,
                } as React.CSSProperties}
              >
                {/* Glass shine streak */}
                <div className={styles.cardShine} />

                {/* Top accent line */}
                <div className={styles.cardAccentBar} />

                {/* Icon */}
                <div className={styles.iconWrap}>
                  <Icon size={20} strokeWidth={1.75} />
                </div>

                {/* Content */}
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{service.title}</h3>
                  <p className={styles.cardDescription}>{service.description}</p>
                </div>

                {/* Footer */}
                <div className={styles.cardFooter}>
                  <span className={styles.learnMore}>
                    Learn more
                    <ArrowUpRight size={14} className={styles.learnMoreArrow} />
                  </span>
                  <div className={styles.cardNumber}>0{index + 1}</div>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;