'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Globe, Code2, Bot, BarChart3, Palette, ShieldCheck, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    tagline: 'Websites that convert, not just impress.',
    description: 'We build high-performance websites and web applications from the ground up. Every project starts with business goals and ends with measurable results.',
    features: ['Custom design & development', 'Next.js & React applications', 'E-commerce platforms', 'CMS integration', 'Performance optimization', 'Mobile-first responsive design'],
    color: 'text-violet-400',
    bg: 'bg-violet-600/10',
    border: 'border-violet-500/20',
  },
  {
    icon: Code2,
    title: 'Software Solutions',
    tagline: 'Custom software that scales with your ambition.',
    description: 'From MVPs to enterprise platforms, we architect and build software systems that solve real business problems and handle real user scale.',
    features: ['Custom web applications', 'API development & integration', 'Database architecture', 'SaaS platforms', 'Admin dashboards', 'Third-party integrations'],
    color: 'text-cyan-400',
    bg: 'bg-cyan-600/10',
    border: 'border-cyan-500/20',
  },
  {
    icon: Bot,
    title: 'Automation & AI',
    tagline: 'Eliminate manual work. Multiply your output.',
    description: 'We build intelligent automation systems and AI integrations that free your team from repetitive tasks and unlock new capabilities.',
    features: ['Workflow automation', 'AI chatbots & assistants', 'Data processing pipelines', 'CRM automation', 'Email & marketing automation', 'Custom AI integrations'],
    color: 'text-fuchsia-400',
    bg: 'bg-fuchsia-600/10',
    border: 'border-fuchsia-500/20',
  },
  {
    icon: BarChart3,
    title: 'SEO & Growth',
    tagline: 'Organic traffic that compounds over time.',
    description: 'Data-driven SEO strategies and growth systems that put your business in front of buyers when they are actively searching for what you offer.',
    features: ['Technical SEO audit', 'Keyword strategy & content plan', 'On-page optimization', 'Link building', 'Local SEO', 'Monthly performance reporting'],
    color: 'text-emerald-400',
    bg: 'bg-emerald-600/10',
    border: 'border-emerald-500/20',
  },
  {
    icon: Palette,
    title: 'Brand Design',
    tagline: 'Position your brand as the only choice.',
    description: 'Strategic branding and visual identity systems that communicate your value instantly and make your business unforgettable in a crowded market.',
    features: ['Brand strategy & positioning', 'Logo & visual identity', 'Brand guidelines', 'UI/UX design', 'Marketing collateral', 'Brand refresh & evolution'],
    color: 'text-orange-400',
    bg: 'bg-orange-600/10',
    border: 'border-orange-500/20',
  },
  {
    icon: ShieldCheck,
    title: 'Digital Strategy',
    tagline: 'A roadmap from where you are to where you want to be.',
    description: 'Comprehensive digital roadmaps and go-to-market strategies that align your digital investments with your business objectives.',
    features: ['Digital audit & assessment', 'Competitive analysis', 'Go-to-market strategy', 'Technology stack consulting', 'Growth roadmap', 'Ongoing advisory'],
    color: 'text-pink-400',
    bg: 'bg-pink-600/10',
    border: 'border-pink-500/20',
  },
];

export function ServicesClient() {
  return (
    <div style={{ paddingTop: '72px' }}>
      {/* Hero */}
      <section className="relative bg-[#0a0a0a] py-20 lg:py-28 text-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-violet-600/8 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-600/6 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8" style={{ zIndex: 1 }}>
          <p className="text-white/40 text-xs tracking-[0.2em] uppercase mb-6">Our Services</p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-6">
            Everything your business needs to{' '}
            <span className="gradient-text">dominate online.</span>
          </h1>
          <p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
            Six core capabilities. One unified team. Infinite possibilities for your growth.
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* Services list */}
      <section className="bg-[#0f0f0f] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`rounded-2xl p-6 lg:p-10 border ${service.border} bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                  <div className="lg:col-span-1">
                    <div className={`w-12 h-12 rounded-xl ${service.bg} flex items-center justify-center ${service.color} mb-5`}>
                      <Icon size={24} />
                    </div>
                    <h2 className="text-2xl font-black text-white mb-2">{service.title}</h2>
                    <p className={`text-sm font-medium ${service.color} mb-4`}>{service.tagline}</p>
                    <p className="text-white/50 text-sm leading-relaxed">{service.description}</p>
                  </div>
                  <div className="lg:col-span-2">
                    <h3 className="text-white/40 text-xs uppercase tracking-wider mb-4">What&apos;s included</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-3">
                          <div className={`w-1.5 h-1.5 rounded-full ${service.bg} ${service.color} shrink-0`} style={{ background: 'currentColor' }} />
                          <span className="text-white/70 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <div className="section-divider" />

      {/* CTA */}
      <section className="bg-[#0a0a0a] py-20 lg:py-28 text-center">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-6">
            Not sure what you need?{' '}
            <span className="gradient-text">Let&apos;s talk.</span>
          </h2>
          <p className="text-white/50 text-lg mb-10 leading-relaxed">
            Book a free consultation and we&apos;ll help you figure out exactly which services will drive the most impact for your business.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-400 text-white font-semibold hover:opacity-90 transition-opacity shadow-xl shadow-violet-500/20"
          >
            Book a Free Call <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
