import React from 'react';

// Import all assets
import neonCityScene from '../assets/video/neot-city-scene.mp4';
import heroVideoPoster from '../assets/video/hero-video-poster.svg';
//import cyberCityLogo from '../assets/logo/cyber-city-logo.svg';
import cyberDistrictMap from '../assets/map/cyber-district-map.svg';

// Import audio files
import cyberCityAudio from '../assets/audio/CyberCity.wav';

// Import gallery images
import futuristicTechnology from '../assets/gallery/futuristic-technology.png';
import cyberArchitecture from '../assets/gallery/cyber-architecture.png';
import neonLightsCity from '../assets/gallery/neon-lights-city.png';
import digitalArtAbstract from '../assets/gallery/digital-art-abstract.png';
import cyberpunkAesthetic from '../assets/gallery/cyberpunk-aesthetic.png';
import holographicDisplay from '../assets/gallery/holographic-display.png';

// Utility function to convert snake_case/kebab-case to camelCase
const toCamelCase = (str: string): string => {
  return str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase());
};

// Image and video utility functions for handling placeholders and fallbacks

export const getGalleryImagePath = (query: string): string => {
  // Convert query to camelCase and dynamically access the imported image
  const camelCaseQuery = toCamelCase(query);
  
  // Create an object with all imported images for dynamic access
  const images = {
    futuristicTechnology,
    cyberArchitecture,
    neonLightsCity,
    digitalArtAbstract,
    cyberpunkAesthetic,
    holographicDisplay,
  };
  
  // Dynamically access the image using the camelCase key
  return (images as any)[camelCaseQuery] || futuristicTechnology; // fallback to first image
};

export const getMapImagePath = (): string => {
  return cyberDistrictMap;
};


export const getHeroVideoPosterPath = (): string => {
  return heroVideoPoster;
};

export const getNeonCityScenePath = (): string => {
  return neonCityScene;
};

export const getCyberCityAudioPath = (): string => {
  return cyberCityAudio;
};

// Image loading error handler
export const handleImageError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
  const img = event.currentTarget;
  console.warn(`Failed to load image: ${img.src}`);
  
  // You can set a fallback image here if needed
  // img.src = '/fallback-image.svg';
};

// Image loading success handler
export const handleImageLoad = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
  const img = event.currentTarget;
  console.log(`Successfully loaded image: ${img.src}`);
};
