const images = [
  "/images/gallery-item1.png",
  "/images/gallery-item2.png",
  "/images/gallery-item3.png",
];

function Gallery() {
  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <div className="section-title">
          <span>Galerie</span>
          <h2>Une atmosphère calme, lumineuse et soignée.</h2>
          <p>
            Découvrez l’univers Maison Liora à travers nos espaces, nos rituels
            et nos détails de finition.
          </p>
        </div>

        <div className="gallery-grid">
          {images.map((image, index) => (
            <div className="gallery-item" key={index}>
              <img src={image} alt={`Visuel salon ${index + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;