import { getPostBySlug, getFeaturedImageUrl, estimateReadTime } from "@/lib/wp-rest";
import { extractTOC, injectHeadingIds, TOCItem } from "@/lib/toc";
import { stripHtml, truncateForMeta } from "@/lib/text";
import { sanitizePostHtml, sanitizePlainText } from "@/lib/sanitize";
import TableOfContents from "@/components/TableOfContents/TableOfContents";
import { notFound } from "next/navigation";
import styles from "./blog.module.css";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Clock, Calendar } from "lucide-react";

import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return { title: "Post not found | Fixyads" };
  }

  const titlePlain = stripHtml(post.title.rendered);
  const title = `${titlePlain} | Fixyads Blog`;
  const description = truncateForMeta(
    post.excerpt?.rendered || post.content?.rendered || ""
  );

  const imageUrl =
    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url as string | undefined;

  return {
    title,
    description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: titlePlain,
      description,
      url: `/blog/${slug}`,
      type: "article",
      ...(imageUrl ? { images: [{ url: imageUrl }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: titlePlain,
      description,
      ...(imageUrl ? { images: [imageUrl] } : {}),
    },
  };
}

export default async function BlogDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  const rawHtml = post.content.rendered;
  const sanitizedHtml = sanitizePostHtml(rawHtml);
  const toc: TOCItem[] = extractTOC(sanitizedHtml);
  const contentWithIds = injectHeadingIds(sanitizedHtml);

  const featuredImage = getFeaturedImageUrl(post);
  const readTime = estimateReadTime(post.content.rendered);

  const publishDate = post.date
    ? new Date(post.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  return (
    <div className={styles.pageWrapper}>

      {/* ── Hero / Featured Image Header ── */}
      <div className={styles.hero}>
        {featuredImage ? (
          <>
            <Image
              src={featuredImage}
              alt={sanitizePlainText(post.title.rendered)}
              fill
              sizes="100vw"
              className={styles.heroImg}
              priority
            />
            <div className={styles.heroOverlay} />
          </>
        ) : (
          <div className={styles.heroPlaceholder}>
            <div className={styles.heroOrb1} />
            <div className={styles.heroOrb2} />
            <div className={styles.heroGrid} />
          </div>
        )}

        <div className={styles.heroContent}>
          {/* Breadcrumbs */}
          <nav className={styles.breadcrumbs}>
            <Link href="/">Home</Link>
            <span className={styles.breadcrumbsSeparator}>/</span>
            <Link href="/blog">Blog</Link>
            <span className={styles.breadcrumbsSeparator}>/</span>
            <span className={styles.breadcrumbsActive}>
              {sanitizePlainText(post.title.rendered)}
            </span>
          </nav>

          {/* Meta row */}
          <div className={styles.heroMeta}>
            <span className={styles.heroCat}>Blog</span>
            {publishDate && (
              <div className={styles.heroMetaItem}>
                <Calendar size={13} />
                <span>{publishDate}</span>
              </div>
            )}
            <div className={styles.heroMetaItem}>
              <Clock size={13} />
              <span>{readTime}</span>
            </div>
          </div>

          {/* Title */}
          <h1 className={styles.heroTitle}>
            {sanitizePlainText(post.title.rendered)}
          </h1>
        </div>
      </div>

      {/* ── Article Layout ── */}
      <div className={styles.bodyWrap}>
        <div className={styles.blogLayout}>

          {/* ── Main Content ── */}
          <article className={styles.blogContent}>

            {/* Mobile TOC */}
            {toc.length > 0 && (
              <div className={`${styles.tocCard} ${styles.mobileOnly}`}>
                <TableOfContents toc={toc} />
              </div>
            )}

            <div
              className={styles.postContent}
              dangerouslySetInnerHTML={{ __html: contentWithIds }}
            />

            {/* Back to blog link at bottom */}
            <div className={styles.articleFooter}>
              <Link href="/blog" className={styles.backLink}>
                <ArrowLeft size={15} />
                <span>All Articles</span>
              </Link>
            </div>
          </article>

          {/* ── Desktop Sidebar ── */}
          <aside className={styles.rightSidebar}>

            {/* Desktop TOC */}
            {toc.length > 0 && (
              <div className={`${styles.tocCard} ${styles.desktopOnly}`}>
                <TableOfContents toc={toc} />
              </div>
            )}

            {/* Premium CTA Card */}
            <div className={styles.ctaCard}>
              <div className={styles.ctaCardOrb} />
              <div className={styles.ctaCardGrid} />
              <span className={styles.ctaEyebrow}>{"// Free Consultation"}</span>
              <h4 className={styles.ctaTitle}>
                Ready to Grow Your Business?
              </h4>
              <p className={styles.ctaText}>
                Our experts build custom digital marketing strategies that drive real, measurable results.
              </p>
              <Link href="/contact" className={styles.ctaButton}>
                <span>Get a Free Strategy Call</span>
                <ArrowRight size={14} className={styles.ctaBtnArrow} />
              </Link>
            </div>

          </aside>
        </div>
      </div>

    </div>
  );
}
