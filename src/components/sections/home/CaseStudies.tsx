'use client';

import { motion } from 'framer-motion';

const cases = [
  {
    industry: 'E-commerce',
    title: 'E-commerce Platform',
    challenge: '2s page load killing conversions',
    solution: 'Next.js + edge CDN with ISR',
    outcome: '340% conversion increase',
    metric: '+340% Conversions',
    metricColor: 'from-violet-500 to-fuchsia-500',
    borderColor: 'from-violet-500/60 via-fuchsia-500/30 to-transparent',
  },
  {
    industry: 'SaaS',
    title: 'SaaS Dashboard',
    challenge: 'No user retention after signup',
    solution: 'AI-powered UX + automation flows',
    outcome: '4.8x engagement improvement',
    metric: '4.8x Engagement',
    metricColor: 'from-cyan-500 to-blue-500',
    borderColor: 'from-cyan-500/60 via-blue-500/30 to-transparent',
  },
  {
    industry: 'Marketing',
    title: 'Marketing Campaign',
    challenge: 'Low ROI on ad spend',
    solution: 'Data-driven targeting + landing pages',
    outcome: '8x ROAS achieved',
    metric: '8x ROAS',
    metricColor: 'from-emerald-500 to-teal-500',
    borderColor: 'from-emerald-500/60 via-teal-500/30 to-transparent',
  },
];

const ease = [0.21, 0.47, 0.32, 0.98] as [number, number, number, number];

export function CaseStudies() {
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
          <span className="tag-gradient mb-4 inline-block">Case Studies</span>
          <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight mt-4">
            Real work,{' '}
            <span className="gradient-text">real results.</span>
          </h2>
          <p className="mt-5 text-white/50 text-lg max-w-2xl mx-auto">
            Every project is an opportunity to engineer measurable growth. Here
            is what we have delivered.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <motion.div
              key={c.title}
              className="glass-card rounded-2xl p-7 relative overflow-hidden flex flex-col"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease, delay: i * 0.07 }}
              whileHover={{ y: -4 }}
            >
              {/* Top gradient border */}
              <div
                className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${c.borderColor}`}
              />

              {/* Industry tag */}
              <span className="tag-gradient mb-4 self-start">{c.industry}</span>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-5">{c.title}</h3>

              {/* Details */}
              <div className="space-y-4 flex-1">
                <div>
                  <p className="text-white/30 text-xs uppercase tracking-widest mb-1">Challenge</p>
                  <p className="text-white/60 text-sm">{c.challenge}</p>
                </div>
                <div>
                  <p className="text-white/30 text-xs uppercase tracking-widest mb-1">Solution</p>
                  <p className="text-white/60 text-sm">{c.solution}</p>
                </div>
                <div>
                  <p className="text-white/30 text-xs uppercase tracking-widest mb-1">Outcome</p>
                  <p className="text-white/80 text-sm font-medium">{c.outcome}</p>
                </div>
              </div>

              {/* Metric badge */}
              <div className="mt-6 pt-5 border-t border-white/[0.06]">
                <div
                  className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${c.metricColor} text-white text-sm font-bold`}
                >
                  {c.metric}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
