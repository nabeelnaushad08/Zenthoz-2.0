'use client';
import { useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

/* ─── Framer Motion variants ─────────────────────────────────────────────── */
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] as [number,number,number,number] } },
};

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  /* Mouse-tracking spotlight */
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      el.style.setProperty('--mx', `${x}%`);
      el.style.setProperty('--my', `${y}%`);
    };
    el.addEventListener('mousemove', onMove);
    return () => el.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen aurora-bg bg-[#0a0a0a] flex items-center overflow-hidden"
      style={{ '--mx': '50%', '--my': '50%' } as React.CSSProperties}
    >
      {/* Mouse spotlight layer */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'radial-gradient(600px circle at var(--mx) var(--my), rgba(139,92,246,0.07), transparent 70%)',
          zIndex: 1,
        }}
      />

      {/* Animated floating orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" style={{ zIndex: 0 }}>
        <motion.div
          animate={{ y: [0, -28, 0], scale: [1, 1.08, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[12%] left-[6%] w-80 h-80 rounded-full bg-violet-600/10 blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 24, 0], scale: [1, 1.06, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute top-[50%] right-[4%] w-96 h-96 rounded-full bg-cyan-500/8 blur-3xl"
        />
        <motion.div
          animate={{ y: [0, -20, 0], scale: [1, 1.04, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
          className="absolute bottom-[8%] left-[35%] w-72 h-72 rounded-full bg-fuchsia-600/8 blur-3xl"
        />
      </div>

      {/* Subtle dot grid */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          opacity: 0.3,
          zIndex: 0,
        }}
      />

      {/* Main content */}
      <div
        className="relative w-full max-w-7xl mx-auto px-6 lg:px-8"
        style={{ zIndex: 2, paddingTop: '72px' }}
      >
        <motion.div
          className="max-w-5xl mx-auto text-center py-28 lg:py-36"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={item} className="flex justify-center mb-8">
            <span className="tag-gradient inline-flex items-center gap-2">
              <Sparkles size={11} />
              Available for new projects
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-[5.25rem] font-black leading-[1.04] tracking-[-0.03em] text-white mb-7"
          >
            We Engineer{' '}
            <span className="gradient-text-animated">Businesses</span>
            <br />
            That Refuse To Stay Small.
          </motion.h1>

          {/* Sub */}
          <motion.p
            variants={item}
            className="text-lg sm:text-xl text-white/50 max-w-2xl mx-auto mb-3 leading-relaxed"
          >
            Websites.&ensp;Software.&ensp;Automation.&ensp;Growth Systems.
          </motion.p>
          <motion.p variants={item} className="text-sm text-white/30 max-w-xl mx-auto mb-12">
            Built to generate measurable business outcomes — not just beautiful interfaces.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
          >
            <Link
              href="/contact"
              className="btn-gradient inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base w-full sm:w-auto shadow-xl shadow-violet-500/25"
            >
              Start A Project <ArrowRight size={17} />
            </Link>
            <Link
              href="/portfolio"
              className="btn-outline inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base w-full sm:w-auto"
            >
              Explore Our Work
            </Link>
          </motion.div>

          {/* Stats inline */}
          <motion.div
            variants={item}
            className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-lg mx-auto"
          >
            {[
              { value: '200+', label: 'Projects' },
              { value: '50+',  label: 'Clients' },
              { value: '98%',  label: 'Satisfaction' },
              { value: '5+',   label: 'Years' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-black text-white">{s.value}</div>
                <div className="text-white/30 text-xs tracking-widest uppercase mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{ zIndex: 2 }}>
        <motion.div
          animate={{ y: [0, 9, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-9 border border-white/15 rounded-full flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-white/30 rounded-full" />
        </motion.div>
        <span className="text-white/20 text-[10px] tracking-[0.2em] uppercase">Scroll</span>
      </div>
    </section>
  );
}
