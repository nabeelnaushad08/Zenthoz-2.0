'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const cases = [
  {
    tag: 'E-commerce',
    title: 'Luxury Fashion Brand',
    result: '+340% online revenue in 6 months',
    description: 'Complete brand overhaul, custom Shopify build, and performance marketing system that tripled their online sales.',
    metrics: [
      { label: 'Revenue Growth', value: '+340%' },
      { label: 'Conversion Rate', value: '4.8%' },
      { label: 'Organic Traffic', value: '+220%' },
    ],
    gradient: 'from-violet-600/20 to-fuchsia-600/10',
    border: 'border-violet-500/20',
  },
  {
    tag: 'SaaS',
    title: 'B2B Analytics Platform',
    result: '0 to $50K MRR in 8 months',
    description: 'Full-stack SaaS application with real-time analytics dashboard, automated onboarding, and growth engine.',
    metrics: [
      { label: 'MRR Growth', value: '$50K' },
      { label: 'Time to Launch', value: '10 weeks' },
      { label: 'Churn Rate', value: '< 2%' },
    ],
    gradient: 'from-cyan-600/20 to-blue-600/10',
    border: 'border-cyan-500/20',
  },
  {
    tag: 'Professional Services',
    title: 'Law Firm Digital Presence',
    result: '500% increase in qualified leads',
    description: 'Authority-building website, local SEO domination, and automated client intake system that transformed their practice.',
    metrics: [
      { label: 'Lead Volume', value: '+500%' },
      { label: 'Page 1 Keywords', value: '47' },
      { label: 'Cost Per Lead', value: '-65%' },
    ],
    gradient: 'from-emerald-600/20 to-teal-600/10',
    border: 'border-emerald-500/20',
  },
];

export function CaseStudies() {
  return (
    <section className="relative bg-[#0a0a0a] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <p className="text-white/40 text-xs tracking-[0.2em] uppercase mb-4">Results</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">
              Real work,{' '}
              <span className="gradient-text">real results.</span>
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="flex items-center gap-2 text-white/50 hover:text-white text-sm font-medium transition-colors shrink-0"
          >
            View all case studies <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`rounded-2xl p-6 lg:p-8 border ${c.border} bg-gradient-to-br ${c.gradient} hover:scale-[1.01] transition-transform duration-300`}
            >
              <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-white/60 text-xs font-medium mb-5">
                {c.tag}
              </span>
              <h3 className="text-xl font-bold text-white mb-2">{c.title}</h3>
              <p className="text-white font-semibold mb-4 text-sm">{c.result}</p>
              <p className="text-white/50 text-sm leading-relaxed mb-6">{c.description}</p>
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/[0.08]">
                {c.metrics.map((m) => (
                  <div key={m.label}>
                    <div className="text-white font-bold text-lg">{m.value}</div>
                    <div className="text-white/40 text-xs mt-0.5">{m.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
