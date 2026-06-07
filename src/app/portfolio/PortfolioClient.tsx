'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    category: 'E-commerce',
    title: 'Lumière Fashion',
    description: 'Complete brand overhaul and custom Shopify development for a luxury fashion brand looking to dominate the online space.',
    results: ['+340% Revenue', '4.8% CVR', '+220% Traffic'],
    tags: ['Web Dev', 'Brand Design', 'SEO'],
    gradient: 'from-violet-600/20 to-fuchsia-600/10',
    border: 'border-violet-500/20',
  },
  {
    category: 'SaaS',
    title: 'DataFlow AI',
    description: 'Full-stack SaaS platform with real-time analytics, user management, billing, and automated onboarding flows.',
    results: ['$50K MRR', '10 Weeks to Launch', '<2% Churn'],
    tags: ['Software', 'UI/UX', 'Automation'],
    gradient: 'from-cyan-600/20 to-blue-600/10',
    border: 'border-cyan-500/20',
  },
  {
    category: 'Professional Services',
    title: "O'Brien Law Group",
    description: 'Authority-building website, local SEO campaign, and automated client intake system for a regional law firm.',
    results: ['+500% Leads', '47 Page 1 Keywords', '-65% CPL'],
    tags: ['Web Dev', 'SEO', 'Automation'],
    gradient: 'from-emerald-600/20 to-teal-600/10',
    border: 'border-emerald-500/20',
  },
  {
    category: 'Logistics',
    title: 'Nexus Logistics',
    description: 'Custom fleet management dashboard, automated dispatch system, and real-time tracking portal for a growing logistics company.',
    results: ['+80% Efficiency', '100% On-time', '-40% Admin Cost'],
    tags: ['Software', 'Automation', 'Dashboard'],
    gradient: 'from-orange-600/20 to-amber-600/10',
    border: 'border-orange-500/20',
  },
  {
    category: 'Healthcare',
    title: 'MedCore Clinics',
    description: 'Patient portal, appointment booking system, and HIPAA-compliant data management platform for a multi-location clinic.',
    results: ['+300% Online Bookings', '98% Patient Satisfaction', 'Zero Compliance Issues'],
    tags: ['Software', 'Web Dev', 'Security'],
    gradient: 'from-pink-600/20 to-rose-600/10',
    border: 'border-pink-500/20',
  },
  {
    category: 'Fintech',
    title: 'Apex Capital',
    description: 'Premium brand identity and investor-facing website for a boutique investment firm entering a competitive market.',
    results: ['+250% Investor Inquiries', '3x Brand Perception', 'Premium Market Position'],
    tags: ['Brand Design', 'Web Dev', 'Strategy'],
    gradient: 'from-indigo-600/20 to-violet-600/10',
    border: 'border-indigo-500/20',
  },
];

export function PortfolioClient() {
  return (
    <div style={{ paddingTop: '72px' }}>
      {/* Hero */}
      <section className="relative bg-[#0a0a0a] py-20 lg:py-28 text-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-violet-600/8 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8" style={{ zIndex: 1 }}>
          <p className="text-white/40 text-xs tracking-[0.2em] uppercase mb-6">Our Work</p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-6">
            Real projects.{' '}
            <span className="gradient-text">Real results.</span>
          </h1>
          <p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
            Every project in our portfolio represents a business transformed through strategy, design, and technology.
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* Projects grid */}
      <section className="bg-[#0f0f0f] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`rounded-2xl p-6 lg:p-8 border ${project.border} bg-gradient-to-br ${project.gradient} hover:scale-[1.01] transition-transform duration-300`}
              >
                <div className="flex items-start justify-between mb-5">
                  <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-white/60 text-xs font-medium">
                    {project.category}
                  </span>
                  <ArrowUpRight size={16} className="text-white/30" />
                </div>
                <h3 className="text-2xl font-black text-white mb-3">{project.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-6">{project.description}</p>
                
                {/* Results */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.results.map((result) => (
                    <span key={result} className="px-3 py-1.5 rounded-lg bg-white/10 text-white text-xs font-semibold">
                      {result}
                    </span>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.08]">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-white/30 text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* CTA */}
      <section className="bg-[#0a0a0a] py-20 lg:py-28 text-center">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-6">
            Ready to be our{' '}
            <span className="gradient-text">next success story?</span>
          </h2>
          <p className="text-white/50 text-lg mb-10 leading-relaxed">
            Let&apos;s discuss your project and explore how we can help you achieve extraordinary results.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-400 text-white font-semibold hover:opacity-90 transition-opacity shadow-xl shadow-violet-500/20"
          >
            Start a Project
          </Link>
        </div>
      </section>
    </div>
  );
}
