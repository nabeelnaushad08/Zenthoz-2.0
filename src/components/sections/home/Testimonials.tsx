'use client';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "Zenthoz transformed our entire digital infrastructure. They don't just build — they engineer growth.",
    name: 'Sarah Mitchell',
    role: 'CEO',
    company: 'NexaCommerce',
  },
  {
    quote: "We tried 3 agencies before Zenthoz. The difference in quality and results was night and day.",
    name: 'Marcus Johnson',
    role: 'Founder',
    company: 'ScaleUp',
  },
  {
    quote: "Our customer acquisition cost dropped 60% in 3 months. These people know what they're doing.",
    name: 'Priya Sharma',
    role: 'CMO',
    company: 'TechVenture',
  },
];

const ease = [0.21, 0.47, 0.32, 0.98] as [number, number, number, number];

export function Testimonials() {
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
          <span className="tag-gradient mb-4 inline-block">Testimonials</span>
          <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight mt-4">
            Trusted by <span className="gradient-text">ambitious founders</span>
          </h2>
          <p className="mt-5 text-white/50 text-lg max-w-xl mx-auto">
            Don&apos;t take our word for it. Here&apos;s what our clients say.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease, delay: i * 0.07 }}
              className="glass-card rounded-2xl p-7 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <svg key={j} width="16" height="16" viewBox="0 0 24 24" fill="#F59E0B" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Large opening quote */}
              <div className="text-5xl font-black gradient-text leading-none mb-3 select-none">&ldquo;</div>

              {/* Quote text */}
              <p className="text-white/70 text-base leading-relaxed flex-1 mb-6">
                {t.quote}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-white/[0.06]">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-600 via-fuchsia-500 to-cyan-400 flex items-center justify-center text-white text-sm font-black shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">{t.name}</div>
                  <div className="text-white/40 text-xs">{t.role} at {t.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
