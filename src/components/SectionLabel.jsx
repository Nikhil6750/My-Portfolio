import { motion } from "framer-motion";
import { itemVariant } from "../hooks/useRevealAnimation";

export function SectionLabel({ children, justify = "start" }) {
  return (
    <motion.p
      variants={itemVariant}
      className={`font-mono text-[clamp(0.78rem,0.78vw,0.95rem)] tracking-[0.16em] uppercase text-muted mb-8 flex items-center gap-3 ${
        justify === "center" ? "justify-center" : "justify-start"
      }`}
    >
      {justify !== "center" && (
        <span className="inline-block w-[1.8rem] h-[1px] bg-orange shrink-0" />
      )}
      {children}
    </motion.p>
  );
}
