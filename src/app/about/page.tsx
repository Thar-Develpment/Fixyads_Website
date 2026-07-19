import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowUpRight,
  Target,
  ShieldCheck,
  Users,
  Heart,
  Database,
  BookOpen,
  Sparkles,
  Compass,
  Layers,
  Globe,
  TrendingUp,
  Zap,
} from 'lucide-react';
import styles from './page.module.css';

export const metadata: Metadata = {
  alternates: { canonical: '/about' },
  title: 'About FixyAds | Your Trusted Digital Growth Partner',
  description: 'Meet the team behind FixyAds and discover how we help businesses grow with innovative strategies, measurable results, and long-term digital success.',
};

export default function AboutPage() {
  const principles = [
    { num: '01', title: 'Think Like a Customer', desc: 'Empathy defines our design, copy, and campaigns.', icon: Heart },
    { num: '02', title: 'Data Drives Every Decision', desc: 'No guesswork. We track, analyze, and optimize constantly.', icon: Database },
    { num: '03', title: 'Be Honest & Transparent', desc: 'No hidden metrics, no false promises.', icon: ShieldCheck },
    { num: '04', title: 'Think Long-Term', desc: 'We build systems that scale sustainably.', icon: Compass },
    { num: '05', title: 'Never Stop Learning', desc: 'AI and digital marketing change daily.', icon: BookOpen },
    { num: '06', title: 'Deliver Excellence', desc: 'We set the highest quality standard.', icon: Sparkles },
    { num: '07', title: 'Win Together', desc: "Our clients' growth is our only true measure of success.", icon: Users },
  ];

  const clients = [
    { name: 'Tahrshop', logo: '/Clients/Tahrshop.png' },
    { name: 'Nexvyon', logo: '/Clients/Nexvyon.png' },
    { name: 'Symphony Bali Spa', logo: '/Clients/logo.png' },
    { name: 'Koothan', logo: '/Clients/koothan.png' },
    { name: 'Surabi', logo: '/Clients/Surabi.png' },
    { name: 'feature Tech', logo: '/Clients/featurelogo.png' },
  ];



  /* Duplicate logos for seamless marquee loop */
  const logoSet = clients.map((client, i) => (
    <div key={client.name + '-' + i} className={styles.logoItem}>
      <Image
        src={client.logo}
        alt={client.name}
        width={160}
        height={64}
        className={styles.logoImg}
      />
    </div>
  ));

  return (
    <div className={styles.pageWrapper}>
      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.bgStack}>
          <div className={styles.bgGrid}></div>
          <div className={styles.glowBlobA}></div>
          <div className={styles.glowBlobB}></div>
        </div>

        <div className={styles.container}>
          <div className={styles.heroInner}>
            <span className={styles.heroEyebrow}>Purpose of Fixyads</span>
            <h1 className={styles.heroTitle}>
              Making a Positive Impact on <span className={styles.heroAccent}>Business People&rsquo;s Lives</span>
            </h1>
          </div>
        </div>
      </section>

      {/* ── Purpose ── */}
      <section className={styles.purposeSection}>
        <div className={styles.container}>
          <div className={styles.purposeGrid}>
            <div className={styles.purposeLeft}>
              <p className={styles.textLead}>
                At FixyAds, our purpose is to help businesses grow through AI-driven digital marketing.
              </p>
              <p className={styles.textBody}>
                We help businesses reach more customers, generate more enquiries, increase sales, and build a strong online presence. Our goal is to make marketing easy, effective, and focused on real business growth.
              </p>
              <p className={styles.textBody}>
                When our clients grow, they create more jobs, serve more people, and make a positive impact in their communities. Their success is our success.
              </p>
            </div>
            <div className={styles.purposeRight}>
              <Image
                src="/about-purpose.png"
                alt="Digital marketing and business growth illustration"
                width={520}
                height={520}
                className={styles.purposeImg}
              />
            </div>
          </div>

          {/* Equation showcase */}
          <div className={styles.equationShowcase}>
            <div className={styles.eqRow}>
              <div className={styles.eqCard}>
                <div className={styles.eqCardIcon}>
                  <Globe size={20} />
                </div>
                <span className={styles.eqCardLabel}>Greater Reach</span>
              </div>
              <span className={styles.eqOp}>+</span>
              <div className={styles.eqCard}>
                <div className={styles.eqCardIcon}>
                  <Users size={20} />
                </div>
                <span className={styles.eqCardLabel}>More Customers</span>
              </div>
              <span className={styles.eqOp}>+</span>
              <div className={styles.eqCard}>
                <div className={styles.eqCardIcon}>
                  <TrendingUp size={20} />
                </div>
                <span className={styles.eqCardLabel}>Higher Revenue</span>
              </div>
            </div>
            <div className={styles.eqEquals}>
              <span>=</span>
            </div>
            <div className={styles.eqResultCard}>
              <Zap size={20} />
              <span>Sustainable Business Growth</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className={styles.missionVisionSection}>
        <div className={styles.container}>
          <div className={styles.missionVisionGrid}>
            <div className={`${styles.mvCard} ${styles.mvMission}`}>
              <div className={styles.mvBadge}>
                <Target size={16} />
                <span>01</span>
              </div>
              <h3 className={styles.mvTitle}>Our Mission</h3>
              <p className={styles.mvText}>
                Our mission is to help businesses become the first choice whenever potential customers search for products or services online.                 Whether someone searches on Google, ChatGPT, Gemini, Perplexity, Microsoft Copilot, or voice search, we ensure your business appears where buying decisions begin.
              </p>
              <p className={styles.mvTextSub}>
              </p>
              <div className={styles.mvAccentLine}></div>
            </div>

            <div className={`${styles.mvCard} ${styles.mvVision}`}>
              <div className={styles.mvBadge}>
                <Layers size={16} />
                <span>02</span>
              </div>
              <h3 className={styles.mvTitle}>Our Vision</h3>
              <p className={styles.mvText}>
                To become one of South India&rsquo;s most trusted AI-powered digital marketing agencies by helping thousands of businesses grow through innovative marketing, intelligent automation, and measurable results.
              </p>
              <div className={styles.mvAccentLine}></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className={styles.teamSection}>
        <div className={styles.container}>
          <div className={styles.teamHeader}>
            <span className={styles.sectionEyebrow}>Dedicated Experts</span>
            <h2 className={styles.sectionTitle}>The People Behind The Process</h2>
          </div>

          {/* Founder — standalone prominent card */}
          <div className={styles.founderCard}>
            <div className={styles.founderImgWrap}>
              <Image
                src="/Team/Mujibur.png"
                alt="Mujibur - Founder & CEO"
                width={200}
                height={200}
                className={styles.founderImg}
              />
            </div>
            <div className={styles.founderInfo}>
              <span className={styles.teamBadge}>Founder &amp; CEO</span>
              <h3 className={styles.founderName}>Mujibur Rahman</h3>
              <p className={styles.founderText}>
                Leading the vision and strategy behind our agency, with a passion for building brands.
              </p>
            </div>
          </div>

          {/* Team members — 2-column grid */}
          <div className={styles.membersGrid}>
            {/* Vaishnavi */}
            <div className={styles.teamCard}>
              <div className={styles.teamImgWrap}>
                <Image
                  src="/Team/vaishnavi.png"
                  alt="Vaishnavi"
                  width={180}
                  height={180}
                  className={styles.teamImg}
                />
              </div>
              <span className={styles.teamBadge}>Digital Marketer</span>
              <h3 className={styles.teamName}>Vaishnavi</h3>
            </div>

            {/* Kalil */}
            <div className={styles.teamCard}>
              <div className={styles.teamImgWrap}>
                <Image
                  src="/Team/Kalil.png"
                  alt="Kalil"
                  width={180}
                  height={180}
                  className={styles.teamImg}
                />
              </div>
              <span className={styles.teamBadge}>Tech Lead</span>
              <h3 className={styles.teamName}>Kalil</h3>
            </div>
          </div>
        </div>
      </section>

      {/* ── Principles ── */}
      <section className={styles.principlesSection}>
        <div className={styles.container}>
          <div className={styles.principlesHeader}>
            <span className={styles.sectionEyebrow}>Core Values</span>
            <h2 className={styles.sectionTitle}>The Principles We Live By</h2>
          </div>

          <div className={styles.principlesList}>
            {principles.map((pr) => {
              const IconComponent = pr.icon;
              return (
                <div key={pr.num} className={styles.principleRow}>
                  <span className={styles.pRowNum}>{pr.num}</span>
                  <div className={styles.pRowIcon}>
                    <IconComponent size={18} />
                  </div>
                  <div className={styles.pRowContent}>
                    <h3 className={styles.pRowTitle}>{pr.title}</h3>
                    <p className={styles.pRowDesc}>{pr.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Our Clients (scrolling marquee) ── */}
      <section className={styles.clientsLogoSection}>
        <div className={styles.container}>
          <div className={styles.clientsLogoHeader}>
            <span className={styles.sectionEyebrow}>Partnership</span>
            <h2 className={styles.sectionTitle}>Our Clients</h2>
          </div>
          <div className={styles.marquee}>
            <div className={styles.track}>
              {logoSet}
              {logoSet}
            </div>
          </div>
        </div>
      </section>



      {/* ── CTA ── */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaBlock}>
            <div className={styles.ctaInner}>
              <h2 className={styles.ctaTitle}>Grow Your Business with FixyAds</h2>
              <Link href="/contact" className={styles.ctaBtn}>
                <span>Get Free Growth Audit</span>
                <ArrowUpRight size={18} className={styles.ctaArrow} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}