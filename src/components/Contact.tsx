import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export default function Contact() {
  const handleHover = () => {
    if ((window as any).cyberSounds) {
      (window as any).cyberSounds.hover();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if ((window as any).cyberSounds) {
      (window as any).cyberSounds.click();
    }
  };

  return (
    <section id="contact" className="py-24 bg-foreground text-background relative">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 
              className="text-4xl md:text-6xl font-black uppercase tracking-widest mb-8 cyber-glow cyber-glitch interactive-element"
              style={{ fontFamily: 'var(--font-cyber-display)' }}
              data-text="CONTACT"
              onMouseEnter={handleHover}
            >
              CONTACT
            </h2>
            
            <div className="space-y-6 text-lg uppercase tracking-wider">
              <div className="interactive-element" onMouseEnter={handleHover}>
                <p 
                  className="mb-2 font-black color-shift" 
                  style={{ fontFamily: 'var(--font-cyber-primary)' }}
                >
                  EMAIL
                </p>
                <p 
                  className="text-background/80 cyber-flicker" 
                  style={{ fontFamily: 'var(--font-cyber-mono)' }}
                >
                  HELLO@CYBERBRUTAL.COM
                </p>
              </div>
              
              <div className="interactive-element" onMouseEnter={handleHover}>
                <p 
                  className="mb-2 font-black color-shift" 
                  style={{ fontFamily: 'var(--font-cyber-primary)' }}
                >
                  PHONE
                </p>
                <p 
                  className="text-background/80" 
                  style={{ fontFamily: 'var(--font-cyber-mono)' }}
                >
                  +1 (555) 123-4567
                </p>
              </div>
              
              <div className="interactive-element" onMouseEnter={handleHover}>
                <p 
                  className="mb-2 font-black color-shift" 
                  style={{ fontFamily: 'var(--font-cyber-primary)' }}
                >
                  ADDRESS
                </p>
                <p 
                  className="text-background/80" 
                  style={{ fontFamily: 'var(--font-cyber-mono)' }}
                >
                  123 CYBER DISTRICT<br />
                  NEON CITY, NC 12345
                </p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 
              className="text-2xl font-black uppercase tracking-widest cyber-glow interactive-element"
              style={{ fontFamily: 'var(--font-cyber-primary)' }}
              onMouseEnter={handleHover}
            >
              TRANSMIT MESSAGE
            </h3>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <Input 
                placeholder="YOUR NAME" 
                className="cyber-button bg-background text-foreground border-2 border-background placeholder:text-foreground/50 uppercase tracking-wider"
                style={{ fontFamily: 'var(--font-cyber-mono)' }}
                onFocus={handleHover}
              />
              <Input 
                type="email" 
                placeholder="YOUR EMAIL" 
                className="cyber-button bg-background text-foreground border-2 border-background placeholder:text-foreground/50 uppercase tracking-wider"
                style={{ fontFamily: 'var(--font-cyber-mono)' }}
                onFocus={handleHover}
              />
              <Textarea 
                placeholder="YOUR MESSAGE" 
                className="cyber-button bg-background text-foreground border-2 border-background placeholder:text-foreground/50 uppercase tracking-wider min-h-32"
                style={{ fontFamily: 'var(--font-cyber-mono)' }}
                onFocus={handleHover}
              />
              <Button 
                type="submit"
                onMouseEnter={handleHover}
                className="cyber-button w-full bg-background text-foreground hover:bg-background/90 border-2 border-background uppercase tracking-widest font-black cyber-scan"
                style={{ fontFamily: 'var(--font-cyber-primary)' }}
              >
                TRANSMIT
              </Button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Background particles for this section */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/3 w-2 h-2 bg-magenta-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-yellow-400 rounded-full animate-bounce"></div>
      </div>
    </section>
  );
}