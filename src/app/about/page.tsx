import type { Metadata } from 'next';
import { AboutClient } from './AboutClient';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about Zenthoz — our story, mission, values, and the team behind world-class digital experiences.',
};

export default function AboutPage() {
  return <AboutClient />;
}
