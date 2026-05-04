import { motion } from "framer-motion";

export function Button({ href, variant = "primary", children, className = "" }) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 px-[1.85rem] py-[0.95rem] rounded-full font-mono text-[clamp(0.78rem,0.8vw,0.95rem)] tracking-[0.08em] uppercase transition-all duration-300 relative overflow-hidden group";
  
  const variants = {
    primary:
      "bg-gradient-to-br from-orange to-red text-white border border-transparent shadow-[0_4px_12px_rgba(232,100,42,0.2)] hover:shadow-[0_12px_32px_rgba(232,100,42,0.4)] hover:-translate-y-1 hover:scale-[1.02]",
    ghost:
      "border border-[rgba(13,13,13,0.18)] text-ink bg-transparent hover:border-orange hover:text-orange hover:-translate-y-1 hover:shadow-sm hover:bg-orange/5",
  };

  return (
    <motion.a
      href={href}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      whileTap={{ scale: 0.98 }}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
      {variant === "primary" && (
        <span className="absolute inset-0 z-0 bg-gradient-to-tr from-red to-orange opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      )}
    </motion.a>
  );
}
