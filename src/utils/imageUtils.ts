import React from 'react';

// Import all assets
import neonCityScene from '../assets/video/neot-city-scene.mp4';
import heroVideoPoster from '../assets/video/hero-video-poster.svg';
import cyberBrutalLogo from '../assets/logo/cyber-brutal-logo.svg';
import cyberDistrictMap from '../assets/map/cyber-district-map.svg';

// Image and video utility functions for handling placeholders and fallbacks

export const getGalleryImagePath = (query: string): string => {
  // Convert query to filename format
  const filename = query.replace(/\s+/g, '-').toLowerCase();
  return `/src/assets/gallery/${filename}.png`;
};

export const getMapImagePath = (): string => {
  return cyberDistrictMap;
};

export const getLogoPath = (): string => {
  return cyberBrutalLogo;
};

export const getHeroVideoPath = (): string => {
  return heroBackgroundMp4;
};

export const getHeroVideoWebmPath = (): string => {
  return heroBackgroundWebm;
};

export const getHeroVideoPosterPath = (): string => {
  return heroVideoPoster;
};

export const getNeonCityScenePath = (): string => {
  return neonCityScene;
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
