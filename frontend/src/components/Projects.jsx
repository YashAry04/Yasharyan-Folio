import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: 'Inventory Management',
    category: 'Full Stack / AWS',
    description: 'Scalable inventory tracking system built with the MERN stack and deployed on AWS.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'CyberStrike 2D',
    category: 'Game Development',
    description: 'High-performance multiplayer arcade game built with PhaserJS.',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'E-Vault',
    category: 'Security',
    description: 'Encrypted document storage with biometric authentication concepts.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800'
  }
];

const Projects = ({ id }) => {
  return (
    <div id={id} className="section-container relative overflow-hidden pt-8 md:pt-12">
      <div className="section-content">
        <div className="mb-16">
          <span className="subsite-header">Portfolio</span>
          <h2 className="giant-header">PROJECTS</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="group relative aspect-video rounded-[1.5rem] border border-white/10 overflow-hidden bg-zinc-900 interactive"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent p-8 flex flex-col justify-end">
                <span className="mono text-brand text-[8px] mb-2">{project.category}</span>
                <h3 className="text-2xl font-cabinet font-black text-white mb-2">{project.title}</h3>
                <p className="text-zinc-500 text-xs font-satoshi line-clamp-2">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 flex justify-end">
          <Link 
            to="/archive" 
            className="mono text-zinc-500 hover:text-brand transition-colors flex items-center gap-4 group interactive"
          >
            View All Archive
            <div className="w-8 h-[1px] bg-zinc-800 group-hover:bg-brand group-hover:w-16 transition-all duration-500" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
