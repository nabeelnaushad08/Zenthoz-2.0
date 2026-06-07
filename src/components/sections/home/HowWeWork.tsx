'use client';
import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Discovery Call',
    description: 'We start with a deep-dive into your business, goals, and challenges. No templates — just focused questions to understand exactly what you need.',
    duration: '1–2 days',
  },
  {
    number: '02',
    title: 'Strategy & Proposal',
    description: 'We craft a detailed project plan with clear deliverables, timeline, and investment. You know exactly what you are getting before we start.',
    duration: '2–3 days',
  },
  {
    number: '03',
    title: 'Build & Iterate',
    description: 'Our team executes in focused sprints. You see real progress weekly with live previews and direct communication — no black boxes.',
    duration: 'Project duration',
  },
  {
    number: '04',
    title: 'Launch & Scale',
    description: 'We don\'t just deliver and disappear. We ensure a successful launch and provide growth support to maximize the impact of everything we built.',
    duration: 'Ongoing',
  },
];

export function HowWeWork() {
  return (
    <section className="relative bg-[#0f0f0f] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-white/40 text-xs tracking-[0.2em] uppercase mb-4">Process</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6">
            How we <span className="gradient-text">work together</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            A proven process that delivers extraordinary results — every single time.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-white/10 to-transparent" style={{ zIndex: 0 }} />
              )}

              <div className="relative p-6 rounded-2xl border border-white/[0.08] bg-white/[0.02] h-full" style={{ zIndex: 1 }}>
                <div className="text-5xl font-black text-white/[0.04] mb-4 leading-none">{step.number}</div>
                <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-4">{step.description}</p>
                <span className="inline-block px-3 py-1 rounded-full bg-violet-600/10 text-violet-400 text-xs font-medium">
                  {step.duration}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
