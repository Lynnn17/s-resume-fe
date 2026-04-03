import React, { useMemo } from 'react';

import img1 from '../../assets/diamond.png';
import img2 from '../../assets/diamond_gold.png';
import img3 from '../../assets/diamond_gold_white.png';

const IMAGES = {
  1: img1,
  2: img2,
  3: img3
};

// Fully static - no animation, no IntersectionObserver, no Framer Motion overhead
const DecorativeDiamond = ({ 
  type = null, 
  className = "", 
  rotateRange = 10,
}) => {
  const selectedType = useMemo(() => {
    return type ? type : (Math.floor(Math.random() * 3) + 1);
  }, [type]);
  
  const rotation = useMemo(() => Math.random() * rotateRange * 2 - rotateRange, [rotateRange]);
  const imgSrc = IMAGES[selectedType];

  return (
    <div
      style={{ transform: `rotate(${rotation}deg)` }}
      className={`absolute pointer-events-none drop-shadow-xl z-0 perf-gpu ${className}`}
    >
      <img src={imgSrc} alt="" aria-hidden="true" className="w-full h-full object-contain" loading="lazy" />
    </div>
  );
};

export default DecorativeDiamond;
