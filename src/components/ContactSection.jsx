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
    <section id="contact" className="relative py-28 bg-[#eaeded] border-b border-[#d5d9d9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div>
              <span className="text-xs font-mono font-bold tracking-wider text-[#007185] uppercase mb-3 block">
                TECHNICAL INQUIRIES
              </span>

              <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0f1111] mb-6 leading-tight">
                Let's Build Your <span className="text-[#007185]">Software Solution.</span>
              </h2>

              <p className="text-[#565959] text-sm sm:text-base font-normal leading-relaxed mb-10">
                Ready to start your software project? Contact the engineering team at AIRDIVE PRIVATE LIMITED today.
              </p>

              {/* Direct Info List */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-md bg-[#232f3e] text-[#febd69]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-[#565959] uppercase block mb-1">Corporate Email</span>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-sm font-bold text-[#0f1111] hover:text-[#007185] transition-colors">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-md bg-[#232f3e] text-[#febd69]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-[#565959] uppercase block mb-1">Direct Telephones</span>
                    <div className="flex flex-col gap-1">
                      {COMPANY_INFO.phones.map((phone) => (
                        <a key={phone} href={`tel:${phone}`} className="text-sm font-bold text-[#0f1111] hover:text-[#007185] transition-colors">
                          {phone}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-md bg-[#232f3e] text-[#febd69]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-[#565959] uppercase block mb-1">Registered HQ Address</span>
                    <p className="text-xs text-[#565959] font-normal leading-relaxed max-w-xs">
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
            className="lg:col-span-7 amazon-card p-8 sm:p-12 rounded-lg border border-[#d5d9d9] bg-white relative shadow-sm"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center flex flex-col items-center justify-center space-y-4"
              >
                <div className="w-14 h-14 rounded-full bg-emerald-50 text-[#007600] flex items-center justify-center border border-emerald-200">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="font-display text-2xl font-bold text-[#0f1111]">Inquiry Submitted</h3>
                <p className="text-[#565959] text-xs sm:text-sm max-w-sm">
                  Thank you for contacting AIRDIVE PRIVATE LIMITED. Our team will review your inquiry and respond within 24 business hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono text-[#0f1111] uppercase mb-2 font-bold">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-md bg-[#ffffff] border border-[#d5d9d9] text-sm text-[#0f1111] placeholder-slate-400 focus:outline-none focus:border-[#007185] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#0f1111] uppercase mb-2 font-bold">
                      Corporate Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@enterprise.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-md bg-[#ffffff] border border-[#d5d9d9] text-sm text-[#0f1111] placeholder-slate-400 focus:outline-none focus:border-[#007185] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#0f1111] uppercase mb-2 font-bold">
                    Organization / Company Name
                  </label>
                  <input
                    type="text"
                    placeholder="Acme Global Corporation"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 rounded-md bg-[#ffffff] border border-[#d5d9d9] text-sm text-[#0f1111] placeholder-slate-400 focus:outline-none focus:border-[#007185] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#0f1111] uppercase mb-2 font-bold">
                    Technical Requirements & Project Details *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe your web application, mobile app, or software project scope..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-md bg-[#ffffff] border border-[#d5d9d9] text-sm text-[#0f1111] placeholder-slate-400 focus:outline-none focus:border-[#007185] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-amazon-primary w-full py-4 text-sm font-bold flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Submit Inquiry to AirDive</span>
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
