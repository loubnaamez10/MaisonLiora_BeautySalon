import { useState, useEffect, useRef } from "react";

const testimonials = [
  {
    name: "Nesrine B.",
    text: "Une expérience très professionnelle. Le salon est magnifique et le résultat était exactement ce que je voulais.",
  },
  {
    name: "Lina M.",
    text: "J’ai adoré l’accueil, les conseils et le soin apporté à chaque détail. Je reviendrai sans hésiter.",
  },
  {
    name: "Sara K.",
    text: "Le service était impeccable, l’ambiance apaisante et la réservation très simple. Je recommande vivement.",
  },
  {
    name: "Amel D.",
    text: "J’ai aimé l’attention aux détails et le résultat naturel. On se sent vraiment écoutée.",
  },
  {
    name: "Bouchra.",
    text: "Un accueil chaleureux, une belle écoute et un résultat impeccable. J’ai adoré l’expérience.",
  },
  {
    name: "Ines T.",
    text: "Une belle expérience du début à la fin, avec une équipe douce et professionnelle.",
  },
  {
    name: "Meriem A.",
    text: "L’espace est très propre, élégant et chaleureux. Je suis ressortie ravie de mon soin.",
  },
  {
    name: "Yasmine H.",
    text: "Réservation facile, accueil parfait et prestation au top. Je reviendrai sans hésiter.",
  },
  {
    name: "Nadia R.",
    text: "Un vrai moment de détente avec un rendu impeccable. Tout est pensé pour le confort.",
  },
];

function chunkTestimonials(items, size) {
  const chunks = [];

  for (let i = 0; i < items.length; i += size) {
    chunks.push(items.slice(i, i + size));
  }

  return chunks;
}

function Testimonials() {
  const testimonialGroups = chunkTestimonials(testimonials, 3);
  const [index, setIndex] = useState(0);
  const slides = testimonialGroups.length;
  const autoplayRef = useRef(null);

  useEffect(() => {
    // autoplay every 5s
    autoplayRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % slides);
    }, 5000);

    return () => clearInterval(autoplayRef.current);
  }, [slides]);

  function goPrev() {
    setIndex((i) => (i - 1 + slides) % slides);
    resetAutoplay();
  }

  function goNext() {
    setIndex((i) => (i + 1) % slides);
    resetAutoplay();
  }

  function goTo(i) {
    setIndex(i);
    resetAutoplay();
  }

  function resetAutoplay() {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % slides);
    }, 5000);
  }

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <div className="section-title">
          <span>Avis clientes</span>
          <h2>Une adresse que l’on recommande avec confiance.</h2>
          <p>
            Des retours authentiques qui reflètent la qualité de l’expérience,
            du soin et de l’accueil.
          </p>
        </div>

        <div className="testimonials-slider">
          <button className="slider-nav prev" aria-label="Précédent" onClick={goPrev}>
            ‹
          </button>

          <div className="slides-wrapper">
            <div
              className="slides"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {testimonialGroups.map((group, groupIndex) => (
                <article className="slide" key={groupIndex}>
                  <div className="testimonial-bubbles">
                    {group.map((item) => (
                      <div className="testimonial-bubble" key={item.name}>
                        <p className="quote">“{item.text}”</p>
                        <h3>{item.name}</h3>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>

          <button className="slider-nav next" aria-label="Suivant" onClick={goNext}>
            ›
          </button>

          <div className="slider-dots">
            {testimonialGroups.map((_, i) => (
              <button
                key={i}
                className={`dot ${i === index ? "active" : ""}`}
                onClick={() => goTo(i)}
                aria-label={`Aller au groupe de témoignages ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;