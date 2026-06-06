'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod/v4';
import { Mail, Phone, MapPin, MessageCircle, CheckCircle } from 'lucide-react';
import { GradientText } from '@/components/ui/GradientText';

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.email('Please enter a valid email'),
  company: z.string().optional(),
  phone: z.string().optional(),
  projectType: z.string().min(1, 'Please select a project type'),
  budget: z.string().min(1, 'Please select a budget range'),
  timeline: z.string().min(1, 'Please select a timeline'),
  message: z.string().min(20, 'Please provide at least 20 characters'),
});

type FormData = z.infer<typeof schema>;

export function ContactClient() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log('Form submitted:', data);
    setSubmitted(true);
    reset();
  };

  const inputClass =
    'w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/30 transition-all text-sm';
  const labelClass = 'block text-sm font-medium text-white/60 mb-2';
  const errorClass = 'text-red-400 text-xs mt-1';

  return (
    <div className="bg-[#0a0a0a] pt-24">
      {/* Hero */}
      <section className="py-16 lg:py-24 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-purple-600/6 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-white/40 text-sm tracking-widest uppercase mb-6">Let&apos;s Talk</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-6">
              Start something{' '}
              <GradientText>great</GradientText>
            </h1>
            <p className="text-xl text-white/50">
              Tell us about your project. We&apos;ll respond within 24 hours with a plan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main content */}
      <section className="pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left: Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-purple-600/10 flex items-center justify-center text-purple-400 flex-shrink-0">
                      <Mail size={18} />
                    </div>
                    <div>
                      <p className="text-white/40 text-sm mb-1">Email</p>
                      <a href="mailto:hello@zenthoz.com" className="text-white hover:text-purple-400 transition-colors">
                        hello@zenthoz.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-green-600/10 flex items-center justify-center text-green-400 flex-shrink-0">
                      <Phone size={18} />
                    </div>
                    <div>
                      <p className="text-white/40 text-sm mb-1">Phone</p>
                      <a href="tel:+12345678900" className="text-white hover:text-green-400 transition-colors">
                        +1 (234) 567-8900
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-cyan-600/10 flex items-center justify-center text-cyan-400 flex-shrink-0">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <p className="text-white/40 text-sm mb-1">Location</p>
                      <p className="text-white">Global Operations, Remote First</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-2xl border border-green-500/20 bg-green-600/5 hover:bg-green-600/10 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-green-600/20 flex items-center justify-center text-green-400">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <p className="text-white font-semibold">Chat on WhatsApp</p>
                  <p className="text-white/40 text-sm">Typically replies within 1 hour</p>
                </div>
              </a>

              {/* Response time info */}
              <div className="rounded-2xl p-6 border border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-white font-semibold mb-4">What happens next?</h3>
                <ol className="space-y-3">
                  {[
                    'We review your project requirements',
                    'Schedule a discovery call within 24 hours',
                    'Present a custom proposal & timeline',
                    'Kickoff your project!',
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-white/50">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-purple-600/20 text-purple-400 text-xs flex items-center justify-center font-bold mt-0.5">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-20 rounded-2xl border border-green-500/20 bg-green-600/5"
                >
                  <CheckCircle size={64} className="text-green-400 mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-3">Message Sent!</h3>
                  <p className="text-white/50 max-w-sm">
                    We&apos;ve received your project details. Expect to hear from us within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 px-6 py-3 rounded-full border border-white/20 text-white hover:border-white/40 transition-colors text-sm"
                  >
                    Submit another request
                  </button>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className={labelClass}>Full Name *</label>
                      <input
                        {...register('name')}
                        placeholder="John Smith"
                        className={inputClass}
                      />
                      {errors.name && <p className={errorClass}>{errors.name.message}</p>}
                    </div>
                    <div>
                      <label className={labelClass}>Email Address *</label>
                      <input
                        {...register('email')}
                        type="email"
                        placeholder="john@company.com"
                        className={inputClass}
                      />
                      {errors.email && <p className={errorClass}>{errors.email.message}</p>}
                    </div>
                    <div>
                      <label className={labelClass}>Company</label>
                      <input
                        {...register('company')}
                        placeholder="Your company name"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Phone Number</label>
                      <input
                        {...register('phone')}
                        type="tel"
                        placeholder="+1 (234) 567-8900"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div>
                      <label className={labelClass}>Project Type *</label>
                      <select {...register('projectType')} className={inputClass}>
                        <option value="">Select type</option>
                        <option value="website">Website</option>
                        <option value="app">Web Application</option>
                        <option value="automation">Automation</option>
                        <option value="ai">AI Integration</option>
                        <option value="marketing">Marketing</option>
                        <option value="branding">Branding</option>
                        <option value="other">Other</option>
                      </select>
                      {errors.projectType && <p className={errorClass}>{errors.projectType.message}</p>}
                    </div>
                    <div>
                      <label className={labelClass}>Budget Range *</label>
                      <select {...register('budget')} className={inputClass}>
                        <option value="">Select budget</option>
                        <option value="under5k">Under $5,000</option>
                        <option value="5k-15k">$5,000 – $15,000</option>
                        <option value="15k-50k">$15,000 – $50,000</option>
                        <option value="50k+">$50,000+</option>
                      </select>
                      {errors.budget && <p className={errorClass}>{errors.budget.message}</p>}
                    </div>
                    <div>
                      <label className={labelClass}>Timeline *</label>
                      <select {...register('timeline')} className={inputClass}>
                        <option value="">Select timeline</option>
                        <option value="asap">ASAP</option>
                        <option value="1-3months">1–3 Months</option>
                        <option value="3-6months">3–6 Months</option>
                        <option value="flexible">Flexible</option>
                      </select>
                      {errors.timeline && <p className={errorClass}>{errors.timeline.message}</p>}
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>Tell us about your project *</label>
                    <textarea
                      {...register('message')}
                      rows={5}
                      placeholder="Describe your project, goals, and any specific requirements..."
                      className={`${inputClass} resize-none`}
                    />
                    {errors.message && <p className={errorClass}>{errors.message.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-400 text-white font-semibold text-lg hover:opacity-90 transition-opacity disabled:opacity-60 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      'Send Project Inquiry'
                    )}
                  </button>

                  <p className="text-white/30 text-xs text-center">
                    By submitting, you agree to our{' '}
                    <a href="/privacy-policy" className="underline hover:text-white/50">Privacy Policy</a>.
                    We never share your information.
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
