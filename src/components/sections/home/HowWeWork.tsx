'use client';
import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Discover',
    description: 'We deep-dive into your business, goals, and challenges — no templates, just focused listening to understand exactly what you need.',
  },
  {
    number: '02',
    title: 'Design',
    description: 'We craft a detailed strategy and visual blueprint with clear deliverables, timeline, and investment — before a single line of code is written.',
  },
  {
    number: '03',
    title: 'Engineer',
    description: 'Our team executes in focused sprints. You see real progress weekly with live previews and direct communication — no black boxes.',
  },
  {
    number: '04',
    title: 'Launch',
    description: 'We handle deployment, QA, and go-live with precision. Every launch is treated as a mission-critical event.',
  },
  {
    number: '05',
    title: 'Scale',
    description: 'We remain your growth partner post-launch — iterating, optimizing, and expanding your digital footprint over time.',
  },
];

const ease = [0.21, 0.47, 0.32, 0.98] as [number, number, number, number];

export function HowWeWork() {
  return (
    <section className="py-24 lg:py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease }}
        >
          <span className="tag-gradient mb-4 inline-block">Our Process</span>
          <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight mt-4">
            How we <span className="gradient-text">work together</span>
          </h2>
          <p className="mt-5 text-white/50 text-lg max-w-xl mx-auto">
            A proven process that delivers extraordinary results — every single time.
          </p>
        </motion.div>

        {/* Desktop: horizontal flex with connecting lines */}
        <div className="hidden lg:flex items-start gap-0">
          {steps.map((step, i) => (
            <div key={step.number} className="flex items-start flex-1">
              <motion.div
                className="flex flex-col items-center text-center flex-1"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, ease, delay: i * 0.07 }}
              >
                {/* Circle */}
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-violet-600 via-fuchsia-500 to-cyan-400 flex items-center justify-center text-white font-black text-lg mb-5 shrink-0 shadow-lg shadow-violet-500/20">
                  {step.number}
                </div>
                <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
                <p className="text-white/40 text-xs leading-relaxed max-w-[160px]">{step.description}</p>
              </motion.div>

              {/* Connector line between steps */}
              {i < steps.length - 1 && (
                <div className="flex-1 h-px bg-gradient-to-r from-violet-600/30 to-transparent mt-7 mx-2 shrink-0" style={{ minWidth: '24px' }} />
              )}
            </div>
          ))}
        </div>

        {/* Mobile: vertical timeline */}
        <div className="lg:hidden relative pl-8 border-l border-white/[0.08]">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className="mb-10 last:mb-0 relative"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease, delay: i * 0.07 }}
            >
              {/* Circle on timeline */}
              <div className="absolute -left-[2.85rem] w-9 h-9 rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-500 flex items-center justify-center text-white font-black text-sm shadow-lg shadow-violet-500/20">
                {step.number}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
