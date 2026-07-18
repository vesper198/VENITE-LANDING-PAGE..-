/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { HeartPulse, Sprout, Cpu, Building2, ChevronRight, GraduationCap } from 'lucide-react';
import { COLLEGES_DATA } from '../data';
import { Page, College } from '../types';

interface CollegesProps {
  setCurrentPage: (page: Page) => void;
}

// Map string icon names to Lucide elements
const IconMap: Record<string, React.ComponentType<any>> = {
  HeartPulse,
  Sprout,
  Cpu,
  Building2,
};

export default function Colleges({ setCurrentPage }: CollegesProps) {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 80, damping: 18 },
    },
  };

  return (
    <section id="colleges-section" className="py-20 bg-slate-50 dark:bg-slate-900/40 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary dark:bg-secondary/10 dark:text-secondary text-xs font-bold tracking-wider uppercase mb-4">
            <GraduationCap className="h-4 w-4" />
            <span>Academic Excellence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            Discover Your Path to Success
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 font-light leading-relaxed">
            Venite University offers industry-relevant programmes through four dynamic colleges designed to equip students with practical skills, professional competence, and leadership qualities.
          </p>
        </div>

        {/* Collage & Cards Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {COLLEGES_DATA.map((college: College) => {
            const IconComponent = IconMap[college.iconName] || GraduationCap;
            return (
              <motion.div
                key={college.id}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group relative flex flex-col justify-between bg-white dark:bg-dark-card rounded-2xl overflow-hidden shadow-md border border-slate-100 dark:border-dark-border transition-all duration-300"
              >
                {/* College Image Header */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={college.imageUrl}
                    alt={college.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  
                  {/* Floating Icon */}
                  <div className="absolute bottom-4 left-4 flex items-center justify-center h-12 w-12 rounded-xl bg-white/95 text-primary shadow-md backdrop-blur-sm group-hover:scale-105 transition-all duration-300 dark:bg-slate-900/95 dark:text-secondary">
                    <IconComponent className="h-6 w-6" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white leading-tight min-h-[48px] group-hover:text-primary dark:group-hover:text-secondary transition-colors duration-200">
                    {college.name}
                  </h3>
                  <p className="mt-2 text-xs text-slate-500 dark:text-slate-400 font-light line-clamp-2">
                    {college.description}
                  </p>

                  <div className="mt-5 border-t border-slate-100 dark:border-dark-border pt-4">
                    <span className="text-[11px] font-bold tracking-wider text-slate-400 dark:text-slate-500 uppercase block mb-2.5">
                      Accredited Programmes:
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                      {college.programmes.slice(0, 3).map((prog, index) => (
                        <li key={index} className="flex items-start gap-1.5 line-clamp-1">
                          <span className="inline-block h-1.5 w-1.5 rounded-full bg-secondary mt-1.5 shrink-0" />
                          <span>{prog}</span>
                        </li>
                      ))}
                      {college.programmes.length > 3 && (
                        <li className="text-primary dark:text-secondary font-medium text-[11px] pl-3">
                          + {college.programmes.length - 3} more programmes
                        </li>
                      )}
                    </ul>
                  </div>
                </div>

                {/* Card Footer / View Details */}
                <div className="px-6 pb-6 pt-2">
                  <button
                    onClick={() => {
                      setCurrentPage('programmes');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="w-full flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-slate-50 dark:bg-slate-900/80 text-xs font-semibold text-primary dark:text-slate-200 border border-slate-100 dark:border-dark-border group-hover:bg-primary group-hover:text-white dark:group-hover:bg-secondary dark:group-hover:text-primary transition-all duration-200"
                  >
                    <span>Explore College</span>
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action Button */}
        <div className="text-center mt-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setCurrentPage('programmes');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary hover:bg-primary-dark text-white text-xs font-bold tracking-wider uppercase transition-all duration-300 shadow-md dark:bg-secondary dark:text-primary dark:hover:bg-secondary-dark"
          >
            <span>View All Programmes</span>
            <ChevronRight className="h-4 w-4" />
          </motion.button>
        </div>

      </div>
    </section>
  );
}
