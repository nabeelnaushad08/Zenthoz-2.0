'use client';
import { motion } from 'framer-motion';
import { X, Check } from 'lucide-react';

const comparisons = [
  {
    label: 'Delivery Time',
    agency: 'Months of back-and-forth',
    zenthoz: 'Rapid, sprint-based delivery',
  },
  {
    label: 'Communication',
    agency: 'Account managers relay messages',
    zenthoz: 'Direct access to your team',
  },
  {
    label: 'Strategy',
    agency: 'Generic templates and playbooks',
    zenthoz: 'Custom strategy for your goals',
  },
  {
    label: 'Results Focus',
    agency: 'Deliverables over outcomes',
    zenthoz: 'ROI-driven, measurable results',
  },
  {
    label: 'Tech Stack',
    agency: 'Outdated or bloated platforms',
    zenthoz: 'Modern, best-in-class tools',
  },
  {
    label: 'Pricing',
    agency: 'Hidden fees and scope creep',
    zenthoz: 'Transparent, project-based pricing',
  },
];

export function WhyZenthoz() {
  return (
    <section className="relative bg-[#0f0f0f] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-white/40 text-xs tracking-[0.2em] uppercase mb-4">Why Zenthoz</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6">
            The agency model is{' '}
            <span className="gradient-text">broken.</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            We built Zenthoz to be the agency we always wished existed — one that operates like a world-class product team.
          </p>
        </div>

        {/* Comparison table */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-white/[0.08] overflow-hidden"
        >
          {/* Table header */}
          <div className="grid grid-cols-3 bg-white/[0.03] border-b border-white/[0.08]">
            <div className="px-6 py-5 text-white/40 text-xs font-medium uppercase tracking-wider">Category</div>
            <div className="px-6 py-5 text-white/40 text-xs font-medium uppercase tracking-wider border-x border-white/[0.08]">Typical Agency</div>
            <div className="px-6 py-5 flex items-center gap-2 text-xs font-medium uppercase tracking-wider">
              <span className="gradient-text">Zenthoz</span>
            </div>
          </div>

          {/* Rows */}
          {comparisons.map((row, i) => (
            <div
              key={row.label}
              className={`grid grid-cols-3 border-b border-white/[0.06] last:border-0 ${
                i % 2 === 0 ? 'bg-transparent' : 'bg-white/[0.01]'
              }`}
            >
              <div className="px-6 py-5 text-white/60 text-sm font-medium">{row.label}</div>
              <div className="px-6 py-5 border-x border-white/[0.08] flex items-start gap-2">
                <X size={14} className="text-red-400/60 mt-0.5 shrink-0" />
                <span className="text-white/40 text-sm">{row.agency}</span>
              </div>
              <div className="px-6 py-5 flex items-start gap-2">
                <Check size={14} className="text-green-400 mt-0.5 shrink-0" />
                <span className="text-white/80 text-sm">{row.zenthoz}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
