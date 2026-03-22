import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Microscope, Trophy } from 'lucide-react';

const achievementData = [
  {
    type: 'University Hackathon',
    title: 'Code-A-Haunt (University Hackathon)',
    details: 'Participated in the premier university-level hackathon, developing innovative solutions for real-world problems. Awarded for "Most Scalable Architecture".',
    icon: <Trophy className="w-8 h-8 text-brand" />,
    stats: '1st Runner Up'
  },
  {
    type: 'NPTEL Certification',
    title: 'Silver Medalist in NPTEL (IoT)',
    details: 'Achieved Elite + Silver Certification in "Introduction to Internet of Things" from IIT Kharagpur. Demonstrated expertise in IoT architecture, protocols, and ecosystem.',
    icon: <Trophy className="w-8 h-8 text-brand" />,
    stats: 'Score: 78% | Elite + Silver'
  }
];

const Achievements = ({ id }) => {
  return (
    <div id={id} className="section-container relative pt-8 md:pt-12 pb-48">
      <div className="section-content">
        <div className="mb-12">
          <span className="subsite-header">Milestones</span>
          <h2 className="giant-header">ACHIEVEMENTS</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl">
          {achievementData.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="group relative p-10 bg-white/5 border border-white/10 hover:border-brand/30 transition-all rounded-3xl interactive"
            >
              <div className="flex items-start justify-between mb-8">
                <div className="p-4 bg-brand/10 group-hover:bg-brand/20 transition-all rounded-xl">
                  {React.cloneElement(item.icon, { className: "w-8 h-8 text-brand" })}
                </div>
                <span className="mono text-xs text-zinc-500 uppercase tracking-widest">{item.type}</span>
              </div>
              
              <h3 className="text-3xl font-cabinet font-black text-white mb-4">
                {item.title}
              </h3>
              <p className="text-zinc-400 text-sm mb-8 leading-relaxed">
                {item.details}
              </p>
              <div className="flex items-center gap-3 py-3 px-4 bg-zinc-900 border border-zinc-800 mono text-xs text-brand font-bold uppercase tracking-widest rounded-lg">
                <Terminal className="w-4 h-4" />
                {item.stats}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className="absolute bottom-24 right-0 opacity-[0.015] pointer-events-none hidden lg:block">
        <h2 className="text-[15vw] font-cabinet font-black leading-none uppercase">TRACK</h2>
      </div>
    </div>
  );
};

export default Achievements;
