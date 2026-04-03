import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

import img1 from '../../assets/diamond.png';
import img2 from '../../assets/diamond_gold.png';
import img3 from '../../assets/diamond_gold_white.png';

const IMAGES = {
  1: img1,
  2: img2,
  3: img3
};

const DecorativeDiamond = ({ 
  type = null, 
  className = "", 
  yRange = 15, 
  rotateRange = 10, 
  baseDuration = 10, 
  baseDelay = 0 
}) => {
  const selectedType = useMemo(() => {
    return type ? type : (Math.floor(Math.random() * 3) + 1);
  }, [type]);
  
  const animDuration = useMemo(() => baseDuration + (Math.random() * 5), [baseDuration]);
  const animDelay = useMemo(() => baseDelay + (Math.random() * 3), [baseDelay]);
  const yMovement = useMemo(() => [-yRange, yRange, -yRange], [yRange]);
  const rotMovement = useMemo(() => [-rotateRange, rotateRange, -rotateRange], [rotateRange]);

  const imgSrc = IMAGES[selectedType];

  return (
    <motion.div
      animate={{ y: yMovement, rotate: rotMovement }}
      transition={{ 
        duration: animDuration, 
        repeat: Infinity, 
        ease: "easeInOut",
        delay: animDelay
      }}
      className={`absolute pointer-events-none drop-shadow-2xl z-0 ${className}`}
    >
      <img src={imgSrc} alt="Diamond Ornament" className="w-full h-full object-contain" />
    </motion.div>
  );
};

export default DecorativeDiamond;
