'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { GradientText } from '@/components/ui/GradientText';
import { PROJECTS } from '@/lib/constants';

const categories = ['All', 'Web', 'Software', 'Branding', 'Marketing'];

export function PortfolioClient() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  return (
    <div className="bg-[#0a0a0a] pt-24">
      {/* Hero */}
      <section className="py-20 lg:py-28 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-pink-600/5 rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-white/40 text-sm tracking-widest uppercase mb-6">Our Work</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-6">
              Projects that{' '}
              <GradientText>deliver</GradientText>
            </h1>
            <p className="text-xl text-white/50">
              A selection of work we&apos;re proud of. Every project, a story of transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <div className="sticky top-16 lg:top-20 z-30 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/[0.06] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`flex-shrink-0 px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  active === cat
                    ? 'bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-400 text-white'
                    : 'bg-white/[0.04] text-white/50 hover:text-white hover:bg-white/[0.08]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="popLayout">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((project, i) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  className="group relative rounded-2xl border border-white/[0.06] overflow-hidden bg-white/[0.01] hover:border-white/10 transition-all duration-300"
                >
                  {/* Image placeholder */}
                  <div className={`h-52 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40" />
                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                      <span className="text-xs font-medium px-3 py-1 rounded-full bg-black/30 backdrop-blur-sm text-white/80">
                        {project.category}
                      </span>
                    </div>
                    {/* Hover action */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                        <ArrowUpRight size={20} className="text-white" />
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-white/40"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center border-t border-white/[0.06]">
        <div className="max-w-2xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              Ready to be our next{' '}
              <GradientText>success story?</GradientText>
            </h2>
            <p className="text-white/50 mb-8">Let&apos;s build something remarkable together.</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-400 text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Start a Project
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
