import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import GoogleAnalytics from '@/components/analytics/google-analytics';
import Hotjar from '@/components/analytics/hotjar';
import CrispChat from '@/components/chat/crisp';
import ExitIntentPopup from '@/components/marketing/exit-intent-popup';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'BY1.net - Leading AI & Automation Solutions | Transform Your Business',
  description: 'Transform your business with BY1.net\'s enterprise AI and automation solutions. Reduce costs by 60%, achieve 3s response times, and join the 95% satisfied clients. Expert consulting for digital evolution.',
  keywords: 'AI solutions, business automation, digital transformation, RPA, machine learning, process optimization, enterprise AI, ROI optimization, workflow automation',
  authors: [{ name: 'BY1.net' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://by1.net',
    siteName: 'BY1.net',
    title: 'BY1.net - Enterprise AI & Automation Solutions',
    description: 'Transform your business with cutting-edge AI and automation solutions. 60% cost reduction, 3s response times, 95% client satisfaction.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'BY1.net - AI & Automation Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BY1.net - Enterprise AI & Automation Solutions',
    description: 'Transform your business with cutting-edge AI and automation. 60% cost reduction, 3s response times.',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          suppressHydrationWarning
        >
          <Header />
          <main>{children}</main>
          <Footer />
          <Toaster />
          <ExitIntentPopup />
          {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
            <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
          )}
          {process.env.NEXT_PUBLIC_HOTJAR_ID && process.env.NEXT_PUBLIC_HOTJAR_VERSION && (
            <Hotjar 
              hjid={process.env.NEXT_PUBLIC_HOTJAR_ID} 
              hjsv={process.env.NEXT_PUBLIC_HOTJAR_VERSION} 
            />
          )}
          {process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID && (
            <CrispChat websiteId={process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID} />
          )}
        </ThemeProvider>
      </body>
    </html>
  );
}