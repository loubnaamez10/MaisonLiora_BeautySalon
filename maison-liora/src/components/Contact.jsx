function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container contact-grid">
        <div className="contact-card">
          <span>Contact</span>
          <h2>Retrouvez Maison Liora à Alger.</h2>
          <p>
            Un espace pensé pour votre confort, avec un accueil attentionné
            et une ambiance apaisante.
          </p>

          <div className="contact-info">
            <p><strong>Adresse :</strong> Bab Ezzouar, Alger</p>
            <p><strong>Téléphone :</strong> +213 667822379</p>
            <p><strong>Email :</strong> maisonliora@gmail.com</p>
            <p><strong>Horaires :</strong> Sam - Jeu, 9h00 à 16h00</p>
          </div>
        </div>

        <div className="contact-map">
          <iframe
            title="Carte Maison Liora"
            src="https://www.google.com/maps?q=Bab%20Ezzouar%20Alger&z=14&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Contact;