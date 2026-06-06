'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { GradientText } from '@/components/ui/GradientText';
import { CASE_STUDIES } from '@/lib/constants';

export function CaseStudies() {
  return (
    <section className="py-28 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6"
        >
          <div>
            <p className="text-white/40 text-sm tracking-widest uppercase mb-4">Case Studies</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">
              Results that{' '}
              <GradientText>speak</GradientText>
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm font-medium"
          >
            View all work <ArrowUpRight size={16} />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {CASE_STUDIES.map((study, i) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-2xl border border-white/[0.06] overflow-hidden bg-white/[0.01] hover:border-white/10 transition-all duration-300"
            >
              {/* Gradient header */}
              <div className={`h-48 bg-gradient-to-br ${study.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0a0a]/60" />
                <div className="absolute bottom-4 left-6">
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-white/10 text-white/70">
                    {study.industry}
                  </span>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
                    <ArrowUpRight size={14} className="text-white" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">{study.client}</h3>

                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-medium text-white/30 uppercase tracking-wider mb-1">Challenge</p>
                    <p className="text-sm text-white/60">{study.challenge}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-white/30 uppercase tracking-wider mb-1">Solution</p>
                    <p className="text-sm text-white/60">{study.solution}</p>
                  </div>
                  <div className="pt-4 border-t border-white/[0.06]">
                    <p className="text-xs font-medium text-green-400 uppercase tracking-wider mb-1">Outcome</p>
                    <p className="text-sm text-white font-medium">{study.outcome}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
