import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans, Space_Mono } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import FloatingQuote from "@/components/FloatingQuote/FloatingQuote";
import TawkTo from "@/components/TawkTo/TawkTo";
import CubeWidget from "@/components/Cubewidget/Cubewidget";
import "./globals.css";
import Script from "next/script";
import { Providers } from "@/components/Providers";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
});

const spaceMono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fixyads.com"),
  title: "Digital Marketing Agency & Training Institute",
  description:
    "Expert digital marketing services and professional training courses in Digital Marketing and Java.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },

  verification: {
    google: "vmOOhhRZqulR4Ly_eNqZb1g1E_DkEzX836Q-NDP64oA",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PXM42PJ4');
          `}
        </Script>
      </head>
      <body className={`${spaceGrotesk.variable} ${dmSans.variable} ${spaceMono.variable}`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PXM42PJ4"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Providers>
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-0GMKDXQV76"
            strategy="afterInteractive"
          />
          <Script id="ga" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-0GMKDXQV76');
            `}
          </Script>

          <Script id="article-schema" type="application/ld+json" strategy="afterInteractive">
            {JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "Organization",
              url: "https://www.fixyads.com",
              logo: "https://www.fixyads.com/Logo/Newlogo.png",
              name: "Fixyads",
              description:
                "Expert Digital Marketing, Branding, and Social Media Marketing solutions built for measurable growth.",
              address: {
                "@type": "PostalAddress",
                email: "fixyads@gmail.com",
                telephone: "+91 84380 83853",
              },
              sameAs: [
                "https://www.instagram.com/fixyads/",
                "https://www.facebook.com/profile.php?id=61568361441860",
                "https://www.linkedin.com/company/fixyads/",
              ],
            })}
          </Script>

          <Navbar />
          <main
            style={{
              minHeight: "calc(100vh - 400px)",
              backgroundColor: "#ffffff",
            }}
          >
            {children}
            <FloatingQuote />
          </main>
          <Footer />

          <CubeWidget />
          <TawkTo />
        </Providers>
      </body>
    </html>
  );
}
