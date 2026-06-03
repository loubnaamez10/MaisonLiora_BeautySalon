function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h3>Maison Liora</h3>
          <p>
            Salon de beauté premium à Alger, pensé pour offrir des soins élégants,
            précis et apaisants.
          </p>
        </div>

        <div>
          <h4>Navigation</h4>
          <ul>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">À propos</a></li>
            <li><a href="#gallery">Galerie</a></li>
            <li><a href="#testimonials">Avis clientes</a></li>
            <li><a href="#booking">Réservation</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <ul>
            <li>Bab Ezzouar, Alger</li>
            <li>+213 667822379</li>
            <li>maisonliora@gmail.com</li>
          </ul>
        </div>

      </div>

      <div className="container footer-bottom">
        <p>© 2026 Maison Liora. Tous droits réservés.</p>
        <div className="footer-butterfly" aria-hidden="true">
          <svg width="80" height="52" viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3">
              <path d="M30 40c-18-30 6-34 18-30 8 3 16 12 12 22-4 10-20 18-30 8z" />
              <path d="M90 40c18-30-6-34-18-30-8 3-16 12-12 22 4 10 20 18 30 8z" />
              <path d="M58 40c0 0 6-22 0-28" />
              <path d="M62 40c0 0-6-22 0-28" />
              <path d="M52 48c-6 6-16 10-24 8" />
              <path d="M68 48c6 6 16 10 24 8" />
            </g>
          </svg>
        </div>
      </div>
    </footer>
  );
}

export default Footer;