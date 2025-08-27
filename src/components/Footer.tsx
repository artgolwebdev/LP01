import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 
              className="text-2xl font-black uppercase tracking-widest mb-6 cyber-glow"
              style={{ fontFamily: 'var(--font-cyber-display)' }}
            >
              CYBERCITY
            </h3>
            <p 
              className="uppercase tracking-wider text-background/80"
              style={{ fontFamily: 'var(--font-cyber-secondary)' }}
            >
              MINIMALISTIC FUTURISTIC DESIGN
              <br />
              <span className="cyber-flicker">FOR THE DIGITAL AGE</span>
            </p>
          </div>
          
          <div>
            <h4 
              className="font-black uppercase tracking-widest mb-4"
              style={{ fontFamily: 'var(--font-cyber-primary)' }}
            >
              LINKS
            </h4>
            <div className="space-y-2 text-background/80">
              <p 
                className="uppercase tracking-wider cursor-pointer hover:text-background transition-colors"
                style={{ fontFamily: 'var(--font-cyber-mono)' }}
              >
                ABOUT
              </p>
              <p 
                className="uppercase tracking-wider cursor-pointer hover:text-background transition-colors"
                style={{ fontFamily: 'var(--font-cyber-mono)' }}
              >
                CONTACT
              </p>
              <p 
                className="uppercase tracking-wider cursor-pointer hover:text-background transition-colors"
                style={{ fontFamily: 'var(--font-cyber-mono)' }}
              >
                PRIVACY
              </p>
              <p 
                className="uppercase tracking-wider cursor-pointer hover:text-background transition-colors"
                style={{ fontFamily: 'var(--font-cyber-mono)' }}
              >
                TERMS
              </p>
            </div>
          </div>
          
          <div>
            <h4 
              className="font-black uppercase tracking-widest mb-4"
              style={{ fontFamily: 'var(--font-cyber-primary)' }}
            >
              CONNECT
            </h4>
            <div className="space-y-2 text-background/80">
              <p 
                className="uppercase tracking-wider cursor-pointer hover:text-background transition-colors cyber-flicker"
                style={{ fontFamily: 'var(--font-cyber-mono)' }}
              >
                TWITTER
              </p>
              <p 
                className="uppercase tracking-wider cursor-pointer hover:text-background transition-colors"
                style={{ fontFamily: 'var(--font-cyber-mono)' }}
              >
                INSTAGRAM
              </p>
              <p 
                className="uppercase tracking-wider cursor-pointer hover:text-background transition-colors"
                style={{ fontFamily: 'var(--font-cyber-mono)' }}
              >
                LINKEDIN
              </p>
              <p 
                className="uppercase tracking-wider cursor-pointer hover:text-background transition-colors cyber-flicker"
                style={{ fontFamily: 'var(--font-cyber-mono)' }}
              >
                GITHUB
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t-4 border-background">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p 
              className="uppercase tracking-wider text-background/60"
              style={{ fontFamily: 'var(--font-cyber-mono)' }}
            >
              © 2025 CYBERCITY. ALL RIGHTS RESERVED.
            </p>
            <div className="w-24 h-1 bg-background cyber-glow"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}