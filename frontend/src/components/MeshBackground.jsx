import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const MeshBackground = () => {
  const blobsRef = useRef([]);

  useEffect(() => {
    const blobs = blobsRef.current;
    
    const onMouseMove = (e) => {
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5);
      const yPos = (clientY / window.innerHeight - 0.5);

      blobs.forEach((blob, i) => {
        const factor = (i + 1) * 20;
        gsap.to(blob, {
          x: xPos * factor * (i + 1),
          y: yPos * factor * (i + 1),
          duration: 1.5,
          ease: "power2.out"
        });
      });
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  const blobColors = ['bg-brand', 'bg-red-800', 'bg-orange-600'];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-bg">
      {blobColors.map((color, i) => (
        <div 
          key={i}
          ref={el => blobsRef.current[i] = el}
          className={`mesh-blob w-[40vw] h-[40vw] ${color} opacity-20`}
          style={{
            top: `${20 + i * 20}%`,
            left: `${10 + i * 25}%`,
            transition: 'opacity 1s ease'
          }}
        />
      ))}
      
      {/* Global Grain Filter */}
      <div className="fixed inset-0 z-[100] pointer-events-none opacity-[0.04]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <filter id="grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#grain)" />
        </svg>
      </div>
    </div>
  );
};

export default MeshBackground;
