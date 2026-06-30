import type { Metadata } from 'next';
import Hero from '@/components/LandingPage/Hero';
import Partners from '@/components/LandingPage/Partners';
import Services from '@/components/LandingPage/Services';
import IndustriesSection from '@/components/LandingPage/IndustriesSection';
import HowWeWorkSection from '@/components/LandingPage/HowWeWorkSection';
import MissionGoal from '@/components/LandingPage/Courses';
import Testimonials from '@/components/LandingPage/Testimonials';
import BlogPosts from '@/components/LandingPage/BlogPosts';
import Newsletter from '@/components/LandingPage/Newsletter';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

export default function Home() {
  return (
    <>
      {/* 1. Hero */}
      <Hero />

      {/* 2. Services — glassmorphism on dark bg */}
      <Services />

      {/* 3. Industries We Help */}
      <IndustriesSection />

      {/* 4. Trusted by Our Clients */}
      <Partners />

      {/* 5. How We Work */}
      <HowWeWorkSection />

      {/* 6. Who We Are / About */}
      {/* <AboutAgency /> */}

      {/* 7. Our Mission & Goal */}
      <MissionGoal />

      {/* 8. Client Testimonials */}
      <Testimonials />

      {/* 9. Blog Posts — real WP posts */}
      <BlogPosts />

      {/* 10. Newsletter */}
      <Newsletter />
    </>
  );
}