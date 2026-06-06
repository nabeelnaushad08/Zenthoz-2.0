import { Hero } from '@/components/sections/home/Hero';
import { TrustMetrics } from '@/components/sections/home/TrustMetrics';
import { WhatWeBuild } from '@/components/sections/home/WhatWeBuild';
import { WhyZenthoz } from '@/components/sections/home/WhyZenthoz';
import { CaseStudies } from '@/components/sections/home/CaseStudies';
import { HowWeWork } from '@/components/sections/home/HowWeWork';
import { Testimonials } from '@/components/sections/home/Testimonials';
import { CTASection } from '@/components/sections/home/CTASection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustMetrics />
      <WhatWeBuild />
      <WhyZenthoz />
      <CaseStudies />
      <HowWeWork />
      <Testimonials />
      <CTASection />
    </>
  );
}
