import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionLabel } from "./SectionLabel";
import { socialLinks } from "../data/links";
import { containerVariant, itemVariant } from "../hooks/useRevealAnimation";

export function Contact() {
  const [isEmailExpanded, setIsEmailExpanded] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleLinkClick = (e, linkName) => {
    if (linkName === "Email") {
      e.preventDefault();
      setIsEmailExpanded(!isEmailExpanded);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
    // TODO: Replace 'your@email.com' with the real email once available
    const mailtoUrl = `mailto:your@email.com?subject=${subject}&body=${body}`;
    
    window.location.href = mailtoUrl;
    setIsEmailExpanded(false);
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-14 text-center relative z-10">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariant}
      >
        <SectionLabel justify="center">05 — Contact</SectionLabel>
        
        <motion.h2
          variants={itemVariant}
          className="font-syne text-[clamp(3rem,9vw,8rem)] font-extrabold tracking-[-0.05em] leading-[0.92] mb-8 text-ink"
        >
          Let's{" "}
          <span className="text-gradient">Build</span>{" "}
          Together.
        </motion.h2>

        <motion.p
          variants={itemVariant}
          className="max-w-[42ch] mx-auto text-[clamp(1.02rem,1vw,1.18rem)] text-muted leading-[1.65] mb-14"
        >
          I'm actively looking for internship opportunities. If you're building something
          interesting or hiring — let's talk.
        </motion.p>

        <motion.div
          variants={itemVariant}
          className="flex justify-center gap-4 flex-wrap"
        >
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              onClick={(e) => handleLinkClick(e, link.name)}
              target={link.name !== "Email" ? "_blank" : undefined}
              rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
              className={`inline-flex items-center gap-2 font-mono text-[clamp(0.82rem,0.8vw,0.95rem)] tracking-[0.1em] uppercase px-5 py-2.5 rounded-full transition-all duration-300 ${
                link.name === "Email"
                  ? "bg-gradient-to-br from-orange to-red text-white hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(232,100,42,0.35)]"
                  : "text-ink border border-border hover:bg-ink hover:text-white hover:-translate-y-1"
              }`}
            >
              {link.name} {link.name !== "Email" ? "↗" : "✉"}
            </a>
          ))}
        </motion.div>

        {/* Expandable Email Form */}
        <AnimatePresence>
          {isEmailExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: "auto", marginTop: 40 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              className="overflow-hidden max-w-md mx-auto"
            >
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left p-6 md:p-8 bg-card border border-border rounded-2xl shadow-xl">
                <div>
                  <label htmlFor="name" className="block font-mono text-[0.65rem] tracking-wider text-muted mb-2 uppercase">Name</label>
                  <input required type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full bg-paper border border-border rounded-lg px-4 py-3 text-[0.95rem] text-ink focus:outline-none focus:border-orange transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block font-mono text-[0.65rem] tracking-wider text-muted mb-2 uppercase">Email</label>
                  <input required type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-paper border border-border rounded-lg px-4 py-3 text-[0.95rem] text-ink focus:outline-none focus:border-orange transition-colors" placeholder="john@example.com" />
                </div>
                <div>
                  <label htmlFor="message" className="block font-mono text-[0.65rem] tracking-wider text-muted mb-2 uppercase">Message</label>
                  <textarea required id="message" name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full bg-paper border border-border rounded-lg px-4 py-3 text-[0.95rem] text-ink focus:outline-none focus:border-orange transition-colors resize-none" placeholder="Hello there..." />
                </div>
                <button type="submit" className="mt-2 w-full bg-ink text-white font-mono text-[0.7rem] tracking-[0.1em] uppercase py-3.5 rounded-xl transition-all hover:bg-orange">
                  Send Message
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
