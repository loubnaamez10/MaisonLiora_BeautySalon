function Hero() {
  return (
    <section id="home" className="hero hero-bg">
      <div className="hero-overlay">
        <div className="container hero-simple">
          <div className="hero-centerpiece">
            <span className="hero-badge">Maison de beauté à Alger</span>

            <h1>Un rituel de beauté pensé pour révéler votre élégance.</h1>

            <p>
              Coiffure, soins visage, manucure et mise en beauté dans un espace
              calme, lumineux et raffiné, conçu pour transformer chaque rendez-vous
              en un moment à part.
            </p>

            <div className="hero-actions">
              <a href="#booking" className="btn btn-primary">
                Prendre rendez-vous
              </a>
              <a href="#services" className="btn hero-glass-btn">
                Découvrir les soins
              </a>
            </div>

            <div className="hero-mini-infos">
              <span>Sur rendez-vous</span>
              <span>Soins signature</span>
              <span>Atmosphère apaisante</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;