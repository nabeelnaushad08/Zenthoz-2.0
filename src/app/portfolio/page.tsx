import type { Metadata } from 'next';
import { PortfolioClient } from './PortfolioClient';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Real projects, real results. Explore our case studies and see how Zenthoz has transformed businesses across industries.',
};

export default function PortfolioPage() {
  return <PortfolioClient />;
}
