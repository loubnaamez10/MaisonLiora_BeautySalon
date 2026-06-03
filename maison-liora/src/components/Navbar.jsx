import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="#home" className="logo">Maison Liora</a>

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