import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/wp-rest";

const BASE_URL = "https://www.fixyads.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = [
    "",
    "/services",
    "/courses",
    "/services/search-engine-optimization",
    "/services/social-media-marketing",
    "/services/content-marketing-services",
    "/services/web-development",
    "/services/influencer-marketing",
    "/courses/digital-marketing",
    "/courses/web-development",
    "/courses/placement-support",
    "/about",
    "/blog",
    "/contact",
    "/privacy-policy",
    "/terms-of-service",
  ];

  const staticPages: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
  }));

  let blogPages: MetadataRoute.Sitemap = [];

  try {
    const posts = await getAllPosts();
    blogPages = posts.map((post) => ({
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.modified),
    }));
  } catch (error) {
    console.error("Sitemap: failed to fetch blog posts:", error);
  }

  return [...staticPages, ...blogPages];
}
