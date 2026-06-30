import type { WordPressPost } from "@/types/wordpress";

const WP_BASE =
  "https://public-api.wordpress.com/wp/v2/sites/fixyadscom.wordpress.com";

const REVALIDATE_SECONDS = 3600;
const MAX_PAGES = 20; // safety cap: 20 × 100 = 2000 posts

const fetchOptions = { next: { revalidate: REVALIDATE_SECONDS } } as const;

async function fetchPostsPage(page: number, perPage: number): Promise<WordPressPost[]> {
  const res = await fetch(
    `${WP_BASE}/posts?per_page=${perPage}&page=${page}&_embed`,
    fetchOptions
  );

  if (res.status === 400) {
    // WordPress returns 400 when page exceeds total pages
    return [];
  }

  if (!res.ok) {
    throw new Error(`Failed to fetch posts (page ${page}): ${res.status}`);
  }

  return res.json();
}

/** Fetch all published posts with pagination (for sitemap). */
export async function getAllPosts(): Promise<WordPressPost[]> {
  const allPosts: WordPressPost[] = [];
  const perPage = 100;

  for (let page = 1; page <= MAX_PAGES; page++) {
    const batch = await fetchPostsPage(page, perPage);
    if (batch.length === 0) break;
    allPosts.push(...batch);
    if (batch.length < perPage) break;
  }

  return allPosts;
}

/** Fetch latest posts for list pages (default 20). */
export async function getPosts(limit = 20): Promise<WordPressPost[]> {
  const res = await fetch(
    `${WP_BASE}/posts?per_page=${limit}&orderby=date&order=desc&_embed`,
    fetchOptions
  );

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  return res.json();
}

/** Safe fetch — returns empty array on failure instead of crashing the page. */
export async function getPostsSafe(limit = 20): Promise<WordPressPost[]> {
  try {
    return await getPosts(limit);
  } catch (error) {
    console.error("WordPress fetch failed:", error);
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<WordPressPost | null> {
  const res = await fetch(
    `${WP_BASE}/posts?slug=${encodeURIComponent(slug)}&_embed`,
    fetchOptions
  );

  if (!res.ok) {
    throw new Error("Failed to fetch post");
  }

  const posts: WordPressPost[] = await res.json();
  return posts?.[0] ?? null;
}

export function getFeaturedImageUrl(post: WordPressPost): string | undefined {
  return post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
}

export function estimateReadTime(html: string): string {
  const text = html.replace(/<[^>]*>/g, " ");
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} Min Read`;
}
