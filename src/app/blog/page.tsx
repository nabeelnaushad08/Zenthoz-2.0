import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Insights, strategies, and ideas from the Zenthoz team on web development, growth, and digital business.',
};

const posts = [
  {
    date: 'June 1, 2025',
    category: 'Web Development',
    title: 'Why Your Website Is Costing You Customers (And How to Fix It)',
    excerpt: 'Most business websites fail at the one job they have: converting visitors into leads. Here is how to fix that in 30 days.',
    readTime: '5 min read',
  },
  {
    date: 'May 20, 2025',
    category: 'SEO',
    title: 'The SEO Strategy That Generated 500+ Leads for a Law Firm',
    excerpt: 'A detailed breakdown of the exact SEO system we built that took a local law firm from invisible to industry-dominant.',
    readTime: '8 min read',
  },
  {
    date: 'May 10, 2025',
    category: 'Automation',
    title: 'How We Saved a Client 40 Hours Per Week With Simple Automation',
    excerpt: 'Step-by-step walkthrough of the automation systems we built to eliminate repetitive work and free up the team to focus on growth.',
    readTime: '6 min read',
  },
  {
    date: 'April 28, 2025',
    category: 'Strategy',
    title: 'The Digital Infrastructure Checklist for Ambitious Businesses',
    excerpt: 'The exact tech stack and digital systems we recommend to clients who want to build a scalable, competitive online presence.',
    readTime: '7 min read',
  },
  {
    date: 'April 12, 2025',
    category: 'Brand Design',
    title: 'Why Premium Branding Is the Best ROI in Digital Marketing',
    excerpt: 'Data from 50+ clients shows that businesses with strong brand identities consistently outperform on every key digital metric.',
    readTime: '4 min read',
  },
  {
    date: 'March 30, 2025',
    category: 'SaaS',
    title: 'From Idea to $50K MRR: The Zenthoz SaaS Playbook',
    excerpt: 'The exact process we used to take a B2B analytics SaaS from zero to $50K monthly recurring revenue in 8 months.',
    readTime: '10 min read',
  },
];

const categoryColors: Record<string, string> = {
  'Web Development': 'text-violet-400 bg-violet-600/10',
  'SEO': 'text-cyan-400 bg-cyan-600/10',
  'Automation': 'text-fuchsia-400 bg-fuchsia-600/10',
  'Strategy': 'text-emerald-400 bg-emerald-600/10',
  'Brand Design': 'text-orange-400 bg-orange-600/10',
  'SaaS': 'text-pink-400 bg-pink-600/10',
};

export default function BlogPage() {
  return (
    <div style={{ paddingTop: '72px' }}>
      <section className="relative bg-[#0a0a0a] py-20 lg:py-28 text-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-violet-600/8 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8" style={{ zIndex: 1 }}>
          <p className="text-white/40 text-xs tracking-[0.2em] uppercase mb-6">Knowledge Hub</p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-6">
            Ideas that{' '}
            <span className="gradient-text">drive growth.</span>
          </h1>
          <p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
            Strategies, insights, and playbooks from the team building the future of digital business.
          </p>
        </div>
      </section>

      <div className="section-divider" />

      <section className="bg-[#0f0f0f] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article
                key={post.title}
                className="rounded-2xl p-6 border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${categoryColors[post.category] || 'text-white/50 bg-white/5'}`}>
                    {post.category}
                  </span>
                  <span className="text-white/30 text-xs">{post.readTime}</span>
                </div>
                <h2 className="text-white font-bold text-lg leading-snug mb-3 flex-1">{post.title}</h2>
                <p className="text-white/50 text-sm leading-relaxed mb-5">{post.excerpt}</p>
                <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
                  <span className="text-white/30 text-xs">{post.date}</span>
                  <Link href="/contact" className="text-violet-400 hover:text-violet-300 text-xs font-medium transition-colors">
                    Read more →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
