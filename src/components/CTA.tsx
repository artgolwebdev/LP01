import React from 'react';
import { Button } from "./ui/button";

export default function CTA() {
  const handleAppClick = () => {
    // Replace with actual app URL
    if ((window as any).cyberSounds) {
      (window as any).cyberSounds.click();
    }
    window.open('#', '_blank');
  };

  const handleHover = () => {
    if ((window as any).cyberSounds) {
      (window as any).cyberSounds.hover();
    }
  };

  return (
    <section id="cta" className="py-24 bg-background relative overflow-hidden">
             {/* Cyber Background SVG */}
       <div className="absolute inset-0 pointer-events-none w-full h-full">
         <svg
           className="w-full h-full"
           viewBox="0 0 100 100"
           preserveAspectRatio="none"
           xmlns="http://www.w3.org/2000/svg"
         >
          {/* Gradient Definitions */}
          <defs>
            <linearGradient id="cyberGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00ffff" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#ff00ff" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#ffff00" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="cyberGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00ffff" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#ff00ff" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#ffff00" stopOpacity="0.3" />
            </linearGradient>
                         <pattern id="gridPattern" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
               <path d="M 8 0 L 0 0 0 8" fill="none" stroke="#00ffff" strokeWidth="0.1" opacity="0.1" />
             </pattern>
          </defs>

          {/* Background Grid */}
          <rect width="100%" height="100%" fill="url(#gridPattern)" />
          
          {/* Gradient Background */}
          <rect width="100%" height="100%" fill="url(#cyberGradient1)" />
          
                     {/* Animated Circuit Lines */}
           <g className="animate-pulse">
             <path
               d="M 0 25 Q 25 15 50 25 T 100 25"
               fill="none"
               stroke="url(#cyberGradient2)"
               strokeWidth="0.3"
               opacity="0.6"
             />
             <path
               d="M 0 75 Q 25 65 50 75 T 100 75"
               fill="none"
               stroke="url(#cyberGradient2)"
               strokeWidth="0.3"
               opacity="0.6"
             />
           </g>

                     {/* Floating Geometric Shapes */}
           <g className="animate-bounce" style={{ animationDuration: '4s' }}>
             <polygon
               points="15,15 20,10 25,15 20,20"
               fill="none"
               stroke="#00ffff"
               strokeWidth="0.2"
               opacity="0.3"
             />
             <polygon
               points="75,30 80,25 85,30 80,35"
               fill="none"
               stroke="#ff00ff"
               strokeWidth="0.2"
               opacity="0.3"
             />
           </g>

           <g className="animate-bounce" style={{ animationDuration: '6s', animationDelay: '1s' }}>
             <circle cx="20" cy="70" r="3" fill="none" stroke="#ffff00" strokeWidth="0.2" opacity="0.3" />
             <circle cx="80" cy="60" r="2" fill="none" stroke="#00ffff" strokeWidth="0.2" opacity="0.3" />
           </g>

                     {/* Data Streams */}
           <g className="animate-pulse" style={{ animationDuration: '3s' }}>
             <text x="5" y="15" fill="#00ffff" fontSize="1.5" opacity="0.4" fontFamily="monospace">
               <tspan x="5" dy="0">0101</tspan>
               <tspan x="5" dy="2">1010</tspan>
               <tspan x="5" dy="2">0101</tspan>
             </text>
             <text x="85" y="85" fill="#ff00ff" fontSize="1.5" opacity="0.4" fontFamily="monospace">
               <tspan x="85" dy="0">1100</tspan>
               <tspan x="85" dy="2">0011</tspan>
               <tspan x="85" dy="2">1100</tspan>
             </text>
           </g>

                     {/* Scanning Lines */}
           <g className="animate-pulse" style={{ animationDuration: '2s' }}>
             <line x1="0" y1="50" x2="100" y2="50" stroke="#00ffff" strokeWidth="0.2" opacity="0.2" />
             <line x1="0" y1="55" x2="100" y2="55" stroke="#ff00ff" strokeWidth="0.2" opacity="0.2" />
           </g>

                     {/* Corner Brackets */}
           <g>
             <path d="M 8 8 L 15 8 L 15 15" fill="none" stroke="#00ffff" strokeWidth="0.3" opacity="0.4" />
             <path d="M 92 8 L 85 8 L 85 15" fill="none" stroke="#00ffff" strokeWidth="0.3" opacity="0.4" />
             <path d="M 8 92 L 15 92 L 15 85" fill="none" stroke="#ff00ff" strokeWidth="0.3" opacity="0.4" />
             <path d="M 92 92 L 85 92 L 85 85" fill="none" stroke="#ff00ff" strokeWidth="0.3" opacity="0.4" />
           </g>

                     {/* Floating Particles */}
           <g className="animate-ping" style={{ animationDuration: '3s' }}>
             <circle cx="25" cy="35" r="0.3" fill="#00ffff" opacity="0.6" />
             <circle cx="75" cy="65" r="0.3" fill="#ff00ff" opacity="0.6" />
             <circle cx="50" cy="20" r="0.3" fill="#ffff00" opacity="0.6" />
           </g>
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
        <div className="space-y-12">
          <h2 
            className="text-4xl md:text-6xl font-black uppercase tracking-widest cyber-glow cyber-glitch interactive-element"
            style={{ fontFamily: 'var(--font-cyber-display)' }}
            data-text="READY TO TRANSCEND?"
            onMouseEnter={handleHover}
          >
            READY TO TRANSCEND?
          </h2>
          
          <div className="space-y-8">
            <p 
              className="text-xl uppercase tracking-wider max-w-2xl mx-auto"
              style={{ fontFamily: 'var(--font-cyber-secondary)' }}
            >
              <span className="color-shift interactive-element" onMouseEnter={handleHover}>
                EXPERIENCE THE DIFFERENCE.
              </span>{' '}
              <span className="cyber-glow interactive-element" onMouseEnter={handleHover}>
                GET THE APP NOW.
              </span>
            </p>
            
            <div className="relative inline-block">
              <Button 
                onClick={handleAppClick}
                onMouseEnter={handleHover}
                size="lg"
                className="cyber-button bg-foreground text-background hover:bg-background hover:text-foreground border-4 border-foreground text-xl px-12 py-6 uppercase tracking-widest font-black cyber-pulse"
                style={{ fontFamily: 'var(--font-cyber-primary)' }}
              >
                GET THE APP
              </Button>
              
              {/* Orbiting particles */}
              <div className="absolute -inset-8 pointer-events-none">
                <div className="absolute top-0 left-1/2 w-2 h-2 bg-cyan-400 rounded-full animate-spin origin-bottom" style={{ transformOrigin: '0 4rem' }}></div>
                <div className="absolute top-1/2 right-0 w-2 h-2 bg-magenta-400 rounded-full animate-spin origin-left" style={{ transformOrigin: '-4rem 0' }}></div>
                <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-yellow-400 rounded-full animate-spin origin-top" style={{ transformOrigin: '0 -4rem' }}></div>
              </div>
            </div>
          </div>
          
          <div className="pt-8">
            <div className="w-full h-1 bg-foreground cyber-glow"></div>
          </div>
        </div>
      </div>
    </section>
  );
}