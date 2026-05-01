import { useState } from "react";
import { motion } from "framer-motion";
import { profile } from "../data";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "20d3d0f9-30ae-4b09-ba96-5cd4bf25d668",
          name: form.name,
          email: form.email,
          message: form.message,
          subject: `Portfolio Message from ${form.name}`,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const contacts = [
    { icon: "✉️", label: "Email",    value: profile.email,     href: `mailto:${profile.email}` },
    { icon: "🐙", label: "GitHub",   value: "Kaushalkumar012",  href: profile.github },
    { icon: "💼", label: "LinkedIn", value: "kaushalkumar012",  href: profile.linkedin },
    { icon: "🐦", label: "Twitter",  value: "@Kaushal00200",    href: profile.twitter },
    { icon: "⚔️", label: "TUF",      value: "kaushal00200",     href: profile.tuf },
    { icon: "🟡", label: "LeetCode", value: "_kaushalkumar__",  href: profile.leetcode },
    { icon: "📄", label: "Resume",   value: "View / Download",  href: profile.resume },
    { icon: "📍", label: "Location", value: profile.location,   href: "#" },
  ];

  return (
    <section id="contact">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="section-label">Get In Touch</p>
          <h2 className="section-title">Let's <span>Connect</span></h2>
          <p className="section-desc">
            Open to internships, collaborations, and full-time opportunities. Let's build something great together.
          </p>
        </motion.div>

        <div className="contact-grid">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="contact-item"
              >
                <div className="contact-icon">{c.icon}</div>
                <div>
                  <div className="contact-item-label">{c.label}</div>
                  <div className="contact-item-value">{c.value}</div>
                </div>
              </a>
            ))}
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {status === "success" ? (
              <div style={{
                display: "flex", flexDirection: "column", alignItems: "center",
                justifyContent: "center", gap: "1rem", padding: "3rem 1rem", textAlign: "center"
              }}>
                <div style={{ fontSize: "3rem" }}>✅</div>
                <p style={{ color: "#22d3ee", fontSize: "1.1rem", fontWeight: 700 }}>
                  Message Sent Successfully!
                </p>
                <p style={{ color: "#94a3b8", fontSize: "0.875rem" }}>
                  Thanks for reaching out. Kaushal will get back to you soon.
                </p>
              </div>
            ) : (
              <>
                <div className="form-group">
                  <label className="form-label">Name</label>
                  <input
                    className="form-input"
                    placeholder="Your name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-input"
                    placeholder="your@email.com"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea
                    className="form-textarea"
                    placeholder="Your message..."
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>
                <button type="submit" className="form-submit" disabled={status === "sending"}>
                  {status === "sending" ? "Sending..." : "Send Message →"}
                </button>
                {status === "error" && (
                  <p style={{ color: "#ef4444", fontSize: "0.85rem", textAlign: "center" }}>
                    Something went wrong. Please try again.
                  </p>
                )}
              </>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
