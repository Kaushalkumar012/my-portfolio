import { motion } from "framer-motion";
import { experience, sideProjects } from "../data";

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="section-label">My Journey</p>
          <h2 className="section-title">
            Career & <span>Experience</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="exp-list">
          {experience.map((e, i) => (
            <motion.div
              key={i}
              className="exp-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="exp-dot">{e.year.slice(-2)}</div>
              <div className="exp-content">
                <div className="exp-role">{e.role}</div>
                <div className="exp-company">{e.company} · {e.year}</div>
                <ul className="exp-points">
                  {e.points.map((p, j) => (
                    <li key={j}>{p}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Side Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{ marginTop: "3.5rem" }}
        >
          <p className="section-label">Highlighted Builds</p>
          <h3 className="section-title" style={{ fontSize: "1.6rem" }}>
            Side <span>Projects</span>
          </h3>
        </motion.div>

        <div className="side-projects-grid">
          {sideProjects.map((p, i) => (
            <motion.div
              key={p.title}
              className="side-project-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="side-project-header">
                <h4 className="side-project-title">{p.title}</h4>
                <a href={p.github} target="_blank" rel="noopener noreferrer" className="side-project-link">
                  ↗
                </a>
              </div>
              <div className="side-project-tags">
                {p.tags.map((t) => (
                  <span key={t} className="project-tag">{t}</span>
                ))}
              </div>
              <ul className="exp-points" style={{ marginTop: "0.75rem" }}>
                {p.points.map((pt, j) => (
                  <li key={j}>{pt}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
