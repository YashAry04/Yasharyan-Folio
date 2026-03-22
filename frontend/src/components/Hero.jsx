import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';
import CVModal from './CVModal';

const Hero = () => {
  const [isCVOpen, setIsCVOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      setIsCVOpen(window.location.hash === '#cv');
    };
    window.addEventListener('hashchange', handleHashChange);
    // Initial check
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const openCV = () => {
    window.location.hash = 'cv';
  };

  const closeCV = () => {
    if (window.location.hash === '#cv') {
      window.history.back();
    } else {
      setIsCVOpen(false);
    }
  };

  return (
    <div className="section-container relative overflow-hidden">
      {/* Background Blobs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/4 w-[60vw] h-[60vw] bg-brand rounded-full blur-[120px] mix-blend-soft-light pointer-events-none"
      />

      <div className="section-content">
        <div className="flex flex-col md:flex-row md:items-center justify-between pt-12 md:pt-16 gap-12">
          <div className="flex-1">
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
              className="giant-header mb-12"
            >
              <div className="block">YASH</div>
              <div className="block text-outline italic">ARYAN</div>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
              className="max-w-[28rem]"
            >
              <p className="text-xl md:text-2xl text-zinc-400 font-satoshi leading-relaxed">
                Engineering scalable cloud-based systems and immersive game experiences with a focus on performance and cinematic UI. Cloud & Game Dev Specialist.
              </p>
              
              <div className="mt-12 flex items-center gap-8">
                <div className="w-12 h-[1px] bg-brand" />
                <span className="mono text-zinc-500">Scroll to Explore</span>
              </div>
            </motion.div>
          </div>

          {/* Profile Photo with Frame */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
            className="relative flex-shrink-0 group interactive"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Animated Frame Borders */}
              <div className="absolute -inset-4 border border-white/5 rounded-full transition-all duration-700 group-hover:inset-0 group-hover:border-brand/30" />
              <div className="absolute -inset-8 border border-white/5 rounded-full transition-all duration-1000 group-hover:inset-0 group-hover:border-brand/10 group-hover:delay-100" />
              
              {/* Image Container */}
              <div className="w-full h-full rounded-full overflow-hidden bg-zinc-900 border border-white/10 relative z-10">
                <img 
                  src="/profile.jpg" 
                  alt="Yash Aryan" 
                  className="w-full h-full object-cover transition-all duration-1000 grayscale group-hover:grayscale-0 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>

              {/* Animated Glow */}
              <div className="absolute inset-0 bg-brand/20 blur-[80px] rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-1000 -z-10" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Full Right Button - Fixed Bottom Right of the Hero section */}
      <div className="absolute bottom-12 right-12 z-20">
        <motion.button 
          onClick={openCV}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 0 25px rgba(var(--brand-rgb), 0.4)",
            borderColor: "rgba(var(--brand-rgb), 0.5)"
          }}
          whileTap={{ scale: 0.95 }}
          className="group flex items-center gap-3 bg-zinc-900/50 backdrop-blur-md border border-white/10 px-6 py-3 rounded-xl mono text-[10px] text-white transition-all duration-300"
        >
          <FileText size={14} className="group-hover:text-brand transition-colors" />
          <span className="group-hover:translate-x-0.5 transition-transform uppercase">View CV</span>
        </motion.button>
      </div>

      {/* Floating Watermark */}
      <div className="absolute right-[-5vw] top-1/2 -translate-y-1/2 rotate-90 hidden lg:block pointer-events-none opacity-5">
        <h2 className="text-[15vw] font-cabinet font-black leading-none">PORTFOLIO</h2>
      </div>

      {/* CV Modal */}
      <CVModal isOpen={isCVOpen} onClose={closeCV} />
    </div>
  );
};

export default Hero;
