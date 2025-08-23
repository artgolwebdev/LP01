import { Button } from "./ui/button";
import { useScrollSections } from "./hooks/useScrollSections";
import { motion } from "motion/react";

export default function Header() {
  const { activeSection, scrollProgress, isScrolled, sections, scrollToSection } = useScrollSections();

  const handleHover = () => {
    if ((window as any).cyberSounds) {
      (window as any).cyberSounds.hover();
    }
  };

  const handleClick = (sectionId: string) => {
    if ((window as any).cyberSounds) {
      (window as any).cyberSounds.click();
    }
    scrollToSection(sectionId);
  };

  return (
    <motion.header 
      className="sticky top-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: isScrolled ? activeSection.bgColor : 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(10px)',
        borderBottom: `4px solid ${activeSection.borderColor}`,
        boxShadow: isScrolled ? `0 0 20px ${activeSection.color}40` : 'none',
      }}
      animate={{
        y: 0,
      }}
      transition={{ duration: 0.3 }}
    >
      {/* Scroll progress bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-1 z-10"
        style={{
          backgroundColor: activeSection.color,
          boxShadow: `0 0 10px ${activeSection.color}`,
        }}
        animate={{
          width: `${scrollProgress * 100}%`,
        }}
        transition={{ duration: 0.1 }}
      />

      <div className="max-w-7xl mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo with morphing effect */}
          <motion.div 
            className="text-2xl font-black uppercase tracking-wider cyber-glow cyber-glitch interactive-element"
            style={{ 
              fontFamily: 'var(--font-cyber-display)',
              color: activeSection.color,
              textShadow: `0 0 20px ${activeSection.color}`,
            }}
            data-text="CYBERΒRUTAL"
            onMouseEnter={handleHover}
            animate={{
              scale: isScrolled ? 0.9 : 1,
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.span
              animate={{
                color: activeSection.color,
              }}
              transition={{ duration: 0.5 }}
            >
              CYBER
            </motion.span>
            <span className="bg-foreground text-background px-2 mx-1 cyber-scan">
              Β
            </span>
            <motion.span
              animate={{
                color: activeSection.color,
              }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              RUTAL
            </motion.span>
          </motion.div>
          
          {/* Navigation with active states */}
          <div className="hidden md:flex items-center space-x-6">
            {sections.slice(1).map((section, index) => (
              <motion.button
                key={section.id}
                onClick={() => handleClick(section.id)}
                onMouseEnter={handleHover}
                className="relative uppercase tracking-widest px-4 py-2 transition-all duration-300 interactive-element"
                style={{ 
                  fontFamily: 'var(--font-cyber-primary)',
                  color: activeSection.id === section.id ? section.color : 'inherit',
                }}
                animate={{
                  textShadow: activeSection.id === section.id ? `0 0 10px ${section.color}` : 'none',
                  scale: activeSection.id === section.id ? 1.1 : 1,
                }}
                transition={{ duration: 0.3 }}
              >
                <span className="relative z-10">{section.name}</span>
                
                {/* Active indicator */}
                {activeSection.id === section.id && (
                  <motion.div
                    className="absolute inset-0 border-2 cyber-scan"
                    style={{ borderColor: section.color }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
                
                {/* Hover effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 hover:opacity-20 transition-opacity duration-300"
                  style={{ backgroundColor: section.color }}
                />
              </motion.button>
            ))}
          </div>

          {/* CTA Button with dynamic styling */}
          <motion.div
            animate={{
              scale: activeSection.id === 'cta' ? 1.2 : 1,
            }}
            transition={{ duration: 0.3 }}
          >
            <Button 
              onClick={() => handleClick('cta')}
              onMouseEnter={handleHover}
              className="cyber-button uppercase tracking-widest relative overflow-hidden"
              style={{ 
                fontFamily: 'var(--font-cyber-primary)',
                backgroundColor: activeSection.id === 'cta' ? activeSection.color : 'var(--foreground)',
                color: activeSection.id === 'cta' ? '#000000' : 'var(--background)',
                borderColor: activeSection.color,
                boxShadow: `0 0 15px ${activeSection.color}40`,
              }}
            >
              <motion.span
                animate={{
                  textShadow: activeSection.id === 'cta' ? `0 0 10px #000000` : 'none',
                }}
                transition={{ duration: 0.3 }}
              >
                GET APP
              </motion.span>
              
              {/* Animated background */}
              <motion.div
                className="absolute inset-0 opacity-20"
                style={{ backgroundColor: activeSection.color }}
                animate={{
                  x: activeSection.id === 'cta' ? 0 : '-100%',
                }}
                transition={{ duration: 0.5 }}
              />
            </Button>
          </motion.div>
        </nav>
      </div>

      {/* Section indicator */}
      <motion.div
        className="absolute left-4 top-1/2 transform -translate-y-1/2 hidden lg:block"
        animate={{
          opacity: isScrolled ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col space-y-1">
          {sections.map((section, index) => (
            <motion.button
              key={section.id}
              onClick={() => handleClick(section.id)}
              className="w-3 h-3 rounded-full border-2 transition-all duration-300"
              style={{
                borderColor: section.color,
                backgroundColor: activeSection.id === section.id ? section.color : 'transparent',
              }}
              animate={{
                scale: activeSection.id === section.id ? 1.5 : 1,
                boxShadow: activeSection.id === section.id ? `0 0 10px ${section.color}` : 'none',
              }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      </motion.div>

      {/* Mobile menu indicator */}
      <motion.div
        className="md:hidden absolute right-4 top-1/2 transform -translate-y-1/2"
        animate={{
          color: activeSection.color,
        }}
        transition={{ duration: 0.3 }}
      >
        <div 
          className="text-sm font-black uppercase tracking-wider"
          style={{ fontFamily: 'var(--font-cyber-mono)' }}
        >
          {activeSection.name}
        </div>
      </motion.div>
    </motion.header>
  );
}