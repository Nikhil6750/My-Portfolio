import { motion } from "framer-motion";

const randomFromSeed = (seed) => {
  const value = Math.sin(seed) * 10000;
  return value - Math.floor(value);
};

const particles = Array.from({ length: 12 }).map((_, i) => ({
  id: i,
  x: (randomFromSeed(i + 101) - 0.5) * 140,
  y: (randomFromSeed(i + 111) - 0.5) * 140,
  size: randomFromSeed(i + 121) * 2.5 + 1,
  duration: randomFromSeed(i + 131) * 3 + 2,
  delay: randomFromSeed(i + 141) * 2
}));

export function ScrollSun() {
  return (
    <motion.div 
      className="relative w-[280px] h-[280px] md:w-[380px] md:h-[380px] flex items-center justify-center scroll-sun-wrapper"
      initial={{ opacity: 0, y: 24, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Background Orbit Rings */}
      <div className="absolute inset-0 border border-orange/10 rounded-full scale-[1.25] animate-pulse-dot" />
      <div className="absolute inset-0 border border-orange/5 rounded-full scale-[1.5]" />
      
      {/* Ambient Glow */}
      <div className="absolute w-[180%] h-[180%] glow-effect rounded-full opacity-70 animate-pulse-dot" />

      {/* Core Sun Element */}
      <div className="relative w-44 h-44 md:w-56 md:h-56 bg-gradient-to-b from-orange to-red rounded-full shadow-[0_0_60px_rgba(232,100,42,0.45)] overflow-hidden border border-white/10">
        
        {/* Sun inner gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent" />

        {/* Reflection/Wave Lines inside Sun */}
        <div className="absolute bottom-0 w-full h-[55%] flex flex-col justify-end gap-[5px] md:gap-[7px] pb-3 opacity-90">
          {[...Array(7)].map((_, i) => (
            <div 
              key={i} 
              className="relative h-[2px] bg-paper rounded-full animate-sun-reflection"
              style={{ 
                animationDelay: `${i * 0.15}s`,
                width: '150%',
                opacity: 1 - (i * 0.12),
                marginLeft: '-25%' // Center the wider line
              }}
            />
          ))}
        </div>
      </div>

      {/* External Horizon Lines cutting across */}
      <div className="absolute bottom-[20%] md:bottom-[25%] w-[160%] left-1/2 -translate-x-1/2 flex flex-col gap-2 z-10 opacity-70">
        {[...Array(4)].map((_, i) => (
          <div 
            key={`hz-${i}`}
            className="h-[1px] bg-gradient-to-r from-transparent via-orange to-transparent w-full"
            style={{ 
              opacity: 1 - (i * 0.25),
              transform: `scaleX(${1 - (i * 0.15)})`
            }}
          />
        ))}
      </div>

      {/* Floating Data Particles */}
      {particles.map(p => (
        <motion.div
          key={p.id}
          className="absolute bg-orange rounded-full shadow-[0_0_4px_rgba(232,100,42,0.8)]"
          style={{
            width: p.size,
            height: p.size,
            left: `calc(50% + ${p.x}%)`,
            top: `calc(50% + ${p.y}%)`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.1, 0.7, 0.1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut"
          }}
        />
      ))}
    </motion.div>
  );
}
