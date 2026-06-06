'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { GradientText } from '@/components/ui/GradientText';
import { TESTIMONIALS } from '@/lib/constants';

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setCurrent((c) => (c + 1) % TESTIMONIALS.length);

  return (
    <section className="py-28 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-white/40 text-sm tracking-widest uppercase mb-4">Testimonials</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">
            What our{' '}
            <GradientText>clients say</GradientText>
          </h2>
        </motion.div>

        {/* Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl border border-white/[0.06] bg-white/[0.02] p-10 sm:p-16 overflow-hidden">
            {/* Background quote icon */}
            <div className="absolute top-8 right-8 opacity-5">
              <Quote size={80} />
            </div>

            {/* Gradient orb */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-72 h-36 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
              >
                <blockquote className="text-xl sm:text-2xl text-white/80 leading-relaxed font-light mb-8">
                  &ldquo;{TESTIMONIALS[current].quote}&rdquo;
                </blockquote>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center text-white font-bold">
                    {TESTIMONIALS[current].avatar}
                  </div>
                  <div>
                    <p className="text-white font-semibold">{TESTIMONIALS[current].name}</p>
                    <p className="text-white/40 text-sm">
                      {TESTIMONIALS[current].role}, {TESTIMONIALS[current].company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="flex items-center justify-between mt-10">
              <div className="flex gap-2">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === current
                        ? 'w-6 bg-gradient-to-r from-purple-500 to-pink-500'
                        : 'bg-white/20'
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  className="p-2 rounded-lg border border-white/10 text-white/50 hover:text-white hover:border-white/20 transition-colors"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={next}
                  className="p-2 rounded-lg border border-white/10 text-white/50 hover:text-white hover:border-white/20 transition-colors"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
