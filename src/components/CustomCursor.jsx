import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const isCoarsePointer = () =>
  window.matchMedia("(pointer: coarse)").matches || window.innerWidth <= 768;

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile] = useState(isCoarsePointer);

  // Motion values for instant updates (zero lag)
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth springs for the outer ring (fast follow)
  const ringX = useSpring(cursorX, { stiffness: 400, damping: 28 });
  const ringY = useSpring(cursorY, { stiffness: 400, damping: 28 });

  useEffect(() => {
    if (isMobile) {
      return;
    }

    const mouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      if (
        e.target.closest("a") || 
        e.target.closest("button") || 
        e.target.closest("input") || 
        e.target.closest("textarea")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", mouseMove, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY, isMobile]);

  if (isMobile) return null;

  return (
    <>
      {/* Inner Dot - Instant */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-orange rounded-full pointer-events-none z-[9999]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? 1.8 : 1,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
      />
      {/* Outer Ring - Smooth */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border-[1.5px] border-orange rounded-full pointer-events-none z-[9998]"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          opacity: isHovering ? 0.2 : 0.55,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.2 }}
      />
    </>
  );
}
