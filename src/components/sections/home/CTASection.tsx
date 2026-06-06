'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { GradientText } from '@/components/ui/GradientText';

export function CTASection() {
  return (
    <section className="py-32 bg-[#080808] relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-500/6 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#080808]/50 to-transparent" />
      </div>

      {/* Top border gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-white/40 text-sm tracking-widest uppercase mb-6">Ready to Begin?</p>

          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight leading-tight mb-6">
            Ready to Build{' '}
            <br />
            <GradientText>Something Extraordinary?</GradientText>
          </h2>

          <p className="text-white/50 text-xl mb-12 max-w-2xl mx-auto">
            Join 200+ companies that trusted Zenthoz to engineer their digital future. Let&apos;s build yours.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-400 text-white font-semibold text-lg hover:opacity-90 transition-opacity shadow-2xl shadow-purple-500/20"
            >
              Start A Project
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-5 rounded-full border border-white/20 text-white font-semibold text-lg hover:border-white/40 hover:bg-white/5 transition-all"
            >
              Explore Services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
