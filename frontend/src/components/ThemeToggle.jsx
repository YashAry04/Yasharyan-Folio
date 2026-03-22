import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full glass hover:bg-slate-200/50 dark:hover:bg-white/10 transition-colors duration-300 relative overflow-hidden group border border-slate-300 dark:border-white/10"
      aria-label="Toggle Theme"
    >
      <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-full z-0"></div>
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 0 : 180, scale: isDark ? 1 : 1.1 }}
        transition={{ duration: 0.5, type: 'spring', stiffness: 200 }}
        className="relative z-10"
      >
        {isDark ? (
          <Moon size={20} className="text-blue-400" />
        ) : (
          <Sun size={20} className="text-amber-500" />
        )}
      </motion.div>
    </button>
  );
};

export default ThemeToggle;
