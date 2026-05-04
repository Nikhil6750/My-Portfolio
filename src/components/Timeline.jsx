import { motion } from "framer-motion";
import { SectionLabel } from "./SectionLabel";
import { timelineData } from "../data/timeline";

export function Timeline() {
  return (
    <section id="experience" className="py-32 px-6 md:px-14 max-w-[1240px] mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      >
        <SectionLabel>04 — Timeline</SectionLabel>
      </motion.div>

      <div className="mt-10 relative pl-8">
        {/* Vertical Line */}
        <div className="absolute left-0 top-2 bottom-2 w-[1px] bg-border" />

        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: index * 0.15 }}
            className="relative pb-12 pl-8 group"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[4.5px] top-[0.45rem] w-[9px] h-[9px] rounded-full bg-paper border-2 border-[rgba(13,13,13,0.18)] transition-all duration-300 group-hover:border-orange group-hover:bg-orange" />

            <span className="font-mono text-[clamp(0.8rem,0.8vw,0.95rem)] tracking-[0.15em] text-orange uppercase block mb-1.5">
              {item.year}
            </span>
            <h3 className="font-syne text-[clamp(1.1rem,1.1vw,1.3rem)] font-bold tracking-[-0.01em] mb-1.5">
              {item.title}
            </h3>
            <p className="text-[clamp(0.98rem,1vw,1.12rem)] text-muted leading-[1.75]">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
