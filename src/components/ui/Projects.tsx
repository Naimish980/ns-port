import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Tilt from "react-parallax-tilt";
import {
  FaGithub,
  FaArrowRight,
  FaServer,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { portfolio } from "../../data/portfolio";
import SectionTitle from "./SectionTitle";

const Projects = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const stageY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [90, 0, -90]
  );

  const stageScale = useTransform(
    scrollYProgress,
    [0, 0.45, 1],
    [0.9, 1, 0.94]
  );

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="projects-video-section"
    >
      <SectionTitle
        title="Featured Projects"
        subtitle="Real-world IT infrastructure, networking, and cloud projects."
      />

      <div className="projects-video-stage">
        <div className="projects-video-grid" />
        <div className="projects-video-vignette" />

        <div className="projects-video-orb projects-orb-one" />
        <div className="projects-video-orb projects-orb-two" />

        <motion.div
          className="projects-video-scene"
          style={{
            y: stageY,
            scale: stageScale,
          }}
        >
          <div className="projects-scene-label">
            <span>SELECTED WORK</span>
            <span>PROJECTS / 0{portfolio.projects.length}</span>
          </div>

          <div className="projects-film-strip">
            {portfolio.projects.map((project, index) => (
              <motion.article
                key={index}
                className="project-video-frame"
                initial={{
                  opacity: 0,
                  y: 100,
                  rotateY: index % 2 === 0 ? -8 : 8,
                  scale: 0.94,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  rotateY: 0,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                transition={{
                  duration: 0.9,
                  delay: index * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <Tilt
                  glareEnable
                  glareMaxOpacity={0.16}
                  glareColor="#efc566"
                  scale={1.015}
                  tiltMaxAngleX={4}
                  tiltMaxAngleY={5}
                  transitionSpeed={1200}
                >
                  <div className="project-frame-inner">
                    <div className="project-frame-light" />
                    <div className="project-frame-glow" />

                    <div className="project-frame-number">
                      0{index + 1}
                    </div>

                    <div className="project-frame-content">
                      <div className="project-frame-top">
                        <div className="project-icon">
                          <FaServer />
                        </div>

                        <span className="project-category">
                          IT INFRASTRUCTURE
                        </span>
                      </div>

                      <div className="project-title-block">
                        <span className="project-overline">
                          FEATURED PROJECT
                        </span>

                        <h3>{project.title}</h3>

                        <div className="project-title-line" />
                      </div>

                      <p className="project-frame-description">
                        {project.description}
                      </p>

                      <div className="project-tech">
                        {project.technologies?.map((tech, i) => (
                          <motion.span
                            key={i}
                            className="project-tech-item"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                              delay: 0.35 + i * 0.05,
                            }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>

                      <div className="project-frame-footer">
                        <div className="project-actions">
                          <button className="project-action-primary">
                            <FaGithub />
                            <span>GitHub</span>
                          </button>

                          <button className="project-action-secondary">
                            <span>View Project</span>
                            <FaArrowRight />
                          </button>
                        </div>

                        <div className="project-external">
                          <FaExternalLinkAlt />
                        </div>
                      </div>
                    </div>
                  </div>
                </Tilt>
              </motion.article>
            ))}
          </div>

          <div className="projects-scene-end">
            <span />
            <p>SELECTED WORK / 2026</p>
            <span />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;