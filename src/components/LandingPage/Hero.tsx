'use client';

import React from 'react';
import Link from 'next/link';
import {
  Star,
  ArrowUpRight,
  Play,
  Sparkle,
  ChevronDown,
  TrendingUp,
  Users,
  Target,
  Rocket,
} from 'lucide-react';
import CampaignPulse from './Campaignpulse';
import styles from './Hero.module.css';

const Hero = () => {
  const scrollToNext = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <section className={styles.hero}>
      {/* ── ATMOSPHERE: grid + glow mesh ── */}
      <div className={styles.bgStack}>
        <div className={styles.bgColorOverlay}></div>
        <div className={styles.bgGrid}></div>
        <div className={styles.glowBlobA}></div>
        <div className={styles.glowBlobB}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.heroGrid}>

          {/* ── LEFT COLUMN: CONTENT ── */}
          <div className={styles.leftCol}>

            {/* <div className={styles.ratingBlock}>
              <div className={styles.stars}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className={styles.starIcon} />
                ))}
              </div>
              <span className={styles.ratingText}>
                5.0 Rating <span className={styles.ratingMuted}>· 500+ Happy Clients</span>
              </span>
            </div> */}

            <h1 className={styles.title}>
              AI-Based <span className={styles.titleAccent}>Digital </span>
               Marketing Company
            </h1>

            <div className={styles.descWrapper}>
              <p className={styles.description}>
                We are the best digital marketing company providing 
                affordable services to boost online visibility, generate 
                high-quality leads, and increase revenue.
              </p>
            </div>

            <div className={styles.actions}>
              <Link href="/contact" className={styles.primaryBtn}>
                <Sparkle size={18} className={styles.primaryIcon} />
                <span>Get Free Audit</span>
                <ArrowUpRight size={18} className={styles.primaryArrow} />
              </Link>

              <Link href="/services" className={styles.playBtn}>
                <span className={styles.playText}>View Services</span>
                <ArrowUpRight size={25} className={styles.primaryArrow}/>
              </Link>
            </div>

            {/* <div className={styles.statsRow}>
              <div className={styles.statCol}>
                <span className={styles.statNumber}>25M+</span>
                <span className={styles.statLabel}>Impressions Generated</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.statCol}>
                <span className={styles.statNumber}>150+</span>
                <span className={styles.statLabel}>Successful Campaigns</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.statCol}>
                <span className={styles.statNumber}>98%</span>
                <span className={styles.statLabel}>Client Retention Rate</span>
              </div>
            </div> */}

          </div>

          {/* ── RIGHT COLUMN: LIVE DASHBOARD MOCK ── */}
          {/* <div className={styles.rightCol}>
            <div className={styles.dashboardMock}>

              <div className={styles.panel}>
                <div className={styles.panelHeader}>
                  <span className={styles.panelLabel}>
                    <span className={styles.liveDot}></span>
                    Live Performance
                  </span>
                  <span className={styles.panelChange}>+182%</span>
                </div>

                <div className={styles.growthChart}>
                  <svg
                    viewBox="0 0 360 140"
                    className={styles.growthSvg}
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.35" />
                        <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
                      </linearGradient>
                      <linearGradient id="lineStroke" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="var(--signal)" />
                        <stop offset="100%" stopColor="var(--accent)" />
                      </linearGradient>
                    </defs>

                    <path
                      d="M0,120 C40,108 60,92 90,96 C120,100 140,70 170,64 C200,58 220,36 250,30 C280,24 310,14 340,8 L360,4 L360,140 L0,140 Z"
                      fill="url(#areaFill)"
                      className={styles.growthArea}
                    />

                    <path
                      d="M0,120 C40,108 60,92 90,96 C120,100 140,70 170,64 C200,58 220,36 250,30 C280,24 310,14 340,8"
                      fill="none"
                      stroke="url(#lineStroke)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      className={styles.growthLine}
                    />

                    <circle cx="0" cy="120" r="4" className={styles.growthDot} style={{ animationDelay: '0.4s' }} />
                    <circle cx="90" cy="96" r="4" className={styles.growthDot} style={{ animationDelay: '0.7s' }} />
                    <circle cx="170" cy="64" r="4" className={styles.growthDot} style={{ animationDelay: '1s' }} />
                    <circle cx="250" cy="30" r="4" className={styles.growthDot} style={{ animationDelay: '1.3s' }} />
                  </svg>

                  <div className={styles.rocketWrap}>
                    <Rocket size={16} className={styles.rocketIcon} />
                  </div>
                </div>

                <div className={styles.panelFooter}>
                  <span>Jan</span>
                  <span>Feb</span>
                  <span>Mar</span>
                  <span>Apr</span>
                  <span>May</span>
                  <span>Jun</span>
                </div>
              </div>

              <div className={`${styles.badge} ${styles.badgeTraffic}`}>
                <span className={styles.badgeIconTraffic}>
                  <TrendingUp size={14} />
                </span>
                Traffic +180%
              </div>

              <div className={`${styles.badge} ${styles.badgeLeads}`}>
                <span className={styles.badgeIconLeads}>
                  <Users size={14} />
                </span>
                Leads +240%
              </div>

              <div className={`${styles.badge} ${styles.badgeRoi}`}>
                <span className={styles.badgeIconRoi}>
                  <Target size={14} />
                </span>
                ROI 4.2x
              </div>

            </div>
          </div> */}

          <div className={styles.rightCol}>
            <CampaignPulse />
          </div>

        </div>
      </div>

      {/* ── BOTTOM FADE ── */}
      <div className={styles.bottomFade}>
        <div className={styles.bottomLine}></div>
        <button
          type="button"
          className={styles.centerChevron}
          aria-label="Scroll to next section"
          onClick={scrollToNext}
        >
          <ChevronDown size={18} />
        </button>
      </div>
    </section>
  );
};

export default Hero;