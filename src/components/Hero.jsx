import { motion } from "framer-motion";
import { Button } from "./Button";
import { ScrollSun } from "./ScrollSun";

export function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col justify-center pt-24 px-6 md:px-14 relative z-10"
      style={{
        minHeight: "calc(100vh - 80px)",
        paddingBottom: "clamp(5rem, 12vh, 9rem)",
      }}
    >
      <div className="max-w-[1240px] w-full mx-auto grid grid-cols-1 md:grid-cols-[minmax(0,1.1fr)_minmax(300px,0.9fr)] gap-8 lg:gap-16 items-center">
        
        {/* Left Column: Content */}
        <div className="flex flex-col justify-center relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-mono text-[clamp(0.78rem,0.75vw,0.95rem)] tracking-[0.22em] uppercase text-muted mb-8 flex items-center gap-4"
          >
            <span className="w-[6px] h-[6px] rounded-full bg-orange inline-block animate-pulse-dot" />
            Available for Internships · 2026
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-syne text-[clamp(3.3rem,8vw,8rem)] font-extrabold leading-[0.95] tracking-[-0.045em] mb-8 text-ink"
          >
            Kotla <span className="text-gradient">Nikhil</span> Reddy.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-[56ch] text-[clamp(1.05rem,1.15vw,1.3rem)] font-light text-muted leading-[1.75] mb-10"
          >
            Computer Science undergraduate at Sphoorthy Engineering College, Hyderabad. I build
            data-driven systems, ML tools, and full-stack applications, graduating 2027.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-center gap-4 mt-[1.5rem] mb-[clamp(4rem,9vh,7rem)] md:mb-0"
          >
            <Button href="#projects" variant="primary">
              View Work ↓
            </Button>
            <Button href="#contact" variant="ghost">
              Get in Touch
            </Button>
          </motion.div>
        </div>

        {/* Right Column: ScrollSun */}
        {/* On mobile, sun opacity is reduced heavily or hidden, per requirements */}
        <div className="absolute inset-0 md:relative md:inset-auto flex justify-center md:justify-end items-center opacity-10 md:opacity-100 pointer-events-none -z-10 md:z-auto md:pointer-events-auto overflow-hidden md:overflow-visible">
          <ScrollSun />
        </div>
      </div>

      {/* Scroll Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="hidden md:flex absolute bottom-[clamp(2rem,5vh,4rem)] left-[clamp(1.5rem,8vw,6rem)] font-mono text-[clamp(0.62rem,0.6vw,0.72rem)] tracking-[0.18em] uppercase text-muted items-center gap-3 pointer-events-none"
      >
        <span className="w-10 h-[1px] bg-muted overflow-hidden relative">
          <span className="absolute top-0 left-[-100%] w-full h-full bg-orange animate-scan-right" />
        </span>
        Scroll to explore
      </motion.div>
    </section>
  );
}
