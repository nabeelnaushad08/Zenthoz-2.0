'use client';

import { motion } from 'framer-motion';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { METRICS } from '@/lib/constants';

export function TrustMetrics() {
  return (
    <section className="py-20 border-y border-white/[0.06] bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-white/[0.06]">
          {METRICS.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex flex-col items-center text-center px-6"
            >
              <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-2">
                <AnimatedCounter
                  value={parseInt(metric.value)}
                  suffix={metric.suffix || ''}
                />
              </div>
              <p className="text-white/40 text-sm sm:text-base">{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
