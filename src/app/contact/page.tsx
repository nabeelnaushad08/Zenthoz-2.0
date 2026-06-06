import type { Metadata } from 'next';
import { ContactClient } from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact',
  description: "Start your project with Zenthoz. Tell us about your goals and we'll engineer the perfect solution.",
};

export default function ContactPage() {
  return <ContactClient />;
}
