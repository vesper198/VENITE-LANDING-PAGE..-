/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import universityLogo from '../assets/images/university_logo_1784387071319.jpg';
import {
  Sparkles,
  ClipboardCheck,
  UserCheck,
  FileSpreadsheet,
  CloudUpload,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Globe,
  Award,
  BookOpen,
  ArrowRight,
  Calculator,
  ThumbsUp,
  AlertCircle
} from 'lucide-react';
import { ADMISSION_STEPS } from '../data';

export default function Admissions() {
  const [jambScore, setJambScore] = useState<string>('');
  const [selectedCollege, setSelectedCollege] = useState<string>('medicine-health');
  const [credits, setCredits] = useState({
    english: true,
    maths: true,
    subject3: false,
    subject4: false,
    subject5: false,
  });

  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [calculatorResult, setCalculatorResult] = useState<{
    status: 'success' | 'warning' | 'error' | null;
    message: string;
  }>({ status: null, message: '' });

  const [savedApplications, setSavedApplications] = useState<any[]>(() => {
    const saved = localStorage.getItem('venite_inquiries');
    return saved ? JSON.parse(saved) : [];
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Simple validation logic for Admission Eligibility
  const handleCheckEligibility = (e: React.FormEvent) => {
    e.preventDefault();
    const score = parseInt(jambScore, 10);

    if (!applicantName || !applicantEmail) {
      setCalculatorResult({
        status: 'error',
        message: 'Please fill in your name and email address first.',
      });
      return;
    }

    if (isNaN(score) || score < 100 || score > 400) {
      setCalculatorResult({
        status: 'error',
        message: 'Please enter a valid UTME (JAMB) score between 100 and 400.',
      });
      return;
    }

    const creditsCount = Object.values(credits).filter(Boolean).length;

    if (creditsCount < 5) {
      setCalculatorResult({
        status: 'warning',
        message: `Hello ${applicantName}, you currently have ${creditsCount} credit passes. Venite University requires a minimum of 5 O'Level credits (including English & Mathematics) for all degree programmes.`,
      });
      return;
    }

    if (selectedCollege === 'medicine-health' && score < 200) {
      setCalculatorResult({
        status: 'warning',
        message: `Excellent credentials, ${applicantName}! However, the College of Medicine & Health Sciences requires a minimum UTME score of 200. You may be highly eligible for our Colleges of Computing or Agriculture!`,
      });
      return;
    }

    if (score < 160) {
      setCalculatorResult({
        status: 'warning',
        message: `Hello ${applicantName}, your score of ${score} is slightly below our recommended cut-off (160). We encourage you to submit your profile for review under our foundation/pre-degree counseling paths.`,
      });
      return;
    }

    // Success case
    setCalculatorResult({
      status: 'success',
      message: `Congratulations ${applicantName}! You meet the academic criteria for the College of ${
        selectedCollege === 'medicine-health'
          ? 'Medicine and Health Sciences'
          : selectedCollege === 'agriculture'
          ? 'Agriculture'
          : selectedCollege === 'computing-sciences'
          ? 'Computing, Engineering & Sciences'
          : 'Arts, Social & Management Sciences'
      }. Our admissions representative will contact you at ${applicantEmail} shortly with guidelines!`,
    });

    // Save registration of interest
    const newInquiry = {
      id: Date.now(),
      name: applicantName,
      email: applicantEmail,
      jambScore: score,
      college: selectedCollege,
      date: new Date().toLocaleDateString(),
    };

    const updated = [newInquiry, ...savedApplications];
    setSavedApplications(updated);
    localStorage.setItem('venite_inquiries', JSON.stringify(updated));
    setIsSubmitted(true);
  };

  const getStepIcon = (step: number) => {
    switch (step) {
      case 1: return <Globe className="h-5 w-5" />;
      case 2: return <UserCheck className="h-5 w-5" />;
      case 3: return <ClipboardCheck className="h-5 w-5" />;
      case 4: return <CloudUpload className="h-5 w-5" />;
      case 5: return <CheckCircle2 className="h-5 w-5" />;
      default: return <FileSpreadsheet className="h-5 w-5" />;
    }
  };

  return (
    <section className="py-12 bg-white dark:bg-dark-bg transition-colors duration-300">
      
      {/* Hero Banner for Admissions page */}
      <div className="relative py-20 mb-16 bg-slate-900 overflow-hidden rounded-3xl max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 opacity-40">
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800"
            alt="Student completing admission application online"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-slate-950/80" />
        
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
                Admissions Open - 2026/2027 Session
              </span>
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight">
            Begin Your Admission Journey
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            Applying to Venite University is simple, transparent, and completely online. Secure your placement in one of Nigeria's premier rising academic institutions.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Progression Timeline & Steps (7 cols) */}
          <div className="lg:col-span-7 space-y-10">
            <div>
              <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Award className="text-secondary h-6 w-6" />
                <span>How to Apply Step-by-Step</span>
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-light mt-1.5">
                Please review our official sequence below to prepare all required admission files.
              </p>
            </div>

            {/* Custom Interactive Timeline Grid */}
            <div className="relative pl-8 border-l-2 border-slate-100 dark:border-dark-border space-y-8">
              {ADMISSION_STEPS.map((stepItem, index) => (
                <motion.div
                  key={stepItem.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="relative group"
                >
                  {/* Outer bubble */}
                  <div className="absolute -left-[50px] top-0.5 flex items-center justify-center h-10 w-10 rounded-full bg-white dark:bg-slate-900 text-primary dark:text-secondary border-2 border-primary dark:border-secondary shadow-sm transition-transform duration-300 group-hover:scale-110">
                    {getStepIcon(stepItem.step)}
                  </div>

                  <div className="bg-slate-50 dark:bg-dark-card p-5 rounded-2xl border border-slate-100 dark:border-dark-border group-hover:shadow-md transition-shadow duration-300">
                    <span className="text-[10px] font-bold text-secondary dark:text-secondary uppercase tracking-widest block mb-1">
                      Step {stepItem.step}
                    </span>
                    <h3 className="text-base font-display font-bold text-slate-900 dark:text-white group-hover:text-primary dark:group-hover:text-secondary transition-colors duration-200">
                      {stepItem.title}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-slate-500 dark:text-slate-300 leading-relaxed font-light">
                      {stepItem.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Registrar Contact Card */}
            <div className="p-6 rounded-2xl bg-primary/5 dark:bg-slate-900/40 border border-primary/10 dark:border-dark-border space-y-4">
              <h4 className="font-display font-bold text-sm uppercase tracking-wider text-primary dark:text-secondary">
                Need Guidance? Contact Admissions Office
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-600 dark:text-slate-300">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-white dark:bg-slate-800 shadow-sm text-primary dark:text-secondary">
                    <Phone className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-slate-400">Call Registrar</p>
                    <p className="font-semibold">+234 812 345 6789</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-white dark:bg-slate-800 shadow-sm text-primary dark:text-secondary">
                    <Mail className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-slate-400">Email Admissions</p>
                    <p className="font-semibold">admissions@venite.edu.ng</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-white dark:bg-slate-800 shadow-sm text-primary dark:text-secondary">
                    <MapPin className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-slate-400">Campus Location</p>
                    <p className="font-semibold">Iloro-Ekiti, Ekiti State</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-white dark:bg-slate-800 shadow-sm text-primary dark:text-secondary">
                    <Globe className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-slate-400">Official Portal</p>
                    <p className="font-semibold">www.venite.edu.ng</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Admission Eligibility Checker & Prospect inquiry form (5 cols) */}
          <div className="lg:col-span-5 bg-slate-50 dark:bg-dark-card rounded-2xl p-6 sm:p-8 border border-slate-100 dark:border-dark-border shadow-md">
            <div className="flex items-center gap-2 mb-6">
              <Calculator className="h-5 w-5 text-secondary" />
              <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white">
                Eligibility Pre-Screening
              </h3>
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-300 font-light mb-6">
              Fill in your academic profile below to dynamically screen your eligibility against NUC and Venite admission thresholds.
            </p>

            <form onSubmit={handleCheckEligibility} className="space-y-4">
              
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Samuel Adekunle"
                  value={applicantName}
                  onChange={(e) => setApplicantName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-dark-border bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="samuel@gmail.com"
                  value={applicantEmail}
                  onChange={(e) => setApplicantEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-dark-border bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                />
              </div>

              {/* Intended College */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                  Intended College
                </label>
                <select
                  value={selectedCollege}
                  onChange={(e) => setSelectedCollege(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-dark-border bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                >
                  <option value="medicine-health">College of Medicine & Health Sciences</option>
                  <option value="agriculture">College of Agriculture</option>
                  <option value="computing-sciences">College of Computing, Eng. & Sciences</option>
                  <option value="arts-social-management">College of Arts & Management Sciences</option>
                </select>
              </div>

              {/* JAMB score */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                  JAMB Score
                </label>
                <input
                  type="number"
                  min="100"
                  max="400"
                  required
                  placeholder="e.g. 235"
                  value={jambScore}
                  onChange={(e) => setJambScore(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-dark-border bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                />
              </div>

              {/* O level Credits */}
              <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-850">
                <span className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                  Select O'Level Credit Passes:
                </span>
                <div className="space-y-2">
                  <label className="flex items-center gap-2.5 text-xs text-slate-700 dark:text-slate-300 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={credits.english}
                      onChange={(e) => setCredits({ ...credits, english: e.target.checked })}
                      className="h-4 w-4 rounded text-primary focus:ring-primary border-slate-300"
                    />
                    <span>English Language (Required)</span>
                  </label>

                  <label className="flex items-center gap-2.5 text-xs text-slate-700 dark:text-slate-300 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={credits.maths}
                      onChange={(e) => setCredits({ ...credits, maths: e.target.checked })}
                      className="h-4 w-4 rounded text-primary focus:ring-primary border-slate-300"
                    />
                    <span>Mathematics (Required)</span>
                  </label>

                  <label className="flex items-center gap-2.5 text-xs text-slate-700 dark:text-slate-300 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={credits.subject3}
                      onChange={(e) => setCredits({ ...credits, subject3: e.target.checked })}
                      className="h-4 w-4 rounded text-primary focus:ring-primary border-slate-300"
                    />
                    <span>Relevant Science/Art Subject 3</span>
                  </label>

                  <label className="flex items-center gap-2.5 text-xs text-slate-700 dark:text-slate-300 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={credits.subject4}
                      onChange={(e) => setCredits({ ...credits, subject4: e.target.checked })}
                      className="h-4 w-4 rounded text-primary focus:ring-primary border-slate-300"
                    />
                    <span>Relevant Science/Art Subject 4</span>
                  </label>

                  <label className="flex items-center gap-2.5 text-xs text-slate-700 dark:text-slate-300 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={credits.subject5}
                      onChange={(e) => setCredits({ ...credits, subject5: e.target.checked })}
                      className="h-4 w-4 rounded text-primary focus:ring-primary border-slate-300"
                    />
                    <span>Relevant Science/Art Subject 5</span>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-primary hover:bg-primary-dark text-white font-bold text-xs tracking-wider uppercase transition-colors shadow-md dark:bg-secondary dark:text-primary dark:hover:bg-secondary-dark cursor-pointer"
              >
                <span>Check Eligibility & Register Interest</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>

            {/* Live Result Feedback Block */}
            {calculatorResult.status && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-6 p-4 rounded-xl border flex gap-3 ${
                  calculatorResult.status === 'success'
                    ? 'bg-emerald-50 dark:bg-emerald-950/20 text-emerald-800 dark:text-emerald-200 border-emerald-100 dark:border-emerald-900/40'
                    : calculatorResult.status === 'warning'
                    ? 'bg-amber-50 dark:bg-amber-950/20 text-amber-800 dark:text-amber-200 border-amber-100 dark:border-amber-900/40'
                    : 'bg-rose-50 dark:bg-rose-950/20 text-rose-800 dark:text-rose-200 border-rose-100 dark:border-rose-900/40'
                }`}
              >
                <div className="shrink-0 mt-0.5">
                  {calculatorResult.status === 'success' ? (
                    <ThumbsUp className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                  ) : calculatorResult.status === 'warning' ? (
                    <AlertCircle className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                  ) : (
                    <AlertCircle className="h-5 w-5 text-rose-600 dark:text-rose-400" />
                  )}
                </div>
                <div className="text-xs leading-relaxed">
                  <span className="font-bold block uppercase mb-1">
                    {calculatorResult.status === 'success' ? 'Eligible' : calculatorResult.status === 'warning' ? 'Provisional Review Needed' : 'Action Required'}
                  </span>
                  <p>{calculatorResult.message}</p>
                </div>
              </motion.div>
            )}

            {/* List of Prospect log persisted locally */}
            {savedApplications.length > 0 && (
              <div className="mt-8 pt-6 border-t border-slate-200 dark:border-dark-border">
                <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Recent Registered Inquiries (This device)
                </span>
                <div className="space-y-2 max-h-36 overflow-y-auto pr-1">
                  {savedApplications.map((app) => (
                    <div
                      key={app.id}
                      className="text-[11px] p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-850 flex items-center justify-between shadow-xs"
                    >
                      <div>
                        <p className="font-bold text-slate-800 dark:text-slate-200">{app.name}</p>
                        <p className="text-slate-400">{app.college.replace('-', ' ')} (JAMB: {app.jambScore})</p>
                      </div>
                      <span className="text-[10px] text-slate-400 font-mono">{app.date}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
