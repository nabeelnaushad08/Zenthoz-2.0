import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms and conditions governing your use of Zenthoz services.',
};

const sections = [
  { title: '1. Acceptance of Terms', content: 'By accessing and using the Zenthoz website and services, you accept and agree to be bound by these Terms of Service. If you do not agree, please do not use our services.' },
  { title: '2. Services', content: 'Zenthoz provides digital services including web development, software development, automation, SEO, brand design, and digital strategy. Specific terms for each engagement are outlined in individual project agreements.' },
  { title: '3. Intellectual Property', content: 'Upon full payment, clients receive ownership of custom deliverables created specifically for their project. Zenthoz retains rights to pre-existing tools, frameworks, and methodologies used in delivery.' },
  { title: '4. Payment Terms', content: 'Payment terms are specified in individual project agreements. Zenthoz typically requires a deposit before work commences, with the balance due upon project completion or at milestones specified in the agreement.' },
  { title: '5. Confidentiality', content: 'Both parties agree to maintain confidentiality of proprietary information shared during the engagement. This obligation survives the termination of the working relationship.' },
  { title: '6. Limitation of Liability', content: 'Zenthoz\'s liability is limited to the total amount paid for the specific services giving rise to the claim. We are not liable for indirect, incidental, or consequential damages.' },
  { title: '7. Termination', content: 'Either party may terminate a project agreement with written notice. Client is responsible for payment for work completed up to the termination date.' },
  { title: '8. Governing Law', content: 'These terms are governed by applicable law. Any disputes shall be resolved through good-faith negotiation, followed by binding arbitration if necessary.' },
  { title: '9. Contact', content: 'For questions about these Terms, contact us at legal@zenthoz.com' },
];

export default function TermsOfServicePage() {
  return (
    <div style={{ paddingTop: '72px' }}>
      <section className="relative bg-[#0a0a0a] py-20 lg:py-24 text-center">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <p className="text-white/40 text-xs tracking-[0.2em] uppercase mb-6">Legal</p>
          <h1 className="text-5xl sm:text-6xl font-black tracking-tight mb-4">
            Terms of <span className="gradient-text">Service</span>
          </h1>
          <p className="text-white/40 text-sm">Last updated: December 2024</p>
        </div>
      </section>

      <div className="section-divider" />

      <section className="bg-[#0f0f0f] py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 space-y-5">
          {sections.map((s) => (
            <div key={s.title} className="rounded-2xl p-6 lg:p-8 border border-white/[0.08] bg-white/[0.02]">
              <h2 className="text-lg font-bold text-white mb-3">{s.title}</h2>
              <p className="text-white/50 text-sm leading-relaxed">{s.content}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
