'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { GradientText } from '@/components/ui/GradientText';

const footerLinks = {
  services: [
    { label: 'Business Websites', href: '/services#websites' },
    { label: 'Web Applications', href: '/services#web-apps' },
    { label: 'SEO & Marketing', href: '/services#seo' },
    { label: 'AI Integration', href: '/services#ai' },
    { label: 'Automation', href: '/services#automation' },
    { label: 'Branding', href: '/services#branding' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Blog', href: '/blog' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Service', href: '/terms-of-service' },
  ],
};

const SocialIcon = ({ label }: { label: string }) => {
  const icons: Record<string, string> = {
    Twitter: 'X',
    LinkedIn: 'in',
    Instagram: 'ig',
    GitHub: 'gh',
  };
  return <span className="text-xs font-bold">{icons[label] || label[0]}</span>;
};

const socialLinks = [
  { href: 'https://twitter.com/zenthoz', label: 'Twitter' },
  { href: 'https://linkedin.com/company/zenthoz', label: 'LinkedIn' },
  { href: 'https://instagram.com/zenthoz', label: 'Instagram' },
  { href: 'https://github.com/zenthoz', label: 'GitHub' },
];

export function Footer() {
  return (
    <footer className="relative bg-[#080808] border-t border-white/[0.06] pt-16 pb-8">
      {/* Background gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <GradientText className="text-2xl font-black tracking-tight mb-4 block">
              ZENTHOZ
            </GradientText>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              We engineer businesses that refuse to stay small. World-class digital solutions for ambitious brands.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(({ href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="p-2 w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.06] text-white/40 hover:text-white hover:border-white/20 transition-colors flex items-center justify-center"
                  aria-label={label}
                >
                  <SocialIcon label={label} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm tracking-wider uppercase">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm tracking-wider uppercase">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm tracking-wider uppercase">Get In Touch</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@zenthoz.com"
                  className="flex items-center gap-2 text-white/50 text-sm hover:text-white transition-colors"
                >
                  <Mail size={14} />
                  hello@zenthoz.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/1234567890"
                  className="flex items-center gap-2 text-white/50 text-sm hover:text-white transition-colors"
                >
                  <Phone size={14} />
                  +1 (234) 567-8900
                </a>
              </li>
              <li className="flex items-start gap-2 text-white/50 text-sm">
                <MapPin size={14} className="mt-0.5 flex-shrink-0" />
                <span>Global Operations, Remote First</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            &copy; {new Date().getFullYear()} Zenthoz Technologies. All rights reserved.
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/30 text-sm hover:text-white/60 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
