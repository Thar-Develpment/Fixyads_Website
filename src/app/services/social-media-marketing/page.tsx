import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowUpRight,
  CalendarCheck,
  Instagram,
  Palette,
  Video,
  Megaphone,
  BarChart3,
  Eye,
  Sparkles,
  Target,
  Zap,
  ShieldCheck,
  HeadphonesIcon,
  CheckCircle,
  TrendingUp,
} from 'lucide-react';
import styles from './page.module.css';

export const metadata: Metadata = {
  alternates: { canonical: '/services/social-media-marketing' },
  title: 'Social Media Marketing Services for Business Growth',
  description:
    'Grow your brand with social media marketing services featuring strategic content, AI-powered videos, paid campaigns, and measurable results.',
  keywords: [
    'social media marketing',
    'SMM services',
    'instagram marketing',
    'facebook marketing',
    'meta ads',
    'google ads',
    'AI video content',
    'brand awareness',
    'social media strategy',
  ],
};

export default function SocialMediaMarketingPage() {
  const services = [
    {
      icon: CalendarCheck,
      title: 'Social Media Strategy & Planning',
      desc: 'Every successful campaign starts with a clear strategy. We create content plans tailored to your business goals and target audience.',
    },
    {
      icon: Instagram,
      title: 'Instagram & Facebook Management',
      desc: 'From regular posting to profile management, we keep your business active, professional, and engaging across Meta platforms.',
    },
    {
      icon: Palette,
      title: 'Creative Post & Reel Design',
      desc: 'Capture attention with high-quality posts and short-form videos designed to increase engagement and strengthen your brand.',
    },
    {
      icon: Video,
      title: 'AI-Generated Video Content',
      desc: 'Promote your products and services with professional AI-powered videos that are creative, cost-effective, and quick to produce.',
    },
    {
      icon: Megaphone,
      title: 'Paid Advertising (Meta Ads & Google Ads)',
      desc: 'Reach the right audience with targeted advertising campaigns that generate leads, drive website traffic, and improve conversions.',
    },
    {
      icon: BarChart3,
      title: 'Monthly Performance Reports',
      desc: 'Know what\u2019s working. Receive clear monthly reports with insights, campaign results, and recommendations for continuous growth.',
    },
    {
      icon: Eye,
      title: 'Brand Awareness Campaigns',
      desc: 'Increase your visibility and build customer trust with campaigns that keep your brand top of mind.',
    },
  ];

  const whyChoose = [
    {
      icon: Target,
      title: 'Customized marketing strategies',
      desc: 'No cookie-cutter templates. We craft tailored plans aligned with your target audience, industry trends, and business goals.',
    },
    {
      icon: Sparkles,
      title: 'Creative, high-quality content',
      desc: 'Captivate your audience with striking visuals, engaging copy, and scroll-stopping reels created by professional designers.',
    },
    {
      icon: Zap,
      title: 'ROI-focused advertising',
      desc: 'Optimize your budget with precision-targeted Meta and Google ads designed to drive qualified leads, traffic, and sales.',
    },
    {
      icon: ShieldCheck,
      title: 'Transparent reporting',
      desc: 'Track performance clearly. Get monthly reports highlighting real results, click-through rates, and key growth opportunities.',
    },
    {
      icon: HeadphonesIcon,
      title: 'Dedicated support',
      desc: 'Work with a responsive partner. We provide constant communication, proactive updates, and continuous optimization advice.',
    },
  ];

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
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <span className={styles.heroEyebrow}>Social Media Marketing Services</span>
              <h1 className={styles.heroTitle}>
                Build a Stronger Brand. <span className={styles.heroAccent}>Reach More Customers.</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Your customers are already on social media. If your business isn&rsquo;t active, consistent, and engaging, you&rsquo;re missing valuable opportunities.
              </p>

              {/* Live campaign stats mock layout */}
              {/* <div className={styles.heroMiniStats}>
                <div className={styles.heroMiniStat}>
                  <span className={styles.heroMiniNum}>+240%</span>
                  <span className={styles.heroMiniLabel}>Average CTR</span>
                </div>
                <div className={styles.heroMiniDivider}></div>
                <div className={styles.heroMiniStat}>
                  <span className={styles.heroMiniNum}>3x</span>
                  <span className={styles.heroMiniLabel}>Lead Volume</span>
                </div>
                <div className={styles.heroMiniDivider}></div>
                <div className={styles.heroMiniStat}>
                  <span className={styles.heroMiniNum}>AI+Human</span>
                  <span className={styles.heroMiniLabel}>Strategy Engine</span>
                </div>
              </div> */}

              <Link href="/contact" className={styles.heroCta}>
                <span>Get Free Strategy Call</span>
                <ArrowUpRight size={18} className={styles.heroCtaArrow} />
              </Link>
            </div>
            <div className={styles.heroVisual}>
              <div className={styles.browserMockup}>
                <div className={styles.browserHeader}>
                  <span className={styles.browserDot}></span>
                  <span className={styles.browserDot}></span>
                  <span className={styles.browserDot}></span>
                </div>
                <Image
                  src="/services/smm-hero.png"
                  alt="Social media marketing dashboard with engagement analytics"
                  width={580}
                  height={480}
                  className={styles.heroImg}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Intro / Purpose ── */}
      <section className={styles.introSection}>
        <div className={styles.container}>
          <div className={styles.introHeader}>
            <span className={styles.sectionEyebrow}>Who We Are</span>
            <h2 className={styles.sectionTitle}>
              Strategic Social Media That <span className={styles.introTitleAccent}>Drives Real Growth</span>
            </h2>
          </div>

          <div className={styles.introGrid}>
            <div className={styles.introLeft}>
              <p className={styles.textLead}>
                At Fixyads, we help businesses grow their online presence with strategic content and performance-driven marketing.
              </p>
              <p className={styles.textBody}>
                Our approach is data-driven and creative — combining AI-powered content with human strategy to deliver campaigns that connect with your audience and drive real business results.
              </p>

              <div className={styles.introHighlights}>
                <div className={styles.introHighlight}>
                  <CheckCircle size={18} className={styles.introCheckIcon} />
                  <span>Data-driven content strategies tailored to your audience</span>
                </div>
                <div className={styles.introHighlight}>
                  <CheckCircle size={18} className={styles.introCheckIcon} />
                  <span>AI-powered creative production for posts &amp; videos</span>
                </div>
                <div className={styles.introHighlight}>
                  <CheckCircle size={18} className={styles.introCheckIcon} />
                  <span>ROI-focused paid campaigns on Meta &amp; Google</span>
                </div>
                <div className={styles.introHighlight}>
                  <CheckCircle size={18} className={styles.introCheckIcon} />
                  <span>Transparent monthly reporting with actionable insights</span>
                </div>
              </div>

              <Link href="/contact" className={styles.introBtn}>
                <span>Start Growing Today</span>
                <ArrowUpRight size={16} className={styles.introBtnArrow} />
              </Link>
            </div>

            <div className={styles.introRight}>
              <div className={styles.introImgWrap}>
                <Image
                  src="/services/smm-intro.png"
                  alt="Social media marketing strategy and engagement"
                  width={520}
                  height={520}
                  className={styles.introImg}
                />
                {/* Floating stat badges */}
                <div className={`${styles.floatingBadge} ${styles.floatingBadgeTop}`}>
                  <BarChart3 size={16} />
                  <div>
                    <span className={styles.badgeNum}>3x</span>
                    <span className={styles.badgeLabel}>Avg. Engagement</span>
                  </div>
                </div>
                <div className={`${styles.floatingBadge} ${styles.floatingBadgeBottom}`}>
                  <TrendingUp size={16} />
                  <div>
                    <span className={styles.badgeNum}>85%</span>
                    <span className={styles.badgeLabel}>More Reach</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Services — Dark Glass Cards ── */}
      <section className={styles.servicesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>What We Offer</span>
            <h2 className={styles.sectionTitle}>Our Services</h2>
          </div>

          <div className={styles.servicesGrid}>
            {services.map((svc) => {
              const IconComponent = svc.icon;
              return (
                <div key={svc.title} className={styles.serviceCard}>
                  <div className={styles.serviceCardIcon}>
                    <IconComponent size={24} />
                  </div>
                  <h3 className={styles.serviceCardTitle}>{svc.title}</h3>
                  <p className={styles.serviceCardDesc}>{svc.desc}</p>
                  <div className={styles.serviceCardAccent}></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Why Choose Fixyads — Premium Timeline list ── */}
      <section className={styles.whySection}>
        <div className={styles.container}>
          <div className={styles.whyLayout}>
            {/* Left Column: Sticky Info */}
            <div className={styles.whyStickyHeader}>
              <span className={styles.sectionEyebrow}>Why Fixyads</span>
              <h2 className={styles.whyMainTitle}>
                Why Businesses <br />
                <span className={styles.whyTitleAccent}>Choose Us</span>
              </h2>
              <p className={styles.whyMainDesc}>
                We combine industry-leading AI tools, creative human expertise, and ROI-focused marketing to scale brands sustainably on social media.
              </p>
              {/* <div className={styles.whyMainStats}>
                <div className={styles.whyMainStatItem}> */}
                  {/* <span className={styles.whyMainStatNum}>100%</span> */}
                  {/* <span className={styles.whyMainStatLabel}>Custom Strategy</span>
                </div>
                <div className={styles.whyMainStatItem}> */}
                  {/* <span className={styles.whyMainStatNum}>24/7</span> */}
                  {/* <span className={styles.whyMainStatLabel}>Dedicated Support</span>
                </div>
              </div> */}
            </div>

            {/* Right Column: Sleek Timeline Connection List */}
            <div className={styles.whyTimelineList}>
              <div className={styles.whyTimelineLine}></div>
              {whyChoose.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div key={item.title} className={styles.whyTimelineItem}>
                    {/* Node on the vertical line */}
                    <div className={styles.whyTimelineNode}>
                      <span className={styles.whyNodeNum}>
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                    </div>

                    {/* Minimalist Borderless Content Row */}
                    <div className={styles.whyTimelineContent}>
                      <div className={styles.whyTimelineHeader}>
                        <div className={styles.whyTimelineIconBox}>
                          <IconComponent size={18} className={styles.whyTimelineIcon} />
                        </div>
                        <h3 className={styles.whyTimelineTitle}>{item.title}</h3>
                      </div>
                      <p className={styles.whyTimelineDesc}>{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Let's Grow Your Business — Dark section ── */}
      {/* <section className={styles.growSection}>
        <div className={styles.container}>
          <div className={styles.growGrid}>
            <div className={styles.growContent}>
              <span className={styles.sectionEyebrow}>Let&rsquo;s Get Started</span>
              <h2 className={styles.growTitle}>Let&rsquo;s Grow Your Business</h2>
              <p className={styles.growText}>
                Whether you want more visibility, better engagement, or quality leads, Fixyads helps your business achieve measurable growth through smart social media marketing.
              </p>
              <Link href="/contact" className={styles.ctaBtn}>
                <span>Get Free Growth Audit</span>
                <ArrowUpRight size={18} className={styles.ctaArrow} />
              </Link>
            </div>
            <div className={styles.growVisual}>
              <Image
                src="/services/smm-growth.png"
                alt="Business growth through social media marketing"
                width={500}
                height={420}
                className={styles.growImg}
              />
            </div>
          </div>
        </div>
      </section> */}

      {/* ── Bottom CTA ── */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaBlock}>
            <div className={styles.ctaInner}>
              <h2 className={styles.ctaTitle}>Let&rsquo;s Grow Your Business</h2>
              <p className={styles.ctaSubtitle}>
                Whether you want more visibility, better engagement, or quality leads, Fixyads helps your business achieve measurable growth through smart social media marketing.
              </p>
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
