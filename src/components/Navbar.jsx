import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "../data/links";
import { scrollToSection } from "../hooks/useSmoothScroll";

export function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isHireDropdownOpen, setIsHireDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries.filter(entry => entry.isIntersecting);
        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: "-100px 0px -60% 0px",
        threshold: 0,
      }
    );

    const sections = document.querySelectorAll("section[id]");
    if (sections) {
      sections.forEach((section) => {
        if (section) observer.observe(section);
      });
    }

    return () => {
      if (sections) {
        sections.forEach((section) => {
          if (section) observer.unobserve(section);
        });
      }
      observer.disconnect();
    };
  }, []);

  // Handle click outside for dropdown
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsHireDropdownOpen(false);
      }
    };
    const handleEsc = (e) => {
      if (e.key === "Escape") setIsHireDropdownOpen(false);
    };
    
    if (isHireDropdownOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
      document.addEventListener("keydown", handleEsc);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEsc);
    };
  }, [isHireDropdownOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    if (href.startsWith("#")) {
      scrollToSection(href);
    }
  };

  const handleHireClick = () => {
    setIsHireDropdownOpen(!isHireDropdownOpen);
  };

  const handleEmailClick = (e) => {
    e.preventDefault();
    setIsHireDropdownOpen(false);
    scrollToSection("#contact");
    // Let Contact section handle expansion automatically or just scroll down
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      className="fixed top-0 left-0 right-0 z-[200] flex items-center justify-between px-6 md:px-14 py-4 md:py-5 nav-blur border-b border-border"
    >
      <a 
        href="#home" 
        onClick={(e) => handleNavClick(e, "#home")}
        className="font-syne font-[800] text-[clamp(1.05rem,1.1vw,1.35rem)] tracking-tight text-ink"
      >
        Kotla Nikhil <span className="text-orange">Reddy</span>
      </a>

      <ul className="hidden md:flex gap-10 list-none">
        {navLinks.map((link) => {
          const sectionId = link.href.substring(1);
          const isActive = activeSection === sectionId;
          return (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative font-mono text-[clamp(0.8rem,0.78vw,0.95rem)] tracking-[0.12em] uppercase transition-colors duration-300 group ${
                  isActive ? "text-orange" : "text-muted hover:text-ink"
                }`}
              >
                {link.name}
                <span 
                  className={`absolute -bottom-[3px] left-0 right-0 h-[1px] bg-orange origin-left transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`} 
                />
              </a>
            </li>
          );
        })}
      </ul>

      <div className="relative" ref={dropdownRef}>
        <button
          onClick={handleHireClick}
          aria-expanded={isHireDropdownOpen}
          className="bg-orange text-white font-mono text-[clamp(0.78rem,0.75vw,0.9rem)] tracking-[0.1em] uppercase px-6 py-3 rounded-full transition-all duration-250 hover:bg-red hover:scale-[1.04]"
        >
          Hire Me ↗
        </button>

        <AnimatePresence>
          {isHireDropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 top-[calc(100%+12px)] w-48 bg-card border border-border shadow-[0_12px_40px_rgba(13,13,13,0.12)] rounded-2xl overflow-hidden py-2"
            >
              <a
                href="#contact"
                onClick={handleEmailClick}
                className="block w-full text-left px-5 py-3 font-mono text-[0.72rem] tracking-[0.08em] uppercase text-ink hover:bg-tagBg transition-colors"
              >
                Email Me ✉
              </a>
              <a
                href="https://linkedin.com/in/KotlaNikhilReddy"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-left px-5 py-3 font-mono text-[0.72rem] tracking-[0.08em] uppercase text-ink hover:bg-tagBg transition-colors"
              >
                LinkedIn ↗
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
