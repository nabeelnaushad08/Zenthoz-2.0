import Link from 'next/link';

const services = [
  { label: 'Web Development', href: '/services' },
  { label: 'Software Solutions', href: '/services' },
  { label: 'Automation Systems', href: '/services' },
  { label: 'SEO & Growth', href: '/services' },
  { label: 'AI Integration', href: '/services' },
  { label: 'Brand Design', href: '/services' },
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
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <span className="text-2xl font-black gradient-text">ZENTHOZ</span>
            <p className="mt-4 text-white/40 text-sm leading-relaxed max-w-xs">
              We engineer businesses that refuse to stay small. World-class digital solutions for ambitious brands.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a href="https://twitter.com/zenthoz" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white/40 hover:text-white hover:bg-white/[0.08] transition-all">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://linkedin.com/company/zenthoz" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white/40 hover:text-white hover:bg-white/[0.08] transition-all">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="https://instagram.com/zenthoz" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white/40 hover:text-white hover:bg-white/[0.08] transition-all">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-5">Services</h3>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-white/40 hover:text-white/70 text-sm transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-5">Company</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-white/40 hover:text-white/70 text-sm transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-5">Get In Touch</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:hello@zenthoz.com" className="text-white/40 hover:text-white/70 text-sm transition-colors">
                  hello@zenthoz.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/1234567890" className="text-white/40 hover:text-white/70 text-sm transition-colors">
                  WhatsApp Us
                </a>
              </li>
            </ul>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-400 hover:opacity-90 transition-opacity"
              >
                Start a Project
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} Zenthoz Technologies. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="text-white/30 hover:text-white/60 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-white/30 hover:text-white/60 text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
