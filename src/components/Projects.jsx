import { motion } from "framer-motion";
import { SectionLabel } from "./SectionLabel";
import { projectsData } from "../data/projects";

export function Projects() {
  return (
    <section id="projects" className="py-32 px-6 md:px-14 max-w-[1240px] mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      >
        <SectionLabel>03 — Projects</SectionLabel>
      </motion.div>

      <div className="flex flex-col gap-16 mt-12">
        {projectsData.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 32, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1], delay: index * 0.15 }}
            className="bg-ink rounded-[1.5rem] p-8 md:p-14 relative overflow-hidden transition-all duration-500 hover:-translate-y-3 shadow-xl hover:shadow-2xl hover:shadow-orange/10 group border border-transparent hover:border-orange/20"
          >
            {/* Ambient Glows */}
            <div className="absolute -top-20 -right-20 w-[350px] h-[350px] rounded-full glow-effect pointer-events-none transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute -bottom-16 left-[20%] w-[250px] h-[250px] rounded-full glow-effect-red pointer-events-none transition-transform duration-700 group-hover:scale-110" />

            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 relative z-10">
              <p className="font-mono text-[clamp(0.66rem,0.7vw,0.76rem)] tracking-[0.12em] text-white/30">
                Project {project.id}
              </p>
              <div className="inline-flex items-center gap-2 font-mono text-[clamp(0.6rem,0.65vw,0.7rem)] tracking-[0.12em] uppercase text-orange bg-orange/5 border border-orange/20 px-4 py-1.5 rounded-full transition-colors duration-300 group-hover:border-orange/50 group-hover:bg-orange/10">
                {project.badge}
              </div>
            </div>

            <h3 className="font-syne text-[clamp(2.2rem,4.5vw,4rem)] font-extrabold tracking-[-0.04em] leading-none text-white mb-6 relative z-10">
              {project.title[0]}<span className="text-gradient">{project.title[1]}</span>
            </h3>

            {/* Structured Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-10 md:gap-16 relative z-10 mb-10">
              
              {/* Left Column: Descriptions */}
              <div className="flex flex-col gap-6">
                <div>
                  <h4 className="font-mono text-[clamp(0.65rem,0.7vw,0.75rem)] tracking-[0.1em] uppercase text-orange mb-2">The Problem</h4>
                  <p className="text-[clamp(1.02rem,1vw,1.18rem)] text-white/70 leading-[1.75]">
                    {project.problem}
                  </p>
                </div>
                <div>
                  <h4 className="font-mono text-[clamp(0.65rem,0.7vw,0.75rem)] tracking-[0.1em] uppercase text-orange mb-2">The Impact</h4>
                  <p className="text-[clamp(1.02rem,1vw,1.18rem)] text-white/70 leading-[1.75]">
                    {project.impact}
                  </p>
                </div>
                <div className="pt-4 border-t border-white/5">
                  <p className="text-[clamp(1.05rem,1.05vw,1.22rem)] text-white/50 leading-[1.8]">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Right Column: Technical Details */}
              <div className="flex flex-col gap-6 bg-black/20 p-6 rounded-2xl border border-white/5">
                <div>
                  <h4 className="font-mono text-[clamp(0.65rem,0.7vw,0.75rem)] tracking-[0.1em] uppercase text-white/40 mb-3">Key Features</h4>
                  <ul className="flex flex-col gap-2">
                    {project.keyFeatures?.map((feature, i) => (
                      <li key={i} className="text-[clamp(0.98rem,0.95vw,1.12rem)] text-white/60 flex items-start gap-2 leading-[1.7]">
                        <span className="text-orange mt-1">✦</span> {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {project.architecture && (
                  <div>
                    <h4 className="font-mono text-[clamp(0.65rem,0.7vw,0.75rem)] tracking-[0.1em] uppercase text-white/40 mb-3">Architecture</h4>
                    <p className="font-mono text-[clamp(0.7rem,0.75vw,0.85rem)] text-white/50 leading-[1.6] bg-black/40 p-3 rounded-lg border border-white/5">
                      {project.architecture}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-2 mb-10 relative z-10">
              {project.techStack?.map((tag) => (
                <span
                  key={tag}
                  className="bg-white/5 text-white/60 font-sans text-[clamp(0.88rem,0.85vw,1rem)] px-3 py-1.5 rounded-lg border border-white/10 transition-colors duration-200 hover:border-orange hover:text-orange hover:bg-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Links / Buttons */}
            <div className="flex flex-wrap gap-4 relative z-10">
              {project.links?.github && (
                <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-mono text-[clamp(0.78rem,0.8vw,0.95rem)] tracking-[0.08em] uppercase text-white bg-white/10 border border-white/20 px-5 py-2.5 rounded-full transition-all duration-300 hover:bg-white hover:text-ink hover:-translate-y-1">
                  GitHub ↗
                </a>
              )}
              {project.links?.liveDemo ? (
                <a href={project.links.liveDemo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-mono text-[clamp(0.78rem,0.8vw,0.95rem)] tracking-[0.08em] uppercase text-white bg-gradient-to-br from-orange to-red border border-transparent px-5 py-2.5 rounded-full transition-all duration-300 hover:shadow-[0_8px_20px_rgba(232,100,42,0.3)] hover:-translate-y-1">
                  Live Demo ↗
                </a>
              ) : (
                <span className="inline-flex items-center gap-2 font-mono text-[clamp(0.78rem,0.8vw,0.95rem)] tracking-[0.08em] uppercase text-white/40 bg-white/5 border border-white/10 px-5 py-2.5 rounded-full cursor-not-allowed">
                  Live Demo Coming Soon
                </span>
              )}
              {project.links?.caseStudy && (
                <a href={project.links.caseStudy} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-mono text-[clamp(0.78rem,0.8vw,0.95rem)] tracking-[0.08em] uppercase text-orange border-b border-orange/30 pb-1 mt-1 transition-all duration-200 hover:border-orange hover:gap-4 ml-2">
                  Case Study →
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
