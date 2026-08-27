import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { COMPANY_INFO } from '../data/airdiveData';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

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
    <section id="contact" className="relative py-28 bg-[#f3f4f6] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div>
              <span className="text-xs font-mono font-bold tracking-wider text-[#0078d4] uppercase mb-3 block">
                TECHNICAL DISCOVERY
              </span>

              <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
                Let's Build Your <span className="text-[#0078d4]">Software System.</span>
              </h2>

              <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed mb-10">
                Schedule a technical discovery session with the engineering team at AIRDIVE PRIVATE LIMITED today.
              </p>

              {/* Direct Info List */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-md bg-blue-50 border border-blue-200 text-[#0078d4]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-500 uppercase block mb-1">Corporate Email</span>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-sm font-bold text-slate-900 hover:text-[#0078d4] transition-colors">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-md bg-emerald-50 border border-emerald-200 text-[#7fba00]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-500 uppercase block mb-1">Direct Telephones</span>
                    <div className="flex flex-col gap-1">
                      {COMPANY_INFO.phones.map((phone) => (
                        <a key={phone} href={`tel:${phone}`} className="text-sm font-bold text-slate-900 hover:text-[#0078d4] transition-colors">
                          {phone}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-md bg-purple-50 border border-purple-200 text-purple-600">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-500 uppercase block mb-1">Registered HQ Address</span>
                    <p className="text-xs text-slate-600 font-normal leading-relaxed max-w-xs">
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
            className="lg:col-span-7 fluent-card p-8 sm:p-12 rounded-xl border border-slate-200 bg-white relative shadow-xs"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center flex flex-col items-center justify-center space-y-4"
              >
                <div className="w-14 h-14 rounded-full bg-emerald-50 text-[#7fba00] flex items-center justify-center border border-emerald-200">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="font-display text-2xl font-bold text-slate-900">Inquiry Transmitted</h3>
                <p className="text-slate-600 text-xs sm:text-sm max-w-sm">
                  Thank you for contacting AIRDIVE PRIVATE LIMITED. Our engineering leads will review your inquiry and respond within 24 business hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono text-slate-700 uppercase mb-2 font-bold">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-md bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0078d4] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-700 uppercase mb-2 font-bold">
                      Corporate Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@enterprise.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-md bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0078d4] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-700 uppercase mb-2 font-bold">
                    Organization / Enterprise Name
                  </label>
                  <input
                    type="text"
                    placeholder="Acme Global Corporation"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 rounded-md bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0078d4] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-700 uppercase mb-2 font-bold">
                    Technical Requirements & Project Details *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe your web application, mobile app, or software project scope..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-md bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0078d4] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 text-sm font-bold text-white bg-[#0078d4] hover:bg-[#005a9e] rounded-md shadow-sm transition-all flex items-center justify-center gap-2"
                >
                  <span>Transmit Inquiry to AirDive</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </motion.div>

        </div>

      </div>
    </section>
  );
}
