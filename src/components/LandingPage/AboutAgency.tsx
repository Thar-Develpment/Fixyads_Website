'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ThumbsUp, Heart } from 'lucide-react';
import styles from './AboutAgency.module.css';

const AboutAgency = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* Left: Model with floaters */}
        <div className={styles.imageCol}>
          <div className={styles.bgRing}></div>
          <div className={styles.bgRingInner}></div>

          <div className={styles.modelWrapper}>
            <Image
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&auto=format&fit=crop&q=80"
              alt="FixyAds Agency Director"
              className={styles.modelImage}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />

            {/* Floater 1: Blue Thumbs Up */}
            <div className={styles.floaterLeft}>
              <span className={styles.floaterLeftIcon}><ThumbsUp size={14} /></span>
              <span className={styles.floaterLeftVal}>450+</span>
            </div>

            {/* Floater 2: Orange Heart */}
            <div className={styles.floaterTopRight}>
              <span className={styles.floaterRightIcon}><Heart size={14} /></span>
              <span className={styles.floaterRightVal}>150+</span>
            </div>

            {/* Floater 3: Top Rated */}
            <div className={styles.floaterBottom}>
              <div className={styles.floaterBottomIcon}>✦</div>
              <div className={styles.floaterBottomInfo}>
                <span className={styles.floaterBottomLabel}>Top Rated</span>
                <span className={styles.floaterBottomValue}>#1 Worldwide</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Content */}
        <div className={styles.contentCol}>
          <span className={styles.eyebrow}>Who We Are</span>
          <h2 className={styles.title}>
            Top #1 Marketing <br />Agency in the World
          </h2>
          <p className={styles.body}>
            FixyAds is a premier full-service digital marketing agency. We build bespoke client partnerships 
            to maximize conversion opportunities, boost technical brand authority, and design award-winning 
            websites that drive tangible results.
          </p>
          <p className={styles.body}>
            Through keyword integration, custom social growth plans, and optimized paid media campaigns, 
            our teams unlock compounding return on investment that helps businesses outperform their competition.
          </p>
          <Link href="/about" className={styles.btn}>
            Learn More
          </Link>
        </div>

      </div>
    </section>
  );
};

export default AboutAgency;
