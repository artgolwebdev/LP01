import { useState, useEffect } from 'react';

export interface ScrollSection {
  id: string;
  name: string;
  color: string;
  bgColor: string;
  borderColor: string;
}

const sections: ScrollSection[] = [
  {
    id: 'hero',
    name: 'HERO',
    color: '#00ffff',
    bgColor: 'rgba(0, 255, 255, 0.1)',
    borderColor: '#00ffff'
  },
  {
    id: 'about',
    name: 'ABOUT',
    color: '#ff00ff',
    bgColor: 'rgba(255, 0, 255, 0.1)',
    borderColor: '#ff00ff'
  },
  {
    id: 'cta',
    name: 'CTA',
    color: '#ffff00',
    bgColor: 'rgba(255, 255, 0, 0.1)',
    borderColor: '#ffff00'
  },
  {
    id: 'contact',
    name: 'CONTACT',
    color: '#00ff00',
    bgColor: 'rgba(0, 255, 0, 0.1)',
    borderColor: '#00ff00'
  },
  {
    id: 'map',
    name: 'MAP',
    color: '#ff6b00',
    bgColor: 'rgba(255, 107, 0, 0.1)',
    borderColor: '#ff6b00'
  }
];

export function useScrollSections() {
  const [activeSection, setActiveSection] = useState<ScrollSection>(sections[0]);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Calculate scroll progress
      const progress = scrollTop / (documentHeight - windowHeight);
      setScrollProgress(Math.min(progress, 1));
      
      // Check if scrolled from top
      setIsScrolled(scrollTop > 50);

      // Find active section
      const sectionElements = sections.map(section => ({
        ...section,
        element: document.getElementById(section.id)
      })).filter(section => section.element);

      let currentSection = sections[0];
      
      for (const section of sectionElements) {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          const sectionTop = rect.top;
          const sectionHeight = rect.height;
          
          // Section is active if it's in the top half of the viewport
          if (sectionTop <= windowHeight / 2 && sectionTop + sectionHeight > windowHeight / 2) {
            currentSection = section;
            break;
          }
          
          // Also check if section is at the top of viewport
          if (sectionTop <= 100 && sectionTop + sectionHeight > 100) {
            currentSection = section;
          }
        }
      }
      
      setActiveSection(currentSection);
    };

    handleScroll(); // Initial call
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80; // Approximate header height
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return {
    activeSection,
    scrollProgress,
    isScrolled,
    sections,
    scrollToSection
  };
}