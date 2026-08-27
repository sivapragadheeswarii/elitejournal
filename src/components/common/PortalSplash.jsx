import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../assets/logo.png';

const PortalSplash = ({ isOpen, onClose, destinationUrl }) => {
  useEffect(() => {
    if (isOpen) {
      const timeout = setTimeout(() => {
        const url = destinationUrl || import.meta.env.VITE_APP_URL || 'http://localhost:5173/';
        window.location.href = url;
      }, 2200);
      return () => clearTimeout(timeout);
    }
  }, [isOpen, destinationUrl]);

  if (!isOpen) return null;

  const handleImmediateRedirect = () => {
    const url = destinationUrl || import.meta.env.VITE_APP_URL || 'http://localhost:5173/';
    window.location.href = url;
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={handleImmediateRedirect}
        className="fixed inset-0 z-[9999] bg-[#03070C] text-white flex flex-col items-center justify-between p-6 sm:p-10 overflow-hidden select-none cursor-pointer"
      >
        {/* Ambient Radial Glow & Shimmer Lighting */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[650px] h-[500px] sm:h-[650px] bg-emerald-500/12 rounded-full blur-[160px] pointer-events-none animate-pulse" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] sm:w-[500px] h-[380px] sm:h-[500px] bg-amber-500/12 rounded-full blur-[150px] pointer-events-none" />

        {/* Subtle Financial Grid Background Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#10B981 1px, transparent 1px)`,
            backgroundSize: '28px 28px',
          }}
        />

        {/* Center Hero Content Block (Top-to-Bottom Animated Logo + Headline) */}
        <div className="my-auto flex flex-col items-center text-center gap-8 z-10 max-w-lg w-full">
          
          {/* Logo Container with Smooth Drop From Top Animation */}
          <div className="relative flex items-center justify-center">
            {/* Outer Glowing Ambient Aura behind Logo */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.35, 0.7, 0.35],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
              className="absolute -inset-8 bg-gradient-to-r from-amber-500/25 via-emerald-500/25 to-amber-500/25 rounded-full blur-3xl pointer-events-none"
            />

            {/* Main Logo Standalone Drop-Down & Breathing Animation */}
            <motion.div
              initial={{ y: -160, opacity: 0, scale: 0.7 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.85, 
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative z-10 flex items-center justify-center"
            >
              <motion.img
                animate={{ 
                  scale: [1, 1.06, 1],
                  y: [0, -5, 0],
                }}
                transition={{ 
                  duration: 2.8, 
                  repeat: Infinity, 
                  ease: 'easeInOut',
                  delay: 0.85
                }}
                src={logo}
                alt="EPTS Logo"
                className="w-28 h-28 sm:w-44 sm:h-44 object-contain drop-shadow-[0_0_35px_rgba(212,175,55,0.55)]"
              />
            </motion.div>
          </div>

          {/* Headline Block (Slides Up after Logo Drops) */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center gap-2.5 text-center"
          >
            <h1 className="text-2.5xl sm:text-4xl font-black text-[#10B981] font-heading tracking-tight drop-shadow-[0_0_20px_rgba(16,185,129,0.4)]">
              EPTS Trading Journal
            </h1>
            <p className="text-xs sm:text-base text-slate-300 font-medium max-w-sm sm:max-w-md leading-relaxed">
              Track your trades, master discipline & unlock your true trading edge.
            </p>
          </motion.div>

        </div>

        {/* Reference-Inspired Footer Branding (Fades in last) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="z-10 flex flex-col items-center text-center text-slate-500 font-sans pb-2"
        >
          <span className="text-[11px] font-semibold text-slate-500 tracking-wider">From</span>
          <span className="text-xs sm:text-sm font-extrabold text-slate-200 tracking-wide mt-0.5">
            Elite Market Academy
          </span>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PortalSplash;
