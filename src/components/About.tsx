import { motion } from "framer-motion";
import { profile } from "../data";

export default function About() {
  return (
    <section id="about" className="about-bg">
      <div className="container">
        <div className="about-grid">
          <motion.div
            className="about-img-wrap"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img src={profile.avatar} alt={profile.name} className="about-img" />
            <div className="about-img-badge">
              <span className="about-img-badge-icon">📍</span>
              <div className="about-img-badge-text">
                <strong>{profile.location}</strong>
                Open to remote
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="section-label">About Me</p>
            <h2 className="section-title">
              Passionate about <span>code & security</span>
            </h2>
            <p className="section-desc">{profile.bio}</p>

            <ul className="about-list">
              <li>Design and develop responsive web applications</li>
              <li>Build Python tools for cybersecurity and automation</li>
              <li>Solve complex DSA problems and algorithms</li>
              <li>Explore IoT systems and network security</li>
              <li>Contribute to open-source projects on GitHub</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
