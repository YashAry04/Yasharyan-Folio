import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionProgress from './SectionProgress';
import MeshBackground from './MeshBackground';
import PageLoader from './PageLoader';

const sections = ['home', 'about', 'skills', 'projects', 'education', 'certifications', 'experience', 'achievements', 'contact'];

const Shell = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(() => {
    const saved = sessionStorage.getItem('v-folio-active-index');
    return saved !== null ? parseInt(saved, 10) : 0;
  });
  const [isLoaded, setIsLoaded] = useState(() => {
    return sessionStorage.getItem('v-folio-initial-loaded') === 'true';
  });
  const [isScrolling, setIsScrolling] = useState(false);

  const handlePageLoadComplete = () => {
    setIsLoaded(true);
    sessionStorage.setItem('v-folio-initial-loaded', 'true');
  };

  useEffect(() => {
    sessionStorage.setItem('v-folio-active-index', activeIndex);
  }, [activeIndex]);

  const handleScroll = useCallback((delta) => {
    if (isScrolling) return;
    
    if (delta > 30 && activeIndex < sections.length - 1) {
      setIsScrolling(true);
      setActiveIndex(prev => prev + 1);
      setTimeout(() => setIsScrolling(false), 1200);
    } else if (delta < -30 && activeIndex > 0) {
      setIsScrolling(true);
      setActiveIndex(prev => prev - 1);
      setTimeout(() => setIsScrolling(false), 1200);
    }
  }, [activeIndex, isScrolling]);

  // Fix 100vh on mobile (browser chrome dynamically resizes viewport)
  useEffect(() => {
    const setVh = () => {
      document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
    };
    setVh();
    window.addEventListener('resize', setVh);
    return () => window.removeEventListener('resize', setVh);
  }, []);

  useEffect(() => {
    const onWheel = (e) => handleScroll(e.deltaY);
    window.addEventListener('wheel', onWheel);
    return () => window.removeEventListener('wheel', onWheel);
  }, [handleScroll]);

  useEffect(() => {
    let touchStartY = 0;
    let touchStartX = 0;

    const onTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
      touchStartX = e.touches[0].clientX;
    };

    const onTouchEnd = (e) => {
      const deltaY = touchStartY - e.changedTouches[0].clientY;
      const deltaX = Math.abs(touchStartX - e.changedTouches[0].clientX);
      // Only trigger if vertical swipe is dominant and >= 40px
      if (Math.abs(deltaY) > 40 && Math.abs(deltaY) > deltaX) {
        handleScroll(deltaY);
      }
    };

    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchend', onTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchend', onTouchEnd);
    };
  }, [handleScroll]);

  return (
    <>
      <AnimatePresence>
        {!isLoaded && <PageLoader onComplete={handlePageLoadComplete} />}
      </AnimatePresence>

      <div className="bg-bg text-white min-h-screen overflow-hidden selection:bg-brand/30">
        <MeshBackground />
        
        <main className="relative z-10 w-full" style={{ height: 'calc(var(--vh, 1vh) * 100)' }}>
          {sections.map((sectionId, index) => (
            <AnimatePresence key={sectionId}>
              {index === activeIndex && (
                <motion.div
                  initial={{ opacity: 0, scale: 1.1, y: 100 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -100 }}
                  transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                  className="absolute inset-0 w-full h-full"
                >
                  {idToComponent(sectionId, children)}
                </motion.div>
              )}
            </AnimatePresence>
          ))}
        </main>

        <SectionProgress current={activeIndex} total={sections.length} />
      </div>
    </>
  );
};

const idToComponent = (id, children) => {
  const childArray = React.Children.toArray(children);
  return childArray.find(child => child.props.id === id) || childArray[sections.indexOf(id)];
};

export default Shell;
