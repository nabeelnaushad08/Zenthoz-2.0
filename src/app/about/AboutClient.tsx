'use client';

import { motion } from 'framer-motion';
import { Star, Target, Eye, Zap, BookOpen } from 'lucide-react';
import { GradientText } from '@/components/ui/GradientText';
import { TEAM_MEMBERS, MILESTONES, COMPANY_VALUES } from '@/lib/constants';

const valueIcons: Record<string, React.ReactNode> = {
  Star: <Star size={24} />,
  Target: <Target size={24} />,
  Eye: <Eye size={24} />,
  Handshake: <Star size={24} />,
  Zap: <Zap size={24} />,
  BookOpen: <BookOpen size={24} />,
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

export function AboutClient() {
  return (
    <div className="bg-[#0a0a0a] pt-24">
      {/* Hero */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-purple-600/6 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-white/40 text-sm tracking-widest uppercase mb-6">About Zenthoz</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-6">
              Built by builders,{' '}
              <br />
              <GradientText>for builders</GradientText>
            </h1>
            <p className="text-xl text-white/50 max-w-3xl mx-auto leading-relaxed">
              Zenthoz was founded on a simple belief: every ambitious business deserves world-class digital execution. We&apos;re not just an agency — we&apos;re the engineering team your business always needed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl p-10 border border-white/[0.06] bg-white/[0.02] relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400" />
              <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-white/60 leading-relaxed text-lg">
                To democratize world-class digital execution — giving every ambitious business access to the engineering talent, creative firepower, and strategic intelligence that was once reserved for Fortune 500 companies.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl p-10 border border-white/[0.06] bg-white/[0.02] relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500" />
              <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
              <p className="text-white/60 leading-relaxed text-lg">
                A world where great ideas aren&apos;t held back by poor execution. We envision Zenthoz as the global standard for digital excellence — the first call any ambitious founder or enterprise leader makes.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-28 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-white/40 text-sm tracking-widest uppercase mb-4">What We Stand For</p>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight">
              Our core <GradientText>values</GradientText>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMPANY_VALUES.map((value, i) => (
              <motion.div
                key={value.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group rounded-2xl p-8 border border-white/[0.06] bg-white/[0.02] hover:border-purple-500/30 hover:bg-white/[0.04] transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600/20 to-pink-500/20 flex items-center justify-center text-purple-400 mb-4">
                  {valueIcons[value.icon] || <Star size={24} />}
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{value.title}</h3>
                <p className="text-white/50 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-28 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-white/40 text-sm tracking-widest uppercase mb-4">The Team</p>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight">
              The people behind the <GradientText>magic</GradientText>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM_MEMBERS.map((member, i) => (
              <motion.div
                key={member.id}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group rounded-2xl p-6 border border-white/[0.06] bg-white/[0.02] hover:border-white/10 transition-all duration-300 text-center"
              >
                {/* Avatar */}
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-600 via-pink-500 to-cyan-400 mx-auto mb-4 flex items-center justify-center text-2xl font-black text-white">
                  {member.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
                <p className="text-purple-400 text-sm font-medium mb-3">{member.role}</p>
                <p className="text-white/40 text-sm leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-28 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-white/40 text-sm tracking-widest uppercase mb-4">Our Journey</p>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight">
              Milestones that <GradientText>matter</GradientText>
            </h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-16 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-pink-500/30 to-transparent" />

            <div className="space-y-12">
              {MILESTONES.map((milestone, i) => (
                <motion.div
                  key={milestone.year}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className={`flex items-start gap-6 ${i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}
                >
                  <div className={`hidden sm:block flex-1 ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    {i % 2 !== 0 && (
                      <div className="rounded-xl p-5 border border-white/[0.06] bg-white/[0.02] inline-block text-left">
                        <p className="text-white font-bold mb-1">{milestone.title}</p>
                        <p className="text-white/40 text-sm">{milestone.description}</p>
                      </div>
                    )}
                    {i % 2 === 0 && (
                      <div className="rounded-xl p-5 border border-white/[0.06] bg-white/[0.02] inline-block text-left">
                        <p className="text-white font-bold mb-1">{milestone.title}</p>
                        <p className="text-white/40 text-sm">{milestone.description}</p>
                      </div>
                    )}
                  </div>

                  <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">{milestone.year.slice(2)}</span>
                  </div>

                  <div className="flex-1 sm:hidden">
                    <p className="text-purple-400 text-sm font-bold mb-1">{milestone.year}</p>
                    <p className="text-white font-bold mb-1">{milestone.title}</p>
                    <p className="text-white/40 text-sm">{milestone.description}</p>
                  </div>

                  <div className="hidden sm:block flex-1">
                    {i % 2 !== 0 && (
                      <p className="text-purple-400 font-bold text-lg">{milestone.year}</p>
                    )}
                    {i % 2 === 0 && (
                      <p className="text-purple-400 font-bold text-lg">{milestone.year}</p>
                    )}
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
