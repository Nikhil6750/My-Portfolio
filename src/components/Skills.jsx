import { motion } from "framer-motion";
import { SectionLabel } from "./SectionLabel";
import { skillsData } from "../data/skills";
import { Code, Layout, Server, Cpu, Database, Activity, Cloud } from "lucide-react";

const getIconForCategory = (category) => {
  switch(category) {
    case "Languages": return <Code size={18} />;
    case "Frontend": return <Layout size={18} />;
    case "Backend": return <Server size={18} />;
    case "Data Science & ML": return <Cpu size={18} />;
    case "Databases": return <Database size={18} />;
    case "Data Engineering": return <Activity size={18} />;
    case "Tools & Deployment": return <Cloud size={18} />;
    default: return <Code size={18} />;
  }
};

export function Skills() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.08 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <section id="skills" className="py-32 px-6 md:px-14 relative z-10 overflow-hidden">
      
      {/* Background Data Grid */}
      <div className="absolute inset-0 pointer-events-none -z-10 opacity-[0.15] data-grid-bg" />
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-orange/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-[1240px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <SectionLabel>02 — Skills</SectionLabel>
          
          <h2 className="mt-6 max-w-[60ch] text-[clamp(1.1rem,1.2vw,1.3rem)] font-light text-muted leading-relaxed">
            Core stack I use to build data-driven systems, ML tools, APIs, and dashboards.
          </h2>

        </motion.div>

        {/* 3-column grid for skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-14">
          {skillsData.map((cat, index) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: index * 0.1 }}
              className="bg-card border border-border rounded-2xl p-7 transition-all duration-300 relative overflow-hidden group hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(13,13,13,0.06)] min-h-[200px] flex flex-col noise-bg"
            >
              {/* Top Border Hover Effect */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-orange to-red scale-x-0 origin-left transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-x-100" />
              
              <div className="flex items-center justify-between mb-8 relative z-10">
                <div className="flex items-center gap-3 text-ink">
                  <span className="text-orange/80 group-hover:text-orange transition-colors duration-300">
                    {getIconForCategory(cat.category)}
                  </span>
                  <p className="font-mono text-[clamp(0.82rem,0.8vw,0.95rem)] tracking-[0.18em] uppercase text-muted group-hover:text-ink transition-colors duration-300">
                    {cat.category}
                  </p>
                </div>
                <span className="font-mono text-[0.65rem] text-muted/30 group-hover:text-orange/40 transition-colors duration-300">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              
              <motion.div 
                className="flex flex-wrap gap-2.5 relative z-10 mt-auto"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {cat.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={itemVariants}
                    className="bg-tagBg font-sans text-[clamp(0.9rem,0.9vw,1.05rem)] font-normal px-[0.85rem] py-[0.45rem] rounded-lg text-ink border border-transparent transition-all duration-300 hover:border-orange/40 hover:bg-orange/5 hover:text-orange hover:-translate-y-0.5 hover:shadow-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>

              {/* Tool count */}
              <div className="absolute bottom-5 right-6 text-[0.65rem] font-mono text-muted/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {cat.skills.length} tools
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
