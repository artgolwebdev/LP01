import React from 'react';
import { getNeonCityScenePath } from "../utils/imageUtils";

export default function Hero() {
  const handleHover = () => {
    if ((window as any).cyberSounds) {
      (window as any).cyberSounds.hover();
    }
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden"
    >
      {/* Background Video with Slow Motion Effect */}
      <div className="absolute inset-0 w-full h-full overflow-hidden" id="hero-video-container">
        <video
          id="hero-video"
          className="w-full h-full"
          autoPlay
          muted
          loop
          playsInline
          style={{
            minWidth: '100%',
            minHeight: '100%',
            width: 'auto',
            height: 'auto',
            objectFit : 'fill'
          }}
        >
          <source src={getNeonCityScenePath()} type="video/mp4" />

          {/* Fallback to image if video not available */}
          <img
            src={getNeonCityScenePath()}
            alt="Neon City Scene"
            className="w-full h-full"
          />
        </video>
      </div>
      
      {/* Background overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 matrix-rain"></div>
      
      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
        <div className="space-y-8">
          <h1 
            className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-wider leading-none cyber-glow cyber-glitch interactive-element"
            style={{ fontFamily: 'var(--font-cyber-display)' }}
            data-text="CYBER ΒRUTAL"
            onMouseEnter={handleHover}
          >
            CYBER
            <br />
            <span className="bg-foreground text-background px-4 cyber-scan">ΒRUTAL</span>
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