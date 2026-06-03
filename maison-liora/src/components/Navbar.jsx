import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="#home" className="logo" aria-label="Maison Liora">
          <svg className="logo-image" width="64" height="44" viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <defs>
              <linearGradient id="g" x1="0" x2="1">
                <stop offset="0%" stopColor="currentColor" />
                <stop offset="100%" stopColor="currentColor" />
              </linearGradient>
            </defs>
            <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3">
              <path d="M30 40c-18-30 6-34 18-30 8 3 16 12 12 22-4 10-20 18-30 8z" />
              <path d="M90 40c18-30-6-34-18-30-8 3-16 12-12 22 4 10 20 18 30 8z" />
              <path d="M58 40c0 0 6-22 0-28" />
              <path d="M62 40c0 0-6-22 0-28" />
              <path d="M52 48c-6 6-16 10-24 8" />
              <path d="M68 48c6 6 16 10 24 8" />
            </g>
          </svg>
          <span className="logo-text">Maison Liora</span>
        </a>

        <nav className={`nav-links ${open ? "open" : ""}`}>
          <a href="#services" onClick={() => setOpen(false)}>Services</a>
          <a href="#about" onClick={() => setOpen(false)}>À propos</a>
          <a href="#gallery" onClick={() => setOpen(false)}>Galerie</a>
          <a href="#testimonials" onClick={() => setOpen(false)}>Avis</a>
          <a href="#faq" onClick={() => setOpen(false)}>FAQ</a>
          <a href="#booking" onClick={() => setOpen(false)}>Réserver</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        </nav>

        <div className="navbar-actions">
          <a href="#booking" className="btn btn-primary desktop-cta">Rendez-vous</a>

          <button
            className="menu-toggle"
            type="button"
            aria-label="Ouvrir le menu"
            onClick={() => setOpen(!open)}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;