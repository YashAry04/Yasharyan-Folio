import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    
    const onMouseMove = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out"
      });
    };

    const onMouseEnter = () => {
      gsap.to(cursor, {
        scale: 6,
        backgroundColor: '#ffffff',
        mixBlendMode: 'difference',
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const onMouseLeave = () => {
      gsap.to(cursor, {
        scale: 1,
        backgroundColor: '#FF4D00',
        mixBlendMode: 'normal',
        duration: 0.3,
        ease: "power2.out"
      });
    };

    window.addEventListener('mousemove', onMouseMove);
    
    // Delegate hover events
    const handleMouseOver = (e) => {
      if (e.target.closest('a, button, [role="button"], .interactive')) {
        onMouseEnter();
      }
    };
    
    const handleMouseOut = (e) => {
      if (e.target.closest('a, button, [role="button"], .interactive')) {
        onMouseLeave();
      }
    };

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <div 
      ref={cursorRef}
      className="fixed top-0 left-0 w-3 h-3 bg-brand rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 will-change-transform"
    />
  );
};

export default CustomCursor;
