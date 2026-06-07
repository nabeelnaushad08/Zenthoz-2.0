import type { Metadata } from 'next';
import { ServicesClient } from './ServicesClient';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Six core digital services to help your business grow: web development, software, automation, SEO, brand design, and digital strategy.',
};

export default function ServicesPage() {
  return <ServicesClient />;
}
