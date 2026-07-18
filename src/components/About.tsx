/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import universityLogo from '../assets/images/university_logo_1784387071319.jpg';
import {
  Sparkles,
  BookOpen,
  Award,
  Lightbulb,
  ShieldCheck,
  Building,
  Target,
  Compass,
  Zap,
  Users,
  ShieldAlert,
  HeartHandshake,
  CheckCircle,
  FileCode,
  Terminal,
  Activity
} from 'lucide-react';
import { WATERFALL_PHASES, STATS_DATA } from '../data';

// Helper component for count-up statistics
function StatCounter({ value, label }: { value: string; label: string; key?: any }) {
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''), 10);
  const suffix = value.replace(/[0-9]/g, '');
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isNaN(numericValue)) return;
    let start = 0;
    const duration = 1500; // ms
    const increment = Math.ceil(numericValue / (duration / 30));
    const timer = setInterval(() => {
      start += increment;
      if (start >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 30);

    return () => clearInterval(timer);
  }, [numericValue]);

  return (
    <div className="text-center p-6 bg-white dark:bg-dark-card rounded-2xl border border-slate-100 dark:border-dark-border shadow-sm hover:shadow-md transition-shadow duration-300">
      <span className="block text-4xl font-display font-extrabold text-primary dark:text-secondary mb-1">
        {isNaN(numericValue) ? value : `${count}${suffix}`}
      </span>
      <span className="block text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
        {label}
      </span>
    </div>
  );
}

export default function About() {
  const coreValues = [
    { name: 'Excellence', description: 'Striving for preeminence in scholastic teaching, scientific research, and administrative stewardship.', icon: Award },
    { name: 'Integrity', description: 'Fostering deep-seated moral righteousness, accountability, and pristine character development.', icon: ShieldCheck },
    { name: 'Innovation', description: 'Empowering smart digital research, creative problem solving, and technological application.', icon: Lightbulb },
    { name: 'Leadership', description: 'Molding self-reliant, globally competitive graduates fitted to guide administrative structures.', icon: Zap },
    { name: 'Discipline', description: 'Instilling strict adherence to administrative codes of conduct, focus, and research precision.', icon: CheckCircle },
    { name: 'Service', description: 'Encouraging strong community development, empathy, and collaborative societal impact.', icon: HeartHandshake }
  ];

  return (
    <section className="py-12 bg-white dark:bg-dark-bg transition-colors duration-300">
      
      {/* About Page Hero Banner */}
      <div className="relative py-24 mb-16 bg-slate-900 overflow-hidden rounded-3xl max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 opacity-45">
          <img
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200"
            alt="Panoramic view of modern university campus"
            className="w-full h-full object-cover animate-slow-zoom"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-slate-950/85" />
        
        <div className="relative z-10 max-w-3xl text-white">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
            <div className="h-12 w-12 rounded-xl bg-white p-1 shadow-lg overflow-hidden flex items-center justify-center shrink-0">
              <img
                src={universityLogo}
                alt="Venite University Crest"
                className="h-full w-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-secondary text-primary text-xs font-bold uppercase tracking-wider">
                Established in Iloro-Ekiti
              </span>
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight">
            About Venite University
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            Venite University is a premier private institution dedicated to raising self-reliant, innovative graduates equipped with strong character, professional competence, and global competitiveness.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Main Background details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5 text-slate-600 dark:text-slate-300 font-light text-sm sm:text-base leading-relaxed">
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              A Safe, Modern, & Nurturing Campus in Ekiti State
            </h2>
            <p>
              Venite University is a private institution of higher learning located in the peaceful, serene town of <strong>Iloro-Ekiti, Ekiti State, Nigeria</strong>. The university is committed to delivering quality education through innovative teaching, cutting-edge research, hands-on entrepreneurship, and sustainable community service.
            </p>
            <p>
              The institution provides students with a safe, supportive learning environment, highly experienced lecturers, modern laboratory/classroom facilities, and internationally relevant accredited programmes designed to prepare graduates for successful careers and lifelong learning.
            </p>
          </div>

          {/* Right side Image illustration */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-xl border-4 border-slate-50 dark:border-slate-800 h-[320px] sm:h-[380px]"
            >
              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800"
                alt="Venite University campus architecture"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="absolute -bottom-4 -left-4 bg-primary text-secondary p-4 rounded-xl shadow-md hidden sm:block">
              <span className="block text-2xl font-display font-extrabold leading-none text-white">NUC</span>
              <span className="block text-[10px] tracking-widest font-bold uppercase text-secondary">Accredited</span>
            </div>
          </div>
        </div>

        {/* Live counter Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {STATS_DATA.map((stat, i) => (
            <StatCounter key={i} value={stat.value} label={stat.label} />
          ))}
        </div>

        {/* Mission & Vision double bento */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Mission Card */}
          <div className="p-8 rounded-2xl bg-slate-50 dark:bg-dark-card border border-slate-100 dark:border-dark-border flex gap-5">
            <div className="p-3 bg-primary/10 text-primary dark:bg-secondary/10 dark:text-secondary rounded-xl shrink-0 h-12 w-12 flex items-center justify-center">
              <Target className="h-6 w-6" />
            </div>
            <div>
              <span className="text-[10px] font-bold tracking-widest text-primary dark:text-secondary uppercase block mb-1">
                Our Mission
              </span>
              <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-2">
                Nurturing Responsible Graduates
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-300 leading-relaxed font-light">
                To provide quality education through robust teaching, intensive scientific research, technological innovation, and proactive community development while nurturing ethical, responsible graduates.
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="p-8 rounded-2xl bg-slate-50 dark:bg-dark-card border border-slate-100 dark:border-dark-border flex gap-5">
            <div className="p-3 bg-secondary/20 text-secondary rounded-xl shrink-0 h-12 w-12 flex items-center justify-center">
              <Compass className="h-6 w-6 text-primary dark:text-secondary" />
            </div>
            <div>
              <span className="text-[10px] font-bold tracking-widest text-secondary uppercase block mb-1">
                Our Vision
              </span>
              <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-2">
                Shaping Globally Competitive Leaders
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-300 leading-relaxed font-light">
                To raise self-reliant, innovative graduates with outstanding character, advanced professional competence, and high standing of global competitiveness in modern fields.
              </p>
            </div>
          </div>

        </div>

        {/* Core Values Section */}
        <div>
          <div className="text-center mb-10 max-w-xl mx-auto">
            <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
              Our Core Values
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-500 font-light mt-1.5">
              The ethical pillars defining student conduct and administrative excellence at Venite University.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((val, index) => {
              const IconComp = val.icon;
              return (
                <div
                  key={index}
                  className="p-5 rounded-2xl bg-white dark:bg-dark-card border border-slate-100 dark:border-dark-border shadow-xs hover:shadow-md transition-shadow duration-350 flex gap-4"
                >
                  <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900 text-primary dark:text-secondary shrink-0">
                    <IconComp className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-slate-900 dark:text-white mb-1">
                      {val.name}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Project Methodology Section (Waterfall Software Development Methodology) */}
        <div className="pt-10 border-t border-slate-100 dark:border-dark-border">
          <div className="mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[10px] font-bold tracking-wider uppercase mb-2">
              <Terminal className="h-3.5 w-3.5 text-primary dark:text-secondary" />
              <span>Project Development Methodology</span>
            </div>
            <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
              Waterfall Software Development Methodology
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-light mt-1.5 max-w-3xl">
              The Venite University website project was planned, designed, coded, and tested using the rigorous <strong>Waterfall Methodology</strong>. This sequential framework guarantees pristine, bug-free execution and comprehensive coverage of all institutional specifications.
            </p>
          </div>

          {/* Timeline phases */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WATERFALL_PHASES.map((phaseItem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="relative bg-slate-50 dark:bg-dark-card rounded-2xl p-5 border border-slate-100 dark:border-dark-border group hover:border-secondary transition-colors duration-300"
              >
                {/* Visual Step number */}
                <div className="absolute top-5 right-5 text-3xl font-display font-extrabold text-slate-200 dark:text-slate-800 leading-none group-hover:text-secondary/20 transition-colors">
                  0{index + 1}
                </div>

                <span className="text-[10px] font-bold text-secondary dark:text-secondary uppercase tracking-widest block mb-1">
                  {phaseItem.phase}
                </span>
                <h4 className="text-sm font-display font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary dark:group-hover:text-secondary transition-colors">
                  {phaseItem.title}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-300 leading-relaxed font-light">
                  {phaseItem.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
