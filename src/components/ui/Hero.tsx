import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";
import { portfolio } from "../../data/portfolio";
import {
  FaArrowDown,
  FaDownload,
  FaEnvelope,
  FaServer,
  FaShieldAlt,
} from "react-icons/fa";

const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 80,
    damping: 20,
    mass: 0.6,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 80,
    damping: 20,
    mass: 0.6,
  });

  const rotateY = useTransform(smoothX, [-1, 1], [-7, 7]);
  const rotateX = useTransform(smoothY, [-1, 1], [7, -7]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = event.clientX / window.innerWidth;
      const y = event.clientY / window.innerHeight;

      mouseX.set((x - 0.5) * 2);
      mouseY.set((y - 0.5) * 2);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section id="home" className="reel-hero">
      {/* Cinematic background */}
      <div className="reel-noise" />

      <div className="hero-ambient hero-ambient-one" />
      <div className="hero-ambient hero-ambient-two" />

      <motion.div
        className="hero-light-beam"
        animate={{
          x: ["-20%", "120%"],
          opacity: [0, 0.7, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="reel-hero-grid">

        {/* LEFT CONTENT */}
        <motion.div
          className="reel-copy"
          initial={{
            opacity: 0,
            x: -70,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <motion.p
            className="reel-kicker"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            IT ENGINEER · CYBERSECURITY · INFRASTRUCTURE
          </motion.p>

          <h1 className="reel-title">
            <motion.span
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.8 }}
            >
              NAIMISH
            </motion.span>

            <motion.span
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.38, duration: 0.8 }}
            >
              SINGH
            </motion.span>

            <motion.span
              className="reel-outline"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.51, duration: 0.8 }}
            >
              ENGINEER.
            </motion.span>
          </h1>

          <motion.p
            className="reel-intro"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.65,
              duration: 0.8,
            }}
          >
            {portfolio.tagline}
          </motion.p>

          <motion.div
            className="reel-actions"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.8,
              duration: 0.7,
            }}
          >
            <a
              href={portfolio.resume}
              target="_blank"
              rel="noreferrer"
              className="reel-btn reel-btn-primary"
            >
              <FaDownload />
              Download Resume
            </a>

            <button
              onClick={() => scrollTo("contact")}
              className="reel-btn reel-btn-secondary"
            >
              <FaEnvelope />
              Contact Me
            </button>
          </motion.div>

          <motion.div
            className="reel-stats"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1,
              duration: 0.8,
            }}
          >
            <div>
              <strong>2.5+</strong>
              <span>YEARS EXPERIENCE</span>
            </div>

            <div>
              <strong>18+</strong>
              <span>TECHNOLOGIES</span>
            </div>

            <div>
              <strong>8+</strong>
              <span>PROJECTS</span>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT CINEMATIC OBJECT */}
        <motion.div
          className="reel-portrait"
          style={{
            rotateX,
            rotateY,
          }}
          initial={{
            opacity: 0,
            scale: 0.75,
            y: 50,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          transition={{
            duration: 1.2,
            delay: 0.2,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <motion.div
            className="portrait-aura"
            animate={{
              scale: [0.9, 1.08, 0.9],
              opacity: [0.55, 1, 0.55],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Floating tech labels */}
          <motion.div
            className="hero-floating-card hero-card-one"
            animate={{
              y: [-8, 8, -8],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <FaServer />
            <span>INFRASTRUCTURE</span>
          </motion.div>

          <motion.div
            className="hero-floating-card hero-card-two"
            animate={{
              y: [8, -8, 8],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <FaShieldAlt />
            <span>SECURITY</span>
          </motion.div>

          {/* Orbit system */}
          <div className="orbit orbit-one">
            <i />
            <i />
            <i />
          </div>

          <div className="orbit orbit-two">
            <i />
            <i />
          </div>

          <div className="orbit orbit-three" />

          {/* Main portrait */}
          <motion.div
            className="portrait-frame"
            animate={{
              y: [-5, 5, -5],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <img
              src={portfolio.profileImage}
              alt={portfolio.name}
            />

            <div className="portrait-scan" />
          </motion.div>

          <div className="portrait-caption">
            <span>01</span>
            <span>NAIMISH SINGH</span>
          </div>
        </motion.div>
      </div>

      {/* Bottom navigation */}
      <motion.div
        className="reel-footer"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.2,
          duration: 0.8,
        }}
      >
        <button
          onClick={() => scrollTo("about")}
          className="scroll-label"
        >
          <span>SCROLL TO EXPLORE</span>
          <FaArrowDown />
        </button>

        <div className="footer-line">
          <span />
        </div>

        <span>
          INDIA · {new Date().getFullYear()}
        </span>
      </motion.div>
    </section>
  );
};

export default Hero;