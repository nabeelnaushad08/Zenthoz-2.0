'use client';

import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { GradientText } from '@/components/ui/GradientText';

const comparisons = [
  { label: 'Strategic business partner', agency: false, zenthoz: true },
  { label: 'Full-stack execution (design + dev + marketing)', agency: false, zenthoz: true },
  { label: 'Results-based accountability', agency: false, zenthoz: true },
  { label: 'Transparent, real-time communication', agency: false, zenthoz: true },
  { label: 'Built for scale from day one', agency: false, zenthoz: true },
  { label: 'AI & automation integrated by default', agency: false, zenthoz: true },
  { label: 'Single point of contact', agency: false, zenthoz: true },
  { label: 'Measurable ROI tracking', agency: false, zenthoz: true },
];

export function WhyZenthoz() {
  return (
    <section className="py-28 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-white/40 text-sm tracking-widest uppercase mb-4">Why Zenthoz</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">
            Not your average{' '}
            <GradientText>agency</GradientText>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Agency column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/[0.06] p-8 bg-white/[0.01]"
          >
            <h3 className="text-xl font-bold text-white/40 mb-6 flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-white/5 text-sm">Typical Agency</span>
            </h3>
            <ul className="space-y-4">
              {comparisons.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-3"
                >
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center">
                    <X size={12} className="text-red-400" />
                  </span>
                  <span className="text-white/30 text-sm">{item.label}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Zenthoz column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-purple-500/20 p-8 bg-gradient-to-br from-purple-600/5 to-cyan-600/5 relative overflow-hidden"
          >
            {/* Glow */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <GradientText className="px-3 py-1 rounded-full text-sm" style={{ background: 'rgba(139,92,246,0.1)' }}>
                Zenthoz
              </GradientText>
            </h3>
            <ul className="space-y-4">
              {comparisons.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-3"
                >
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center">
                    <Check size={12} className="text-green-400" />
                  </span>
                  <span className="text-white text-sm">{item.label}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
