/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowRight, Play, BookOpen, Sparkles } from 'lucide-react';
import { Page } from '../types';
import universityLogo from '../assets/images/university_logo_1784387071319.jpg';

interface HeroProps {
  setCurrentPage: (page: Page) => void;
}

export default function Hero({ setCurrentPage }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 20 },
    },
  };

  return (
    <section id="hero-section" className="relative h-[92vh] min-h-[600px] overflow-hidden flex items-center pt-20">
      {/* Background image with slow zoom effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200"
          alt="Venite University students walking across modern campus"
          className="w-full h-full object-cover object-center animate-slow-zoom"
          referrerPolicy="no-referrer"
        />
        {/* Dark primary-tinted overlay for premium look & excellent readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/80 to-slate-950/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-white">
        <div className="max-w-3xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {/* Accreditation Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-secondary/20 border border-secondary/40 text-secondary text-xs sm:text-sm font-semibold tracking-wider uppercase backdrop-blur-md"
            >
              <img
                src={universityLogo}
                alt="Venite University Seal"
                className="h-5 w-5 rounded-full object-contain bg-white p-0.5 animate-pulse"
                referrerPolicy="no-referrer"
              />
              <span>National Universities Commission (NUC) Approved</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1] text-white"
            >
              Shape Your Future at <br />
              <span className="text-secondary bg-clip-text">Venite University</span>
            </motion.h1>

            {/* Sub-heading text paragraphs */}
            <motion.div
              variants={itemVariants}
              className="space-y-4 text-base sm:text-lg text-slate-200/90 leading-relaxed font-sans font-light"
            >
              <p>
                Join one of Nigeria's fast-growing private universities where innovation, academic excellence, and character development prepare students to become globally competitive leaders.
              </p>
              <p className="hidden sm:block text-slate-300 text-sm sm:text-base border-l-2 border-secondary/50 pl-4">
                Located in the peaceful town of Iloro-Ekiti, Venite University provides accredited programmes, world-class facilities, and a supportive learning environment that empowers every student to succeed.
              </p>
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <button
                onClick={() => {
                  setCurrentPage('admissions');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-secondary text-primary font-bold text-sm tracking-wide uppercase transition-all duration-300 hover:bg-secondary-dark hover:scale-102 hover:shadow-lg focus:outline-none"
              >
                <span>Apply Now</span>
                <ArrowRight className="h-4.5 w-4.5 text-primary" />
              </button>

              <button
                onClick={() => {
                  setCurrentPage('programmes');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-sm tracking-wide uppercase transition-all duration-300 backdrop-blur-sm focus:outline-none"
              >
                <BookOpen className="h-4.5 w-4.5 text-secondary" />
                <span>Explore Programmes</span>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Aesthetic bottom ribbon */}
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white dark:from-dark-bg to-transparent z-10" />
    </section>
  );
}
