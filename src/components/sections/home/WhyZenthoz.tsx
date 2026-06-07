'use client';

import { motion } from 'framer-motion';
import { X, Check } from 'lucide-react';

const comparisons = [
  'Strategic business partner',
  'Full-stack execution',
  'Results-based accountability',
  'Transparent communication',
  'Built for scale from day one',
  'AI & automation integrated',
  'Single point of contact',
  'Measurable ROI tracking',
];

const ease = [0.21, 0.47, 0.32, 0.98] as [number, number, number, number];

export function WhyZenthoz() {
  return (
    <section className="py-24 lg:py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease }}
        >
          <span className="tag-gradient mb-4 inline-block">Why Zenthoz</span>
          <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight mt-4">
            The agency model is{' '}
            <span className="gradient-text">broken.</span>
          </h2>
          <p className="mt-5 text-white/50 text-lg max-w-2xl mx-auto">
            We built Zenthoz to be the agency we always wished existed — one
            that operates like a world-class product team.
          </p>
        </motion.div>

        {/* Comparison table */}
        <motion.div
          className="glass-card rounded-3xl p-8 lg:p-10 overflow-hidden"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease, delay: 0.1 }}
        >
          {/* Table header */}
          <div className="grid grid-cols-3 mb-6">
            <div />
            <div className="text-center text-red-400 font-bold text-sm uppercase tracking-widest py-3">
              Agency
            </div>
            <div className="text-center text-violet-400 font-bold text-sm uppercase tracking-widest py-3">
              Zenthoz
            </div>
          </div>

          {/* Rows */}
          <div className="space-y-1">
            {comparisons.map((item, i) => (
              <motion.div
                key={item}
                className={`grid grid-cols-3 rounded-xl px-4 py-4 ${
                  i % 2 === 0 ? 'bg-white/[0.02]' : 'bg-white/[0.04]'
                }`}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, ease, delay: i * 0.07 }}
              >
                <div className="text-white/70 text-sm font-medium flex items-center">
                  {item}
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-7 h-7 rounded-full bg-red-500/10 flex items-center justify-center">
                    <X size={14} className="text-red-400" />
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-7 h-7 rounded-full bg-violet-500/10 flex items-center justify-center">
                    <Check size={14} className="text-violet-400" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
