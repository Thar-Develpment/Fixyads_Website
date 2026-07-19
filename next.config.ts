import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 90],
    remotePatterns: [
      { protocol: "https", hostname: "**.wordpress.com" },
      { protocol: "https", hostname: "**.wp.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/web-development",
        destination: "/services/web-development",
        permanent: true,
      },
      {
        source: "/search-engine-optimization",
        destination: "/services/search-engine-optimization",
        permanent: true,
      },
      {
        source: "/social-media-marketing",
        destination: "/services/social-media-marketing",
        permanent: true,
      },
      {
        source: "/content-branding",
        destination: "/services/content-marketing-services",
        permanent: true,
      },
      {
        source: "/services/content-branding",
        destination: "/services/content-marketing-services",
        permanent: true,
      },
      {
        source: "/services/email-marketing",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/influencer-marketing",
        destination: "/services/influencer-marketing",
        permanent: true,
      },
      {
        source: "/digital-marketing-course",
        destination: "/courses/digital-marketing",
        permanent: true,
      },
      {
        source: "/web-development-course",
        destination: "/courses/web-development",
        permanent: true,
      },
      {
        source: "/placement-support",
        destination: "/courses/placement-support",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
