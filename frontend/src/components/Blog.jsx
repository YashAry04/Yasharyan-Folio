import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ExternalLink, ArrowUpRight } from 'lucide-react';

const blogData = [
  {
    title: 'Modern Web Development: A Journey from HTML to React',
    platform: 'Medium',
    date: 'Dec 2024',
    url: 'https://medium.com/@yasharyan',
    description: 'A comprehensive guide for beginners on how to start their career in modern web development.'
  },
  {
    title: 'Mastering Pointers in C: A Deep Dive',
    platform: 'Hashnode',
    date: 'Oct 2024',
    url: 'https://hashnode.com/@yasharyan',
    description: 'Explaining the intricacies of memory management and pointer arithmetic in C.'
  }
];

const Blog = ({ id }) => {
  return (
    <div id={id} className="section-container relative pt-8 md:pt-12 pb-48">
      <div className="section-content">
        <div className="mb-12">
          <span className="subsite-header">Insights</span>
          <h2 className="giant-header">WRITING</h2>
        </div>

        <div className="flex flex-col gap-4 max-w-5xl">
          {blogData.map((post, idx) => (
            <motion.a 
              key={idx}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative flex flex-col md:flex-row items-start md:items-center justify-between p-6 bg-white/5 border border-white/10 hover:border-brand/40 transition-all rounded-2xl interactive overflow-hidden"
            >
              <div className="absolute right-[-2px] top-[-2px] w-10 h-10 bg-zinc-800 border-b border-l border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                <ArrowUpRight className="w-4 h-4 text-brand" />
              </div>
              
              <div className="max-w-2xl">
                <div className="flex items-center gap-3 mb-3">
                  <span className="p-1.5 bg-brand/10 text-brand rounded-lg">
                    <BookOpen className="w-4 h-4" />
                  </span>
                  <span className="mono text-[8px] text-zinc-500 tracking-widest uppercase">{post.platform} • {post.date}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-cabinet font-black text-white group-hover:text-brand transition-colors mb-2 leading-tight">
                  {post.title}
                </h3>
                <p className="text-zinc-500 text-xs italic line-clamp-2">
                  {post.description}
                </p>
              </div>
              
              <div className="mt-4 md:mt-0 flex items-center gap-2 mono text-[10px] text-zinc-400 group-hover:text-white transition-colors">
                Read Article <ExternalLink className="w-2.5 h-2.5" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
      
      <div className="absolute bottom-24 right-0 opacity-[0.015] pointer-events-none hidden lg:block">
        <h2 className="text-[15vw] font-cabinet font-black leading-none uppercase">VOICE</h2>
      </div>
    </div>
  );
};

export default Blog;
