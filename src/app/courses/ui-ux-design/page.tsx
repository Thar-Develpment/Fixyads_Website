import ds from "@/styles/pageDesignSystem.module.css";
import PageTemplate from "@/components/layout/PageTemplate";
import { siteContent, generateSiteMetadata } from "@/data/site-content";
import type { Metadata } from "next";

export const metadata: Metadata = generateSiteMetadata("ui-ux-design-course");

export default function UiUxDesignCourse() {
  const data = siteContent["ui-ux-design-course"];

  return (
    <PageTemplate data={data}>
      <div className={ds.courseHighlights}>
        <div className={ds.courseHighlight}>
          <h3>10+</h3>
          <p>Modules</p>
        </div>
        <div className={ds.courseHighlight}>
          <h3>5+</h3>
          <p>Portfolio Projects</p>
        </div>
        <div className={ds.courseHighlight}>
          <h3>Figma</h3>
          <p>Mastery</p>
        </div>
        <div className={ds.courseHighlight}>
          <h3>100%</h3>
          <p>Practical Training</p>
        </div>
      </div>
    </PageTemplate>
  );
}
