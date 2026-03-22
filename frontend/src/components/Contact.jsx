import React from 'react';
import { motion } from 'framer-motion';
import { Send, Github, Linkedin, Mail } from 'lucide-react';

const socialLinks = [
  { name: 'Github', icon: <Github size={20} />, url: 'https://github.com/YashAry04', color: '#333' },
  { name: 'LinkedIn', icon: <Linkedin size={20} />, url: 'https://www.linkedin.com/in/yash-aryan-5a13aa292', color: '#0077b5' },
  { name: 'Email', icon: <Mail size={20} />, url: 'mailto:nero050504@gmail.com', color: '#ea4335' }
];

const Contact = ({ id }) => {
  return (
    <div id={id} className="section-container relative overflow-hidden pt-8 md:pt-12">
      <div className="section-content">
        <div className="mb-8">
          <span className="subsite-header">Get in Touch</span>
          <h2 className="giant-header">CONTACT</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl md:text-5xl font-cabinet font-black text-white mb-8 leading-tight">
              LET'S BUILD SOMETHING <span className="text-brand italic">EXTRAORDINARY</span> TOGETHER.
            </h3>
            <p className="text-zinc-500 text-lg mb-12 max-w-md leading-relaxed">
              I'm always open to new opportunities, collaborations, or just a friendly chat about technology and design.
            </p>

            <div className="flex gap-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -5, color: social.color }}
                  className="p-4 bg-white/5 border border-white/10 rounded-2xl text-zinc-400 transition-all interactive"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="p-8 md:p-12 bg-white/5 border border-white/10 rounded-[2.5rem] backdrop-blur-xl relative group"
          >
            <form className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <label className="mono text-[8px] text-zinc-500 ml-2">Your Name</label>
                <input 
                  type="text" 
                  placeholder="JOHN DOE"
                  className="bg-transparent border-b border-white/10 py-4 px-2 mono text-xs text-white focus:border-brand transition-colors outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="mono text-[8px] text-zinc-500 ml-2">Your Email</label>
                <input 
                  type="email" 
                  placeholder="HELLO@EXAMPLE.COM"
                  className="bg-transparent border-b border-white/10 py-4 px-2 mono text-xs text-white focus:border-brand transition-colors outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="mono text-[8px] text-zinc-500 ml-2">Your Message</label>
                <textarea 
                  placeholder="I HAVE AN EXCITING PROJECT FOR YOU..."
                  rows="4"
                  className="bg-transparent border-b border-white/10 py-4 px-2 mono text-xs text-white focus:border-brand transition-colors outline-none resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-4 flex items-center justify-center gap-3 bg-brand text-white py-6 rounded-2xl mono text-xs font-bold uppercase tracking-widest transition-all hover:shadow-[0_0_30px_rgba(var(--brand-rgb),0.3)]"
              >
                Send Message <Send className="w-4 h-4" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
