import React from 'react';

export default function Map() {
  return (
    <section id="map" className="py-24 bg-background relative overflow-hidden">
      {/* Cyber City Map SVG Background */}
      <div className="absolute inset-0 pointer-events-none w-full h-full">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Gradient Definitions */}
          <defs>
                         <linearGradient id="cityGradient" x1="0%" y1="0%" x2="100%" y2="100%">
               <stop offset="0%" stopColor="#000000" stopOpacity="0.8" />
               <stop offset="50%" stopColor="#1a1a1a" stopOpacity="0.6" />
               <stop offset="100%" stopColor="#000000" stopOpacity="0.8" />
             </linearGradient>
                         <linearGradient id="buildingGradient" x1="0%" y1="100%" x2="0%" y2="0%">
               <stop offset="0%" stopColor="#0a0a0a" stopOpacity="0.9" />
               <stop offset="100%" stopColor="#1a1a1a" stopOpacity="0.7" />
             </linearGradient>
            <linearGradient id="roadGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#333333" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#00ffff" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#333333" stopOpacity="0.6" />
            </linearGradient>
            <pattern id="gridPattern" x="0" y="0" width="2" height="2" patternUnits="userSpaceOnUse">
              <path d="M 2 0 L 0 0 0 2" fill="none" stroke="#00ffff" strokeWidth="0.05" opacity="0.3" />
            </pattern>
            <filter id="glow">
              <feGaussianBlur stdDeviation="0.5" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

                     {/* Background Grid */}
           <rect width="100%" height="100%" fill="url(#gridPattern)" />
           
           {/* City Background */}
           <rect width="100%" height="100%" fill="url(#cityGradient)" />
           
           {/* Map Grid Lines */}
           <g stroke="#00ffff" strokeWidth="0.05" opacity="0.2">
             {/* Vertical Grid Lines */}
             <line x1="10" y1="0" x2="10" y2="100" />
             <line x1="20" y1="0" x2="20" y2="100" />
             <line x1="30" y1="0" x2="30" y2="100" />
             <line x1="40" y1="0" x2="40" y2="100" />
             <line x1="50" y1="0" x2="50" y2="100" />
             <line x1="60" y1="0" x2="60" y2="100" />
             <line x1="70" y1="0" x2="70" y2="100" />
             <line x1="80" y1="0" x2="80" y2="100" />
             <line x1="90" y1="0" x2="90" y2="100" />
             
             {/* Horizontal Grid Lines */}
             <line x1="0" y1="10" x2="100" y2="10" />
             <line x1="0" y1="20" x2="100" y2="20" />
             <line x1="0" y1="30" x2="100" y2="30" />
             <line x1="0" y1="40" x2="100" y2="40" />
             <line x1="0" y1="50" x2="100" y2="50" />
             <line x1="0" y1="60" x2="100" y2="60" />
             <line x1="0" y1="70" x2="100" y2="70" />
             <line x1="0" y1="80" x2="100" y2="80" />
             <line x1="0" y1="90" x2="100" y2="90" />
           </g>
           
           {/* Map Coordinate Dots */}
           <g>
             {/* Major Intersection Dots */}
             <circle cx="10" cy="10" r="0.3" fill="#00ffff" opacity="0.4" />
             <circle cx="20" cy="20" r="0.3" fill="#00ffff" opacity="0.4" />
             <circle cx="30" cy="30" r="0.3" fill="#00ffff" opacity="0.4" />
             <circle cx="40" cy="40" r="0.3" fill="#00ffff" opacity="0.4" />
             <circle cx="50" cy="50" r="0.3" fill="#00ffff" opacity="0.4" />
             <circle cx="60" cy="60" r="0.3" fill="#00ffff" opacity="0.4" />
             <circle cx="70" cy="70" r="0.3" fill="#00ffff" opacity="0.4" />
             <circle cx="80" cy="80" r="0.3" fill="#00ffff" opacity="0.4" />
             <circle cx="90" cy="90" r="0.3" fill="#00ffff" opacity="0.4" />
             
             {/* Secondary Dots */}
             <circle cx="15" cy="15" r="0.2" fill="#ff00ff" opacity="0.3" />
             <circle cx="25" cy="25" r="0.2" fill="#ff00ff" opacity="0.3" />
             <circle cx="35" cy="35" r="0.2" fill="#ff00ff" opacity="0.3" />
             <circle cx="45" cy="45" r="0.2" fill="#ff00ff" opacity="0.3" />
             <circle cx="55" cy="55" r="0.2" fill="#ff00ff" opacity="0.3" />
             <circle cx="65" cy="65" r="0.2" fill="#ff00ff" opacity="0.3" />
             <circle cx="75" cy="75" r="0.2" fill="#ff00ff" opacity="0.3" />
             <circle cx="85" cy="85" r="0.2" fill="#ff00ff" opacity="0.3" />
             <circle cx="95" cy="95" r="0.2" fill="#ff00ff" opacity="0.3" />
           </g>
           
           {/* Map Border Lines */}
           <g stroke="#ffff00" strokeWidth="0.1" opacity="0.5">
             <rect x="2" y="2" width="96" height="96" fill="none" />
           </g>
           
           {/* Map Coordinate Labels */}
           <g fontSize="0.3" fill="#00ffff" opacity="0.4" fontFamily="monospace">
             <text x="1" y="8">0</text>
             <text x="1" y="18">1</text>
             <text x="1" y="28">2</text>
             <text x="1" y="38">3</text>
             <text x="1" y="48">4</text>
             <text x="1" y="58">5</text>
             <text x="1" y="68">6</text>
             <text x="1" y="78">7</text>
             <text x="1" y="88">8</text>
             <text x="1" y="98">9</text>
             
             <text x="8" y="2">0</text>
             <text x="18" y="2">1</text>
             <text x="28" y="2">2</text>
             <text x="38" y="2">3</text>
             <text x="48" y="2">4</text>
             <text x="58" y="2">5</text>
             <text x="68" y="2">6</text>
             <text x="78" y="2">7</text>
             <text x="88" y="2">8</text>
             <text x="98" y="2">9</text>
           </g>
           
           {/* Map Scale Indicators */}
           <g stroke="#ff00ff" strokeWidth="0.05" opacity="0.3">
             <line x1="5" y1="95" x2="15" y2="95" />
             <line x1="5" y1="94" x2="5" y2="96" />
             <line x1="15" y1="94" x2="15" y2="96" />
           </g>
           <text x="10" y="98" fontSize="0.2" fill="#ff00ff" opacity="0.4" fontFamily="monospace" textAnchor="middle">1KM</text>

                     {/* Main Roads */}
           <g className="animate-pulse" style={{ animationDuration: '30s' }}>
             <rect x="0" y="45" width="100" height="0.3" fill="url(#roadGradient)" opacity="0.6" />
             <rect x="0" y="55" width="100" height="0.3" fill="url(#roadGradient)" opacity="0.6" />
             <rect x="45" y="0" width="0.3" height="100" fill="url(#roadGradient)" opacity="0.6" />
             <rect x="55" y="0" width="0.3" height="100" fill="url(#roadGradient)" opacity="0.6" />
           </g>

                     {/* City Buildings - Horizontal View in Left Corner */}
           <g>
             {/* Downtown Skyscrapers - Left Cluster */}
             <rect x="5" y="25" width="0.8" height="8" fill="url(#buildingGradient)" opacity="0.7" />
             <rect x="8" y="20" width="1" height="10" fill="url(#buildingGradient)" opacity="0.7" />
             <rect x="12" y="15" width="0.8" height="12" fill="url(#buildingGradient)" opacity="0.7" />
             <rect x="16" y="22" width="0.6" height="9" fill="url(#buildingGradient)" opacity="0.7" />
             <rect x="20" y="18" width="0.7" height="11" fill="url(#buildingGradient)" opacity="0.7" />
             <rect x="24" y="12" width="0.9" height="13" fill="url(#buildingGradient)" opacity="0.7" />
             
             {/* Midtown Buildings - Left Cluster */}
             <rect x="28" y="28" width="1" height="7" fill="url(#buildingGradient)" opacity="0.6" />
             <rect x="32" y="25" width="0.8" height="9" fill="url(#buildingGradient)" opacity="0.6" />
             <rect x="36" y="30" width="0.6" height="6" fill="url(#buildingGradient)" opacity="0.6" />
             <rect x="40" y="26" width="0.7" height="8" fill="url(#buildingGradient)" opacity="0.6" />
             <rect x="44" y="22" width="0.9" height="10" fill="url(#buildingGradient)" opacity="0.6" />
             <rect x="48" y="28" width="0.8" height="7" fill="url(#buildingGradient)" opacity="0.6" />
             
             {/* Lower Buildings - Left Cluster */}
             <rect x="52" y="38" width="1.2" height="4" fill="url(#buildingGradient)" opacity="0.5" />
             <rect x="56" y="40" width="0.8" height="3" fill="url(#buildingGradient)" opacity="0.5" />
             <rect x="60" y="37" width="1" height="4.5" fill="url(#buildingGradient)" opacity="0.5" />
             <rect x="64" y="39" width="0.7" height="3.5" fill="url(#buildingGradient)" opacity="0.5" />
             <rect x="68" y="36" width="0.9" height="5" fill="url(#buildingGradient)" opacity="0.5" />
             <rect x="72" y="41" width="0.6" height="2.5" fill="url(#buildingGradient)" opacity="0.5" />
             
             {/* Residential Buildings - Left Cluster */}
             <rect x="76" y="35" width="0.8" height="4" fill="url(#buildingGradient)" opacity="0.4" />
             <rect x="80" y="38" width="0.6" height="3" fill="url(#buildingGradient)" opacity="0.4" />
             <rect x="84" y="36" width="0.7" height="4.5" fill="url(#buildingGradient)" opacity="0.4" />
             <rect x="88" y="39" width="0.5" height="2.5" fill="url(#buildingGradient)" opacity="0.4" />
             
             {/* Industrial Buildings - Left Cluster */}
             <rect x="92" y="40" width="1.5" height="3" fill="url(#buildingGradient)" opacity="0.6" />
             <rect x="96" y="42" width="1.2" height="2" fill="url(#buildingGradient)" opacity="0.6" />
             
             {/* Commercial Buildings - Left Cluster */}
             <rect x="3" y="30" width="0.9" height="7" fill="url(#buildingGradient)" opacity="0.6" />
             <rect x="7" y="32" width="0.7" height="5" fill="url(#buildingGradient)" opacity="0.6" />
             <rect x="11" y="29" width="1" height="8" fill="url(#buildingGradient)" opacity="0.6" />
             
             {/* Darker Skyscrapers - Left Cluster */}
             <rect x="15" y="18" width="0.6" height="10" fill="url(#buildingGradient)" opacity="0.8" />
             <rect x="19" y="14" width="0.8" height="12" fill="url(#buildingGradient)" opacity="0.8" />
             <rect x="23" y="20" width="0.7" height="9" fill="url(#buildingGradient)" opacity="0.8" />
             <rect x="27" y="16" width="0.9" height="11" fill="url(#buildingGradient)" opacity="0.8" />
             <rect x="31" y="22" width="0.6" height="8" fill="url(#buildingGradient)" opacity="0.8" />
             
             {/* Darker Midtown Buildings - Left Cluster */}
             <rect x="35" y="26" width="1.1" height="6" fill="url(#buildingGradient)" opacity="0.7" />
             <rect x="39" y="24" width="0.8" height="8" fill="url(#buildingGradient)" opacity="0.7" />
             <rect x="43" y="28" width="0.9" height="7" fill="url(#buildingGradient)" opacity="0.7" />
             <rect x="47" y="25" width="0.7" height="9" fill="url(#buildingGradient)" opacity="0.7" />
             <rect x="51" y="29" width="1" height="6" fill="url(#buildingGradient)" opacity="0.7" />
             
             {/* Darker Lower Buildings - Left Cluster */}
             <rect x="55" y="35" width="1.3" height="5" fill="url(#buildingGradient)" opacity="0.6" />
             <rect x="59" y="37" width="0.9" height="4" fill="url(#buildingGradient)" opacity="0.6" />
             <rect x="63" y="34" width="1.1" height="5.5" fill="url(#buildingGradient)" opacity="0.6" />
             <rect x="67" y="38" width="0.8" height="4.5" fill="url(#buildingGradient)" opacity="0.6" />
             <rect x="71" y="35" width="1" height="6" fill="url(#buildingGradient)" opacity="0.6" />
             
             {/* Darker Residential Buildings - Left Cluster */}
             <rect x="75" y="32" width="0.9" height="5" fill="url(#buildingGradient)" opacity="0.5" />
             <rect x="79" y="35" width="0.7" height="4" fill="url(#buildingGradient)" opacity="0.5" />
             <rect x="83" y="33" width="0.8" height="5.5" fill="url(#buildingGradient)" opacity="0.5" />
             <rect x="87" y="36" width="0.6" height="3.5" fill="url(#buildingGradient)" opacity="0.5" />
             <rect x="91" y="34" width="1.2" height="4.5" fill="url(#buildingGradient)" opacity="0.5" />
             
             {/* Darker Industrial Buildings - Left Cluster */}
             <rect x="95" y="38" width="1.4" height="3.5" fill="url(#buildingGradient)" opacity="0.7" />
             <rect x="99" y="40" width="1" height="2.5" fill="url(#buildingGradient)" opacity="0.7" />
             
             {/* Additional Skyscrapers - Center Cluster */}
             <rect x="25" y="10" width="1.2" height="15" fill="url(#buildingGradient)" opacity="0.8" />
             <rect x="29" y="8" width="0.9" height="17" fill="url(#buildingGradient)" opacity="0.8" />
             <rect x="33" y="12" width="1.1" height="13" fill="url(#buildingGradient)" opacity="0.8" />
             <rect x="37" y="6" width="0.8" height="19" fill="url(#buildingGradient)" opacity="0.8" />
             <rect x="41" y="14" width="1.3" height="11" fill="url(#buildingGradient)" opacity="0.8" />
             
             {/* Mid-Rise Buildings - Center Cluster */}
             <rect x="45" y="20" width="1.5" height="8" fill="url(#buildingGradient)" opacity="0.6" />
             <rect x="49" y="18" width="1.2" height="10" fill="url(#buildingGradient)" opacity="0.6" />
             <rect x="53" y="22" width="1.4" height="7" fill="url(#buildingGradient)" opacity="0.6" />
             <rect x="57" y="16" width="1.1" height="12" fill="url(#buildingGradient)" opacity="0.6" />
             <rect x="61" y="24" width="1.3" height="6" fill="url(#buildingGradient)" opacity="0.6" />
             
             {/* Lower Buildings - Center Cluster */}
             <rect x="65" y="30" width="1.6" height="4" fill="url(#buildingGradient)" opacity="0.5" />
             <rect x="69" y="28" width="1.3" height="6" fill="url(#buildingGradient)" opacity="0.5" />
             <rect x="73" y="32" width="1.5" height="3" fill="url(#buildingGradient)" opacity="0.5" />
             <rect x="77" y="26" width="1.2" height="8" fill="url(#buildingGradient)" opacity="0.5" />
             <rect x="81" y="34" width="1.4" height="2" fill="url(#buildingGradient)" opacity="0.5" />
             
             {/* Residential Complex - Right Cluster */}
             <rect x="85" y="25" width="2" height="9" fill="url(#buildingGradient)" opacity="0.4" />
             <rect x="89" y="22" width="1.7" height="11" fill="url(#buildingGradient)" opacity="0.4" />
             <rect x="93" y="28" width="1.9" height="7" fill="url(#buildingGradient)" opacity="0.4" />
             <rect x="97" y="20" width="1.6" height="13" fill="url(#buildingGradient)" opacity="0.4" />
             
             {/* Commercial District - Right Cluster */}
             <rect x="2" y="15" width="1.8" height="12" fill="url(#buildingGradient)" opacity="0.7" />
             <rect x="6" y="12" width="1.5" height="14" fill="url(#buildingGradient)" opacity="0.7" />
             <rect x="10" y="18" width="1.7" height="10" fill="url(#buildingGradient)" opacity="0.7" />
             <rect x="14" y="10" width="1.4" height="16" fill="url(#buildingGradient)" opacity="0.7" />
           </g>

                     {/* Building Windows - New Square Dots */}
           <g>
             {/* Downtown Skyscrapers - Square Windows */}
             <rect x="5.2" y="26.2" width="0.2" height="0.2" fill="#ffff00" opacity="0.6" />
             <rect x="5.2" y="29.2" width="0.2" height="0.2" fill="#ffff00" opacity="0.6" />
             <rect x="5.2" y="32.2" width="0.2" height="0.2" fill="#ffff00" opacity="0.6" />
             <rect x="5.2" y="35.2" width="0.2" height="0.2" fill="#ffff00" opacity="0.6" />
             
             <rect x="8.2" y="21.2" width="0.2" height="0.2" fill="#ffff00" opacity="0.6" />
             <rect x="8.2" y="25.2" width="0.2" height="0.2" fill="#ffff00" opacity="0.6" />
             <rect x="8.2" y="29.2" width="0.2" height="0.2" fill="#ffff00" opacity="0.6" />
             <rect x="8.2" y="33.2" width="0.2" height="0.2" fill="#ffff00" opacity="0.6" />
             
             <rect x="12.2" y="16.2" width="0.2" height="0.2" fill="#ffff00" opacity="0.6" />
             <rect x="12.2" y="20.2" width="0.2" height="0.2" fill="#ffff00" opacity="0.6" />
             <rect x="12.2" y="24.2" width="0.2" height="0.2" fill="#ffff00" opacity="0.6" />
             <rect x="12.2" y="28.2" width="0.2" height="0.2" fill="#ffff00" opacity="0.6" />
             <rect x="12.2" y="32.2" width="0.2" height="0.2" fill="#ffff00" opacity="0.6" />
             
             <rect x="16.2" y="23.2" width="0.2" height="0.2" fill="#ffff00" opacity="0.6" />
             <rect x="16.2" y="27.2" width="0.2" height="0.2" fill="#ffff00" opacity="0.6" />
             <rect x="16.2" y="31.2" width="0.2" height="0.2" fill="#ffff00" opacity="0.6" />
             
             <rect x="20.2" y="19.2" width="0.2" height="0.2" fill="#ffff00" opacity="0.6" />
             <rect x="20.2" y="23.2" width="0.2" height="0.2" fill="#ffff00" opacity="0.6" />
             <rect x="20.2" y="27.2" width="0.2" height="0.2" fill="#ffff00" opacity="0.6" />
             <rect x="20.2" y="31.2" width="0.2" height="0.2" fill="#ffff00" opacity="0.6" />
             <rect x="20.2" y="35.2" width="0.2" height="0.2" fill="#ffff00" opacity="0.6" />
             
             <rect x="24.2" y="13.2" width="0.2" height="0.2" fill="#ffff00" opacity="0.6" />
             <rect x="24.2" y="17.2" width="0.2" height="0.2" fill="#ffff00" opacity="0.6" />
             <rect x="24.2" y="21.2" width="0.2" height="0.2" fill="#ffff00" opacity="0.6" />
             <rect x="24.2" y="25.2" width="0.2" height="0.2" fill="#ffff00" opacity="0.6" />
             <rect x="24.2" y="29.2" width="0.2" height="0.2" fill="#ffff00" opacity="0.6" />
             <rect x="24.2" y="33.2" width="0.2" height="0.2" fill="#ffff00" opacity="0.6" />
             
             {/* Additional Skyscrapers - Square Windows */}
             <rect x="25.2" y="11.2" width="0.2" height="0.2" fill="#ffff00" opacity="0.6" />
             <rect x="25.2" y="15.2" width="0.2" height="0.2" fill="#ffff00" opacity="0.6" />
             <rect x="25.2" y="19.2" width="0.2" height="0.2" fill="#ffff00" opacity="0.6" />
             <rect x="25.2" y="23.2" width="0.2" height="0.2" fill="#ffff00" opacity="0.6" />
             
             <rect x="29.2" y="9.2" width="0.2" height="0.2" fill="#ffff00" opacity="0.6" />
             <rect x="29.2" y="13.2" width="0.2" height="0.2" fill="#ffff00" opacity="0.6" />
             <rect x="29.2" y="17.2" width="0.2" height="0.2" fill="#ffff00" opacity="0.6" />
             <rect x="29.2" y="21.2" width="0.2" height="0.2" fill="#ffff00" opacity="0.6" />
             <rect x="29.2" y="25.2" width="0.2" height="0.2" fill="#ffff00" opacity="0.6" />
             
             <rect x="33.2" y="13.2" width="0.2" height="0.2" fill="#ffff00" opacity="0.6" />
             <rect x="33.2" y="17.2" width="0.2" height="0.2" fill="#ffff00" opacity="0.6" />
             <rect x="33.2" y="21.2" width="0.2" height="0.2" fill="#ffff00" opacity="0.6" />
             <rect x="33.2" y="25.2" width="0.2" height="0.2" fill="#ffff00" opacity="0.6" />
             
             <rect x="37.2" y="7.2" width="0.2" height="0.2" fill="#ffff00" opacity="0.6" />
             <rect x="37.2" y="11.2" width="0.2" height="0.2" fill="#ffff00" opacity="0.6" />
             <rect x="37.2" y="15.2" width="0.2" height="0.2" fill="#ffff00" opacity="0.6" />
             <rect x="37.2" y="19.2" width="0.2" height="0.2" fill="#ffff00" opacity="0.6" />
             <rect x="37.2" y="23.2" width="0.2" height="0.2" fill="#ffff00" opacity="0.6" />
             
             <rect x="41.2" y="15.2" width="0.2" height="0.2" fill="#ffff00" opacity="0.6" />
             <rect x="41.2" y="19.2" width="0.2" height="0.2" fill="#ffff00" opacity="0.6" />
             <rect x="41.2" y="23.2" width="0.2" height="0.2" fill="#ffff00" opacity="0.6" />
             <rect x="41.2" y="27.2" width="0.2" height="0.2" fill="#ffff00" opacity="0.6" />
             
             {/* Mid-Rise Buildings - Square Windows */}
             <rect x="45.2" y="21.2" width="0.2" height="0.2" fill="#ffff00" opacity="0.5" />
             <rect x="45.2" y="25.2" width="0.2" height="0.2" fill="#ffff00" opacity="0.5" />
             <rect x="45.2" y="29.2" width="0.2" height="0.2" fill="#ffff00" opacity="0.5" />
             
             <rect x="49.2" y="19.2" width="0.2" height="0.2" fill="#ffff00" opacity="0.5" />
             <rect x="49.2" y="23.2" width="0.2" height="0.2" fill="#ffff00" opacity="0.5" />
             <rect x="49.2" y="27.2" width="0.2" height="0.2" fill="#ffff00" opacity="0.5" />
             
             <rect x="53.2" y="23.2" width="0.2" height="0.2" fill="#ffff00" opacity="0.5" />
             <rect x="53.2" y="27.2" width="0.2" height="0.2" fill="#ffff00" opacity="0.5" />
             
             <rect x="57.2" y="17.2" width="0.2" height="0.2" fill="#ffff00" opacity="0.5" />
             <rect x="57.2" y="21.2" width="0.2" height="0.2" fill="#ffff00" opacity="0.5" />
             <rect x="57.2" y="25.2" width="0.2" height="0.2" fill="#ffff00" opacity="0.5" />
             
             <rect x="61.2" y="25.2" width="0.2" height="0.2" fill="#ffff00" opacity="0.5" />
             <rect x="61.2" y="29.2" width="0.2" height="0.2" fill="#ffff00" opacity="0.5" />
             
             {/* Lower Buildings - Square Windows */}
             <rect x="65.2" y="31.2" width="0.2" height="0.2" fill="#ffff00" opacity="0.4" />
             <rect x="65.2" y="35.2" width="0.2" height="0.2" fill="#ffff00" opacity="0.4" />
             
             <rect x="69.2" y="29.2" width="0.2" height="0.2" fill="#ffff00" opacity="0.4" />
             <rect x="69.2" y="33.2" width="0.2" height="0.2" fill="#ffff00" opacity="0.4" />
             
             <rect x="73.2" y="33.2" width="0.2" height="0.2" fill="#ffff00" opacity="0.4" />
             
             <rect x="77.2" y="27.2" width="0.2" height="0.2" fill="#ffff00" opacity="0.4" />
             <rect x="77.2" y="31.2" width="0.2" height="0.2" fill="#ffff00" opacity="0.4" />
             <rect x="77.2" y="35.2" width="0.2" height="0.2" fill="#ffff00" opacity="0.4" />
             
             <rect x="81.2" y="35.2" width="0.2" height="0.2" fill="#ffff00" opacity="0.4" />
             
             {/* Residential Complex - Square Windows */}
             <rect x="85.2" y="26.2" width="0.2" height="0.2" fill="#ffff00" opacity="0.5" />
             <rect x="85.2" y="30.2" width="0.2" height="0.2" fill="#ffff00" opacity="0.5" />
             <rect x="85.2" y="34.2" width="0.2" height="0.2" fill="#ffff00" opacity="0.5" />
             
             <rect x="89.2" y="23.2" width="0.2" height="0.2" fill="#ffff00" opacity="0.5" />
             <rect x="89.2" y="27.2" width="0.2" height="0.2" fill="#ffff00" opacity="0.5" />
             <rect x="89.2" y="31.2" width="0.2" height="0.2" fill="#ffff00" opacity="0.5" />
             
             <rect x="93.2" y="29.2" width="0.2" height="0.2" fill="#ffff00" opacity="0.5" />
             <rect x="93.2" y="33.2" width="0.2" height="0.2" fill="#ffff00" opacity="0.5" />
             
             <rect x="97.2" y="21.2" width="0.2" height="0.2" fill="#ffff00" opacity="0.5" />
             <rect x="97.2" y="25.2" width="0.2" height="0.2" fill="#ffff00" opacity="0.5" />
             <rect x="97.2" y="29.2" width="0.2" height="0.2" fill="#ffff00" opacity="0.5" />
             <rect x="97.2" y="33.2" width="0.2" height="0.2" fill="#ffff00" opacity="0.5" />
             
             {/* Commercial District - Square Windows */}
             <rect x="2.2" y="16.2" width="0.2" height="0.2" fill="#ffff00" opacity="0.6" />
             <rect x="2.2" y="20.2" width="0.2" height="0.2" fill="#ffff00" opacity="0.6" />
             <rect x="2.2" y="24.2" width="0.2" height="0.2" fill="#ffff00" opacity="0.6" />
             <rect x="2.2" y="28.2" width="0.2" height="0.2" fill="#ffff00" opacity="0.6" />
             
             <rect x="6.2" y="13.2" width="0.2" height="0.2" fill="#ffff00" opacity="0.6" />
             <rect x="6.2" y="17.2" width="0.2" height="0.2" fill="#ffff00" opacity="0.6" />
             <rect x="6.2" y="21.2" width="0.2" height="0.2" fill="#ffff00" opacity="0.6" />
             <rect x="6.2" y="25.2" width="0.2" height="0.2" fill="#ffff00" opacity="0.6" />
             
             <rect x="10.2" y="19.2" width="0.2" height="0.2" fill="#ffff00" opacity="0.6" />
             <rect x="10.2" y="23.2" width="0.2" height="0.2" fill="#ffff00" opacity="0.6" />
             <rect x="10.2" y="27.2" width="0.2" height="0.2" fill="#ffff00" opacity="0.6" />
             
             <rect x="14.2" y="11.2" width="0.2" height="0.2" fill="#ffff00" opacity="0.6" />
             <rect x="14.2" y="15.2" width="0.2" height="0.2" fill="#ffff00" opacity="0.6" />
             <rect x="14.2" y="19.2" width="0.2" height="0.2" fill="#ffff00" opacity="0.6" />
             <rect x="14.2" y="23.2" width="0.2" height="0.2" fill="#ffff00" opacity="0.6" />
             <rect x="14.2" y="27.2" width="0.2" height="0.2" fill="#ffff00" opacity="0.6" />
           </g>

           {/* Neon Lights on Buildings */}
           <g className="animate-pulse" style={{ animationDuration: '8s' }}>
             <rect x="15.2" y="22" width="1.1" height="0.2" fill="#00ffff" opacity="0.6" />
             <rect x="15.2" y="25" width="1.1" height="0.2" fill="#ff00ff" opacity="0.6" />
             <rect x="15.2" y="28" width="1.1" height="0.2" fill="#ffff00" opacity="0.6" />
             
             <rect x="20.3" y="17" width="1.4" height="0.2" fill="#00ffff" opacity="0.6" />
             <rect x="20.3" y="21" width="1.4" height="0.2" fill="#ff00ff" opacity="0.6" />
             <rect x="20.3" y="25" width="1.4" height="0.2" fill="#ffff00" opacity="0.6" />
             
             <rect x="26.2" y="12" width="1.1" height="0.2" fill="#00ffff" opacity="0.6" />
             <rect x="26.2" y="16" width="1.1" height="0.2" fill="#ff00ff" opacity="0.6" />
             <rect x="26.2" y="20" width="1.1" height="0.2" fill="#ffff00" opacity="0.6" />
           </g>

                     {/* Traffic Lights */}
           <g className="animate-pulse" style={{ animationDuration: '12s' }}>
             <circle cx="47" cy="43" r="0.3" fill="#ff0000" opacity="0.7" />
             <circle cx="47" cy="45" r="0.3" fill="#ffff00" opacity="0.7" />
             <circle cx="47" cy="47" r="0.3" fill="#00ff00" opacity="0.7" />
             
             <circle cx="53" cy="43" r="0.3" fill="#00ff00" opacity="0.7" />
             <circle cx="53" cy="45" r="0.3" fill="#ffff00" opacity="0.7" />
             <circle cx="53" cy="47" r="0.3" fill="#ff0000" opacity="0.7" />
           </g>

                     

          {/* Data Streams */}
          <g className="animate-pulse" style={{ animationDuration: '4s' }}>
            <text x="5" y="8" fill="#00ffff" fontSize="0.4" opacity="0.4" fontFamily="monospace">
              <tspan x="5" dy="0">CYBER</tspan>
              <tspan x="5" dy="0.6">DISTRICT</tspan>
            </text>
            <text x="85" y="92" fill="#ff00ff" fontSize="0.4" opacity="0.4" fontFamily="monospace">
              <tspan x="85" dy="0">NEON</tspan>
              <tspan x="85" dy="1.2">CITY</tspan>
            </text>
          </g>

                     {/* Location Marker */}
           <g className="animate-ping" style={{ animationDuration: '2s' }}>
             <circle cx="50" cy="50" r="0.8" fill="#ff0000" opacity="0.7" />
             <circle cx="50" cy="50" r="1.5" fill="none" stroke="#ff0000" strokeWidth="0.1" opacity="0.5" />
             <circle cx="50" cy="50" r="2.5" fill="none" stroke="#ff0000" strokeWidth="0.05" opacity="0.3" />
           </g>

                     {/* Scanning Lines */}
           <g className="animate-pulse" style={{ animationDuration: '3s' }}>
             <line x1="0" y1="30" x2="100" y2="30" stroke="#00ffff" strokeWidth="0.05" opacity="0.2" />
             <line x1="0" y1="70" x2="100" y2="70" stroke="#ff00ff" strokeWidth="0.05" opacity="0.2" />
           </g>

                     {/* Corner Brackets */}
           <g>
             <path d="M 5 5 L 8 5 L 8 8" fill="none" stroke="#00ffff" strokeWidth="0.15" opacity="0.4" />
             <path d="M 95 5 L 92 5 L 92 8" fill="none" stroke="#00ffff" strokeWidth="0.15" opacity="0.4" />
             <path d="M 5 95 L 8 95 L 8 92" fill="none" stroke="#ff00ff" strokeWidth="0.15" opacity="0.4" />
             <path d="M 95 95 L 92 95 L 92 92" fill="none" stroke="#ff00ff" strokeWidth="0.15" opacity="0.4" />
           </g>

                     
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <h2 
          className="text-4xl md:text-6xl font-black uppercase tracking-widest mb-12 text-center cyber-glow"
          style={{ fontFamily: 'var(--font-cyber-display)' }}
        >
          LOCATION
        </h2>
        
                 <div className="relative">
           {/* Map Container */}
           <div 
             className="w-full h-96 border-4 border-foreground relative overflow-hidden cyber-scan" 
             style={{
               backgroundImage: `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI0MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9Im1hcEdyYWRpZW50IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzAwMDAwMDtzdG9wLW9wYWNpdHk6MC44IiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjUwJSIgc3R5bGU9InN0b3AtY29sb3I6IzFhMWExYTtzdG9wLW9wYWNpdHk6MC42IiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMDAwMDA7c3RvcC1vcGFjaXR5OjAuOCIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0idXJsKCNtYXBHcmFkaWVudCkiLz4KICAKICA8IS0tIEdyaWQgb3ZlcmxheSBmb3IgbWFwIGFlc3RoZXRpYyAtLT4KICA8ZyBvcGFjaXR5PSIwLjMiPgogICAgPGxpbmUgeDE9IjAiIHkxPSI1MCIgeDI9IjEyMDAiIHkyPSI1MCIgc3Ryb2tlPSIjMDBmZmZmIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDxsaW5lIHgxPSIwIiB5MT0iMTAwIiB4Mj0iMTIwMCIgeTI9IjEwMCIgc3Ryb2tlPSIjMDBmZmZmIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDxsaW5lIHgxPSIwIiB5MT0iMTUwIiB4Mj0iMTIwMCIgeTI9IjE1MCIgc3Ryb2tlPSIjMDBmZmZmIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDxsaW5lIHgxPSIwIiB5MT0iMjAwIiB4Mj0iMTIwMCIgeTI9IjIwMCIgc3Ryb2tlPSIjMDBmZmZmIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDxsaW5lIHgxPSIwIiB5MT0iMjUwIiB4Mj0iMTIwMCIgeTI9IjI1MCIgc3Ryb2tlPSIjMDBmZmZmIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDxsaW5lIHgxPSIwIiB5MT0iMzAwIiB4Mj0iMTIwMCIgeTI9IjMwMCIgc3Ryb2tlPSIjMDBmZmZmIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDxsaW5lIHgxPSIwIiB5MT0iMzUwIiB4Mj0iMTIwMCIgeTI9IjM1MCIgc3Ryb2tlPSIjMDBmZmZmIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIAogICAgPGxpbmUgeDE9IjEwMCIgeTE9IjAiIHgyPSIxMDAiIHkyPSI0MDAiIHN0cm9rZT0iIzAwZmZmZiIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8bGluZSB4MT0iMjAwIiB5MT0iMCIgeDI9IjIwMCIgeTI9IjQwMCIgc3Ryb2tlPSIjMDBmZmZmIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDxsaW5lIHgxPSIzMDAiIHkxPSIwIiB4Mj0iMzAwIiB5Mj0iNDAwIiBzdHJva2U9IiMwMGZmZmYiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgPGxpbmUgeDE9IjQwMCIgeTE9IjAiIHgyPSI0MDAiIHkyPSI0MDAiIHN0cm9rZT0iIzAwZmZmZiIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8bGluZSB4MT0iNTAwIiB5MT0iMCIgeDI9IjUwMCIgeTI9IjQwMCIgc3Ryb2tlPSIjMDBmZmZmIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDxsaW5lIHgxPSI2MDAiIHkxPSIwIiB4Mj0iNjAwIiB5Mj0iNDAwIiBzdHJva2U9IiMwMGZmZmYiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgPGxpbmUgeDE9IjcwMCIgeTE9IjAiIHgyPSI3MDAiIHkyPSI0MDAiIHN0cm9rZT0iIzAwZmZmZiIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8bGluZSB4MT0iODAwIiB5MT0iMCIgeDI9IjgwMCIgeTI9IjQwMCIgc3Ryb2tlPSIjMDBmZmZmIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDxsaW5lIHgxPSI5MDAiIHkxPSIwIiB4Mj0iOTAwIiB5Mj0iNDAwIiBzdHJva2U9IiMwMGZmZmYiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgPGxpbmUgeDE9IjEwMDAiIHkxPSIwIiB4Mj0iMTAwMCIgeTI9IjQwMCIgc3Ryb2tlPSIjMDBmZmZmIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDxsaW5lIHgxPSIxMTAwIiB5MT0iMCIgeDI9IjExMDAiIHkyPSI0MDAiIHN0cm9rZT0iIzAwZmZmZiIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgPC9nPgogIAogIDwhLS0gTWFwIGJvcmRlciAtLT4KICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI0MDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwZmZmZiIgc3Ryb2tlLXdpZHRoPSIzIiBvcGFjaXR5PSIwLjgiLz4KICAKICA8IS0tIE1hcCB0aXRsZSAtLT4KICA8dGV4dCB4PSI2MDAiIHk9IjE4MCIgZm9udC1mYW1pbHk9Im1vbm9zcGFjZSIgZm9udC1zaXplPSIzMiIgZmlsbD0iIzAwZmZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9ImJvbGQiPkNZQkVSIERJU1RSSUNUIE1BUDwvdGV4dD4KICA8dGV4dCB4PSI2MDAiIHk9IjIyMCIgZm9udC1mYW1pbHk9Im1vbm9zcGFjZSIgZm9udC1zaXplPSIxOCIgZmlsbD0iI2ZmMDBmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MTIwMHg0MDBweCAtIEZVVFVSSVNUSUMgQ0lUWSBMQVlPVVQ8L3RleHQ+CiAgPHRleHQgeD0iNjAwIiB5PSIyNTAiIGZvbnQtZmFtaWx5PSJtb25vc3BhY2UiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiNmZmZmMDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlBMQUNFSE9MREVSIE1BUCAtIElOVEVHUkFURSBBTkQgQ1lCRVIgQ0lUWSBCVUlMRElOR1M8L3RleHQ+CiAgCiAgPCEtLSBMb2NhdGlvbiBtYXJrZXJzIC0tPgogIDxjaXJjbGUgY3g9IjMwMCIgY3k9IjMwMCIgcj0iOCIgZmlsbD0iI2ZmMDBmZiIgb3BhY2l0eT0iMC44Ii8+CiAgPHRleHQgeD0iMzAwIiB5PSIzMjAiIGZvbnQtZmFtaWx5PSJtb25vc3BhY2UiIGZvbnQtc2l6ZT0iMTAiIGZpbGw9IiNmZjAwZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPk5FT04gRElTVFJJQ1Q8L3RleHQ+CiAgCiAgPGNpcmNsZSBjeD0iNjAwIiBjeT0iMjUwIiByPSI4IiBmaWxsPSIjMDBmZjAwIiBvcGFjaXR5PSIwLjgiLz4KICA8dGV4dCB4PSI2MDAiIHk9IjI3MCIgZm9udC1mYW1pbHk9Im1vbm9zcGFjZSIgZm9udC1zaXplPSIxMCIgZmlsbD0iIzAwZmYwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Q1lCRVIgQ0VOVEVSPC90ZXh0PgogIAogIDxjaXJjbGUgY3g9IjkwMCIgY3k9IjI4MCIgcj0iOCIgZmlsbD0iI2ZmZmYwMCIgb3BhY2l0eT0iMC44Ii8+CiAgPHRleHQgeD0iOTAwIiB5PSIzMDAiIGZvbnQtZmFtaWx5PSJtb25vc3BhY2UiIGZvbnQtc2l6ZT0iMTAiIGZpbGw9IiNmZmZmMDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlRFQ0ggWk9ORTwvdGV4dD4KPC9zdmc+Cg==")`,
               backgroundSize: 'cover',
               backgroundPosition: 'center center',
               backgroundRepeat: 'no-repeat'
             }}
           >
             <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-magenta-400/5 pointer-events-none"></div>
           </div>
          
          {/* Location Info Overlay */}
          <div className="absolute top-4 left-4 bg-foreground text-background px-4 py-2 cyber-glow">
            <p 
              className="font-black uppercase tracking-widest text-sm"
              style={{ fontFamily: 'var(--font-cyber-mono)' }}
            >
              123 CYBER DISTRICT, NEON CITY
            </p>
          </div>

          {/* Additional Info */}
          <div className="absolute bottom-4 right-4 bg-foreground text-background px-4 py-2 cyber-glow">
            <p 
              className="font-black uppercase tracking-widest text-xs"
              style={{ fontFamily: 'var(--font-cyber-mono)' }}
            >
              COORDINATES: 50.123, -50.456
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}