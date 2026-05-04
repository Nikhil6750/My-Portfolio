import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export function AnimatedBackground() {
  const prefersReducedMotion = useReducedMotion();
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    // Generate static bubble data once on mount so it doesn't cause hydration mismatch or erratic re-renders
    const newBubbles = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      size: Math.random() * 120 + 40, // 40px to 160px
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 10,
      duration: Math.random() * 20 + 25, // 25s to 45s
      opacity: Math.random() * 0.05 + 0.02, // 0.02 to 0.07 opacity
    }));
    setBubbles(newBubbles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-paper">
      
      {/* Sunset Glow */}
      <motion.div
        animate={prefersReducedMotion ? { opacity: 0.15 } : {
          scale: [1, 1.1, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full blur-[120px] bg-gradient-to-br from-orange to-red opacity-15"
      />
      
      {/* Ambient Glow */}
      <motion.div
        animate={prefersReducedMotion ? { opacity: 0.1 } : {
          scale: [1, 1.05, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full blur-[150px] bg-gradient-to-tr from-white to-orange opacity-10"
      />

      {/* Floating Transparent Bubbles */}
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          initial={{ y: "100vh", opacity: 0 }}
          animate={prefersReducedMotion ? { y: "50vh", opacity: bubble.opacity } : {
            y: ["100vh", "-20vh"],
            opacity: [0, bubble.opacity, bubble.opacity, 0],
            x: ["0px", `${Math.random() * 100 - 50}px`, "0px"]
          }}
          transition={prefersReducedMotion ? {} : {
            duration: bubble.duration,
            repeat: Infinity,
            delay: bubble.delay,
            ease: "linear",
          }}
          className="absolute rounded-full bg-white blur-[2px] border border-orange/10"
          style={{
            width: bubble.size,
            height: bubble.size,
            left: bubble.left,
          }}
        />
      ))}
    </div>
  );
}
