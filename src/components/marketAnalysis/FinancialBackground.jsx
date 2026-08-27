import React from 'react';
import { motion } from 'framer-motion';

const FinancialBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Subtle Financial Navy & Gold Grid */}
      <div
        className="absolute inset-0 opacity-25 transition-opacity duration-500"
        style={{
          backgroundImage: `radial-gradient(rgba(245, 158, 11, 0.15) 1px, transparent 1px), linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)`,
          backgroundSize: '36px 36px',
        }}
      />

      {/* Ambient Moving Wave Line */}
      <svg
        className="absolute bottom-0 left-0 w-full h-[45%] opacity-15 pointer-events-none"
        viewBox="0 0 1440 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          initial={{
            d: 'M0,160 L120,180 L240,140 L360,200 L480,120 L600,170 L720,130 L840,190 L960,110 L1080,160 L1200,130 L1320,180 L1440,140',
          }}
          animate={{
            d: [
              'M0,160 L120,180 L240,140 L360,200 L480,120 L600,170 L720,130 L840,190 L960,110 L1080,160 L1200,130 L1320,180 L1440,140',
              'M0,150 L120,170 L240,150 L360,180 L480,140 L600,160 L720,140 L840,175 L960,130 L1080,150 L1200,140 L1320,170 L1440,150',
              'M0,160 L120,180 L240,140 L360,200 L480,120 L600,170 L720,130 L840,190 L960,110 L1080,160 L1200,130 L1320,180 L1440,140',
            ],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          stroke="#F59E0B"
          strokeWidth="2"
          strokeDasharray="6 6"
        />
      </svg>
    </div>
  );
};

export default FinancialBackground;
