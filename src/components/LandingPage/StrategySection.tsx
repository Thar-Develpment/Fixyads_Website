'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import styles from './StrategySection.module.css';

const StrategySection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Left: Content */}
        <div className={styles.contentCol}>
          <h2 className={styles.title}>
            Receive a <span className={styles.highlight}>Free Digital Marketing Strategy</span>
          </h2>
          <p className={styles.body}>
            In today&apos;s digital era, countless agencies compete for attention. At{' '}
            <strong className={styles.strongText}>FixyAds</strong>, we stand out as true{' '}
            <strong className={styles.strongText}>game changers</strong>. We craft a fully customized
            strategy tailored specifically for your business goals. Speak with our experts today and
            unlock your complimentary growth roadmap.
          </p>

          <Link href="/contact" className="btn btn-primary">
            <span>Get Free Strategy</span>
            <ArrowRight size={16} className={styles.btnArrow} />
          </Link>
        </div>

        {/* Right: Image */}
        <div className={styles.imageCol}>
          <div className={styles.imageCard}>
            <Image
              src="/strategy.png"
              alt="Don't be a game player, be the game changer"
              className={styles.image}
              width={600}
              height={500}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategySection;
