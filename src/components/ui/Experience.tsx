import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaCheckCircle,
  FaArrowDown,
} from "react-icons/fa";
import { portfolio } from "../../data/portfolio";
import SectionTitle from "./SectionTitle";

const Experience = () => {
  return (
    <section id="experience" className="experience-video-section">
      <SectionTitle
        title="Experience"
        subtitle="My professional journey and responsibilities."
      />

      <div className="experience-video-stage">
        <div className="experience-video-grid" />
        <div className="experience-video-vignette" />

        <div className="experience-video-scene">
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
                y: 45,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.65,
                delay: index * 0.08,
                ease: "easeOut",
              }}
            >
              <div className="experience-frame-content">
                <div className="experience-frame-number">
                  0{index + 1}
                </div>

                <div className="experience-frame-light" />

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
                        initial={{
                          opacity: 0,
                          x: -12,
                        }}
                        whileInView={{
                          opacity: 1,
                          x: 0,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          delay: 0.15 + i * 0.04,
                          duration: 0.35,
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
                  <span>
                    IT / INFRASTRUCTURE / SECURITY
                  </span>

                  <span className="experience-frame-arrow">
                    <FaArrowDown />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}

          <div className="experience-scene-end">
            <span />
            <p>END OF EXPERIENCE</p>
            <span />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;