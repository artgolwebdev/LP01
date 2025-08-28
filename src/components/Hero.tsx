import React, { useState, useRef } from 'react';
import { getNeonCityScenePath } from "../utils/imageUtils";

export default function Hero() {
  const [isVideoLoading, setIsVideoLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleHover = () => {
    if ((window as any).cyberSounds) {
      (window as any).cyberSounds.hover();
    }
  };

  const handleTitleClick = () => {
    if ((window as any).cyberSounds) {
      (window as any).cyberSounds.click();
    }
    
    // Smooth scroll to About section
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleVideoLoad = () => {
    setIsVideoLoading(false);
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden"
    >
      {/* Background Video with Slow Motion Effect */}
      <div className="absolute inset-0 w-full h-full overflow-hidden" id="hero-video-container">
        {/* Loading SVG Thumbnail */}
        {isVideoLoading && (
          <div className="absolute inset-0 w-full h-full bg-black flex items-center justify-center">
            <div className="relative w-full h-full">
              {/* Cyberpunk Grid Background */}
              <svg
                className="w-full h-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern id="loadingGrid" x="0" y="0" width="5" height="5" patternUnits="userSpaceOnUse">
                    <path d="M 5 0 L 0 0 0 5" fill="none" stroke="#00ffff" strokeWidth="0.2" opacity="0.3" />
                  </pattern>
                  <linearGradient id="loadingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#000000" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#00ffff" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#000000" stopOpacity="0.8" />
                  </linearGradient>
                </defs>
                
                {/* Background */}
                <rect width="100%" height="100%" fill="url(#loadingGradient)" />
                <rect width="100%" height="100%" fill="url(#loadingGrid)" />
                
                {/* City Icon */}
                <g transform="translate(50, 50)">
                  {/* City Skyline */}
                  <rect x="-12" y="2" width="2" height="8" fill="#00ffff" opacity="0.8" />
                  <rect x="-10" y="4" width="2" height="6" fill="#00ffff" opacity="0.8" />
                  <rect x="-8" y="1" width="2" height="9" fill="#00ffff" opacity="0.8" />
                  <rect x="-6" y="3" width="2" height="7" fill="#00ffff" opacity="0.8" />
                  <rect x="-4" y="0" width="2" height="10" fill="#00ffff" opacity="0.8" />
                  <rect x="-2" y="2" width="2" height="8" fill="#00ffff" opacity="0.8" />
                  <rect x="0" y="1" width="2" height="9" fill="#00ffff" opacity="0.8" />
                  <rect x="2" y="3" width="2" height="7" fill="#00ffff" opacity="0.8" />
                  <rect x="4" y="0" width="2" height="10" fill="#00ffff" opacity="0.8" />
                  <rect x="6" y="2" width="2" height="8" fill="#00ffff" opacity="0.8" />
                  <rect x="8" y="4" width="2" height="6" fill="#00ffff" opacity="0.8" />
                  <rect x="10" y="1" width="2" height="9" fill="#00ffff" opacity="0.8" />
                  
                  {/* Windows */}
                  <rect x="-11" y="3" width="1" height="1" fill="#ffffff" opacity="0.6" />
                  <rect x="-7" y="2" width="1" height="1" fill="#ffffff" opacity="0.6" />
                  <rect x="-5" y="4" width="1" height="1" fill="#ffffff" opacity="0.6" />
                  <rect x="-3" y="1" width="1" height="1" fill="#ffffff" opacity="0.6" />
                  <rect x="-1" y="3" width="1" height="1" fill="#ffffff" opacity="0.6" />
                  <rect x="1" y="2" width="1" height="1" fill="#ffffff" opacity="0.6" />
                  <rect x="3" y="4" width="1" height="1" fill="#ffffff" opacity="0.6" />
                  <rect x="5" y="1" width="1" height="1" fill="#ffffff" opacity="0.6" />
                  <rect x="7" y="3" width="1" height="1" fill="#ffffff" opacity="0.6" />
                  <rect x="9" y="5" width="1" height="1" fill="#ffffff" opacity="0.6" />
                  <rect x="11" y="2" width="1" height="1" fill="#ffffff" opacity="0.6" />
                  
                  {/* Ground Line */}
                  <line x1="-12" y1="10" x2="12" y2="10" stroke="#00ffff" strokeWidth="0.3" opacity="0.6" />
                  
                  {/* Loading Animation */}
                  <circle cx="0" cy="0" r="15" fill="none" stroke="#00ffff" strokeWidth="0.3" opacity="0.5">
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      values="0 0 0;360 0 0"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </g>
                
                {/* Loading Text */}
                <text x="50" y="75" textAnchor="middle" fill="#00ffff" fontSize="2" opacity="0.7" fontFamily="monospace">
                  LOADING VIDEO...
                </text>
              </svg>
              
              {/* Loading Spinner */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-16 h-16 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
              </div>
            </div>
          </div>
        )}

                 <video
           ref={videoRef}
           id="hero-video"
           className={`w-full h-full transition-opacity duration-1000 ${isVideoLoading ? 'opacity-0' : 'opacity-100'}`}
           autoPlay
           muted
           loop
           playsInline
           onLoadedData={handleVideoLoad}
           style={{
             minWidth: '100%',
             minHeight: '100%',
             width: 'auto',
             height: 'auto',
             objectFit: 'cover'
           }}
         >
           <source src={getNeonCityScenePath()} type="video/mp4" />
         </video>
      </div>
      
      {/* Background overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 matrix-rain"></div>
      
      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
        <div className="space-y-8">
          <h1 
            className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-wider leading-none cyber-glow cyber-glitch interactive-element cursor-pointer"
            style={{ fontFamily: 'var(--font-cyber-display)' }}
            data-text="CYBER CITY"
            onMouseEnter={handleHover}
            onClick={handleTitleClick}
          >
            CYBER
            <br />
            <span className="bg-foreground text-background px-4 cyber-scan">CITY</span>
          </h1>
          
          <p 
            className="text-xl md:text-2xl max-w-2xl mx-auto uppercase tracking-wider"
            style={{ fontFamily: 'var(--font-cyber-secondary)' }}
          >
            <span className="color-shift interactive-element text-background cyber-glow" onMouseEnter={handleHover}>
              MINIMALISTIC.
            </span>{' '}
            <span className="color-shift interactive-element text-background cyber-glow" onMouseEnter={handleHover}>
              FUTURISTIC.
            </span>{' '}
            <span className="color-shift interactive-element text-background cyber-glow" onMouseEnter={handleHover}>
              UNCOMPROMISING.
            </span>
            <br />
            <span className="cyber-flicker interactive-element text-background cyber-glow" onMouseEnter={handleHover}>
              DIGITAL EXPERIENCES THAT TRANSCEND
            </span>
          </p>
          
          <div className="pt-8">
            <div className="w-24 h-1 bg-foreground mx-auto cyber-glow"></div>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
      <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-magenta-400 rounded-full animate-bounce"></div>
      <div className="absolute top-1/2 left-1/3 w-1 h-1 bg-yellow-400 rounded-full animate-ping"></div>
    </section>
  );
}