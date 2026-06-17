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
    "/services/content-branding",
    "/services/web-development",
    "/services/influencer-marketing",

    "/courses/digital-marketing",
    "/courses/web-development",
    "/courses/placement-support",

    "/about",
    "/blog",
    "/contact",
    "/portfolio",
    "/testimonials",
    "/privacy-policy",
    "/terms-of-service",
  ];

  const staticPages = staticRoutes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
  }));

  const posts = await getAllPosts();

  const blogPages = posts.map((post: any) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.modified),
  }));

  return [...staticPages, ...blogPages];
}