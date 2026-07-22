import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.column}>
                    <Image src="/Logo/Newlogo.png" alt="Fixyads Logo" width={180} height={53} style={{ objectFit: 'contain' }} />
                    <p>
                        <br></br>
                        FixyAds helps businesses build a stronger digital presence with digital marketing, website and branding solutions that support long-term growth. Alongside our business services, we offer practical Digital Marketing, Web Development, and UI/UX Design courses designed to develop industry-ready skills and career opportunities.
                    </p>
                </div>

                <div className={styles.column}>
                    <h3>Services</h3>
                    <ul className={styles.linkList}>
                        {/* <li><Link href="/services#seo">SEO Optimization</Link></li>
                        <li><Link href="/services#smm">Social Media Marketing</Link></li>
                        <li><Link href="/services#ads">Performance Marketing</Link></li>
                        <li><Link href="/services/influencer-marketing">Web Development</Link></li> */}

                        <li><Link href="/services/search-engine-optimization">SEO</Link></li>
                        <li><Link href="/services/social-media-marketing">SMM</Link></li>
                        <li><Link href="/services/content-marketing-services">Content Marketing</Link></li>
                        <li><Link href="/services/web-development">Web Development</Link></li>
                        <li><Link href="/services/influencer-marketing">Influencer Marketing</Link></li>
                    </ul>
                </div>

                <div className={styles.column}>
                    <h3>Courses</h3>
                    <ul className={styles.linkList}>
                        <li><Link href="/courses/digital-marketing">Digital Marketing Course</Link></li>
                        <li><Link href="/courses/web-development">Web Development Course</Link></li>
                        <li><Link href="/courses/placement-support">Placement Support</Link></li>

                    </ul>
                </div>

                <div className={styles.column}>
                    <h3>Contact</h3>
                    {/* <p>54/A, Chinnakadai Street, Muthaiahpillay Lane, Madurai, India, Tamil Nadu</p> */}
                    <p><span>Email:</span><br></br>
                        {/* <a href="mailto:[EMAIL_ADDRESS]" style={{ color: '#ffffffff' }}>fixyads@gmail.com</a><br /> */}
                        <a href="mailto:[EMAIL_ADDRESS]" style={{ color: '#ffffffff' }}>sales@fixyads.com</a>
                    </p>
                    <p><span>Phone:</span><br></br>
                        <a href="mailto:[EMAIL_ADDRESS]" style={{ color: '#ffffffff' }}>+91 84380 83853</a></p>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <a href="https://www.instagram.com/fixyads/">
                            <Image src="/SocialMedia/instagram.png" alt="Instagram" width={50} height={50} />
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=61568361441860">
                            <Image src="/SocialMedia/facebook.png" alt="Facebook" width={50} height={50} />
                        </a>
                        <a href="https://www.linkedin.com/company/fixyads/">
                            <Image src="/SocialMedia/linkedin.png" alt="LinkedIn" width={50} height={50} />
                        </a>
                    </div>
                </div>
            </div>


            <div className={styles.copyright}>
                <div>&copy; {new Date().getFullYear()} Fixyads. All rights reserved.</div>
                <div style={{ marginTop: '10px', display: 'flex', gap: '20px', justifyContent: 'center', fontSize: '0.85rem', color: '#666' }}>
                    <Link href="/privacy-policy" style={{ color: '#666' }}>Privacy Policy</Link>
                    <Link href="/terms-of-service" style={{ color: '#666' }}>Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
