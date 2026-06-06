import type { Metadata } from 'next';
import { GradientText } from '@/components/ui/GradientText';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms and conditions governing your use of Zenthoz services.',
};

export default function TermsOfServicePage() {
  return (
    <div className="bg-[#0a0a0a] pt-24">
      <section className="py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-white/40 text-sm tracking-widest uppercase mb-4">Legal</p>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-4">
            Terms of <GradientText>Service</GradientText>
          </h1>
          <p className="text-white/40 text-sm">Last updated: December 2024</p>
        </div>
      </section>

      <section className="pb-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {[
              {
                title: '1. Acceptance of Terms',
                content: `By accessing and using Zenthoz's website and services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.`,
              },
              {
                title: '2. Description of Services',
                content: `Zenthoz provides digital services including but not limited to: web design and development, software development, digital marketing, branding, automation, and AI integration. Specific services and deliverables are defined in individual project agreements or statements of work.`,
              },
              {
                title: '3. Client Responsibilities',
                content: `Clients are responsible for: providing accurate and complete project information, timely feedback and approvals, payment per agreed terms, ensuring they have rights to any materials provided to Zenthoz, and complying with all applicable laws regarding their business and project.`,
              },
              {
                title: '4. Payment Terms',
                content: `Payment terms are specified in individual project agreements. Generally, projects require a deposit before work commences. Late payments may incur interest charges. Zenthoz reserves the right to pause or terminate work on accounts with outstanding balances.`,
              },
              {
                title: '5. Intellectual Property',
                content: `Upon full payment, clients receive ownership of custom work product created specifically for them. Zenthoz retains ownership of all pre-existing tools, frameworks, templates, and methodologies used in the creation of client work. Zenthoz may showcase client work in its portfolio unless otherwise agreed in writing.`,
              },
              {
                title: '6. Confidentiality',
                content: `Both parties agree to maintain confidentiality of proprietary information shared during the course of the project. This obligation survives termination of the service relationship for a period of two years.`,
              },
              {
                title: '7. Limitation of Liability',
                content: `Zenthoz's liability is limited to the amount paid for the specific service giving rise to the claim. We are not liable for indirect, consequential, or incidental damages. We do not guarantee specific business outcomes from our services.`,
              },
              {
                title: '8. Warranties',
                content: `Zenthoz warrants that services will be performed in a professional manner. We do not warrant that services will be error-free or that specific business results will be achieved. Warranties for websites and software are typically limited to 30-90 days post-launch as specified in project agreements.`,
              },
              {
                title: '9. Termination',
                content: `Either party may terminate a project engagement with written notice as specified in the project agreement. Upon termination, clients are responsible for payment for work completed to date. Zenthoz will deliver all completed work upon receipt of final payment.`,
              },
              {
                title: '10. Governing Law',
                content: `These terms are governed by applicable law. Any disputes shall be resolved through good-faith negotiation, followed by mediation if necessary, before resorting to legal action.`,
              },
              {
                title: '11. Changes to Terms',
                content: `Zenthoz reserves the right to update these Terms of Service. Continued use of our services after changes constitutes acceptance of the new terms.`,
              },
              {
                title: '12. Contact',
                content: `For questions about these Terms, contact us at: legal@zenthoz.com`,
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
