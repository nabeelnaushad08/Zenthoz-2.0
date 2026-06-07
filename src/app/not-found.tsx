import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ paddingTop: '72px' }}>
      <section className="relative bg-[#0a0a0a] min-h-screen flex items-center justify-center text-center px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-8xl font-black text-white/[0.04] mb-6">404</div>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Page not <span className="gradient-text">found.</span>
          </h1>
          <p className="text-white/50 text-lg mb-10 leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-400 text-white font-semibold hover:opacity-90 transition-opacity"
          >
            Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
}
