import Link from 'next/link';
import { GradientText } from '@/components/ui/GradientText';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-purple-600/5 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 text-center px-4">
        <GradientText className="text-[10rem] sm:text-[14rem] font-black leading-none opacity-20">
          404
        </GradientText>
        <div className="-mt-8 sm:-mt-12">
          <h1 className="text-3xl sm:text-4xl font-black text-white mb-4">Page not found</h1>
          <p className="text-white/50 text-lg mb-8 max-w-md mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-400 text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Go Home
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full border border-white/20 text-white font-semibold hover:border-white/40 hover:bg-white/5 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
