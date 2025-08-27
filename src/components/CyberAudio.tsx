import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Volume2, VolumeX } from 'lucide-react';
import { useScrollSections } from './hooks/useScrollSections';

export default function CyberAudio() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const oscillatorRef = useRef<OscillatorNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  
  // Get active section for mobile menu indicator
  const { activeSection } = useScrollSections();

  const createAmbientSound = () => {
    if (audioContextRef.current) {
      audioContextRef.current.close();
    }

    audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    const audioContext = audioContextRef.current;

    // Create oscillator for ambient drone
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    const filter = audioContext.createBiquadFilter();

    oscillator.type = 'sawtooth';
    oscillator.frequency.setValueAtTime(55, audioContext.currentTime); // Low bass frequency
    
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(200, audioContext.currentTime);
    filter.Q.setValueAtTime(10, audioContext.currentTime);

    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);

    oscillator.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillatorRef.current = oscillator;
    gainNodeRef.current = gainNode;

    // Add subtle frequency modulation
    const lfo = audioContext.createOscillator();
    const lfoGain = audioContext.createGain();
    
    lfo.type = 'sine';
    lfo.frequency.setValueAtTime(0.1, audioContext.currentTime);
    lfoGain.gain.setValueAtTime(10, audioContext.currentTime);
    
    lfo.connect(lfoGain);
    lfoGain.connect(oscillator.frequency);
    
    oscillator.start();
    lfo.start();
  };

  const toggleAudio = () => {
    if (isPlaying) {
      if (audioContextRef.current) {
        audioContextRef.current.suspend();
      }
      setIsPlaying(false);
    } else {
      if (!audioContextRef.current || audioContextRef.current.state === 'closed') {
        createAmbientSound();
      }
      if (audioContextRef.current) {
        audioContextRef.current.resume();
      }
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (gainNodeRef.current) {
      if (isMuted) {
        gainNodeRef.current.gain.setValueAtTime(0.1, audioContextRef.current!.currentTime);
      } else {
        gainNodeRef.current.gain.setValueAtTime(0, audioContextRef.current!.currentTime);
      }
      setIsMuted(!isMuted);
    }
  };

  // Sound effect functions
  const playClickSound = () => {
    if (!audioContextRef.current) return;
    
    const audioContext = audioContextRef.current;
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
    if (!audioContextRef.current) return;
    
    const audioContext = audioContextRef.current;
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

  // Expose sound functions globally
  useEffect(() => {
    (window as any).cyberSounds = {
      click: playClickSound,
      hover: playHoverSound
    };

    return () => {
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
        <Button
          onClick={toggleAudio}
          size="sm"
          variant="outline"
          className="cyber-button bg-background/80 backdrop-blur-sm border-2 border-foreground hover:bg-foreground hover:text-background"
          style={{ fontFamily: 'var(--font-cyber-mono)' }}
        >
          {isPlaying ? 'STOP' : 'PLAY'} AMBIENT
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