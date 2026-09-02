import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaCheckCircle,
  FaArrowDown,
} from "react-icons/fa";
import { portfolio } from "../../data/portfolio";
import SectionTitle from "./SectionTitle";

const Experience = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const sceneY = useTransform(scrollYProgress, [0, 0.5, 1], [80, 0, -80]);
  const sceneScale = useTransform(
    scrollYProgress,
    [0, 0.45, 1],
    [0.88, 1, 0.92]
  );
  const sceneRotateX = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [8, 0, -5]
  );

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="experience-video-section"
    >
      <SectionTitle
        title="Experience"
        subtitle="My professional journey and responsibilities."
      />

      <div className="experience-video-stage">
        {/* cinematic background */}
        <div className="experience-video-grid" />
        <div className="experience-video-vignette" />
        <div className="experience-video-orb experience-orb-one" />
        <div className="experience-video-orb experience-orb-two" />

        {/* vertical progress line */}
        <motion.div
          className="experience-scroll-line"
          style={{ scaleY: scrollYProgress }}
        />

        <motion.div
          className="experience-video-scene"
          style={{
            y: sceneY,
            scale: sceneScale,
            rotateX: sceneRotateX,
          }}
        >
          {/* top cinematic label */}
          <div className="experience-scene-label">
            <span>CAREER TIMELINE</span>
            <span>01 — 0{portfolio.experience.length}</span>
          </div>

          {portfolio.experience.map((exp, index) => (
            <motion.article
              key={index}
              className="experience-video-frame"
              initial={{
                opacity: 0,
                y: 100,
                rotateY: index % 2 === 0 ? -10 : 10,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                rotateY: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 1,
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {/* frame number */}
              <div className="experience-frame-number">
                0{index + 1}
              </div>

              {/* animated light */}
              <div className="experience-frame-light" />

              {/* glow */}
              <div className="experience-frame-glow" />

              <div className="experience-frame-content">
                <div className="experience-frame-header">
                  <div className="experience-role-block">
                    <span className="experience-overline">
                      PROFESSIONAL EXPERIENCE
                    </span>

                    <h3>{exp.role}</h3>

                    <div className="experience-company-line">
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="experience-date">
                    <FaCalendarAlt />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                <div className="experience-frame-divider" />

                <p className="experience-frame-description">
                  {exp.description}
                </p>

                {exp.responsibilities && (
                  <div className="experience-points">
                    {exp.responsibilities.map((item, i) => (
                      <motion.div
                        key={i}
                        className="experience-point"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: 0.3 + i * 0.08,
                          duration: 0.5,
                        }}
                      >
                        <span className="experience-point-icon">
                          <FaCheckCircle />
                        </span>

                        <span>{item}</span>
                      </motion.div>
                    ))}
                  </div>
                )}

                <div className="experience-frame-bottom">
                  <span>IT / INFRASTRUCTURE / SECURITY</span>

                  <span className="experience-frame-arrow">
                    <FaArrowDown />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}

          {/* bottom cinematic marker */}
          <div className="experience-scene-end">
            <span />
            <p>END OF EXPERIENCE</p>
            <span />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;