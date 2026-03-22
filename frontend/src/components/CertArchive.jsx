import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Award, ExternalLink, Download } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { certificationEvents } from './Education';

const CertArchive = () => {
  const navigate = useNavigate();
  React.useEffect(() => {
    // Enable scrolling for this page
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'auto';
    document.documentElement.style.overflow = 'auto';
    
    return () => {
      // Re-enable fixed scrolling for the main site
      document.body.style.overflow = originalStyle;
      document.documentElement.style.overflow = originalStyle;
    };
  }, []);

  return (
    <div className="min-h-screen bg-bg text-white selection:bg-brand/30 selection:text-white p-8 md:p-24 overflow-x-hidden">
      {/* Background Grain */}
      <div className="grain-overlay opacity-5 pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      >
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center gap-2 mono text-zinc-500 hover:text-brand transition-colors mb-16 inline-flex"
        >
          <ArrowLeft size={16} /> BACK
        </button>
        
        <div className="mb-24">
          <span className="mono text-brand mb-4 block">Recognition</span>
          <h1 className="text-[7vw] leading-none italic font-cabinet font-black uppercase tracking-tighter whitespace-nowrap">CERTIFICATE ARCHIVE</h1>
        </div>

        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {certificationEvents.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="group relative flex flex-col interactive"
              >
                {/* Image Card */}
                <div className="relative aspect-[3/2] rounded-[1.5rem] overflow-hidden border border-white/10 bg-zinc-900 mb-6">
                  <img 
                    src={cert.image} 
                    alt={cert.title} 
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                  
                  {/* Floating Badge */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-brand transition-colors">
                    <Award size={18} />
                  </div>
                </div>

                {/* Content */}
                <div className="px-2">
                  <div className="flex items-center justify-between mb-3 text-[10px]">
                    <span className="mono text-brand">{cert.date}</span>
                    <span className="mono text-zinc-600">CERT #{String(idx + 1).padStart(2, '0')}</span>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-cabinet font-black text-white mb-2 leading-tight break-words">
                    {cert.title}
                  </h3>
                  <h4 className="text-lg text-zinc-500 italic mb-4 break-words">
                    {cert.institution}
                  </h4>
                  <p className="text-sm text-zinc-400 font-satoshi leading-relaxed mb-6 line-clamp-2">
                    {cert.details}
                  </p>

                  <div className="flex items-center gap-4">
                    <a 
                      href={cert.image}
                      download={`${cert.title.replace(/\s+/g, '-').toLowerCase()}-certificate`}
                      className="flex items-center gap-2 mono text-[10px] text-zinc-500 hover:text-white transition-colors group/btn"
                    >
                      <Download size={12} className="group-hover/btn:-translate-y-1 transition-transform" />
                      DOWNLOAD
                    </a>
                    {cert.verifyUrl ? (
                      <a 
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 mono text-[10px] text-brand hover:text-white transition-colors"
                      >
                        VERIFY <ExternalLink size={10} />
                      </a>
                    ) : (
                      <button className="flex items-center gap-2 mono text-[10px] text-brand hover:text-white transition-colors">
                        VERIFY <ExternalLink size={10} />
                      </button>
                    )}
                  </div>
                </div>

                {/* Hover Glow Background */}
                <div className="absolute -inset-8 bg-brand/5 rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity blur-2xl -z-10 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>

        <footer className="mt-48 pb-16 text-center opacity-20">
          <p className="mono">© 2026 YASH ARYAN. CONTINUALLY EVOLVING.</p>
        </footer>
      </motion.div>
    </div>
  );
};

export default CertArchive;
