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
      </div>
    </footer>
  );
}

export default Footer;