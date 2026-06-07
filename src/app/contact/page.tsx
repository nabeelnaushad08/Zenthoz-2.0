import type { Metadata } from 'next';
import { ContactClient } from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact',
  description: "Get in touch with Zenthoz. Tell us about your project and we'll respond within 24 hours.",
};

export default function ContactPage() {
  return <ContactClient />;
}
