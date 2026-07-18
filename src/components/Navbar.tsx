/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, GraduationCap, ArrowRight, Sun, Moon } from 'lucide-react';
import { Page } from '../types';
import universityLogo from '../assets/images/university_logo_1784387071319.jpg';

interface NavbarProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  isDark: boolean;
}

export default function Navbar({ currentPage, setCurrentPage, isDark }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; id: Page }[] = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Programmes', id: 'programmes' },
    { label: 'Admissions', id: 'admissions' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (pageId: Page) => {
    setCurrentPage(pageId);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <nav
        id="main-nav"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 border-b border-slate-200/80 shadow-sm backdrop-blur-md dark:bg-dark-bg/90 dark:border-dark-border dark:shadow-black/20 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <div
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-2.5 cursor-pointer group"
            >
              <div className="flex items-center justify-center h-10 w-10 rounded-xl bg-white dark:bg-slate-900 border border-slate-150 dark:border-dark-border transition-all duration-300 group-hover:scale-105 group-hover:rotate-3 shadow-md overflow-hidden">
                <img
                  src={universityLogo}
                  alt="Venite University Logo"
                  className="h-full w-full object-contain p-0.5"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="font-display font-bold text-lg sm:text-xl tracking-tight text-primary dark:text-white block leading-none">
                  VENITE
                </span>
                <span className="font-sans text-[10px] tracking-widest text-slate-500 dark:text-secondary font-bold block uppercase mt-0.5">
                  UNIVERSITY
                </span>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-colors focus:outline-none ${
                      isActive
                        ? 'text-primary dark:text-secondary'
                        : 'text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-secondary'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavLine"
                        className="absolute bottom-0 left-4 right-4 h-0.5 bg-secondary"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* CTA Button and Hamburger */}
            <div className="flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => handleNavClick('admissions')}
                className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary hover:bg-primary-dark text-white text-xs font-semibold tracking-wider uppercase transition-colors shadow-md dark:bg-secondary dark:text-primary dark:hover:bg-secondary-dark focus:outline-none"
              >
                <span>Apply Now</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </motion.button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden flex items-center justify-center p-2 rounded-lg text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu panel */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t border-slate-100 dark:border-dark-border bg-white dark:bg-dark-bg mt-3"
            >
              <div className="px-4 pt-3 pb-6 space-y-1.5 shadow-xl">
                {navItems.map((item) => {
                  const isActive = currentPage === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`block w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                        isActive
                          ? 'bg-slate-50 text-primary border-l-4 border-secondary dark:bg-slate-800 dark:text-secondary'
                          : 'text-slate-600 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800'
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
                <div className="pt-4 px-4">
                  <button
                    onClick={() => handleNavClick('admissions')}
                    className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-full bg-primary hover:bg-primary-dark text-white text-xs font-semibold tracking-wider uppercase transition-colors shadow-md dark:bg-secondary dark:text-primary"
                  >
                    <span>Apply Now</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
