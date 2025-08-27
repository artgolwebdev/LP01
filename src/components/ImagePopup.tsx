import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ImagePopupProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
}

export default function ImagePopup({ isOpen, onClose, imageSrc, imageAlt }: ImagePopupProps) {
  const handleHover = () => {
    if ((window as any).cyberSounds) {
      (window as any).cyberSounds.hover();
    }
  };

  const handleClick = () => {
    if ((window as any).cyberSounds) {
      (window as any).cyberSounds.click();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Container */}
          <motion.div
            className="relative max-w-7xl max-h-[90vh] mx-4 overflow-hidden"
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ 
              duration: 0.4, 
              ease: "easeOut",
              type: "spring",
              stiffness: 100
            }}
          >
            {/* Cyber Border Frame */}
            <div className="relative p-2 cyber-button border-4 border-cyan-400 bg-black/90">
              {/* Corner Decorations */}
              <div className="absolute top-2 left-2 w-6 h-6 border-l-4 border-t-4 border-cyan-400"></div>
              <div className="absolute top-2 right-2 w-6 h-6 border-r-4 border-t-4 border-magenta-400"></div>
              <div className="absolute bottom-2 left-2 w-6 h-6 border-l-4 border-b-4 border-yellow-400"></div>
              <div className="absolute bottom-2 right-2 w-6 h-6 border-r-4 border-b-4 border-green-400"></div>

              {/* Image Container */}
              <div className="relative overflow-hidden">
                <motion.img
                  src={imageSrc}
                  alt={imageAlt}
                  className="w-full h-auto max-h-[80vh] object-contain"
                  initial={{ scale: 1.1, filter: "blur(10px)" }}
                  animate={{ scale: 1, filter: "blur(0px)" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  onMouseEnter={handleHover}
                />

                {/* Cyber Scan Effect */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60"></div>
                  <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-magenta-400 to-transparent opacity-60"></div>
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-yellow-400 to-transparent opacity-60"></div>
                  <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-green-400 to-transparent opacity-60"></div>
                </motion.div>

                {/* Glow Effect */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  animate={{
                    boxShadow: [
                      "0 0 50px rgba(0, 255, 255, 0.3)",
                      "0 0 50px rgba(255, 0, 255, 0.3)",
                      "0 0 50px rgba(255, 255, 0, 0.3)",
                      "0 0 50px rgba(0, 255, 255, 0.3)"
                    ]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
              </div>

              {/* Close Button - Custom CSS positioning */}
              <motion.button
                className="w-12 h-12 bg-black/80 border-2 border-cyan-400 text-cyan-400 hover:text-white hover:bg-cyan-400 transition-all duration-300 flex items-center justify-center cyber-button"
                style={{
                  position: 'absolute',
                  top: '8px',
                  right: '8px',
                  zIndex: 1000
                }}
                onClick={() => {
                  handleClick();
                  onClose();
                }}
                onMouseEnter={handleHover}
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 0 20px rgba(0, 255, 255, 0.8)",
                  rotate: 90
                }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ delay: 0.3, duration: 0.3 }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </motion.button>

              {/* Image Info */}
              <motion.div
                className="absolute bottom-4 left-4 bg-black/80 border border-cyan-400 p-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.3 }}
              >
                <p 
                  className="text-cyan-400 uppercase tracking-wider text-sm font-bold"
                  style={{ fontFamily: 'var(--font-cyber-mono)' }}
                >
                  {imageAlt}
                </p>
                <p 
                  className="text-white/70 uppercase tracking-wider text-xs"
                  style={{ fontFamily: 'var(--font-cyber-secondary)' }}
                >
                  CYBER GALLERY
                </p>
              </motion.div>

              {/* Navigation Hints */}
              <motion.div
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/80 border border-magenta-400 p-2 opacity-0 hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 0, x: -20 }}
                whileHover={{ opacity: 1, x: 0 }}
                onMouseEnter={handleHover}
              >
                <p 
                  className="text-magenta-400 uppercase tracking-wider text-xs"
                  style={{ fontFamily: 'var(--font-cyber-mono)' }}
                >
                  ESC TO CLOSE
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
