/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Quote, ChevronDown, Award, ExternalLink, HelpCircle } from 'lucide-react';
import { Page } from './types';
import { FAQS_DATA, TESTIMONIALS_DATA } from './data';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Colleges from './components/Colleges';
import WhyChoose from './components/WhyChoose';
import Admissions from './components/Admissions';
import About from './components/About';
import Programmes from './components/Programmes';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeCapsule from './components/ThemeCapsule';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isDark, setIsDark] = useState<boolean>(() => {
    const saved = localStorage.getItem('venite_theme');
    if (saved) return saved === 'dark';
    return false; // Default to Light Mode
  });

  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Sync theme to root class
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('venite_theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('venite_theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  // Staggered transitions
  const pageVariants = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
    exit: { opacity: 0, y: -15, transition: { duration: 0.2 } }
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 dark:bg-dark-bg dark:text-slate-100 transition-colors duration-300 flex flex-col font-sans">
      
      {/* Sticky Navigation */}
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} isDark={isDark} />

      {/* Main Content Pane */}
      <main className="flex-grow pt-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {currentPage === 'home' && (
              <>
                {/* SECTION 1 - HERO */}
                <Hero setCurrentPage={setCurrentPage} />

                {/* SECTION 2 - COLLEGES & PROGRAMMES */}
                <Colleges setCurrentPage={setCurrentPage} />

                {/* SECTION 3 - WHY CHOOSE US */}
                <WhyChoose />

                {/* ACCREDITATION & TRUST BUILDERS - Testimonials & FAQs */}
                <section className="py-20 bg-slate-50 dark:bg-slate-900/40 transition-colors duration-300">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    
                    {/* Testimonials Header */}
                    <div className="text-center max-w-2xl mx-auto mb-16">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary dark:bg-secondary/10 dark:text-secondary text-xs font-bold uppercase tracking-wider mb-3">
                        <Quote className="h-4 w-4" />
                        <span>Voice of Venite</span>
                      </div>
                      <h2 className="text-3xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
                        What Parents & Students Say
                      </h2>
                      <p className="mt-3 text-sm text-slate-500 dark:text-slate-400 font-light">
                        Real reviews from members of our expanding university community.
                      </p>
                    </div>

                    {/* Testimonials Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                      {TESTIMONIALS_DATA.map((t, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ y: -6 }}
                          className="bg-white dark:bg-dark-card p-6 rounded-2xl border border-slate-100 dark:border-dark-border shadow-sm flex flex-col justify-between"
                        >
                          <div className="space-y-4">
                            <Quote className="h-8 w-8 text-secondary/40 shrink-0" />
                            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-light italic">
                              "{t.text}"
                            </p>
                          </div>

                          <div className="flex items-center gap-3.5 pt-6 border-t border-slate-50 dark:border-dark-border mt-6">
                            <img
                              src={t.image}
                              alt={t.name}
                              className="h-10 w-10 rounded-full object-cover border-2 border-secondary"
                              referrerPolicy="no-referrer"
                            />
                            <div>
                              <h4 className="font-display font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
                                {t.name}
                              </h4>
                              <p className="text-[10px] text-slate-400 dark:text-slate-500 font-medium">
                                {t.role}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* FAQ Header */}
                    <div className="text-center max-w-2xl mx-auto mb-12">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-bold uppercase tracking-wider mb-3">
                        <HelpCircle className="h-4 w-4" />
                        <span>Support Desk</span>
                      </div>
                      <h2 className="text-3xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
                        Frequently Asked Questions
                      </h2>
                      <p className="mt-3 text-sm text-slate-500 dark:text-slate-400 font-light">
                        Clear answers regarding fees, accreditations, criteria, and hostel options.
                      </p>
                    </div>

                    {/* FAQ Accordion list */}
                    <div className="max-w-3xl mx-auto space-y-4">
                      {FAQS_DATA.map((faq, index) => {
                        const isOpen = activeFaq === index;
                        return (
                          <div
                            key={index}
                            className="bg-white dark:bg-dark-card rounded-2xl border border-slate-100 dark:border-dark-border overflow-hidden transition-all duration-300"
                          >
                            <button
                              onClick={() => setActiveFaq(isOpen ? null : index)}
                              className="w-full flex items-center justify-between p-5 text-left font-display font-bold text-slate-800 dark:text-white text-xs sm:text-sm focus:outline-none"
                            >
                              <span>{faq.question}</span>
                              <motion.div
                                animate={{ rotate: isOpen ? 180 : 0 }}
                                transition={{ duration: 0.2 }}
                              >
                                <ChevronDown className="h-4 w-4 text-slate-400" />
                              </motion.div>
                            </button>

                            <AnimatePresence initial={false}>
                              {isOpen && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: 'auto', opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.25 }}
                                >
                                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-500 dark:text-slate-300 leading-relaxed font-light border-t border-slate-50 dark:border-dark-border">
                                    {faq.answer}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        );
                      })}
                    </div>

                  </div>
                </section>

                {/* QUICK ADMISSIONS CTAs FOR FLUID CONVERSION */}
                <section className="py-20 bg-white dark:bg-dark-bg transition-colors duration-300">
                  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-primary to-primary-dark dark:from-dark-card dark:to-slate-900 border dark:border-dark-border text-white flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
                      {/* Grid overlay */}
                      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
                      
                      <div className="relative z-10 space-y-4 max-w-xl text-center md:text-left">
                        <span className="inline-block text-[10px] font-bold tracking-widest bg-secondary/20 border border-secondary/30 text-secondary rounded-full px-3.5 py-1">
                          Apply for 2026/2027 Session
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-display font-extrabold tracking-tight">
                          Begin Your Journey to Excellence
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                          Our digital portal is fully operational. Confirm program eligibility and submit your academic credentials in less than 5 minutes.
                        </p>
                      </div>

                      <div className="relative z-10 shrink-0">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => {
                            setCurrentPage('admissions');
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                          className="px-8 py-3.5 rounded-full bg-secondary text-primary font-bold text-xs uppercase tracking-wider shadow-md hover:bg-secondary-dark cursor-pointer transition-colors"
                        >
                          Start Application
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </section>
              </>
            )}

            {currentPage === 'about' && <About />}
            {currentPage === 'programmes' && <Programmes setCurrentPage={setCurrentPage} />}
            {currentPage === 'admissions' && <Admissions />}
            {currentPage === 'contact' && <Contact />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer Section */}
      <Footer setCurrentPage={setCurrentPage} currentPage={currentPage} />

      {/* manual Light/Dark mode floating capsule by bottom right hand corner */}
      <ThemeCapsule isDark={isDark} onToggle={toggleTheme} />
    </div>
  );
}
