'use client';

import { motion } from 'framer-motion';
import { GradientText } from '@/components/ui/GradientText';
import { PROCESS_STEPS } from '@/lib/constants';

export function HowWeWork() {
  return (
    <section className="py-28 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-white/40 text-sm tracking-widest uppercase mb-4">Process</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">
            How we{' '}
            <GradientText>work</GradientText>
          </h2>
        </motion.div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:flex items-start gap-0">
          {PROCESS_STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex-1 relative"
            >
              {/* Connector line */}
              {i < PROCESS_STEPS.length - 1 && (
                <div className="absolute top-6 left-1/2 w-full h-px bg-gradient-to-r from-white/20 to-transparent" />
              )}

              <div className="relative flex flex-col items-center text-center px-4">
                {/* Number bubble */}
                <div className="relative z-10 w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center text-white font-bold text-sm mb-4 shadow-lg shadow-purple-500/20">
                  {step.number}
                </div>

                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile: vertical */}
        <div className="flex flex-col gap-0 lg:hidden">
          {PROCESS_STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-6 pb-10 relative"
            >
              {/* Vertical line */}
              {i < PROCESS_STEPS.length - 1 && (
                <div className="absolute left-5 top-12 bottom-0 w-px bg-gradient-to-b from-white/20 to-transparent" />
              )}

              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center text-white font-bold text-sm">
                {step.number}
              </div>

              <div className="pt-1">
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
