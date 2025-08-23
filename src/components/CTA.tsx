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
    <section id="cta" className="py-24 bg-background relative">
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