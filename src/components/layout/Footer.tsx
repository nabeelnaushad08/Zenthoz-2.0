import Link from 'next/link';

const services = [
  { label: 'Business Websites', href: '/services' },
  { label: 'Web Applications', href: '/services' },
  { label: 'SEO & Marketing', href: '/services' },
  { label: 'AI Integration', href: '/services' },
  { label: 'Automation', href: '/services' },
  { label: 'Branding', href: '/services' },
];

const company = [
  { label: 'About Us', href: '/about' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Blog', href: '/blog' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];

export function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <span className="text-2xl font-black gradient-text" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              ZENTHOZ
            </span>
            <p className="mt-4 text-white/40 text-sm leading-relaxed max-w-xs">
              We engineer businesses that refuse to stay small.
            </p>
            {/* Social icons */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://twitter.com/zenthoz"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white/40 hover:text-white hover:bg-white/[0.08] transition-all text-xs font-bold"
              >
                X
              </a>
              <a
                href="https://linkedin.com/company/zenthoz"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white/40 hover:text-white hover:bg-white/[0.08] transition-all text-xs font-bold"
              >
                in
              </a>
              <a
                href="https://instagram.com/zenthoz"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white/40 hover:text-white hover:bg-white/[0.08] transition-all text-xs font-bold"
              >
                IG
              </a>
              <a
                href="https://github.com/zenthoz"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white/40 hover:text-white hover:bg-white/[0.08] transition-all text-xs font-bold"
              >
                GH
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs tracking-[0.15em] uppercase text-white/40 mb-5">Services</h3>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-white/50 hover:text-white/80 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs tracking-[0.15em] uppercase text-white/40 mb-5">Company</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-white/50 hover:text-white/80 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h3 className="text-xs tracking-[0.15em] uppercase text-white/40 mb-5">Get in Touch</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:hello@zenthoz.com" className="text-sm text-white/50 hover:text-white/80 transition-colors">
                  hello@zenthoz.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-sm text-white/50 hover:text-white/80 transition-colors">
                  WhatsApp
                </a>
              </li>
              <li>
                <p className="text-sm text-white/30">Global Operations, Remote First</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/25 text-xs">
            &copy; 2025 Zenthoz Technologies. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="text-white/25 text-xs hover:text-white/50 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-white/25 text-xs hover:text-white/50 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
