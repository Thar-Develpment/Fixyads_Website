'use client';

import Link from 'next/link';
import styles from './Navbar.module.css';
import { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo}>
          <img
            src="/Logo/HeadLogo.png"
            alt="FixyAds Digital Solutions Logo"
            className={styles.logoImage}
          />
        </Link>

        {/* NAV LINKS */}
        <nav className={`${styles.navLinks} ${menuOpen ? styles.active : ''}`}>
          <Link href="/" className={styles.navLink} onClick={() => setMenuOpen(false)}>
            Home
          </Link>

          {/* Services */}
          <div className={styles.dropdown}>
            <span className={styles.navLink}>Services ▾</span>
            <div className={styles.dropdownMenu}>
              <Link href="/Services/search-engine-optimization">SEO</Link>
              <Link href="/Services/social-media-marketing">SMM</Link>
              <Link href="/Services/content-branding">Content & Branding</Link>
              <Link href="/Services/web-development">Web Development</Link>
              <Link href="/Services/influencer-marketing">Influencer Marketing</Link>
              <Link href="/Services/Content-marketing">Content Marketing</Link>
            </div>
          </div>

          {/* Courses */}
          <div className={styles.dropdown}>
            <span className={styles.navLink}>Courses ▾</span>
            <div className={styles.dropdownMenu}>
              <Link href="/courses/digital-marketing">Digital Marketing</Link>
              <Link href="/courses/web-development">Web Development</Link>
              <Link href="/courses/Placement-Support">Placement Support</Link>
            </div>
          </div>

          <Link href="/about" className={styles.navLink} onClick={() => setMenuOpen(false)}>
            About
          </Link>

          <Link href="/contact" className="btn btn-primary">
            Get Free Audit
          </Link>
        </nav>

        {/* MOBILE BUTTON */}
        <button
          className={styles.mobileMenuBtn}
          aria-label="Menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>
    </header>
  );
};

export default Navbar;
