import ds from "@/styles/pageDesignSystem.module.css";
import PageTemplate from "@/components/layout/PageTemplate";
import { siteContent, generateSiteMetadata } from "@/data/site-content";
import type { Metadata } from "next";

export const metadata: Metadata = generateSiteMetadata("content-marketing-services");

export default function ContentMarketingServicesPage() {
  const data = siteContent["content-marketing-services"];

  return (
    <PageTemplate data={data}>
      <section className={ds.section}>
        <div className={ds.container}>
          <h2 className={ds.sectionTitle}>
            Our Content Marketing Services
          </h2>

          <div className={ds.grid}>
            <div className={ds.card}>
              <h3>Brand Strategy</h3>
              <p>
                Defining your brand voice, positioning, messaging, and unique
                value proposition.
              </p>
            </div>

            <div className={ds.card}>
              <h3>Content Strategy</h3>
              <p>
                Data-driven content planning tailored to your audience, goals,
                and platforms.
              </p>
            </div>

            <div className={ds.card}>
              <h3>Copywriting</h3>
              <p>
                High-converting website copy, ads, blogs, and social media
                captions.
              </p>
            </div>

            <div className={ds.card}>
              <h3>Visual Branding</h3>
              <p>
                Logos, brand guidelines, creatives, and visual systems that
                ensure brand consistency.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={ds.altSection}>
        <div className={ds.container}>
          <h2 className={ds.sectionTitle}>
            Our Content & Branding Process
          </h2>

          <ol className={ds.processList}>
            <li>Brand Discovery & Research</li>
            <li>Brand Positioning & Messaging</li>
            <li>Content Planning & Creation</li>
            <li>Visual Identity Development</li>
            <li>Launch, Optimize & Scale</li>
          </ol>
        </div>
      </section>
    </PageTemplate>
  );
}
