import React from 'react';
import { motion } from 'framer-motion';

const SectionProgress = ({ current, total }) => {
  return (
    <div className="fixed bottom-8 left-8 md:bottom-12 md:left-12 z-[60] flex items-center gap-6 pointer-events-none opacity-40 hover:opacity-100 transition-opacity">
      <div className="flex flex-col">
        <span className="mono text-brand text-sm leading-none tracking-normal">
          0{current + 1}
        </span>
      </div>
      
      <div className="w-12 h-[1px] bg-zinc-800" />
      
      <div className="flex flex-col">
        <span className="mono text-zinc-600 text-sm leading-none tracking-normal">
          0{total}
        </span>
      </div>
    </div>
  );
};

export default SectionProgress;
