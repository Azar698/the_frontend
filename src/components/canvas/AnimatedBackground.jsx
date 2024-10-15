import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  const stars = useMemo(() => {
    return Array.from({ length: 100 }).map((_, index) => ({
      id: index,
      x: Math.random() * 100,
      y: Math.random() * 100,
      radius: Math.random() * 0.15 + 0.05,
    }));
  }, []);

  return (
    <div className="absolute inset-0 z-0 bg-[#1A1A2E]">
      <svg
        className="w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0,50 Q25,30 50,50 T100,50 V100 H0 Z"
          fill="#915EFF"
          initial={{ opacity: 0.2 }}
          animate={{
            opacity: [0.2, 0.4, 0.2],
            d: [
              "M0,50 Q25,30 50,50 T100,50 V100 H0 Z",
              "M0,50 Q25,70 50,50 T100,50 V100 H0 Z",
              "M0,50 Q25,30 50,50 T100,50 V100 H0 Z",
            ],
          }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "easeInOut",
            times: [0, 0.5, 1],
          }}
        />
        {stars.map((star) => (
          <motion.circle
            key={star.id}
            cx={star.x}
            cy={star.y}
            r={star.radius}
            fill="#ffffff"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              repeat: Infinity,
              duration: Math.random() * 3 + 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>
    </div>
  );
};

export default AnimatedBackground;
