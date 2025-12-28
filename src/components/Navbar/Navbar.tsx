import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
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

        <nav className={styles.navLinks}>
          <Link href="/" className={styles.navLink}>Home</Link>

          {/* Services Dropdown */}
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

          {/* Courses Dropdown */}
          <div className={styles.dropdown}>
            <span className={styles.navLink}>Courses ▾</span>
            <div className={styles.dropdownMenu}>
              <Link href="/courses/digital-marketing">Digital Marketing</Link>
              <Link href="/courses/web-development">Web Development</Link>
              <Link href="/courses/Placement-Support">Placement Support</Link>
            </div>
          </div>

          <Link href="/about" className={styles.navLink}>About</Link>
        </nav>

        <nav>
          <Link href="/contact" className="btn btn-primary">
            Get Free Audit
          </Link>
        </nav>

        <button className={styles.mobileMenuBtn} aria-label="Menu">
          ☰
        </button>
      </div>
    </header>
  );
};

export default Navbar;
