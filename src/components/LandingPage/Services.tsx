'use client';

import React from 'react';
import Link from 'next/link';
import { Search, Mail, Share2, Palette, TrendingUp, Code, ArrowUpRight } from 'lucide-react';
import styles from './Services.module.css';

const serviceData = [
  {
    title: 'Search Engine Optimization',
    description: 'Our AI-powered Search Engine Optimization (SEO) services combine technical SEO, on-page SEO, keyword research, search intent analysis, content optimization, local SEO, link building, and SEO audits to improve search visibility, increase organic traffic, strengthen website authority, and generate high-quality leads.',
    IconEl: Search,
    accent: '#60a5fa',
    glow: 'rgba(96,165,250,0.18)',
    link: '/services/search-engine-optimization',
  },
  {
    title: 'Social Media Marketing',
    description: 'Build meaningful connections with your target audience through social media marketing. We create engaging campaigns that improve brand visibility, increase customer engagement, drive qualified website traffic, and generate high-quality leads to support long-term business growth.',
    IconEl: Share2,
    accent: '#34d399',
    glow: 'rgba(52,211,153,0.18)',
    link: '/services/social-media-marketing',
  },
  {
    title: 'Content Marketing Services',
    description: 'Turn ideas into valuable content that helps your audience discover, understand, and trust your business. We create engaging website content, blogs, landing pages, and marketing copy that attracts potential customers, improves user experience, and increases customer enquiries.',
    IconEl: Palette,
    accent: '#f59e0b',
    glow: 'rgba(245,158,11,0.18)',
    link: '/services/content-marketing-services',
  },
  {
    title: 'Influencer Marketing',
    description: 'Collaborate with trusted influencers who genuinely represent your brand. Increase brand visibility, build customer trust, expand your market reach, and turn authentic recommendations into qualified leads and sales.',
    IconEl: TrendingUp,
    accent: '#c084fc',
    glow: 'rgba(192,132,252,0.18)',
    link: '/services/influencer-marketing',
  },
  {
    title: 'Email Marketing',
    description: 'Build stronger customer relationships with personalized email campaigns. Share relevant updates, nurture potential customers, encourage repeat purchases, and improve customer retention through timely communication.',
    IconEl: Mail,
    accent: '#fb923c',
    glow: 'rgba(251,146,60,0.18)',
    link: '/contact',
  },
  {
    title: 'Website Development',
    description: 'Create a fast, responsive, and user-friendly website that reflects your brand. Improve website performance, deliver a better user experience, and convert more visitors into enquiries, leads, and customers.',
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
              Scale Your Online Presence with{' '}
              <span className={styles.titleAccent}>Military Grade Digital</span>{' '}
              Marketing Services
            </h2>
            <p className={styles.subtitle}>
              We help startups, SMEs, and enterprises build a stronger digital presence, increase organic and paid traffic, improve lead quality, boost conversion rates, and achieve long-term business growth through digital marketing services.
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