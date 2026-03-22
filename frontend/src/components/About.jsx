import React from 'react';
import { motion } from 'framer-motion';

const About = ({ id }) => {
  return (
    <div id={id} className="section-container relative pt-8 md:pt-12 pb-48">
      <div className="section-content">
        <div className="mb-16">
          <span className="subsite-header">Identity</span>
          <h2 className="giant-header ml-[-0.05em]">ABOUT ME</h2>
        </div>

      <div className="flex flex-col md:flex-row gap-8 w-full items-start">
        <div className="flex-1">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-4xl font-cabinet font-medium text-white leading-tight mb-8"
          >
            I'm Yash Aryan, a passionate <span className="text-brand italic">Computer Science student</span> at Lovely Professional University with a drive for creating impactful digital solutions.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-6 text-zinc-400 font-mono text-sm leading-relaxed max-w-2xl"
          >
            <p>
              My journey in tech began with a curiosity for how things work under the hood. Currently, I'm deep-diving into full-stack development, with a strong focus on the MERN stack and low-level C/C++ programming.
            </p>
            <p>
              Beyond coding, I'm an avid participant in competitive programming and hackathons, where I enjoy the challenge of solving complex problems under pressure. I believe in the power of open-source and constant learning.
            </p>
            <p>
              Whether it's optimizing a backend service or crafting a pixel-perfect user interface, I strive for excellence and innovation in every project I undertake.
            </p>
          </motion.div>
        </div>

        <div className="w-full md:w-1/3 flex flex-col gap-8">
          <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
            <h3 className="mono text-brand text-xs uppercase tracking-widest mb-4">Fast Facts</h3>
            <ul className="flex flex-col gap-4 mono text-[10px] text-zinc-500 uppercase tracking-widest">
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Location</span>
                <span className="text-white">Jamnagar, Gujarat</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Education</span>
                <span className="text-white">B.Tech CSE @ LPU</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Interests</span>
                <span className="text-white">AI, Web3, Systems</span>
              </li>
              <li className="flex justify-between">
                <span>Status</span>
                <span className="text-brand">Open to Internships</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      </div>
      
      <div className="absolute bottom-24 right-0 opacity-[0.015] pointer-events-none hidden lg:block">
        <h2 className="text-[15vw] font-cabinet font-black leading-none uppercase">STORY</h2>
      </div>
    </div>
  );
};

export default About;
