'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Cpu, Zap, Brain, Palette, Megaphone } from 'lucide-react';
import { GradientText } from '@/components/ui/GradientText';

const categories = [
  {
    icon: TrendingUp,
    title: 'Growth Systems',
    description: 'SEO, content, and marketing engines that compound over time and dominate your market.',
    gradient: 'from-purple-600/20 to-purple-600/5',
    border: 'hover:border-purple-500/40',
    iconColor: 'text-purple-400',
    span: 'lg:col-span-2',
  },
  {
    icon: Cpu,
    title: 'Digital Systems',
    description: 'Custom websites, apps, and platforms built for performance and conversion.',
    gradient: 'from-cyan-600/20 to-cyan-600/5',
    border: 'hover:border-cyan-500/40',
    iconColor: 'text-cyan-400',
    span: '',
  },
  {
    icon: Zap,
    title: 'Automation',
    description: 'Eliminate bottlenecks. Automate workflows and multiply your team\'s output.',
    gradient: 'from-yellow-600/15 to-yellow-600/5',
    border: 'hover:border-yellow-500/40',
    iconColor: 'text-yellow-400',
    span: '',
  },
  {
    icon: Brain,
    title: 'AI Integration',
    description: 'Embed intelligence into your products and processes for unfair competitive advantage.',
    gradient: 'from-pink-600/20 to-pink-600/5',
    border: 'hover:border-pink-500/40',
    iconColor: 'text-pink-400',
    span: '',
  },
  {
    icon: Palette,
    title: 'Brand Identity',
    description: 'Identities that command attention, build trust, and make your brand unforgettable.',
    gradient: 'from-orange-600/15 to-orange-600/5',
    border: 'hover:border-orange-500/40',
    iconColor: 'text-orange-400',
    span: '',
  },
  {
    icon: Megaphone,
    title: 'Performance Marketing',
    description: 'Data-driven campaigns across every channel that generate measurable, scalable ROI.',
    gradient: 'from-green-600/15 to-green-600/5',
    border: 'hover:border-green-500/40',
    iconColor: 'text-green-400',
    span: 'lg:col-span-2',
  },
];

export function WhatWeBuild() {
  return (
    <section className="py-28 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-white/40 text-sm tracking-widest uppercase mb-4">What We Build</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">
            Six pillars of{' '}
            <GradientText>digital excellence</GradientText>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
                className={`group relative rounded-2xl p-8 border border-white/[0.06] bg-gradient-to-br ${cat.gradient} ${cat.border} transition-all duration-300 cursor-pointer overflow-hidden ${cat.span || ''}`}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-white/[0.02] to-transparent" />

                <div className={`inline-flex p-3 rounded-xl bg-white/[0.04] mb-4 ${cat.iconColor}`}>
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{cat.title}</h3>
                <p className="text-white/50 leading-relaxed">{cat.description}</p>

                {/* Arrow on hover */}
                <div className="mt-4 flex items-center gap-1 text-sm font-medium text-white/30 group-hover:text-white/70 transition-colors">
                  Learn more
                  <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
