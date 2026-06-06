import type { Metadata } from 'next';
import { GradientText } from '@/components/ui/GradientText';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Insights, strategies, and stories from the Zenthoz team.',
};

const posts = [
  {
    title: 'Why Most Business Websites Fail at Conversion (And How to Fix It)',
    excerpt: 'A deep dive into the common mistakes that cost businesses thousands in lost revenue, and the proven frameworks we use to build sites that actually convert.',
    category: 'Strategy',
    date: 'Dec 2024',
    readTime: '7 min read',
    gradient: 'from-purple-600 to-pink-500',
  },
  {
    title: 'The AI Integration Playbook for Non-Technical Founders',
    excerpt: "AI isn't just for tech companies. Here's how we've helped businesses across industries embed AI to reduce costs and increase output.",
    category: 'AI & Automation',
    date: 'Nov 2024',
    readTime: '9 min read',
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    title: 'How We Grew a Client\'s Organic Traffic by 312% in 8 Months',
    excerpt: 'A behind-the-scenes look at the SEO strategy, content system, and technical optimizations that delivered triple-digit growth.',
    category: 'SEO',
    date: 'Oct 2024',
    readTime: '11 min read',
    gradient: 'from-pink-500 to-orange-400',
  },
  {
    title: 'The Complete Guide to Brand Identity for Startups',
    excerpt: 'Brand identity is more than a logo. This guide covers everything founders need to know about building a brand that commands attention and trust.',
    category: 'Branding',
    date: 'Sep 2024',
    readTime: '14 min read',
    gradient: 'from-green-400 to-cyan-500',
  },
  {
    title: 'Automation ROI: How to Calculate and Maximize Returns',
    excerpt: "We break down how to measure the real ROI of business automation and share the frameworks we use to identify the highest-impact opportunities.",
    category: 'Automation',
    date: 'Aug 2024',
    readTime: '8 min read',
    gradient: 'from-yellow-400 to-orange-500',
  },
  {
    title: 'Next.js 15 Performance Patterns We Use in Production',
    excerpt: 'The specific architectural patterns and optimizations our engineering team uses to achieve sub-second load times in production Next.js applications.',
    category: 'Engineering',
    date: 'Jul 2024',
    readTime: '12 min read',
    gradient: 'from-purple-500 to-indigo-600',
  },
];

export default function BlogPage() {
  return (
    <div className="bg-[#0a0a0a] pt-24">
      {/* Hero */}
      <section className="py-20 lg:py-28 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-cyan-600/5 rounded-full blur-3xl" />
        </div>
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <p className="text-white/40 text-sm tracking-widest uppercase mb-6">Insights</p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-6">
            The Zenthoz{' '}
            <GradientText>Blog</GradientText>
          </h1>
          <p className="text-xl text-white/50">
            Strategies, stories, and insights from the team engineering the future of digital business.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <div
                key={i}
                className="group rounded-2xl border border-white/[0.06] overflow-hidden bg-white/[0.01] hover:border-white/10 transition-all duration-300 cursor-pointer"
              >
                <div className={`h-40 bg-gradient-to-br ${post.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" />
                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-black/30 backdrop-blur-sm text-white/80">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-white/30 text-xs mb-3">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-purple-300 transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">{post.excerpt}</p>
                  <div className="mt-4 flex items-center gap-1 text-purple-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Read article →
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Coming soon note */}
          <div className="mt-16 text-center py-12 border border-white/[0.06] rounded-2xl bg-white/[0.01]">
            <p className="text-white/40 text-lg">More articles coming soon.</p>
            <p className="text-white/20 text-sm mt-2">Subscribe to our newsletter to be notified.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
