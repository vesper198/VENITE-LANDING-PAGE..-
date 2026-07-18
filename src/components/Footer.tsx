/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GraduationCap, Facebook, Instagram, Twitter, Linkedin, Youtube, ArrowUp, ArrowRight, Sparkles } from 'lucide-react';
import { Page } from '../types';
import universityLogo from '../assets/images/university_logo_1784387071319.jpg';

interface FooterProps {
  setCurrentPage: (page: Page) => void;
  currentPage: Page;
}

export default function Footer({ setCurrentPage, currentPage }: FooterProps) {
  const handleLinkClick = (pageId: Page) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 border-b border-slate-900 pb-12">
          
          {/* Logo, Slogan, and Socials (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div
              onClick={() => handleLinkClick('home')}
              className="flex items-center gap-2.5 cursor-pointer group w-fit"
            >
              <div className="flex items-center justify-center h-10 w-10 rounded-xl bg-white border border-slate-800 transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3 shadow-md overflow-hidden">
                <img
                  src={universityLogo}
                  alt="Venite University Logo"
                  className="h-full w-full object-contain p-0.5"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="font-display font-bold text-lg sm:text-xl tracking-tight text-white block leading-none">
                  VENITE
                </span>
                <span className="font-sans text-[10px] tracking-widest text-secondary font-bold block uppercase mt-0.5">
                  UNIVERSITY
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed max-w-sm">
              Raising Self-Reliant, Innovative Graduates with Strong Character and Global Competitiveness. Empowering leaders to conquer international industries.
            </p>

            {/* Social Icons Stack */}
            <div className="space-y-3">
              <span className="block text-[10px] font-bold uppercase tracking-widest text-slate-500">Connect with us</span>
              <div className="flex items-center gap-2.5">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-850 border border-slate-900 transition-all duration-250"
                  aria-label="Facebook Link"
                >
                  <Facebook className="h-4.5 w-4.5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-850 border border-slate-900 transition-all duration-250"
                  aria-label="Instagram Link"
                >
                  <Instagram className="h-4.5 w-4.5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-850 border border-slate-900 transition-all duration-250"
                  aria-label="Twitter Link"
                >
                  <Twitter className="h-4.5 w-4.5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-850 border border-slate-900 transition-all duration-250"
                  aria-label="LinkedIn Link"
                >
                  <Linkedin className="h-4.5 w-4.5" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-850 border border-slate-900 transition-all duration-250"
                  aria-label="YouTube Link"
                >
                  <Youtube className="h-4.5 w-4.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-slate-200 border-l-2 border-secondary pl-3">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              {(['home', 'about', 'programmes', 'admissions', 'contact'] as Page[]).map((pageId) => (
                <li key={pageId}>
                  <button
                    onClick={() => handleLinkClick(pageId)}
                    className={`hover:text-secondary text-left py-1 capitalize transition-colors ${
                      currentPage === pageId ? 'text-secondary font-semibold' : 'text-slate-400'
                    }`}
                  >
                    {pageId} Page
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Admissions Stack (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-slate-200 border-l-2 border-secondary pl-3">
              Admissions
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button
                  onClick={() => handleLinkClick('admissions')}
                  className="hover:text-secondary flex items-center gap-1.5 transition-colors text-left"
                >
                  <ArrowRight className="h-3 w-3 text-secondary" />
                  <span>Apply Now</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('admissions')}
                  className="hover:text-secondary flex items-center gap-1.5 transition-colors text-left"
                >
                  <ArrowRight className="h-3 w-3 text-secondary" />
                  <span>Entry Requirements</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    handleLinkClick('admissions');
                  }}
                  className="hover:text-secondary flex items-center gap-1.5 transition-colors text-left"
                >
                  <ArrowRight className="h-3 w-3 text-secondary" />
                  <span>Tuition & Fees</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    handleLinkClick('admissions');
                  }}
                  className="hover:text-secondary flex items-center gap-1.5 transition-colors text-left"
                >
                  <ArrowRight className="h-3 w-3 text-secondary" />
                  <span>Frequently Asked Questions</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Certification / NUC accreditation (2 Cols) */}
          <div className="lg:col-span-2 space-y-4 flex flex-col justify-start">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-slate-200 border-l-2 border-secondary pl-3">
              Accreditation
            </h4>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-850 space-y-2 text-center sm:text-left">
              <Sparkles className="h-5 w-5 text-secondary mx-auto sm:mx-0 animate-pulse" />
              <p className="text-[10px] font-bold text-slate-200">NUC Fully Certified</p>
              <p className="text-[10px] text-slate-500 leading-tight">Accreditation ID: VN-NUC-2026-NIG</p>
            </div>
          </div>

        </div>

        {/* Bottom copyright line and Floating arrow back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="text-center sm:text-left">
            © 2026 Venite University, Iloro-Ekiti. All Rights Reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 py-1.5 px-3 rounded-full bg-slate-900 hover:bg-slate-850 text-slate-400 hover:text-white border border-slate-900 transition-colors cursor-pointer"
            title="Scroll to Top"
          >
            <span className="text-[10px] font-bold uppercase tracking-wider">Back to Top</span>
            <ArrowUp className="h-3.5 w-3.5 text-secondary" />
          </button>
        </div>

      </div>
    </footer>
  );
}
