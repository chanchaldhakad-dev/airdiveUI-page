import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { COMPANY_INFO } from '../data/airdiveData';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', company: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="relative py-28 bg-[#0a0b10] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-mono mb-4">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>START A CONVERSATION</span>
              </div>

              <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
                Let's Build Something <span className="text-gradient-sky">Great Together.</span>
              </h2>

              <p className="text-slate-400 text-sm sm:text-base font-light leading-relaxed mb-10">
                Have a project in mind or need technology consultancy? Get in touch with our team directly.
              </p>

              {/* Info List */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-sky-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-500 uppercase block mb-1">Email Inquiry</span>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-sm font-semibold text-white hover:text-sky-400 transition-colors">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-emerald-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-500 uppercase block mb-1">Direct Line</span>
                    <div className="flex flex-col gap-1">
                      {COMPANY_INFO.phones.map((phone) => (
                        <a key={phone} href={`tel:${phone}`} className="text-sm font-semibold text-white hover:text-emerald-400 transition-colors">
                          {phone}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-purple-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-500 uppercase block mb-1">Corporate Address</span>
                    <p className="text-xs text-slate-300 font-light leading-relaxed max-w-xs">
                      {COMPANY_INFO.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 natural-card p-8 sm:p-12 rounded-2xl border border-white/10 relative shadow-xl"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center flex flex-col items-center justify-center space-y-4"
              >
                <div className="w-14 h-14 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white">Thank You!</h3>
                <p className="text-slate-400 text-xs sm:text-sm max-w-sm">
                  Your message has been received. Our team will get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 uppercase mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0a0b10] border border-white/10 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-sky-400/60 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 uppercase mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0a0b10] border border-white/10 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-sky-400/60 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 uppercase mb-2">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0a0b10] border border-white/10 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-sky-400/60 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 uppercase mb-2">
                    Project Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about your product or software requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0a0b10] border border-white/10 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-sky-400/60 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full group inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-bold tracking-wide text-[#0a0b10] bg-sky-400 hover:bg-sky-300 rounded-xl transition-all duration-200"
                >
                  <span>Let's Talk</span>
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </motion.div>

        </div>

      </div>
    </section>
  );
}
