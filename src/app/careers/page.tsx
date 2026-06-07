import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Join Zenthoz. We are always looking for exceptional talent to join our team of builders, designers, and strategists.',
};

const openings = [
  {
    title: 'Senior Full-Stack Developer',
    type: 'Full-time',
    location: 'Remote',
    department: 'Engineering',
    description: 'Build and architect complex web applications and APIs using modern tech stacks. You will own entire features end-to-end.',
  },
  {
    title: 'UI/UX Designer',
    type: 'Full-time',
    location: 'Remote',
    department: 'Design',
    description: 'Create exceptional user experiences that drive business results. You translate strategy into stunning, functional interfaces.',
  },
  {
    title: 'SEO & Content Strategist',
    type: 'Full-time',
    location: 'Remote',
    department: 'Growth',
    description: 'Develop and execute comprehensive SEO strategies for our clients. You understand search inside out and are obsessed with rankings.',
  },
  {
    title: 'Project Manager',
    type: 'Full-time',
    location: 'Remote',
    department: 'Operations',
    description: 'Own client relationships and project delivery from kickoff to launch. You are organized, proactive, and love keeping things on track.',
  },
];

const perks = [
  { title: 'Fully Remote', description: 'Work from anywhere in the world. We care about output, not office hours.' },
  { title: 'Competitive Pay', description: 'Top-of-market salaries with performance bonuses for exceptional work.' },
  { title: 'Continuous Learning', description: '$2,000 annual budget for courses, conferences, and tools.' },
  { title: 'Flexible Hours', description: 'Async-first culture. You set your schedule around your peak performance hours.' },
  { title: 'Health Benefits', description: 'Comprehensive health coverage for you and your family.' },
  { title: 'Equity Options', description: 'Be part of building something big. Long-term incentives for key team members.' },
];

export default function CareersPage() {
  return (
    <div style={{ paddingTop: '72px' }}>
      <section className="relative bg-[#0a0a0a] py-20 lg:py-28 text-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-violet-600/8 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8" style={{ zIndex: 1 }}>
          <p className="text-white/40 text-xs tracking-[0.2em] uppercase mb-6">Careers</p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-6">
            Build the future{' '}
            <span className="gradient-text">with us.</span>
          </h1>
          <p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
            We are a team of exceptional people who love hard problems. If that sounds like you, we want to talk.
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* Perks */}
      <section className="bg-[#0f0f0f] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Why join <span className="gradient-text">Zenthoz?</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
            {perks.map((perk) => (
              <div key={perk.title} className="rounded-2xl p-6 border border-white/[0.08] bg-white/[0.02]">
                <h3 className="text-white font-bold mb-2">{perk.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{perk.description}</p>
              </div>
            ))}
          </div>

          {/* Openings */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Open <span className="gradient-text">positions</span>
            </h2>
          </div>
          <div className="space-y-4">
            {openings.map((job) => (
              <div
                key={job.title}
                className="rounded-2xl p-6 lg:p-8 border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="inline-block px-2.5 py-1 rounded-full bg-violet-600/10 text-violet-400 text-xs font-medium">
                        {job.department}
                      </span>
                      <span className="text-white/30 text-xs">{job.type} · {job.location}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{job.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{job.description}</p>
                  </div>
                  <Link
                    href="/contact"
                    className="shrink-0 inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-400 hover:opacity-90 transition-opacity"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* General CTA */}
          <div className="mt-12 text-center p-8 rounded-2xl border border-white/[0.08] bg-white/[0.02]">
            <h3 className="text-xl font-bold text-white mb-3">Don&apos;t see your role?</h3>
            <p className="text-white/50 text-sm mb-5">We are always interested in exceptional talent. Send us your story.</p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 rounded-full text-sm font-semibold text-white border border-white/20 hover:bg-white/5 hover:border-white/40 transition-all"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
