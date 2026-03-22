import React from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header = ({ onMenuToggle, isMenuOpen }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-[60] py-6 px-8 md:px-12 flex justify-between items-center bg-transparent backdrop-blur-sm">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="font-cabinet font-black text-2xl md:text-3xl tracking-tighter cursor-pointer interactive uppercase"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        V.Folio<span className="text-brand">.</span>
      </motion.div>
    </header>
  );
};

export default Header;
