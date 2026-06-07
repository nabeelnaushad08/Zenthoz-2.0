import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Zenthoz collects, uses, and protects your personal information.',
};

const sections = [
  { title: '1. Information We Collect', content: 'We collect information you provide directly to us, such as when you fill out our contact form, subscribe to communications, or engage with our services. This includes: name, email address, phone number, company information, and project details. We also automatically collect certain information when you visit our website, including IP address, browser type, operating system, referring URLs, and pages viewed.' },
  { title: '2. How We Use Your Information', content: 'We use the information we collect to: respond to your inquiries and project requests, provide and improve our services, send you relevant communications (with your consent), analyze website usage to improve user experience, comply with legal obligations, and protect against fraudulent or unauthorized activity.' },
  { title: '3. Information Sharing', content: 'We do not sell, trade, or rent your personal information to third parties. We may share information with trusted service providers who assist us in operating our website and conducting our business, provided they agree to keep this information confidential.' },
  { title: '4. Data Security', content: 'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.' },
  { title: '5. Cookies', content: 'We use cookies and similar tracking technologies to track activity on our website. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.' },
  { title: '6. Your Rights', content: 'Depending on your location, you may have the right to: access the personal information we hold about you, correct inaccurate personal information, request deletion, and data portability. Contact us at privacy@zenthoz.com.' },
  { title: '7. Changes to This Policy', content: 'We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.' },
  { title: '8. Contact Us', content: 'If you have any questions about this Privacy Policy, please contact us at: privacy@zenthoz.com' },
];

export default function PrivacyPolicyPage() {
  return (
    <div style={{ paddingTop: '72px' }}>
      <section className="relative bg-[#0a0a0a] py-20 lg:py-24 text-center">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <p className="text-white/40 text-xs tracking-[0.2em] uppercase mb-6">Legal</p>
          <h1 className="text-5xl sm:text-6xl font-black tracking-tight mb-4">
            Privacy <span className="gradient-text">Policy</span>
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
