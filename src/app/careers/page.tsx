import type { Metadata } from 'next';
import Link from 'next/link';
import { GradientText } from '@/components/ui/GradientText';

export const metadata: Metadata = {
  title: 'Careers',
  description: "Join the Zenthoz team. We're building the future of digital business — come build it with us.",
};

const openRoles = [
  {
    title: 'Senior Full-Stack Engineer',
    type: 'Full-time',
    location: 'Remote',
    department: 'Engineering',
    description: 'Build production-grade web applications using Next.js, TypeScript, and modern cloud infrastructure.',
  },
  {
    title: 'UI/UX Designer',
    type: 'Full-time',
    location: 'Remote',
    department: 'Design',
    description: 'Design world-class digital experiences that convert. Expertise in Figma and interaction design required.',
  },
  {
    title: 'Growth Strategist',
    type: 'Full-time',
    location: 'Remote',
    department: 'Growth',
    description: 'Drive measurable growth for clients through SEO, paid media, and data-driven marketing strategies.',
  },
  {
    title: 'AI/ML Engineer',
    type: 'Full-time',
    location: 'Remote',
    department: 'Engineering',
    description: 'Integrate AI capabilities into client products and internal tooling. LLM experience preferred.',
  },
];

const perks = [
  { title: 'Fully Remote', desc: 'Work from anywhere in the world.' },
  { title: 'Competitive Pay', desc: 'Top-of-market compensation.' },
  { title: 'Equity Options', desc: 'Own a piece of what you build.' },
  { title: 'Learning Budget', desc: '$2,000/year for courses & conferences.' },
  { title: 'Flexible Hours', desc: 'We care about output, not hours.' },
  { title: 'Premium Tools', desc: 'Best-in-class software and hardware.' },
];

export default function CareersPage() {
  return (
    <div className="bg-[#0a0a0a]">
      {/* Hero */}
      <section className="page-hero pb-16 lg:pb-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-purple-600/6 rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <p className="text-white/40 text-sm tracking-widest uppercase mb-6">We&apos;re Hiring</p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-6">
            Build the future{' '}
            <br />
            <GradientText>with us</GradientText>
          </h1>
          <p className="text-xl text-white/50 max-w-2xl mx-auto leading-relaxed">
            Zenthoz is a team of builders, designers, and strategists who care deeply about their craft. If you love creating things that matter, you&apos;ll fit right in.
          </p>
        </div>
      </section>

      {/* Why Zenthoz */}
      <section className="py-20 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">
              Why work at <GradientText>Zenthoz?</GradientText>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {perks.map((perk) => (
              <div key={perk.title} className="rounded-2xl p-6 border border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-lg font-bold text-white mb-2">{perk.title}</h3>
                <p className="text-white/50 text-sm">{perk.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="py-28 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">
              Open <GradientText>positions</GradientText>
            </h2>
          </div>
          <div className="space-y-4">
            {openRoles.map((role) => (
              <div
                key={role.title}
                className="group rounded-2xl p-6 border border-white/[0.06] bg-white/[0.01] hover:border-purple-500/30 hover:bg-white/[0.03] transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="flex-grow">
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="text-xs px-2.5 py-1 rounded-full bg-purple-600/10 text-purple-400 font-medium">{role.department}</span>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-white/[0.04] text-white/40">{role.type}</span>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-white/[0.04] text-white/40">{role.location}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">{role.title}</h3>
                  <p className="text-white/50 text-sm">{role.description}</p>
                </div>
                <Link
                  href="/contact"
                  className="flex-shrink-0 px-5 py-2.5 rounded-full border border-white/20 text-white text-sm font-medium hover:border-purple-500/40 hover:bg-purple-600/5 transition-all"
                >
                  Apply Now
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center py-10 border border-white/[0.06] rounded-2xl bg-white/[0.01]">
            <p className="text-white/60 mb-2">Don&apos;t see a role that fits?</p>
            <p className="text-white/40 text-sm mb-6">We&apos;re always looking for exceptional talent. Send us your portfolio.</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-400 text-white font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Send Open Application
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
