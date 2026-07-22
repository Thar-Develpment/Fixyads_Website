import Link from 'next/link';
import Image from 'next/image';
import { getPostsSafe, getFeaturedImageUrl, estimateReadTime } from '@/lib/wp-rest';
import { sanitizePlainText } from '@/lib/sanitize';
import type { WordPressPost } from '@/types/wordpress';
import styles from './BlogPosts.module.css';
import { ArrowRight, Clock, ChevronRight } from 'lucide-react';

function limitWords(text: string, limit = 20) {
  const clean = text.replace(/<[^>]+>/g, '');
  const words = clean.split(' ');
  return words.slice(0, limit).join(' ') + (words.length > limit ? '…' : '');
}

function limitTitle(text: string, limit = 10) {
  const clean = text.replace(/<[^>]+>/g, '');
  const words = clean.split(' ');
  return words.slice(0, limit).join(' ') + (words.length > limit ? '…' : '');
}

const categories = ['SEO', 'Performance', 'Content'];

const BlogPosts = async () => {
  let posts: WordPressPost[] = [];
  try {
    posts = (await getPostsSafe(3));
  } catch {
    // silently fall back to empty
  }

  const fallback = [
    {
      id: 1,
      slug: null,
      category: 'SEO',
      title: { rendered: '15 SEO Tips and Tricks for New Website Architecture' },
      excerpt: { rendered: 'Structuring your website correctly from day one is critical for SEO indexability. Learn how to map silos and scale crawl efficiency across large domains.' },
      _embedded: null,
      readTime: '5 Min Read',
    },
    {
      id: 2,
      slug: null,
      category: 'Performance',
      title: { rendered: 'A Complete Guide to Google Core Algorithm Updates' },
      excerpt: { rendered: 'Google rolls out core updates multiple times a year. Understand spam signals and how to recover lost traffic from major algorithm changes systematically.' },
      _embedded: null,
      readTime: '8 Min Read',
    },
    {
      id: 3,
      slug: null,
      category: 'Content',
      title: { rendered: 'Best Practices for SEO Syndicated Content Strategy' },
      excerpt: { rendered: 'Syndicating content can amplify your reach and authority, but duplicate content issues can harm rankings if canonical links are missing from your setup.' },
      _embedded: null,
      readTime: '6 Min Read',
    },
  ];

  const displayPosts = posts.length >= 3 ? posts : fallback;
  const [featured, ...sidePosts] = displayPosts;
  const featuredImage = 'slug' in featured && featured._embedded
    ? getFeaturedImageUrl(featured as WordPressPost)
    : undefined;
  const featuredHref = featured.slug ? `/blog/${featured.slug}` : '/blog';
  const featuredCategory = 'category' in featured ? featured.category : categories[0];

  return (
    <section className={styles.section}>
      
      <div className={styles.container}>

        {/* ── Header Row ── */}
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <span className={styles.eyebrow}>{"// Resources & Insights"}</span>
            <h2 className={styles.title}>
              Knowledge That Creates <br />
              <span className={styles.titleAccent}>New Opportunities</span>
            </h2>
            <p className={styles.subtitle}>
              Explore practical articles, expert perspectives, and real-world ideas that help you stay informed, solve business challenges, and make confident decisions every step of the way.
            </p>
          </div>
          <div className={styles.headerRight}>
            <Link href="/blog" className={styles.viewAllBtn}>
              <span>View All Posts</span>
              <ArrowRight size={16} className={styles.btnArrow} />
            </Link>
          </div>
        </div>

        {/* ── Main Grid: Featured + Side Cards ── */}
        <div className={styles.mainGrid}>

          {/* Featured Card (large) */}
          <Link href={featuredHref} className={styles.featuredCard}>
            <div className={styles.featuredImgWrap}>
              {featuredImage ? (
                <Image
                  src={featuredImage}
                  alt={sanitizePlainText(featured.title.rendered)}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={styles.featuredImg}
                />
              ) : (
                <div className={styles.featuredPlaceholder}>
                  <div className={styles.placeholderOrb} />
                  <span className={styles.placeholderGlyph}>✦</span>
                </div>
              )}
              <div className={styles.featuredOverlay} />
              <span className={styles.categoryBadge}>{featuredCategory}</span>
              <div className={styles.featuredReadTime}>
                <Clock size={12} />
                <span>
                  {'readTime' in featured && featured.readTime
                    ? featured.readTime
                    : estimateReadTime(featured.excerpt.rendered)}
                </span>
              </div>
            </div>
            <div className={styles.featuredBody}>
              <h3 className={styles.featuredTitle}>
                {sanitizePlainText(featured.title.rendered)}
              </h3>
              <p className={styles.featuredExcerpt}>
                {limitWords(featured.excerpt.rendered, 24)}
              </p>
              <div className={styles.featuredCta}>
                <span>Read Article</span>
                <span className={styles.featuredArrow}>
                  <ChevronRight size={16} />
                </span>
              </div>
            </div>
          </Link>

          {/* Side Cards Stack */}
          <div className={styles.sideStack}>
            {sidePosts.map((post, i: number) => {
              const wpPost = post as WordPressPost;
              const img = wpPost._embedded ? getFeaturedImageUrl(wpPost) : undefined;
              const href = post.slug ? `/blog/${post.slug}` : '/blog';
              const cat = 'category' in post ? post.category : categories[i + 1] || 'SEO';

              return (
                <Link href={href} key={post.id} className={styles.sideCard}>
                  <div className={styles.sideImgWrap}>
                    {img ? (
                      <Image
                        src={img}
                        alt={sanitizePlainText(post.title.rendered)}
                        fill
                        sizes="200px"
                        className={styles.sideImg}
                      />
                    ) : (
                      <div className={styles.sidePlaceholder}>
                        <div className={styles.placeholderOrbSmall} />
                        <span className={styles.placeholderGlyphSmall}>✦</span>
                      </div>
                    )}
                    <span className={styles.sideCategoryBadge}>{cat}</span>
                  </div>
                  <div className={styles.sideBody}>
                    <h3 className={styles.sideTitle}>
                      {limitTitle(sanitizePlainText(post.title.rendered))}
                    </h3>
                    <p className={styles.sideExcerpt}>
                      {limitWords(post.excerpt.rendered, 14)}
                    </p>
                    <div className={styles.sideMeta}>
                      <span className={styles.sideReadTime}>
                        <Clock size={11} />
                        {('readTime' in post && post.readTime) || estimateReadTime(post.excerpt.rendered)}
                      </span>
                      <span className={styles.sideArrow}>
                        <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* ── CTA Banner ── */}
        {/* <div className={styles.ctaBanner}>
          <div className={styles.ctaBannerLeft}>
            <span className={styles.ctaBannerEyebrow}>Never Miss an Update</span>
            <p className={styles.ctaBannerText}>
              Get our latest SEO guides, marketing breakdowns, and agency case studies directly in your inbox.
            </p>
          </div>
          <Link href="/blog" className={styles.ctaBannerBtn}>
            <span>Explore All Articles</span>
            <ArrowRight size={16} className={styles.btnArrow} />
          </Link>
        </div> */}

      </div>
    </section>
  );
};

export default BlogPosts;
