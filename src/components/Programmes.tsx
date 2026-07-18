/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  GraduationCap,
  HeartPulse,
  Sprout,
  Cpu,
  Building2,
  CheckCircle2,
  ArrowRight,
  BookOpen,
  Sparkles,
  School,
  Briefcase,
  Layers,
  ChevronRight
} from 'lucide-react';
import { COLLEGES_DATA } from '../data';
import { Page, College } from '../types';

interface ProgrammesProps {
  setCurrentPage: (page: Page) => void;
}

const IconMap: Record<string, React.ComponentType<any>> = {
  HeartPulse,
  Sprout,
  Cpu,
  Building2,
};

export default function Programmes({ setCurrentPage }: ProgrammesProps) {
  const [activeTab, setActiveTab] = useState<string>('medicine-health');

  const studyBenefits = [
    { title: 'Industry-Focused Curriculum', text: 'Syllabi custom tailored to match modern technological advancements and employer specifications.' },
    { title: 'Experienced Lecturers & Mentors', text: 'Learn from highly cited academic scholars, clinical experts, and global industry practitioners.' },
    { title: 'Practical Laboratory Training', text: 'Gain hands-on skills in NUC-standard science, nursing, and computer laboratories from Day 1.' },
    { title: 'Entrepreneurship Development', text: 'Incubate business ideas, startup strategies, and administrative management skills while studying.' },
    { title: 'Internship Opportunities', text: 'Secure prestigious internships with hospitals, tech firms, agro-estates, and multi-national corporations.' },
    { title: 'Career Readiness', text: 'Graduate with the character, CV profiling, and leadership traits required to conquer local and international markets.' }
  ];

  const activeCollege = COLLEGES_DATA.find((c) => c.id === activeTab) || COLLEGES_DATA[0];

  return (
    <section className="py-12 bg-white dark:bg-dark-bg transition-colors duration-300">
      
      {/* Hero Banner with graduation image */}
      <div className="relative py-20 mb-16 bg-slate-900 overflow-hidden rounded-3xl max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 opacity-40">
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200"
            alt="Students from different faculties in graduation gowns"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-slate-950/80" />
        
        <div className="relative z-10 max-w-3xl text-white">
          <span className="inline-block px-3 py-1 rounded-full bg-secondary text-primary text-xs font-bold uppercase tracking-wider mb-4">
            Academic Prospectus
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight">
            Our Academic Programmes
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            Venite University offers fully accredited undergraduate degree programmes designed to prepare students for impactful global careers. Explore our colleges below.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Dynamic Filters & Tabs */}
        <div>
          <div className="text-center mb-8 max-w-xl mx-auto">
            <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white">
              Explore Our Dynamic Colleges
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-light mt-1">
              Click on any college tab below to view accredited undergraduate pathways and career options.
            </p>
          </div>

          {/* Tab buttons */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 p-2 bg-slate-50 dark:bg-dark-card rounded-2xl border border-slate-100 dark:border-dark-border max-w-5xl mx-auto">
            {COLLEGES_DATA.map((college) => {
              const TabIcon = IconMap[college.iconName] || GraduationCap;
              const isSelected = activeTab === college.id;
              return (
                <button
                  key={college.id}
                  onClick={() => setActiveTab(college.id)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 cursor-pointer focus:outline-none ${
                    isSelected
                      ? 'bg-primary text-white shadow-md dark:bg-secondary dark:text-primary'
                      : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
                  }`}
                >
                  <TabIcon className="h-4 w-4 shrink-0" />
                  <span>{college.name.replace('College of ', '')}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab display pane */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-slate-50 dark:bg-dark-card rounded-3xl p-6 sm:p-8 border border-slate-100 dark:border-dark-border shadow-sm items-start"
          >
            {/* Left text detail inside tab (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-[10px] font-bold text-secondary dark:text-secondary uppercase tracking-widest block mb-1">
                  Active College Pathway
                </span>
                <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white">
                  {activeCollege.name}
                </h3>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-300 font-light leading-relaxed">
                  {activeCollege.description}
                </p>
              </div>

              {/* Course bullet list card */}
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-100 dark:border-slate-850">
                <span className="block text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-4 border-b border-slate-50 dark:border-dark-border pb-2">
                  NUC Accredited Degrees:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3.5 gap-x-6">
                  {activeCollege.programmes.map((prog, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-start gap-2.5 group"
                    >
                      <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-sm font-medium text-slate-800 dark:text-slate-200 group-hover:text-primary dark:group-hover:text-secondary transition-colors font-sans">
                        {prog}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Mini career info alert */}
              <div className="flex items-start gap-3 p-4 bg-primary/5 dark:bg-slate-900/45 rounded-xl border border-primary/10">
                <Sparkles className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                <p className="text-xs text-slate-500 dark:text-slate-300 leading-relaxed font-light">
                  <strong>Standard Duration:</strong> All degree programs are completed over 4 standard academic years (with exceptions for professional pathways where applicable).
                </p>
              </div>
            </div>

            {/* Right cover photo (5 cols) */}
            <div className="lg:col-span-5 h-[340px] rounded-2xl overflow-hidden shadow-md border-4 border-white dark:border-slate-800">
              <img
                src={activeCollege.imageUrl}
                alt={activeCollege.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Why Study These Programmes section (checklist grid) */}
        <div className="pt-12 border-t border-slate-100 dark:border-dark-border">
          <div className="mb-10 text-center max-w-xl mx-auto">
            <span className="text-[10px] font-bold text-secondary dark:text-secondary uppercase tracking-widest block mb-1">
              Curriculum Benefits
            </span>
            <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white">
              Why Study These Programmes?
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-500 font-light mt-1.5">
              Every course is aligned with rigorous standards to equip candidates with technical and character qualifications.
            </p>
          </div>

          {/* Cards list */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {studyBenefits.map((benefit, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-slate-50 dark:bg-dark-card border border-slate-100 dark:border-dark-border flex gap-4 hover:shadow-md transition-shadow duration-300"
              >
                <div className="p-2 h-9 w-9 bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400 rounded-lg shrink-0 flex items-center justify-center">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-slate-900 dark:text-white mb-1">
                    {benefit.title}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                    {benefit.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Application block */}
        <div className="bg-primary rounded-3xl p-8 sm:p-12 text-white text-center relative overflow-hidden dark:bg-slate-900 border dark:border-dark-border">
          {/* Subtle patterns */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <span className="inline-block text-[10px] font-bold tracking-widest bg-white/10 px-3.5 py-1.5 rounded-full text-secondary uppercase border border-white/15">
              Secure Your Placement Today
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-extrabold tracking-tight">
              Ready to Shape Your Academic Path?
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 font-light max-w-lg mx-auto">
              Our dynamic admissions counseling desk is fully active. Complete our digital screening in minutes.
            </p>
            <div className="pt-2">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => {
                  setCurrentPage('admissions');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-secondary hover:bg-secondary-dark text-primary font-bold text-xs sm:text-sm uppercase tracking-wide transition-all shadow-md cursor-pointer"
              >
                <span>Apply for Admission</span>
                <ArrowRight className="h-4 w-4" />
              </motion.button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
