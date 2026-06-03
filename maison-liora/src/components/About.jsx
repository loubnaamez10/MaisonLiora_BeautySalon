function About() {
  return (
    <section id="about" className="about-section">
      <div className="container about-grid">
        <div className="about-image">
          <img
            src="/images/about-image.png"
            alt="Espace intérieur raffiné du salon Maison Liora"
            loading="lazy"
          />
        </div>

        <div className="about-content">
          <div className="section-title">
            <span>À propos</span>
            <h2>Un lieu imaginé pour ralentir, respirer et prendre soin de soi.</h2>
            <p>
              Maison Liora réunit des gestes précis, une écoute attentive et une
              ambiance élégante pour proposer une expérience beauté plus douce,
              plus calme et plus personnelle.
            </p>
          </div>

          <div className="about-features">
            <div>
              <h3>Diagnostic personnalisé</h3>
              <p>Chaque rendez-vous commence par une écoute attentive de vos envies et besoins.</p>
            </div>

            <div>
              <h3>Produits sélectionnés</h3>
              <p>Nous privilégions des soins de qualité pour des résultats visibles et durables.</p>
            </div>

            <div>
              <h3>Ambiance apaisante</h3>
              <p>Un espace lumineux et raffiné pensé pour offrir confort, calme et confiance.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;