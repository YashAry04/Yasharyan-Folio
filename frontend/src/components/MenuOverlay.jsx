import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useSpring, useMotionValue } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Facebook, ArrowUpRight } from 'lucide-react';

const menuLinks = [
  { title: 'Home', id: 'home', preview: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=400&h=600' },
  { title: 'About', id: 'about', preview: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=400&h=600' },
  { title: 'Skills', id: 'skills', preview: 'https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?auto=format&fit=crop&q=80&w=400&h=600' },
  { title: 'Projects', id: 'projects', preview: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&q=80&w=400&h=600' },
  { title: 'Education', id: 'education', preview: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=400&h=600' },
  { title: 'Experience', id: 'experience', preview: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=400&h=600' },
  { title: 'Achievements', id: 'achievements', preview: 'https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80&w=400&h=600' },
  { title: 'Writing', id: 'blog', preview: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=400&h=600' },
  { title: 'Contact', id: 'contact', preview: 'https://images.unsplash.com/photo-1528747045269-390fe33c19f2?auto=format&fit=crop&q=80&w=400&h=600' },
];

const socialLinks = [
  { name: 'Github', icon: <Github size={16} />, url: 'https://github.com/YashAry04' },
  { name: 'LinkedIn', icon: <Linkedin size={16} />, url: 'https://www.linkedin.com/in/yash-aryan-5a13aa292' },
  { name: 'Email', icon: <Mail size={16} />, url: 'mailto:nero050504@gmail.com' },
];

const MenuOverlay = ({ isOpen, onClose, onSelect }) => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [time, setTime] = useState(new Date());

  // Magnetic Mouse Follow for Previews
  const springConfig = { damping: 20, stiffness: 100, mass: 0.5 };
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    },
    exit: { 
      opacity: 0,
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  };

  const itemVariants = {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] } },
    exit: { y: -100, opacity: 0, transition: { duration: 0.5 } }
  };

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div 
          initial={{ clipPath: 'circle(0% at 95% 5%)' }}
          animate={{ clipPath: 'circle(150% at 95% 5%)' }}
          exit={{ clipPath: 'circle(0% at 95% 5%)' }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[55] bg-[#080808] flex flex-col justify-between p-12 md:p-24 overflow-hidden"
        >
          {/* Background Grain */}
          <div className="absolute inset-0 grain-overlay opacity-[0.03] pointer-events-none" />
          
          <motion.div 
            variants={containerVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="flex flex-col gap-2 md:gap-4 mt-16 md:mt-0"
          >
            {menuLinks.map((link) => (
              <motion.div 
                key={link.id}
                variants={itemVariants}
                onMouseEnter={() => setHoveredItem(link)}
                onMouseLeave={() => setHoveredItem(null)}
                onClick={() => { onSelect(link.id); onClose(); }}
                className="group relative cursor-pointer py-2 w-fit"
              >
                <div className="relative flex items-center">
                  <span className="text-8vw md:text-[9vw] font-cabinet font-black leading-none text-transparent transition-all duration-700 text-outline-thin group-hover:text-white group-hover:pl-16">
                    {link.title}
                  </span>
                  <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    className="absolute -left-4 text-brand"
                  >
                    <ArrowUpRight size={48} className="hidden md:block" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Social & Meta Footer */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col md:flex-row justify-between items-end md:items-baseline gap-8 border-t border-white/5 pt-12"
          >
            <div className="flex flex-wrap gap-x-12 gap-y-4 items-baseline">
              {socialLinks.map((social) => (
                social.name === 'Email' ? (
                  <Link 
                    key={social.name}
                    to="/contact-form"
                    className="flex items-baseline gap-2 mono text-[10px] tracking-widest text-zinc-500 hover:text-brand transition-colors group"
                  >
                    {social.name.toUpperCase()}
                  </Link>
                ) : (
                  <a 
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-baseline gap-2 mono text-[10px] tracking-widest text-zinc-500 hover:text-brand transition-colors group"
                  >
                    {social.name.toUpperCase()}
                  </a>
                )
              ))}
            </div>

            <div className="flex flex-col items-end mono text-[10px] tracking-widest text-zinc-600 leading-none">
              <span className="text-zinc-400">PATNA, IN</span>
              <span className="opacity-50 mt-1">{time.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' })} IST</span>
            </div>
          </motion.div>

          {/* Magnetic Preview Image */}
          <AnimatePresence>
            {hoveredItem && (
              <motion.div
                key="preview"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.4, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                style={{ 
                  left: smoothX, 
                  top: smoothY,
                  x: "-50%",
                  y: "-50%"
                }}
                className="fixed hidden lg:block w-[400px] h-[550px] rounded-3xl overflow-hidden pointer-events-none z-[-1]"
              >
                <img 
                  src={hoveredItem.preview} 
                  alt={hoveredItem.title} 
                  className="w-full h-full object-cover" 
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Giant Background Label */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.02]">
            <h2 className="text-[40vw] font-cabinet font-black leading-none">Y</h2>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MenuOverlay;
