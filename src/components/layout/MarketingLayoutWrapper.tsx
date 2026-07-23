'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import FloatingQuote from '@/components/FloatingQuote/FloatingQuote';
import TawkTo from '@/components/TawkTo/TawkTo';
import CubeWidget from '@/components/Cubewidget/Cubewidget';

interface MarketingLayoutWrapperProps {
  children: React.ReactNode;
}

export default function MarketingLayoutWrapper({ children }: MarketingLayoutWrapperProps) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith('/admin');

  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <>
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
    </>
  );
}
