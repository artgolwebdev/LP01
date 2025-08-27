import React from "react";
import { motion } from "motion/react";
import { useScrollAnimation, useStaggeredAnimation } from "./hooks/useScrollAnimation";
import { getGalleryImagePath } from "../utils/imageUtils";

const services = [
  {
    title: "DIGITAL IDENTITY",
    description: "CRAFTING UNIQUE DIGITAL PERSONAS THAT TRANSCEND CONVENTIONAL BOUNDARIES",
    color: "#00ffff"
  },
  {
    title: "UI/UX DESIGN",
    description: "BRUTALIST INTERFACES THAT CHALLENGE USER EXPECTATIONS AND DELIVER RESULTS",
    color: "#ff00ff"
  },
  {
    title: "BRAND STRATEGY",
    description: "REVOLUTIONARY BRAND POSITIONING FOR THE DIGITAL UNDERGROUND",
    color: "#ffff00"
  },
  {
    title: "WEB DEVELOPMENT",
    description: "CUTTING-EDGE WEBSITES BUILT WITH CYBERPUNK PRECISION AND PERFORMANCE",
    color: "#00ff00"
  },
  {
    title: "DIGITAL CAMPAIGNS",
    description: "VIRAL MARKETING STRATEGIES THAT HACK THE ALGORITHM AND DOMINATE FEEDS",
    color: "#ff6b00"
  },
  {
    title: "CONSULTANCY",
    description: "STRATEGIC GUIDANCE FOR BRANDS READY TO EMBRACE THE DIGITAL REVOLUTION",
    color: "#8b00ff"
  }
];

const galleryItems = [
  { type: "image", size: "large", query: "futuristic technology" },
  { type: "text", content: "DESIGN IS NOT JUST WHAT IT LOOKS LIKE. DESIGN IS HOW IT WORKS.", author: "STEVE JOBS" },
  { type: "image", size: "medium", query: "cyber architecture" },
  { type: "image", size: "small", query: "neon lights city" },
  { type: "text", content: "THE FUTURE BELONGS TO THOSE WHO PREPARE FOR IT TODAY", author: "MALCOLM X" },
  { type: "image", size: "medium", query: "digital art abstract" },
  { type: "image", size: "large", query: "cyberpunk aesthetic" },
  { type: "text", content: "INNOVATION DISTINGUISHES BETWEEN A LEADER AND A FOLLOWER", author: "STEVE JOBS" },
  { type: "image", size: "small", query: "holographic display" }
];

export default function About() {
  const { ref: heroRef, isInView: heroInView } = useScrollAnimation();
  const { ref: servicesRef, visibleItems: serviceItems } = useStaggeredAnimation(services.length, 0.15);
  const { ref: galleryRef, visibleItems: galleryVisibleItems } = useStaggeredAnimation(galleryItems.length, 0.1);

  const handleHover = () => {
    if ((window as any).cyberSounds) {
      (window as any).cyberSounds.hover();
    }
  };

  return (
    <section id="about" className="py-24 bg-foreground text-background relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 grid-rows-12 h-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <motion.div
              key={i}
              className="border border-background"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
              transition={{ delay: i * 0.01, duration: 0.5 }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Hero Section */}
        <motion.div
          ref={heroRef}
          className="text-center mb-20"
          initial={{ opacity: 0, y: 100 }}
          animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2 
            className="text-6xl md:text-8xl font-black uppercase tracking-wider mb-8 cyber-glow cyber-glitch interactive-element"
            style={{ fontFamily: 'var(--font-cyber-display)' }}
            data-text="ABOUT"
            onMouseEnter={handleHover}
            animate={heroInView ? { 
              textShadow: [
                "0 0 20px #00ffff",
                "0 0 40px #ff00ff", 
                "0 0 20px #ffff00",
                "0 0 20px #00ffff"
              ] 
            } : {}}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ABOUT
          </motion.h2>
          
          <motion.div
            className="space-y-6 max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <p 
              className="text-2xl md:text-3xl uppercase tracking-wider"
              style={{ fontFamily: 'var(--font-cyber-secondary)' }}
            >
              WE ARE <span className="cyber-glow" style={{ color: '#00ffff' }}>DIGITAL REBELS</span> 
              {' '}CRAFTING THE FUTURE OF{' '}
              <span className="cyber-glow" style={{ color: '#ff00ff' }}>CYBER EXPERIENCES</span>
            </p>
            
            <motion.div
              className="w-32 h-1 bg-background mx-auto cyber-glow"
              initial={{ width: 0 }}
              animate={heroInView ? { width: 128 } : { width: 0 }}
              transition={{ delay: 0.6, duration: 1 }}
            />
          </motion.div>
        </motion.div>

        {/* Services Grid */}
        <div ref={servicesRef} className="mb-20">
          <motion.h3
            className="text-4xl md:text-5xl font-black uppercase tracking-widest mb-12 text-center cyber-glow"
            style={{ fontFamily: 'var(--font-cyber-primary)' }}
            initial={{ opacity: 0, x: -100 }}
            animate={serviceItems[0] ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 0.6 }}
          >
            OUR SERVICES
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="cyber-button p-6 border-4 border-background hover:border-current transition-all duration-300 interactive-element group"
                style={{ borderColor: service.color }}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                animate={serviceItems[index] ? { 
                  opacity: 1, 
                  y: 0, 
                  rotateX: 0 
                } : { 
                  opacity: 0, 
                  y: 50, 
                  rotateX: -15 
                }}
                transition={{ 
                  duration: 0.6, 
                  ease: "easeOut",
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 5,
                  boxShadow: `0 20px 40px ${service.color}40`
                }}
                onMouseEnter={handleHover}
              >
                <motion.h4
                  className="font-black uppercase tracking-widest mb-4 text-xl cyber-glow"
                  style={{ 
                    fontFamily: 'var(--font-cyber-primary)',
                    color: service.color
                  }}
                  whileHover={{ scale: 1.1 }}
                >
                  {service.title}
                </motion.h4>
                
                <p 
                  className="uppercase tracking-wider text-sm leading-relaxed group-hover:text-background/90 transition-colors"
                  style={{ fontFamily: 'var(--font-cyber-secondary)' }}
                >
                  {service.description}
                </p>

                {/* Animated corner decorations */}
                <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2" style={{ borderColor: service.color }}></div>
                <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2" style={{ borderColor: service.color }}></div>
                <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2" style={{ borderColor: service.color }}></div>
                <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2" style={{ borderColor: service.color }}></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Magazine Gallery */}
        <div ref={galleryRef} className="mb-20">
          <motion.h3
            className="text-4xl md:text-5xl font-black uppercase tracking-widest mb-12 text-center cyber-glow"
            style={{ fontFamily: 'var(--font-cyber-primary)' }}
            initial={{ opacity: 0, x: 100 }}
            animate={galleryVisibleItems[0] ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 0.6 }}
          >
            DIGITAL SHOWCASE
          </motion.h3>

          <div className="grid grid-cols-12 gap-4 auto-rows-[200px]">
            {galleryItems.map((item, index) => (
              <motion.div
                key={index}
                className={`
                  relative overflow-hidden cyber-button border-2 border-background group cursor-pointer
                  ${item.size === 'large' ? 'col-span-12 md:col-span-6 row-span-2' : ''}
                  ${item.size === 'medium' ? 'col-span-6 md:col-span-4 row-span-1' : ''}
                  ${item.size === 'small' ? 'col-span-6 md:col-span-2 row-span-1' : ''}
                  ${item.type === 'text' ? 'col-span-12 md:col-span-4 row-span-1' : ''}
                `}
                initial={{ 
                  opacity: 0, 
                  scale: 0.8, 
                  filter: "blur(10px)" 
                }}
                animate={galleryVisibleItems[index] ? { 
                  opacity: 1, 
                  scale: 1, 
                  filter: "blur(0px)" 
                } : { 
                  opacity: 0, 
                  scale: 0.8, 
                  filter: "blur(10px)" 
                }}
                transition={{ 
                  duration: 0.8, 
                  ease: "easeOut",
                  delay: index * 0.1 
                }}
                whileHover={{ 
                  scale: 1.05, 
                  zIndex: 10,
                  boxShadow: "0 20px 40px rgba(0, 255, 255, 0.3)"
                }}
                onMouseEnter={handleHover}
              >
                {item.type === 'image' ? (
                  <div 
                    className="w-full h-full relative overflow-hidden cyber-scan"
                    style={{
                      backgroundImage: `url(${getGalleryImagePath(item.query || '')})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat'
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-magenta-400/10 pointer-events-none"></div>
                  </div>
                ) : (
                  <div className="w-full h-full p-4 flex flex-col justify-center bg-gradient-to-br from-background/10 to-transparent">
                    <blockquote 
                      className="font-black uppercase tracking-wider text-center leading-tight mb-4 cyber-glow"
                      style={{ 
                        fontFamily: 'var(--font-cyber-primary)',
                        fontSize: item.size === 'large' ? '1.5rem' : '1rem'
                      }}
                    >
                      "{item.content}"
                    </blockquote>
                    {item.author && (
                      <cite 
                        className="text-xs uppercase tracking-widest text-center opacity-80 cyber-flicker"
                        style={{ fontFamily: 'var(--font-cyber-mono)' }}
                      >
                        — {item.author}
                      </cite>
                    )}
                  </div>
                )}

                {/* Hover overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-magenta-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />

                {/* Glitch effect overlay */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-0 left-0 w-full h-1 bg-cyan-400 opacity-0 group-hover:opacity-100 animate-pulse"></div>
                  <div className="absolute bottom-0 right-0 w-full h-1 bg-magenta-400 opacity-0 group-hover:opacity-100 animate-pulse"></div>
                  <div className="absolute top-0 left-0 w-1 h-full bg-yellow-400 opacity-0 group-hover:opacity-100 animate-pulse"></div>
                  <div className="absolute top-0 right-0 w-1 h-full bg-green-400 opacity-0 group-hover:opacity-100 animate-pulse"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={galleryVisibleItems.some(Boolean) ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <p 
            className="text-xl md:text-2xl uppercase tracking-wider mb-8"
            style={{ fontFamily: 'var(--font-cyber-secondary)' }}
          >
            READY TO JOIN THE{' '}
            <span className="cyber-glow" style={{ color: '#00ffff' }}>DIGITAL REVOLUTION</span>?
          </p>
          
          <motion.div
            className="w-48 h-1 bg-gradient-to-r from-cyan-400 via-magenta-400 to-yellow-400 mx-auto cyber-glow"
            initial={{ width: 0, opacity: 0 }}
            animate={galleryVisibleItems.some(Boolean) ? { width: 192, opacity: 1 } : { width: 0, opacity: 0 }}
            transition={{ delay: 1.3, duration: 1.2 }}
          />
        </motion.div>
      </div>

      {/* Floating cyber elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>
    </section>
  );
}