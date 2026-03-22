import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cpu, Globe, Database, Server, Smartphone, Layout } from 'lucide-react';

const skillGroups = [
  {
    title: 'Frontend',
    icon: <Layout className="w-6 h-6 text-brand" />,
    skills: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Three.js']
  },
  {
    title: 'Backend',
    icon: <Server className="w-6 h-6 text-brand" />,
    skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Redis']
  },
  {
    title: 'Languages',
    icon: <Code className="w-6 h-6 text-brand" />,
    skills: ['JavaScript', 'TypeScript', 'C++', 'Python', 'Go']
  },
  {
    title: 'Systems & Cloud',
    icon: <Cpu className="w-6 h-6 text-brand" />,
    skills: ['Docker', 'AWS', 'Linux', 'Computer Networks', 'OS']
  }
];

const Skills = ({ id }) => {
  return (
    <div id={id} className="section-container relative overflow-hidden pt-8 md:pt-12">
      <div className="section-content">
        <div className="mb-12">
          <span className="subsite-header">Expertise</span>
          <h2 className="giant-header">SKILLS</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl">
          {skillGroups.map((group, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="flex flex-col gap-6"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:border-brand transition-colors">
                  {group.icon}
                </div>
                <h3 className="text-xl font-cabinet font-black text-white">{group.title}</h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {group.skills.map((skill, i) => (
                  <motion.li 
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-zinc-900 border border-white/5 rounded-full mono text-[10px] text-zinc-400 hover:text-brand hover:border-brand transition-all interactive"
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
