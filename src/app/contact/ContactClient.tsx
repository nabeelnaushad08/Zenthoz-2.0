'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Clock, CheckCircle } from 'lucide-react';

export function ContactClient() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div style={{ paddingTop: '72px' }}>
      {/* Hero */}
      <section className="relative bg-[#0a0a0a] py-20 lg:py-24 text-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-violet-600/8 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8" style={{ zIndex: 1 }}>
          <p className="text-white/40 text-xs tracking-[0.2em] uppercase mb-6">Get In Touch</p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-6">
            Let&apos;s build something{' '}
            <span className="gradient-text">great together.</span>
          </h1>
          <p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
            Tell us about your project and we&apos;ll get back to you within 24 hours with a tailored plan.
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* Form section */}
      <section className="bg-[#0f0f0f] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left: contact info */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-8"
            >
              <div>
                <h2 className="text-2xl font-black text-white mb-3">Contact information</h2>
                <p className="text-white/50 text-sm leading-relaxed">
                  Reach out directly or fill in the form. We respond within 24 hours.
                </p>
              </div>

              <div className="space-y-5">
                <a href="mailto:hello@zenthoz.com" className="flex items-center gap-4 p-4 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] transition-colors group">
                  <div className="w-10 h-10 rounded-lg bg-violet-600/10 flex items-center justify-center text-violet-400 shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="text-white text-sm font-medium">Email</div>
                    <div className="text-white/50 text-sm">hello@zenthoz.com</div>
                  </div>
                </a>

                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] transition-colors group">
                  <div className="w-10 h-10 rounded-lg bg-green-600/10 flex items-center justify-center text-green-400 shrink-0">
                    <MessageCircle size={18} />
                  </div>
                  <div>
                    <div className="text-white text-sm font-medium">WhatsApp</div>
                    <div className="text-white/50 text-sm">Chat with us directly</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl border border-white/[0.08] bg-white/[0.02]">
                  <div className="w-10 h-10 rounded-lg bg-cyan-600/10 flex items-center justify-center text-cyan-400 shrink-0">
                    <Clock size={18} />
                  </div>
                  <div>
                    <div className="text-white text-sm font-medium">Response time</div>
                    <div className="text-white/50 text-sm">Within 24 hours</div>
                  </div>
                </div>
              </div>

              {/* What happens next */}
              <div>
                <h3 className="text-white text-sm font-semibold mb-4">What happens next?</h3>
                <ol className="space-y-3">
                  {[
                    'We review your submission within 24 hours',
                    'We schedule a free 30-minute strategy call',
                    'We deliver a custom proposal with clear pricing',
                    'You decide — no pressure, no obligations',
                  ].map((step, i) => (
                    <li key={step} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-violet-600/20 text-violet-400 text-xs flex items-center justify-center shrink-0 mt-0.5 font-bold">
                        {i + 1}
                      </span>
                      <span className="text-white/50 text-sm leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </motion.div>

            {/* Right: form */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-16 px-8 rounded-2xl border border-green-500/20 bg-green-600/5">
                  <div className="w-16 h-16 rounded-full bg-green-600/20 flex items-center justify-center text-green-400 mb-6">
                    <CheckCircle size={32} />
                  </div>
                  <h3 className="text-2xl font-black text-white mb-3">Message Sent!</h3>
                  <p className="text-white/50 leading-relaxed">
                    Thank you for reaching out. We will review your request and get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 lg:p-8 space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-white/60 text-xs font-medium mb-2 uppercase tracking-wider">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        className="w-full bg-white/[0.03] border border-white/[0.1] rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-violet-500/50 focus:bg-white/[0.05] transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-white/60 text-xs font-medium mb-2 uppercase tracking-wider">Email *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className="w-full bg-white/[0.03] border border-white/[0.1] rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-violet-500/50 focus:bg-white/[0.05] transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white/60 text-xs font-medium mb-2 uppercase tracking-wider">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                      className="w-full bg-white/[0.03] border border-white/[0.1] rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-violet-500/50 focus:bg-white/[0.05] transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-white/60 text-xs font-medium mb-2 uppercase tracking-wider">Service Needed</label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="w-full bg-[#111] border border-white/[0.1] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-violet-500/50 transition-all appearance-none"
                      >
                        <option value="" className="bg-[#111]">Select a service</option>
                        <option value="web" className="bg-[#111]">Web Development</option>
                        <option value="software" className="bg-[#111]">Software Solutions</option>
                        <option value="automation" className="bg-[#111]">Automation & AI</option>
                        <option value="seo" className="bg-[#111]">SEO & Growth</option>
                        <option value="brand" className="bg-[#111]">Brand Design</option>
                        <option value="strategy" className="bg-[#111]">Digital Strategy</option>
                        <option value="other" className="bg-[#111]">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-white/60 text-xs font-medium mb-2 uppercase tracking-wider">Budget Range</label>
                      <select
                        name="budget"
                        value={form.budget}
                        onChange={handleChange}
                        className="w-full bg-[#111] border border-white/[0.1] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-violet-500/50 transition-all appearance-none"
                      >
                        <option value="" className="bg-[#111]">Select budget</option>
                        <option value="under5k" className="bg-[#111]">Under $5,000</option>
                        <option value="5k-15k" className="bg-[#111]">$5,000 – $15,000</option>
                        <option value="15k-50k" className="bg-[#111]">$15,000 – $50,000</option>
                        <option value="50k+" className="bg-[#111]">$50,000+</option>
                        <option value="discuss" className="bg-[#111]">Let&apos;s discuss</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-white/60 text-xs font-medium mb-2 uppercase tracking-wider">Project Details *</label>
                    <textarea
                      name="message"
                      required
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell us about your project, goals, and any specific requirements..."
                      className="w-full bg-white/[0.03] border border-white/[0.1] rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-violet-500/50 focus:bg-white/[0.05] transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-400 text-white font-semibold text-base hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed shadow-xl shadow-violet-500/20"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>

                  <p className="text-white/30 text-xs text-center">
                    No spam, ever. Your information is safe with us.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
