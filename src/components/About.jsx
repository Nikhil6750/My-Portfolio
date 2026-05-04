import { motion } from "framer-motion";
import { SectionLabel } from "./SectionLabel";

export function About() {
  return (
    <section id="about" className="py-32 px-6 md:px-14 max-w-[1240px] mx-auto relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-12 md:gap-24 items-start">
        
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <SectionLabel>01 — About</SectionLabel>
          <h2 className="font-syne text-[clamp(2.2rem,4.5vw,4rem)] font-extrabold tracking-[-0.035em] leading-[1.02] mb-8">
            Builder.<br />Not a<br />
            <em className="not-italic text-gradient">tutorial</em><br />follower.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
        >
          <p className="text-[1rem] text-[#3a3a38] mb-6 leading-[1.75]">
            I'm Kotla Nikhil Reddy, a Computer Science undergraduate from Sphoorthy Engineering College, Hyderabad. I build data-driven systems, ML tools, and full-stack applications.
          </p>
          <p className="text-[1rem] text-[#3a3a38] mb-6 leading-[1.75]">
            My work focuses on practical projects — trading analytics, backtesting engines, real-time data pipelines, dashboards, and API-based applications. Not just things that look good. Things that work.
          </p>
          
          <div className="flex flex-col gap-3 mt-8 pt-8 border-t border-border">
            <div className="flex gap-4 items-baseline text-[0.85rem]">
              <span className="font-mono tracking-[0.04em] text-muted min-w-[7.5rem] text-[0.7rem]">Location</span>
              <span>Hyderabad, India</span>
            </div>
            <div className="flex gap-4 items-baseline text-[0.85rem]">
              <span className="font-mono tracking-[0.04em] text-muted min-w-[7.5rem] text-[0.7rem]">College</span>
              <span>Sphoorthy Engineering College</span>
            </div>
            <div className="flex gap-4 items-baseline text-[0.85rem]">
              <span className="font-mono tracking-[0.04em] text-muted min-w-[7.5rem] text-[0.7rem]">Graduating</span>
              <span>2027</span>
            </div>
            <div className="flex gap-4 items-baseline text-[0.85rem]">
              <span className="font-mono tracking-[0.04em] text-muted min-w-[7.5rem] text-[0.7rem]">Status</span>
              <span className="flex items-center">
                <span className="inline-block w-[6px] h-[6px] rounded-full bg-orange mr-2 animate-pulse-dot" />
                Open to internships
              </span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
