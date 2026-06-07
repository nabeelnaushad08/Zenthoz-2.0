'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen bg-[#0a0a0a] flex items-center overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-cyan-600/8 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 right-1/4 w-96 h-96 bg-fuchsia-600/8 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-8" style={{ zIndex: 1, paddingTop: '72px' }}>
        <div className="max-w-5xl mx-auto text-center py-24 lg:py-32">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] text-white/60 text-sm mb-10"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for new projects
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.05] tracking-tight mb-8"
          >
            We Engineer<br />
            <span className="gradient-text">Businesses</span><br />
            That Refuse To Stay Small.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-white/50 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Websites. Software. Automation. Growth Systems.<br className="hidden sm:block" />
            Built to generate measurable business outcomes.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-400 text-white font-semibold text-base hover:opacity-90 transition-opacity shadow-xl shadow-violet-500/20"
            >
              Start A Project <ArrowRight size={18} />
            </Link>
            <Link
              href="/portfolio"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white font-semibold text-base hover:bg-white/5 hover:border-white/40 transition-all"
            >
              Explore Our Work
            </Link>
          </motion.div>

          {/* Quick stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-20 pt-10 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 text-center"
          >
            {[
              { number: '200+', label: 'Projects Delivered' },
              { number: '98%', label: 'Client Satisfaction' },
              { number: '5+', label: 'Years Experience' },
              { number: '50+', label: 'Happy Clients' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-black text-white mb-1">{stat.number}</div>
                <div className="text-xs text-white/40 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
