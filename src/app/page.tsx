import { Hero } from '@/components/sections/home/Hero';
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
      <div className="section-divider" />
      <WhatWeBuild />
      <div className="section-divider" />
      <WhyZenthoz />
      <div className="section-divider" />
      <CaseStudies />
      <div className="section-divider" />
      <HowWeWork />
      <div className="section-divider" />
      <Testimonials />
      <div className="section-divider" />
      <CTASection />
    </>
  );
}
