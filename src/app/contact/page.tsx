import type { Metadata } from 'next';
import { Phone, Mail, MapPin, Sparkles } from 'lucide-react';
import ContactForm from '@/components/ContactForm/ContactForm';
import styles from './page.module.css';

export const metadata: Metadata = {
  alternates: { canonical: '/contact' },
  title: 'Contact Us | Get a Free Quote',
  description: 'Get in touch with us for digital marketing services or training inquiries. Visit our office or drop us a message.',
};

export default function ContactPage() {
  return (
    <div className={styles.pageWrapper}>
      {/* ── HERO SECTION: Dark Navy Mesh & Grids ── */}
      <section className={styles.hero}>
        <div className={styles.bgStack}>
          <div className={styles.bgGrid}></div>
          <div className={styles.glowBlobA}></div>
          <div className={styles.glowBlobB}></div>
        </div>

        <div className={styles.container}>
          <div className={styles.heroInner}>
            <span className={styles.heroEyebrow}>
              <Sparkles size={13} className={styles.eyebrowIcon} />
              Get In Touch
            </span>
            <h1 className={styles.heroTitle}>
              Let&apos;s Build Something <span className={styles.heroAccent}>Remarkable Together</span>
            </h1>
            <p className={styles.heroDescription}>
              Have a project in mind, want to enroll in a course, or just want to say hello? 
              Fill out the form or reach out through our official channels.
            </p>
          </div>
        </div>
      </section>

      {/* ── CONTENT SECTION: Details + Contact Form ── */}
      <section className={styles.mainSection}>
        <div className={styles.container}>
          <div className={styles.grid}>
            
            {/* Left Column: Contact Channels */}
            <div className={styles.contactDetails}>
              <span className={styles.sectionEyebrow}>Our Channels</span>
              <h2 className={styles.sectionTitle}>How to Reach Us</h2>
              <p className={styles.detailsText}>
                We love hearing from passionate business owners and eager students. 
                Choose the way that works best for you.
              </p>

              <div className={styles.infoCardsList}>
                {/* Phone Card */}
                <div className={styles.infoCard}>
                  <div className={`${styles.iconWrapper} ${styles.iconPhone}`}>
                    <Phone size={20} />
                  </div>
                  <div className={styles.infoContent}>
                    <h3>Call Us</h3>
                    <p className={styles.infoLinkWrap}>
                      <a href="tel:+918438083853" className={styles.infoLink}>
                        +91 84380 83853
                      </a>
                    </p>
                  </div>
                </div>

                {/* Email Card */}
                <div className={styles.infoCard}>
                  <div className={`${styles.iconWrapper} ${styles.iconEmail}`}>
                    <Mail size={20} />
                  </div>
                  <div className={styles.infoContent}>
                    <h3>Email Us</h3>
                    <p className={styles.infoLinkWrap}>
                      <a href="mailto:fixyads@gmail.com" className={styles.infoLink}>
                        fixyads@gmail.com
                      </a>
                      <span className={styles.linkSeparator}>·</span>
                      <a href="mailto:sales@fixyads.com" className={styles.infoLink}>
                        sales@fixyads.com
                      </a>
                    </p>
                    <span className={styles.infoMuted}>
                      We generally reply within 24 hours
                    </span>
                  </div>
                </div>

                {/* Address Card */}
                <div className={styles.infoCard}>
                  <div className={`${styles.iconWrapper} ${styles.iconAddress}`}>
                    <MapPin size={20} />
                  </div>
                  <div className={styles.infoContent}>
                    <h3>Our Office</h3>
                    <p className={styles.infoText}>
                      54/A, Chinnakadai Street, Muthaiahpillay Lane,<br />
                      Madurai, Tamil Nadu, India
                    </p>
                    <span className={styles.infoMuted}>
                      Come say hi for a face-to-face consultation
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className={styles.formWrapper}>
              <h3 className={styles.formTitle}>Send us a Message</h3>
              <p className={styles.formSubtitle}>
                Fill out the form below and we will get back to you with a free consultation slot or course details.
              </p>
              <ContactForm />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

