import type { Metadata } from 'next';
import { PortfolioClient } from './PortfolioClient';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Explore Zenthoz projects — web, software, branding, and marketing work that drives real results.',
};

export default function PortfolioPage() {
  return <PortfolioClient />;
}
