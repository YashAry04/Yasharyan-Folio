import React, { useEffect, useState, useMemo } from 'react';
import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion';

const InteractiveAvatar = () => {
  // Motion values for mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring physics for fluid movement
  const springConfig = { damping: 30, stiffness: 200, mass: 1 };
  const quickConfig = { damping: 20, stiffness: 300, mass: 0.5 };
  const dragConfig = { damping: 40, stiffness: 150, mass: 1.5 };

  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Fast springs for eyes
  const eyeSpringX = useSpring(mouseX, quickConfig);
  const eyeSpringY = useSpring(mouseY, quickConfig);

  // Slow springs for hair/clothes drag
  const dragX = useSpring(mouseX, dragConfig);
  const dragY = useSpring(mouseY, dragConfig);

  // Transform mouse movement into subtle face/eye offsets (max 20px)
  const faceX = useTransform(smoothX, [-500, 500], [-18, 18]);
  const faceY = useTransform(smoothY, [-500, 500], [-12, 12]);
  
  const eyeX = useTransform(eyeSpringX, [-500, 500], [-8, 8]);
  const eyeY = useTransform(eyeSpringY, [-500, 500], [-5, 5]);

  const hairX = useTransform(dragX, [-500, 500], [-10, 10]);
  const hairY = useTransform(dragY, [-500, 500], [-6, 6]);

  const rotateX = useTransform(smoothY, [-500, 500], [8, -8]);
  const rotateY = useTransform(smoothX, [-500, 500], [-12, 12]);

  // Organic Animation States
  const [isBlinking, setIsBlinking] = useState(false);

  // Blinking logic
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 150);
    }, Math.random() * 3000 + 2000); // Blink every 2-5 seconds

    return () => clearInterval(blinkInterval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX - window.innerWidth / 2;
      const y = e.clientY - window.innerHeight / 2;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
      <motion.div
        style={{
          rotateX,
          rotateY,
          perspective: 1000,
        }}
        className="relative w-64 h-64 md:w-80 md:h-80"
        animate={{
          y: [0, -5, 0], // Subtle breathing
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {/* Glow behind head */}
        <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-[80px] scale-125 pointer-events-none"></div>
        
        <svg viewBox="0 0 200 240" className="w-full h-full drop-shadow-2xl overflow-visible">
          <defs>
            <linearGradient id="skinGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFF2E6" />
              <stop offset="100%" stopColor="#FFE0CC" />
            </linearGradient>
            <linearGradient id="eyeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#1e3a8a" />
            </linearGradient>
            <filter id="shadow">
               <feDropShadow dx="0" dy="2" stdDeviation="1" floodOpacity="0.2"/>
            </filter>
          </defs>

          {/* BACK HAIR (Move opposite to head for depth) */}
          <motion.g style={{ x: useTransform(dragX, [-500, 500], [5, -5]), y: useTransform(dragY, [-500, 500], [3, -3]) }}>
             <path d="M40 100 Q40 180 100 200 Q160 180 160 100 L160 60 Q100 20 40 60 Z" fill="#1e1b4b" />
          </motion.g>

          {/* NECK */}
          <path d="M85 160 Q100 180 115 160 L115 190 Q100 200 85 190 Z" fill="#FFE0CC" stroke="#E2B191" strokeWidth="1" />

          {/* BLACK FORMALS (Blazer & Shirt) */}
          <g>
            {/* White Shirt Collar */}
            <path d="M75 188 L100 215 L125 188" fill="white" />
            {/* Black Blazer */}
            <path d="M30 200 Q100 230 170 200 L190 250 Q100 270 10 250 Z" fill="#0f172a" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            <path d="M80 195 L100 220 L120 195" fill="none" stroke="#1e293b" strokeWidth="2" />
          </g>

          {/* FACE BASE */}
          <motion.g style={{ x: faceX, y: faceY }}>
            {/* The actual face shape */}
            <path d="M55 70 Q55 160 100 175 Q145 160 145 70 Q145 35 100 35 Q55 35 55 70" fill="url(#skinGrad)" stroke="#E2B191" strokeWidth="1" />
            
            {/* Blushing */}
            <circle cx="75" cy="130" r="12" fill="#FFB3BA" fillOpacity="0.2" filter="url(#shadow)" />
            <circle cx="125" cy="130" r="12" fill="#FFB3BA" fillOpacity="0.2" filter="url(#shadow)" />

            {/* EYES */}
            <motion.g style={{ x: eyeX, y: eyeY }}>
              {/* Left Eye */}
              <g transform="translate(75, 105)">
                <ellipse cx="0" cy="0" rx="16" ry="18" fill="white" stroke="#2D3748" strokeWidth="0.5" />
                {!isBlinking ? (
                  <>
                    <mask id="eyeMaskL">
                        <ellipse cx="0" cy="0" rx="16" ry="18" fill="white" />
                    </mask>
                    <g mask="url(#eyeMaskL)">
                        <circle cx="0" cy="0" r="12" fill="url(#eyeGrad)" />
                        <circle cx="0" cy="0" r="5" fill="#000" />
                        <circle cx="-4" cy="-5" r="4" fill="white" fillOpacity="0.8" />
                        <circle cx="3" cy="4" r="2" fill="white" fillOpacity="0.4" />
                    </g>
                  </>
                ) : (
                  <path d="M-16 0 Q0 5 16 0" fill="none" stroke="#2D3748" strokeWidth="4" strokeLinecap="round" />
                )}
                {/* Upper Eyelash */}
                <path d="M-18 -10 Q0 -25 18 -10" fill="none" stroke="#2D3748" strokeWidth="3" strokeLinecap="round" />
              </g>

              {/* Right Eye */}
              <g transform="translate(125, 105)">
                <ellipse cx="0" cy="0" rx="16" ry="18" fill="white" stroke="#2D3748" strokeWidth="0.5" />
                {!isBlinking ? (
                  <>
                    <mask id="eyeMaskR">
                        <ellipse cx="0" cy="0" rx="16" ry="18" fill="white" />
                    </mask>
                    <g mask="url(#eyeMaskR)">
                        <circle cx="0" cy="0" r="12" fill="url(#eyeGrad)" />
                        <circle cx="0" cy="0" r="5" fill="#000" />
                        <circle cx="-4" cy="-5" r="4" fill="white" fillOpacity="0.8" />
                        <circle cx="3" cy="4" r="2" fill="white" fillOpacity="0.4" />
                    </g>
                  </>
                ) : (
                  <path d="M-16 0 Q0 5 16 0" fill="none" stroke="#2D3748" strokeWidth="4" strokeLinecap="round" />
                )}
                {/* Upper Eyelash */}
                <path d="M-18 -10 Q0 -25 18 -10" fill="none" stroke="#2D3748" strokeWidth="3" strokeLinecap="round" />
              </g>
            </motion.g>

            {/* SPECTACLES / SPECS */}
            <g transform="translate(100, 105)">
              {/* Lenses with glass effect */}
              <rect x="-42" y="-18" width="36" height="32" rx="8" fill="rgba(255,255,255,0.05)" stroke="#1a1a1a" strokeWidth="2.5" />
              <rect x="6" y="-18" width="36" height="32" rx="8" fill="rgba(255,255,255,0.05)" stroke="#1a1a1a" strokeWidth="2.5" />
              {/* Bridge */}
              <path d="M-6 -2 Q0 -5 6 -2" fill="none" stroke="#1a1a1a" strokeWidth="2.5" />
              {/* Arms (partial) */}
              <path d="M-55 -5 L-42 -5" fill="none" stroke="#1a1a1a" strokeWidth="2.5" />
              <path d="M42 -5 L55 -5" fill="none" stroke="#1a1a1a" strokeWidth="2.5" />
              {/* Glass Glint */}
              <path d="M-35 -12 L-20 -12" stroke="white" strokeOpacity="0.2" strokeWidth="2" strokeLinecap="round" />
              <path d="M13 -12 L28 -12" stroke="white" strokeOpacity="0.2" strokeWidth="2" strokeLinecap="round" />
            </g>

            {/* EYEBROWS */}
            <motion.g style={{ y: useTransform(smoothY, [-500, 500], [-3, 3]) }}>
              <path d="M60 80 Q75 70 90 85" fill="none" stroke="#2D3748" strokeWidth="3" strokeLinecap="round" />
              <path d="M110 85 Q125 70 140 80" fill="none" stroke="#2D3748" strokeWidth="3" strokeLinecap="round" />
            </motion.g>

            {/* NOSE */}
            <path d="M100 135 L98 142 Q100 145 102 142 Z" fill="#E2B191" />

            {/* MOUTH */}
            <motion.path
                d="M85 160 Q100 168 115 160"
                fill="none"
                stroke="#A8735C"
                strokeWidth="2"
                strokeLinecap="round"
                animate={{ d: "M85 160 Q100 168 115 160" }}
                whileHover={{ d: "M80 155 Q100 175 120 155" }}
            />
          </motion.g>

          {/* FRONT HAIR (Moves fastest, provides top volume) */}
          <motion.g style={{ x: hairX, y: hairY }}>
            {/* Scalp/Top volume */}
            <path d="M45 75 Q40 20 100 15 Q160 20 155 75" fill="#2D3748" />
            {/* Bangs - Left */}
            <path d="M50 70 L40 110 L65 105 Z" fill="#2D3748" />
            <path d="M60 60 L65 120 L85 100 Z" fill="#2D3748" />
            {/* Bangs - Center */}
            <path d="M85 40 L100 100 L115 40" fill="#2D3748" />
            {/* Bangs - Right */}
            <path d="M115 100 L135 120 L140 60 Z" fill="#2D3748" />
            <path d="M135 105 L160 110 L150 70 Z" fill="#2D3748" />
          </motion.g>
        </svg>
      </motion.div>
    </div>
  );
};

export default InteractiveAvatar;
