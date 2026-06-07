'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300`}
        style={{ height: '72px' }}
      >
        <div
          className={`h-full flex items-center transition-all duration-300 ${
            scrolled
              ? 'bg-[#0a0a0a]/85 backdrop-blur-xl border-b border-white/[0.07]'
              : 'bg-transparent'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full flex items-center justify-between">
            <Link href="/" className="flex-shrink-0">
              <span className="text-2xl font-black tracking-tight gradient-text" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                ZENTHOZ
              </span>
            </Link>
            <nav className="hidden lg:flex items-center gap-8">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-white ${
                    pathname === link.href ? 'text-white' : 'text-white/50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="hidden lg:block">
              <Link href="/contact" className="btn-gradient inline-flex items-center px-5 py-2.5 text-sm">
                Start a Project
              </Link>
            </div>
            <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-white/70 hover:text-white" aria-label="Menu">
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[#0a0a0a] flex flex-col items-center justify-center lg:hidden"
          >
            <nav className="flex flex-col items-center gap-8">
              {links.map((link) => (
                <Link key={link.href} href={link.href} className="text-3xl font-bold text-white/70 hover:text-white transition-colors">
                  {link.label}
                </Link>
              ))}
              <Link href="/contact" className="btn-gradient mt-4 inline-flex items-center px-8 py-4 text-lg">
                Start a Project
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
