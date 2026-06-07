'use client';
import { motion } from 'framer-motion';
import { Globe, Code2, Bot, BarChart3, Palette, ShieldCheck } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    description: 'High-performance websites and web applications that convert visitors into customers with pixel-perfect design.',
    color: 'text-violet-400',
    bg: 'bg-violet-600/10',
  },
  {
    icon: Code2,
    title: 'Software Solutions',
    description: 'Custom software systems, APIs, and platforms built for scale — from MVPs to enterprise-grade applications.',
    color: 'text-cyan-400',
    bg: 'bg-cyan-600/10',
  },
  {
    icon: Bot,
    title: 'Automation & AI',
    description: 'End-to-end automation workflows and AI integrations that eliminate manual work and multiply your output.',
    color: 'text-fuchsia-400',
    bg: 'bg-fuchsia-600/10',
  },
  {
    icon: BarChart3,
    title: 'SEO & Growth',
    description: 'Data-driven SEO strategies and growth systems that compound over time, delivering consistent organic traffic.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-600/10',
  },
  {
    icon: Palette,
    title: 'Brand Design',
    description: 'Strategic branding and visual identity systems that position your business as the premium choice in your market.',
    color: 'text-orange-400',
    bg: 'bg-orange-600/10',
  },
  {
    icon: ShieldCheck,
    title: 'Digital Strategy',
    description: 'Comprehensive digital roadmaps and go-to-market strategies that turn your vision into measurable growth.',
    color: 'text-pink-400',
    bg: 'bg-pink-600/10',
  },
];

export function WhatWeBuild() {
  return (
    <section className="relative bg-[#0a0a0a] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-white/40 text-xs tracking-[0.2em] uppercase mb-4">What We Build</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6">
            Six pillars of{' '}
            <span className="gradient-text">digital excellence</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Every service we offer is built around one goal: making your business impossible to ignore.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="rounded-2xl p-6 lg:p-8 border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 group cursor-pointer"
              >
                <div className={`w-10 h-10 rounded-xl ${service.bg} flex items-center justify-center ${service.color} mb-5`}>
                  <Icon size={20} />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{service.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
