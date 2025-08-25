import { getMapImagePath, handleImageError, handleImageLoad } from "../utils/imageUtils";

export default function Map() {
  return (
    <section id="map" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <h2 
          className="text-4xl md:text-6xl font-black uppercase tracking-widest mb-12 text-center cyber-glow"
          style={{ fontFamily: 'var(--font-cyber-display)' }}
        >
          LOCATION
        </h2>
        
        <div className="relative">
          {/* Cyber District Map */}
          <div className="w-full h-96 border-4 border-foreground relative overflow-hidden cyber-scan">
            <img 
              src={getMapImagePath()}
              alt="Cyber District Map"
              className="w-full h-full object-cover"
              onError={handleImageError}
              onLoad={handleImageLoad}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-magenta-400/5 pointer-events-none"></div>
          </div>
          
          <div className="absolute top-4 left-4 bg-foreground text-background px-4 py-2 cyber-glow">
            <p 
              className="font-black uppercase tracking-widest text-sm"
              style={{ fontFamily: 'var(--font-cyber-mono)' }}
            >
              123 CYBER DISTRICT, NEON CITY
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}