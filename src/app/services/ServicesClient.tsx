'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Search, TrendingUp, FileText, Palette, Globe, Code2, Cpu, Building2,
  Zap, Brain, BarChart3, Rocket, Check, ArrowRight
} from 'lucide-react';
import { GradientText } from '@/components/ui/GradientText';
import { SERVICES } from '@/lib/constants';

const iconMap: Record<string, React.ReactNode> = {
  Search: <Search size={24} />,
  TrendingUp: <TrendingUp size={24} />,
  FileText: <FileText size={24} />,
  Palette: <Palette size={24} />,
  Globe: <Globe size={24} />,
  Code2: <Code2 size={24} />,
  Cpu: <Cpu size={24} />,
  Building2: <Building2 size={24} />,
  Zap: <Zap size={24} />,
  Brain: <Brain size={24} />,
  BarChart3: <BarChart3 size={24} />,
  Rocket: <Rocket size={24} />,
};

const groups = [
  {
    id: 'growth',
    label: 'Growth',
    title: 'Grow Your Audience & Revenue',
    description: 'Marketing, SEO, and branding services designed to build your brand and drive measurable growth.',
    gradient: 'from-purple-600/10 to-purple-600/0',
    accent: 'text-purple-400',
    border: 'border-purple-500/20',
  },
  {
    id: 'systems',
    label: 'Systems',
    title: 'Build Powerful Digital Systems',
    description: 'Custom websites, apps, and software engineered for performance, scale, and conversion.',
    gradient: 'from-cyan-600/10 to-cyan-600/0',
    accent: 'text-cyan-400',
    border: 'border-cyan-500/20',
  },
  {
    id: 'scale',
    label: 'Scale',
    title: 'Scale With Intelligence',
    description: 'Automation, AI, and analytics that let you grow without proportionally growing costs.',
    gradient: 'from-pink-600/10 to-pink-600/0',
    accent: 'text-pink-400',
    border: 'border-pink-500/20',
  },
];

export function ServicesClient() {
  return (
    <div className="bg-[#0a0a0a] pt-24">
      {/* Hero */}
      <section className="py-20 lg:py-28 relative overflow-hidden text-center">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-purple-600/6 rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-white/40 text-sm tracking-widest uppercase mb-6">What We Offer</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-6">
              Services built to{' '}
              <GradientText>win</GradientText>
            </h1>
            <p className="text-xl text-white/50 leading-relaxed">
              Three pillars. One mission: engineer businesses that refuse to stay small.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Groups */}
      {groups.map((group, gi) => {
        const groupServices = SERVICES.filter((s) => s.group === group.id);
        return (
          <section
            key={group.id}
            id={group.id}
            className={`py-24 ${gi % 2 === 0 ? 'bg-[#0a0a0a]' : 'bg-[#080808]'}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-14"
              >
                <span className={`text-xs font-bold tracking-widest uppercase ${group.accent} mb-2 block`}>
                  {group.label}
                </span>
                <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-4">
                  {group.title}
                </h2>
                <p className="text-white/50 text-lg max-w-2xl">{group.description}</p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {groupServices.map((service, i) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className={`group rounded-2xl p-7 border ${group.border} bg-gradient-to-br ${group.gradient} hover:bg-white/[0.04] transition-all duration-300 flex flex-col`}
                  >
                    <div className={`w-12 h-12 rounded-xl bg-white/[0.04] flex items-center justify-center mb-5 ${group.accent}`}>
                      {iconMap[service.icon] || <Zap size={24} />}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed mb-5 flex-grow">{service.description}</p>
                    <ul className="space-y-2 mb-5">
                      {service.benefits.map((b) => (
                        <li key={b} className="flex items-center gap-2 text-sm text-white/50">
                          <Check size={12} className="text-green-400 flex-shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contact"
                      className={`inline-flex items-center gap-1 text-sm font-medium ${group.accent} hover:opacity-80 transition-opacity`}
                    >
                      Get started <ArrowRight size={14} />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="py-24 bg-[#080808] text-center">
        <div className="max-w-3xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-6">
              Not sure which service you need?
            </h2>
            <p className="text-white/50 text-lg mb-8">
              Tell us about your goals — we&apos;ll craft a custom solution that makes sense.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-400 text-white font-semibold text-lg hover:opacity-90 transition-opacity"
            >
              Start a Conversation <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
