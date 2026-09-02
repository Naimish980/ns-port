import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaDownload } from "react-icons/fa";
import { portfolio } from "../../data/portfolio";

const links = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.65 }}
      className={`reel-navbar ${scrolled ? "reel-navbar-scrolled" : ""}`}
    >
      <a href="#home" className="reel-logo">NS<span>.</span></a>

      <div className="reel-nav-links">
        {links.map((link) => (
          <button key={link.name} onClick={() => scrollToSection(link.href)}>
            {link.name}
          </button>
        ))}
      </div>

      <div className="reel-nav-right">
        <span className="availability"><i /> AVAILABLE</span>
        <a href={portfolio.resume} target="_blank" rel="noreferrer" className="reel-nav-resume">
          <FaDownload /> Resume
        </a>
      </div>

      <button className="reel-menu" onClick={() => setOpen(!open)} aria-label="Toggle menu">
        {open ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
      </button>

      {open && (
        <div className="reel-mobile-menu">
          {links.map((link) => (
            <button key={link.name} onClick={() => scrollToSection(link.href)}>{link.name}</button>
          ))}
          <a href={portfolio.resume} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
            <FaDownload /> Download Resume
          </a>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
