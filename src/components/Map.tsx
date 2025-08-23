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
          {/* Placeholder for map - replace with actual map integration */}
          <div className="w-full h-96 bg-muted border-4 border-foreground relative overflow-hidden cyber-scan">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-foreground mx-auto cyber-glow"></div>
                <p 
                  className="text-xl font-black uppercase tracking-widest"
                  style={{ fontFamily: 'var(--font-cyber-primary)' }}
                >
                  MAP_INTERFACE
                </p>
                <p 
                  className="text-sm uppercase tracking-wider text-muted-foreground cyber-flicker"
                  style={{ fontFamily: 'var(--font-cyber-mono)' }}
                >
                  INTEGRATE_WITH_MAPPING_API
                </p>
              </div>
            </div>
            
            {/* Grid overlay for cyber aesthetic */}
            <div className="absolute inset-0 opacity-10">
              <div className="grid grid-cols-12 grid-rows-8 h-full">
                {Array.from({ length: 96 }).map((_, i) => (
                  <div key={i} className="border border-foreground"></div>
                ))}
              </div>
            </div>
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