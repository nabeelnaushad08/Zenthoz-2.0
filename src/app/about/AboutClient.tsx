'use client';
import { motion } from 'framer-motion';
import { Target, Eye, Zap, Star, Users, Award } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Results-Obsessed',
    description: 'Every decision we make is filtered through one question: does this drive measurable outcomes for our clients?',
  },
  {
    icon: Star,
    title: 'Uncompromising Quality',
    description: 'We hold ourselves to the highest standards in every pixel, line of code, and strategy we deliver.',
  },
  {
    icon: Eye,
    title: 'Radical Transparency',
    description: 'No hidden fees. No vague timelines. You always know exactly where your project stands and why.',
  },
  {
    icon: Zap,
    title: 'Speed With Purpose',
    description: 'We move fast because your time is valuable — but never at the expense of the quality you deserve.',
  },
  {
    icon: Users,
    title: 'Partnership Mindset',
    description: 'We treat your business like our own. Your growth is our growth. Your wins are our wins.',
  },
  {
    icon: Award,
    title: 'Continuous Excellence',
    description: 'We are always learning, always improving. The best work we have done is always our next project.',
  },
];

const milestones = [
  { year: '2019', event: 'Founded with a mission to change how agencies work' },
  { year: '2020', event: 'First 10 clients — built entirely through referrals' },
  { year: '2021', event: 'Launched our software division, tripling service capabilities' },
  { year: '2022', event: 'Crossed 100 projects delivered across 15 countries' },
  { year: '2023', event: 'Introduced AI & automation services to our stack' },
  { year: '2024', event: 'Over 200 projects delivered, 50+ active clients globally' },
];

export function AboutClient() {
  return (
    <div style={{ paddingTop: '72px' }}>
      {/* Hero */}
      <section className="relative bg-[#0a0a0a] py-20 lg:py-28 text-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-violet-600/8 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-600/6 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8" style={{ zIndex: 1 }}>
          <p className="text-white/40 text-xs tracking-[0.2em] uppercase mb-6">Our Story</p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-6">
            About <span className="gradient-text">Zenthoz</span>
          </h1>
          <p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
            We are a team of builders, designers, and strategists obsessed with creating digital products that generate real business results.
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* Mission */}
      <section className="bg-[#0f0f0f] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-white/40 text-xs tracking-[0.2em] uppercase mb-4">Our Mission</p>
              <h2 className="text-4xl lg:text-5xl font-black tracking-tight mb-6">
                We engineer businesses that refuse to stay small.
              </h2>
              <p className="text-white/50 text-lg leading-relaxed mb-6">
                Zenthoz was founded on a simple but powerful belief: every ambitious business deserves access to world-class digital infrastructure — not just the big players with massive budgets.
              </p>
              <p className="text-white/50 leading-relaxed">
                We combine the strategic thinking of a top-tier consultancy with the execution speed of a product team. The result? Digital systems that compound in value over time and give our clients a lasting competitive advantage.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { label: 'Projects Delivered', value: '200+' },
                { label: 'Happy Clients', value: '50+' },
                { label: 'Years of Excellence', value: '5+' },
                { label: 'Countries Served', value: '15+' },
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl p-6 border border-white/[0.08] bg-white/[0.02] text-center">
                  <div className="text-4xl font-black text-white mb-2">{stat.value}</div>
                  <div className="text-white/40 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Values */}
      <section className="bg-[#0a0a0a] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-white/40 text-xs tracking-[0.2em] uppercase mb-4">Our Values</p>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight">
              How we <span className="gradient-text">operate</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="rounded-2xl p-6 border border-white/[0.08] bg-white/[0.02]"
                >
                  <div className="w-10 h-10 rounded-xl bg-violet-600/10 flex items-center justify-center text-violet-400 mb-4">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{v.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{v.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Timeline */}
      <section className="bg-[#0f0f0f] py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-white/40 text-xs tracking-[0.2em] uppercase mb-4">Journey</p>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight">
              Our <span className="gradient-text">milestones</span>
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-violet-600/40 via-fuchsia-600/30 to-transparent" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="relative flex items-start gap-6 pl-12"
                >
                  <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center text-white text-xs font-bold shrink-0" />
                  <div>
                    <span className="text-white/40 text-xs font-mono mb-1 block">{m.year}</span>
                    <p className="text-white/80 text-sm leading-relaxed">{m.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
