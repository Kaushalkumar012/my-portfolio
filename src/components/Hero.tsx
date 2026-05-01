import { motion } from "framer-motion";
import { profile } from "../data";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
});

export default function Hero() {
  const scroll = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="hero">
      <div className="hero-glow1" />
      <div className="hero-glow2" />
      <div className="hero-glow3" />

      <div className="container">
        <div className="hero-content">
          <motion.div {...fade(0)}>
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              Available for opportunities
            </div>
          </motion.div>

          <motion.div {...fade(0.1)}>
            <img src={profile.avatar} alt={profile.name} className="hero-avatar" />
          </motion.div>

          <motion.h1 className="hero-title" {...fade(0.2)}>
            Hi, I'm <span className="grad">{profile.name}</span>
          </motion.h1>

          <motion.p className="hero-subtitle" {...fade(0.3)}>
            &lt; {profile.subtitle} /&gt;
          </motion.p>

          <motion.p className="hero-bio" {...fade(0.4)}>
            {profile.bio}
          </motion.p>

          <motion.div className="hero-btns" {...fade(0.5)}>
            <button className="btn-primary" onClick={() => scroll("projects")}>
              View My Work →
            </button>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn-outline">
              GitHub ↗
            </a>
            <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ borderColor: "rgba(167,139,250,0.4)", color: "#a78bfa" }}>
              📄 Resume
            </a>
          </motion.div>

          <motion.div className="hero-stats" {...fade(0.6)}>
            {[
              { num: "16+", label: "Repositories" },
              { num: "160+", label: "DSA Problems" },
              { num: "2+", label: "Internships" },
              { num: "TUF", label: "Profile ↗", href: profile.tuf },
              { num: "LC", label: "LeetCode ↗", href: profile.leetcode },
            ].map((s) => (
              s.href
                ? <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                    className="hero-stat" style={{ textDecoration: "none" }}>
                    <div className="hero-stat-num" style={{ color: "#22d3ee" }}>{s.num}</div>
                    <div className="hero-stat-label">{s.label}</div>
                  </a>
                : <div className="hero-stat" key={s.label}>
                    <div className="hero-stat-num">{s.num}</div>
                    <div className="hero-stat-label">{s.label}</div>
                  </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
