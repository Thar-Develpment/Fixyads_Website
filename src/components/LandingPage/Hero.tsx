'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Play, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './Hero.module.css';

const slides = [
  {
    eyebrow: "Digital Marketing & SEO",
    title: (
      <>
        Digital Marketing <br />
        & SEO Specialists
      </>
    ),
    description: "We help ambitious brands rank #1 and drive organic customers through data-driven search engine optimization, premium performance marketing, and compounding digital authority.",
    bgImage: "/Hero_images_planner/seo-slide-01.avif",
    bgImageMobile: "/Hero_images_planner/seo-slide-01-mobile.avif",
    ctaText: "Get Started Today",
    ctaLink: "/contact",
    watchVideo: true,
    isLight: true // Mark this slide as light theme (white background)
  },
  {
    eyebrow: "Sleek & Premium Web Development",
    title: (
      <>
        Next-Gen Web Design <br />
        & Fast Development
      </>
    ),
    description: "Building ultra-fast, visually stunning, and highly responsive web applications utilizing modern frameworks, premium design systems, and robust clean code built to convert.",
    bgImage: "/Hero_images_planner/web-dev-slide-02.avif",
    bgImageMobile: "/Hero_images_planner/web-dev-slide-02-mobile.avif",
    ctaText: "Build Your Website",
    ctaLink: "/services/web-development",
    watchVideo: true,
    isLight: true
  },
  {
    eyebrow: "Social Media Marketing (SMM)",
    title: (
      <>
        Grow Your Brand <br />
        & Social Authority
      </>
    ),
    description: "Supercharge your online presence and engage active audiences with high-ROI social media management, organic growth campaigns, and targeted media placement.",
    bgImage: "/Hero_images_planner/smm-slide-03.avif",
    bgImageMobile: "/Hero_images_planner/smm-slide-03-mobile.avif",
    ctaText: "Explore SMM Plans",
    ctaLink: "/services/social-media-marketing",
    watchVideo: false
  }
];

const prefersReducedMotion =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Function to start the auto-play timer
  const startTimer = () => {
    stopTimer();
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000); // 6 seconds per slide for highly natural pacing
  };

  // Function to stop the auto-play timer
  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  // Handle manual navigation to Next slide
  const handleNext = () => {
    stopTimer();
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    startTimer();
  };

  // Handle manual navigation to Prev slide
  const handlePrev = () => {
    stopTimer();
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    startTimer();
  };

  // Handle manual dot navigation
  const handleDotClick = (index: number) => {
    stopTimer();
    setCurrentSlide(index);
    startTimer();
  };

  // Initialize auto-play timer on component mount
  useEffect(() => {
    if (prefersReducedMotion) return;

    startTimer();
    return () => stopTimer();
  }, []);

  return (
    <section className={`${styles.hero} ${slides[currentSlide].isLight ? styles.heroLight : ''}`}>
      {/* ── BACKGROUND STACK (AUTO-CHANGING IMAGES WITH PREMIUM GRADIENT) ── */}
      <div className={styles.bgStack}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${styles.bgLayer} ${index === currentSlide ? styles.bgActive : ''}`}
          >
            {/* Desktop Image */}
            <Image
              src={slide.bgImage}
              fill
              priority={index === 0}
              quality={85}
              sizes="100vw"
              alt=""
              className={`${styles.heroImage} ${styles.desktopImg}`}
            />
            {/* Mobile Image */}
            <Image
              src={slide.bgImageMobile || slide.bgImage}
              fill
              priority={index === 0}
              quality={85}
              sizes="100vw"
              alt=""
              className={`${styles.heroImage} ${styles.mobileImg}`}
            />
          </div>
        ))}
        {/* Dark brand gradients to ensure exceptional contrast and readability of white text */}
        <div className={styles.gradientOverlay}></div>
        <div className={styles.vignette}></div>

        {/* ── SLIDER CONTROLS BAR (DOTS & ARROWS) NESTED INSIDE BGSTACK ── */}
        <div className={styles.controlBar}>
          <div className={styles.dotsWrap}>
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`${styles.dot} ${index === currentSlide ? styles.dotActive : ''}`}
                aria-label={`Go to slide ${index + 1}`}
              >
                <span className={styles.dotFill}></span>
              </button>
            ))}
          </div>

          <div className={styles.counter}>
            <span className={styles.counterCurrent}>0{currentSlide + 1}</span>
            <span className={styles.counterSep}>/</span>
            <span className={styles.counterTotal}>0{slides.length}</span>
          </div>

          <div className={styles.arrows}>
            <button
              onClick={handlePrev}
              className={styles.arrowBtn}
              aria-label="Previous slide"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              className={styles.arrowBtn}
              aria-label="Next slide"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        {/* ── CONTENT OVERLAY CARD ── */}
        <div className={styles.leftCol}>
          {/* Slide Eyebrow / Award Badge */}
          <div className={styles.awardBadge}>
            <span className={styles.badgeDot}></span>
            <span className={styles.badgeText}>
              {slides[currentSlide].eyebrow}
            </span>
          </div>

          {/* Slide Title */}
          <div className={styles.titleContainer}>
            {slides.map((slide, index) => (
              <h1
                key={index}
                className={`${styles.title} ${index === currentSlide ? styles.titleActive : styles.titleHidden}`}
              >
                {slide.title}
              </h1>
            ))}
          </div>

          {/* Slide Description */}
          <div className={styles.descContainer}>
            {slides.map((slide, index) => (
              <p
                key={index}
                className={`${styles.description} ${index === currentSlide ? styles.descActive : styles.descHidden}`}
              >
                {slide.description}
              </p>
            ))}
          </div>

          {/* Slide Actions / Buttons */}
          <div className={styles.actions}>
            <Link href={slides[currentSlide].ctaLink} className={styles.primaryButton}>
              {slides[currentSlide].ctaText}
            </Link>

            {slides[currentSlide].watchVideo && (
              <Link href="/about" className={styles.ghostButton}>
                <div className={styles.playCircle}>
                  <Play size={14} className={styles.playIcon} />
                </div>
                <span className={styles.ghostText}>Watch Video</span>
              </Link>
            )}
          </div>

          {/* Universal Trust Bar (Remains stable at the bottom to prevent visual jumping) */}
          <div className={styles.trustBar}>
            <div className={styles.ratingBlock}>
              <div className={styles.stars}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className={styles.starIcon} />
                ))}
              </div>
              <span className={styles.ratingText}>
                4.8/5 <span className={styles.ratingMuted}>by Customer Reviews</span>
              </span>
            </div>

            <div className={styles.teamBlock}>
              <div className={styles.teamAvatars}>
                {['Tham', 'aruna', 'praveen', 'selva'].map((img, i) => (
                  <div key={i} className={styles.teamAvatar}>
                    <img
                      src={`/Team/${img}.png`}
                      alt="Team Member"
                      className={styles.teamAvatarImg}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://i.pravatar.cc/100?img=${i + 10}`;
                      }}
                    />
                  </div>
                ))}
              </div>
              <div className={styles.teamInfo}>
                <span className={styles.teamLabel}>Team Members</span>
                <span className={styles.teamValue}>Active Experts</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
