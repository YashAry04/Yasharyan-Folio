import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const archiveProjects = [
  { name: 'YashAry04/Yasharyan-Folio', tech: 'React / Tailwind' },
  { name: 'YashAry04/2D-Game', tech: 'JavaScript / GameDev' },
  { name: 'YashAry04/Inventory-Management', tech: 'MERN / AWS' },
  { name: 'YashAry04/Storage-Management', tech: 'Next.js 15 / Appwrite' },
];

const Archive = () => {
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
          <span className="mono text-brand mb-4 block">Repositories</span>
          <h1 className="text-[8vw] leading-none italic font-cabinet font-black uppercase tracking-tighter whitespace-nowrap">PROJECT ARCHIVE</h1>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 border-t border-white/10">
            {archiveProjects.map((project, idx) => (
              <motion.a
                key={idx}
                href={`https://github.com/${project.name}`}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-white/10 hover:bg-brand/5 px-4 transition-colors relative interactive"
              >
                <div className="flex flex-col gap-1">
                  <span className="mono text-zinc-600 group-hover:text-brand transition-colors">#{String(idx + 1).padStart(2, '0')}</span>
                  <h3 className="text-2xl md:text-3xl font-cabinet font-black text-white group-hover:translate-x-2 transition-transform duration-500">
                    {project.name.split('/')[1]}
                  </h3>
                </div>
                
                <div className="flex items-center gap-12 mt-4 md:mt-0">
                  <span className="mono text-zinc-500">{project.tech}</span>
                  <div className="flex items-center gap-4 text-zinc-500 group-hover:text-brand transition-colors">
                    <Github size={20} />
                    <ExternalLink size={20} className="md:opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>

                {/* Hover Glow */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
              </motion.a>
            ))}
          </div>
        </div>

        <footer className="mt-32 pb-16 text-center opacity-20">
          <p className="mono">© 2026 YASH ARYAN. SOURCES ON GITHUB.</p>
        </footer>
      </motion.div>
    </div>
  );
};

export default Archive;
