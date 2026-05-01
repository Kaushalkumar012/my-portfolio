import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "../data";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  const links = ["about", "skills", "projects", "experience", "contact"];

  return (
    <nav>
      <div className="container nav-inner">
        <a href="/" className="nav-logo">
          <div className="nav-logo-box">K</div>
          <span className="nav-logo-text">Kaushal Kumar</span>
        </a>

        <ul className="nav-links">
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l}`} onClick={(e) => { e.preventDefault(); scroll(l); }}>
                {l.charAt(0).toUpperCase() + l.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        <button className="nav-cta" onClick={() => scroll("contact")}>Hire Me</button>

        <a href={profile.resume} target="_blank" rel="noopener noreferrer"
          style={{ background: "rgba(167,139,250,0.15)", color: "#a78bfa", border: "1px solid rgba(167,139,250,0.3)",
            padding: "0.4rem 1rem", borderRadius: "8px", fontSize: "0.875rem", fontWeight: 600,
            textDecoration: "none", whiteSpace: "nowrap" }}>
          📄 Resume
        </a>

        <button className="nav-mobile-btn" onClick={() => setOpen(!open)} aria-label="menu">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            {open
              ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
              : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>
            }
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            style={{
              background: "rgba(5,5,10,0.97)", borderBottom: "1px solid rgba(99,102,241,0.15)",
              padding: "1rem 1.5rem", display: "flex", flexDirection: "column", gap: "1rem"
            }}
          >
            {links.map((l) => (
              <a key={l} href={`#${l}`} onClick={(e) => { e.preventDefault(); scroll(l); }}
                style={{ color: "#94a3b8", textDecoration: "none", fontWeight: 500, fontSize: "0.95rem" }}>
                {l.charAt(0).toUpperCase() + l.slice(1)}
              </a>
            ))}
            <a href={`mailto:${profile.email}`} style={{ color: "#6366f1", fontWeight: 600, textDecoration: "none" }}>
              Hire Me →
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
