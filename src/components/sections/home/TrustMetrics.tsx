'use client';

import { motion } from 'framer-motion';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';

const metrics = [
  { value: 200, suffix: '+', label: 'Projects Delivered' },
  { value: 5, suffix: '+', label: 'Years Experience' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
  { value: 15, suffix: '+', label: 'Industries Served' },
];

const ease = [0.21, 0.47, 0.32, 0.98] as [number, number, number, number];

export function TrustMetrics() {
  return (
    <section className="bg-[#0a0a0a] border-y border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 divide-x divide-white/[0.06]">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              className="py-10 px-8 text-center"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: ease, delay: i * 0.07 }}
            >
              <div className="text-5xl lg:text-6xl font-black text-white leading-none">
                <AnimatedCounter value={metric.value} suffix={metric.suffix} duration={1800} />
              </div>
              <p className="text-white/40 text-sm mt-2">{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
