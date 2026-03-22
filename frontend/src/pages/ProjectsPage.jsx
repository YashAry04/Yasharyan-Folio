import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const allProjects = [
  {
    title: 'Clara Med System',
    description: 'A comprehensive medical administration system. Integrated Razorpay API for seamless payments and implemented secure JWT-based authentication for user roles.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/VirajKumar3/ClaraMed',
    live: '#',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=800&h=450'
  },
  {
    title: 'Enterprise CRM',
    description: 'Contributed to an Enterprise CRM with superadmin role capabilities, organization switching natively built, and advanced data visualization charts.',
    tech: ['React', 'Node.js', 'Tailwind', 'Chart.js'],
    github: 'https://github.com/Shrey327/CRM',
    live: '#',
    year: '2024'
  },
  {
    title: 'Help Desk System',
    description: 'A clean, responsive ticketing interface built with Vanilla JavaScript and Utility-first CSS, focusing on optimal user experience and fast loading times.',
    tech: ['Vanilla JS', 'CSS', 'HTML5', 'REST API'],
    github: 'https://github.com/VirajKumar3/Helpdesk',
    live: '#',
    year: '2023'
  },
  {
    title: 'Gesture Control & Mouse API',
    description: 'A Python-based AI application that uses computer vision to track hand movements and control the system mouse without physical contact.',
    tech: ['Python', 'OpenCV', 'MediaPipe', 'PyAutoGUI'],
    github: 'https://github.com/VirajKumar3/Gesture_control_python',
    live: '#',
    year: '2023'
  },
  {
    title: 'Job Portal Platform',
    description: 'A full-stack job portal allowing recruiters to post jobs and candidates to apply. Features user authentication and role management.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js'],
    github: 'https://github.com/VirajKumar3/Jobportal',
    live: '#',
    year: '2023'
  },
  {
    title: 'Spotify Web Clone',
    description: 'A frontend replica of the Spotify web player featuring a responsive music player UI, playlist layouts, and modern CSS grid architectures.',
    tech: ['React', 'CSS Modules', 'Framer Motion'],
    github: 'https://github.com/VirajKumar3/SpotifyClone',
    live: '#',
    year: '2023'
  },
  {
    title: 'Registration Form with RBAC',
    description: 'A secure authentication system implementing Role-Based Access Control (RBAC), preventing unauthorized access to protected routes.',
    tech: ['Node.js', 'Express', 'JWT', 'MongoDB'],
    github: 'https://github.com/LPU-9P153/RegistrationFormRBAC',
    live: '#',
    year: '2023'
  },
  {
    title: 'PadhBhiLiyaKar',
    description: 'A productivity and study-focus application designed to help students manage their study sessions and track progress.',
    tech: ['React', 'Node.js', 'Tailwind'],
    github: 'https://github.com/VirajKumar3/PadhBhiLiyaKar',
    live: '#',
    year: '2023'
  },
  {
    title: 'Boyer-Moore Voting Algorithm',
    description: 'An educational implementation of the Boyer-Moore majority vote algorithm for finding the majority element in an array with O(1) space complexity.',
    tech: ['C++', 'Data Structures', 'Algorithms'],
    github: 'https://github.com/VirajKumar3/Boyer-Moore-Voting-Algorithm',
    live: '#',
    year: '2022'
  },
  {
    title: 'Operating System Simulation',
    description: 'A collaborative project simulating core Operating System concepts like process scheduling algorithms, deadlock handling, and memory management.',
    tech: ['C', 'OS Concepts', 'Multithreading'],
    github: 'https://github.com/sureshsau/os_project',
    live: '#',
    year: '2022'
  }
];

const ProjectsPage = () => {
  return (
    <div className="relative w-full min-h-screen pt-24 pb-20 bg-bg">
      {/* Dynamic Background */}
      <MeshBackground />
      
      {/* Navbar Minimal */}
      <nav className="fixed top-8 left-8 right-8 z-50">
        <div className="max-w-7xl mx-auto">
          <Link to="/" className="flex items-center gap-2 mono text-zinc-500 hover:text-brand transition-colors group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            BACK TO HOME
          </Link>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-8 lg:px-12 relative z-10 pt-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="mono text-brand mb-4 block">Selected Works</span>
          <h1 className="text-[8vw] leading-none italic font-cabinet font-black uppercase tracking-tighter whitespace-nowrap">PROJECT ARCHIVE</h1>
          <p className="mt-8 text-zinc-500 max-w-2xl text-lg font-satoshi leading-relaxed">
            A comprehensive list of legacy builds, open-source contributions, and experimental logic developed over the years.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative aspect-video rounded-[2rem] border border-white/5 overflow-hidden bg-zinc-900/50 interactive flex flex-col justify-end p-8"
            >
              {/* Image Aspect ratio matches home projects */}
              {project.image && (
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-30" 
                />
              )}
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <span className="mono text-brand text-xs uppercase tracking-widest">
                    {project.year} — {project.tech[0]}
                  </span>
                  <div className="flex gap-4">
                    <a href={project.github} className="text-zinc-500 hover:text-brand transition-colors">
                      <Github size={18} />
                    </a>
                    {project.live !== '#' && (
                      <a href={project.live} className="text-zinc-500 hover:text-brand transition-colors">
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-2xl font-cabinet font-black text-white mb-2 group-hover:text-brand transition-colors">
                  {project.title}
                </h3>
                <p className="text-zinc-400 font-satoshi text-xs leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-2 py-0.5 bg-white/5 border border-white/10 rounded-full text-[9px] mono text-zinc-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
