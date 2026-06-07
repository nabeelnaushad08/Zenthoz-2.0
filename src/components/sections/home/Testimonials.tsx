'use client';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "Zenthoz didn't just build us a website — they built us a revenue engine. Within 3 months we had more leads than our entire previous year.",
    name: 'Sarah Chen',
    role: 'CEO',
    company: 'NovaTech Solutions',
    rating: 5,
  },
  {
    quote: "The level of strategic thinking they brought to our project was unlike any agency we had worked with. They thought like founders, not vendors.",
    name: 'Marcus Williams',
    role: 'Founder',
    company: 'Apex Capital',
    rating: 5,
  },
  {
    quote: "We launched our SaaS in 10 weeks. The software quality is production-grade. Their automation systems alone saved us 40 hours per week.",
    name: 'Priya Patel',
    role: 'CTO',
    company: 'DataFlow AI',
    rating: 5,
  },
  {
    quote: "Professional, responsive, and incredibly talented. Zenthoz transformed our digital presence and the results speak for themselves.",
    name: 'James O\'Brien',
    role: 'Managing Partner',
    company: 'O\'Brien & Associates',
    rating: 5,
  },
  {
    quote: "Our e-commerce sales tripled in 6 months after Zenthoz rebuilt everything. Best investment we have ever made in the business.",
    name: 'Layla Mahmoud',
    role: 'Director of Marketing',
    company: 'Lumière Fashion',
    rating: 5,
  },
  {
    quote: "They delivered ahead of schedule, on budget, and the quality exceeded our expectations. We have continued to work with them ever since.",
    name: 'David Kim',
    role: 'Operations Director',
    company: 'Nexus Logistics',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="relative bg-[#0a0a0a] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-white/40 text-xs tracking-[0.2em] uppercase mb-4">Testimonials</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6">
            Trusted by <span className="gradient-text">ambitious founders</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Don&apos;t take our word for it. Here&apos;s what our clients say.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl p-6 border border-white/[0.08] bg-white/[0.02] flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <svg key={j} width="14" height="14" viewBox="0 0 24 24" fill="#F59E0B" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-white/70 text-sm leading-relaxed flex-1 mb-5">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center text-white text-sm font-bold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">{t.name}</div>
                  <div className="text-white/40 text-xs">{t.role}, {t.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
