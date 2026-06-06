'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { GradientText } from '@/components/ui/GradientText';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: 'easeOut' as const },
  }),
};

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const gradientRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !gradientRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      mouseRef.current = { x, y };
      gradientRef.current.style.background = `radial-gradient(800px circle at ${x}% ${y}%, rgba(139,92,246,0.08) 0%, transparent 60%)`;
    };

    const container = containerRef.current;
    container?.addEventListener('mousemove', handleMouseMove);
    return () => container?.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]"
    >
      {/* Mouse-tracking gradient */}
      <div
        ref={gradientRef}
        className="absolute inset-0 pointer-events-none transition-all duration-300"
      />

      {/* Static orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-purple-600/8 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-cyan-500/6 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 20, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
          className="absolute top-1/2 right-1/3 w-[250px] h-[250px] rounded-full bg-pink-500/5 blur-3xl"
        />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24">
        {/* Badge */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-white/60 text-sm mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Available for new projects
        </motion.div>

        {/* Headline */}
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[1.05] mb-6"
        >
          We Engineer{' '}
          <br className="hidden sm:block" />
          <GradientText>Businesses</GradientText>
          <br />
          That Refuse To
          <br className="hidden sm:block" />
          {' '}Stay Small.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-xl sm:text-2xl text-white/50 font-light max-w-2xl mx-auto mb-10 tracking-wide"
        >
          Websites.{' '}
          <span className="text-white/70">Software.</span>{' '}
          Automation.{' '}
          <span className="text-white/70">Growth Systems.</span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-400 text-white font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg shadow-purple-500/20"
          >
            Start A Project
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white font-semibold text-lg hover:border-white/40 hover:bg-white/5 transition-all"
          >
            <Play size={16} className="fill-current" />
            Explore Our Work
          </Link>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-20 flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-8 border border-white/20 rounded-full flex items-start justify-center p-1"
          >
            <div className="w-1 h-2 bg-white/40 rounded-full" />
          </motion.div>
          <span className="text-white/20 text-xs tracking-widest uppercase">Scroll</span>
        </motion.div>
      </div>
    </section>
  );
}
