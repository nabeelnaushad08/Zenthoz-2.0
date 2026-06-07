'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Cpu, Zap, Brain, Palette, Megaphone } from 'lucide-react';

const cards = [
  {
    icon: TrendingUp,
    title: 'Growth Systems',
    description:
      'We architect end-to-end growth engines — from funnel strategy to conversion optimization — that compound results over time and scale without breaking.',
    iconBg: 'bg-violet-500/10',
    iconColor: 'text-violet-400',
    gradientFrom: 'from-violet-600/10',
    col: 'lg:col-span-2',
  },
  {
    icon: Cpu,
    title: 'Digital Systems',
    description:
      'Scalable web applications and platforms built for performance, reliability, and long-term growth.',
    iconBg: 'bg-cyan-500/10',
    iconColor: 'text-cyan-400',
    gradientFrom: 'from-cyan-600/10',
    col: '',
  },
  {
    icon: Zap,
    title: 'Automation',
    description:
      'Eliminate manual workflows with intelligent automation that saves time, reduces cost, and scales effortlessly.',
    iconBg: 'bg-amber-500/10',
    iconColor: 'text-amber-400',
    gradientFrom: 'from-amber-600/10',
    col: '',
  },
  {
    icon: Brain,
    title: 'AI Integration',
    description:
      'Embed cutting-edge AI capabilities into your product — from NLP to predictive analytics and intelligent decision systems.',
    iconBg: 'bg-fuchsia-500/10',
    iconColor: 'text-fuchsia-400',
    gradientFrom: 'from-fuchsia-600/10',
    col: '',
  },
  {
    icon: Palette,
    title: 'Brand Identity',
    description:
      'Craft a visual language that resonates — logo, design system, and brand guidelines built to stand the test of time.',
    iconBg: 'bg-orange-500/10',
    iconColor: 'text-orange-400',
    gradientFrom: 'from-orange-600/10',
    col: '',
  },
  {
    icon: Megaphone,
    title: 'Performance Marketing',
    description:
      'Data-driven paid media, SEO, and content strategies that deliver measurable ROI across every channel.',
    iconBg: 'bg-emerald-500/10',
    iconColor: 'text-emerald-400',
    gradientFrom: 'from-emerald-600/10',
    col: 'lg:col-span-2',
  },
];

const ease = [0.21, 0.47, 0.32, 0.98] as [number, number, number, number];

export function WhatWeBuild() {
  return (
    <section className="py-24 lg:py-32 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease }}
        >
          <span className="tag-gradient mb-4 inline-block">What We Build</span>
          <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight mt-4">
            Everything your business needs to{' '}
            <span className="gradient-text">dominate</span>
          </h2>
          <p className="mt-5 text-white/50 text-lg max-w-2xl mx-auto">
            We combine strategy, design, and engineering to build digital systems that grow with you.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                className={`glass-card rounded-2xl p-7 relative overflow-hidden group cursor-pointer ${card.col}`}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, ease, delay: i * 0.07 }}
                whileHover={{ y: -4 }}
              >
                {/* Gradient overlay — shows on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${card.gradientFrom} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl`}
                />

                <div className="relative z-10">
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${card.iconBg} mb-5`}
                  >
                    <Icon size={22} className={card.iconColor} />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {card.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {card.description}
                  </p>

                  <p className={`mt-5 text-sm font-semibold ${card.iconColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                    Learn more →
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
