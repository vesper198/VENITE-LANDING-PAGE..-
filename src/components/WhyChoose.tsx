/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Award, School, ShieldCheck, Briefcase, Check, Sparkles, Quote } from 'lucide-react';
import { BENEFITS_DATA } from '../data';

const IconMap: Record<string, React.ComponentType<any>> = {
  Award,
  School,
  ShieldCheck,
  Briefcase
};

export default function WhyChoose() {
  const listVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  // Alternating slide effects
  const cardVariants = (index: number) => ({
    hidden: {
      opacity: 0,
      x: index % 2 === 0 ? -40 : 40
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 70,
        damping: 15
      }
    }
  });

  return (
    <section id="why-choose-section" className="py-20 bg-white dark:bg-dark-bg transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-secondary/15 text-primary dark:text-secondary text-xs font-bold tracking-wider uppercase mb-3">
            <Sparkles className="h-3.5 w-3.5 text-secondary animate-pulse" />
            <span>The Venite Edge</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            Why Students and Parents Trust Us
          </h2>
          <p className="mt-4 text-base text-slate-500 dark:text-slate-400 font-light">
            We provide a premium educational framework focused on professional readiness and stellar ethical values.
          </p>
        </div>

        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Dynamic Photo & Vision Box */}
          <div className="lg:col-span-5 space-y-6 relative">
            {/* Main Collage Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[360px] sm:h-[440px] rounded-2xl overflow-hidden shadow-xl border-4 border-slate-50 dark:border-slate-800"
            >
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800"
                alt="Students analyzing data in high-tech laboratory"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/30 to-transparent" />
              
              {/* Overlay Vision Panel */}
              <div className="absolute bottom-0 inset-x-0 p-6 text-white bg-slate-950/70 backdrop-blur-md border-t border-white/10">
                <div className="flex gap-3">
                  <Quote className="h-8 w-8 text-secondary shrink-0 opacity-80" />
                  <div>
                    <span className="text-[10px] font-bold tracking-widest text-secondary uppercase block mb-1">
                      Our Vision
                    </span>
                    <p className="text-sm font-sans font-medium text-slate-100 leading-relaxed italic">
                      "To raise self-reliant, innovative graduates with strong character, professional competence, and global competitiveness."
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Accompanying Stats Badge for credibility */}
            <div className="absolute -top-4 -right-4 bg-secondary text-primary rounded-2xl px-5 py-4 shadow-lg flex flex-col items-center justify-center transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <span className="text-2xl font-display font-extrabold leading-none">100%</span>
              <span className="text-[10px] font-bold tracking-wider uppercase mt-1">Accredited</span>
            </div>
          </div>

          {/* Right Column - Slide-in Benefit Cards */}
          <motion.div
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7 space-y-4"
          >
            {BENEFITS_DATA.map((benefit, index) => {
              const IconComponent = IconMap[benefit.iconName] || Check;
              return (
                <motion.div
                  key={index}
                  variants={cardVariants(index)}
                  className="flex gap-4 sm:gap-5 p-5 sm:p-6 rounded-2xl bg-slate-50 hover:bg-slate-100 dark:bg-dark-card dark:hover:bg-slate-800/60 border border-slate-100 dark:border-dark-border hover:shadow-md transition-all duration-300 group"
                >
                  {/* Icon Circle */}
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-white dark:bg-slate-900 text-primary dark:text-secondary shadow-sm shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <IconComponent className="h-6 w-6 text-primary dark:text-secondary" />
                  </div>

                  {/* Benefit Content */}
                  <div className="space-y-1">
                    <h3 className="text-base sm:text-lg font-display font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      <span>{benefit.title}</span>
                      <Check className="h-4 w-4 text-green-500 shrink-0 hidden sm:inline" />
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-300 leading-relaxed font-light">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>

      </div>
    </section>
  );
}
