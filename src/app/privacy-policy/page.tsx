import type { Metadata } from 'next';
import { GradientText } from '@/components/ui/GradientText';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Zenthoz collects, uses, and protects your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#0a0a0a] pt-24">
      <section className="py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-white/40 text-sm tracking-widest uppercase mb-4">Legal</p>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-4">
            Privacy <GradientText>Policy</GradientText>
          </h1>
          <p className="text-white/40 text-sm">Last updated: December 2024</p>
        </div>
      </section>

      <section className="pb-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert max-w-none space-y-10">
            {[
              {
                title: '1. Information We Collect',
                content: `We collect information you provide directly to us, such as when you fill out our contact form, subscribe to communications, or engage with our services. This includes: name, email address, phone number, company information, and project details. We also automatically collect certain information when you visit our website, including IP address, browser type, operating system, referring URLs, and pages viewed.`,
              },
              {
                title: '2. How We Use Your Information',
                content: `We use the information we collect to: respond to your inquiries and project requests, provide and improve our services, send you relevant communications (with your consent), analyze website usage to improve user experience, comply with legal obligations, and protect against fraudulent or unauthorized activity.`,
              },
              {
                title: '3. Information Sharing',
                content: `We do not sell, trade, or rent your personal information to third parties. We may share information with trusted service providers who assist us in operating our website and conducting our business, provided they agree to keep this information confidential. We may also disclose information when required by law or to protect our rights.`,
              },
              {
                title: '4. Data Security',
                content: `We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.`,
              },
              {
                title: '5. Cookies',
                content: `We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, some portions of our website may not function properly.`,
              },
              {
                title: '6. Your Rights',
                content: `Depending on your location, you may have the right to: access the personal information we hold about you, correct inaccurate personal information, request deletion of your personal information, object to or restrict processing of your information, and data portability. To exercise these rights, please contact us at privacy@zenthoz.com.`,
              },
              {
                title: '7. Third-Party Links',
                content: `Our website may contain links to third-party websites. We are not responsible for the privacy practices of these websites and encourage you to read their privacy policies.`,
              },
              {
                title: '8. Changes to This Policy',
                content: `We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.`,
              },
              {
                title: '9. Contact Us',
                content: `If you have any questions about this Privacy Policy, please contact us at: privacy@zenthoz.com or by mail at Zenthoz Technologies, Global Operations.`,
              },
            ].map((section) => (
              <div key={section.title} className="rounded-2xl p-8 border border-white/[0.06] bg-white/[0.01]">
                <h2 className="text-xl font-bold text-white mb-4">{section.title}</h2>
                <p className="text-white/60 leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
