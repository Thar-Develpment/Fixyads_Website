import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.column}>
                    <img src="Logo/HeadLogo.png" alt="" />
                    <p>Transforming businesses with data-driven digital marketing strategies and empowering the next generation with expert training.</p>
                </div>

                <div className={styles.column}>
                    <h3>Services</h3>
                    <ul className={styles.linkList}>
                        <li><Link href="/services#seo">SEO Optimization</Link></li>
                        <li><Link href="/services#smm">Social Media Marketing</Link></li>
                        <li><Link href="/services#ads">Performance Marketing</Link></li>
                        <li><Link href="/services#web-dev">Web Development</Link></li>
                    </ul>
                </div>

                <div className={styles.column}>
                    <h3>Courses</h3>
                    <ul className={styles.linkList}>
                        <li><Link href="/courses/digital-marketing">Digital Marketing Course</Link></li>
                        <li><Link href="/courses/web-development">Web development Course</Link></li>
                        <li><Link href="/courses/Placement-Support">Placement Support</Link></li>
                        
                    </ul>
                </div>

                <div className={styles.column}>
                    <h3>Contact</h3>
                    <p>123 Business Avenue, Tech City</p>
                    <p>Email: hello@agency.com</p>
                    <p>Phone: +91 98765 43210</p>
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <a href="https://www.instagram.com/fixyads/">
                            <img src="/SocialMedia/instagram.png" alt="" style={{height:'50px', width:'50px'}}/>
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=61568361441860">
                            <img src="/SocialMedia/facebook.png" alt="" style={{height:'50px', width:'50px'}}/>
                        </a>
                    </div>
                </div>
            </div>


            <div className={styles.copyright}>
                &copy; {new Date().getFullYear()} Agency Name. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
