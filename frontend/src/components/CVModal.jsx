import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download } from 'lucide-react';

const CVModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
        >
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-xl"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-5xl h-[85vh] bg-zinc-900 rounded-2xl overflow-hidden border border-white/10 shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/5 bg-zinc-950/50">
              <span className="mono text-zinc-400 hidden sm:block">Curriculum Vitae</span>
              <div className="flex items-center gap-4 ml-auto sm:ml-0">
                <a 
                  href="/resume.pdf" 
                  download="Yash_Aryan_Resume.pdf"
                  className="flex items-center gap-2 px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-[10px] mono text-white transition-all hover:border-brand/50 group shrink-0"
                >
                  <Download size={12} className="group-hover:text-brand transition-colors" /> Download
                </a>
                <div className="w-[1px] h-4 bg-white/10 mx-1 hidden sm:block" />
                <button 
                  onClick={onClose}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors text-zinc-400 hover:text-white shrink-0"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Content Buffer */}
            <div className="flex-1 w-full bg-zinc-900 overflow-hidden relative">
              <iframe 
                src="/resume.pdf#toolbar=0" 
                title="CV Viewer"
                className="w-full h-full border-none"
              />
            </div>

            {/* Footer / Mobile Hint */}
            <div className="p-4 bg-zinc-950/50 flex justify-center lg:hidden">
              <p className="text-[10px] mono text-zinc-600">Pinch to zoom</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CVModal;
