import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { certificationEvents } from './Education';

const Certifications = ({ id }) => {
  const duplicatedEvents = [...certificationEvents, ...certificationEvents, ...certificationEvents];

  return (
    <div id={id} className="section-container relative overflow-hidden pt-8 md:pt-12">
      <div className="section-content">
        <div className="mb-16">
          <span className="subsite-header">Recognition</span>
          <h2 className="giant-header">CERTIFICATES</h2>
        </div>

        <div className="relative flex flex-col gap-8">
          <div className="flex overflow-hidden">
            <motion.div 
              animate={{ x: [0, -2000] }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="flex gap-8 whitespace-nowrap"
            >
              {duplicatedEvents.map((cert, idx) => (
                <div 
                  key={idx}
                  className="group relative w-[400px] border border-white/5 bg-zinc-900/50 p-8 rounded-3xl interactive"
                >
                  <span className="mono text-brand text-xs mb-4 block">{cert.date}</span>
                  <h3 className="text-2xl font-cabinet font-black text-white mb-2 leading-tight whitespace-normal break-words">
                    {cert.title}
                  </h3>
                  <p className="text-zinc-500 font-satoshi whitespace-normal break-words">{cert.institution}</p>
                  
                  {/* Decoration */}
                  <div className="absolute top-8 right-8 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                     <div className="w-1.5 h-1.5 rounded-full bg-brand" />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="mt-12 flex justify-end">
           <Link 
             to="/cert-archive" 
             className="mono text-zinc-500 hover:text-brand transition-colors flex items-center gap-4 group interactive"
           >
             View All Archive
             <div className="w-8 h-[1px] bg-zinc-800 group-hover:bg-brand group-hover:w-16 transition-all duration-500" />
           </Link>
        </div>
      </div>

      <div className="absolute bottom-12 left-12 opacity-5 pointer-events-none hidden lg:block">
        <h2 className="text-[12vw] font-cabinet font-black leading-none">AWARDS</h2>
      </div>
    </div>
  );
};

export default Certifications;
