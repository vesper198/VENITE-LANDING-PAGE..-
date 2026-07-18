/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Globe,
  Send,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Plus,
  Minus,
  Navigation,
  MessageSquareCode
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState<{
    status: 'success' | 'error' | null;
    message: string;
  }>({ status: null, message: '' });

  const [savedMessages, setSavedMessages] = useState<any[]>(() => {
    const saved = localStorage.getItem('venite_messages');
    return saved ? JSON.parse(saved) : [];
  });

  const [zoomLevel, setZoomLevel] = useState(14);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.message) {
      setFormStatus({
        status: 'error',
        message: 'Please fill in all required fields (Name, Email, Message).'
      });
      return;
    }

    // Save message locally for high fidelity simulation
    const newMessage = {
      id: Date.now(),
      ...formData,
      date: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    const updated = [newMessage, ...savedMessages];
    setSavedMessages(updated);
    localStorage.setItem('venite_messages', JSON.stringify(updated));

    setFormStatus({
      status: 'success',
      message: `Thank you, ${formData.fullName}! Your message regarding "${formData.subject || 'General Inquiry'}" has been successfully logged. Our administration team will contact you at ${formData.email} within 24 hours.`
    });

    // Reset Form
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section className="py-12 bg-white dark:bg-dark-bg transition-colors duration-300">
      
      {/* Contact Page Hero Banner */}
      <div className="relative py-20 mb-16 bg-slate-900 overflow-hidden rounded-3xl max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 opacity-40">
          <img
            src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200"
            alt="Welcoming university gate with academic buildings"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-slate-950/85" />
        
        <div className="relative z-10 max-w-3xl text-white">
          <span className="inline-block px-3 py-1 rounded-full bg-secondary text-primary text-xs font-bold uppercase tracking-wider mb-4">
            Connect with us
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight">
            Contact Venite University
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            We are here to help you begin your academic journey. Reach out to our administrators, registrars, or counseling desks at any time.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Contact Info & Form (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <MessageSquareCode className="text-secondary h-6 w-6" />
                <span>Send Us a Direct Message</span>
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-light mt-1">
                Please complete the contact form below and receive an official ticketing ticket.
              </p>
            </div>

            {/* Direct Form */}
            <form onSubmit={handleFormSubmit} className="space-y-4 bg-slate-50 dark:bg-dark-card rounded-2xl p-6 sm:p-8 border border-slate-100 dark:border-dark-border shadow-xs">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-dark-border bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all duration-300"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="johndoe@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-dark-border bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all duration-300"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Phone */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+234..."
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-dark-border bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all duration-300"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Admission Inquiry"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-dark-border bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all duration-300"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                  Your Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={5}
                  required
                  placeholder="How can we assist you today?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-dark-border bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all duration-300 resize-none"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-primary hover:bg-primary-dark text-white font-bold text-xs tracking-wider uppercase transition-all shadow-md dark:bg-secondary dark:text-primary dark:hover:bg-secondary-dark cursor-pointer focus:outline-none"
              >
                <Send className="h-4 w-4" />
                <span>Send Message</span>
              </motion.button>
            </form>

            {/* Notification banner */}
            <AnimatePresence mode="wait">
              {formStatus.status && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`p-4 rounded-xl border flex gap-3 ${
                    formStatus.status === 'success'
                      ? 'bg-emerald-50 dark:bg-emerald-950/25 text-emerald-800 dark:text-emerald-200 border-emerald-100 dark:border-emerald-900/40'
                      : 'bg-rose-50 dark:bg-rose-950/25 text-rose-800 dark:text-rose-200 border-rose-100 dark:border-rose-900/40'
                  }`}
                >
                  <div className="shrink-0 mt-0.5">
                    {formStatus.status === 'success' ? (
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                    ) : (
                      <AlertCircle className="h-5 w-5 text-rose-600 dark:text-rose-400" />
                    )}
                  </div>
                  <div className="text-xs leading-relaxed">
                    <span className="font-bold block uppercase mb-0.5">
                      {formStatus.status === 'success' ? 'Message Sent Successfully' : 'Submission Alert'}
                    </span>
                    <p>{formStatus.message}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Simulated inbox log */}
            {savedMessages.length > 0 && (
              <div className="p-6 bg-slate-50 dark:bg-dark-card rounded-2xl border border-slate-100 dark:border-dark-border">
                <span className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4">
                  Sent Ticket Log (This device)
                </span>
                <div className="space-y-3.5 max-h-56 overflow-y-auto pr-1">
                  {savedMessages.map((msg) => (
                    <div
                      key={msg.id}
                      className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-850 space-y-1 shadow-xs"
                    >
                      <div className="flex justify-between items-start">
                        <span className="font-bold text-xs text-slate-800 dark:text-slate-200 block">
                          {msg.fullName}
                        </span>
                        <span className="text-[10px] text-slate-400 font-mono">
                          {msg.date}
                        </span>
                      </div>
                      <p className="text-[11px] font-bold text-secondary">{msg.subject || 'No Subject'}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-300 font-light line-clamp-2 italic">
                        "{msg.message}"
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right: Contact Details Box & Google Maps (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Details Cards */}
            <div className="bg-slate-50 dark:bg-dark-card rounded-2xl p-6 sm:p-8 border border-slate-100 dark:border-dark-border shadow-xs space-y-6">
              <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white">
                Official Directory
              </h3>

              <div className="space-y-4">
                
                {/* Location */}
                <div className="flex gap-4 items-start">
                  <div className="p-3 rounded-xl bg-white dark:bg-slate-900 text-primary dark:text-secondary shadow-sm shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-0.5">Campus Location</span>
                    <p className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white leading-tight">
                      Venite University
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 font-light">
                      Iloro-Ekiti, Ekiti State, Nigeria
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4 items-start">
                  <div className="p-3 rounded-xl bg-white dark:bg-slate-900 text-primary dark:text-secondary shadow-sm shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-0.5">Admissions Hotline</span>
                    <p className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white leading-none">
                      +234 812 345 6789
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4 items-start">
                  <div className="p-3 rounded-xl bg-white dark:bg-slate-900 text-primary dark:text-secondary shadow-sm shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-0.5">Registrar Email</span>
                    <p className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white leading-none">
                      admissions@venite.edu.ng
                    </p>
                  </div>
                </div>

                {/* Website */}
                <div className="flex gap-4 items-start">
                  <div className="p-3 rounded-xl bg-white dark:bg-slate-900 text-primary dark:text-secondary shadow-sm shrink-0">
                    <Globe className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-0.5">Official Portal</span>
                    <p className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white leading-none">
                      www.venite.edu.ng
                    </p>
                  </div>
                </div>

                {/* Office hours */}
                <div className="flex gap-4 items-start">
                  <div className="p-3 rounded-xl bg-white dark:bg-slate-900 text-primary dark:text-secondary shadow-sm shrink-0">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-0.5">Office Hours</span>
                    <p className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white leading-tight">
                      Monday – Friday
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 font-light leading-none">
                      8:00 AM – 4:00 PM (GMT+1)
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Custom Mock Interactive Google Map */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-slate-100 dark:bg-dark-card rounded-2xl overflow-hidden border border-slate-200 dark:border-dark-border shadow-md"
            >
              {/* Map Titlebar */}
              <div className="px-4 py-3 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-dark-border flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-red-500 animate-bounce" />
                  <span className="text-[11px] font-bold text-slate-700 dark:text-slate-200 font-sans">
                    Google Maps - Iloro-Ekiti
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setZoomLevel(Math.min(zoomLevel + 1, 18))}
                    className="p-1 rounded bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-100"
                    title="Zoom In"
                  >
                    <Plus className="h-3 w-3 text-slate-600 dark:text-slate-300" />
                  </button>
                  <button
                    onClick={() => setZoomLevel(Math.max(zoomLevel - 1, 10))}
                    className="p-1 rounded bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-100"
                    title="Zoom Out"
                  >
                    <Minus className="h-3 w-3 text-slate-600 dark:text-slate-300" />
                  </button>
                </div>
              </div>

              {/* Map Canvas Illustration */}
              <div className="relative h-60 bg-slate-200 dark:bg-slate-950 flex items-center justify-center overflow-hidden">
                {/* SVG/CSS Map Vector Background */}
                <div className="absolute inset-0 opacity-45 dark:opacity-20 grid grid-cols-12 gap-1 [background-size:20px_20px] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)]">
                  {/* Mock Roads */}
                  <div className="absolute top-1/3 left-0 right-0 h-4 bg-slate-300/60 dark:bg-slate-800 transform -rotate-2" />
                  <div className="absolute top-0 bottom-0 left-2/3 w-6 bg-slate-300/60 dark:bg-slate-800 transform rotate-12" />
                  <div className="absolute top-1/2 bottom-0 left-1/4 w-3.5 bg-slate-300/60 dark:bg-slate-800 transform -rotate-45" />
                  <div className="absolute top-1/4 bottom-1/4 left-10 right-10 rounded-full border-4 border-slate-300/40 dark:border-slate-800/40" />
                </div>

                {/* River mapping */}
                <div className="absolute bottom-6 left-0 right-12 h-5 bg-blue-200/50 dark:bg-blue-950/20 rounded-full blur-xs transform -rotate-6" />

                {/* Landmark indicators */}
                <div className="absolute top-1/4 left-1/3 p-1.5 rounded-lg bg-white/90 dark:bg-slate-900 border text-[10px] font-medium text-slate-400">
                  Iloro Junction
                </div>
                <div className="absolute bottom-12 left-1/2 p-1.5 rounded-lg bg-white/90 dark:bg-slate-900 border text-[10px] font-medium text-slate-400">
                  Ekiti State Forest Reserve
                </div>

                {/* Center marker for University */}
                <div className="absolute z-10 flex flex-col items-center">
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                    className="h-10 w-10 rounded-full bg-primary/20 dark:bg-secondary/20 flex items-center justify-center p-2 border-2 border-primary dark:border-secondary shadow-lg backdrop-blur-xs"
                  >
                    <MapPin className="h-6 w-6 text-primary dark:text-secondary fill-primary/30 dark:fill-secondary/30" />
                  </motion.div>
                  <div className="mt-2 bg-slate-950 text-white rounded px-2 py-1 text-[9px] font-bold tracking-wider uppercase shadow-md border border-white/20 whitespace-nowrap">
                    Venite University
                  </div>
                </div>

                {/* Mini details label inside canvas */}
                <div className="absolute bottom-3 left-3 bg-white/95 dark:bg-slate-900/95 p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-[10px] text-slate-500 dark:text-slate-400 flex items-center gap-1.5 shadow-sm">
                  <Navigation className="h-3 w-3 text-primary dark:text-secondary" />
                  <span>Zoom level: {zoomLevel}x</span>
                </div>
              </div>

              {/* Map Footer link */}
              <div className="p-3 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-dark-border text-center">
                <a
                  href="https://maps.google.com/?q=Iloro-Ekiti"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-primary dark:text-secondary hover:underline"
                >
                  <span>Open in Google Maps</span>
                  <Navigation className="h-3.5 w-3.5" />
                </a>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
