import type { Metadata } from 'next';
import { ServicesClient } from './ServicesClient';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Comprehensive digital services: Growth, Systems, and Scale. From websites to AI integration — Zenthoz engineers the full stack of your digital success.',
};

export default function ServicesPage() {
  return <ServicesClient />;
}
