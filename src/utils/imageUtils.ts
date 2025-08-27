import React from 'react';

// Image and video utility functions for handling placeholders and fallbacks

export const getGalleryImagePath = (query: string): string => {
  // Convert query to filename format
  const filename = query.replace(/\s+/g, '-').toLowerCase();
  return `/src/assets/gallery/${filename}.png`;
};

export const getMapImagePath = (): string => {
  return '/src/assets/map/cyber-district-map.svg';
};

export const getLogoPath = (): string => {
  return '/src/assets/logo/cyber-brutal-logo.svg';
};

export const getHeroVideoPath = (): string => {
  return '/src/assets/video/hero-background.mp4';
};

export const getHeroVideoWebmPath = (): string => {
  return '/src/assets/video/hero-background.webm';
};

export const getHeroVideoPosterPath = (): string => {
  return '/src/assets/video/hero-video-poster.svg';
};

export const getNeonCityScenePath = (): string => {
  return '/src/assets/video/neot-city-scene.mp4';
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
