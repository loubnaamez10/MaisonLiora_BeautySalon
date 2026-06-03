const services = [
  {
    title: "Coiffure signature",
    text: "Coupe, brushing et finition brillante pour un rendu naturel, souple et soigné.",
    price: "à partir de 2500 DA",
  },
  {
    title: "Soin visage éclat",
    text: "Nettoyage profond, massage et hydratation pour raviver l’éclat du teint.",
    price: "à partir de 4500 DA",
  },
  {
    title: "Manucure premium",
    text: "Soin complet des mains avec préparation, finition élégante et tenue durable.",
    price: "à partir de 2200 DA",
  },
];

function Services() {
  return (
    <section id="services">
      <div className="container">
        <div className="section-title">
          <span>Services</span>
          <h2>Des prestations pensées pour révéler votre présence.</h2>
          <p>
            Une sélection de soins essentiels, réalisés avec précision,
            douceur et attention au détail.
          </p>
        </div>

        <div className="cards-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <div className="service-footer">
                <span>{service.price}</span>
                <a href="#booking">Réserver</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;