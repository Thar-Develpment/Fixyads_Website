import Link from 'next/link';
import { ArrowRight, PhoneCall, Star } from 'lucide-react';
import styles from './Newsletter.module.css';

const CtaSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* Dark Navy Card */}
        <div className={styles.card}>
          {/* Ambient background decoration (inside card) */}
          <div className={styles.orbLeft} />
          <div className={styles.orbRight} />
          <div className={styles.gridOverlay} />

          {/* Trust Badge Row */}
          <div className={styles.trustRow}>
            <div className={styles.trustBadge}>
              <div className={styles.stars}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} fill="currentColor" />
                ))}
              </div>
              <span className={styles.trustText}>Trusted by 450+ businesses globally</span>
            </div>
          </div>

          {/* Headline */}
          <h2 className={styles.title}>
            Ready to Scale Your{' '}
            <span className={styles.titleAccent}>Digital Growth?</span>
          </h2>

          {/* Subtext */}
          <p className={styles.subtitle}>
            Grow your business with digital marketing services designed to attract the right audience, generate quality leads, and maximize ROI.
          </p>

          {/* CTA Buttons */}
          <div className={styles.btnRow}>
            <Link href="/contact" className={styles.primaryBtn}>
              <span>Get a Free Strategy Call</span>
              <ArrowRight size={16} className={styles.btnArrow} />
            </Link>
            <Link href="/services" className={styles.secondaryBtn}>
              <PhoneCall size={14} />
              <span>Explore Our Services</span>
            </Link>
          </div>

          {/* Bottom Trust Strip */}
          <div className={styles.trustStrip}>
            <div className={styles.stripItem}>
              <span className={styles.stripDot} />
              No long-term contracts
            </div>
            <div className={styles.stripDivider} />
            <div className={styles.stripItem}>
              <span className={styles.stripDot} />
              Results in 30 days
            </div>
            <div className={styles.stripDivider} />
            <div className={styles.stripItem}>
              <span className={styles.stripDot} />
              Dedicated account manager
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CtaSection;
