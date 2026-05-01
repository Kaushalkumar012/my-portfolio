import { profile } from "../data";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <p className="footer-text">
          © {new Date().getFullYear()} <span>{profile.name}</span> · Built with React + Framer Motion · All rights reserved.
        </p>
      </div>
    </footer>
  );
}
