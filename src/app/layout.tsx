import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { LoadingScreen } from '@/components/ui/LoadingScreen';

export const metadata: Metadata = {
  title: {
    default: 'Zenthoz — We Engineer Businesses That Refuse To Stay Small',
    template: '%s | Zenthoz',
  },
  description:
    'Zenthoz engineers world-class websites, software, automation systems, and growth strategies for ambitious businesses. Premium digital solutions that drive measurable results.',
  keywords: [
    'web development',
    'digital agency',
    'software development',
    'automation',
    'AI integration',
    'SEO',
    'digital marketing',
    'branding',
    'Zenthoz',
  ],
  authors: [{ name: 'Zenthoz Technologies' }],
  creator: 'Zenthoz',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://zenthoz.com',
    title: 'Zenthoz — We Engineer Businesses That Refuse To Stay Small',
    description:
      'World-class websites, software, automation, and growth systems for ambitious businesses.',
    siteName: 'Zenthoz',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zenthoz — We Engineer Businesses That Refuse To Stay Small',
    description:
      'World-class websites, software, automation, and growth systems for ambitious businesses.',
    creator: '@zenthoz',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased bg-[#0a0a0a] text-white" style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
        <LoadingScreen />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
