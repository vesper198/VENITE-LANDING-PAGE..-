/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Sun, Moon, Sparkles } from 'lucide-react';

interface ThemeCapsuleProps {
  isDark: boolean;
  onToggle: () => void;
}

export default function ThemeCapsule({ isDark, onToggle }: ThemeCapsuleProps) {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Little floating text indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="mb-2 mr-1 hidden sm:flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold tracking-wider text-primary uppercase shadow-md border border-slate-100 backdrop-blur-md dark:bg-slate-900/95 dark:text-secondary dark:border-slate-800"
      >
        <Sparkles className="h-3 w-3 text-secondary animate-pulse" />
        <span>Theme Control</span>
      </motion.div>

      {/* Main Capsule */}
      <motion.button
        id="theme-capsule-btn"
        onClick={onToggle}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex h-12 w-28 items-center justify-between rounded-full bg-white p-1.5 shadow-[0_10px_30px_rgba(11,61,145,0.15)] border border-slate-100 backdrop-blur-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:bg-slate-900/90 dark:border-slate-800 dark:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
        title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      >
        {/* Sliding Indicator background */}
        <motion.div
          className="absolute top-1 bottom-1 rounded-full bg-gradient-to-r from-primary to-primary-dark shadow-md dark:from-secondary dark:to-secondary-dark"
          initial={false}
          animate={{
            left: isDark ? 'calc(50% + 2px)' : '6px',
            right: isDark ? '6px' : 'calc(50% + 2px)',
          }}
          transition={{ type: 'spring', stiffness: 350, damping: 25 }}
        />

        {/* Light Option Icon */}
        <div className={`relative z-10 flex w-1/2 justify-center items-center transition-colors duration-300 ${!isDark ? 'text-white' : 'text-slate-400 dark:text-slate-500'}`}>
          <Sun className="h-4.5 w-4.5" />
        </div>

        {/* Dark Option Icon */}
        <div className={`relative z-10 flex w-1/2 justify-center items-center transition-colors duration-300 ${isDark ? 'text-slate-950' : 'text-slate-400 dark:text-slate-500'}`}>
          <Moon className="h-4.5 w-4.5" />
        </div>
      </motion.button>
    </div>
  );
}
