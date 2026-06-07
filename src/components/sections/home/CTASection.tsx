'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';

export function CTASection() {
  return (
    <section className="relative bg-[#0f0f0f] py-24 lg:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-violet-600/8 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center" style={{ zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-white/40 text-xs tracking-[0.2em] uppercase mb-6">Ready To Start?</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight mb-8">
            Let&apos;s build something{' '}
            <span className="gradient-text">remarkable</span>{' '}
            together.
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
            Book a free strategy call. No sales pressure, no commitment. Just an honest conversation about your goals and how we can help you achieve them.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-400 text-white font-semibold text-base hover:opacity-90 transition-opacity shadow-xl shadow-violet-500/20"
            >
              Book a Free Strategy Call <ArrowRight size={18} />
            </Link>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white font-semibold text-base hover:bg-white/5 hover:border-white/40 transition-all"
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </a>
          </div>

          {/* Trust signals */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-white/30 text-sm">
            <span className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-green-400/20 flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
              </span>
              No commitment required
            </span>
            <span className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-green-400/20 flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
              </span>
              Free 30-min strategy call
            </span>
            <span className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-green-400/20 flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
              </span>
              Response within 24 hours
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
