import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Volume2, VolumeX, Play, Square, ArrowUp } from 'lucide-react';
import { useScrollSections } from './hooks/useScrollSections';
import { getCyberCityAudioPath } from '../utils/imageUtils';

export default function CyberAudio() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  
  // Get active section for mobile menu indicator
  const { activeSection } = useScrollSections();

  // Initialize Web Audio API for sound effects
  const initializeAudioContext = () => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
  };

  // Initialize background music
  const initializeBackgroundMusic = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(getCyberCityAudioPath());
      audioRef.current.loop = true;
      audioRef.current.volume = 0.3; // Set initial volume to 30%
      
      // Add event listeners
      audioRef.current.addEventListener('ended', () => {
        setIsPlaying(false);
      });
      
      audioRef.current.addEventListener('error', (e) => {
        console.error('Audio error:', e);
        setIsPlaying(false);
      });
    }
  };

  // Sound effect functions
  const playClickSound = () => {
    if (!audioContextRef.current) {
      initializeAudioContext();
    }
    
    const audioContext = audioContextRef.current;
    if (!audioContext) return;
    
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.type = 'square';
    oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.1);
    
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.1);
  };

  const playHoverSound = () => {
    if (!audioContextRef.current) {
      initializeAudioContext();
    }
    
    const audioContext = audioContextRef.current;
    if (!audioContext) return;
    
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(600, audioContext.currentTime);
    
    gainNode.gain.setValueAtTime(0.05, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.2);
  };

  const toggleAudio = () => {
    if (!audioRef.current) {
      initializeBackgroundMusic();
    }

    if (isPlaying) {
      // Stop background music
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
      setIsPlaying(false);
      setIsMuted(false);
    } else {
      // Play background music
      if (audioRef.current) {
        audioRef.current.play().catch((error) => {
          console.error('Failed to play audio:', error);
          setIsPlaying(false);
        });
      }
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const scrollToTop = () => {
    if ((window as any).cyberSounds) {
      (window as any).cyberSounds.click();
    }
    
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Handle scroll to show/hide scroll to top button
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setShowScrollTop(scrollTop > 300); // Show after scrolling 300px
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Expose sound functions globally and cleanup on unmount
  useEffect(() => {
    (window as any).cyberSounds = {
      click: playClickSound,
      hover: playHoverSound
    };

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
      {/* Mobile menu indicator */}
      <motion.div
        className="md:hidden mb-2"
        animate={{
          color: activeSection.color,
        }}
        transition={{ duration: 0.3 }}
      >
        <div 
          className="text-sm font-black uppercase tracking-wider text-center"
          style={{ fontFamily: 'var(--font-cyber-mono)' }}
        >
          {activeSection.name}
        </div>
      </motion.div>
      
      <div className="flex gap-2">
        {/* Scroll to Top Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: showScrollTop ? 1 : 0,
            scale: showScrollTop ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
        >
          <Button
            onClick={scrollToTop}
            size="sm"
            variant="outline"
            className="cyber-button bg-background/80 backdrop-blur-sm border-2 border-foreground hover:bg-foreground hover:text-background"
            style={{ fontFamily: 'var(--font-cyber-mono)' }}
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 20px rgba(0, 255, 255, 0.8)",
              rotate: -5
            }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp size={16} />
          </Button>
        </motion.div>

        <Button
          onClick={toggleAudio}
          size="sm"
          variant="outline"
          className="cyber-button bg-background/80 backdrop-blur-sm border-2 border-foreground hover:bg-foreground hover:text-background"
          style={{ fontFamily: 'var(--font-cyber-mono)' }}
        >
          {isPlaying ? (
            <>
              <Square size={16} />
              STOP AMBIENT
            </>
          ) : (
            <>
              <Play size={16} />
              PLAY AMBIENT
            </>
          )}
        </Button>
        
        {isPlaying && (
          <Button
            onClick={toggleMute}
            size="sm"
            variant="outline"
            className="cyber-button bg-background/80 backdrop-blur-sm border-2 border-foreground hover:bg-foreground hover:text-background"
          >
            {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
          </Button>
        )}
      </div>
    </div>
  );
}