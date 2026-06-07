import type { Metadata } from 'next';
import './globals.css';
import '@fontsource/space-grotesk/400.css';
import '@fontsource/space-grotesk/500.css';
import '@fontsource/space-grotesk/600.css';
import '@fontsource/space-grotesk/700.css';
import '@fontsource/dm-sans/400.css';
import '@fontsource/dm-sans/500.css';
import '@fontsource/dm-sans/700.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Zenthoz — We Engineer Businesses That Refuse To Stay Small',
    template: '%s | Zenthoz',
  },
  description:
    'World-class websites, software, automation systems, and growth strategies for ambitious businesses.',
  keywords: ['web development', 'digital agency', 'software development', 'automation', 'AI integration', 'Zenthoz'],
  authors: [{ name: 'Zenthoz Technologies' }],
  creator: 'Zenthoz',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://zenthoz.com',
    title: 'Zenthoz — We Engineer Businesses That Refuse To Stay Small',
    description: 'World-class websites, software, automation, and growth systems for ambitious businesses.',
    siteName: 'Zenthoz',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zenthoz — We Engineer Businesses That Refuse To Stay Small',
    description: 'World-class websites, software, automation, and growth systems for ambitious businesses.',
    creator: '@zenthoz',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#0a0a0a] text-white antialiased">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
