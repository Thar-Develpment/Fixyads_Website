'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  // ✅ Mobile-only dropdown toggle
  const toggleDropdown = (name: string) => {
    if (window.innerWidth > 768) return;
    setOpenDropdown(openDropdown === name ? null : name);
  };

  // ✅ Close menu & dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.navContainer} ref={navRef}>

        {/* LOGO */}
        <Link href="/" onClick={() => setMenuOpen(false)}>
          <img
            src="/Logo/HeadLogo.png"
            alt="FixyAds Logo"
            className={styles.logoImage}
          />
        </Link>

        {/* NAV LINKS */}
        <nav className={`${styles.navLinks} ${menuOpen ? styles.active : ''}`}>

          <Link
            href="/"
            className={styles.navLink}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>

          {/* SERVICES */}
          <div
            className={`${styles.dropdown} ${
              openDropdown === 'services' ? styles.open : ''
            }`}
          >
            <span
              className={styles.navLink}
              onClick={() => toggleDropdown('services')}
            >
              Services ▾
            </span>

            <div className={styles.dropdownMenu}>
              <Link href="/Services/search-engine-optimization">SEO</Link>
              <Link href="/Services/social-media-marketing">SMM</Link>
              <Link href="/Services/content-branding">Content & Branding</Link>
              <Link href="/Services/web-development">Web Development</Link>
              <Link href="/Services/influencer-marketing">Influencer Marketing</Link>
            </div>
          </div>

          {/* COURSES */}
          <div
            className={`${styles.dropdown} ${
              openDropdown === 'courses' ? styles.open : ''
            }`}
          >
            <span
              className={styles.navLink}
              onClick={() => toggleDropdown('courses')}
            >
              Courses ▾
            </span>

            <div className={styles.dropdownMenu}>
              <Link href="/courses/digital-marketing">Digital Marketing</Link>
              <Link href="/courses/web-development">Web Development</Link>
              <Link href="/courses/Placement-Support">Placement Support</Link>
            </div>
          </div>

          <Link
            href="/about"
            className={styles.navLink}
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>

          <Link
            href="/contact"
            className="btn btn-primary"
            onClick={() => setMenuOpen(false)}
          >
            Get Free Audit
          </Link>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          className={styles.mobileMenuBtn}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
