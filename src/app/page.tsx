import Link from 'next/link';
import Hero from '@/components/Hero/Hero';
import ServiceCard from '@/components/ServiceCard/ServiceCard';
import CourseCard from '@/components/CourseCard/CourseCard';
import styles from './page.module.css';
import HowWeWork from '@/components/HowWeWork/HowWeWork';
import WhyChooseFixyAds from "@/components/WhyChooseFixyAds/WhyChooseFixyAds";
import StatsBar from "@/components/StatsBar/StatsBar";
import CoursesTraining from "@/components/CoursesTraining/CoursesTraining";

export default function Home() {
  return (
    <>
      <Hero />

      <div className={styles.servicebg}>
        <div className={styles.servicebg1}>
        {/* Services Section */}
          <section className="section container">
            <h2 className={styles.sectionTitleblack}><span style={{color: '#15b597'}}> Our Services </span></h2>
            <p className={styles.sectionSubtitleblack}>
              Comprehensive digital solutions to elevate your brand and drive measurable growth.
            </p>

            <div className={styles.grid}>

              <ServiceCard
                title="Search Engine Marketing"
                description="SEO for long-term growth and Google Ads for instant leads & sales."
                icon="🔍"
                link="/Services/search-engine-optimization"
              />

              <ServiceCard
                title="Social Media Marketing"
                description="Content, growth, and paid ads across Instagram, Facebook & LinkedIn."
                icon="📱"
                link="/Services/social-media-marketing"
              />

              <ServiceCard
                title="Content & Branding"
                description="High-quality content, creatives, videos & brand identity."
                icon="🎨"
                link="/Services/content-branding"
              />

              <ServiceCard
                title="Website development Services"
                description="Websites, landing pages & CRO to convert visitors into customers."
                icon="🌐"
                link="/Services/web-development"
              />

              {/* <ServiceCard
                title="Email, WhatsApp & Automation"
                description="Automated follow-ups, campaigns & lead nurturing systems."
                icon="💬"
                link="/services/automation"
              /> */}

              {/* <ServiceCard
                title="Analytics & Strategy"
                description="Tracking, insights, competitor analysis & growth planning."
                icon="📊"
                link="/services/dummy"
              /> */}

              <ServiceCard
                title="Influencer & Affiliate Marketing"
                description="Influencer campaigns & affiliate systems for scalable growth."
                icon="🤝"
                link="/Services/influencer-marketing"
              />

              <ServiceCard
                title="Content Marketing"
                description="Online reviews, local SEO & brand trust management."
                icon="⭐"
                link="/Services/content-marketing"
              />

            </div>


            <div className="text-center" style={{ marginTop: '3rem' }}>
              <Link href="/contact" className="btn btn-primary">Contact us</Link>
            </div>
          </section>
        </div>
      </div>
      
      <div className={styles.howwework}>
        <HowWeWork />
      </div>

      <CoursesTraining />

      <WhyChooseFixyAds />

      <StatsBar />

      {/* Testimonials Section */}
      <section className="section container" style={{margin: '0px 15px' }}>
        <h2 className={styles.sectionTitleblack}>What Our Clients Say</h2>
        <p className={styles.sectionSubtitleblack}>
          Trusted by businesses and students alike.
        </p>

        <div className={styles.testimonialGrid}>
          <div className={styles.testimonialCard}>
            <p className={styles.testimonialText}>"The team transformed our online presence. Our leads increased by 200% in just 3 months!"</p>
            <div className={styles.testimonialAuthor}>Sarah Johnson</div>
            <div className={styles.testimonialRole}>CEO, TechStart</div>
          </div>
          <div className={styles.testimonialCard}>
            <p className={styles.testimonialText}>"The Digital Marketing course was a game-changer for my career. I got placed immediately after completion."</p>
            <div className={styles.testimonialAuthor}>Rahul Verma</div>
            <div className={styles.testimonialRole}>Digital Marketing Executive</div>
          </div>
          <div className={styles.testimonialCard}>
            <p className={styles.testimonialText}>"Professional, timely, and results-driven. Highly recommend their SEO services."</p>
            <div className={styles.testimonialAuthor}>Mike Chen</div>
            <div className={styles.testimonialRole}>Founder, GreenEats</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container">
        <div className={styles.ctaSection}>
          <h2 className={styles.ctaTitle}>Ready to Grow?</h2>
          <p className={styles.ctaText}>
            Whether you need a marketing partner or want to upskill your career, we are here to help.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link href="/contact" className="btn btn-primary" >
              Get Started
            </Link>
            <Link href="/courses/digital-marketing" className='btn btn-secondary'>
              View Courses
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
