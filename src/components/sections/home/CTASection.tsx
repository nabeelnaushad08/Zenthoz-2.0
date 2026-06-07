'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

const ease = [0.21, 0.47, 0.32, 0.98] as [number, number, number, number];

export function CTASection() {
  return (
    <section className="relative aurora-bg py-24 lg:py-32 overflow-hidden bg-[#080808]">
      {/* Decorative gradient orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-fuchsia-600/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-cyan-600/8 rounded-full blur-[80px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center" style={{ zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease }}
        >
          <span className="tag-gradient mb-6 inline-block">Ready To Begin?</span>

          {/* Heading with glow effect */}
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 via-fuchsia-500/20 to-cyan-400/20 blur-3xl -z-10 scale-150" />
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight mb-6">
              Ready to Build Something
              <br />
              <span className="gradient-text-animated">Extraordinary?</span>
            </h2>
          </div>

          <p className="text-white/50 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Tell us about your project. We respond within 24 hours.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-gradient inline-flex items-center px-8 py-4 text-base w-full sm:w-auto justify-center">
              Start A Project
            </Link>
            <a
              href="mailto:hello@zenthoz.com"
              className="btn-outline inline-flex items-center px-8 py-4 text-base w-full sm:w-auto justify-center"
            >
              hello@zenthoz.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
