import Link from "next/link";
import Image from "next/image";
import { getPostsSafe, getFeaturedImageUrl, estimateReadTime } from "@/lib/wp-rest";
import { sanitizePlainText } from "@/lib/sanitize";
import type { WordPressPost } from "@/types/wordpress";
import styles from "./blog.module.css";
import { ArrowRight, Clock, BookOpen } from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Fixyads — Digital Marketing, SEO & Growth",
  description:
    "Articles and guides from Fixyads on digital marketing strategy, SEO, social media, branding, web development, and training.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog | Fixyads",
    description:
      "Insights on digital marketing, SEO, social media, and growing your business online.",
    url: "/blog",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Fixyads",
    description:
      "Digital marketing articles, SEO tips, and growth strategies from the Fixyads team.",
  },
};

function limitWords(text: string, limit = 22) {
  const clean = text.replace(/<[^>]+>/g, "");
  const words = clean.split(" ");
  return words.slice(0, limit).join(" ") + (words.length > limit ? "…" : "");
}

function limitTitle(text: string, limit = 10) {
  const clean = text.replace(/<[^>]+>/g, "");
  const words = clean.split(" ");
  return words.slice(0, limit).join(" ") + (words.length > limit ? "…" : "");
}

const CATEGORIES = ["SEO", "Performance", "Content", "Branding", "PPC", "Social Media"];

export default async function BlogPage() {
  const posts = await getPostsSafe(50);

  if (posts.length === 0) {
    return (
      <div className={styles.emptyState}>
        <div className={styles.emptyInner}>
          <BookOpen size={48} className={styles.emptyIcon} />
          <h2 className={styles.emptyTitle}>No articles yet</h2>
          <p className={styles.emptyText}>
            We are working on bringing you premium digital marketing insights. Check back soon!
          </p>
          <Link href="/" className={styles.emptyBtn}>
            <span>Back to Home</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    );
  }

  const [featured, ...rest] = posts;
  const featuredImage = getFeaturedImageUrl(featured);

  return (
    <>
      {/* ── Hero Header ── */}
      <div className={styles.hero}>
        <div className={styles.heroOrb1} />
        <div className={styles.heroOrb2} />
        <div className={styles.heroGrid} />
        <div className={styles.heroInner}>
          <span className={styles.heroEyebrow}>{"// Resources & Insights"}</span>
          <h1 className={styles.heroTitle}>
            The Fixyads <span className={styles.heroAccent}>Growth Blog</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Expert guides on SEO, paid media, content strategy, and brand building — from practitioners who live it every day.
          </p>
          <div className={styles.heroStats}>
            <div className={styles.heroStat}>
              <span className={styles.heroStatNum}>{posts.length}+</span>
              <span className={styles.heroStatLabel}>Articles</span>
            </div>
            <div className={styles.heroStatDivider} />
            <div className={styles.heroStat}>
              <span className={styles.heroStatNum}>6</span>
              <span className={styles.heroStatLabel}>Topics</span>
            </div>
            <div className={styles.heroStatDivider} />
            <div className={styles.heroStat}>
              <span className={styles.heroStatNum}>Free</span>
              <span className={styles.heroStatLabel}>Always</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.pageBody}>

        {/* ── Featured Post ── */}
        <div className={styles.featuredWrap}>
          <div className={styles.featuredLabel}>
            <span className={styles.featuredDot} />
            Featured Article
          </div>
          <Link href={`/blog/${featured.slug}`} className={styles.featuredCard}>
            <div className={styles.featuredImgWrap}>
              {featuredImage ? (
                <Image
                  src={featuredImage}
                  alt={sanitizePlainText(featured.title.rendered)}
                  fill
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className={styles.featuredImg}
                  priority
                />
              ) : (
                <div className={styles.featuredPlaceholder}>
                  <div className={styles.placeholderOrb} />
                  <span className={styles.placeholderGlyph}>✦</span>
                </div>
              )}
              <div className={styles.featuredOverlay} />
              <span className={styles.featuredCat}>{CATEGORIES[0]}</span>
            </div>
            <div className={styles.featuredBody}>
              <div className={styles.featuredMeta}>
                <Clock size={13} className={styles.metaIcon} />
                <span>{estimateReadTime(featured.content?.rendered ?? featured.excerpt.rendered)}</span>
              </div>
              <h2 className={styles.featuredTitle}>
                {sanitizePlainText(featured.title.rendered)}
              </h2>
              <p className={styles.featuredExcerpt}>
                {limitWords(featured.excerpt.rendered, 30)}
              </p>
              <div className={styles.featuredCta}>
                <span>Read Full Article</span>
                <span className={styles.featuredArrow}><ArrowRight size={16} /></span>
              </div>
            </div>
          </Link>
        </div>

        {/* ── All Posts Grid ── */}
        {rest.length > 0 && (
          <div className={styles.gridSection}>
            <div className={styles.gridHeader}>
              <h2 className={styles.gridTitle}>All Articles</h2>
              <span className={styles.gridCount}>{rest.length} more posts</span>
            </div>
            <div className={styles.grid}>
              {rest.map((post: WordPressPost, i: number) => {
                const image = getFeaturedImageUrl(post);
                const readTime = estimateReadTime(post.content?.rendered ?? post.excerpt.rendered);
                const category = CATEGORIES[(i + 1) % CATEGORIES.length];

                return (
                  <article key={post.id} className={styles.card}>
                    <Link href={`/blog/${post.slug}`} className={styles.cardImgLink}>
                      <div className={styles.cardImgWrap}>
                        {image ? (
                          <Image
                            src={image}
                            alt={sanitizePlainText(post.title.rendered)}
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className={styles.cardImg}
                          />
                        ) : (
                          <div className={styles.cardPlaceholder}>
                            <div className={styles.cardPlaceholderOrb} />
                            <span className={styles.cardPlaceholderGlyph}>✦</span>
                          </div>
                        )}
                        <div className={styles.cardImgOverlay} />
                        <span className={styles.cardCat}>{category}</span>
                      </div>
                    </Link>

                    <div className={styles.cardBody}>
                      <div className={styles.cardMeta}>
                        <Clock size={11} className={styles.metaIcon} />
                        <span className={styles.cardReadTime}>{readTime}</span>
                      </div>

                      <h3 className={styles.cardTitle}>
                        <Link href={`/blog/${post.slug}`}>
                          {limitTitle(sanitizePlainText(post.title.rendered), 9)}
                        </Link>
                      </h3>

                      <p className={styles.cardExcerpt}>
                        {limitWords(post.excerpt.rendered, 18)}
                      </p>

                      <Link href={`/blog/${post.slug}`} className={styles.cardLink}>
                        <span>Read Article</span>
                        <ArrowRight size={13} className={styles.cardArrow} />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        )}

      </div>
    </>
  );
}