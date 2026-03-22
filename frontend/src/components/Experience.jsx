import React from 'react';
import { motion } from 'framer-motion';

const experienceData = [
  {
    title: 'Summer Trainee (C Programming)',
    company: 'CSE Pathshala',
    period: 'Jun 2025 - Jul 2025',
    details: [
      'Mastered core C programming concepts, data structures, and algorithms.',
      'Successfully completed 35+ hours of live training and passed final tests.',
      'Applied memory management and structured programming techniques in projects.'
    ]
  },
  {
    title: 'Community Development Project',
    company: 'Shree Krish Charity & Trust',
    period: '2024 - Present',
    details: [
      'Dedicated volunteer focused on teaching and mentoring students in slums and orphanages.',
      'Designed and delivered basic educational modules to empower underprivileged children.',
      'Actively involved in community outreach and support programs organized by the Trust.'
    ]
  }
];

const Experience = ({ id }) => {
  return (
    <div id={id} className="section-container relative pt-8 md:pt-12 pb-48">
      <div className="section-content">
        <div className="mb-16">
          <span className="subsite-header">Professional Track</span>
          <h2 className="giant-header">EXPERIENCE</h2>
        </div>

        <div className="flex flex-col gap-8 max-w-5xl">
          {experienceData.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="group relative pl-8 border-l border-white/10 interactive"
            >
              <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-brand" />
              
              <div className="flex flex-col gap-2">
                <span className="mono text-zinc-600 group-hover:text-brand transition-colors text-xs">{exp.period}</span>
                <h3 className="text-2xl md:text-4xl font-cabinet font-black text-white leading-tight uppercase">
                  {exp.title}
                </h3>
                <h4 className="text-xl md:text-2xl text-zinc-500 italic mb-4">
                  {exp.company}
                </h4>
                <ul className="flex flex-col gap-3">
                  {exp.details.map((detail, i) => (
                    <li key={i} className="flex gap-4 text-zinc-400 font-mono text-sm leading-relaxed">
                      <span className="text-brand">→</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className="absolute bottom-24 right-0 opacity-[0.015] pointer-events-none hidden lg:block">
        <h2 className="text-[15vw] font-cabinet font-black leading-none uppercase">WORK</h2>
      </div>
    </div>
  );
};

export default Experience;
